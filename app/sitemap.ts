import { MetadataRoute } from "next";
import { createClient } from "@/utils/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://ceylontealand.com";

    // Fetch all published newsroom article slugs
    let newsroomEntries: MetadataRoute.Sitemap = [];
    try {
        const supabase = createClient();
        const { data: posts } = await supabase
            .from("news_posts")
            .select("slug, created_at")
            .order("created_at", { ascending: false });

        if (posts && posts.length > 0) {
            newsroomEntries = posts.map((post) => ({
                url: `${baseUrl}/newsroom/${post.slug}`,
                lastModified: new Date(post.created_at),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            }));
        }
    } catch {
        // Supabase may not be available during build — gracefully skip
    }

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/our-tea`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ceylon-tea`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/branding`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/newsroom`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        ...newsroomEntries,
    ];
}
