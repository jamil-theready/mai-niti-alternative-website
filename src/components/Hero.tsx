export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brown-900">
      {/* Background pattern / texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(240,237,225,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(104,56,38,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(22,66,15,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Decorative botanical line art */}
      <div className="absolute left-8 top-1/4 hidden opacity-[0.07] lg:block">
        <svg
          width="120"
          height="300"
          viewBox="0 0 120 300"
          fill="none"
          stroke="currentColor"
          className="text-cream"
        >
          <path
            d="M60 300 C60 250 30 200 60 150 C90 100 40 50 60 0"
            strokeWidth="1"
          />
          <path d="M60 200 C30 180 10 160 20 130" strokeWidth="1" />
          <path d="M60 200 C90 180 110 160 100 130" strokeWidth="1" />
          <path d="M60 140 C40 120 25 100 35 70" strokeWidth="1" />
          <path d="M60 140 C80 120 95 100 85 70" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute right-8 bottom-1/4 hidden opacity-[0.07] lg:block">
        <svg
          width="120"
          height="300"
          viewBox="0 0 120 300"
          fill="none"
          stroke="currentColor"
          className="text-cream"
        >
          <path
            d="M60 0 C60 50 90 100 60 150 C30 200 80 250 60 300"
            strokeWidth="1"
          />
          <path d="M60 100 C90 120 110 140 100 170" strokeWidth="1" />
          <path d="M60 100 C30 120 10 140 20 170" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        {/* Small decorative element */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-cream/30" />
          <span className="font-display text-xs tracking-[0.3em] text-cream/60 uppercase">
            Peruvian Amazon
          </span>
          <span className="h-px w-12 bg-cream/30" />
        </div>

        <h1 className="font-serif text-5xl leading-tight text-cream md:text-7xl lg:text-8xl">
          Mai Niti
          <br />
          <span className="italic text-brown-200">Alternative</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-display text-lg leading-relaxed text-cream/80 md:text-xl">
          A sacred space for plant medicine healing in the heart of Peru.
          Traditional ceremonies guided by experienced curanderos, rooted in
          generations of Shipibo wisdom.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-cream px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-brown-900 transition-all hover:bg-white hover:shadow-lg"
          >
            Begin Your Journey
          </a>
          <a
            href="#about"
            className="rounded-full border border-cream/30 px-8 py-3.5 font-display text-sm font-medium tracking-wide text-cream transition-all hover:border-cream/60 hover:bg-cream/5"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-cream/40 uppercase">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
