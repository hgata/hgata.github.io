import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/astro/notes",
  outDir: "./notes/",
  build: {
    assets: "assets"
  },
  integrations: [expressiveCode({
    plugins: [pluginLineNumbers()],
    defaultProps: {
      showLineNumbers: false
    }
  }), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});