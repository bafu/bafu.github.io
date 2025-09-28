import { projects } from '../data/projects'

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(10,96,255,0.12),_transparent_60%)]"></div>
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-brand-black md:text-4xl">Free Software Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-brand-black/10 bg-brand-white/90 p-6 transition-transform duration-200 hover:-translate-y-2 hover:border-brand-black/30 hover:shadow-glass"
            >
              <h3 className="text-xl font-semibold text-brand-black">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-digital-ocean transition-colors hover:text-brand-black"
                >
                  {project.title}
                  <i className="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-natural px-3 py-1 text-xs font-medium text-brand-black">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
