const offerings = [
  {
    title: "Knowledge Resources",
    description:
      "Explore our curated library of articles, guides, and research on ancestral healing traditions, ceremonial practices, and personal growth.",
    image: "/images/site/framer-offering-1.jpg",
    imageAlt: "Knowledge resources for healing and personal growth",
    href: "/blog",
  },
  {
    title: "Retreat Programs",
    description:
      "Join us in Peru for immersive, expertly held retreats rooted in traditional Amazonian practices and supported by modern integration methods.",
    image: "/images/site/framer-offering-2.jpg",
    imageAlt: "Immersive retreat program in the Peruvian Amazon",
    href: "/contact",
  },
  {
    title: "Integration Support",
    description:
      "Healing does not end when a retreat does. Our community and support resources help you process, ground, and grow long after ceremony.",
    image: "/images/site/framer-offering-3.jpg",
    imageAlt: "Integration and ongoing support after retreat",
    href: "/blog/integration-after-ceremony",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-center">
          <span className="rounded-full border border-brown-200 bg-cream-light px-4 py-1.5 font-display text-xs font-semibold tracking-[0.15em] text-brown-800 uppercase">
            Offerings
          </span>
        </div>
        <h2 className="mt-8 text-center font-serif text-5xl font-bold leading-tight text-brown-900 md:text-7xl">
          Resources and Experiences for
          <br />
          <span className="italic">Holistic Healing</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-brown-800 md:text-lg">
          From foundational knowledge to immersive retreat experiences, everything we offer is designed to support genuine, lasting transformation.
        </p>

        {/* 3 staircase image cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:items-start">
          {offerings.map((offering, i) => (
            <a
              key={offering.title}
              href={offering.href}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ marginTop: i === 0 ? "0" : i === 1 ? "3rem" : "6rem" }}
            >
              <div className="absolute inset-0 bg-brown-200/30">
                <img
                  src={offering.image}
                  alt={offering.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />

              <div className="relative z-10 p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-cream md:text-3xl">
                  {offering.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cream/80">
                  {offering.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
