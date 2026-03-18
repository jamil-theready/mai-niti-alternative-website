import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You | Mai Niti Alternative",
  description: "Your message has been received. We will get back to you soon.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-[70vh] items-center justify-center bg-cream">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
            <svg
              className="h-8 w-8 text-forest"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
            Thank <span className="italic">You</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-brown-700">
            Your message has been received. We respond to every inquiry
            personally within 48 hours.
          </p>

          <p className="mt-4 text-base text-brown-500">
            In the meantime, explore our blog or learn more about what we offer.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brown-900 px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-brown-800"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-brown-300 px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-brown-900 transition-colors hover:bg-brown-100"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
