import { useEffect, useMemo } from 'react'
import JsonLd from '../components/JsonLd'
import { getAwards } from '../data/awards'
import { getExperiences } from '../data/experience'
import { getProjects } from '../data/projects'
import { getResumeCopy } from '../data/resume'
import { getTalks } from '../data/talks'
import { useI18n } from '../i18n'
import { HTML_LANG_MAP } from '../i18n/types'
import { setMeta, setOg } from '../components/MetaTags'

const SITE_URL = 'https://bafu.github.io'

const SectionHeading = ({ index, children }: { index: string; children: React.ReactNode }) => (
  <div className="resume-section-heading">
    <span>{index}</span>
    <h2>{children}</h2>
  </div>
)

const ExternalArrow = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="none">
    <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.25" />
  </svg>
)

const ResumePage = () => {
  const { lang, t } = useI18n()
  const copy = getResumeCopy(lang)
  const experiences = getExperiences(lang)
  const projects = getProjects(lang).slice(0, 4)
  const awards = getAwards(lang).slice(0, 6)
  const talks = getTalks(lang).filter((talk) => talk.date !== '2007').slice(0, 5)

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: copy.meta.title,
      description: copy.meta.description,
      url: `${SITE_URL}${lang === 'en' ? '' : `/${lang}`}/resume`,
      inLanguage: HTML_LANG_MAP[lang],
      mainEntity: {
        '@type': 'Person',
        name: 'Bofu Chen',
        alternateName: '陳伯符',
        jobTitle: 'Founder & CEO/CTO',
        image: `${SITE_URL}/assets/bofu-nvidia-hq-2017-1.jpg`,
        worksFor: {
          '@type': 'Organization',
          name: 'Numbers Protocol',
          url: 'https://www.numbersprotocol.io/'
        },
        sameAs: [
          'https://github.com/bafu',
          'https://twitter.com/bafuchen',
          'https://www.linkedin.com/in/bofuchen/'
        ]
      }
    }),
    [copy.meta.description, copy.meta.title, lang]
  )

  useEffect(() => {
    document.title = copy.meta.title
    setMeta('description', copy.meta.description)
    setOg('og:title', copy.meta.title)
    setOg('og:description', copy.meta.description)
    setOg('og:type', 'profile')

    return () => {
      document.title = t('meta.title')
      setMeta('description', t('meta.description'))
      setOg('og:title', t('meta.title'))
      setOg('og:description', t('meta.description'))
      setOg('og:type', 'website')
    }
  }, [copy.meta.description, copy.meta.title, t])

  return (
    <main id="main-content" className="resume-page">
      <JsonLd data={jsonLd} />

      <article className="resume-sheet">
        <header className="resume-hero">
          <div className="resume-identity">
            <p className="kicker text-beige">{copy.eyebrow}</p>
            <div className="mt-8 flex items-end gap-5 sm:mt-12 sm:gap-7">
              <img
                src="/assets/bofu-nvidia-hq-2017-1.jpg"
                alt="Bofu Chen with Jensen Huang at NVIDIA HQ, 2017"
                className="resume-portrait"
              />
              <div>
                <h1 className="display text-4xl leading-none text-background sm:text-5xl lg:text-6xl">
                  Bofu<br />Chen
                </h1>
                <p className="mt-3 font-sans text-base tracking-[0.18em] text-beige sm:text-lg">陳伯符</p>
              </div>
            </div>
          </div>

          <div className="resume-intro">
            <p className="eyebrow text-beige-gold">{copy.location}</p>
            <p className="mt-5 max-w-xl font-serif text-2xl leading-tight text-foreground sm:text-3xl">
              {copy.role}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {copy.summary}
            </p>

            <div className="resume-contact-list">
              <a href="mailto:bofu@numbersprotocol.io">bofu@numbersprotocol.io</a>
              <a href="https://www.linkedin.com/in/bofuchen/" target="_blank" rel="noreferrer">
                LinkedIn <ExternalArrow />
              </a>
              <a href="https://github.com/bafu" target="_blank" rel="noreferrer">
                GitHub <ExternalArrow />
              </a>
              <a href="https://twitter.com/bafuchen" target="_blank" rel="noreferrer">
                X / Twitter <ExternalArrow />
              </a>
            </div>

            <button type="button" onClick={() => window.print()} className="resume-print resume-actions">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path d="M5 7V2.75h10V7M5 14H3.75A1.75 1.75 0 0 1 2 12.25v-4.5C2 6.78 2.78 6 3.75 6h12.5C17.22 6 18 6.78 18 7.75v4.5c0 .97-.78 1.75-1.75 1.75H15m-10-3h10v6.25H5V11Z" stroke="currentColor" strokeWidth="1.25" />
              </svg>
              {copy.print}
            </button>
          </div>
        </header>

        <section className="resume-section resume-profile">
          <SectionHeading index="01">{copy.sections.profile}</SectionHeading>
          <ul className="resume-highlight-list">
            {copy.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <div className="resume-main-grid">
          <div className="resume-main-column">
            <section className="resume-section">
              <SectionHeading index="02">{copy.sections.experience}</SectionHeading>
              <div className="space-y-8">
                {experiences.map((experience) => (
                  <article key={`${experience.period}-${experience.organization}`} className="resume-entry">
                    <p className="resume-date">{experience.period}</p>
                    <div>
                      <h3>{experience.title}</h3>
                      <a href={experience.organizationUrl} target="_blank" rel="noreferrer" className="resume-org">
                        {experience.organization} <ExternalArrow />
                      </a>
                      <p className="resume-description">{experience.description}</p>
                      <div className="resume-tags">
                        {experience.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <SectionHeading index="03">{copy.sections.selectedWork}</SectionHeading>
              <div className="resume-projects">
                {projects.map((project) => (
                  <a key={project.title} href={project.url} target="_blank" rel="noreferrer" className="resume-project">
                    <div className="flex items-start justify-between gap-4">
                      <h3>{project.title}</h3>
                      <ExternalArrow />
                    </div>
                    <p>{project.description}</p>
                    <span>{copy.projectLink}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <SectionHeading index="04">{copy.sections.talks}</SectionHeading>
              <div className="resume-talks-grid">
                {talks.map((talk) => (
                  <article key={`${talk.date}-${talk.title}`} className="resume-compact-entry">
                    <p>{talk.date}</p>
                    {talk.url ? (
                      <a href={talk.url} target="_blank" rel="noreferrer">{talk.title}</a>
                    ) : (
                      <h3>{talk.title}</h3>
                    )}
                    <span>{talk.event}</span>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="resume-side-column">
            <section className="resume-section">
              <SectionHeading index="05">{copy.sections.expertise}</SectionHeading>
              <ul className="resume-expertise">
                {copy.expertise.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="resume-section">
              <SectionHeading index="06">{copy.sections.recognition}</SectionHeading>
              <div className="space-y-5">
                {awards.map((award) => (
                  <article key={`${award.year}-${award.title}`} className="resume-compact-entry">
                    <p>{award.year}</p>
                    {award.url ? (
                      <a href={award.url} target="_blank" rel="noreferrer">{award.title}</a>
                    ) : (
                      <h3>{award.title}</h3>
                    )}
                    {award.description && <span>{award.description}</span>}
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <SectionHeading index="07">{copy.sections.education}</SectionHeading>
              <div className="resume-compact-entry">
                <p>{copy.education.year}</p>
                <h3>{copy.education.degree}</h3>
                <span>{copy.education.school}</span>
              </div>
            </section>
          </aside>
        </div>

        <footer className="resume-document-footer">
          <span>Bofu Chen · {copy.eyebrow}</span>
          <a href="https://bafu.github.io">bafu.github.io</a>
        </footer>
      </article>
    </main>
  )
}

export default ResumePage
