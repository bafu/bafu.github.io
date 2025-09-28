const Hero = () => {
  return (
    <section id="hero" className="py-20">
      <div className="container flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="w-full md:w-3/5">
          <h1 className="font-mono text-4xl font-semibold text-builderGreen md:text-5xl">From Commit to Company</h1>
          <p className="mt-6 text-lg leading-relaxed text-snow/90 md:text-xl">
            I'm <strong>Bofu Chen</strong>, a serial entrepreneur, open-source contributor, and the founder behind Numbers
            Protocol. Here I write about the messy reality of scaling products, teams, and code.
          </p>
        </div>
        <div className="w-full max-w-xs md:w-2/5 md:max-w-none">
          <img src="/assets/profile-pic.png" alt="Bofu Chen" className="w-full rounded-lg shadow-card" />
        </div>
      </div>
    </section>
  )
}

export default Hero
