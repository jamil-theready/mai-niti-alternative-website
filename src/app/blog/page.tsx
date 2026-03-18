import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Explore Our Blog | Mai Niti Alternative",
  description:
    "Articles on plant medicine, the Shipibo healing tradition, ceremony preparation, integration, and life at a traditional healing retreat in the Peruvian Amazon.",
  alternates: {
    canonical: "https://mainiti.org/blog",
  },
  openGraph: {
    title: "Explore Our Blog | Mai Niti Alternative",
    description:
      "Articles on plant medicine, the Shipibo healing tradition, ceremony preparation, integration, and healing retreat life.",
    type: "website",
    url: "https://mainiti.org/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      <Navbar />

      {/* Hero with image */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/site/pucallpa-yarinacocha.jpg"
            alt="Peaceful sunset over the Amazon, setting the tone for reflection and learning"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center lg:px-8">
          <h1 className="font-serif text-5xl leading-tight text-cream md:text-6xl lg:text-7xl">
            Explore Our <span className="italic">Blog</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            Knowledge is part of the preparation. Explore our writings on
            plant medicine, the Shipibo tradition, and the healing path.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-cream bg-grid-subtle py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Trending label */}
          <p className="mb-8 font-display text-xs font-semibold tracking-[0.15em] text-brown-600 uppercase">
            Trending articles
          </p>

          {/* Featured post — full width */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative mb-8 flex aspect-[2/1] flex-col justify-end overflow-hidden rounded-2xl"
          >
            {featured.image ? (
              <div className="absolute inset-0 bg-brown-200/30">
                <img
                  src={featured.image}
                  alt={featured.imageAlt || featured.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />
            <div className="relative z-10 p-8 md:p-12">
              <span className="mb-3 inline-block rounded-full bg-forest px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                {featured.category}
              </span>
              <h2 className="max-w-2xl font-serif text-3xl leading-snug text-cream md:text-4xl lg:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                {featured.excerpt}
              </p>
              <time
                dateTime={featured.date}
                className="mt-4 block font-display text-xs text-cream/50"
              >
                {new Date(featured.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </Link>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            {["All", "Preparation", "Tradition", "Guidance", "Culture", "Wellness", "Integration"].map(
              (cat) => (
                <span
                  key={cat}
                  className="cursor-pointer rounded-full border border-brown-200 px-4 py-1.5 font-display text-xs font-medium tracking-wide text-brown-800 transition-colors hover:bg-brown-900 hover:text-cream"
                >
                  {cat}
                </span>
              )
            )}
          </div>

          {/* 3-column grid for remaining posts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex aspect-[3/2] flex-col justify-end overflow-hidden rounded-2xl"
              >
                {post.image ? (
                  <div className="absolute inset-0 bg-brown-200/30">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />

                <div className="relative z-10 p-6">
                  <span className="mb-2 inline-block rounded-full bg-forest px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg leading-snug text-cream md:text-xl">
                    {post.title}
                  </h3>
                  <time
                    dateTime={post.date}
                    className="mt-2 block font-display text-xs text-cream/50"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
