const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(10,96,255,0.15),_transparent_55%)]"></div>
      <div className="container flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="w-full space-y-8 md:w-3/5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-black px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-natural">
            Numbers Protocol
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-brand-black md:text-6xl">
            From commit to <span className="text-digital-ocean">company</span>
          </h1>
          <p className="text-lg leading-relaxed text-brand-black/70 md:text-xl">
            I'm <strong className="font-semibold text-brand-black">Bofu Chen</strong>, a serial entrepreneur, open-source contributor, and founder at Numbers Protocol. This is where I share pragmatic lessons on scaling products, teams, and code without losing the plot.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault()
                const anchor = document.getElementById('projects')
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-digital-ocean px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-black"
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
              className="inline-flex items-center gap-2 rounded-full border border-brand-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-black transition-colors duration-200 hover:border-brand-black hover:text-brand-black"
            >
              Connect
              <i className="fas fa-circle-notch text-[0.65rem]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs md:w-2/5 md:max-w-none">
          <div className="relative rounded-[28px] border border-brand-black/10 bg-brand-white p-4 shadow-glass">
            <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-digital-ocean/20 blur-3xl"></div>
            <img src="/assets/profile-pic.png" alt="Bofu Chen" className="relative w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
