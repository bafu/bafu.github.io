import { Navigate, Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug } from '../lib/blog'

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main id="main-content" className="container py-20 sm:py-28">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-black/50 transition-colors hover:text-brand-dark-blue"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Back to blog
      </Link>

      <article className="mt-8 max-w-3xl">
        <header>
          <time className="text-xs font-medium uppercase tracking-widest text-brand-black/40">
            {post.date}
          </time>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            {post.title}
          </h1>
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
