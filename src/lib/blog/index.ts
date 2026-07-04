import { getDataMode } from "@/lib/config/env";
import { MockBlogRepository } from "./mock-repository";
import type { BlogRepository } from "./repository";

export function getBlogRepository(): BlogRepository {
  const mode = getDataMode();
  if (mode === "postgres") {
    throw new Error(
      "PostgresBlogRepository henüz aktif değil. DATA_MODE=mock kullanın.",
    );
  }
  return new MockBlogRepository();
}
