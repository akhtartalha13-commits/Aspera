# Aspera USA — React Website

A modern, fully responsive React rebuild of the Aspera USA corporate manufacturing site.
The original multi-page static HTML has been converted into a component-driven
single-page application with client-side routing, a centralized design system, a
data-driven content layer, and route-level code splitting.

> **Heads up:** this project was scaffolded in an environment without Node installed,
> so it ships as source only — run `npm install` once to pull dependencies, then use
> the scripts below. Everything is standard Vite + React + TypeScript.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server + build)
- **React Router 6** (client-side routing, lazy-loaded routes)
- **CSS Modules** + a global design-token layer (no runtime CSS-in-JS)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run typecheck# run the TypeScript compiler with no emit
```

Requires Node 18+.

## Project structure

```
src/
├─ main.tsx                 # entry: mounts <App/> inside <BrowserRouter>
├─ App.tsx                  # route table (lazy-loaded pages) + ScrollToTop
├─ styles/
│  ├─ tokens.css            # design tokens (color, type, spacing, radius, motion)
│  └─ global.css            # reset, base typography, utilities, a11y, keyframes
├─ data/                    # ← single source of truth for all copy/content
│  ├─ types.ts              # shared content types
│  ├─ site.ts               # nav, brand, contact, socials, footer
│  ├─ services.ts           # the 5 services (drives cards + detail pages)
│  ├─ content.ts            # home stats, values, "why choose" lists, story copy
│  └─ chinese.ts            # 中文 landing page content
├─ hooks/
│  ├─ usePageMeta.ts        # per-page <title> / meta description
│  └─ useInView.ts          # IntersectionObserver scroll-reveal
├─ components/
│  ├─ ui/                   # primitives: Button, Container, Icon, ImageSlot,
│  │                        #   Logo, Reveal, SectionHeading
│  ├─ layout/               # Header (responsive nav), Footer, Layout, ScrollToTop
│  └─ sections/             # Hero, PageHero, StatsStrip, ServiceCard, InfoCard,
│                           #   Chips, WhyChooseGrid, CTABand
└─ pages/                   # HomePage, AboutPage, ServicesPage,
                            #   ServiceDetailPage, ContactPage, ChinesePage,
                            #   NotFoundPage
```

## Routes

| Path                         | Page                                    |
| ---------------------------- | --------------------------------------- |
| `/`                          | Home                                    |
| `/about`                     | About Us                                |
| `/services`                  | Services index                          |
| `/services/:slug`            | Service detail (data-driven, 5 services)|
| `/contact`                   | Contact                                 |
| `/zh`                        | 中文 landing page (standalone chrome)    |
| `*`                          | 404 Not Found                           |

Service slugs: `outdoor-apparel`, `organization-wear`, `industrial-solutions`,
`pet-collections`, `personalized-gifts`.

## How it was optimized

**Reuse & maintainability**
- The five service detail pages render from **one** `ServiceDetailPage` template
  driven by `data/services.ts` — edit content, not markup.
- Every repeated pattern (hero, CTA band, stat strip, service card, feature grid,
  contact card) is a single reusable component.
- All copy lives in `src/data/*`, decoupled from presentation.
- Design tokens centralize color/type/spacing so the whole site re-themes from
  one file (`styles/tokens.css`).

**Performance**
- Route-level **code splitting** via `React.lazy` — each page is its own chunk;
  the React runtime is isolated in a long-cacheable vendor chunk.
- No CSS-in-JS runtime; CSS Modules are extracted and split per route.
- Images are lazy-loaded; fonts use `preconnect` + `display=swap`.
- Scroll animations use a shared `IntersectionObserver` and disconnect after firing.

**Modern 2026 UI/UX**
- Responsive header that collapses to an accessible slide-down mobile menu.
- Fluid typography and spacing (`clamp()`), scroll-reveal motion, refined card
  hover states, and an ambient hero glow.
- Accessibility: skip link, visible focus rings, semantic landmarks, `aria`
  labelling, and full `prefers-reduced-motion` support.
- Theme-consistent light UI preserving the original navy / brass / cream brand.

## Content & images

The original design used drag-and-drop image placeholders (`<image-slot>`). These
are reproduced as the `ImageSlot` component, which renders a branded placeholder
today and accepts a real `src` prop when assets are ready — a single swap point,
no call-site changes needed.

## Deployment note (SPA routing)

This app uses `BrowserRouter` (clean URLs). When hosting the static `dist/` output,
configure your host to rewrite unknown paths to `index.html` so deep links work:

- **Netlify:** handled by the included `public/_redirects`.
- **Vercel:** add a rewrite of `/(.*)` → `/index.html`.
- **Apache/Nginx/other:** enable an SPA fallback to `index.html`.
```
