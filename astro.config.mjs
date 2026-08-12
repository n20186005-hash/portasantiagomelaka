import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya tempat untuk menetapkan domain produksi.
// Biarkan kosong sehingga domain sebenar tersedia; binaan tetap berfungsi tanpa URL palsu.
const site = '';

export default defineConfig({
  site: site || undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
