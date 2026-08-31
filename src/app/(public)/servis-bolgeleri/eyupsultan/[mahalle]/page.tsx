import Link from "next/link";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import {
  buildCollectionPageJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  getMahallePage,
  getMahalleParams,
} from "@/lib/seo-pages";

export const dynamicParams = false;

type Params = { params: Promise<{ mahalle: string }> };

export function generateStaticParams() {
  return getMahalleParams();
}

export async function generateMetadata({ params }: Params) {
  const { mahalle } = await params;
  const page = getMahallePage(mahalle);
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.canonicalPath,
    noIndex: !page.indexable,
  });
}

export default async function EyupsultanMahallePage({ params }: Params) {
  const { mahalle } = await params;
  const page = getMahallePage(mahalle);
  if (!page) notFound();

  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Servis Bölgeleri", href: "/servis-bolgeleri" },
        { label: "Eyüpsultan", href: "/servis-bolgeleri/eyupsultan" },
        { label: page.name },
      ]}
      jsonLd={[
        buildCollectionPageJsonLd({
          title: page.title,
          description: page.metaDescription,
          path: page.canonicalPath,
        }),
        ...(page.faqs.length > 0 ? [buildFaqPageJsonLd(page.faqs)] : []),
      ]}
      extraTop={
        <Section title="Mahalle özeti" centered={false}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30">
              <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
                Mesafe ve varış
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Yaklaşık {page.distanceKmAir} km (kuş uçuşu)
              </p>
              <p className="text-body-md text-on-surface-variant mt-2">
                Trafik bandı: {page.driveTimeBand}
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-6 border border-outline-variant/30 lg:col-span-2">
              <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
                Hizmet sayfaları
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {page.internalLinks
                  .filter((link) => link.href.includes("/eyupsultan/"))
                  .slice(0, 3)
                  .map((link) => (
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
          </div>
        </Section>
      }
    />
  );
}
