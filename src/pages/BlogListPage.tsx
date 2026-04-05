import { useEffect, useMemo } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import LocaleLink from '../components/LocaleLink'
import JsonLd from '../components/JsonLd'
import { useI18n } from '../i18n'
import { DEFAULT_LANGUAGE, type Language } from '../i18n/types'
import { getPosts } from '../lib/blog'
import { formatDate } from '../lib/formatDate'
import { readingTime, formatReadingTime } from '../lib/readingTime'
import { setMeta, setOg } from '../components/MetaTags'

const SITE_URL = 'https://bafu.github.io'

function buildUrl(path: string, lang: Language): string {
  const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
  return `${SITE_URL}${prefix}${path}`
}

const BlogListPage = () => {
  const { lang, t } = useI18n()
  const posts = getPosts(lang)

  // Update page title and meta for the blog list
  useEffect(() => {
    const siteName = t('meta.title')
    document.title = `${t('blog.heading')} — ${siteName}`

    setMeta('description', t('blog.subtitle'))
    setOg('og:title', `${t('blog.heading')} — ${siteName}`)
    setOg('og:description', t('blog.subtitle'))
    setOg('og:url', buildUrl('/blog', lang))

    return () => {
      document.title = siteName
      setMeta('description', t('meta.description'))
      setOg('og:title', siteName)
      setOg('og:description', t('meta.description'))
      setOg('og:url', SITE_URL)
    }
  }, [lang, t])

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('meta.title'),
        item: buildUrl('/', lang),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('blog.heading'),
        item: buildUrl('/blog', lang),
      },
    ],
  }), [lang, t])

  return (
    <main id="main-content" className="container py-20 sm:py-28">
      <JsonLd data={breadcrumbJsonLd} />
      <ScrollReveal>
        <h1 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
          {t('blog.heading')}
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {t('blog.subtitle')}
        </p>
      </ScrollReveal>

      {posts.length === 0 ? (
        <ScrollReveal>
          <p className="mt-12 font-serif text-2xl text-muted-foreground">
            {t('blog.empty')}
          </p>
        </ScrollReveal>
      ) : (
        <div className="mt-12 grid gap-6">
          {posts.map((post, i) => {
            const minutes = readingTime(post.content, lang)
            return (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <LocaleLink
                  to={`/blog/${post.slug}`}
                  className="chanel-card group block p-6 transition-colors duration-200 hover:border-foreground/20 sm:p-8"
                >
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <time>{formatDate(post.date, lang)}</time>
                    <span aria-hidden="true" className="text-border">|</span>
                    <span>{formatReadingTime(minutes, lang)}</span>
                  </div>
                  <h2 className="mt-2 font-serif text-xl font-normal tracking-tight text-foreground group-hover:text-deep-blue sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {post.description}
                  </p>
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
                </LocaleLink>
              </ScrollReveal>
            )
          })}
        </div>
      )}
    </main>
  )
}

export default BlogListPage
