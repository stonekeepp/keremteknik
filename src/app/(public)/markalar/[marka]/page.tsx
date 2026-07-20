import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildAreaServedServiceJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBrandHubPages,
  getBrandStaticParams,
} from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ marka: string }> };

export function generateStaticParams() {
  return getBrandStaticParams();
}

export async function generateMetadata({ params }: Params) {
  const { marka } = await params;
  const page = buildBrandHubPages().find((item) => item.brandSlug === marka);
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
  });
}

export default async function BrandHubPage({ params }: Params) {
  const { marka } = await params;
  const page = buildBrandHubPages().find((item) => item.brandSlug === marka);
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Markalar", href: "/markalar" },
        { label: page.brandName },
      ]}
      jsonLd={buildAreaServedServiceJsonLd({
        name: page.h1,
        description: page.metaDescription,
        path: page.canonicalPath,
        areaName: "İstanbul",
        serviceType: `${page.brandName} teknik servis`,
      })}
      extraTop={
        <Section title="Cihaz servisleri" centered={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.serviceSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/markalar/${page.brandSlug}/${slug}`}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-5 text-primary"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
