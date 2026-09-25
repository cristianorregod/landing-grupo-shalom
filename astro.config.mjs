// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // PENDING P-C7: final domain (keep in sync with src/config/site.ts).
  site: 'https://gruposhalom.com.co',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
