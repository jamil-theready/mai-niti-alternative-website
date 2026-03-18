import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Mai Niti Alternative",
  description:
    "Privacy policy for Mai Niti Alternative. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://mainiti.org/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Mai Niti Alternative",
    description:
      "Privacy policy for Mai Niti Alternative. Learn how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://mainiti.org/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-brown-900 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="font-serif text-4xl text-cream md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-cream/60">
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-brown space-y-10 text-base leading-relaxed text-brown-900">
            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Introduction
              </h2>
              <p className="mt-4">
                Mai Niti Alternative (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
                your privacy and is committed to protecting the personal
                information you share with us. This Privacy Policy explains how
                we collect, use, and safeguard your information when you visit
                our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Information We Collect
              </h2>
              <p className="mt-4">We may collect the following types of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-brown-800">
                <li>
                  <strong>Personal information</strong> you provide voluntarily,
                  such as your name, email address, and phone number when you
                  fill out our contact form or communicate with us.
                </li>
                <li>
                  <strong>Health information</strong> you share during the
                  pre-screening process, including medical history and current
                  medications. This information is used solely to ensure your
                  safety during retreat.
                </li>
                <li>
                  <strong>Usage data</strong> collected automatically, such as
                  your IP address, browser type, pages visited, and time spent
                  on our site.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-brown-800">
                <li>To respond to your inquiries and communicate with you</li>
                <li>To evaluate your readiness and safety for retreat participation</li>
                <li>To improve our website and services</li>
                <li>To send you relevant information about our retreats, if you have opted in</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Data Protection
              </h2>
              <p className="mt-4">
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, disclosure, or
                destruction. Health information is treated with the highest
                level of confidentiality and is only accessible to the clinical
                and ceremonial staff who need it to ensure your safety.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Cookies
              </h2>
              <p className="mt-4">
                Our website may use cookies and similar tracking technologies to
                improve your browsing experience. You can control cookie
                preferences through your browser settings. We do not use
                cookies for advertising or tracking purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Third Party Services
              </h2>
              <p className="mt-4">
                We may use third-party services such as analytics tools and
                email providers to operate our website and communicate with you.
                These services may have access to your personal information only
                to perform tasks on our behalf and are obligated not to disclose
                or use it for other purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Your Rights
              </h2>
              <p className="mt-4">You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-brown-800">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown-900">
                Contact Us
              </h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy or how we handle
                your data, contact us at{" "}
                <a
                  href="mailto:info@mainiti.org"
                  className="text-brown-600 underline decoration-brown-600/30 underline-offset-4 hover:text-brown-900"
                >
                  info@mainiti.org
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
