import { type FC } from 'react'

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
  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-primary/30 bg-midnight/80 backdrop-blur"
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('hero')
            }}
          >
            <img src="/assets/bofuchen-lockup.svg" alt="Bofu Chen" className="h-7" />
          </a>
          <div className="hidden items-center gap-6 rounded-full border border-primary/20 bg-midnight/60 px-6 py-2 md:flex">
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
                    ? 'text-primary'
                    : 'text-mist hover:text-primary'
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
              className="text-mist transition-colors hover:text-primary"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/bafuchen"
              target="_blank"
              rel="noreferrer"
              className="text-mist transition-colors hover:text-primary"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
