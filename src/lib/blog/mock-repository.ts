import fs from "fs/promises";
import path from "path";
import { calculateReadingTime } from "./reading-time";
import { ensureUniqueSlug, slugifyTitle } from "./slug";
import { SEED_BLOG_POSTS } from "./mock-data";
import type { BlogRepository } from "./repository";
import type { BlogPost, BlogStatus } from "./types";
import { normalizeTags } from "./types";

const DB_PATH = path.join(process.cwd(), "data", "mock-blog-db.json");

async function ensureDbFile(): Promise<BlogPost[]> {
  try {
    const raw = await fs.readFile(DB_PATH, "utf-8");
    const parsed = JSON.parse(raw) as BlogPost[];
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // seed below
  }

  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(SEED_BLOG_POSTS, null, 2), "utf-8");
  return SEED_BLOG_POSTS;
}

async function writeDb(posts: BlogPost[]): Promise<void> {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const dateA = a.publishedAt ?? a.createdAt;
    const dateB = b.publishedAt ?? b.createdAt;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
}

function generateId(): string {
  return `blog-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export class MockBlogRepository implements BlogRepository {
  async findPublished(filters?: { category?: string }): Promise<BlogPost[]> {
    const posts = await ensureDbFile();
    let published = posts.filter((p) => p.status === "published");
    if (filters?.category && filters.category !== "Tümü") {
      published = published.filter((p) => p.category === filters.category);
    }
    return sortByDate(published);
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await ensureDbFile();
    const post = posts.find((p) => p.slug === slug);
    if (!post || post.status !== "published") return null;
    return post;
  }

  async findAllAdmin(): Promise<BlogPost[]> {
    const posts = await ensureDbFile();
    return sortByDate(posts);
  }

  async findById(id: string): Promise<BlogPost | null> {
    const posts = await ensureDbFile();
    return posts.find((p) => p.id === id) ?? null;
  }

  async create(
    data: Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "readingTime">,
  ): Promise<BlogPost> {
    const posts = await ensureDbFile();
    const slugs = posts.map((p) => p.slug);
    const slug = ensureUniqueSlug(
      data.slug || slugifyTitle(data.title),
      slugs,
    );
    const now = new Date().toISOString();
    const post: BlogPost = {
      ...data,
      slug,
      tags: normalizeTags(data.tags),
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
      readingTime: calculateReadingTime(data.content),
      publishedAt:
        data.status === "published"
          ? data.publishedAt ?? now
          : null,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    posts.push(post);
    await writeDb(posts);
    return post;
  }

  async update(
    id: string,
    data: Partial<Omit<BlogPost, "id" | "createdAt">>,
  ): Promise<BlogPost> {
    const posts = await ensureDbFile();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Blog yazısı bulunamadı");

    const current = posts[index];
    const slugs = posts.map((p) => p.slug);
    const nextSlug = data.slug
      ? ensureUniqueSlug(data.slug, slugs, current.slug)
      : current.slug;

    const nextContent = data.content ?? current.content;
    const nextStatus = data.status ?? current.status;
    const now = new Date().toISOString();

    const updated: BlogPost = {
      ...current,
      ...data,
      slug: nextSlug,
      tags: data.tags ? normalizeTags(data.tags) : current.tags,
      metaTitle: data.metaTitle ?? current.metaTitle ?? current.title,
      metaDescription:
        data.metaDescription ?? current.metaDescription ?? current.excerpt,
      readingTime: calculateReadingTime(nextContent),
      publishedAt:
        nextStatus === "published"
          ? data.publishedAt ?? current.publishedAt ?? now
          : nextStatus === "draft"
            ? null
            : current.publishedAt,
      updatedAt: now,
    };

    posts[index] = updated;
    await writeDb(posts);
    return updated;
  }

  async delete(id: string): Promise<void> {
    const posts = await ensureDbFile();
    const filtered = posts.filter((p) => p.id !== id);
    if (filtered.length === posts.length) {
      throw new Error("Blog yazısı bulunamadı");
    }
    await writeDb(filtered);
  }

  async updateStatus(id: string, status: BlogStatus): Promise<BlogPost> {
    const now = new Date().toISOString();
    return this.update(id, {
      status,
      publishedAt: status === "published" ? now : null,
    });
  }
}
