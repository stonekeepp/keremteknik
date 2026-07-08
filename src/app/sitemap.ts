import type { MetadataRoute } from "next";
import { getBlogRepository } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo/metadata";
import { SERVICE_DETAILS } from "@/lib/services/site";

const staticPages = [
  {
    path: "/",
    lastModified: "2026-01-15T10:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/hizmetlerimiz",
    lastModified: "2026-01-15T10:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/hakkimizda",
    lastModified: "2026-01-12T10:00:00.000Z",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog",
    lastModified: "2026-01-15T10:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/iletisim",
    lastModified: "2026-01-12T10:00:00.000Z",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/sss",
    lastModified: "2026-01-10T10:00:00.000Z",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const repo = getBlogRepository();
  const posts = await repo.findPublished();

  return [
    ...staticPages.map(({ path, lastModified, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    })),
    ...Object.values(SERVICE_DETAILS).map((service) => ({
      url: absoluteUrl(`/hizmetlerimiz/${service.slug}`),
      lastModified: new Date(service.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(
        post.updatedAt ?? post.publishedAt ?? post.createdAt,
      ),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
