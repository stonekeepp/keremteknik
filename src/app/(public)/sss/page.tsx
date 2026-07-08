import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { FAQ_ITEMS, SITE } from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Kerem Teknik Servis hizmetleri, süreçleri ve politikaları hakkında sık sorulan sorular.",
  path: "/sss",
});

export default function SssPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", href: "/" },
            { name: "SSS" },
          ]),
          buildFaqPageJsonLd(),
        ]}
      />
      <PageHero
        title="Sık Sorulan Sorular"
        description="Hizmetlerimiz, süreçlerimiz ve politikalarımız hakkında en çok merak edilen soruların cevaplarını burada bulabilirsiniz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "SSS" },
        ]}
      />
      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto">
          <Accordion items={[...FAQ_ITEMS]} />
        </div>
        <div className="mt-12 bg-surface-container-low rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
            Sorunuz mu var?
          </h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            Aradığınız cevabı bulamadıysanız bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/iletisim">İletişime Geç</Button>
            <Button href={`tel:${SITE.phoneTel}`} variant="outline">
              Hemen Ara
            </Button>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
