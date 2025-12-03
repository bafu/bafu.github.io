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
            aria-label="Send me an email"
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-black/10 bg-brand-white/90 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/bafuchen"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on X (Twitter)"
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-black/10 bg-brand-white/90 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/bafu"
            target="_blank"
            rel="noreferrer"
            aria-label="View my GitHub profile"
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-black/10 bg-brand-white/90 text-brand-black transition-all duration-200 hover:-translate-y-1 hover:border-brand-black hover:text-brand-black"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
