import { getCollection } from "astro:content";

export async function getPosts() {
    return (await getCollection("blog")).filter(
        (post) => post.data.published || process.env.NODE_ENV === "development",
    );
}
