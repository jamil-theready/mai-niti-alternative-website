import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch | Mai Niti Alternative — Plant Medicine Retreat in Peru",
  description:
    "Get in touch with Mai Niti Alternative to learn about our plant medicine healing retreats in the Peruvian Amazon. Fill out our contact form to begin your journey.",
  alternates: {
    canonical: "https://mainiti.org/contact",
  },
  openGraph: {
    title: "Get In Touch | Mai Niti Alternative",
    description:
      "Get in touch with Mai Niti Alternative. Fill out our contact form to begin your healing journey.",
    type: "website",
    url: "https://mainiti.org/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero with image */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/site/jungle-canopy.jpg"
            alt="Sunset light filtering through the Amazon jungle canopy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/55" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center lg:px-8">
          <h1 className="font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            Get In <span className="italic">Touch</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Every journey begins with a question. Whether you are ready to
            book or just exploring, we are here to help you find the right
            path.
          </p>
        </div>
      </section>

      {/* Contact Content — photo left, form right */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Photo — 2 cols (shows below form on mobile) */}
            <div className="order-2 aspect-[3/2] overflow-hidden rounded-2xl lg:order-1 lg:col-span-2 lg:aspect-auto">
              <img
                src="/images/site/retreat-4.jpg"
                alt="People connecting and sharing at a Mai Niti retreat"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right: Form — 3 cols (shows above photo on mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <h2 className="font-serif text-3xl text-brown-900 md:text-4xl">
                Send Us a <span className="italic">Message</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brown-800">
                Tell us about yourself and what draws you to plant medicine
                work. We respond to every message personally within 48 hours.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
              <p className="mt-6 text-xs text-brown-400">
                By submitting, you accept our{" "}
                <a href="/privacy-policy" className="underline underline-offset-2 hover:text-brown-600">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to begin CTA */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/site/jungle-canopy.jpg')" }}
        />
        <div className="absolute inset-0 bg-brown-900/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            Ready to Begin Your <span className="italic">Journey?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Visit our main site to learn more about our retreat programs,
            pricing, and upcoming availability.
          </p>
          <div className="mt-10">
            <a
              href="https://mainiti.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-cream px-8 py-3.5 font-display text-sm font-semibold text-brown-900 transition-all hover:bg-white hover:shadow-lg"
            >
              Visit mainiti.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
