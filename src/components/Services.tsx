const services = [
  {
    title: "Ayahuasca Ceremony",
    description:
      "Traditional ayahuasca ceremonies guided by Shipibo curanderos. Each ceremony is held in a sacred maloca with icaros (healing songs) sung throughout the night. We limit group sizes to ensure personalized attention and a safe, supportive environment.",
    duration: "1 night ceremony",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 4 C16 16 8 14 8 22 C8 27 12 30 16 30 C20 30 24 27 24 22 C24 14 16 16 16 4Z" />
        <path d="M16 12 C13 16 11 18 11 22" />
        <path d="M16 12 C19 16 21 18 21 22" />
      </svg>
    ),
  },
  {
    title: "Plant Medicine Dieta",
    description:
      "A deeper immersion into traditional Amazonian healing. The dieta involves working with a specific master plant over an extended period, following strict dietary and behavioral guidelines. This practice allows the plant spirit to teach and heal on profound levels.",
    duration: "7 to 30 days",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 28V8" />
        <path d="M16 16 C10 14 6 8 8 4" />
        <path d="M16 16 C22 14 26 8 24 4" />
        <path d="M16 22 C12 20 8 18 6 14" />
        <path d="M16 22 C20 20 24 18 26 14" />
        <circle cx="16" cy="28" r="2" />
      </svg>
    ),
  },
  {
    title: "Healing Retreats",
    description:
      "Multi-day retreats combining ayahuasca ceremonies with complementary healing practices: flower baths, vapor baths, meditation, integration circles, and time in nature. Designed for those seeking a comprehensive healing experience in a structured, supportive setting.",
    duration: "7 to 14 days",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="16" cy="16" r="1" />
        <path d="M16 4V10" />
        <path d="M16 22V28" />
        <path d="M4 16H10" />
        <path d="M22 16H28" />
      </svg>
    ),
  },
  {
    title: "Private Ceremonies",
    description:
      "One-on-one ceremonial work for those who prefer or need individualized attention. Private ceremonies allow the curandero to focus entirely on your healing process. Ideal for first-time participants, those working through deep trauma, or those seeking intensive personal work.",
    duration: "Custom schedule",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 6 C10 6 6 10 6 16 L16 16Z" />
        <path d="M16 6 C22 6 26 10 26 16 L16 16Z" />
        <path d="M6 16 C6 22 10 26 16 26 L16 16Z" />
        <path d="M26 16 C26 22 22 26 16 26 L16 16Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brown-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs tracking-[0.2em] text-brown-300 uppercase">
            Our Offerings
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Sacred Paths to <span className="italic">Healing</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/80">
            Every journey is unique. We offer several pathways into plant
            medicine work, each held with the same deep respect for tradition,
            safety, and your personal healing process.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-brown-700/40 bg-brown-800/50 p-8 transition-all hover:border-brown-500/60 hover:bg-brown-800/70 hover:shadow-2xl md:p-10"
            >
              <div className="mb-6 inline-flex rounded-xl bg-brown-700/30 p-3 text-brown-200 transition-colors group-hover:bg-brown-600/40 group-hover:text-cream">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-cream">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brown-400"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 5V8L10 10" />
                </svg>
                <span className="font-display text-xs tracking-wide text-brown-300">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-sm text-cream/70">
            Not sure which path is right for you? We are here to help.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full border border-cream/20 px-8 py-3 font-display text-sm font-medium text-cream transition-all hover:border-cream/40 hover:bg-cream/5"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
