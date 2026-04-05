import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import { LANGUAGES, DEFAULT_LANGUAGE, HTML_LANG_MAP, type Language } from '../i18n/types'

const SITE_URL = 'https://bafu.github.io'

/** OG locale format (underscore, not hyphen) */
const OG_LOCALE_MAP: Record<Language, string> = {
  en: 'en_US',
  'zh-TW': 'zh_TW',
  ja: 'ja_JP',
}

/**
 * Build the canonical URL for a given bare path and language.
 * English (default) has no prefix; others get /{lang} prefix.
 */
function buildUrl(barePath: string, lang: Language): string {
  const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
  // Ensure barePath starts with /
  const normalized = barePath.startsWith('/') ? barePath : `/${barePath}`
  return `${SITE_URL}${prefix}${normalized === '/' ? '' : normalized}`
}

/**
 * Strip the language prefix from a pathname to get the bare path.
 */
function stripLangPrefix(pathname: string): string {
  for (const lang of LANGUAGES) {
    if (lang === DEFAULT_LANGUAGE) continue
    const prefix = `/${lang}`
    if (pathname === prefix || pathname === `${prefix}/`) return '/'
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)
  }
  return pathname
}

// Attribute used to identify elements managed by this component
const DATA_ATTR = 'data-head-links'

/**
 * Manages <link rel="canonical">, <link rel="alternate" hreflang="...">,
 * and <meta property="og:locale"> / <meta property="og:locale:alternate">
 * tags in <head>.
 *
 * Cleans up all managed elements on unmount or when the path changes.
 */
const HeadLinks = () => {
  const { lang } = useI18n()
  const location = useLocation()

  useEffect(() => {
    const barePath = stripLangPrefix(location.pathname)
    const elements: HTMLElement[] = []

    const appendLink = (attrs: Record<string, string>) => {
      const link = document.createElement('link')
      link.setAttribute(DATA_ATTR, '')
      for (const [k, v] of Object.entries(attrs)) link.setAttribute(k, v)
      document.head.appendChild(link)
      elements.push(link)
    }

    const appendMeta = (property: string, content: string) => {
      const meta = document.createElement('meta')
      meta.setAttribute(DATA_ATTR, '')
      meta.setAttribute('property', property)
      meta.content = content
      document.head.appendChild(meta)
      elements.push(meta)
    }

    // --- Canonical ---
    appendLink({ rel: 'canonical', href: buildUrl(barePath, lang) })

    // --- hreflang alternates ---
    for (const altLang of LANGUAGES) {
      appendLink({
        rel: 'alternate',
        hreflang: HTML_LANG_MAP[altLang],
        href: buildUrl(barePath, altLang),
      })
    }
    // x-default points to the English version
    appendLink({
      rel: 'alternate',
      hreflang: 'x-default',
      href: buildUrl(barePath, DEFAULT_LANGUAGE),
    })

    // --- og:locale ---
    appendMeta('og:locale', OG_LOCALE_MAP[lang])
    for (const altLang of LANGUAGES) {
      if (altLang !== lang) {
        appendMeta('og:locale:alternate', OG_LOCALE_MAP[altLang])
      }
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [lang, location.pathname])

  return null
}

export default HeadLinks
