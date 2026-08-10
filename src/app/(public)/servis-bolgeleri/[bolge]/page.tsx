import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import {
  buildAreaServedServiceJsonLd,
  buildCollectionPageJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildRegionHubServiceLinks,
  getRegionPage,
  getRegionStaticParams,
} from "@/lib/seo-pages";

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

  const regionServiceLinks = buildRegionHubServiceLinks(page.slug, page.name);
  const klimaLinks = regionServiceLinks.filter(
    (link) =>
      link.href.includes("/klima-") || link.href.endsWith("/acil-klima-servisi"),
  );
  const otherServiceLinks = regionServiceLinks.filter(
    (link) => !klimaLinks.includes(link),
  );

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
        ...(page.faqs.length > 0 ? [buildFaqPageJsonLd(page.faqs)] : []),
      ]}
      extraTop={
        <>
          <Section title="Yerel bilgiler" centered={false}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30">
                <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
                  Bölge özeti
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {page.continentSide}
                </p>
                {page.distanceLabel && (
                  <p className="text-body-md text-on-surface-variant mt-2">
                    {page.distanceLabel}
                  </p>
                )}
              </div>
              <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30 lg:col-span-2">
                <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
                  Mahalleler
                </h2>
                <div className="flex flex-wrap gap-2">
                  {page.neighborhoods.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary/8 px-3 py-1 text-body-md text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {regionServiceLinks.length > 0 && (
            <Section
              title={`${page.name} hizmet sayfaları`}
              subtitle="Bölgeye özel klima, kombi ve beyaz eşya sayfalarına geçin"
              centered={false}
            >
              {klimaLinks.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-4">
                    Klima hizmetleri
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {klimaLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex flex-col h-full rounded-2xl border border-outline-variant/50 bg-surface p-4 shadow-premium-sm hover:border-primary/20 hover:shadow-premium-md transition-all"
                        >
                          <span className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="text-body-md text-on-surface-variant mt-1.5 line-clamp-2">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {otherServiceLinks.length > 0 && (
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-4">
                    Diğer teknik hizmetler
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {otherServiceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex flex-col h-full rounded-2xl border border-outline-variant/50 bg-surface p-4 shadow-premium-sm hover:border-primary/20 hover:shadow-premium-md transition-all"
                        >
                          <span className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="text-body-md text-on-surface-variant mt-1.5 line-clamp-2">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
          )}
        </>
      }
    />
  );
}
