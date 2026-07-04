import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogRepository } from "@/lib/blog";
import { formatDate, formatReadingTime } from "@/lib/blog/reading-time";
import { getSiteUrl } from "@/lib/config/env";
import { SITE } from "@/lib/services/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const repo = getBlogRepository();
  const post = await repo.findBySlug(slug);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    alternates: post.canonicalUrl
      ? { canonical: post.canonicalUrl }
      : { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
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

  return (
    <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-16">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-on-surface-variant text-label-md font-label-md mb-4 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">
            Ana Sayfa
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">{post.title}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-label-md font-label-md">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              calendar_today
            </span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>{formatReadingTime(post.readingTime)}</span>
          </div>
        </div>
      </div>

      <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-8 max-w-4xl">
        {post.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <article className="lg:col-span-8">
          {post.coverImage && (
            <div className="w-full h-[300px] md:h-[450px] rounded-[16px] overflow-hidden mb-8 shadow-level-1 relative">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="prose-blog max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="bg-surface-container rounded-xl p-6 shadow-level-1 sticky top-24">
            <h3 className="text-headline-sm font-headline-sm text-primary mb-4">
              İlgili Hizmet
            </h3>
            <p className="text-body-md text-on-surface-variant mb-4">
              Arıza veya bakım ihtiyacınız için profesyonel teknik servis
              desteği alın.
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block w-full text-center bg-cta text-white py-3 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors mb-3"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="block w-full text-center border-2 border-primary text-primary py-3 rounded-[12px] font-button text-button hover:bg-surface-container-high transition-colors"
            >
              Servis Talebi Oluştur
            </Link>
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
    </main>
  );
}
