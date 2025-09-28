const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,130,243,0.12),_transparent_55%)]"></div>
      <div className="container flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="w-full space-y-8 md:w-3/5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-midnight/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Numbers Protocol
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ice md:text-6xl">
            From commit to <span className="text-primary">company</span>
          </h1>
          <p className="text-lg leading-relaxed text-mist md:text-xl">
            I'm <strong className="font-semibold text-ice">Bofu Chen</strong>, a serial entrepreneur, open-source contributor, and founder at Numbers Protocol. This is where I share pragmatic lessons on scaling products, teams, and code without losing the plot.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                const anchor = document.getElementById('projects')
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-midnight transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Work
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                const anchor = document.getElementById('contact')
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary transition-colors duration-200 hover:border-primary hover:text-ice"
            >
              Connect
              <i className="fas fa-circle-notch text-[0.65rem]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs md:w-2/5 md:max-w-none">
          <div className="relative rounded-[28px] border border-primary/30 bg-gradient-to-br from-primary/10 via-midnight to-transparent p-4 shadow-glass">
            <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-primary/20 blur-3xl"></div>
            <img src="/assets/profile-pic.png" alt="Bofu Chen" className="relative w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
