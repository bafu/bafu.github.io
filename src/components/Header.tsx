import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigation } from '../context/NavigationContext'
import { sectionNavIds, NAV_TRANSLATION_KEYS } from '../data/navigation'
import { useI18n } from '../i18n'
import LocaleLink from './LocaleLink'
import LanguageSwitcher from './LanguageSwitcher'
import MobileNav from './MobileNav'

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
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

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (isHomePath) {
      scrollTo(id)
    } else {
      window.location.href = localePath('/') + '#' + id
    }
  }

  const isBlogActive = location.pathname.replace(/^\/(zh-TW|zh-CN|ja)/, '').startsWith('/blog')

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {t('nav.skipToContent')}
      </a>
      <header
        id="site-header"
        className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur"
      >
        <div className="container">
          <nav className="flex items-center justify-between py-4" aria-label={t('a11y.mainNav')}>
            {isHomePath ? (
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('hero')
                }}
                className="chanel-nav font-medium tracking-[0.15em] text-foreground"
              >
                BOFU CHEN
              </a>
            ) : (
              <LocaleLink to="/" className="chanel-nav font-medium tracking-[0.15em] text-foreground">
                BOFU CHEN
              </LocaleLink>
            )}

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 md:flex">
              {sectionNavIds.map((id) => (
                <a
                  key={id}
                  href={isHomePath ? `#${id}` : `${localePath('/')}#${id}`}
                  onClick={(e) => handleSectionClick(e, id)}
                  className={`chanel-nav transition-colors ${
                    isHomePath && activeSection === id
                      ? 'text-deep-blue'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(NAV_TRANSLATION_KEYS[id])}
                </a>
              ))}
              <LocaleLink
                to="/blog"
                className={`chanel-nav transition-colors ${
                  isBlogActive
                    ? 'text-deep-blue'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('nav.blog')}
              </LocaleLink>
            </div>

            {/* Social links + language switcher + hamburger */}
            <div className="flex items-center gap-4 text-lg">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <a
                href="https://github.com/bafu"
                target="_blank"
                rel="noreferrer"
                className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                <span className="sr-only">{t('a11y.github')}</span>
              </a>
              <a
                href="https://twitter.com/bafuchen"
                target="_blank"
                rel="noreferrer"
                className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">{t('a11y.twitter')}</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
                style={{ borderRadius: '0.25rem' }}
                aria-label={t('a11y.openMenu')}
                aria-expanded={mobileNavOpen}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  )
}

export default Header
