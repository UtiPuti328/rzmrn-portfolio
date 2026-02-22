# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (Turbopack)
pnpm build            # Static export to out/
pnpm lint             # ESLint (flat config, core-web-vitals + typescript)
pnpm ship             # Build + deploy to Cloudflare Pages via wrangler
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 (App Router, static export) + React 19 + Tailwind CSS v4 + TypeScript

**Deployment:** Cloudflare Pages. `output: "export"` in next.config.ts — no server runtime, no API routes. Images are `unoptimized: true` (no server-side optimization). Contact form uses Formspree as external service.

### Data Flow

Projects are defined in `src/data/projects.ts` as a typed array (discriminated union: `VisualProject` | `SystemProject`). This is the single source of truth — no database, no CMS. Helper functions: `getFeaturedProjects()`, `getProjectBySlug()`, `getAllSlugs()`.

MDX case studies live in `content/projects/*.mdx` (read via `gray-matter` + `next-mdx-remote-client`). The `[slug]/page.tsx` merges both sources: MDX content takes precedence, non-MDX slugs render from projects.ts data.

### Routing

`/` — Home (Hero, ProjectsGrid, Stats, AboutTeaser, HomeCTA)
`/projects` — All projects grid
`/projects/[slug]` — Case study (SSG via `generateStaticParams`)
`/about`, `/contact` — Static pages

### Animation Libraries

Two animation systems:

1. **GSAP + ScrollTrigger** — scroll-driven animations (`AnimatedText`, `FontWeightScroll`, `ParallaxImage`, `GlitchHover`). Always import from `@/lib/gsap` (not `"gsap"` directly) to ensure `ScrollTrigger` is registered. Use `gsap.context()` + `.revert()` for cleanup.

2. **Lenis** — smooth scroll, wraps entire app via `SmoothScroll.tsx` in layout. Connected to GSAP ticker via `lenis.raf(time * 1000)`.

**CSS-only animations** — `FadeIn`, `StaggerChildren`, `ExpandableCard`, `TerminalProof` use IntersectionObserver + CSS transitions. No motion/react dependency.

### Styling

Tailwind v4 with `@theme inline` in `globals.css` — no `tailwind.config.js`. Design tokens (colors, fonts, easing, durations) are CSS custom properties. Dark-only theme, no light mode.

Key tokens: `--color-accent: #3B82F6`, `--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1)`, container max-width `1440px`.

Utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).

### Client vs Server Components

Most page-level components are server components. Client components (`"use client"`) are used for: interactivity (forms, expand/collapse), browser APIs (IntersectionObserver, matchMedia, mousemove), and animation libraries (GSAP, Lenis).

Custom hooks (`src/hooks/`) handle parallax tilt (rAF + lerp), text scramble effects, scroll progress, and media queries. All respect `prefers-reduced-motion`.

### Custom Cursor

`WebGLLoader` → `WebGLCanvas` (dynamic import, ssr: false). Despite the name, it's CSS-based (dot + glow trail with rAF lerp), not actual WebGL.

### Fonts

Three Google Fonts via `next/font` in `src/lib/fonts.ts`: Space Grotesk (headings), Inter (body), JetBrains Mono (code). Applied as CSS variables on `<html>`.
