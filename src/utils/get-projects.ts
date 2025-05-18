import { getCollection } from "astro:content";

export async function getProjects() {
    return (await getCollection("projects")).filter(
        (project) =>
            project.data.published || process.env.NODE_ENV === "development",
    );
}
