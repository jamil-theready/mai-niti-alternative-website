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
}

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // Convert markdown to simple HTML
    let html = content
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
      .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
      .split("\n\n")
      .map((block) => {
        block = block.trim();
        if (!block) return "";
        if (
          block.startsWith("<h2>") ||
          block.startsWith("<h3>") ||
          block.startsWith("<ul>") ||
          block.startsWith("<ol>")
        )
          return block;
        if (block.startsWith("<li>")) return `<ul>${block}</ul>`;
        return `<p>${block}</p>`;
      })
      .filter(Boolean)
      .join("\n\n");

    return {
      slug: data.slug || filename.replace(".md", ""),
      title: data.title || "",
      excerpt: data.excerpt || "",
      category: data.category || "",
      date: data.date || "",
      readTime: data.readTime || "",
      image: data.image || "",
      imageAlt: data.imageAlt || "",
      content: html,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
