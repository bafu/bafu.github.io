import { useEffect, useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useI18n } from '../i18n'
import { HTML_LANG_MAP, DEFAULT_LANGUAGE, LANGUAGES, type Language } from '../i18n/types'
import { getPostBySlug } from '../lib/blog'
import { formatDate } from '../lib/formatDate'
import { readingTime, formatReadingTime } from '../lib/readingTime'
import LocaleLink from '../components/LocaleLink'
import JsonLd from '../components/JsonLd'
import { setMeta, setOg, removeArticleMeta, addArticleTag } from '../components/MetaTags'

const SITE_URL = 'https://bafu.github.io'

function buildPostUrl(slug: string, lang: Language): string {
  const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
  return `${SITE_URL}${prefix}/blog/${slug}`
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { lang, t, localePath } = useI18n()
  const post = slug ? getPostBySlug(slug, lang) : undefined

  // Update document title and meta for this specific post
  useEffect(() => {
    if (!post || !slug) return

    const siteName = t('meta.title')
    document.title = `${post.title} — ${siteName}`

    setMeta('description', post.description)
    setOg('og:title', post.title)
    setOg('og:description', post.description)
    setOg('og:type', 'article')
    setOg('og:url', buildPostUrl(slug, lang))
    if (post.image) {
      setOg('og:image', `${SITE_URL}${post.image}`)
    }

    // Article-specific meta
    removeArticleMeta()
    if (post.date) {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'article:published_time')
      meta.content = post.date
      document.head.appendChild(meta)
    }
    {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'article:author')
      meta.content = post.author
      document.head.appendChild(meta)
    }
    for (const tag of post.tags) {
      addArticleTag(tag)
    }

    // Restore generic meta when leaving the page
    return () => {
      document.title = siteName
      setMeta('description', t('meta.description'))
      setOg('og:title', siteName)
      setOg('og:description', t('meta.description'))
      setOg('og:type', 'website')
      setOg('og:url', SITE_URL)
      removeArticleMeta()
    }
  }, [post, slug, lang, t])

  // JSON-LD structured data for BlogPosting
  const jsonLd = useMemo(() => {
    if (!post || !slug) return null

    const availableLangs = LANGUAGES.filter(
      (l) => getPostBySlug(slug, l) !== undefined
    )

    const translationOf = availableLangs
      .filter((l) => l !== lang)
      .map((l) => ({
        '@type': 'BlogPosting',
        url: buildPostUrl(slug, l),
        inLanguage: HTML_LANG_MAP[l],
      }))

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        name: post.author,
        url: SITE_URL,
      },
      url: buildPostUrl(slug, lang),
      inLanguage: HTML_LANG_MAP[lang],
      keywords: post.tags,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': buildPostUrl(slug, lang),
      },
      ...(translationOf.length > 0 ? { translationOfWork: translationOf } : {}),
    }
  }, [post, slug, lang])

  if (!post) {
    return <Navigate to={localePath('/blog')} replace />
  }

  const minutes = readingTime(post.content, lang)

  return (
    <main id="main-content" className="container py-20 sm:py-28">
      {jsonLd && <JsonLd data={jsonLd} />}
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
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
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
