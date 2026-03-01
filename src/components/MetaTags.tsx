import { useEffect } from 'react'
import { useI18n } from '../i18n'

const MetaTags = () => {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t('meta.title')

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', t('meta.description'))
    setOg('og:title', t('meta.title'))
    setOg('og:description', t('meta.description'))
  }, [t])

  return null
}

export default MetaTags
