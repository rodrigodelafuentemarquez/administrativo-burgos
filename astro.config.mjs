// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStudyHighlights from './src/utils/rehypeStudyHighlights.mjs';

export default defineConfig({
  base: '/administrativo-burgos',
  site: 'https://rodrigodelafuentemarquez.github.io',
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeStudyHighlights,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor-link'],
            ariaLabel: 'Enlace a esta seccion',
          },
        },
      ],
    ],
  },
});
