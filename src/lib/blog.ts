import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string;
  headings: { id: string; text: string; level: number }[];
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Extra
  author: string;
  tags: string[];
  language: string;
  draft: boolean;
  featured: boolean;
}

const blogDir = path.join(process.cwd(), "content/blog");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractHeadings(
  md: string
): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3}) (.+)$/gm;
  let match;
  while ((match = regex.exec(md)) !== null) {
    headings.push({
      id: slugify(match[2]),
      text: match[2],
      level: match[1].length,
    });
  }
  return headings;
}

function markdownToHtml(md: string): string {
  return (
    md
      // YouTube embeds: {% youtube VIDEO_ID %} or {% youtube https://youtube.com/watch?v=ID %}
      .replace(
        /\{%\s*youtube\s+(?:https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/))?([\w-]+)\s*%\}/g,
        '<div class="my-8 aspect-video overflow-hidden rounded-2xl"><iframe src="https://www.youtube.com/embed/$1" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="h-full w-full"></iframe></div>'
      )
      // Vimeo embeds: {% vimeo VIDEO_ID %}
      .replace(
        /\{%\s*vimeo\s+(\d+)\s*%\}/g,
        '<div class="my-8 aspect-video overflow-hidden rounded-2xl"><iframe src="https://player.vimeo.com/video/$1" title="Video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="h-full w-full"></iframe></div>'
      )
      // Images with alt text: ![alt text](url)
      .replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<figure class="my-8"><img src="$2" alt="$1" class="w-full rounded-2xl" loading="lazy" /><figcaption class="mt-3 text-center text-sm text-brown-500 italic">$1</figcaption></figure>'
      )
      // Headings with IDs for TOC linking
      .replace(/^### (.+)$/gm, (_, text) => {
        return `<h3 id="${slugify(text)}">${text}</h3>`;
      })
      .replace(/^## (.+)$/gm, (_, text) => {
        return `<h2 id="${slugify(text)}">${text}</h2>`;
      })
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
      .split("\n\n")
      .map((block) => {
        block = block.trim();
        if (!block) return "";
        if (
          block.startsWith("<h2") ||
          block.startsWith("<h3") ||
          block.startsWith("<ul>") ||
          block.startsWith("<ol>") ||
          block.startsWith("<div") ||
          block.startsWith("<figure")
        )
          return block;
        if (block.startsWith("<li>")) return `<ul>${block}</ul>`;
        return `<p>${block}</p>`;
      })
      .filter(Boolean)
      .join("\n\n")
  );
}

export function getAllPosts(includeDrafts = false): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const post: BlogPost = {
        slug: data.slug || filename.replace(".md", ""),
        title: data.title || "",
        excerpt: data.excerpt || "",
        category: data.category || "",
        date: data.date || "",
        readTime: data.readTime || "",
        image: data.image || "",
        imageAlt: data.imageAlt || "",
        content: markdownToHtml(content),
        headings: extractHeadings(content),
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        author: data.author || "Mai Niti Alternative",
        tags: data.tags || [],
        language: data.language || "en",
        draft: data.draft === true,
        featured: data.featured === true,
      };

      return post;
    })
    .filter((post) => includeDrafts || !post.draft);

  // Featured posts first, then sort by date
  return posts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.category))].sort();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.flatMap((p) => p.tags))].sort();
}
