import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const temas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/temas' }),
  schema: z.object({
    tema: z.number(),
    titulo: z.string(),
  }),
});

const programa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programa' }),
  schema: z.object({
    grupo: z.string(),
    tema: z.number(),
    codigo: z.string(),
    titulo: z.string(),
    estado: z.enum(['borrador', 'en revision', 'revisado']),
  }),
});

export const collections = { temas, programa };
