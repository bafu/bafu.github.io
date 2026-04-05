import type { Language } from '../i18n/types'

const LOCALE_MAP: Record<Language, string> = {
  en: 'en-US',
  'zh-TW': 'zh-TW',
  'zh-CN': 'zh-CN',
  ja: 'ja-JP'
}

/**
 * Format a date string (YYYY-MM-DD) according to the current locale.
 *
 * en      → "February 28, 2026"
 * zh-TW   → "2026年2月28日"
 * ja      → "2026年2月28日"
 */
export function formatDate(dateStr: string, lang: Language): string {
  const date = new Date(dateStr + 'T00:00:00')
  if (isNaN(date.getTime())) return dateStr

  return date.toLocaleDateString(LOCALE_MAP[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
