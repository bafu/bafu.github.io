import { createContext, useContext, useCallback, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type Language, LANGUAGES, DEFAULT_LANGUAGE, HTML_LANG_MAP } from './types'
import { resolve } from './translations'

type I18nContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string, vars?: Record<string, string | number>) => string
  localePath: (path: string) => string
  isHomePath: boolean
}

const I18nContext = createContext<I18nContextType>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: (key) => key,
  localePath: (path) => path,
  isHomePath: true
})

export function getLangFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]
  if (first && LANGUAGES.includes(first as Language)) {
    return first as Language
  }
  return DEFAULT_LANGUAGE
}

function stripLangPrefix(pathname: string, lang: Language): string {
  if (lang === DEFAULT_LANGUAGE) return pathname
  const prefix = `/${lang}`
  if (pathname === prefix || pathname === `${prefix}/`) return '/'
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)
  return pathname
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  const lang = getLangFromPath(location.pathname)

  const setLang = useCallback(
    (newLang: Language) => {
      const bare = stripLangPrefix(location.pathname, lang)
      const hash = location.hash
      const target = newLang === DEFAULT_LANGUAGE ? bare : `/${newLang}${bare === '/' ? '' : bare}`
      localStorage.setItem('preferredLang', newLang)
      navigate(target + hash)
    },
    [lang, location.pathname, location.hash, navigate]
  )

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => resolve(lang, key, vars),
    [lang]
  )

  const localePath = useCallback(
    (path: string) => {
      if (lang === DEFAULT_LANGUAGE) return path
      return `/${lang}${path === '/' ? '' : path}`
    },
    [lang]
  )

  const isHomePath = useMemo(() => {
    const bare = stripLangPrefix(location.pathname, lang)
    return bare === '/' || bare === ''
  }, [location.pathname, lang])

  useEffect(() => {
    document.documentElement.lang = HTML_LANG_MAP[lang]
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t, localePath, isHomePath }),
    [lang, setLang, t, localePath, isHomePath]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
