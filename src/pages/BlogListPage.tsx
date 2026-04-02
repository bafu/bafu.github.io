import ScrollReveal from '../components/ScrollReveal'
import LocaleLink from '../components/LocaleLink'
import { useI18n } from '../i18n'
import { getPosts } from '../lib/blog'

const BlogListPage = () => {
  const { lang, t } = useI18n()
  const posts = getPosts(lang)

  return (
    <main id="main-content" className="container py-20 sm:py-28">
      <ScrollReveal>
        <h1 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
          {t('blog.heading')}
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {t('blog.subtitle')}
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 100}>
            <LocaleLink
              to={`/blog/${post.slug}`}
              className="chanel-card group block p-6 transition-colors duration-200 hover:border-foreground/20 sm:p-8"
            >
              <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {post.date}
              </time>
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
        ))}
      </div>
    </main>
  )
}

export default BlogListPage
