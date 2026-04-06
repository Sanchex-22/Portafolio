# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Type-check with astro check, then build to ./dist/
npm run preview   # Preview production build locally
```

## Architecture

This is an **Astro 6** portfolio site with **Tailwind CSS** (via `@astrojs/tailwind`). No JS framework — all components are `.astro` files.

**Key conventions:**
- `src/layouts/Layout.astro` — base HTML shell with nav and footer; accepts a `title` prop; includes `MobileNav` component
- `src/pages/` — file-based routing; `index.astro` is the home page, `contact.astro` is the contact page; `base.css` lives here
- `src/components/` — reusable Astro components (`Main.astro` wraps page content in a centered max-width container, `mobile-nav.astro` handles the hamburger menu)
- `src/data/about-me.md` — content source for about section
- `src/images/` — SVG assets imported via `astro:assets` `Image` component

**Styling:** Tailwind utility classes inline; `src/pages/base.css` for global styles. Max content width is `max-w-2xl` in nav/footer and `max-w-4xl` in `Main.astro`.

**TypeScript:** Configured via `tsconfig.json`; `src/env.d.ts` holds Astro environment type references.
