import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import {
  ServiceProcessSection,
  ServiceRelatedSection,
  ServiceScopeSection,
  ServiceWhySection,
} from "@/components/services/ServiceDetailSections";
import { ServiceQualityStrip } from "@/components/services/ServiceQualityStrip";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo/json-ld";
import {
  absoluteUrl,
  buildDescriptionFallback,
  buildPageMetadata,
} from "@/lib/seo/metadata";
import {
  FAQ_ITEMS,
  SERVICE_DETAILS,
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
  const heroImage = getServiceHeroImage(slug);
  return buildPageMetadata({
    title: detail.title,
    description:
      detail.metaDescription ??
      buildDescriptionFallback({
        title: detail.title,
        description: detail.description,
      }),
    path: `/hizmetlerimiz/${slug}`,
    ogImage: heroImage,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) notFound();

  const heroImage = getServiceHeroImage(slug);
  const relatedFaq = [
    ...(detail.faqs ?? []),
    ...(detail.relatedFaqIndices ?? [0, 1, 2]).map((i) => FAQ_ITEMS[i]),
  ];

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: detail.title },
  ];

  const scopeItems = detail.scope ?? detail.commonIssues;
  const issuesTitle = detail.scope ? "Hizmet Kapsamı" : "Sık Karşılaşılan Arızalar";
  const issuesSubtitle = detail.scope
    ? "Bu hizmet kapsamında destek verdiğimiz cihaz, sistem ve işlemler"
    : "En sık karşılaştığımız arıza türleri ve profesyonel çözüm seçenekleri";

  return (
    <>
      <JsonLd
        data={[
          {
            ...buildServiceJsonLd({
              name: detail.title,
              description: detail.description,
              slug,
              serviceType: detail.title,
            }),
            image: absoluteUrl(heroImage),
          },
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
            { name: detail.title },
          ]),
          buildFaqPageJsonLd(relatedFaq),
        ]}
      />

      <ServiceDetailHero
        title={detail.title}
        description={detail.description}
        heroImage={heroImage}
        icon={detail.icon}
        breadcrumbs={breadcrumbs}
      />

      <ServiceQualityStrip />

      <ServiceWhySection
        serviceTitle={detail.title}
        uniqueIntro={detail.uniqueIntro}
      />

      {scopeItems.length > 0 && (
        <ServiceScopeSection
          title={issuesTitle}
          subtitle={issuesSubtitle}
          items={scopeItems}
          heroImage={heroImage}
          serviceTitle={detail.title}
          icon={detail.icon}
        />
      )}

      <ServiceProcessSection serviceTitle={detail.title} />

      <Section
        title="Sık Sorulan Sorular"
        subtitle={`${detail.title} hizmeti hakkında en çok merak edilen konular`}
        centered
      >
        <div className="max-w-3xl mx-auto">
          <Accordion items={relatedFaq} />
        </div>
      </Section>

      <ServiceRelatedSection currentSlug={slug} />

      <CTABand />
    </>
  );
}
