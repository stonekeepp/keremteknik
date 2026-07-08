import { BlogList } from "@/components/blog/BlogList";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { getBlogRepository } from "@/lib/blog";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Klima, kombi ve beyaz eşya bakım önerileri, arıza rehberleri ve teknik servis tavsiyeleri.",
  path: "/blog",
});

export default async function BlogPage() {
  const repo = getBlogRepository();
  const posts = await repo.findPublished();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Blog" },
        ])}
      />
      <PageHero
        title="Blog"
        description="Klima, kombi ve beyaz eşya kullanımı hakkında pratik bakım önerileri, arıza belirtileri ve servis tavsiyeleri."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogList posts={posts} />
    </>
  );
}
