export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-brown-900/5">
              {/* TODO: Replace with actual image of the retreat center */}
              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-brown-900/10 via-forest/5 to-brown-600/10 p-12 text-center">
                <svg
                  className="mb-6 h-16 w-16 text-brown-600/40"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="32" cy="32" r="28" />
                  <path d="M32 8 C32 32 16 28 16 44 C16 52 24 56 32 56 C40 56 48 52 48 44 C48 28 32 32 32 8Z" />
                  <path d="M32 20 C28 28 24 32 24 40" />
                  <path d="M32 20 C36 28 40 32 40 40" />
                </svg>
                <p className="font-display text-sm text-brown-600/60">
                  Retreat center photography
                </p>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-brown-900 p-6 shadow-xl md:-right-8">
              <p className="font-serif text-3xl text-cream">15+</p>
              <p className="mt-1 font-display text-xs tracking-wide text-cream/60">
                Years of
                <br />
                Healing Practice
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <span className="font-display text-xs tracking-[0.2em] text-brown-800 uppercase">
              Our Mission
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
              Healing Through
              <br />
              <span className="italic">Ancient Wisdom</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-brown-900">
              <p>
                Mai Niti Alternative is a plant medicine healing center nestled
                in the Peruvian Amazon. We offer a safe, respectful space where
                ancient traditions meet the modern search for meaning, health,
                and transformation.
              </p>
              <p>
                Our ceremonies are led by experienced curanderos from the Shipibo
                tradition, one of the most respected lineages in Amazonian plant
                medicine. Every aspect of your experience is held with care,
                from your initial consultation through your integration after
                ceremony.
              </p>
              <p>
                We believe that true healing happens when body, mind, and spirit
                are brought back into alignment. The plants are our teachers.
                The jungle is our pharmacy. And the work you do here can
                ripple out into every corner of your life.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#services"
                className="rounded-full bg-brown-900 px-7 py-3 font-display text-sm font-medium text-cream transition-colors hover:bg-brown-800"
              >
                Our Retreats
              </a>
              <a
                href="#blog"
                className="font-display text-sm font-medium text-brown-600 underline decoration-brown-600/30 underline-offset-4 transition-colors hover:text-brown-900 hover:decoration-brown-900/50"
              >
                Read Our Journal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
