import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import type { SeoPageRecord } from "@/lib/seo-pages/types";
import { SITE } from "@/lib/services/site";

type SeoPageTemplateProps = {
  page: SeoPageRecord;
  breadcrumbs: { label: string; href?: string }[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  extraTop?: React.ReactNode;
  extraBottom?: React.ReactNode;
};

export function SeoPageTemplate({
  page,
  breadcrumbs,
  jsonLd,
  extraTop,
  extraBottom,
}: SeoPageTemplateProps) {
  const allJsonLd = [
    buildBreadcrumbJsonLd(
      breadcrumbs.map((item) => ({ name: item.label, href: item.href })),
    ),
    ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
  ];

  return (
    <>
      <JsonLd data={allJsonLd} />
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
          <Breadcrumb items={breadcrumbs} className="mb-6" />
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary max-w-4xl">
            {page.h1}
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-5 max-w-3xl">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button href={`tel:${SITE.phoneTel}`}>Hemen Ara</Button>
            <Button href={`https://wa.me/${SITE.whatsapp}`} variant="whatsapp" external>
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {extraTop}

      {page.sections.map((section) => (
        <Section key={section.id} title={section.title} centered={false}>
          <div className="max-w-4xl">
            <div className="whitespace-pre-line text-body-lg text-on-surface-variant leading-relaxed">
              {section.body}
            </div>
          </div>
        </Section>
      ))}

      {page.faqs.length > 0 && (
        <Section
          variant="muted"
          title="Sık Sorulan Sorular"
          subtitle={`${page.h1} hakkında öne çıkan başlıklar`}
        >
          <div className="max-w-3xl mx-auto">
            <Accordion items={page.faqs} />
          </div>
        </Section>
      )}

      {page.internalLinks.length > 0 && (
        <InternalLinksSection
          heading="İlgili sayfalar"
          links={page.internalLinks}
        />
      )}

      {(page.reviewedAt || page.sourceNotes || page.sourceReferences?.length) && (
        <Section
          variant="muted"
          title="Teknik İnceleme ve Kaynak"
          centered={false}
        >
          <div className="max-w-4xl space-y-4">
            {page.reviewedAt && (
              <p className="text-body-md text-on-surface-variant">
                Son teknik inceleme: {new Date(page.reviewedAt).toLocaleDateString("tr-TR")}
              </p>
            )}
            {page.sourceNotes && (
              <p className="text-body-md text-on-surface-variant">{page.sourceNotes}</p>
            )}
            {page.sourceReferences && page.sourceReferences.length > 0 && (
              <ul className="space-y-2">
                {page.sourceReferences.map((source, index) => (
                  <li
                    key={`${source.name}-${index}`}
                    className="rounded-2xl border border-outline-variant/30 bg-surface p-4"
                  >
                    <p className="text-body-md font-medium text-primary">{source.name}</p>
                    <p className="text-body-md text-on-surface-variant">
                      Kaynak tipi: {source.type}
                      {source.modelSeries ? ` | Seri: ${source.modelSeries}` : ""}
                      {source.verifiedAt ? ` | Doğrulama: ${source.verifiedAt}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      )}

      {extraBottom}
      <CTABand />
    </>
  );
}
