# Visnalize — Retro App Showcase

A high-fidelity, front-end-only implementation of two sections from the Figma
**Branding** file, built to be visually indistinguishable from the design.

- **Hero + Trusted + Our Apps** — [node `1100:19594`](https://www.figma.com/design/BBDMdbPEDF33c0znyyU0ty/Branding?node-id=1100-19594&m=dev)
- **What's New / Updates** — [node `1108:947`](https://www.figma.com/design/BBDMdbPEDF33c0znyyU0ty/Branding?node-id=1108-947&m=dev)

The two sections are split across **two routed pages**:

- `/` — **Apps**: Hero → Trusted → Our Apps → full-bleed video teaser
- `#/updates` — **What's New**: the changelog / newsletter page

Navigation between them is handled by the header nav (APPS / UPDATES).

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5**
- **SCSS Modules** (no CSS/UI framework)
- **react-router-dom** (HashRouter — static-host friendly, no server rewrites)
- Self-hosted **Iosevka** (design's monospace) via `@fontsource`; **League Spartan**
  (hero wordmark) via Google Fonts

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # typecheck + production build
npm run preview  # preview the production build
```

## Project structure

```
public/                  # Visnalize_Teaser_v2.mp4 (served as-is)
src/
├── assets/figma/        # original assets exported from Figma (SVG icons, PNG art)
├── components/
│   ├── icons/           # pixel-art icons inlined as React components (currentColor)
│   ├── Header/          # sticky nav (routes between the two pages)
│   ├── Shared/          # Button, LayeredHeading, CroppedImage
│   ├── Hero/            # Checkerboard decoration
│   ├── Stats/           # animated stats bar (count-up)
│   ├── AppCard/         # app card + MiniStats + StoreBadges
│   ├── UpdateItem/      # changelog timeline row
│   └── Newsletter/      # subscribe card
├── sections/            # Hero, TrustedStrip, OurApps, Teaser, WhatsNew
├── pages/               # AppsPage, UpdatesPage
├── styles/              # design tokens, global styles, reveal animation
└── utils/               # useInView, useCountUp hooks
```

## Fidelity notes

- All spacing, colours, typography, borders, radii and image crops were taken
  **verbatim** from Figma Dev Mode — not estimated from screenshots.
- Signature retro patterns are reproduced as reusable primitives: hard **offset
  shadows** (buttons/cards), **layered teal-behind-ink headings**, **dashed
  rules**, the **checkerboard**, and the faceted **premium gem**.
- Image sprites use an exact-percentage crop wrapper (`CroppedImage`) so sprite
  sheets are windowed pixel-for-pixel without re-slicing the original assets.
- The design's font is *Iosevka Charon* (a bespoke build); stock **Iosevka** is
  the closest publicly available match, with a small negative letter-spacing to
  approximate Charon's tighter density.
- Intentional in-design copy (e.g. `VISNALIZE`, `LASTEST UPDATE`, `IMPROMENT`,
  `SUBSRIBE`, `iSO`) is reproduced as-is — the design is the source of truth.

## Accessibility & motion

- Semantic landmarks, heading hierarchy, `alt` text, labelled form controls,
  visible focus rings, and keyboard-operable controls.
- Subtle animations only (fade-in on scroll, hover elevation, floating hero,
  stat count-up) — all disabled under `prefers-reduced-motion`.

> Front-end demo only — no backend. The newsletter form does not submit anywhere.
