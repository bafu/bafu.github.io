import { useI18n } from '../i18n'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Hero = () => {
  const { t } = useI18n()

  const scrollTo = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="flex flex-col md:min-h-[78vh] md:flex-row">
        {/* Left column — dark bg */}
        <div className="flex w-full flex-col justify-center bg-foreground px-8 py-20 text-background sm:px-12 md:w-1/2 md:py-28 lg:px-20">
          <div className="mx-auto w-full max-w-lg">
            <div className="rise rise-d0 mb-8 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-beige-gold" />
              <span className="kicker">Founder &amp; CTO · Numbers Protocol</span>
            </div>

            <div className="rise rise-d1">
              <img
                src="/assets/profile-pic.png"
                alt="Bofu Chen"
                className="photo-chanel mb-6 h-20 w-20 rounded-full border border-background/20 object-cover md:h-24 md:w-24"
              />
              <h1 className="display text-5xl font-normal sm:text-6xl lg:text-7xl">
                Bofu Chen
              </h1>
              <p className="mt-2 font-serif text-lg italic text-background/70">
                {t('hero.chineseName') || '陳伯符'}
              </p>
            </div>

            <div className="rise rise-d2 mt-8">
              <p className="eyebrow text-background/70">
                Software Engineer &amp; AI Builder
              </p>
            </div>

            <div className="rise rise-d3 mt-10 space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-4 bg-beige-gold" />
                <span>Free Software</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-4 bg-beige-gold" />
                <span>AI Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-4 bg-beige-gold" />
                <span>Technical Writing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — light bg */}
        <div className="flex w-full flex-col justify-center border-l border-border bg-background px-8 py-20 sm:px-12 md:w-1/2 md:py-28 lg:px-20">
          <div className="mx-auto w-full max-w-lg">
            <p className="rise rise-d2 kicker mb-6">A — Point of View</p>

            <div className="rise rise-d3">
              <p className="display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                <span className="text-beige">Engineer.</span>
                <br />
                <span className="text-beige">Builder.</span>
                <br />
                <span className="text-beige-gold">Context-Aware</span>
                <br />
                <span className="text-beige">Thinker.</span>
              </p>
            </div>

            <div className="rise rise-d4 mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="primary" size="lg">
                <a href="#projects" onClick={scrollTo('projects')}>
                  {t('hero.exploreWork')}
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact" onClick={scrollTo('contact')}>
                  {t('hero.connect')}
                </a>
              </Button>
            </div>

            <div className="rise rise-d5 mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>16y Building</span>
              <Separator orientation="horizontal" className="w-8" />
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
