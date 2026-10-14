// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // PENDING P-C7: final domain (keep in sync with src/config/site.ts).
  site: 'https://gruposhalom.com.co',
  // Internal links have no trailing slash (/contacto); keep canonical and sitemap URLs identical.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
