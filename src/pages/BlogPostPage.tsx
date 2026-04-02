import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useI18n } from '../i18n'
import { getPostBySlug } from '../lib/blog'
import LocaleLink from '../components/LocaleLink'

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { lang, t, localePath } = useI18n()
  const post = slug ? getPostBySlug(slug, lang) : undefined

  if (!post) {
    return <Navigate to={localePath('/blog')} replace />
  }

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
          <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {post.date}
          </time>
          <h1 className="mt-2 font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
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
