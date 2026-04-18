import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';

const blog = defineCollection({
	// Sekarang loader baca dari folder internal src/content/
	loader: glob({ pattern: '**/[^_]*.md', base: "src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		lang: z.enum(['id', 'en']).default('id'),
		draft: z.boolean().default(false),
	}),
});

const journal = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: "src/content/journal" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		layout: z.string().optional(),
		isPrivate: z.boolean().default(true),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/Dashboard.md', base: "src/content/projects" }),
	schema: z.object({
		project_name: z.string().optional(),
		project: z.string().optional(),
		status: z.string().optional(),
		priority: z.string().optional(),
		category: z.string().optional(),
		start_date: z.coerce.date().optional(),
		end_date: z.coerce.date().optional(),
		github_url: z.string().optional(),
		prod_url: z.string().optional(),
		stack: z.array(z.string()).optional(),
		role: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, journal, projects };
