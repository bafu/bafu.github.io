import type { Language } from '../i18n/types'

const WORDS_PER_MINUTE_EN = 200
const CHARS_PER_MINUTE_CJK = 400

/**
 * Estimate reading time in minutes for a markdown body.
 * Uses word count for Latin text, character count for CJK text.
 */
export function readingTime(content: string, lang: Language): number {
  // Strip markdown syntax for a rough plain-text approximation
  const text = content
    .replace(/```[\s\S]*?```/g, '')     // fenced code blocks
    .replace(/`[^`]+`/g, '')            // inline code
    .replace(/!?\[.*?\]\(.*?\)/g, '')   // links & images
    .replace(/[#*>_~\-|]/g, '')         // markdown formatting chars
    .trim()

  if (['zh-TW', 'zh-CN', 'ja'].includes(lang)) {
    // Count CJK characters (Unified Ideographs + Hiragana + Katakana + Hangul)
    const cjkChars = (text.match(/[\u3000-\u9fff\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g) || []).length
    const latinWords = text.replace(/[\u3000-\u9fff\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g, ' ').split(/\s+/).filter(Boolean).length
    const minutes = cjkChars / CHARS_PER_MINUTE_CJK + latinWords / WORDS_PER_MINUTE_EN
    return Math.max(1, Math.ceil(minutes))
  }

  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE_EN))
}

/**
 * Format reading time as a localized string.
 */
export function formatReadingTime(minutes: number, lang: Language): string {
  switch (lang) {
    case 'zh-TW':
      return `${minutes} 分鐘閱讀`
    case 'zh-CN':
      return `${minutes} 分钟阅读`
    case 'ja':
      return `${minutes} 分で読めます`
    default:
      return `${minutes} min read`
  }
}
