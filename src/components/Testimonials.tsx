"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    image: "/images/site/framer-person-1.webp",
    imageAlt: "Sarah M., retreat guest",
    quote:
      "I came carrying years of grief I had no language for. What I found in Peru gave me that language and then some.",
    challenge:
      "After years of conventional therapy, Sarah still felt disconnected from herself and unable to move past long-held emotional patterns.",
    solution:
      "A week-long retreat in Peru gave her a new framework for understanding her experience and a community to continue the work.",
  },
  {
    name: "Marcus T.",
    image: "/images/site/framer-person-2.webp",
    imageAlt: "Marcus T., retreat guest",
    quote:
      "Nothing in my life compares to what I learned about myself during that week. It reshaped everything.",
    challenge:
      "Marcus had built a successful career but felt increasingly hollow, disconnected from purpose and unable to slow down.",
    solution:
      "The retreat and subsequent integration work helped him reconnect with his values and redesign his daily life around what truly matters.",
  },
  {
    name: "Elena R.",
    image: "/images/site/framer-person-3.webp",
    imageAlt: "Elena R., retreat guest",
    quote:
      "I was skeptical going in. I left with a clarity I had spent a decade searching for.",
    challenge:
      "Elena struggled with chronic anxiety and a deep sense that something fundamental was out of alignment in her life.",
    solution:
      "The ceremonial experience, combined with pre and post retreat support, gave her tools and insights that no previous approach had provided.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-brown-200 bg-cream px-4 py-1.5 font-display text-xs font-semibold tracking-[0.15em] text-brown-800 uppercase">
            Experiences
          </span>
          <h2 className="mt-8 font-serif text-5xl font-bold leading-tight text-brown-900 md:text-7xl">
            What People Carry Home
            <br />
            <span className="italic">from Their Journey</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brown-800 md:text-lg">
            These are the words of people who arrived searching for something and left with more than they expected.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="grid overflow-hidden rounded-2xl bg-cream md:grid-cols-2">
                    {/* Photo side */}
                    <div className="relative aspect-[4/5] md:aspect-auto">
                      <img
                        src={t.image}
                        alt={t.imageAlt}
                        className="h-full w-full object-cover"
                      />
                      {/* Quote overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <span className="font-serif text-5xl leading-none text-cream/30">&ldquo;</span>
                        <p className="mt-2 font-serif text-xl italic leading-snug text-cream md:text-2xl">
                          {t.quote}
                        </p>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <div className="mb-6">
                        <div className="mb-2 flex items-center gap-2 font-display text-xs font-semibold tracking-wide text-brown-600 uppercase">
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                          </svg>
                          Challenge
                        </div>
                        <p className="text-base leading-relaxed text-brown-800">{t.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <div className="mb-2 flex items-center gap-2 font-display text-xs font-semibold tracking-wide text-forest uppercase">
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                          Path Forward
                        </div>
                        <p className="text-base leading-relaxed text-brown-800">{t.solution}</p>
                      </div>

                      <div className="border-t border-brown-200/60 pt-5">
                        <p className="font-serif text-lg font-bold text-brown-900">{t.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots + arrows */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => setActive(active > 0 ? active - 1 : testimonials.length - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brown-300 text-brown-600 transition-colors hover:bg-brown-900 hover:text-cream"
              aria-label="Previous testimonial"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 4L6 8L10 12" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex h-6 min-w-[24px] items-center justify-center rounded-full transition-all`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`block h-2.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-brown-900" : "w-2.5 bg-brown-300"
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={() => setActive(active < testimonials.length - 1 ? active + 1 : 0)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brown-300 text-brown-600 transition-colors hover:bg-brown-900 hover:text-cream"
              aria-label="Next testimonial"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 4L10 8L6 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
