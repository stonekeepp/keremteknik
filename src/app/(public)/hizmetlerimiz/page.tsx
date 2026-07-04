import Link from "next/link";
import { HeroShowcaseImage } from "@/components/ui/HeroShowcaseImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { buildOrganizationJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  SERVICE_PROCESS,
  SERVICES,
  SERVICES_HERO_IMAGE,
  SITE,
  TRUST_BADGES,
} from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Hizmetlerimiz",
  description:
    "Kerem Teknik Servis olarak klima, kombi ve beyaz eşya cihazlarınız için hızlı, güvenilir ve profesyonel servis çözümleri sunuyoruz.",
  path: "/hizmetlerimiz",
});

const SERVICE_CATEGORIES = [
  { label: "Klima & Kombi", icon: "ac_unit", slugs: ["klima-servisi", "kombi-servisi"] },
  { label: "Beyaz Eşya", icon: "kitchen", slugs: ["beyaz-esya-servisi"] },
  { label: "Bakım & Onarım", icon: "handyman", slugs: ["periyodik-bakim", "yedek-parca-iscilik"] },
] as const;

export default function HizmetlerimizPage() {
  const detailServices = SERVICES.filter((s) => s.hasDetailPage);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />

      {/* Premium Hero */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(0,30,64,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,85,0,0.05) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 lg:py-24">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetlerimiz" },
            ]}
            className="mb-8"
          />

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.slice(0, 3).map((badge) => (
                  <Badge key={badge.label} icon={badge.icon}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
                Hizmetlerimiz
              </h1>

              <p className="text-body-lg text-on-surface-variant max-w-xl">
                Kerem Teknik Servis olarak klima, kombi ve beyaz eşya
                cihazlarınız için hızlı, güvenilir ve profesyonel servis
                çözümleri sunuyoruz. İstanbul genelinde aynı gün teknik destek.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/iletisim">Hemen Randevu Al</Button>
                <Button href={`tel:${SITE.phoneTel}`} variant="outline">
                  <span className="material-symbols-outlined">call</span>
                  {SITE.phone}
                </Button>
              </div>

              {/* Quick category links */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/40">
                {SERVICE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.label}
                    href={`/hizmetlerimiz/${cat.slugs[0]}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface/80 border border-outline-variant/50 text-label-md font-label-md text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg text-secondary">
                      {cat.icon}
                    </span>
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <HeroShowcaseImage
                src={SERVICES_HERO_IMAGE}
                alt="Kerem Teknik Servis profesyonel hizmet ekibi"
              />
              <div className="absolute -bottom-5 -right-2 md:right-4 bg-surface rounded-2xl shadow-premium-lg p-4 hidden sm:block max-w-[220px]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-gold text-3xl shrink-0">
                    home_repair_service
                  </span>
                  <div>
                    <p className="text-headline-sm font-headline-sm text-primary leading-tight">
                      9+ Servis Alanı
                    </p>
                    <p className="text-body-md text-on-surface-variant mt-1">
                      Klima, kombi ve tüm beyaz eşya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service highlights strip */}
      <section className="bg-primary py-8 md:py-10 border-y border-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {detailServices.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary-container/30 transition-colors"
              >
                <span className="material-symbols-outlined text-gold text-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <span className="text-body-md text-primary-fixed-dim group-hover:text-on-primary transition-colors font-medium">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards grid */}
      <Section
        title="Tüm Servis Hizmetlerimiz"
        subtitle="Arıza tespiti, bakım, onarım ve yedek parça desteği ile cihazlarınıza profesyonel çözümler sunuyoruz."
        centered
        className="!pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Service process */}
      <Section
        variant="muted"
        title="Servis Sürecimiz"
        subtitle="Şeffaf ve hızlı süreç ile arızalarınıza en kısa sürede müdahale ediyoruz."
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICE_PROCESS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-surface rounded-2xl p-6 shadow-premium-sm border border-outline-variant/30"
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

      <CTABand />
    </>
  );
}
