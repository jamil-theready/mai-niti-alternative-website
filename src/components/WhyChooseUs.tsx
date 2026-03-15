const reasons = [
  {
    number: "01",
    title: "Rooted in Tradition",
    description:
      "Our ceremonies follow the Shipibo healing lineage, one of the most respected traditions in Amazonian plant medicine. Nothing commercialized. Nothing diluted. The real work, passed down through generations.",
  },
  {
    number: "02",
    title: "Safety First",
    description:
      "We screen every participant before arrival. Medical intake, psychological readiness, medication review. Our curanderos and support staff are trained to hold space through whatever arises. Your safety is non-negotiable.",
  },
  {
    number: "03",
    title: "Small Groups",
    description:
      "We keep our ceremony groups intentionally small. This means more attention from the curandero, more space for your process, and a deeper experience for everyone. No overcrowded retreats. No assembly-line healing.",
  },
  {
    number: "04",
    title: "Integration Support",
    description:
      "The ceremony is just the beginning. We provide preparation guidance before you arrive and integration support after you leave. The real transformation happens when you bring the lessons home.",
  },
  {
    number: "05",
    title: "Immersed in Nature",
    description:
      "Our center sits in the Peruvian Amazon, surrounded by jungle. The land itself is part of your healing. You will hear the river, the birds, the rain on the maloca roof. Nature does half the work.",
  },
  {
    number: "06",
    title: "Transparent Process",
    description:
      "No hidden fees. No vague promises. We explain exactly what to expect, how to prepare, what the ceremonies involve, and what your investment covers. You will arrive informed and ready.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs tracking-[0.2em] text-brown-600 uppercase">
            The Mai Niti Difference
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
            Why People <span className="italic">Trust Us</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brown-800/70">
            Choosing where to do plant medicine work is one of the most
            important decisions you will make. Here is what sets Mai Niti
            Alternative apart.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.number} className="group">
              <span className="font-serif text-4xl text-brown-200 transition-colors group-hover:text-brown-600">
                {reason.number}
              </span>
              <h3 className="mt-3 font-serif text-xl text-brown-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-800/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
