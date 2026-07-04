import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  FAQ_ITEMS,
  SERVICE_PROCESS,
  SERVICE_DETAILS,
  SITE,
  getServiceDetailSlugs,
  getServiceImage,
} from "@/lib/services/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServiceDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return {};
  return buildPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/hizmetlerimiz/${slug}`,
    ogImage: getServiceImage(slug),
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) notFound();

  const relatedFaq = (detail.relatedFaqIndices ?? [0, 1, 2]).map(
    (i) => FAQ_ITEMS[i],
  );

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: detail.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: detail.title,
            description: detail.description,
            slug,
          }),
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
            { name: detail.title },
          ]),
        ]}
      />

      <PageHero
        title={detail.title}
        description={detail.description}
        breadcrumbs={breadcrumbs}
      >
        <Button href={`tel:${SITE.phoneTel}`}>
          <span className="material-symbols-outlined">call</span>
          {SITE.phone}
        </Button>
      </PageHero>

      <Section className="!pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-premium-lg">
            <Image
              src={getServiceImage(slug)}
              alt={`${detail.title} - Kerem Teknik Servis`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="bg-surface rounded-2xl p-8 shadow-level-1 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              {detail.icon}
            </span>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              Bu Hizmette Neler Yapıyoruz?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-4">
              Yerinde arıza tespiti, şeffaf bilgilendirme ve onayınız sonrası
              profesyonel onarım ile cihazınızı güvenle teslim ediyoruz.
              İstanbul genelinde aynı gün teknik servis desteği sunuyoruz.
            </p>
            <Button href="/iletisim" variant="outline">
              Servis Talebi Oluştur
            </Button>
          </div>
        </div>
      </Section>

      {(detail.commonIssues.length > 0 || detail.scope) && (
        <Section
          variant="muted"
          title={detail.scope ? "Hizmet Kapsamı" : "Sık Karşılaşılan Arızalar"}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(detail.scope ?? detail.commonIssues).map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-surface rounded-2xl p-5 shadow-level-1"
              >
                <span className="material-symbols-outlined text-cta shrink-0">
                  check_circle
                </span>
                <span className="text-body-md text-on-surface-variant">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Servis Süreci" subtitle="4 adımda profesyonel hizmet">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICE_PROCESS.map((step) => (
            <div
              key={step.step}
              className="text-center bg-surface rounded-2xl p-6 shadow-level-1 border border-outline-variant/30"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cta/10 text-cta text-headline-sm font-headline-sm mb-3">
                {step.step}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="İlgili SSS">
        <div className="max-w-3xl mx-auto">
          <Accordion items={relatedFaq} />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
