import { getProjects } from '../data/projects'
import { useI18n } from '../i18n'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  const { lang, t } = useI18n()
  const projects = getProjects(lang)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-serif text-2xl font-normal text-foreground sm:text-3xl md:text-4xl">
            {t('projects.heading')}
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <article className="chanel-card group p-6 transition-colors duration-200 hover:border-foreground/20">
                <h3 className="text-xl font-semibold text-foreground">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-deep-blue transition-colors hover:text-foreground"
                  >
                    {project.title}
                    <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      style={{ borderRadius: '0.25rem' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
