import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "*.mdx" }),
    schema: z.object({
        tags: z.array(z.string()).max(3),
        dateCreated: z.coerce.date(),
        description: z.string(),
        title: z.string(),
        published: z.boolean(),
    }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "*.mdx" }),
    schema: z.object({
        tags: z.array(z.string()).max(3),
        dateCreated: z.coerce.date(),
        description: z.string(),
        title: z.string(),
        published: z.boolean(),
    }),
});

export const collections = { blog, projects };
