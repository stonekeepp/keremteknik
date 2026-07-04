import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";
import { getBlogRepository } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Klima, kombi ve beyaz eşya bakım önerileri, arıza rehberleri ve teknik servis tavsiyeleri.",
};

export default async function BlogPage() {
  const repo = getBlogRepository();
  const posts = await repo.findPublished();

  return (
    <main className="flex-grow pb-stack-lg">
      <section className="relative w-full pt-16 pb-12 overflow-hidden bg-surface-container-low">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#001e40 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-6">
            Blog
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            Klima, kombi ve beyaz eşya kullanımı hakkında pratik bakım
            önerileri, arıza belirtileri ve servis tavsiyeleri.
          </p>
        </div>
      </section>
      <BlogList posts={posts} />
    </main>
  );
}
