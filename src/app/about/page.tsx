import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Mai Niti Alternative | Traditional Healing Center in the Peruvian Amazon",
  description:
    "Learn about Mai Niti Alternative, a plant medicine healing center in Pucallpa, Peru. Rooted in Shipibo tradition with over 15 years of experience guiding sacred ceremonies.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-brown-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="font-display text-xs tracking-[0.3em] text-brown-300 uppercase">
            Our Story
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            Rooted in the <span className="italic">Amazon</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Mai Niti Alternative is a traditional plant medicine healing center
            in the Peruvian Amazon. For over 15 years, we have held space for
            people seeking deep transformation through ancestral Shipibo
            practices.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brown-900/5">
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
                    Center in the Amazon
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="font-display text-xs tracking-[0.2em] text-brown-800 uppercase">
                Our Mission
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
                Healing Is a <span className="italic">Return</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-brown-900">
                <p>
                  We exist to preserve and share the Shipibo healing tradition
                  with those who are ready to receive it. This is not wellness
                  tourism. This is real medicine, held in the way it has been
                  held for generations.
                </p>
                <p>
                  Our curanderos trained for decades under master healers in the
                  Shipibo lineage. They carry icaros passed down through
                  generations. They know the plants, the songs, and the work
                  because they have lived it since childhood.
                </p>
                <p>
                  We believe healing is not something you acquire. It is
                  something you return to. The plants help you remember what
                  your body and spirit already know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shipibo Tradition */}
      <section className="bg-brown-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-display text-xs tracking-[0.2em] text-brown-300 uppercase">
              Our Lineage
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
              The Shipibo <span className="italic">Tradition</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/80">
              <p>
                The Shipibo people of the Ucayali River region are among the
                most respected healers in the Amazon basin. Their tradition
                centers on a deep relationship with master plants, sacred songs
                called icaros, and the practice of the dieta.
              </p>
              <p>
                Icaros are not just melodies. They are medicine. Each song
                carries specific healing frequencies that the curandero channels
                during ceremony. The songs open pathways, clear blockages, and
                guide the healing process with precision.
              </p>
              <p>
                The Shipibo are also known for their kene art, geometric
                patterns that represent the energetic maps of healing. These
                designs appear in their textiles, ceramics, and body art, and
                reflect the deep visual dimension of their medicine work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-xs tracking-[0.2em] text-brown-800 uppercase">
              How We Work
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
              Our <span className="italic">Approach</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pre-Screening",
                description:
                  "Every participant completes a thorough intake before arrival. We review medical history, current medications, and psychological readiness. This protects you and everyone in ceremony.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="4" y="4" width="20" height="20" rx="3" />
                    <path d="M10 14L13 17L18 11" />
                  </svg>
                ),
              },
              {
                title: "Preparation Guidance",
                description:
                  "We send detailed preparation guidelines weeks before your arrival. Diet, lifestyle adjustments, intention setting. You will arrive informed and ready for the work ahead.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M14 4V24" />
                    <path d="M14 10C10 8 6 6 8 2" />
                    <path d="M14 10C18 8 22 6 20 2" />
                    <path d="M14 16C10 14 7 12 9 8" />
                    <path d="M14 16C18 14 21 12 19 8" />
                  </svg>
                ),
              },
              {
                title: "Small Groups",
                description:
                  "We keep ceremony groups intentionally small. More attention from the curandero. More space for your process. No overcrowded retreats. No assembly-line healing.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="14" cy="8" r="4" />
                    <circle cx="6" cy="20" r="3" />
                    <circle cx="22" cy="20" r="3" />
                  </svg>
                ),
              },
              {
                title: "Traditional Ceremony",
                description:
                  "Ceremonies follow the authentic Shipibo protocol. Icaros sung throughout the night. The curandero works with each participant individually. Nothing commercial. Nothing diluted.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M14 4C14 14 8 12 8 20C8 24 11 26 14 26C17 26 20 24 20 20C20 12 14 14 14 4Z" />
                    <path d="M14 10C12 14 10 16 10 20" />
                    <path d="M14 10C16 14 18 16 18 20" />
                  </svg>
                ),
              },
              {
                title: "Integration Support",
                description:
                  "The ceremony is just the beginning. We hold integration circles during your stay and offer guidance after you leave. The real transformation happens when you bring the lessons home.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="14" cy="14" r="10" />
                    <circle cx="14" cy="14" r="4" />
                    <path d="M14 4V10" />
                    <path d="M14 18V24" />
                    <path d="M4 14H10" />
                    <path d="M18 14H24" />
                  </svg>
                ),
              },
              {
                title: "Immersed in Nature",
                description:
                  "Our center sits deep in the Peruvian Amazon near Yarinacocha. The jungle is part of your healing. The sounds of the river, the birds, and the rain on the maloca roof do half the work.",
                icon: (
                  <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M14 26V12" />
                    <path d="M14 18C8 16 4 10 6 4" />
                    <path d="M14 18C20 16 24 10 22 4" />
                    <path d="M8 26H20" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brown-200/60 bg-white p-8"
              >
                <div className="mb-5 inline-flex rounded-xl bg-brown-900/5 p-3 text-brown-600">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-brown-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-cream-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="font-display text-xs tracking-[0.2em] text-brown-800 uppercase">
                Where We Are
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
                Pucallpa &amp; <span className="italic">Yarinacocha</span>
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-brown-900">
                <p>
                  Our center is located near Yarinacocha, a stunning oxbow lake
                  outside of Pucallpa in the Ucayali region of Peru. This area
                  has been a center of Shipibo healing for centuries.
                </p>
                <p>
                  Unlike the heavily touristed Sacred Valley, the Pucallpa
                  region remains authentic. The traditions here are practiced
                  daily, not performed for visitors. When you come to Mai Niti,
                  you are stepping into a living culture.
                </p>
                <p>
                  Pucallpa is accessible by a short domestic flight from Lima.
                  We arrange ground transportation from the airport to our
                  center so your arrival is smooth and stress free.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-10 inline-block rounded-full bg-brown-900 px-7 py-3 font-display text-sm font-medium text-cream transition-colors hover:bg-brown-800"
              >
                Plan Your Visit
              </a>
            </div>

            {/* Image placeholder */}
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brown-900/5">
              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-forest/5 via-brown-900/5 to-brown-600/10 p-12 text-center">
                <svg
                  className="mb-6 h-16 w-16 text-forest/30"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M32 56V20" />
                  <path d="M32 36C20 32 12 20 16 8" />
                  <path d="M32 36C44 32 52 20 48 8" />
                  <path d="M32 48C26 44 20 38 22 28" />
                  <path d="M32 48C38 44 44 38 42 28" />
                  <path d="M16 56H48" />
                </svg>
                <p className="font-display text-sm text-brown-600/60">
                  Yarinacocha, Peruvian Amazon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brown-900 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "15+", label: "Years of Practice" },
              { number: "500+", label: "Guests Hosted" },
              { number: "100%", label: "Traditional Methods" },
              { number: "24/7", label: "On-Site Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl text-cream">{stat.number}</p>
                <p className="mt-2 font-display text-xs tracking-wide text-cream/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
            Ready to Begin Your <span className="italic">Journey?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brown-800">
            Whether you are drawn to a single ceremony or a deep multi-week
            dieta, it starts with a conversation. Reach out and let us help you
            find the right path.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-brown-900 px-8 py-3.5 font-display text-sm font-semibold text-cream transition-colors hover:bg-brown-800"
            >
              Get in Touch
            </a>
            <a
              href="/"
              className="rounded-full border border-brown-900/20 px-8 py-3.5 font-display text-sm font-medium text-brown-900 transition-all hover:border-brown-900/40 hover:bg-brown-900/5"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
