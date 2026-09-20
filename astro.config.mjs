import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk menetapkan domain produksi.
// Domain ini mengaktifkan canonical mutlak, OG/Twitter dan sitemap.
const site = 'https://portasantiagomelaka.com';

export default defineConfig({
  site: site || undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
