export type Language = 'en' | 'zh-TW' | 'zh-CN' | 'ja'

export const LANGUAGES: Language[] = ['en', 'zh-TW', 'zh-CN', 'ja']

export const DEFAULT_LANGUAGE: Language = 'en'

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  ja: '日本語'
}

export const HTML_LANG_MAP: Record<Language, string> = {
  en: 'en',
  'zh-TW': 'zh-Hant',
  'zh-CN': 'zh-Hans',
  ja: 'ja'
}
