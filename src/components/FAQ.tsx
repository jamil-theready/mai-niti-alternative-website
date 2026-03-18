"use client";

import { useState } from "react";

const faqs = [
  {
    number: "001",
    question: "What kind of healing work does Mai Niti offer?",
    answer:
      "We facilitate traditional Shipibo healing retreats in the Peruvian Amazon. Our programs are rooted in ancestral plant medicine traditions and guided by experienced indigenous healers.",
  },
  {
    number: "002",
    question: "Do I need previous experience with plant medicine?",
    answer:
      "No. Many of our guests are coming to this work for the first time. Our team prepares you thoroughly before, during, and after.",
  },
  {
    number: "003",
    question: "How long are the retreats?",
    answer:
      "Our retreats typically run between 7 and 14 days. The length depends on the program and your personal goals. Longer stays are available.",
  },
  {
    number: "004",
    question: "Is it safe?",
    answer:
      "Your safety is our highest priority. Every ceremony is led by experienced Shipibo healers with decades of practice. We screen every participant.",
  },
  {
    number: "005",
    question: "What should I do to prepare?",
    answer:
      "Preparation includes dietary guidelines, reducing screen time, and setting a clear personal intention. We send a detailed guide.",
  },
  {
    number: "006",
    question: "What happens after the retreat?",
    answer:
      "Integration is where the real transformation takes root. We provide post-retreat support including follow-up calls, integration resources, and community connection.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream bg-grid-subtle py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header — left aligned */}
        <div>
          <span className="inline-block rounded-full border border-brown-200 bg-cream-light px-4 py-1.5 font-display text-xs font-semibold tracking-[0.15em] text-brown-800 uppercase">
            Faq
          </span>
          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight text-brown-900 md:text-7xl">
            Honest Answers to the Questions
            <br />
            <span className="italic">People Actually Ask</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brown-800 md:text-lg">
            Whether you are entirely new to this world or looking to deepen your understanding, here is what you need to know before you begin.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-14">
          {faqs.map((faq, index) => (
            <div
              key={faq.number}
              className="group cursor-pointer border-b border-brown-200/60 transition-colors hover:bg-brown-100/20"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full cursor-pointer items-center gap-6 py-6 text-left"
              >
                <span className="shrink-0 font-display text-sm font-medium tracking-wide text-brown-400 transition-colors group-hover:text-brown-600">
                  {faq.number}
                </span>
                <span className="flex-1 font-serif text-lg text-brown-900 transition-colors group-hover:text-brown-600 md:text-xl">
                  {faq.question}
                </span>
                <span
                  className="shrink-0 text-brown-400 transition-all duration-200 group-hover:scale-110"
                  style={{
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 4V16M4 10H16" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-6 pl-12 text-base leading-relaxed text-brown-800 md:pl-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
