/**
 * Build-time RSS feed generator.
 *
 * Reads blog post files from src/content/blog/ and produces an RSS 2.0 feed
 * covering all languages (en, zh-TW, ja). Each translated post is a separate
 * <item> so that feed readers in any language can discover content.
 *
 * Usage: npx tsx scripts/generate-rss.ts
 * Output: dist/feed.xml
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// ---------------------------------------------------------------------------
// Config — keep in sync with src/i18n/types.ts
// ---------------------------------------------------------------------------

const SITE_URL = 'https://bafu.github.io'
const FEED_TITLE = 'Bofu Chen — Blog'
const FEED_DESCRIPTION = 'Technical articles on AI, web3, and open source by Bofu Chen (陳伯符).'

type Language = 'en' | 'zh-TW' | 'ja'
const LANGUAGES: Language[] = ['en', 'zh-TW', 'ja']
const DEFAULT_LANGUAGE: Language = 'en'

const LANG_LABELS: Record<Language, string> = {
  en: 'English',
  'zh-TW': '繁體中文',
  ja: '日本語',
}

// ---------------------------------------------------------------------------
// Blog post discovery (shared logic with sitemap generator)
// ---------------------------------------------------------------------------

const BLOG_DIR = join(import.meta.dirname, '..', 'src', 'content', 'blog')

interface PostEntry {
  slug: string
  lang: Language
  title: string
  date: string
  description: string
  author: string
  tags: string[]
}

function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const result: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    // Simple key: value parsing (handles quoted and unquoted values)
    const kv = line.match(/^(\w+):\s*"?(.*?)"?\s*$/)
    if (kv) result[kv[1]] = kv[2]
  }
  return result
}

function parseTags(raw: string): string[] {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return []
  const tags: string[] = []
  const tagSection = match[1].match(/tags:\s*\n((?:\s+-\s+.+\n?)+)/)
  if (tagSection) {
    for (const tagLine of tagSection[1].matchAll(/\s+-\s+(.+)/g)) {
      tags.push(tagLine[1].trim())
    }
  }
  return tags
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

function discoverAllPosts(): PostEntry[] {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const entries: PostEntry[] = []

  for (const file of files) {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf-8')
    const fm = parseFrontmatter(raw)

    // Skip drafts
    if (fm.draft === 'true') continue

    const { slug, lang } = parseFilename(file)
    const tags = parseTags(raw)

    entries.push({
      slug,
      lang,
      title: fm.title ?? slug,
      date: fm.date ?? '',
      description: fm.description ?? '',
      author: fm.author ?? 'Bofu Chen',
      tags,
    })
  }

  // Sort by date descending
  return entries.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// ---------------------------------------------------------------------------
// XML helpers
// ---------------------------------------------------------------------------

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildPostUrl(slug: string, lang: Language): string {
  const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
  return `${SITE_URL}${prefix}/blog/${slug}`
}

function toRfc822(dateStr: string): string {
  // Input: "2026-04-04" → RFC 822: "Sat, 04 Apr 2026 00:00:00 GMT"
  const d = new Date(`${dateStr}T00:00:00Z`)
  return d.toUTCString()
}

// ---------------------------------------------------------------------------
// RSS generation
// ---------------------------------------------------------------------------

function generateRss(): string {
  const posts = discoverAllPosts()
  const now = new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = buildPostUrl(post.slug, post.lang)
      const langLabel = LANG_LABELS[post.lang]
      // Prefix title with language label for non-English posts
      const displayTitle =
        post.lang === DEFAULT_LANGUAGE
          ? post.title
          : `[${langLabel}] ${post.title}`

      const categories = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join('\n')

      return `    <item>
      <title>${escapeXml(displayTitle)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.description)}</description>
      <author>bafuchen@gmail.com (${escapeXml(post.author)})</author>
      <pubDate>${toRfc822(post.date)}</pubDate>
${categories}
    </item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const distDir = join(import.meta.dirname, '..', 'dist')
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

const rss = generateRss()
const outPath = join(distDir, 'feed.xml')
writeFileSync(outPath, rss, 'utf-8')

const itemCount = (rss.match(/<item>/g) || []).length
console.log(`✓ feed.xml generated (${itemCount} items) → ${outPath}`)
