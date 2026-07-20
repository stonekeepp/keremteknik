import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { buildAreaServedServiceJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRegionServicePage, getRegionServiceParams } from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ bolge: string; hizmet: string }> };

export function generateStaticParams() {
  return getRegionServiceParams();
}

export async function generateMetadata({ params }: Params) {
  const { bolge, hizmet } = await params;
  const page = getRegionServicePage(bolge, hizmet);
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
  });
}

export default async function RegionServicePage({ params }: Params) {
  const { bolge, hizmet } = await params;
  const page = getRegionServicePage(bolge, hizmet);
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Servis Bölgeleri", href: "/servis-bolgeleri" },
        { label: page.regionName, href: `/servis-bolgeleri/${page.regionSlug}` },
        { label: page.serviceTitle },
      ]}
      jsonLd={buildAreaServedServiceJsonLd({
        name: page.h1,
        description: page.metaDescription,
        path: page.canonicalPath,
        areaName: page.regionName,
        serviceType: page.serviceTitle,
      })}
    />
  );
}
