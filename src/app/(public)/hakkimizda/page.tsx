import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils/cn";
import {
  ABOUT_HERO_IMAGE,
  ABOUT_PILLARS,
  ABOUT_STORY,
  ABOUT_TIMELINE,
  SERVICE_AREAS,
  SITE,
  STATS,
  TESTIMONIALS,
} from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Hakkımızda | İstanbul Klima, Kombi ve Beyaz Eşya Teknik Servisi",
  description:
    "Kerem Teknik Servis hakkında: İstanbul'da 15+ yıllık deneyim, aynı gün klima-kombi-beyaz eşya servisi, garantili işçilik ve şeffaf fiyat. Eyüpsultan merkezli güvenilir teknik servis ekibi.",
  path: "/hakkimizda",
  ogImage: ABOUT_HERO_IMAGE,
});

const featuredTestimonial = TESTIMONIALS[0];

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda" },
        ])}
      />

      {/* Dark editorial header — farklı hero yapısı */}
      <header className="bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 md:pt-10 md:pb-16">
          <nav aria-label="Breadcrumb" className="hidden md:block text-body-md mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-primary-fixed-dim">
              <li>
                <Link
                  href="/"
                  className="hover:text-on-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="chevron_right" className="w-4 h-4 opacity-60" />
                <span className="text-gold font-medium" aria-current="page">
                  Hakkımızda
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-label-md font-label-md uppercase tracking-[0.2em] text-gold mb-4">
              Kerem Teknik Servis · İstanbul
            </p>
            <h1 className="text-headline-lg-mobile md:text-[2.75rem] md:leading-tight font-headline-lg text-on-primary mb-5">
              Güvenilir Teknik Servisin Hikayesi
            </h1>
            <p className="text-body-lg text-primary-fixed-dim leading-relaxed">
              Klima, kombi ve beyaz eşya cihazlarında yerinde teşhis, şeffaf
              fiyat ve garantili işçilik sunan; müşteri memnuniyetini her
              servisin merkezine koyan bir ekip.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
            <Button href="/iletisim">Hemen Randevu Al</Button>
            <Button
              href={`tel:${SITE.phoneTel}`}
              variant="outline"
              className="!border-primary-fixed-dim/60 !text-on-primary hover:!bg-white/10"
            >
              <Icon name="call" className="w-5 h-5" />
              {SITE.phone}
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
      </header>

      {/* Tam genişlik sinematik görsel — ana sayfadan farklı görsel */}
      <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px]">
        <Image
          src={ABOUT_HERO_IMAGE}
          alt="Kerem Teknik Servis — İstanbul teknik servis ekibi ve hizmet alanları"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Editöryal hikaye + yan panel */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-headline-md font-headline-md text-primary">
              {ABOUT_STORY.title}
            </h2>
            {ABOUT_STORY.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-body-lg text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 pt-6 border-t border-outline-variant/40">
              <blockquote className="border-l-4 border-gold pl-5">
                <p className="text-label-md font-label-md uppercase tracking-wide text-secondary mb-2">
                  {ABOUT_STORY.missionTitle}
                </p>
                <p className="text-body-md text-on-surface-variant italic">
                  {ABOUT_STORY.mission}
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-cta pl-5">
                <p className="text-label-md font-label-md uppercase tracking-wide text-secondary mb-2">
                  {ABOUT_STORY.visionTitle}
                </p>
                <p className="text-body-md text-on-surface-variant italic">
                  {ABOUT_STORY.vision}
                </p>
              </blockquote>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 shadow-premium-sm">
              <p className="text-label-md font-label-md uppercase tracking-wide text-secondary mb-6">
                Rakamlarla Kerem Teknik
              </p>
              <ul className="space-y-5">
                {STATS.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-center gap-4 pb-5 border-b border-outline-variant/30 last:border-0 last:pb-0"
                  >
                    <Icon
                      name={stat.icon as IconName}
                      className="w-6 h-6 text-gold shrink-0"
                    />
                    <div>
                      <p className="text-headline-sm font-headline-sm text-primary">
                        {stat.value}
                      </p>
                      <p className="text-body-md text-on-surface-variant">
                        {stat.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-outline-variant/30">
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center gap-2 text-body-md font-semibold text-secondary hover:text-primary transition-colors"
                >
                  Hizmetlerimizi keşfedin
                  <Icon name="arrow_forward" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Zikzak değerler — kart grid yerine alternatif satırlar */}
      <section className="bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-headline-md font-headline-md text-primary mb-3">
              Hizmet Anlayışımız
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Her servis talebinde aynı kalite, şeffaflık ve güvenilirlik
              standartlarını uyguluyoruz.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-outline-variant/30">
            {ABOUT_PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className={cn(
                  "flex gap-5 py-9 first:pt-0 last:pb-0",
                  index % 2 === 1 &&
                    "md:flex-row-reverse md:text-right md:ml-auto md:max-w-3xl",
                  index % 2 === 0 && "md:max-w-3xl",
                )}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${pillar.iconBg}`}
                >
                  <Icon
                    name={pillar.icon as IconName}
                    className={`w-8 h-8 ${pillar.iconColor}`}
                  />
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dikey zaman çizelgesi */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-headline-md font-headline-md text-primary mb-3">
              Yolculuğumuz
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              Yerel bir teknik servisten İstanbul geneline yayılan güvenilir
              hizmet ağına uzanan sürecimiz.
            </p>
            <Button href="/iletisim" variant="outline">
              Bizimle Çalışın
            </Button>
          </div>

          <div className="lg:col-span-3 relative pl-8 md:pl-10">
            <div
              className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 bg-primary/15"
              aria-hidden
            />
            <ol className="space-y-10">
              {ABOUT_TIMELINE.map((item) => (
                <li key={item.year} className="relative">
                  <span
                    className="absolute -left-8 md:-left-10 top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-premium-sm"
                    aria-hidden
                  />
                  <p className="text-label-md font-label-md text-gold mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Öne çıkan müşteri yorumu */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <figure className="max-w-3xl mx-auto text-center">
            <Icon
              name="format_quote"
              className="w-12 h-12 text-gold mb-6 block opacity-80"
              aria-hidden
            />
            <blockquote className="text-headline-sm md:text-headline-md font-headline-sm text-primary-fixed-dim leading-relaxed mb-8">
              &ldquo;{featuredTestimonial.text}&rdquo;
            </blockquote>
            <figcaption>
              <cite className="not-italic text-on-primary font-semibold text-body-lg">
                {featuredTestimonial.name}
              </cite>
              <p className="text-primary-fixed-dim text-body-md mt-1">
                {featuredTestimonial.service}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Bölgeler — liste düzeni, pill yerine */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-headline-md font-headline-md text-primary mb-3">
              Hizmet Bölgelerimiz
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              İstanbul genelinde hızlı servis yönlendirmesi yapıyoruz. Merkez
              ofisimiz Eyüpsultan&apos;dadır.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-body-md text-on-surface-variant"
                >
                  <Icon
                    name="check_circle"
                    className="w-5 h-5 text-cta shrink-0"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-3xl p-8 md:p-10 border border-outline-variant/30 shadow-premium-sm flex flex-col justify-between">
            <div>
              <Icon
                name="location_on"
                className="w-10 h-10 text-gold mb-4 block"
              />
              <h3 className="text-headline-sm font-headline-sm text-primary mb-3">
                Merkez Ofisimiz
              </h3>
              <p className="text-body-lg text-on-surface-variant mb-2">
                {SITE.fullAddress}
              </p>
              <p className="text-body-md text-on-surface-variant">
                {SITE.workingHours.weekday}
              </p>
              <p className="text-body-md text-on-surface-variant">
                {SITE.workingHours.saturday}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="/iletisim" className="flex-1">
                İletişime Geç
              </Button>
              <Button
                href={`https://wa.me/${SITE.whatsapp}`}
                variant="whatsapp"
                external
                className="flex-1"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
