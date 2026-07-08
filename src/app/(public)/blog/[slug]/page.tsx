import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getBlogRepository } from "@/lib/blog";
import { formatDate, formatReadingTime } from "@/lib/blog/reading-time";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo/json-ld";
import {
  getBlogCategoryServiceSlug,
  getBlogPostInternalLinks,
} from "@/lib/seo/internal-links";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/services/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const repo = getBlogRepository();
  const post = await repo.findBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    canonicalUrl: post.canonicalUrl,
    ogImage: post.coverImage,
    type: "article",
    publishedTime: post.publishedAt ?? undefined,
  });
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const repo = getBlogRepository();
  const post = await repo.findBySlug(slug);
  if (!post) notFound();

  const allPublished = await repo.findPublished();
  const related = allPublished
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const internalLinks = getBlogPostInternalLinks(post.category, post.slug);
  const relatedServiceSlug = getBlogCategoryServiceSlug(post.category);

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildArticleJsonLd({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            publishedAt: post.publishedAt ?? new Date().toISOString(),
            coverImage: post.coverImage,
            canonicalUrl: post.canonicalUrl,
          }),
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title },
          ]),
        ]}
      />

      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-16">
        <Breadcrumb items={breadcrumbs} className="mb-6" />

        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-label-md font-label-md mb-6">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Icon name="calendar_today" className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="schedule" className="w-4 h-4" />
            <span>{formatReadingTime(post.readingTime)}</span>
          </div>
        </div>

        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-8 max-w-4xl">
          {post.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <article className="lg:col-span-8">
            {post.coverImage && (
              <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-8 shadow-premium-md relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            )}
            <div className="prose-blog max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="bg-surface rounded-2xl p-6 shadow-level-1 sticky top-28 border border-outline-variant/30">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-4">
                İlgili Hizmet
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4">
                Arıza veya bakım ihtiyacınız için profesyonel teknik servis
                desteği alın.
              </p>
              <Button href={`tel:${SITE.phoneTel}`} className="w-full mb-3">
                Hemen Ara
              </Button>
              {relatedServiceSlug && (
                <Button
                  href={`/hizmetlerimiz/${relatedServiceSlug}`}
                  variant="outline"
                  className="w-full mb-3"
                >
                  İlgili servis sayfası
                </Button>
              )}
              <Button href="/iletisim" variant="outline" className="w-full">
                Servis Talebi Oluştur
              </Button>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-headline-md font-headline-md text-primary mb-8">
              Benzer Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <InternalLinksSection
        heading={internalLinks.heading}
        links={internalLinks.links}
      />
    </>
  );
}
