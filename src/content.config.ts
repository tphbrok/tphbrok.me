import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "*.mdx" }),
    schema: z.object({
        tags: z.array(z.string()).max(3),
        dateCreated: z.coerce.date(),
        description: z.string(),
        title: z.string(),
    }),
});

export const collections = { blog };
