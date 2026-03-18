"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  {
    number: "1",
    title: "Explore and Arrive",
    description:
      "The journey begins with honest inquiry. We help you understand what draws you toward deep healing, what to expect, and how to take the first step with confidence.",
  },
  {
    number: "2",
    title: "Prepare with Intention",
    description:
      "Preparation is the foundation of a meaningful experience. We provide structured guidance on physical, emotional, and mental readiness.",
  },
  {
    number: "3",
    title: "Immerse in Healing",
    description:
      "In a safe and sacred space held by experienced guides, you enter the heart of the work. Surrounded by nature and ancestral wisdom.",
  },
  {
    number: "4",
    title: "Integrate and Grow",
    description:
      "What happens after is just as important as what happens during. We offer ongoing integration support to help you make sense of your experience.",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - track.offsetWidth;

    const st = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden bg-cream-light bg-grid-subtle">
      <div className="flex min-h-screen items-center">
        <div className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="inline-block rounded-full border border-brown-200 bg-cream px-4 py-1.5 font-display text-xs font-semibold tracking-[0.15em] text-brown-800 uppercase">
                  The Journey
                </span>
                <h2 className="mt-6 font-serif text-5xl font-bold leading-tight text-brown-900 md:text-7xl">
                  What Your Path Looks Like
                  <br />
                  <span className="italic">in Four Stages</span>
                </h2>
              </div>
              <p className="text-base leading-relaxed text-brown-800 md:text-lg lg:text-right">
                Every meaningful transformation follows a natural rhythm. Here is the path that brings people from confusion and pain to clarity and renewal.
              </p>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div ref={trackRef} className="mt-14 flex gap-6 pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="w-[340px] flex-shrink-0 rounded-2xl border border-brown-200/60 bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-lg md:w-[380px]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brown-900 font-serif text-2xl text-brown-900">
                  {stage.number}
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-brown-900">
                  {stage.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brown-800">
                  {stage.description}
                </p>
              </div>
            ))}
            {/* Spacer for last card */}
            <div className="w-16 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
