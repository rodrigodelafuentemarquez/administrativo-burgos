import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const temas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/temas' }),
  schema: z.object({
    tema: z.number(),
    titulo: z.string(),
  }),
});

export const collections = { temas };
