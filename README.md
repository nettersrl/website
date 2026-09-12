# Netter website

Static marketing site for [www.netter.io](https://www.netter.io), built with
Astro and React.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + static build into dist/
npm run preview  # serve the built output
npm run deploy   # build and publish dist/ to the gh-pages branch
```

## How it is put together

**Astro renders everything; React hydrates three things.** Pages, sections,
diagrams and charts are static HTML with no client JS. The only islands are the
navigation (mega-menu and mobile drawer) and the contact form. Every link in the
header is a real anchor, so the site navigates before — and without — hydration.

**Content lives in `src/i18n/locales/{en,it}.json`.** These dictionaries are the
single source of copy. `src/lib/content.ts` walks their uniform
`{title, subtitle, ...children}` shape, so a page renders whatever sections its
subtree happens to have rather than hard-coding a template per page. Italian is
incomplete upstream; `src/i18n/ui.ts` falls back to English per key.

**Routes are locale-parameterised.** `src/pages/[...locale]/` builds each page
twice — once at the root for English, once under `/it/`. Slugs match the
previous site exactly so existing links keep working.

**Diagrams are generated, not drawn.** `src/lib/iso.ts` implements one 2:1
dimetric projection:

```
sx = X + (gx - gy) * U
sy = Y + (gx + gy) * U/2 - z
```

Every isometric figure on the site is built from grid coordinates through that
function and rendered to SVG at build time. Scenes are painted back-to-front by
`gx + gy`. `src/lib/charts.ts` does the same job for chart geometry.

## Design rules

`DESIGN_GUIDELINES.md` is authoritative. The two that shape everything:

- **Squared edges only** — there is no `border-radius` in this codebase.
- **One accent** — `#e3000f`, taken from the logo mark. Everything else is
  neutral ink so the red never competes with itself. Charts use one hue; extra
  series become small multiples, never a second colour.

Tokens live at the top of `src/styles/global.css`.

## Things to know

- The D-SQL performance charts use **sample data**, flagged as such on the page.
  Replace the arrays in `src/pages/[...locale]/products/[slug].astro` with real
  benchmarks before treating them as claims.
- The contact form posts to the same Formspree endpoint and reCAPTCHA key as the
  previous site (`src/data/site.ts`). reCAPTCHA now loads only on `/contact`
  rather than on every page.
