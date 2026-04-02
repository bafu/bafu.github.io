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
          <h2 className="font-serif text-2xl font-normal text-foreground sm:text-3xl md:text-4xl">
            {t('experience.heading')}
          </h2>
        </ScrollReveal>
        <div className="mt-8 sm:mt-10 md:mt-12">
          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.title} delay={index * 100}>
              <article className="relative mb-8 last:mb-0 sm:mb-10 md:mb-12">
                <div className="chanel-card group p-5 transition-colors duration-200 hover:border-foreground/20 sm:p-6">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-deep-blue">{experience.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl md:text-2xl">{experience.title}</h3>
                  <h4 className="mt-1 font-medium text-foreground">
                    <a
                      href={experience.organizationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {experience.organization}
                      <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                    </a>
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                        style={{ borderRadius: '0.25rem' }}
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
              className="flex gap-1 border-b border-border"
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
                  className={`relative px-4 pb-3 text-sm font-medium uppercase tracking-[0.15em] transition-colors sm:px-6 ${
                    activeTab === id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(`experience.tabs.${id}`)}
                  {activeTab === id && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-beige-gold" />
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
                  <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">{t('experience.subheadings.talks')}</h3>
                  <div className="mt-6 sm:mt-8">
                    {talks.map((talk) => (
                      <article key={talk.title} className="relative mb-6 last:mb-0 sm:mb-8">
                        <div className="chanel-card group p-4 transition-colors duration-200 hover:border-foreground/20 sm:p-5">
                          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-deep-blue">{talk.date}</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
                            {talk.url ? (
                              <a
                                href={talk.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-deep-blue"
                              >
                                {talk.title}
                                <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                              </a>
                            ) : (
                              talk.title
                            )}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground">{talk.event}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'awards' && (
                <>
                  <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">{t('experience.subheadings.awards')}</h3>
                  <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {awards.map((award) => (
                      <article
                        key={`${award.year}-${award.title}`}
                        className="chanel-card group p-5 transition-colors duration-200 hover:border-foreground/20 sm:p-6"
                      >
                        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-deep-blue">{award.year}</p>
                        <h4 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
                          {award.url ? (
                            <a
                              href={award.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-deep-blue"
                            >
                              {award.title}
                              <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                            </a>
                          ) : (
                            award.title
                          )}
                        </h4>
                        {award.description ? (
                          <p className="mt-2 text-sm text-muted-foreground">{award.description}</p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'media' && (
                <>
                  <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">{t('experience.subheadings.media')}</h3>
                  <div className="mt-6 sm:mt-8">
                    {media.map((item) => (
                      <article key={item.title} className="relative mb-6 last:mb-0 sm:mb-8">
                        <div className="chanel-card group p-4 transition-colors duration-200 hover:border-foreground/20 sm:p-5">
                          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-deep-blue">{item.date}</p>
                          <h4 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-deep-blue"
                              >
                                {item.title}
                                <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                              </a>
                            ) : (
                              item.title
                            )}
                          </h4>
                          <p className="mt-1 text-sm text-muted-foreground">{item.source}</p>
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
