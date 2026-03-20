export default function About() {
  return (
    <section id="about" className="relative z-10 bg-cream bg-grid-subtle py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <div className="flex justify-center">
          <span className="rounded-full border border-brown-200 bg-cream-light px-4 py-1.5 font-display text-xs font-semibold tracking-[0.15em] text-brown-800 uppercase">
            About
          </span>
        </div>

        <h2 className="mt-8 text-center font-serif text-5xl font-normal leading-tight text-brown-900 md:text-7xl">
          A Home for Seekers of
          <br />
          <span className="italic">Deep Healing</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-brown-800 md:text-lg">
          Rooted in the sacred traditions of the Peruvian Amazon, Mai Niti exists to guide, inform, and support those drawn to timeless healing wisdom.
        </p>

        {/* Bento grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Large image — 3 cols */}
          <div className="relative overflow-hidden rounded-2xl bg-brown-200/30 lg:col-span-3 lg:row-span-2">
            <img
              src="/images/site/shipibo-healers.webp"
              alt="Shipibo curanderos at the Mai Niti Alternative retreat center in the Peruvian Amazon"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 h-16 w-px bg-cream/40" />
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brown-900 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-cream">15+</p>
              <p className="mt-1 font-display text-xs tracking-wide text-cream/60">
                Years of Practice
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brown-900 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-cream">500+</p>
              <p className="mt-1 font-display text-xs tracking-wide text-cream/60">
                Guests Hosted
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brown-900 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-cream">100%</p>
              <p className="mt-1 font-display text-xs tracking-wide text-cream/60">
                Traditional Methods
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-brown-900 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-cream">24/7</p>
              <p className="mt-1 font-display text-xs tracking-wide text-cream/60">
                On Site Support
              </p>
            </div>
          </div>

          {/* Text card */}
          <div className="flex flex-col justify-center rounded-2xl border border-brown-200/60 bg-cream-light p-8 lg:col-span-2">
            <p className="text-base leading-relaxed text-brown-800 md:text-lg">
              Rooted in the sacred traditions of the Peruvian Amazon, Mai Niti
              exists to guide, inform, and support those drawn to timeless
              healing wisdom.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-brown-900 px-7 py-3 font-display text-sm font-medium text-cream transition-colors hover:bg-brown-800"
              >
                Our story
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
