import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'under review', 'preprint']).default('published'),
    doi: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = { publications };
