"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  imageAlt?: string;
  category: string;
}

const CATEGORIES = [
  "All",
  "Preparation",
  "Tradition",
  "Guidance",
  "Culture",
  "Wellness",
  "Integration",
];

const POSTS_PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setVisibleCount(POSTS_PER_PAGE);
  }

  return (
    <>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`rounded-full border px-4 py-1.5 font-display text-xs font-medium tracking-wide transition-colors ${
              activeCategory === cat
                ? "border-brown-900 bg-brown-900 text-cream"
                : "border-brown-200 text-brown-800 hover:bg-brown-900 hover:text-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3-column grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
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

      {/* Load More */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
            className="rounded-full border-2 border-brown-900/20 bg-cream px-8 py-3 font-display text-sm font-medium tracking-wide text-brown-900 transition-all hover:border-brown-900 hover:bg-brown-900 hover:text-cream"
          >
            Load more articles
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="py-12 text-center text-brown-600">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}
