import { useI18n } from '../i18n'

const Hero = () => {
  const { t } = useI18n()

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:min-h-[70vh]">
        {/* Left column — dark bg */}
        <div className="flex w-full flex-col justify-center bg-foreground px-8 py-16 text-background sm:px-12 md:w-1/2 md:py-24 lg:px-20">
          <div className="mx-auto max-w-lg space-y-6">
            <div className="hero-animate hero-delay-0">
              <img
                src="/assets/profile-pic.png"
                alt="Bofu Chen"
                className="photo-chanel mb-6 h-20 w-20 rounded-full border border-background/20 object-cover md:h-24 md:w-24"
              />
              <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                Bofu Chen
              </h1>
              <p className="mt-1 font-sans text-sm tracking-wide text-background/60">
                {t('hero.chineseName') || '陳伯符'}
              </p>
            </div>

            <div className="hero-animate hero-delay-1">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-background/70">
                Software Engineer & AI Builder
              </p>
            </div>

            <div className="hero-animate hero-delay-2 space-y-2 text-sm text-background/50">
              <div className="flex items-center gap-2">
                <span className="inline-block h-px w-3 bg-beige-gold" />
                <span>Free Software</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-px w-3 bg-beige-gold" />
                <span>AI Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-px w-3 bg-beige-gold" />
                <span>Technical Writing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — light bg */}
        <div className="flex w-full flex-col justify-center border-l border-border bg-background px-8 py-16 sm:px-12 md:w-1/2 md:py-24 lg:px-20">
          <div className="mx-auto max-w-lg space-y-8">
            <div className="hero-animate hero-delay-1">
              <p className="font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
                <span className="text-beige">Engineer.</span>
                <br />
                <span className="text-beige">Builder.</span>
                <br />
                <span className="text-beige">Context-Aware</span>
                <br />
                <span className="text-beige">Thinker.</span>
              </p>
            </div>

            <div className="hero-animate hero-delay-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  const anchor = document.getElementById('projects')
                  anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 text-sm font-medium uppercase tracking-wide text-background transition-opacity duration-200 hover:opacity-90"
                style={{ borderRadius: '0.25rem' }}
              >
                {t('hero.exploreWork')}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  const anchor = document.getElementById('contact')
                  anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-medium uppercase tracking-wide text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
                style={{ borderRadius: '0.25rem' }}
              >
                {t('hero.connect')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
