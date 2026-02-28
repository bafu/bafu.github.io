import { projects } from '../data/projects'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(46,82,160,0.12),_transparent_60%)]"></div>
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-semibold text-brand-black sm:text-3xl md:text-4xl">
            Free Software Projects
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <article className="group rounded-2xl border border-brand-black/10 bg-brand-white/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-black/20 hover:shadow-glass">
                <h3 className="text-xl font-semibold text-brand-black">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-brand-dark-blue transition-colors hover:text-brand-black"
                  >
                    {project.title}
                    <i className="fas fa-external-link-alt text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"></i>
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-black transition-all duration-200 hover:scale-105 hover:bg-brand-stone/50"
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
