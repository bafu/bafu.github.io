import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type Language, LANGUAGES, DEFAULT_LANGUAGE, getLangFromPath } from '../i18n'

function detectLanguage(): Language {
  const stored = localStorage.getItem('preferredLang')
  if (stored && LANGUAGES.includes(stored as Language)) {
    return stored as Language
  }

  const browserLangs = navigator.languages ?? [navigator.language]
  for (const bl of browserLangs) {
    const normalized = bl.trim()
    if (LANGUAGES.includes(normalized as Language)) return normalized as Language
    // Match zh-TW, zh-Hant → zh-TW
    if (/^zh[_-](TW|Hant)/i.test(normalized)) return 'zh-TW'
    // Match zh-CN, zh-Hans, zh → zh-CN
    if (/^zh([_-](CN|Hans|SG))?$/i.test(normalized)) return 'zh-CN'
    if (/^ja/i.test(normalized)) return 'ja'
    if (/^en/i.test(normalized)) return DEFAULT_LANGUAGE
  }

  return DEFAULT_LANGUAGE
}

const LanguageRedirect = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Only redirect if URL has no lang prefix (i.e. defaults to English)
    const urlLang = getLangFromPath(location.pathname)
    if (urlLang !== DEFAULT_LANGUAGE) return

    const detected = detectLanguage()
    if (detected === DEFAULT_LANGUAGE) return

    // Only redirect once per session
    const redirected = sessionStorage.getItem('langRedirected')
    if (redirected) return

    sessionStorage.setItem('langRedirected', '1')
    const target = `/${detected}${location.pathname === '/' ? '' : location.pathname}${location.hash}`
    navigate(target, { replace: true })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}

export default LanguageRedirect
