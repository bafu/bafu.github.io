import type { Language } from './types'
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'
import zhCN from './locales/zh-CN.json'
import ja from './locales/ja.json'

type NestedRecord = { [key: string]: string | NestedRecord }

const locales: Record<Language, NestedRecord> = {
  en: en as NestedRecord,
  'zh-TW': zhTW as NestedRecord,
  'zh-CN': zhCN as NestedRecord,
  ja: ja as NestedRecord
}

function get(obj: NestedRecord, path: string): string | undefined {
  const keys = path.split('.')
  let current: NestedRecord | string = obj
  for (const key of keys) {
    if (typeof current !== 'object' || current === null) return undefined
    current = current[key]
  }
  return typeof current === 'string' ? current : undefined
}

export function resolve(
  lang: Language,
  key: string,
  vars?: Record<string, string | number>
): string {
  let value = get(locales[lang], key) ?? get(locales.en, key) ?? key
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
    }
  }
  return value
}
