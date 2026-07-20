import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { buildArticleJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaultGuidePages, getFaultGuideStaticParams } from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ cihaz: string; sorun: string }> };

export function generateStaticParams() {
  return getFaultGuideStaticParams();
}

export async function generateMetadata({ params }: Params) {
  const { cihaz, sorun } = await params;
  const page = buildFaultGuidePages().find(
    (item) => item.deviceSlug === cihaz && item.problemSlug === sorun,
  );
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
    type: "article",
    publishedTime: page.publishedAt,
  });
}

export default async function FaultGuideDetailPage({ params }: Params) {
  const { cihaz, sorun } = await params;
  const page = buildFaultGuidePages().find(
    (item) => item.deviceSlug === cihaz && item.problemSlug === sorun,
  );
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Arıza Rehberi", href: "/ariza-rehberi" },
        { label: page.deviceTitle },
        { label: page.h1 },
      ]}
      jsonLd={buildArticleJsonLd({
        title: page.title,
        description: page.metaDescription,
        slug: page.slug,
        publishedAt: page.publishedAt,
        modifiedAt: page.updatedAt,
        canonicalUrl: page.canonicalPath,
      })}
    />
  );
}
