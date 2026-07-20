import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { buildArticleJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildErrorCodePages, getErrorCodeParams } from "@/lib/seo-pages";

export const dynamicParams = false;
type Params = { params: Promise<{ cihaz: string; markaGrubu: string; kod: string }> };

export function generateStaticParams() {
  return getErrorCodeParams();
}

export async function generateMetadata({ params }: Params) {
  const { cihaz, markaGrubu, kod } = await params;
  const page = buildErrorCodePages().find(
    (item) =>
      item.deviceSlug === cihaz &&
      item.brandGroupSlug === markaGrubu &&
      item.codeSlug === kod &&
      item.indexable,
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

export default async function ErrorCodeDetailPage({ params }: Params) {
  const { cihaz, markaGrubu, kod } = await params;
  const page = buildErrorCodePages().find(
    (item) =>
      item.deviceSlug === cihaz &&
      item.brandGroupSlug === markaGrubu &&
      item.codeSlug === kod &&
      item.indexable,
  );
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hata Kodları", href: "/hata-kodlari" },
        { label: page.deviceTitle, href: `/hata-kodlari/${page.deviceSlug}` },
        {
          label: page.brandGroupTitle,
          href: `/hata-kodlari/${page.deviceSlug}/${page.brandGroupSlug}`,
        },
        { label: page.code },
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
