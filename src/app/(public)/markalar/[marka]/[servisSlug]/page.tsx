import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { buildAreaServedServiceJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBrandServicePages,
  getBrandServiceStaticParams,
} from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ marka: string; servisSlug: string }> };

export function generateStaticParams() {
  return getBrandServiceStaticParams();
}

export async function generateMetadata({ params }: Params) {
  const { marka, servisSlug } = await params;
  const page = buildBrandServicePages().find(
    (item) => item.brandSlug === marka && item.servisSlug === servisSlug,
  );
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
  });
}

export default async function BrandServicePage({ params }: Params) {
  const { marka, servisSlug } = await params;
  const page = buildBrandServicePages().find(
    (item) => item.brandSlug === marka && item.servisSlug === servisSlug,
  );
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Markalar", href: "/markalar" },
        { label: page.brandName, href: `/markalar/${page.brandSlug}` },
        { label: page.deviceTitle },
      ]}
      jsonLd={buildAreaServedServiceJsonLd({
        name: page.h1,
        description: page.metaDescription,
        path: page.canonicalPath,
        areaName: "İstanbul",
        serviceType: `${page.brandName} ${page.deviceTitle} servisi`,
      })}
    />
  );
}
