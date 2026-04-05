import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useI18n } from '../i18n'
import { getPostBySlug } from '../lib/blog'
import { formatDate } from '../lib/formatDate'
import { readingTime, formatReadingTime } from '../lib/readingTime'
import LocaleLink from '../components/LocaleLink'

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { lang, t, localePath } = useI18n()
  const post = slug ? getPostBySlug(slug, lang) : undefined

  // Update document title and meta for this specific post
  useEffect(() => {
    if (!post) return

    const siteName = t('meta.title')
    document.title = `${post.title} — ${siteName}`

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', post.description)
    setOg('og:title', post.title)
    setOg('og:description', post.description)
    setOg('og:type', 'article')

    // Restore generic meta when leaving the page
    return () => {
      document.title = siteName
      setMeta('description', t('meta.description'))
      setOg('og:title', siteName)
      setOg('og:description', t('meta.description'))
    }
  }, [post, t])

  if (!post) {
    return <Navigate to={localePath('/blog')} replace />
  }

  const minutes = readingTime(post.content, lang)

  return (
    <main id="main-content" className="container py-20 sm:py-28">
      <LocaleLink
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-deep-blue"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        {t('blog.backToBlog')}
      </LocaleLink>

      <article className="mt-8 max-w-3xl">
        <header>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <time>{formatDate(post.date, lang)}</time>
            <span aria-hidden="true" className="text-border">|</span>
            <span>{formatReadingTime(minutes, lang)}</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  style={{ borderRadius: '0.25rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="blog-prose mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  )
}

export default BlogPostPage
