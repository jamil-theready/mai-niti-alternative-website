const blogPosts = [
  {
    slug: "what-is-a-dieta-plant-medicine-explained",
    title: "What Is a Dieta? Plant Medicine Tradition Explained",
    excerpt:
      "The dieta is one of the most important yet misunderstood aspects of Amazonian plant medicine. Learn what it involves, why it matters, and how it deepens the healing process.",
    category: "Tradition",
  },
  {
    slug: "what-to-expect-healing-retreat-peru",
    title: "What to Expect at a Healing Retreat in Peru",
    excerpt:
      "Your first plant medicine retreat can feel daunting. Here is a clear, honest walkthrough of what happens before, during, and after, so you can arrive prepared.",
    category: "Preparation",
  },
  {
    slug: "how-to-prepare-for-ceremony",
    title: "How to Prepare for a Sacred Ceremony",
    excerpt:
      "Preparation is half the journey. From dietary guidelines to setting intentions, this guide covers everything you need to do in the weeks before ceremony.",
    category: "Preparation",
  },
  {
    slug: "retreat-anxiety-how-to-manage-fear",
    title: "Retreat Anxiety: How to Manage Fear Before Ceremony",
    excerpt:
      "Feeling nervous before your first ceremony is completely normal. Here is how to work with that anxiety instead of letting it hold you back from healing.",
    category: "Wellness",
  },
  {
    slug: "amazon-vs-sacred-valley-retreats-which-is-right",
    title: "Amazon vs Sacred Valley: Which Retreat Setting Is Right for You?",
    excerpt:
      "Peru offers two very different landscapes for plant medicine work. We compare the Amazon jungle and Sacred Valley settings to help you choose the right fit.",
    category: "Guidance",
  },
  {
    slug: "pucallpa-yarinacocha-healing-traditions",
    title: "Pucallpa and Yarinacocha: A Living Tradition of Healing",
    excerpt:
      "The Pucallpa-Yarinacocha region has been a center of Shipibo healing for centuries. Discover why this area remains the heartbeat of Amazonian plant medicine.",
    category: "Culture",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-cream-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-display text-xs tracking-[0.2em] text-brown-800 uppercase">
              From the Journal
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-900 md:text-5xl">
              Learn Before <span className="italic">You Journey</span>
            </h2>
          </div>
          {/* TODO: Link to actual /blog page once built */}
          <a
            href="/blog"
            className="font-display text-sm font-medium text-brown-800 underline decoration-brown-800/30 underline-offset-4 transition-colors hover:text-brown-900"
          >
            View all articles
          </a>
        </div>

        {/* Blog grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-brown-200/60 bg-white p-6 transition-all hover:border-brown-300 hover:shadow-lg md:p-8"
            >
              <span className="mb-4 inline-block w-fit rounded-full bg-brown-900/10 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-brown-800 uppercase">
                {post.category}
              </span>
              <h3 className="font-serif text-xl leading-snug text-brown-900 transition-colors group-hover:text-brown-600">
                {/* TODO: Link to actual blog post page */}
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-900">
                {post.excerpt}
              </p>
              <div className="mt-6">
                <a
                  href={`/blog/${post.slug}`}
                  className="font-display text-xs font-medium tracking-wide text-brown-600 transition-colors group-hover:text-brown-900"
                >
                  Read more &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
