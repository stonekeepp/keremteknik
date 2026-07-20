import Link from "next/link";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildErrorCodeHubPages, buildErrorHubPage } from "@/lib/seo-pages";

const page = buildErrorHubPage();
const hubs = buildErrorCodeHubPages().filter((item) => item.pageType === "error-device-hub");

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: page.canonicalPath,
});

export default function ErrorHubPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hata Kodları" },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <Section title="Cihaz kategorileri" centered={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hubs.map((hub) => (
              <Link
                key={hub.slug}
                href={hub.canonicalPath}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-5"
              >
                <div className="text-headline-sm font-headline-sm text-primary">{hub.deviceTitle}</div>
                <p className="text-body-md text-on-surface-variant mt-2">{hub.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
