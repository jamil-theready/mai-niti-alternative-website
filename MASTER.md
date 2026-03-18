# MASTER FILE: Mai Niti Alternative Website
> Last updated: March 16, 2026
> Drop this file into any AI conversation. It contains everything needed to continue building.

---

## 1. BUSINESS OVERVIEW

| Field | Value |
|-------|-------|
| Business | Mai Niti Alternative |
| Type | Plant medicine / traditional healing retreat center |
| Location | Pucallpa / Yarinacocha, Peruvian Amazon |
| Website | https://mainiti.org/ |
| Email | info@mainiti.org |
| WhatsApp | +51 961 741 743 (https://wa.me/51961741743) |
| Facebook | https://www.facebook.com/mainitialternative |
| Tradition | Shipibo (one of the most respected lineages in Amazonian plant medicine) |
| Services | Sacred ceremonies, healing retreats, dieta programs, integration support |

### BANNED WORDS (CRITICAL — Ad platforms will ban accounts)
**NEVER use these anywhere on the site:**
> ayahuasca, DMT, psychedelic, hallucinogen, drug, trip, dose

**SAFE REPLACEMENTS:**
> plant medicine, sacred ceremony, traditional healing, ancestral practice, holistic healing, Shipibo tradition, curandero, dieta, icaros

---

## 2. TECH STACK

| Tech | Version/Details |
|------|----------------|
| Framework | Next.js 15.3.2 (App Router, TypeScript) |
| Styling | Tailwind CSS 4.1.4 (`@tailwindcss/postcss`, `@theme inline`) |
| Fonts | Instrument Serif (headings), Inter (body), Instrument Sans (display/labels) |
| Output | Static export (`output: "export"`) |
| Path alias | `@/*` = `./src/*` |

### Color System (globals.css)
```css
--color-brown-900: #2a1a13    /* primary dark */
--color-brown-800: #3d2a1f
--color-brown-700: #4e3628
--color-brown-600: #683826    /* accent brown */
--color-brown-500: #7a4a35
--color-brown-400: #9b6b52
--color-brown-300: #b8917a
--color-brown-200: #d4b8a5
--color-brown-100: #e8d5c8
--color-cream: #f0ede1        /* primary background */
--color-cream-dark: #e5e0d0
--color-cream-light: #f7f5ed
--color-forest: #16420f       /* green accent */
--color-forest-light: #1e5a15
```

### Typography
```css
--font-serif: "Instrument Serif", Georgia, serif;
--font-sans: "Inter", system-ui, sans-serif;
--font-display: "Instrument Sans", system-ui, sans-serif;
```

---

## 3. REPO & GIT

```bash
# Clone and run
git clone https://github.com/jamil-theready/mai-niti-alternative-website.git
cd mai-niti-alternative-website
npm install
npm run dev -- --port 3003
# Runs on http://localhost:3003
```

**Local path**: `/Users/admin/Desktop/Clients/Mai Niti Alternative/website-repo/`

**Git history (3 commits):**
1. `c7dede3` - Add all inner pages, blog system with 15 posts, fix banned words, real contact info
2. `c81696b` - Polish: fix text contrast, shrink About placeholder, improve CTA and service cards
3. `6564997` - Initial commit: Mai Niti Alternative homepage

---

## 4. REFERENCE SITE
**CRITICAL**: The original Framer site is at **https://mainiti-alternative.framer.website**
Also live at: **https://mainiti.org/**
This is the PRIMARY design reference. Match it.

---

## 5. SITE MAP (What is Built)

```
/ ................ Homepage (Hero, About, Services, WhyChooseUs, BlogPreview, CTA, Footer)
/about ........... About page (hero, mission, Shipibo tradition, approach cards, location, stats)
/contact ......... Contact page (ContactForm, email, WhatsApp, social, location, languages)
/blog ............ Blog index (sorted by date, category filter tags)
/blog/[slug] ..... 15 individual blog posts with related posts section
/privacy-policy .. Privacy policy
```

### Components
- `Hero.tsx` - Hero banner with headline and CTAs
- `Navbar.tsx` - Navigation with hamburger mobile menu
- `About.tsx` - About section with mission, "15+ Years" floating card
- `Services.tsx` - Service cards (Sacred Ceremony, Plant Medicine Dieta, Healing Retreat, Private Ceremony)
- `WhyChooseUs.tsx` - Trust and differentiators
- `BlogPreview.tsx` - Blog preview cards on homepage
- `ContactForm.tsx` - Client component with useState, honeypot, success state
- `CTA.tsx` - Call to action with email + WhatsApp buttons, stats bar (500+ Guests, 15+ Years, 100% Traditional)
- `Footer.tsx` - 4-column footer (Brand, Retreats, Learn, Company), social links, copyright
- `ScrollReveal.tsx` - Scroll animation utility

### Blog System
- **15 blog posts** hardcoded in `src/lib/blog-data.ts` (1,006 lines)
- BlogPost interface: slug, title, excerpt, content (HTML string), category, date, readTime
- Categories: Guidance, Preparation, Tradition, Integration, Wellness, Culture
- Dates: Jan 5 - Mar 1, 2026
- Dynamic routing: `src/app/blog/[slug]/page.tsx` with `generateStaticParams` + `generateMetadata`
- Content rendered via `dangerouslySetInnerHTML` with Tailwind prose classes
- Related posts section (same category first, then fill with others)
- All 15 posts verified zero banned words
- Internal cross-linking between related posts

### Blog Posts (all 15):
1. what-is-plant-medicine (Guidance)
2. how-to-prepare-for-ceremony (Preparation)
3. the-shipibo-healing-tradition (Tradition)
4. what-is-a-dieta-plant-medicine-explained (Preparation)
5. integration-after-ceremony (Integration)
6. choosing-a-healing-retreat (Guidance)
7. the-role-of-the-curandero (Tradition)
8. plant-medicine-and-mental-health (Wellness)
9. sacred-songs-icaros (Tradition)
10. healing-trauma-with-plant-medicine (Wellness)
11. the-amazon-as-pharmacy (Culture)
12. setting-intentions-for-ceremony (Preparation)
13. community-and-healing (Integration)
14. respecting-indigenous-traditions (Culture)
15. life-after-retreat (Integration)

---

## 6. DESIGN RULES

### Style Direction
Organic Earthy — warm natural tones with soft edges. Cream backgrounds, brown text, forest green accents. Serene and professional.

### Landing Page Pattern
Hero with nature imagery > Mission/Philosophy > Services > Tradition/Story > Approach > Community > Blog Preview > CTA with stats

### Key UX Rules
- Smooth scroll behavior throughout site
- Section background transitions: alternate between cream (#F0EDE1), cream-light (#F7F5ED), cream-dark (#E5E0D0), and brown-900 (#2A1A13) dark sections
- Section padding: py-16 md:py-24 consistent
- Max content width: max-w-3xl for article text, max-w-7xl for grids
- Warm color transitions between sections (not hard cuts)
- Serif fonts (Instrument Serif) for headings create warmth and organic feel
- Display font (Instrument Sans) for labels, tags, navigation
- Body text: Inter at 16px minimum, line-height relaxed (1.625)
- Card hover: border-color transition + subtle shadow elevation
- Touch targets: minimum 44x44px on mobile
- Breakpoints: 375px > 768px > 1024px > 1280px
- All images: descriptive alt text with "plant medicine retreat Peru" naturally
- ::selection styled with brown-600 background and cream text
- Blog post prose: Tailwind prose classes for consistent article styling

### Anti-Patterns to AVOID
- Using banned words (ayahuasca, DMT, psychedelic, etc.) — CRITICAL severity
- Cold blue or sterile white backgrounds (destroys warm feeling) — MEDIUM
- Using clinical medical language for holistic healing — HIGH
- Sharp geometric shapes (should be soft, organic) — MEDIUM
- Stock photos of generic "meditation" or "yoga" — MEDIUM
- Sensationalized or appropriative treatment of indigenous traditions — HIGH
- No visual rhythm (same background every section) — MEDIUM

---

## 6b. WHAT NEEDS TO BE DONE (Priority Order)

### 1. MATCH FRAMER SITE DESIGN (Top Priority)
Visit https://mainiti-alternative.framer.website and compare EVERY section:
- Spacing, padding, margins, gaps
- Font sizes for headings, body, labels
- Colors per section (backgrounds, text)
- Layout: column widths, image placements, card designs
- Hover effects and transitions
- Mobile responsive (Framer is mobile-friendly, match it)

### 2. REPLACE PLACEHOLDER IMAGES
Current site uses SVG placeholder icons. Original has real photography.
- Download from Framer site, or use stock photos of: Peruvian Amazon jungle, traditional ceremonies, Shipibo textiles/art, retreat settings
- Blog images organized by batch at: `/Users/admin/Desktop/Clients/Mai Niti Alternative/images/` (Batch 1-5)

### 3. UPDATE NAVBAR LINKS
Some Navbar links still use hash anchors (#services, #about). Update to real routes:
- About → /about
- Contact → /contact
- Blog/Journal → /blog
- Services → scroll to #services or dedicated page

### 4. UPDATE HOMEPAGE BlogPreview
`BlogPreview.tsx` has hardcoded preview data. Should import from `src/lib/blog-data.ts` and show 3 most recent posts dynamically.

### 5. ADD SEO SCHEMA MARKUP
No schema exists yet. Add JSON-LD:
- Homepage: Organization + LocalBusiness schema
- Blog posts: Article/BlogPosting schema (headline, date, author)
- About page: Organization schema

### 6. TECHNICAL SEO
- Generate sitemap.xml (add next-sitemap or custom solution)
- Create robots.txt in /public
- Canonical URLs on all pages
- Proper heading hierarchy (h1 per page, h2, h3)
- Image alt text: descriptive, keyword-rich
- OpenGraph images for social sharing
- All page metadata optimized (title, description)

### 7. EXPAND BLOG (35 more posts to reach 50)
Content map at: `/Users/admin/Desktop/Clients/Mai Niti Alternative/blog-strategy/content-map-50-posts.md`
Batch JSON files at: `/Users/admin/Desktop/Clients/Mai Niti Alternative/blog-strategy/posts/`
14 batch files (batch_01 through batch_14) with pre-planned content.

**5 Content Clusters:**
1. **Preparation & What to Expect** (12 posts) - Highest search intent
   - Pillar: "How to Prepare for a Plant Medicine Retreat in Peru"
   - Topics: what to expect, the dieta, what to pack, signs you're ready, first time advice, setting intentions, physical prep

2. **Healing Retreats in Peru** (10 posts) - Geo-targeted for ads
   - Pillar: "Why Peru Is the World Capital of Plant Medicine Healing"
   - Topics: Amazon vs Sacred Valley, Pucallpa/Yarinacocha, travel logistics, authentic vs tourist, costs, seasonal timing

3. **Shipibo Tradition & Indigenous Healing** (10 posts) - Unique differentiator
   - Pillar: "The Shipibo Healing Tradition: An Introduction for Seekers"
   - Topics: Shipibo people, female shamans, icaros, master plants, healer training, kene art, cultural sensitivity

4. **Wellness, Mental Health & Inner Work** (10 posts) - Broadest audience
   - Pillar: "When Therapy Is Not Enough: Exploring Alternative Healing Paths"
   - Topics: ancient healing in modern wellness, burnout/anxiety, spiritual bypassing, trauma, veterans, meditation

5. **Integration & Aftercare** (8 posts) - Return traffic
   - Topics: first weeks after, journaling, integration circles, daily life, when to return, building practices

### 8. CONTACT FORM BACKEND
ContactForm.tsx is client-side only (shows success state but doesn't send data). Needs a backend:
- Netlify Forms, or
- Email API (SendGrid, Resend), or
- Simple mailto: fallback

### 9. POLISH
- Smooth scroll behavior
- Hover effects on all interactive elements
- Dark brown text on cream background must be readable
- All links verified working
- Phone/WhatsApp/email links functional
- Social media links working

---

## 7. EXTERNAL ASSETS (not in repo)

All docs at `/Users/admin/Desktop/Clients/Mai Niti Alternative/`

| Folder | Contents |
|--------|----------|
| `documents/seo/content-map-50-posts.md` | 50-post SEO content roadmap |
| `documents/seo/content-map-120-posts.md` | Full 120-post expansion roadmap |
| `documents/blog-content/batch_01.csv` | Blog batch 1 content |
| `documents/blog-content/batch_02.csv` | Blog batch 2 content |
| `documents/blog-content/batch_03.csv` | Blog batch 3 content |
| `documents/blog-content/batch_04.csv` | Blog batch 4 content |
| `documents/blog-content/*_images.xlsx` | Image recommendations per batch |
| `images/` | Blog photos organized by Batch 1-5 |

---

## 8. CONTENT RULES
- **NEVER** use banned words (ayahuasca, DMT, psychedelic, hallucinogen, drug, trip, dose)
- Always use safe language (plant medicine, sacred ceremony, traditional healing, etc.)
- Warm, earthy, organic feel (browns, creams, forest greens)
- Serene and professional (health/wellness, not tourism)
- No hyphens or em dashes
- No AI filler language
- Short meaningful sentences
- Respectful of indigenous tradition (never appropriative or sensationalized)
- All CTAs point to https://mainiti.org/ or direct contact methods
- Internal linking: every post links to 2-3 related posts + 1 cross-cluster link

---

## 9. DEFINITION OF DONE

- [ ] `npm run build` passes with zero errors
- [ ] Site matches mainiti-alternative.framer.website in design and feel
- [ ] Real images replace ALL placeholders
- [ ] Navbar links point to real pages (not hash anchors)
- [ ] BlogPreview uses real data from blog-data.ts
- [ ] SEO schema (Organization, Article) on all pages
- [ ] sitemap.xml and robots.txt generated
- [ ] All pages have optimized title + meta description + OpenGraph
- [ ] Mobile responsive matches Framer site
- [ ] Zero banned words anywhere on the site (verify with search)
- [ ] All contact links work (email, WhatsApp, Facebook)
- [ ] Contact form has working backend
- [ ] 15+ blog posts with internal cross-linking
- [ ] Site feels warm, professional, and trustworthy
- [ ] Committed and pushed to GitHub
