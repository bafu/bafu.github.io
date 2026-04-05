import { useEffect, useRef, type FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigation } from '../context/NavigationContext'
import { sectionNavIds, NAV_TRANSLATION_KEYS } from '../data/navigation'
import { useI18n } from '../i18n'
import LocaleLink from './LocaleLink'
import LanguageSwitcher from './LanguageSwitcher'

type MobileNavProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const { t, localePath, isHomePath } = useI18n()
  const { activeSection } = useNavigation()

  const scrollTo = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    const header = document.getElementById('site-header')
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const isBlogActive = location.pathname.replace(/^\/(zh-TW|ja)/, '').startsWith('/blog')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], select, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (isHomePath) {
      scrollTo(id)
      onClose()
    } else {
      window.location.href = localePath('/') + '#' + id
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label={t('a11y.navMenu')}>
      <div
        className="mobile-nav-overlay absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className="mobile-nav-drawer absolute right-0 top-0 flex h-full w-72 flex-col border-l border-border bg-background"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="chanel-nav text-muted-foreground">{t('a11y.menu')}</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            style={{ borderRadius: '0.25rem' }}
            aria-label={t('a11y.closeMenu')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {sectionNavIds.map((id) => (
            <a
              key={id}
              href={isHomePath ? `#${id}` : `${localePath('/')}#${id}`}
              onClick={(e) => handleSectionClick(e, id)}
              className={`px-4 py-3 chanel-nav transition-colors ${
                isHomePath && activeSection === id
                  ? 'bg-nav-active/10 text-deep-blue'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ borderRadius: '0.25rem' }}
            >
              {t(NAV_TRANSLATION_KEYS[id])}
            </a>
          ))}
          <LocaleLink
            to="/blog"
            onClick={onClose}
            className={`px-4 py-3 chanel-nav transition-colors ${
              isBlogActive
                ? 'bg-nav-active/10 text-deep-blue'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            style={{ borderRadius: '0.25rem' }}
          >
            {t('nav.blog')}
          </LocaleLink>
        </nav>

        <div className="border-t border-border px-6 py-4">
          <div className="flex items-center gap-4 text-lg">
            <LanguageSwitcher />
            <a
              href="https://github.com/bafu"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              <span className="sr-only">{t('a11y.github')}</span>
            </a>
            <a
              href="https://twitter.com/bafuchen"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">{t('a11y.twitter')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
