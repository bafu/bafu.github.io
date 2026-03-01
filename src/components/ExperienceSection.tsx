import { useRef, useState } from 'react'
import { getAwards } from '../data/awards'
import { getExperiences } from '../data/experience'
import { getTalks } from '../data/talks'
import { getMedia } from '../data/media'
import { useI18n } from '../i18n'
import ScrollReveal from './ScrollReveal'

const TAB_IDS = ['talks', 'awards', 'media'] as const

type TabId = (typeof TAB_IDS)[number]

const ExperienceSection = () => {
  const { lang, t } = useI18n()
  const experiences = getExperiences(lang)
  const awards = getAwards(lang)
  const talks = getTalks(lang)
  const media = getMedia(lang)
  const [activeTab, setActiveTab] = useState<TabId>('talks')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null

    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % TAB_IDS.length
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + TAB_IDS.length) % TAB_IDS.length
    } else if (e.key === 'Home') {
      nextIndex = 0
    } else if (e.key === 'End') {
      nextIndex = TAB_IDS.length - 1
    }

    if (nextIndex !== null) {
      e.preventDefault()
      setActiveTab(TAB_IDS[nextIndex])
      tabRefs.current[nextIndex]?.focus()
    }
  }

  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-semibold text-brand-black sm:text-3xl md:text-4xl">
            {t('experience.heading')}
          </h2>
        </ScrollReveal>
        <div className="mt-8 sm:mt-10 md:mt-12">
          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.title} delay={index * 100}>
              <article className="relative mb-8 last:mb-0 sm:mb-10 md:mb-12">
                <div className="group rounded-2xl border border-brand-black/10 bg-brand-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-black/20 hover:shadow-glass sm:p-6">
                  <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark-blue">{experience.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-black sm:text-xl md:text-2xl">{experience.title}</h3>
                  <h4 className="mt-1 font-medium text-brand-black">
                    <a
                      href={experience.organizationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-brand-black/60 transition-colors hover:text-brand-black"
                    >
                      {experience.organization}
                      <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                    </a>
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{experience.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-black transition-all duration-200 hover:scale-105 hover:bg-brand-stone/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 sm:mt-14 md:mt-16">
            {/* Tab list with ARIA */}
            <div
              className="flex gap-1 border-b border-brand-black/10"
              role="tablist"
              aria-label={t('experience.tablistLabel')}
            >
              {TAB_IDS.map((id, index) => (
                <button
                  key={id}
                  ref={(el) => { tabRefs.current[index] = el }}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={activeTab === id}
                  aria-controls={`tabpanel-${id}`}
                  tabIndex={activeTab === id ? 0 : -1}
                  onClick={() => setActiveTab(id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`relative px-4 pb-3 text-sm font-semibold transition-colors sm:px-6 sm:text-base ${
                    activeTab === id
                      ? 'text-brand-black'
                      : 'text-brand-black/60 hover:text-brand-black'
                  }`}
                >
                  {t(`experience.tabs.${id}`)}
                  {/* Animated underline */}
                  {activeTab === id && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-dark-blue" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div
              key={activeTab}
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              className="tab-content-enter mt-8 sm:mt-10"
            >
              {activeTab === 'talks' && (
                <>
                  <h3 className="font-display text-xl font-semibold text-brand-black sm:text-2xl">{t('experience.subheadings.talks')}</h3>
                  <div className="mt-6 sm:mt-8">
                    {talks.map((talk) => (
                      <article key={talk.title} className="relative mb-6 last:mb-0 sm:mb-8">
                        <div className="group rounded-2xl border border-brand-black/10 bg-brand-white/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass sm:p-5">
                          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark-blue">{talk.date}</p>
                          <h4 className="mt-2 text-base font-semibold text-brand-black sm:text-lg">
                            {talk.url ? (
                              <a
                                href={talk.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-brand-black transition-colors hover:text-brand-dark-blue"
                              >
                                {talk.title}
                                <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                              </a>
                            ) : (
                              talk.title
                            )}
                          </h4>
                          <p className="mt-1 text-sm text-brand-black/70">{talk.event}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'awards' && (
                <>
                  <h3 className="font-display text-xl font-semibold text-brand-black sm:text-2xl">{t('experience.subheadings.awards')}</h3>
                  <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {awards.map((award) => (
                      <article
                        key={`${award.year}-${award.title}`}
                        className="group rounded-2xl border border-brand-black/10 bg-brand-white/90 p-5 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-brand-black/20 sm:p-6"
                      >
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark-blue">{award.year}</p>
                        <h4 className="mt-2 text-base font-semibold text-brand-black sm:text-lg">
                          {award.url ? (
                            <a
                              href={award.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-brand-black transition-colors hover:text-brand-dark-blue"
                            >
                              {award.title}
                              <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                            </a>
                          ) : (
                            award.title
                          )}
                        </h4>
                        {award.description ? (
                          <p className="mt-2 text-sm text-brand-black/70">{award.description}</p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'media' && (
                <>
                  <h3 className="font-display text-xl font-semibold text-brand-black sm:text-2xl">{t('experience.subheadings.media')}</h3>
                  <div className="mt-6 sm:mt-8">
                    {media.map((item) => (
                      <article key={item.title} className="relative mb-6 last:mb-0 sm:mb-8">
                        <div className="group rounded-2xl border border-brand-black/10 bg-brand-white/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass sm:p-5">
                          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark-blue">{item.date}</p>
                          <h4 className="mt-2 text-base font-semibold text-brand-black sm:text-lg">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-brand-black transition-colors hover:text-brand-dark-blue"
                              >
                                {item.title}
                                <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                              </a>
                            ) : (
                              item.title
                            )}
                          </h4>
                          <p className="mt-1 text-sm text-brand-black/70">{item.source}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ExperienceSection
