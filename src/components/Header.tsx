import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const { activeSection, handleNavigate } = useNavigation()

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (isHomePath) {
      handleNavigate(id)
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
        className="sticky top-0 z-50 border-b border-brand-black/10 bg-brand-cream/80 backdrop-blur"
      >
        <div className="container">
          <nav className="flex items-center justify-between py-4" aria-label={t('a11y.mainNav')}>
            {isHomePath ? (
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigate('hero')
                }}
              >
                <img src="/assets/bofuchen-lockup.svg" alt="Bofu Chen" className="h-7" />
              </a>
            ) : (
              <LocaleLink to="/">
                <img src="/assets/bofuchen-lockup.svg" alt="Bofu Chen" className="h-7" />
              </LocaleLink>
            )}

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 rounded-full border border-brand-black/10 bg-brand-white/80 px-6 py-2 md:flex">
              {sectionNavIds.map((id) => (
                <a
                  key={id}
                  href={isHomePath ? `#${id}` : `${localePath('/')}#${id}`}
                  onClick={(e) => handleSectionClick(e, id)}
                  className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isHomePath && activeSection === id
                      ? 'text-brand-dark-blue'
                      : 'text-brand-black/60 hover:text-brand-black'
                  }`}
                >
                  {t(NAV_TRANSLATION_KEYS[id])}
                </a>
              ))}
              <LocaleLink
                to="/blog"
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isBlogActive
                    ? 'text-brand-dark-blue'
                    : 'text-brand-black/60 hover:text-brand-black'
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
                className="hidden text-brand-black/60 transition-colors hover:text-brand-black sm:block"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                <span className="sr-only">{t('a11y.github')}</span>
              </a>
              <a
                href="https://twitter.com/bafuchen"
                target="_blank"
                rel="noreferrer"
                className="hidden text-brand-black/60 transition-colors hover:text-brand-black sm:block"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">{t('a11y.twitter')}</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-black/60 transition-colors hover:bg-brand-black/5 hover:text-brand-black md:hidden"
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
