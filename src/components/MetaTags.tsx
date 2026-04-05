import { useEffect } from 'react'
import { useI18n } from '../i18n'

// ─── helpers ────────────────────────────────────────────────────────

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

/**
 * Remove all article-specific OG meta tags (used on cleanup).
 */
function removeArticleMeta() {
  const selectors = [
    'meta[property="article:published_time"]',
    'meta[property="article:author"]',
    'meta[property="article:tag"]',
  ]
  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => el.remove())
  })
}

function addArticleTag(tag: string) {
  const meta = document.createElement('meta')
  meta.setAttribute('property', 'article:tag')
  meta.content = tag
  document.head.appendChild(meta)
}

// ─── component ──────────────────────────────────────────────────────

/**
 * Sets baseline document title, description, and OG meta tags
 * from i18n locale data. Placed once in App.tsx.
 *
 * Individual pages (BlogPostPage, BlogListPage) override these
 * via their own useEffect hooks.
 */
const MetaTags = () => {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t('meta.title')

    setMeta('description', t('meta.description'))
    setOg('og:title', t('meta.title'))
    setOg('og:description', t('meta.description'))
    setOg('og:type', 'website')
  }, [t])

  return null
}

export default MetaTags

// Re-export helpers for use by page components
export { setMeta, setOg, removeArticleMeta, addArticleTag }
