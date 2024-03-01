import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import tailwindConfigViewer from "astro-tailwind-config-viewer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: './astro.config.mjs',
  }), 
    tailwindConfigViewer({
      configFile: './astro.config.mjs',
      endpoint: '/_tailwind',
      overlayMode: "embed"
    })]
});
