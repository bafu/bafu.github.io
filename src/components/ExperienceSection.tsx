import { useState } from 'react'
import { awards } from '../data/awards'
import { experiences } from '../data/experience'
import { talks } from '../data/talks'

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'talks' | 'awards'>('talks')

  return (
    <section id="work" className="py-24">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-electric md:text-4xl">Work &amp; Startup Experience</h2>
        <div className="relative mt-12 border-l border-electric/30 pl-10">
          {experiences.map((experience) => (
            <article key={experience.title} className="relative mb-12 last:mb-0">
              <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-electric"></span>
              <div className="rounded-2xl border border-electric/10 bg-cobalt/40 p-6">
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-coral">{experience.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-ice md:text-2xl">{experience.title}</h3>
                <h4 className="mt-1 font-medium text-ice">
                  <a
                    href={experience.organizationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-mist transition-colors hover:text-electric"
                  >
                    {experience.organization}
                    <i className="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
                  </a>
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-mist">{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex border-b border-electric/20">
            <button
              type="button"
              onClick={() => setActiveTab('talks')}
              className={`px-6 pb-3 text-base font-semibold transition-colors ${
                activeTab === 'talks'
                  ? 'text-electric'
                  : 'text-mist hover:text-electric'
              }`}
            >
              Talks &amp; Education
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('awards')}
              className={`px-6 pb-3 text-base font-semibold transition-colors ${
                activeTab === 'awards'
                  ? 'text-electric'
                  : 'text-mist hover:text-electric'
              }`}
            >
              Awards
            </button>
          </div>

          {activeTab === 'talks' ? (
            <div className="mt-10">
              <h3 className="font-display text-2xl font-semibold text-electric">Featured Talks</h3>
              <div className="relative mt-8 border-l border-electric/25 pl-10">
                {talks.map((talk) => (
                  <article key={talk.title} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-electric"></span>
                    <div className="rounded-2xl border border-electric/10 bg-midnight/80 p-5">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-coral">{talk.date}</p>
                      <h4 className="mt-2 text-lg font-semibold text-ice">{talk.title}</h4>
                      <p className="mt-1 text-sm text-mist">{talk.event}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <h3 className="font-display text-2xl font-semibold text-electric">Recognition &amp; Achievements</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {awards.map((award) => (
                  <article
                    key={`${award.year}-${award.title}`}
                    className="rounded-2xl border border-electric/10 bg-midnight/80 p-6 shadow-glass"
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-coral">{award.year}</p>
                    <h4 className="mt-2 text-lg font-semibold text-ice">{award.title}</h4>
                    {award.description ? (
                      <p className="mt-2 text-sm text-mist">{award.description}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
