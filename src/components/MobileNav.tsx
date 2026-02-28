import { useEffect, useRef, type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigation } from '../context/NavigationContext'
import { sectionNavItems } from '../data/navigation'

type MobileNavProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { activeSection, handleNavigate } = useNavigation()

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
          'button, a[href], [tabindex]:not([tabindex="-1"])'
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
    if (isHome) {
      handleNavigate(id)
      onClose()
    } else {
      window.location.href = `/#${id}`
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div
        className="mobile-nav-overlay absolute inset-0 bg-brand-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className="mobile-nav-drawer absolute right-0 top-0 flex h-full w-72 flex-col bg-brand-cream shadow-glass"
      >
        <div className="flex items-center justify-between border-b border-brand-black/10 px-6 py-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-black/60">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-black/60 transition-colors hover:bg-brand-black/5 hover:text-brand-black"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {sectionNavItems.map((item) => (
            <a
              key={item.id}
              href={isHome ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleSectionClick(e, item.id)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                isHome && activeSection === item.id
                  ? 'bg-brand-dark-blue/10 text-brand-dark-blue'
                  : 'text-brand-black/60 hover:bg-brand-black/5 hover:text-brand-black'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/blog"
            onClick={onClose}
            className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
              location.pathname.startsWith('/blog')
                ? 'bg-brand-dark-blue/10 text-brand-dark-blue'
                : 'text-brand-black/60 hover:bg-brand-black/5 hover:text-brand-black'
            }`}
          >
            Blog
          </Link>
        </nav>

        <div className="border-t border-brand-black/10 px-6 py-4">
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://github.com/bafu"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black/60 transition-colors hover:text-brand-black"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/bafuchen"
              target="_blank"
              rel="noreferrer"
              className="text-brand-black/60 transition-colors hover:text-brand-black"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
