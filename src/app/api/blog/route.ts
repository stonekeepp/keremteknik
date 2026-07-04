import { NextResponse } from "next/server";
import { getBlogRepository } from "@/lib/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? undefined;
  const repo = getBlogRepository();
  const posts = await repo.findPublished({ category });
  return NextResponse.json({ posts });
}
