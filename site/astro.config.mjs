// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://limur.ai',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', el: 'el-GR', de: 'de-DE' } },
    }),
  ],
});
