import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tre-purple.github.io',
  base: '/aina-foundry',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  output: 'static',
  // Astro 7 defaults to JSX-style whitespace, which drops spaces between adjacent elements
  // ("01Home"). Keep Astro 4's behavior so text reads correctly for screen readers and search.
  compressHTML: true,
  build: {
    // Each page's CSS is only a few KB; inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
