import { NextResponse } from "next/server";
import { getBlogRepository } from "@/lib/blog";
import { getServerSession } from "@/lib/auth/session";

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const repo = getBlogRepository();
  const posts = await repo.findAllAdmin();
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { blogPostInputSchema, normalizeTags } = await import(
      "@/lib/blog/types"
    );
    const parsed = blogPostInputSchema.parse(body);
    const repo = getBlogRepository();
    const post = await repo.create({
      ...parsed,
      tags: normalizeTags(parsed.tags),
      metaTitle: parsed.metaTitle || parsed.title,
      metaDescription: parsed.metaDescription || parsed.excerpt,
      canonicalUrl: parsed.canonicalUrl ?? null,
      publishedAt: parsed.status === "published" ? new Date().toISOString() : null,
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Doğrulama hatası";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
