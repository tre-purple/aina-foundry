import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: z.enum(['active', 'prototype', 'testing', 'initial-build', 'venture', 'research', 'completed']),
    category: z.enum(['restoration', 'sensors', 'communications', 'data', 'education', 'health', 'infrastructure', 'place-based', 'agentic-governance', 'sustainable-ai', 'environmental-intelligence', 'other']),
    stack: z.enum(['data', 'compute', 'intelligence']).optional(),
    tags: z.array(z.string()),
    year: z.number(),
    coverImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
    team: z.array(z.string()).optional(),
    partners: z.array(z.string()).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
      highlight: z.boolean().optional(),
    })).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects: projectsCollection,
};
