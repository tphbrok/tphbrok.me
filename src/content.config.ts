import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "*.mdx" }),
    schema: z.object({
        dateCreated: z.coerce.date(),
        title: z.string(),
        categories: z.array(z.string()).max(3),
        description: z.string(),
    }),
});

export const collections = { blog };
