import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildErrorCodeHubPages, getErrorDeviceParams } from "@/lib/seo-pages";

export const dynamicParams = false;
type Params = { params: Promise<{ cihaz: string }> };

export function generateStaticParams() {
  return getErrorDeviceParams();
}

export async function generateMetadata({ params }: Params) {
  const { cihaz } = await params;
  const page = buildErrorCodeHubPages().find(
    (item) =>
      item.pageType === "error-device-hub" &&
      item.deviceSlug === cihaz &&
      item.status === "published" &&
      item.indexable,
  );
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
  });
}

export default async function ErrorDevicePage({ params }: Params) {
  const { cihaz } = await params;
  const page = buildErrorCodeHubPages().find(
    (item) =>
      item.pageType === "error-device-hub" &&
      item.deviceSlug === cihaz &&
      item.status === "published" &&
      item.indexable,
  );
  if (!page) notFound();
  const brands = buildErrorCodeHubPages().filter(
    (item) => item.pageType === "error-brand-hub" && item.deviceSlug === cihaz,
  );

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hata Kodları", href: "/hata-kodlari" },
        { label: page.deviceTitle },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <Section title="Marka grupları" centered={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brands.map((item) => (
              <Link
                key={item.slug}
                href={item.canonicalPath}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-5"
              >
                <div className="text-headline-sm font-headline-sm text-primary">{item.brandGroupTitle}</div>
                <p className="text-body-md text-on-surface-variant mt-2">{item.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
