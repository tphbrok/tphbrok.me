// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx({
            gfm: true,
        }),
        sitemap(),
        tailwind(),
        icon(),
    ],
    redirects: {
        "/angular-meetup-22052025": "/projects/angular-meetup-22052025",
    },
});
