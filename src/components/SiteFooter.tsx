const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-brand-white/10 bg-brand-black text-brand-cream">
      <div className="container py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo + copyright */}
          <div className="text-center sm:text-left">
            <img src="/assets/bofuchen-lockup.svg" alt="Bofu Chen" className="mx-auto h-6 brightness-0 invert sm:mx-0" />
            <p className="mt-3 text-xs text-brand-cream/50">
              &copy; {new Date().getFullYear()} Bofu Chen. Built with open source.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById(item.id)
                  target?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-xs font-medium uppercase tracking-[0.15em] text-brand-cream/50 transition-colors hover:text-brand-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social + Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bafu"
              target="_blank"
              rel="noreferrer"
              className="text-brand-cream/50 transition-colors hover:text-brand-cream"
              aria-label="GitHub"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/bafuchen"
              target="_blank"
              rel="noreferrer"
              className="text-brand-cream/50 transition-colors hover:text-brand-cream"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-cream/40 hover:text-brand-cream"
              aria-label="Back to top"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
