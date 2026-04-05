export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  draft: boolean
  author: string
  image?: string
  content: string
}
