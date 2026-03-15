export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brown-900 py-24 md:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(104,56,38,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(22,66,15,0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="font-display text-xs tracking-[0.2em] text-brown-300 uppercase">
          Begin Your Healing
        </span>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
          The Jungle Is <span className="italic">Calling</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/60">
          Whether you are drawn to a single ceremony or a deep multi-week dieta,
          your journey begins with a conversation. Reach out and we will help
          you find the right path.
        </p>

        {/* Contact options */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* TODO: Replace with actual booking/contact form link */}
          <a
            href="mailto:info@mainiti-alternative.com"
            className="w-full rounded-full bg-cream px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-brown-900 transition-all hover:bg-white hover:shadow-lg sm:w-auto"
          >
            Contact Us
          </a>
          {/* TODO: Replace with actual WhatsApp number */}
          <a
            href="https://wa.me/51000000000"
            className="w-full rounded-full border border-cream/20 px-8 py-3.5 font-display text-sm font-medium tracking-wide text-cream transition-all hover:border-cream/40 hover:bg-cream/5 sm:w-auto"
          >
            WhatsApp
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-brown-700/50 pt-12 sm:flex-row sm:gap-12">
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">500+</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/50">
              Guests Hosted
            </p>
          </div>
          <div className="hidden h-8 w-px bg-brown-700/50 sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">15+</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/50">
              Years of Practice
            </p>
          </div>
          <div className="hidden h-8 w-px bg-brown-700/50 sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">100%</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/50">
              Traditional Methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
