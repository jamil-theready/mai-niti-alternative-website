export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brown-900 py-28 md:py-40"
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
        <h2 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
          The Jungle Is <span className="italic">Calling</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
          Whether you are drawn to a single ceremony or a deep multi-week dieta,
          your journey begins with a conversation. Reach out and we will help
          you find the right path.
        </p>

        {/* Contact options */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:info@mainiti.org"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 font-display text-sm font-semibold tracking-wide text-brown-900 transition-all hover:bg-white hover:shadow-lg sm:w-auto"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send Us an Email
          </a>
          <a
            href="https://wa.me/51961741743"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-display text-sm font-medium tracking-wide text-cream transition-all hover:border-cream/50 hover:bg-cream/10 sm:w-auto"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-brown-700/50 pt-12 sm:flex-row sm:gap-12">
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">500+</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/70">
              Guests Hosted
            </p>
          </div>
          <div className="hidden h-8 w-px bg-brown-700/50 sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">15+</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/70">
              Years of Practice
            </p>
          </div>
          <div className="hidden h-8 w-px bg-brown-700/50 sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-cream">100%</p>
            <p className="mt-1 font-display text-xs tracking-wide text-cream/70">
              Traditional Methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
