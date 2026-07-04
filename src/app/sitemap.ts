import type { MetadataRoute } from "next";
import { getBlogRepository } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo/metadata";
import { getServiceDetailSlugs } from "@/lib/services/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/hizmetlerimiz", priority: 0.9 },
    { path: "/hakkimizda", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/iletisim", priority: 0.8 },
    { path: "/sss", priority: 0.7 },
  ];

  const serviceSlugs = getServiceDetailSlugs();
  const repo = getBlogRepository();
  const posts = await repo.findPublished();

  const now = new Date();

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...serviceSlugs.map((slug) => ({
      url: absoluteUrl(`/hizmetlerimiz/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
