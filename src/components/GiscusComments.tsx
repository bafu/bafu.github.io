import { useEffect, useState } from 'react'
import Giscus from '@giscus/react'
import { useI18n } from '../i18n'
import type { Language } from '../i18n/types'

/**
 * Maps the site's Language type to giscus lang codes.
 * giscus natively supports en, zh-TW, zh-CN, ja among others.
 */
const GISCUS_LANG_MAP: Record<Language, string> = {
  en: 'en',
  'zh-TW': 'zh-TW',
  ja: 'ja',
}

/**
 * Detects whether the site is currently in dark mode
 * by observing the 'dark' class on <html>.
 * Ready for when dark mode toggle is added.
 */
function useIsDark(): boolean {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return isDark
}

const GiscusComments = () => {
  const { lang, t } = useI18n()
  const isDark = useIsDark()

  return (
    <section aria-label={t('blog.commentsLabel')}>
      <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">
        {t('blog.commentsHeading')}
      </h3>
      <div className="mt-6">
        <Giscus
          id="comments"
          repo="bafu/bafu.github.io"
          repoId="PLACEHOLDER_REPO_ID"
          category="Blog Comments"
          categoryId="PLACEHOLDER_CATEGORY_ID"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={isDark ? 'dark' : 'light'}
          lang={GISCUS_LANG_MAP[lang]}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default GiscusComments
