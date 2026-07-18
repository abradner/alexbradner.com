import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      pid: z.string(),
      title: z.string(),
      tagline: z.string(),
      summary: z.string(),
      period: z.string().optional(),
      order: z.number(),
      image: image().optional(),
      tech: z.array(z.string()).default([]),
      skills: z.array(z.string()).default([]),
      challenges: z.array(z.string()).default([]),
      link: z
        .object({
          label: z.string(),
          href: z.url(),
        })
        .optional(),
    }),
});

export const collections = { projects };
