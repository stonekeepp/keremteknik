import type { BlogRepository } from "./repository";

/**
 * Production adapter stub.
 * DATA_MODE=postgres olduğunda bu sınıf Prisma ile implement edilecek.
 */
export class PostgresBlogRepository implements BlogRepository {
  findPublished(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  findBySlug(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  findAllAdmin(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  findById(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  create(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  update(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  delete(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
  updateStatus(): Promise<never> {
    throw new Error("PostgresBlogRepository henüz implement edilmedi.");
  }
}
