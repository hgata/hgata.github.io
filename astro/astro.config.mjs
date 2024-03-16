import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: '/astro/notes',
  outDir: './notes/',
  build: {
    assets: 'assets',
  },
});
