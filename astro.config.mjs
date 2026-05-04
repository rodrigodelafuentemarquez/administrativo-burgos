// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  base: '/oposicion',
  site: 'https://example.github.io',
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
