import Link from "next/link";
import { HeroShowcaseImage } from "@/components/ui/HeroShowcaseImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { HeroContactButtons } from "@/components/ui/HeroContactButtons";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { ServiceQuickNav } from "@/components/services/ServiceQuickNav";
import { ServiceProcessBlock } from "@/components/services/ServiceProcessBlock";
import { ServiceCard } from "@/components/services/ServiceCard";
import { buildOrganizationJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  SERVICES,
  SERVICES_HERO_IMAGE,
  TRUST_BADGES,
} from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Hizmetlerimiz | İstanbul Klima, Kombi ve Beyaz Eşya Servisi",
  description:
    "Kerem Teknik Servis hizmetleri: klima, kombi, beyaz eşya, periyodik bakım ve yedek parça. İstanbul genelinde aynı gün yerinde teknik servis, garantili işçilik.",
  path: "/hizmetlerimiz",
});

const SERVICE_CATEGORIES = [
  {
    label: "Klima & Kombi",
    icon: "ac_unit",
    slugs: ["klima-servisi", "kombi-servisi"],
  },
  {
    label: "Beyaz Eşya",
    icon: "kitchen",
    slugs: ["beyaz-esya-servisi"],
  },
  {
    label: "Bakım & Parça",
    icon: "handyman",
    slugs: ["periyodik-bakim", "yedek-parca-iscilik"],
  },
] as const;

export default function HizmetlerimizPage() {
  const detailServices = SERVICES.filter((s) => s.hasDetailPage);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />

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
                İstanbul Teknik Servis Hizmetlerimiz
              </h1>

              <p className="text-body-lg text-on-surface-variant max-w-xl">
                Kerem Teknik Servis olarak klima, kombi ve beyaz eşya
                cihazlarınız için yerinde arıza tespiti, bakım, onarım ve yedek
                parça desteği sunuyoruz. İstanbul genelinde aynı gün teknik
                servis planlaması yapıyoruz.
              </p>

              <HeroContactButtons />

              <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/40">
                {SERVICE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.label}
                    href={`/hizmetlerimiz/${cat.slugs[0]}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface/80 border border-outline-variant/50 text-label-md font-label-md text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <Icon
                      name={cat.icon as IconName}
                      className="w-5 h-5 text-secondary"
                    />
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <HeroShowcaseImage
                src={SERVICES_HERO_IMAGE}
                alt="Kerem Teknik Servis — İstanbul klima, kombi ve beyaz eşya servisi"
                priority
              />
              <div className="absolute -bottom-5 -right-2 md:right-4 bg-surface rounded-2xl shadow-premium-lg p-4 hidden sm:block max-w-[220px]">
                <div className="flex items-start gap-3">
                  <Icon
                    name="home_repair_service"
                    className="w-8 h-8 text-gold shrink-0"
                  />
                  <div>
                    <p className="text-headline-sm font-headline-sm text-primary leading-tight">
                      {detailServices.length} Servis Alanı
                    </p>
                    <p className="text-body-md text-on-surface-variant mt-1">
                      Klima, kombi ve beyaz eşya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceQuickNav />

      <Section
        title="Tüm Servis Hizmetlerimiz"
        subtitle="Arıza tespiti, periyodik bakım, onarım ve yedek parça desteği ile cihazlarınıza profesyonel çözümler"
        centered
        className="!pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <ServiceProcessBlock subtitle="Randevudan teslimata kadar şeffaf, hızlı ve bilgilendirici bir servis akışı" />

      <CTABand />
    </>
  );
}
