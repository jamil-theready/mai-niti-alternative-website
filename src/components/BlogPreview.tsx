import { blogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 5);
  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);
  const bottomPosts = posts.slice(3, 5);

  return (
    <section id="blog" className="bg-cream-light bg-grid-subtle py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold leading-tight text-brown-900 md:text-7xl">
            Inspiring Insights for
            <br />
            <span className="italic">Lasting Growth</span>
          </h2>
        </div>

        {/* Asymmetric layout: large left + 2 stacked right */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured large card */}
          <a
            href={`/blog/${featured.slug}`}
            className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl lg:aspect-auto lg:row-span-2"
          >
            {featured.image ? (
              <div className="absolute inset-0 bg-brown-200/30">
                <img
                  src={featured.image}
                  alt={featured.imageAlt || featured.title}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/20 to-transparent" />
            <div className="relative z-10 p-8 md:p-10">
              <span className="mb-4 inline-block rounded-full bg-forest px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                {featured.category}
              </span>
              <h3 className="font-serif text-3xl font-bold leading-snug text-cream md:text-4xl">
                {featured.title}
              </h3>
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
          </a>

          {/* 2 stacked cards on right */}
          {sidePosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex aspect-[2/1] flex-col justify-end overflow-hidden rounded-2xl"
            >
              {post.image ? (
                <div className="absolute inset-0 bg-brown-200/30">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-900" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />
              <div className="relative z-10 p-6 md:p-8">
                <span className="mb-2 inline-block rounded-full bg-forest px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-bold leading-snug text-cream md:text-2xl">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* 2 more cards below */}
        {bottomPosts.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {bottomPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex aspect-[2/1] flex-col justify-end overflow-hidden rounded-2xl"
              >
                {post.image ? (
                  <div className="absolute inset-0 bg-brown-200/30">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brown-800 to-brown-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />
                <div className="relative z-10 p-6 md:p-8">
                  <span className="mb-2 inline-block rounded-full bg-forest px-3 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug text-cream md:text-2xl">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Read more button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-brown-900 px-8 py-3.5 font-display text-sm font-semibold tracking-wide text-cream transition-all hover:bg-brown-800 hover:shadow-lg"
          >
            Read more
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
