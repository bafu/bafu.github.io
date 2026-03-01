import { useI18n } from '../i18n'
import RotatingProfileImage from './RotatingProfileImage'

const Hero = () => {
  const { t } = useI18n()

  return (
    <section id="hero" className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(46,82,160,0.15),_transparent_55%)]"></div>
      <div className="container flex flex-col-reverse items-center gap-10 sm:gap-12 md:flex-row md:justify-between lg:gap-16">
        <div className="w-full space-y-6 sm:space-y-8 md:w-3/5">
          <span className="hero-animate hero-delay-0 inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-black px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cream">
            {t('hero.badge')}
          </span>
          <h1 className="hero-animate hero-delay-1 font-display text-3xl font-semibold leading-tight text-brand-black sm:text-4xl md:text-5xl lg:text-6xl">
            {t('hero.heading')} <span className="text-brand-dark-blue">{t('hero.headingHighlight')}</span>
          </h1>
          <p className="hero-animate hero-delay-2 text-base leading-relaxed text-brand-black/70 sm:text-lg md:text-xl">
            {t('hero.descPart1')}<strong className="font-semibold text-brand-black">{t('hero.descName')}</strong>{t('hero.descPart2')}
          </p>
          <div className="hero-animate hero-delay-3 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                const anchor = document.getElementById('projects')
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-dark-blue px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-black hover:shadow-lg"
            >
              {t('hero.exploreWork')}
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                const anchor = document.getElementById('contact')
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-black transition-colors duration-200 hover:border-brand-black hover:text-brand-black"
            >
              {t('hero.connect')}
              <i className="fas fa-circle-notch text-[0.65rem]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="hero-animate hero-delay-2 w-full max-w-xs sm:max-w-sm md:w-2/5 md:max-w-none">
          <RotatingProfileImage />
        </div>
      </div>
    </section>
  )
}

export default Hero
