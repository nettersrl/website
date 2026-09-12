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
  integrations: [react(), sitemap()],
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
});
