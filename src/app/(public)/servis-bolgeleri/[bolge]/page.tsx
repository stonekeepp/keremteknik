import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import {
  buildAreaServedServiceJsonLd,
  buildCollectionPageJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getRegionPage, getRegionStaticParams } from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ bolge: string }> };

export function generateStaticParams() {
  return getRegionStaticParams();
}

export async function generateMetadata({ params }: Params) {
  const { bolge } = await params;
  const page = getRegionPage(bolge);
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
  });
}

export default async function RegionDetailPage({ params }: Params) {
  const { bolge } = await params;
  const page = getRegionPage(bolge);
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Servis Bölgeleri", href: "/servis-bolgeleri" },
        { label: page.name },
      ]}
      jsonLd={[
        buildAreaServedServiceJsonLd({
          name: page.h1,
          description: page.metaDescription,
          path: page.canonicalPath,
          areaName: page.name,
          serviceType: "Teknik Servis",
        }),
        buildCollectionPageJsonLd({
          title: page.title,
          description: page.metaDescription,
          path: page.canonicalPath,
        }),
      ]}
      extraTop={
        <Section title="Yerel bilgiler" centered={false}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30">
              <h2 className="text-headline-sm font-headline-sm text-primary mb-3">Bölge özeti</h2>
              <p className="text-body-md text-on-surface-variant">{page.continentSide}</p>
              {page.distanceLabel && (
                <p className="text-body-md text-on-surface-variant mt-2">{page.distanceLabel}</p>
              )}
            </div>
            <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30 lg:col-span-2">
              <h2 className="text-headline-sm font-headline-sm text-primary mb-3">Mahalleler</h2>
              <div className="flex flex-wrap gap-2">
                {page.neighborhoods.map((item) => (
                  <span key={item} className="rounded-full bg-primary/8 px-3 py-1 text-body-md text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      }
    />
  );
}
