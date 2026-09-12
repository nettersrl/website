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

**Content lives in `src/data/copy.json`.** That file is the single source of
copy; `src/lib/copy.ts` reads a key out of it and `src/lib/content.ts` walks its
uniform `{title, subtitle, ...children}` shape, so a page renders whatever
sections its subtree happens to have rather than hard-coding a template per
page. The site is English only.

**Slugs match the previous site exactly** so existing links keep working.

**Products can live elsewhere.** An entry in `src/data/site.ts` with a `url`
(Obstack, Ventic) links straight to its own site and gets no page here; one with
a `status` (Hadron) renders a plate marking it as unreleased.

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
- **There is no contact form or contact page.** Contact links open the visitor's
  own mail client, and the address is never in the markup: it ships as reversed
  base64 in `src/data/site.ts` and is decoded only after a visitor clears the
  challenge in `src/components/HumanChallenge.astro` — the same approach as
  obstack.it. Set `PUBLIC_TURNSTILE_SITEKEY` to swap the click-challenge for real
  Cloudflare Turnstile.
- Any link that should open mail is an `EmailLink`; the layout binds them by
  delegation, so links React re-renders or the mobile drawer creates later still
  work.
