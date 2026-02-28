import { parse } from 'yaml'

type FrontmatterResult<T = Record<string, unknown>> = {
  data: T
  content: string
}

export function parseFrontmatter<T = Record<string, unknown>>(raw: string): FrontmatterResult<T> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return { data: {} as T, content: raw }
  }
  const data = parse(match[1]) as T
  const content = match[2]
  return { data, content }
}
