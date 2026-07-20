import Link from "next/link";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaultGuidePages, buildFaultHubPage } from "@/lib/seo-pages";

const page = buildFaultHubPage();
const guides = buildFaultGuidePages();

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: page.canonicalPath,
});

export default function FaultHubPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Arıza Rehberi" },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <Section title="Arıza rehberleri" centered={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.canonicalPath}
                className="rounded-2xl border border-outline-variant/40 bg-surface p-5"
              >
                <div className="text-headline-sm font-headline-sm text-primary">{guide.h1}</div>
                <p className="text-body-md text-on-surface-variant mt-2">{guide.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      }
    />
  );
}
