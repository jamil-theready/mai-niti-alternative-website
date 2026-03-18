import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="flex min-h-[60vh] items-center justify-center bg-cream pt-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h1 className="font-serif text-6xl text-brown-900">404</h1>
          <p className="mt-4 text-base leading-relaxed text-brown-800">
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="mt-8 inline-block rounded-full bg-brown-900 px-8 py-3 font-display text-sm font-medium text-cream transition-colors hover:bg-brown-800"
          >
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
