import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";
import astroDevToolBreakpoints from "astro-devtool-breakpoints";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lottie(), astroDevToolBreakpoints()],
});