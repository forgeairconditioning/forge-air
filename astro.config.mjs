// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Used to build absolute URLs (og:image). Change to the real domain at launch.
  site: 'https://forgeaircooling.com',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      // Every URL gets a prefix: /en/ and /es/. The bare "/" redirects (see src/pages/index.astro).
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
