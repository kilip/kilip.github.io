import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:schema';

const blog = defineCollection({
	// Loader buat artikel yang sudah dipublish
	loader: glob({ pattern: '**/[^_]*.md', base: "../diary/50_Articles/Published" }),
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
	// Loader buat catatan harian
	loader: glob({ pattern: '**/[^_]*.md', base: "../diary/00_Journal" }),
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
	// Loader buat Dashboard project
	loader: glob({ pattern: '**/Dashboard.md', base: "../diary/10_Projects" }),
	schema: z.object({
		// Mendukung field dari template dan file yang sudah ada
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
