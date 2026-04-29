import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://home-office-gear.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});
