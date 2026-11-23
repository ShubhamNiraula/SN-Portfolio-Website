import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-static";

const SITE = "https://shubhamniraula.com.np";

/** Tells Google which pages exist. Blog posts are added automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/gallery/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...getPublishedPosts().map((post) => ({
      url: `${SITE}/blog/${post.slug}/`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: "yearly" as const,
      priority: 0.7
    }))
  ];
}
