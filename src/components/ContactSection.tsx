const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-black md:text-4xl">Get In Touch</h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-brand-black/70">
          Interested in collaborating or speaking opportunities? Let's build something audacious together.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <a
            href="mailto:bofu@numbersprotocol.io"
            className="flex w-40 flex-col items-center rounded-2xl border border-brand-black/10 bg-brand-white/90 px-6 py-6 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <i className="fas fa-envelope text-2xl text-digital-ocean" aria-hidden="true"></i>
            <span className="mt-3 text-xs font-semibold uppercase tracking-[0.28em]">Email</span>
          </a>
          <a
            href="https://twitter.com/bafuchen"
            target="_blank"
            rel="noreferrer"
            className="flex w-40 flex-col items-center rounded-2xl border border-brand-black/10 bg-brand-white/90 px-6 py-6 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <i className="fab fa-twitter text-2xl text-digital-ocean" aria-hidden="true"></i>
            <span className="mt-3 text-xs font-semibold uppercase tracking-[0.28em]">Twitter</span>
          </a>
          <a
            href="https://github.com/bafu"
            target="_blank"
            rel="noreferrer"
            className="flex w-40 flex-col items-center rounded-2xl border border-brand-black/10 bg-brand-white/90 px-6 py-6 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <i className="fab fa-github text-2xl text-digital-ocean" aria-hidden="true"></i>
            <span className="mt-3 text-xs font-semibold uppercase tracking-[0.28em]">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
