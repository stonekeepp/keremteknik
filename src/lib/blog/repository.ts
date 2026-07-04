import type { BlogPost } from "./types";

export interface BlogRepository {
  findPublished(filters?: { category?: string }): Promise<BlogPost[]>;
  findBySlug(slug: string): Promise<BlogPost | null>;
  findAllAdmin(): Promise<BlogPost[]>;
  findById(id: string): Promise<BlogPost | null>;
  create(data: Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "readingTime">): Promise<BlogPost>;
  update(
    id: string,
    data: Partial<Omit<BlogPost, "id" | "createdAt">>,
  ): Promise<BlogPost>;
  delete(id: string): Promise<void>;
  updateStatus(id: string, status: BlogPost["status"]): Promise<BlogPost>;
}
