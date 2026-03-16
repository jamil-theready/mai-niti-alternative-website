import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mai Niti Alternative | Book a Plant Medicine Retreat in Peru",
  description:
    "Get in touch with Mai Niti Alternative to learn about our plant medicine healing retreats in the Peruvian Amazon. Email, WhatsApp, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-brown-900 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="font-display text-xs tracking-[0.3em] text-brown-300 uppercase">
            Get in Touch
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            Start the <span className="italic">Conversation</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Every journey begins with a question. Whether you are ready to book
            or just exploring, we are here to help you find the right path.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-brown-900">
                Send Us a <span className="italic">Message</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brown-800">
                Tell us about yourself, what draws you to plant medicine work,
                and any questions you have. We respond to every message
                personally within 48 hours.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-brown-900">
                Other Ways to <span className="italic">Reach Us</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brown-800">
                Prefer a direct conversation? We are available by email and
                WhatsApp. We speak English and Spanish.
              </p>

              <div className="mt-10 space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brown-900/5 text-brown-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-brown-900">
                      Email
                    </h3>
                    <a
                      href="mailto:info@mainiti.org"
                      className="mt-1 text-base text-brown-600 underline decoration-brown-600/30 underline-offset-4 transition-colors hover:text-brown-900"
                    >
                      info@mainiti.org
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brown-900/5 text-brown-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-brown-900">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/51961741743"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-base text-brown-600 underline decoration-brown-600/30 underline-offset-4 transition-colors hover:text-brown-900"
                    >
                      +51 961 741 743
                    </a>
                    <p className="mt-1 text-sm text-brown-800/70">
                      Fastest way to reach us
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brown-900/5 text-brown-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-brown-900">
                      Location
                    </h3>
                    <p className="mt-1 text-base text-brown-800">
                      Near Yarinacocha, Pucallpa
                    </p>
                    <p className="text-base text-brown-800">
                      Ucayali Region, Peru
                    </p>
                    <p className="mt-1 text-sm text-brown-800/70">
                      Ground transport from Pucallpa airport included
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brown-900/5 text-brown-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a18.956 18.956 0 01-3.485 3.075 1 1 0 11-1.106-1.664 16.953 16.953 0 003.09-2.744 18.87 18.87 0 01-1.881-3.66H2a1 1 0 110-2h4V3a1 1 0 011-1zm7.271 9.271a1 1 0 011.458 0l3 3a1 1 0 11-1.458 1.458L15.5 13.957l-1.771 1.772a1 1 0 11-1.458-1.458l3-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-brown-900">
                      Languages
                    </h3>
                    <p className="mt-1 text-base text-brown-800">
                      English, Spanish, Shipibo
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brown-900/5 text-brown-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.54 5.46l-1.07 5.06c-.08.36-.29.45-.58.28l-1.6-1.18-.77.74c-.09.09-.16.16-.32.16l.11-1.6 2.9-2.62c.13-.11-.03-.17-.19-.06l-3.58 2.26-1.54-.48c-.34-.11-.34-.34.07-.5l6.03-2.32c.28-.1.52.07.43.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide text-brown-900">
                      Follow Us
                    </h3>
                    <div className="mt-2 flex gap-4">
                      <a
                        href="https://www.facebook.com/mainitialternative"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brown-600 transition-colors hover:text-brown-900"
                        aria-label="Facebook"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/mainitialternative"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brown-600 transition-colors hover:text-brown-900"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@mainitialternative"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brown-600 transition-colors hover:text-brown-900"
                        aria-label="YouTube"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Include */}
              <div className="mt-12 rounded-2xl border border-brown-200/60 bg-white p-8">
                <h3 className="font-serif text-xl text-brown-900">
                  What to Include in Your Message
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brown-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown-600" />
                    Your approximate travel dates or timeframe
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown-600" />
                    Whether this is your first time working with plant medicine
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown-600" />
                    What type of retreat interests you (ceremony, dieta, or both)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brown-600" />
                    Any questions or concerns you have
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
