import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://tre-purple.github.io',
  base: '/aina-foundry',
  integrations: [tailwind(), mdx()],
  output: 'static',
});
