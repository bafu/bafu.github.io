import { useState } from 'react'
import { awards } from '../data/awards'
import { experiences } from '../data/experience'
import { talks } from '../data/talks'

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'talks' | 'awards'>('talks')

  return (
    <section id="work" className="py-20">
      <div className="container">
        <h2 className="font-mono text-3xl font-semibold text-builderGreen">Work &amp; Startup Experience</h2>
        <div className="relative mt-12 border-l border-builderGreen/30 pl-10">
          {experiences.map((experience) => (
            <article key={experience.title} className="relative mb-12 last:mb-0">
              <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-builderGreen"></span>
              <div className="rounded-lg bg-builderGreen/10 p-6">
                <p className="font-mono text-sm font-semibold text-insightPink">{experience.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-builderGreen">{experience.title}</h3>
                <h4 className="mt-1 font-medium text-snow">
                  <a
                    href={experience.organizationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-snow hover:text-insightPink"
                  >
                    {experience.organization}
                    <i className="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
                  </a>
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-snow/80">{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-codeBlue/20 px-3 py-1 text-xs text-snow">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex border-b border-builderGreen/30">
            <button
              type="button"
              onClick={() => setActiveTab('talks')}
              className={`px-6 pb-3 text-base font-medium ${
                activeTab === 'talks'
                  ? 'text-builderGreen'
                  : 'text-snow hover:text-insightPink'
              }`}
            >
              Talks &amp; Education
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('awards')}
              className={`px-6 pb-3 text-base font-medium ${
                activeTab === 'awards'
                  ? 'text-builderGreen'
                  : 'text-snow hover:text-insightPink'
              }`}
            >
              Awards
            </button>
          </div>

          {activeTab === 'talks' ? (
            <div className="mt-10">
              <h3 className="font-mono text-2xl font-semibold text-builderGreen">Featured Talks</h3>
              <div className="relative mt-8 border-l border-builderGreen/30 pl-10">
                {talks.map((talk) => (
                  <article key={talk.title} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-builderGreen"></span>
                    <div className="rounded-lg bg-builderGreen/10 p-5">
                      <p className="font-mono text-sm font-semibold text-insightPink">{talk.date}</p>
                      <h4 className="mt-2 text-lg font-semibold text-builderGreen">{talk.title}</h4>
                      <p className="mt-1 text-sm text-snow/80">{talk.event}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <h3 className="font-mono text-2xl font-semibold text-builderGreen">Recognition &amp; Achievements</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {awards.map((award) => (
                  <article key={`${award.year}-${award.title}`} className="rounded-xl bg-builderGreen/10 p-6">
                    <p className="font-mono text-sm font-semibold text-insightPink">{award.year}</p>
                    <h4 className="mt-2 text-lg font-semibold text-builderGreen">{award.title}</h4>
                    {award.description ? (
                      <p className="mt-2 text-sm text-snow/80">{award.description}</p>
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
