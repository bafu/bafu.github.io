import { getProjects } from '../data/projects'
import { useI18n } from '../i18n'
import ScrollReveal from './ScrollReveal'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

const ProjectsSection = () => {
  const { lang, t } = useI18n()
  const projects = getProjects(lang)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <ScrollReveal>
          <p className="kicker mb-3">02 — Selected Work</p>
          <h2 className="display text-3xl font-normal text-foreground sm:text-4xl md:text-5xl">
            {t('projects.heading')}
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <Card interactive className="group flex h-full flex-col p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  / {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-serif text-xl font-normal text-foreground">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-beige-gold"
                  >
                    {project.title}
                    <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
