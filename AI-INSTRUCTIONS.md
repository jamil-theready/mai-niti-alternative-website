# AI BUILD INSTRUCTIONS: Mai Niti Alternative Website

## SETUP
```bash
cd /Users/admin/Desktop/Clients/Mai\ Niti\ Alternative/website-repo
npm install
npm run dev -- --port 3003
# Runs on http://localhost:3003
```

## TECH STACK
- Next.js 15.3.2 (App Router, TypeScript)
- Tailwind CSS 4 (`@tailwindcss/postcss`, `@theme inline` in globals.css)
- Fonts: Instrument Serif (headings), Inter (body), Instrument Sans (display/labels)
- Static export (`output: "export"`)
- Path alias: `@/*` = `./src/*`
- GitHub repo: https://github.com/jamil-theready/mai-niti-alternative-website.git

---

## BUSINESS INFO
- **Business Name**: Mai Niti Alternative
- **Type**: Plant medicine / traditional healing retreat center
- **Location**: Pucallpa / Yarinacocha, Peruvian Amazon
- **Website**: https://mainiti.org/
- **Email**: info@mainiti.org
- **WhatsApp**: +51 961 741 743 (link: https://wa.me/51961741743)
- **Facebook**: https://www.facebook.com/mainitialternative
- **Healing Tradition**: Shipibo (one of the most respected lineages in Amazonian plant medicine)
- **Services**: Sacred ceremonies, healing retreats, dieta programs, integration support

---

## BANNED WORDS (CRITICAL)
These words will get ad accounts banned. NEVER use them anywhere on the site:
- ayahuasca, DMT, psychedelic, hallucinogen, drug, trip, dose

**SAFE REPLACEMENTS:**
- plant medicine, sacred ceremony, traditional healing, ancestral practice
- holistic healing, Shipibo tradition, curandero, dieta, icaros

---

## REFERENCE SITE
The original Framer site is live at: **https://mainiti-alternative.framer.website**
Also: **https://mainiti.org/**
This is the PRIMARY design reference. Match it.

---

## COLOR SYSTEM
```css
--color-brown-900: #2a1a13    (primary dark)
--color-brown-800: #3d2a1f
--color-brown-700: #4e3628
--color-brown-600: #683826    (accent brown)
--color-brown-500: #7a4a35
--color-brown-400: #9b6b52
--color-brown-300: #b8917a
--color-brown-200: #d4b8a5
--color-brown-100: #e8d5c8
--color-cream: #f0ede1        (primary background)
--color-cream-dark: #e5e0d0
--color-cream-light: #f7f5ed
--color-forest: #16420f       (green accent)
--color-forest-light: #1e5a15
```

---

## WHAT IS ALREADY BUILT

### Pages (all working, build passes)
- `/` - Homepage (Hero, About, Services, WhyChooseUs, BlogPreview, CTA, Footer)
- `/about` - About page (6 sections: hero, mission, Shipibo tradition, approach cards, location, stats)
- `/contact` - Contact page with ContactForm component, email, WhatsApp, social links
- `/blog` - Blog index (sorted by date, category filter tags)
- `/blog/[slug]` - 15 individual blog posts with related posts section
- `/privacy-policy` - Standard privacy policy

### Components
- Hero.tsx, Navbar.tsx, Services.tsx, About.tsx, WhyChooseUs.tsx
- BlogPreview.tsx, ContactForm.tsx (client component with form state)
- CTA.tsx, Footer.tsx, ScrollReveal.tsx

### Blog System
- 15 blog posts hardcoded in `src/lib/blog-data.ts` (1,006 lines)
- Categories: Guidance, Preparation, Tradition, Integration, Wellness, Culture
- All posts are 800-1200 words, zero banned words, internally cross-linked
- Dynamic routing via `src/app/blog/[slug]/page.tsx`

### Already Fixed
- All banned words removed (verified zero instances)
- Real contact info added (info@mainiti.org, WhatsApp +51 961 741 743)
- Real Facebook link added
- Footer links updated to real routes (/about, /contact, /privacy-policy)
- Blog slugs cleaned (no banned words in URLs)

---

## WHAT NEEDS TO BE DONE

### 1. MATCH FRAMER SITE DESIGN (TOP PRIORITY)
Visit https://mainiti-alternative.framer.website and compare every section. Fix:
- Spacing, padding, margins, gaps
- Font sizes for headings, body, labels
- Colors per section (backgrounds, text)
- Layout: column widths, image placements, card designs
- Hover effects and transitions
- Mobile responsive design (Framer site is mobile-friendly)

### 2. REPLACE PLACEHOLDER IMAGES
Current site has SVG placeholder icons. The original site has real photography. Options:
- Download images from the Framer site
- Use stock photos of: Peruvian Amazon jungle, traditional ceremonies, Shipibo textiles, retreat settings
- Images are available at: `/Users/admin/Desktop/Clients/Mai Niti Alternative/images/` (organized by batch 1-5)

### 3. UPDATE NAVBAR
- Navbar links need to point to real pages (/about, /contact, /blog)
- Currently some links still use hash anchors (#services, #about)
- Match the Framer site navigation structure

### 4. ADD SEO SCHEMA MARKUP
- Homepage: Organization + LocalBusiness schema
- Blog posts: Article/BlogPosting schema with headline, date, author
- About page: Organization schema with detailed info
- Add JSON-LD via `<script type="application/ld+json">` in each page

### 5. TECHNICAL SEO
- Generate sitemap.xml (add next-sitemap or custom)
- Create robots.txt
- Add canonical URLs on all pages
- Ensure proper heading hierarchy (h1, h2, h3)
- Image alt text with descriptive, keyword-rich text
- OpenGraph images for social sharing

### 6. UPDATE HOMEPAGE BlogPreview
- Currently BlogPreview.tsx has hardcoded preview data
- Should import from `src/lib/blog-data.ts` and show the 3 most recent posts

### 7. EXPAND BLOG (50-Post Strategy)
Content planning docs exist at: `/Users/admin/Desktop/Clients/Mai Niti Alternative/blog-strategy/`
- `content-map-50-posts.md` - 50-post roadmap
- `content-map-120-posts.md` - Full 120-post roadmap
- `posts/` - 14 batch JSON files with pre-planned content
- Images organized in `/Users/admin/Desktop/Clients/Mai Niti Alternative/images/`

5 Content Clusters:
1. **Preparation & What to Expect** (12 posts) - Highest search intent
2. **Healing Retreats in Peru** (10 posts) - Geo-targeted for ads
3. **Shipibo Tradition & Indigenous Healing** (10 posts) - Unique differentiator
4. **Wellness, Mental Health & Inner Work** (10 posts) - Broadest audience
5. **Integration & Aftercare** (8 posts) - Post-experience, return traffic

### 8. POLISH
- Smooth scroll behavior
- Hover effects on all cards and buttons
- Ensure all links work
- Phone/WhatsApp links functional
- Social media links working
- Contact form needs a backend (currently client-side only)

---

## CONTENT RULES
- NEVER use banned words (ayahuasca, DMT, psychedelic, hallucinogen, drug, trip, dose)
- Warm, earthy, organic feel (browns, creams, forest greens)
- Serene and professional (health/wellness, not tourism)
- No hyphens or em dashes
- No AI filler language
- Short meaningful sentences
- Respectful of indigenous tradition (never appropriative)
- All CTAs point to https://mainiti.org/ or contact methods
- Internal linking: every post links to 2-3 related posts

---

## WHAT "DONE" LOOKS LIKE
1. Site matches mainiti-alternative.framer.website in design and feel
2. All pages render without errors, `npm run build` passes
3. Real images replace all placeholders
4. SEO metadata and schema on every page
5. Mobile responsive matches the Framer site
6. No banned words anywhere
7. All contact info links work
8. Blog system with 15+ posts, internally cross-linked
9. Site feels warm, professional, and trustworthy
