import { useI18n } from '../i18n'
import { getPosts } from '../lib/blog'
import { formatDate } from '../lib/formatDate'
import { readingTime, formatReadingTime } from '../lib/readingTime'
import LocaleLink from './LocaleLink'
import ScrollReveal from './ScrollReveal'

const MAX_POSTS = 3

const LatestBlogSection = () => {
  const { lang, t } = useI18n()
  const posts = getPosts(lang).slice(0, MAX_POSTS)

  if (posts.length === 0) return null

  return (
    <section id="blog" className="container py-20 sm:py-28">
      <ScrollReveal>
        <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
          {t('blog.heading')}
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {t('blog.subtitle')}
        </p>
      </ScrollReveal>

      <div className="mt-10 grid gap-6">
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
                <h3 className="mt-2 font-serif text-xl font-normal tracking-tight text-foreground group-hover:text-deep-blue sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {post.description}
                </p>
              </LocaleLink>
            </ScrollReveal>
          )
        })}
      </div>

      <ScrollReveal delay={posts.length * 100}>
        <div className="mt-8 text-center">
          <LocaleLink
            to="/blog"
            className="inline-block border border-foreground bg-transparent px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
            style={{ borderRadius: '0.25rem' }}
          >
            {t('blog.viewAll')}
          </LocaleLink>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default LatestBlogSection
