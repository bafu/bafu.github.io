const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container text-center">
        <h2 className="font-mono text-3xl font-semibold text-builderGreen">Get In Touch</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-snow/80">
          Interested in collaborating or speaking opportunities? Feel free to reach out.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-10 text-sm">
          <a href="mailto:bofu@numbersprotocol.io" className="flex flex-col items-center text-snow hover:text-insightPink">
            <i className="fas fa-envelope text-2xl text-builderGreen" aria-hidden="true"></i>
            <span className="mt-2">Email</span>
          </a>
          <a
            href="https://twitter.com/bafuchen"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-snow hover:text-insightPink"
          >
            <i className="fab fa-twitter text-2xl text-builderGreen" aria-hidden="true"></i>
            <span className="mt-2">Twitter</span>
          </a>
          <a
            href="https://github.com/bafu"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-snow hover:text-insightPink"
          >
            <i className="fab fa-github text-2xl text-builderGreen" aria-hidden="true"></i>
            <span className="mt-2">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
