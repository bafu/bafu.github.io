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
        <h1 className="font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {t('blog.heading')}
        </h1>
        <p className="mt-3 text-base text-brand-black/60 sm:text-lg">
          {t('blog.subtitle')}
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 100}>
            <LocaleLink
              to={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-brand-black/10 bg-brand-white/80 p-6 transition-shadow hover:shadow-glass sm:p-8"
            >
              <time className="text-xs font-medium uppercase tracking-widest text-brand-black/40">
                {post.date}
              </time>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-brand-black group-hover:text-brand-dark-blue sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-black/60 sm:text-base">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-black/60"
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
