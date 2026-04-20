import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: z.enum(['active', 'prototype', 'venture', 'research', 'completed']),
    category: z.enum(['restoration', 'sensors', 'communications', 'data', 'education', 'health', 'infrastructure', 'other']),
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
    })).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects: projectsCollection,
};
