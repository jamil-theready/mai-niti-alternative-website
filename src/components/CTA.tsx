export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/site/framer-cta.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-brown-900/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
          Take the step you have
          <br />
          <span className="italic">been putting off.</span>
        </h2>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block rounded-full bg-cream px-10 py-4 font-display text-sm font-semibold tracking-wide text-brown-900 transition-all hover:bg-white hover:shadow-lg"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
