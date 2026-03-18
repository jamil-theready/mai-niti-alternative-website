import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Mai Niti Alternative — Traditional Healing in the Peruvian Amazon",
  description:
    "Learn about Mai Niti Alternative, a plant medicine healing center in Pucallpa, Peru. Rooted in Shipibo tradition with over 15 years of experience guiding sacred ceremonies.",
  alternates: {
    canonical: "https://mainiti.org/about",
  },
  openGraph: {
    title: "About Us | Mai Niti Alternative",
    description:
      "A traditional plant medicine healing center in the Peruvian Amazon, guided by Shipibo curanderos with over 15 years of experience.",
    type: "website",
    url: "https://mainiti.org/about",
  },
};

const whyChoose = [
  {
    number: "001",
    title: "Female Shaman Led",
    description:
      "Our ceremonies are guided by experienced female Shipibo curanderas, carrying a lineage rarely found elsewhere. Their depth of knowledge and compassionate approach creates a unique healing environment.",
  },
  {
    number: "002",
    title: "Authentic Tradition",
    description:
      "Nothing commercialized. Nothing diluted. Every ceremony, every dieta, every icaro follows the Shipibo healing protocol exactly as it has been practiced for generations.",
  },
  {
    number: "003",
    title: "Flexible Stays",
    description:
      "Whether you have one week or one month, we design a program that fits your life. Single ceremonies, 7 day retreats, or extended dieta programs up to 30 days.",
  },
  {
    number: "004",
    title: "Deep Jungle Setting",
    description:
      "Our center sits near Yarinacocha in the Peruvian Amazon. Far from tourist circuits. Surrounded by jungle. The land itself is part of your healing.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero with photo */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/site/retreat-1.jpg"
            alt="Retreat participants and Shipibo healers at Mai Niti Alternative"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center lg:px-8">
          <h1 className="font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            About <span className="italic">Us</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Rooted in ancestral Shipibo tradition. Held in the heart of the
            Peruvian Amazon. A space where real healing happens.
          </p>
        </div>
      </section>

      {/* Group photo + mission */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src="/images/site/retreat-3.jpg"
              alt="Group of retreat participants gathered at the Mai Niti healing center"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
              Your Path to <span className="italic">Real Healing</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-brown-800 md:text-lg">
              <p>
                Mai Niti Alternative was founded on a simple belief: that the
                ancient healing knowledge of the Shipibo people can transform
                lives when shared with respect, integrity, and care.
              </p>
              <p>
                Our ceremonies are led by experienced Shipibo curanderas whose
                knowledge has been passed down through generations. They carry
                icaros, sacred healing songs, that open pathways and guide the
                medicine with precision. Their presence is the foundation of
                everything we do.
              </p>
              <p>
                We keep our groups small. We screen every participant. We
                provide preparation before arrival and integration support
                after departure. This is not a wellness resort. This is real
                medicine, held in the way it has been held for centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mai Niti */}
      <section className="bg-cream-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
              Why Choose <span className="italic">Mai Niti?</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.number} className="text-center">
                <span className="font-display text-sm font-medium tracking-wide text-brown-400">
                  {item.number}
                </span>
                <h3 className="mt-3 font-serif text-xl text-brown-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brown-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
                Pucallpa &amp; <span className="italic">Yarinacocha</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-brown-800">
                <p>
                  Our center is located near Yarinacocha, a stunning oxbow lake
                  outside of Pucallpa in the Ucayali region of Peru. This area
                  has been a center of Shipibo healing for centuries.
                </p>
                <p>
                  Unlike heavily touristed areas, the Pucallpa region remains
                  authentic. The traditions here are practiced daily, not
                  performed for visitors. When you come to Mai Niti, you step
                  into a living culture.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-10 inline-block rounded-full bg-brown-900 px-7 py-3 font-display text-sm font-medium text-cream transition-colors hover:bg-brown-800"
              >
                Plan Your Visit
              </a>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/site/pucallpa-yarinacocha.jpg"
                alt="The Yarinacocha lake area near Pucallpa in the Peruvian Amazon"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/site/amazon-vs-valley.jpg')" }}
        />
        <div className="absolute inset-0 bg-brown-900/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            Ready to Begin Your <span className="italic">Journey?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Whether you are drawn to a single ceremony or a deep multi-week
            dieta, it starts with a conversation.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-full bg-cream px-8 py-3.5 font-display text-sm font-semibold text-brown-900 transition-all hover:bg-white hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
