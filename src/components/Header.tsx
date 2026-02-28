import { useState, type FC } from 'react'
import MobileNav from './MobileNav'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work & Startup' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
] as const

export type HeaderProps = {
  activeSection: string
  onNavigate: (id: string) => void
}

const Header: FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header
        id="site-header"
        className="sticky top-0 z-50 border-b border-brand-black/10 bg-brand-cream/80 backdrop-blur"
      >
        <div className="container">
          <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('hero')
              }}
            >
              <img src="/assets/bofuchen-lockup.svg" alt="Bofu Chen" className="h-7" />
            </a>
            <div className="hidden items-center gap-6 rounded-full border border-brand-black/10 bg-brand-white/80 px-6 py-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(item.id)
                  }}
                  className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-dark-blue'
                      : 'text-brand-black/60 hover:text-brand-black'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-lg">
              <a
                href="https://github.com/bafu"
                target="_blank"
                rel="noreferrer"
                className="hidden text-brand-black/60 transition-colors hover:text-brand-black sm:block"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/bafuchen"
                target="_blank"
                rel="noreferrer"
                className="hidden text-brand-black/60 transition-colors hover:text-brand-black sm:block"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
              {/* Hamburger button — visible below md */}
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-black/60 transition-colors hover:bg-brand-black/5 hover:text-brand-black md:hidden"
                aria-label="Open menu"
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
        onNavigate={onNavigate}
        activeSection={activeSection}
      />
    </>
  )
}

export default Header
