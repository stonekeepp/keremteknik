import { NextResponse } from "next/server";
import { getBlogRepository } from "@/lib/blog";
import { getServerSession } from "@/lib/auth/session";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const repo = getBlogRepository();
  const post = await repo.findById(id);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request: Request, { params }: Params) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { blogPostInputSchema, normalizeTags } = await import(
      "@/lib/blog/types"
    );
    const parsed = blogPostInputSchema.parse(body);
    const repo = getBlogRepository();
    const post = await repo.update(id, {
      ...parsed,
      tags: normalizeTags(parsed.tags),
      metaTitle: parsed.metaTitle || parsed.title,
      metaDescription: parsed.metaDescription || parsed.excerpt,
      canonicalUrl: parsed.canonicalUrl ?? null,
    });
    return NextResponse.json({ post });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Güncelleme hatası";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const repo = getBlogRepository();
    await repo.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Silme hatası";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
