"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = parallaxRef.current?.querySelector(
      "[data-parallax-layers]"
    );
    if (!trigger) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
      },
    });

    const layers = [
      { layer: "1", yPercent: 0 },
      { layer: "2", yPercent: 15 },
      { layer: "3", yPercent: 20 },
      { layer: "4", yPercent: 100 },
    ];

    layers.forEach((l, i) => {
      tl.to(
        trigger.querySelectorAll(`[data-parallax-layer="${l.layer}"]`),
        { yPercent: l.yPercent, ease: "none" },
        i === 0 ? undefined : "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(trigger);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative">
      <section className="relative h-[150vh]">
        {/* Parallax layers container */}
        <div
          data-parallax-layers
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          {/* Layer 1: Sky */}
          <img
            data-parallax-layer="1"
            src="/images/hero/sky.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Layer 2: Mountains */}
          <img
            data-parallax-layer="2"
            src="/images/hero/mountains.webp"
            alt="Green mountain valley with turquoise lake in the Peruvian highlands"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          {/* Layer 3: Heading text */}
          <div
            data-parallax-layer="3"
            className="absolute inset-0 z-10 flex flex-col items-center justify-start px-6 pt-[22vh] md:pt-[18vh]"
          >
            <h1 className="text-center font-serif text-4xl font-normal leading-tight tracking-tight text-brown-900 [text-shadow:0_2px_20px_rgba(240,237,225,0.9),0_0_40px_rgba(240,237,225,0.6)] md:text-6xl lg:text-8xl">
              Ancient Wisdom for
              <br />
              <span className="italic">the Modern Seeker</span>
            </h1>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-brown-900 px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-cream transition-all hover:bg-brown-800 hover:shadow-lg"
              >
                Start your journey
              </a>
              <a
                href="/about"
                className="rounded-full border-2 border-brown-900/30 bg-cream/80 px-8 py-3.5 font-display text-sm font-medium tracking-wide text-brown-900 backdrop-blur-sm transition-all hover:bg-cream"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Layer 4: Hiker */}
          <img
            data-parallax-layer="4"
            src="/images/hero/hiker.webp"
            alt="Hiker standing on cliff overlooking the valley"
            className="pointer-events-none absolute bottom-[3%] left-1/2 z-[5] w-[40vw] -translate-x-1/2 md:w-[35vw] lg:w-[28vw]"
          />
        </div>
      </section>
    </div>
  );
}
