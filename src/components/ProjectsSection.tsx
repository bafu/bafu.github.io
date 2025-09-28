import { projects } from '../data/projects'

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-builderGreen/5 py-20">
      <div className="container">
        <h2 className="font-mono text-3xl font-semibold text-builderGreen">Free Software Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl bg-builderGreen/10 p-6 transition-transform duration-200 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-builderGreen">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-builderGreen hover:text-insightPink"
                >
                  {project.title}
                  <i className="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-snow/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-codeBlue/20 px-3 py-1 text-xs text-snow">
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
