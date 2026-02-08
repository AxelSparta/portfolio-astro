import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://axelsparta.netlify.app',
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'es', // idioma predeterminado
    locales: ['en', 'es'], // idiomas soportados
    routing: {
      prefixDefaultLocale: true, // colocar el prefijo del idioma para el idioma predeterminado, en caso de que sea false los archivos del idioma predeterminado estarán en la raíz
      redirectToDefaultLocale: true // redirigir a la versión con el prefijo del idioma predeterminado (no es necesario si prefijamos el idioma predeterminado)
    }
  }
});