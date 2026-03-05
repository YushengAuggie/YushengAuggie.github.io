# Personal Website Rebuild - auggie.github.io

## Project Status: Ready to Plan Implementation

---

## About
- **Name:** Yusheng Ding
- **Aliases:** Auggie, Formatmemory
- **Background:** Grew up in China, lives in U.S. Survived the 2008 Sichuan earthquake.
- **Philosophy:** Curious about life, enjoys helping people, believes in making a difference.
- **Tagline:** "Life is like a piece of code, full of uncertainties."

## Online Presence
- GitHub: YushengAuggie
- Email: auggie1024.d@gmail.com
- Twitter: @ThinkleDing
- Instagram: @formatmemory

---

## Design Decisions (Finalized)

### Purpose & Audience
- Both professional portfolio and personal expression
- Broad audience — recruiters, devs, friends, curious strangers

### Site Structure (Hybrid Layout)
**Landing Page (single scroll):**
1. **Hero** — "Yusheng Ding" + tagline + subtle animated background
2. **About preview** — short bio with scroll-triggered reveal
3. **Featured projects** — 2-3 highlighted project cards (TBD which ones)
4. **Recent blog posts** — latest 2-3 articles
5. **Photography teaser** — a small gallery or featured shots
6. **Footer** — social links, contact

**Dedicated Pages:**
- `/projects` — full list of projects with descriptions, links, tech tags
- `/blog` — list of all posts, with individual `/blog/[slug]` pages
- `/photos` — photography gallery
- `/about` — full story (expanded from landing page preview)

### Visual Style
- **Creative portfolio** feel with **smooth animations**
  - Scroll-triggered reveals (fade in, slide up)
  - Page transitions
  - Hover effects on cards and links
- **Light mode only**
- **Color palette:** TBD — I'll propose options (user said "surprise me")
- **Photography** included as personal media

### Identity
- Hero displays **"Yusheng Ding"** (full name, no alias in hero)

### Tech Stack
- **Next.js** (static export for GitHub Pages)
- **Markdown files** in repo for blog content
- **GitHub Pages** hosting (yushengauggie.github.io)
- Animation library: Framer Motion (recommended for React)
- Styling: CSS Modules or Tailwind CSS (TBD)

---

## Open Items for Build Phase
- [ ] Choose color palette + typography
- [ ] Select which projects to feature
- [ ] Write/update About Me content
- [ ] Decide on animation library (Framer Motion vs CSS-only)
- [ ] Decide on styling approach (Tailwind vs CSS Modules)
- [ ] Set up Next.js project with static export
- [ ] Configure GitHub Actions for deployment
- [ ] Create initial blog post(s)
- [ ] Gather photography to include
