import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  FAQ_ITEMS,
  SERVICE_PROCESS,
  SERVICE_DETAILS,
  WHY_US,
  getServiceDetailSlugs,
  getServiceHeroImage,
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
    ogImage: getServiceHeroImage(slug),
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

      <ServiceDetailHero
        title={detail.title}
        description={detail.description}
        heroImage={getServiceHeroImage(slug)}
        icon={detail.icon}
        breadcrumbs={breadcrumbs}
      />

      <Section
        title="Nasıl Destek Veriyoruz?"
        subtitle="Yerinde arıza tespiti, şeffaf bilgilendirme ve onayınız sonrası profesyonel onarım ile cihazınızı güvenle teslim ediyoruz."
        centered
        className="!pb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-2xl p-6 shadow-premium-sm border border-outline-variant/30 text-center"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-3">
                {item.icon}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {(detail.commonIssues.length > 0 || detail.scope) && (
        <Section
          variant="muted"
          title={detail.scope ? "Hizmet Kapsamı" : "Sık Karşılaşılan Arızalar"}
          subtitle={
            detail.scope
              ? "Aşağıdaki cihaz ve sistemler için teknik servis desteği sunuyoruz."
              : "En sık karşılaştığımız arıza türleri ve hızlı çözüm seçenekleri."
          }
          centered
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {(detail.scope ?? detail.commonIssues).map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-surface rounded-2xl p-5 shadow-level-1"
              >
                <span className="material-symbols-outlined text-cta shrink-0">
                  check_circle
                </span>
                <span className="text-body-md text-on-surface-variant text-left">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section
        title="Servis Sürecimiz"
        subtitle="4 adımda profesyonel hizmet"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICE_PROCESS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-surface rounded-2xl p-6 shadow-premium-sm border border-outline-variant/30 text-center"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gold text-label-md font-label-md mb-4">
                {step.step}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
              {index < SERVICE_PROCESS.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 material-symbols-outlined text-outline-variant text-xl -translate-y-1/2">
                  arrow_forward
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="İlgili SSS" centered>
        <div className="max-w-3xl mx-auto">
          <Accordion items={relatedFaq} />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
