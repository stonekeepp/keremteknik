import { Suspense } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroShowcaseImage } from "@/components/ui/HeroShowcaseImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { HomeLatestPosts } from "@/components/home/HomeLatestPosts";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceProcessBlock } from "@/components/services/ServiceProcessBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  buildFaqPageJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  FAQ_ITEMS,
  HERO_IMAGE,
  HOME_FAQ_LIMIT,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
  TRUST_BADGES,
  WHY_US,
} from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title:
    "Kerem Teknik Servis | İstanbul Klima, Kombi ve Beyaz Eşya Teknik Servisi",
  description:
    "İstanbul genelinde klima, kombi ve beyaz eşya arızalarına aynı gün müdahale. Kerem Teknik Servis; garantili işçilik, şeffaf fiyat ve periyodik bakım hizmeti sunar.",
  path: "/",
  absoluteTitle: true,
});

const heroImageAlt =
  "Kerem Teknik Servis — İstanbul klima, kombi ve beyaz eşya teknik servisi";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildOrganizationJsonLd(),
          buildFaqPageJsonLd(FAQ_ITEMS.slice(0, HOME_FAQ_LIMIT)),
        ]}
      />

      <section className="relative bg-gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(0,30,64,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,85,0,0.05) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.slice(0, 2).map((badge) => (
                <Badge key={badge.label} icon={badge.icon}>
                  {badge.label}
                </Badge>
              ))}
            </div>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary">
              İstanbul&apos;da Profesyonel Klima, Kombi ve Beyaz Eşya Servisi
            </h1>

            <div className="lg:hidden">
              <HeroShowcaseImage
                src={HERO_IMAGE}
                alt={heroImageAlt}
                priority
              />
            </div>

            <p className="text-body-lg text-on-surface-variant max-w-xl">
              Kerem Teknik Servis; klima, kombi, çamaşır makinesi, buzdolabı,
              bulaşık makinesi, fırın ve ocak arızalarında yerinde teşhis,
              garantili işçilik ve şeffaf fiyatlandırma ile aynı gün teknik
              servis hizmeti verir.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button href="/iletisim">Hemen Randevu Al</Button>
              <Button href={`tel:${SITE.phoneTel}`} variant="outline">
                <Icon name="call" className="w-5 h-5" />
                Bizi Ara
              </Button>
              <Button
                href={`https://wa.me/${SITE.whatsapp}`}
                variant="whatsapp"
                external
              >
                <Icon name="chat" className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="hidden lg:block w-full lg:w-1/2 relative">
            <HeroShowcaseImage
              src={HERO_IMAGE}
              alt={heroImageAlt}
              priority
            />
            <div className="absolute -bottom-6 -left-4 md:left-4 bg-surface rounded-2xl shadow-premium-lg p-4">
              <div className="flex items-center gap-3">
                <Icon name="verified" className="w-8 h-8 text-gold" />
                <div>
                  <p className="text-headline-sm font-headline-sm text-primary">
                    Garantili İşçilik
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Onarım ve parça değişiminde yazılı garanti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 md:py-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-headline-md md:text-headline-lg font-headline-md text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-body-md text-primary-fixed-dim">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="hizmetler"
        title="Hizmetlerimiz"
        subtitle="Klima, kombi, beyaz eşya, periyodik bakım ve yedek parça hizmetlerinde uçtan uca teknik destek"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/hizmetlerimiz" variant="outline">
            Tüm Hizmetleri İncele
          </Button>
        </div>
      </Section>

      <Section
        variant="muted"
        title="Neden Kerem Teknik Servis?"
        subtitle="Hızlı müdahale, uzman ekip ve şeffaf süreç ile İstanbul genelinde güvenilir teknik servis deneyimi"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-2xl p-6 shadow-level-1 text-center card-elevation group"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${item.iconBg} group-hover:brightness-95`}
              >
                <Icon
                  name={item.icon as IconName}
                  className={`w-8 h-8 ${item.iconColor}`}
                />
              </div>
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

      <ServiceProcessBlock />

      <Section
        title="Müşterilerimiz Ne Diyor?"
        subtitle="Klima, kombi ve beyaz eşya servislerimizden memnun kalan müşterilerimizin geri bildirimleri"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <Suspense fallback={null}>
        <HomeLatestPosts />
      </Suspense>

      <Section
        title="Sık Sorulan Sorular"
        subtitle="Servis süresi, fiyatlandırma, garanti kapsamı ve hizmet bölgeleri hakkında yanıtlar"
      >
        <div className="max-w-3xl mx-auto">
          <Accordion items={[...FAQ_ITEMS]} limit={HOME_FAQ_LIMIT} />
          <div className="text-center mt-8">
            <Button href="/sss" variant="outline">
              Tüm Soruları Görüntüle
            </Button>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
