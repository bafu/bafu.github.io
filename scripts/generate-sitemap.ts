/**
 * Build-time sitemap generator.
 *
 * Reads blog post files from src/content/blog/ and produces a sitemap.xml
 * with hreflang alternate links for all supported languages.
 *
 * Usage: npx tsx scripts/generate-sitemap.ts
 * Output: dist/sitemap.xml
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// ---------------------------------------------------------------------------
// Config — keep in sync with src/i18n/types.ts
// ---------------------------------------------------------------------------

const SITE_URL = 'https://bafu.github.io'

type Language = 'en' | 'zh-TW' | 'ja'
const LANGUAGES: Language[] = ['en', 'zh-TW', 'ja']
const DEFAULT_LANGUAGE: Language = 'en'

/** Maps Language → hreflang value */
const HREFLANG_MAP: Record<Language, string> = {
  en: 'en',
  'zh-TW': 'zh-Hant',
  ja: 'ja',
}

// ---------------------------------------------------------------------------
// Blog post discovery
// ---------------------------------------------------------------------------

const BLOG_DIR = join(import.meta.dirname, '..', 'src', 'content', 'blog')

interface PostInfo {
  slug: string
  date: string
  langs: Language[]
}

function parseFrontmatterDate(raw: string): string {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return ''
  const dateMatch = match[1].match(/date:\s*"?(\d{4}-\d{2}-\d{2})"?/)
  return dateMatch ? dateMatch[1] : ''
}

function parseFilename(filename: string): { slug: string; lang: Language } {
  const langSuffixes: Record<string, Language> = { 'zh-TW': 'zh-TW', ja: 'ja' }
  const base = filename.replace(/\.md$/, '')
  for (const [suffix, lang] of Object.entries(langSuffixes)) {
    if (base.endsWith(`.${suffix}`)) {
      return { slug: base.slice(0, -(suffix.length + 1)), lang }
    }
  }
  return { slug: base, lang: DEFAULT_LANGUAGE }
}

function discoverPosts(): PostInfo[] {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const postMap = new Map<string, PostInfo>()

  for (const file of files) {
    const { slug, lang } = parseFilename(file)
    const raw = readFileSync(join(BLOG_DIR, file), 'utf-8')
    const date = parseFrontmatterDate(raw)

    // Check for draft frontmatter
    const draftMatch = raw.match(/draft:\s*(true|false)/)
    if (draftMatch && draftMatch[1] === 'true') continue

    if (!postMap.has(slug)) {
      postMap.set(slug, { slug, date, langs: [] })
    }
    const post = postMap.get(slug)!
    if (!post.langs.includes(lang)) post.langs.push(lang)
    if (date && !post.date) post.date = date
  }

  return Array.from(postMap.values())
}

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

function langPrefix(lang: Language): string {
  return lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
}

function fullUrl(path: string): string {
  return `${SITE_URL}${path}`
}

// ---------------------------------------------------------------------------
// XML generation
// ---------------------------------------------------------------------------

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

interface SitemapEntry {
  /** Canonical URL (default language or self) */
  loc: string
  lastmod?: string
  changefreq: string
  priority: string
  /** All language alternates including x-default */
  alternates: { hreflang: string; href: string }[]
}

function buildAlternates(pathWithoutLang: string, availableLangs: Language[]): SitemapEntry['alternates'] {
  const alts: SitemapEntry['alternates'] = []
  for (const lang of availableLangs) {
    alts.push({
      hreflang: HREFLANG_MAP[lang],
      href: fullUrl(`${langPrefix(lang)}${pathWithoutLang}`),
    })
  }
  // x-default points to the English (default) version
  alts.push({
    hreflang: 'x-default',
    href: fullUrl(pathWithoutLang),
  })
  return alts
}

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0]
  const entries: SitemapEntry[] = []

  // --- Static pages ---
  // Homepage
  for (const lang of LANGUAGES) {
    const path = langPrefix(lang) || '/'
    entries.push({
      loc: fullUrl(path === '/' ? '/' : `${path}/`),
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
      alternates: buildAlternates('/', LANGUAGES),
    })
  }

  // Blog list page
  for (const lang of LANGUAGES) {
    entries.push({
      loc: fullUrl(`${langPrefix(lang)}/blog`),
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8',
      alternates: buildAlternates('/blog', LANGUAGES),
    })
  }

  // --- Blog posts ---
  const posts = discoverPosts()
  for (const post of posts) {
    // Every post is available in all languages (falls back to English)
    // but alternates only list languages that have actual translations
    for (const lang of LANGUAGES) {
      entries.push({
        loc: fullUrl(`${langPrefix(lang)}/blog/${post.slug}`),
        lastmod: post.date || today,
        changefreq: 'monthly',
        priority: '0.7',
        alternates: buildAlternates(`/blog/${post.slug}`, post.langs),
      })
    }
  }

  // --- Build XML ---
  const urlEntries = entries
    .map((e) => {
      const altLinks = e.alternates
        .map(
          (a) =>
            `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${escapeXml(a.href)}" />`
        )
        .join('\n')
      return `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
${altLinks}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const distDir = join(import.meta.dirname, '..', 'dist')
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

const sitemap = generateSitemap()
const outPath = join(distDir, 'sitemap.xml')
writeFileSync(outPath, sitemap, 'utf-8')

const lineCount = sitemap.split('\n').length
console.log(`✓ sitemap.xml generated (${lineCount} lines) → ${outPath}`)
