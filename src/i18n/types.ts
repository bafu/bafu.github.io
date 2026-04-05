export type Language = 'en' | 'zh-TW' | 'ja'

export const LANGUAGES: Language[] = ['en', 'zh-TW', 'ja']

export const DEFAULT_LANGUAGE: Language = 'en'

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  'zh-TW': '中文',
  ja: '日本語'
}

export const HTML_LANG_MAP: Record<Language, string> = {
  en: 'en',
  'zh-TW': 'zh-Hant',
  ja: 'ja'
}
