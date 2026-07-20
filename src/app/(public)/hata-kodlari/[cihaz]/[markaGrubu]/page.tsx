import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildErrorCodeHubPages, buildErrorCodePages, getErrorBrandParams } from "@/lib/seo-pages";

export const dynamicParams = false;
type Params = { params: Promise<{ cihaz: string; markaGrubu: string }> };

export function generateStaticParams() {
  return getErrorBrandParams();
}

export async function generateMetadata({ params }: Params) {
  const { cihaz, markaGrubu } = await params;
  const page = buildErrorCodeHubPages().find(
    (item) =>
      item.pageType === "error-brand-hub" &&
      item.deviceSlug === cihaz &&
      item.brandGroupSlug === markaGrubu &&
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

export default async function ErrorBrandGroupPage({ params }: Params) {
  const { cihaz, markaGrubu } = await params;
  const page = buildErrorCodeHubPages().find(
    (item) =>
      item.pageType === "error-brand-hub" &&
      item.deviceSlug === cihaz &&
      item.brandGroupSlug === markaGrubu &&
      item.status === "published" &&
      item.indexable,
  );
  if (!page) notFound();
  const codes = buildErrorCodePages().filter(
    (item) => item.deviceSlug === cihaz && item.brandGroupSlug === markaGrubu && item.indexable,
  );

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hata Kodları", href: "/hata-kodlari" },
        { label: page.deviceTitle, href: `/hata-kodlari/${page.deviceSlug}` },
        { label: page.brandGroupTitle ?? "" },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <Section title="Doğrulanmış hata kodları" centered={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codes.map((item) => (
              <Link
                key={item.slug}
                href={item.canonicalPath}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-5"
              >
                <div className="text-headline-sm font-headline-sm text-primary">{item.code}</div>
                <p className="text-body-md text-on-surface-variant mt-2">{item.meaning}</p>
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
