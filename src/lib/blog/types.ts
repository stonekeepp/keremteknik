import { z } from "zod";

export const BLOG_CATEGORIES = [
  "Klima",
  "Kombi",
  "Beyaz Eşya",
  "Bakım Önerileri",
  "Arıza Rehberi",
  "Genel",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_STATUSES = ["draft", "published"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  tags: string[];
  status: BlogStatus;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string | null;
  readingTime: number;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export const blogPostInputSchema = z.object({
  title: z.string().min(1, "Başlık zorunludur"),
  slug: z.string().min(1, "Slug zorunludur"),
  excerpt: z.string().optional().default(""),
  content: z.string().min(1, "İçerik zorunludur"),
  coverImage: z.string().optional().default(""),
  category: z.enum(BLOG_CATEGORIES, {
    errorMap: () => ({ message: "Geçerli bir kategori seçin" }),
  }),
  tags: z.union([z.array(z.string()), z.string()]).optional(),
  status: z.enum(BLOG_STATUSES),
  metaTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),
  canonicalUrl: z.string().nullable().optional(),
});

export type BlogPostInput = z.infer<typeof blogPostInputSchema>;

export const blogStatusSchema = z.object({
  status: z.enum(BLOG_STATUSES),
});

export function normalizeTags(tags?: string | string[]): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.filter(Boolean);
  return tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}
