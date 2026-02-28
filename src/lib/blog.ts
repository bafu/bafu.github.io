import type { BlogPost } from '../data/blog'
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

export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    const { data, content } = parseFrontmatter<BlogFrontmatter>(raw)
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      draft: data.draft ?? false,
      content
    }
  })
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => (a.date > b.date ? -1 : 1))

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
