import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Journal | Mai Niti Alternative — Plant Medicine Healing Insights",
  description:
    "Articles on plant medicine, the Shipibo healing tradition, ceremony preparation, integration, and life at a traditional healing retreat in the Peruvian Amazon.",
};

export default function BlogIndex() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-brown-900 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="font-display text-xs tracking-[0.3em] text-brown-300 uppercase">
            From the Journal
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            Learn Before You <span className="italic">Journey</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Knowledge is part of the preparation. Explore our writings on plant
            medicine, the Shipibo tradition, ceremony preparation, and the
            healing path.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category filters (visual only) */}
          <div className="mb-12 flex flex-wrap gap-3">
            {["All", "Preparation", "Tradition", "Guidance", "Culture", "Wellness", "Integration"].map(
              (cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-brown-200 px-4 py-1.5 font-display text-xs font-medium tracking-wide text-brown-800"
                >
                  {cat}
                </span>
              )
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-brown-200/60 bg-white p-6 transition-all hover:border-brown-300 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-block rounded-full bg-brown-900/10 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-brown-800 uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-brown-400">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-xl leading-snug text-brown-900 transition-colors group-hover:text-brown-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-800">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-display text-xs font-medium tracking-wide text-brown-600 transition-colors group-hover:text-brown-900"
                  >
                    Read more &rarr;
                  </Link>
                  <time
                    dateTime={post.date}
                    className="text-xs text-brown-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
