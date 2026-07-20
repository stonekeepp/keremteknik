import Link from "next/link";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBrandHubIndexPage, buildBrandHubPages } from "@/lib/seo-pages";

const page = buildBrandHubIndexPage();
const brands = buildBrandHubPages();

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: page.canonicalPath,
});

export default function BrandHubIndexPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Markalar" },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <Section title="Marka servis sayfaları" centered={false}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.brandSlug}
                href={`/markalar/${brand.brandSlug}`}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-4 text-body-md text-primary hover:border-primary/30 transition-colors"
              >
                {brand.brandName}
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
