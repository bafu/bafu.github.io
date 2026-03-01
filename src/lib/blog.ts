import type { BlogPost } from '../data/blog'
import type { Language } from '../i18n/types'
import { DEFAULT_LANGUAGE } from '../i18n/types'
import { parseFrontmatter } from './parseFrontmatter'

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

type BlogFrontmatter = {
  title: string
  date: string
  description: string
  tags?: string[]
  draft?: boolean
}

function parseFilename(filename: string): { slug: string; lang: Language } {
  // hello-world.zh-TW.md → { slug: 'hello-world', lang: 'zh-TW' }
  // hello-world.ja.md → { slug: 'hello-world', lang: 'ja' }
  // hello-world.md → { slug: 'hello-world', lang: 'en' }
  const langSuffixes: Record<string, Language> = {
    'zh-TW': 'zh-TW',
    'zh-CN': 'zh-CN',
    ja: 'ja'
  }

  const base = filename.replace(/\.md$/, '')
  for (const [suffix, lang] of Object.entries(langSuffixes)) {
    if (base.endsWith(`.${suffix}`)) {
      return { slug: base.slice(0, -(suffix.length + 1)), lang }
    }
  }
  return { slug: base, lang: DEFAULT_LANGUAGE }
}

// Build a map: slug → lang → BlogPost
const postMap = new Map<string, Map<Language, BlogPost>>()

for (const [path, raw] of Object.entries(modules)) {
  const filename = path.split('/').pop()!
  const { slug, lang } = parseFilename(filename)
  const { data, content } = parseFrontmatter<BlogFrontmatter>(raw)

  const post: BlogPost = {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    draft: data.draft ?? false,
    content
  }

  if (import.meta.env.DEV || !post.draft) {
    if (!postMap.has(slug)) postMap.set(slug, new Map())
    postMap.get(slug)!.set(lang, post)
  }
}

export function getPosts(lang: Language): BlogPost[] {
  const result: BlogPost[] = []
  for (const langMap of postMap.values()) {
    const post = langMap.get(lang) ?? langMap.get(DEFAULT_LANGUAGE)
    if (post) result.push(post)
  }
  return result.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string, lang: Language): BlogPost | undefined {
  const langMap = postMap.get(slug)
  if (!langMap) return undefined
  return langMap.get(lang) ?? langMap.get(DEFAULT_LANGUAGE)
}

// Keep backward-compatible exports for any other consumers
export const posts = getPosts(DEFAULT_LANGUAGE)
