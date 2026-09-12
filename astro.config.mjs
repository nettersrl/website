// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Static site, deployed to GitHub Pages behind www.netter.io.
// Astro emits a real HTML file per route, so the SPA 404-redirect hack the
// old Vite build needed is gone.
export default defineConfig({
  site: 'https://www.netter.io',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') item.priority = 1.0;
        else if (/^\/(products|services)\/$/.test(path)) item.priority = 0.9;
        else if (/^\/(products|services)\//.test(path)) item.priority = 0.8;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
});
