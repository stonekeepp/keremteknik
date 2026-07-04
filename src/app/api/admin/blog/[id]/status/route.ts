import { NextResponse } from "next/server";
import { getBlogRepository } from "@/lib/blog";
import { blogStatusSchema } from "@/lib/blog/types";
import { getServerSession } from "@/lib/auth/session";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = blogStatusSchema.parse(body);
    const repo = getBlogRepository();
    const post = await repo.updateStatus(id, status);
    return NextResponse.json({ post });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Durum güncelleme hatası";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
