# PaperBeam – VitePress Project

Built for **CSCI 3230U Lab 07-08**

## Overview

PaperBeam is a fictional web publishing platform documentation site built using VitePress. The site demonstrates a fully customized static documentation site with a custom theme, navigation, sidebar, and multiple content pages.

---

## Project Structure

```
docs/
├── .vitepress/
│   ├── config.mjs         # Site configuration (nav, sidebar, logo)
│   └── theme/
│       ├── index.js       # Custom theme entry point
│       └── custom.css     # Custom CSS overrides
├── public/
│   ├── logo.png           # Navbar logo
│   └── hero-logo.png      # Homepage hero image
├── learning/
│   ├── docs.md            # Documentation subpage
│   ├── cheatsheets.md     # Cheatsheets subpage
│   ├── blog.md            # Blog subpage
│   └── videos.md          # Videos subpage
├── index.md               # Homepage (hero layout)
├── products.md            # Products page
├── api.md                 # API reference page
└── contact.md             # Contact page
```

---

## Pages

### Root Pages
- **Homepage** (`/`) — Hero section with logo, gradient title, tagline, two action buttons, and three feature cards
- **Products** (`/products`) — Overview, core features list, and plan comparison table
- **API** (`/api`) — Endpoint table, JavaScript and HTML code examples, and a tip container
- **Contact** (`/contact`) — Contact options, support hours, and channel use-case table

### Learning Subpages (`/learning/`)
- **Documentation** (`/learning/docs`) — Setup steps, workspace structure table, best practices
- **Cheatsheets** (`/learning/cheatsheets`) — Common tasks, markdown syntax reference, custom containers demo, keyboard shortcuts
- **Blog** (`/learning/blog`) — Article on writing with structured tools, writing mistakes table
- **Videos** (`/learning/videos`) — Getting started and advanced video tutorial tables

---

## Features Implemented

### Part 1 – Basic VitePress Site
- Working homepage with logo, hero text, and tagline
- Two action buttons linking to Products and API pages
- Three fictional feature cards with unique emoji icons
- Six populated content pages (3 root + 3 learning subpages)
- Markdown tables on every page (2+ total)
- Emojis and icons used across pages
- Custom containers: `tip`, `info`, and `warning`
- Headings H1 and H2 used consistently
- Both bullet and numbered lists
- Code snippets: 1x JavaScript, 1x HTML (on API page)

### Part 2 – Extended Default Theme
- Navbar with site title "PaperBeam" and logo icon on the left
- Four navbar items: Products, API, Learning (dropdown), Contact
- Learning dropdown contains: Documentation, Cheatsheets, Blog, Videos
- Sidebar with two sections: **Overview** (Products, API, Contact) and **Learning** (Documentation, Cheatsheets, Blog, Videos)
- Custom CSS button styling:
  - Brand button: green (`#13b38e`)
  - Alt button: grey, turns pink (`#ee9bdd`) on hover

---

## Custom Theme

### `custom.css` Highlights
- Brand color set to `#13b38e` (green)
- Hero title uses a gradient from green to pink: `linear-gradient(90deg, #13b38e, #cc3aaf)`
- Hero logo styled with `drop-shadow` for a green/pink glow effect
- Larger hero text sizes (64px name, 54px text)
- Feature cards with rounded corners and soft background
- Light mode code blocks styled with a light background and syntax colors
- Dark mode fully supported via CSS variables throughout

### `theme/index.js`
- Extends VitePress `DefaultTheme`
- Imports `custom.css` for all overrides

---

## How to Run

```bash
npm install      # Install dependencies
npm run dev      # Start local dev server
npm run build    # Build for production
npm run serve    # Preview production build
```

Local dev runs at: `http://localhost:5173`

---

## Tech Stack
- [VitePress](https://vitepress.dev/) `v1.0.0-alpha.28`
- Vue `3.2.44`
- Markdown with VitePress custom containers
- Custom CSS (no external UI libraries)

---

## GitHub

[github.com/bushratzhn/VitePress-Project](https://github.com/bushratzhn/VitePress-Project)