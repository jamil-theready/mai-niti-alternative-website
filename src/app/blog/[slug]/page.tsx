import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const metaTitle = post.metaTitle || post.title;
  const metaDesc = post.metaDescription || post.excerpt;

  return {
    title: `${metaTitle} | Mai Niti Alternative`,
    description: metaDesc,
    alternates: {
      canonical: `https://mainiti.org/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      type: "article",
      publishedTime: post.date,
      url: `https://mainiti.org/blog/${slug}`,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();

  // Get related posts (same category, exclude current)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough same-category, fill with others
  if (relatedPosts.length < 3) {
    const others = allPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          !relatedPosts.find((r) => r.slug === p.slug)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...others);
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "Mai Niti Alternative",
      url: "https://mainiti.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Mai Niti Alternative",
      url: "https://mainiti.org",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mainiti.org/blog/${post.slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-brown-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="rounded-full bg-brown-700/50 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-cream/80 uppercase">
              {post.category}
            </span>
            <span className="text-xs text-cream/50">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-6 block text-sm text-cream/50"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <div className="bg-cream pt-12 md:pt-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="aspect-[2/1] overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article
            className="prose-article [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-brown-900 [&>h2]:md:text-3xl [&>p]:mb-5 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-brown-800 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:text-base [&>ul]:leading-relaxed [&>ul]:text-brown-800 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol]:text-base [&>ol]:leading-relaxed [&>ol]:text-brown-800 [&_a]:text-brown-600 [&_a]:underline [&_a]:decoration-brown-600/30 [&_a]:underline-offset-4 hover:[&_a]:text-brown-900 [&_strong]:font-semibold [&_strong]:text-brown-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Journal */}
          <div className="mt-16 border-t border-brown-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-display text-sm font-medium text-brown-600 transition-colors hover:text-brown-900"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 4L6 8L10 12" />
              </svg>
              Back to Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-cream-light py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-brown-900">
              Continue <span className="italic">Reading</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="group flex flex-col rounded-2xl border border-brown-200/60 bg-white p-6 transition-all hover:border-brown-300 hover:shadow-lg md:p-8"
                >
                  <span className="mb-4 inline-block w-fit rounded-full bg-brown-900/10 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-brown-800 uppercase">
                    {related.category}
                  </span>
                  <h3 className="font-serif text-lg leading-snug text-brown-900 transition-colors group-hover:text-brown-600">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-800">
                    {related.excerpt.slice(0, 120)}...
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="font-display text-xs font-medium tracking-wide text-brown-600 transition-colors group-hover:text-brown-900"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
