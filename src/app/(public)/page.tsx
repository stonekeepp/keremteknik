import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getBlogRepository } from "@/lib/blog";
import {
  buildFaqPageJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  FAQ_ITEMS,
  HERO_IMAGE,
  SERVICE_PROCESS,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
  TRUST_BADGES,
  WHY_US,
} from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Kerem Teknik Servis | Klima, Kombi ve Beyaz Eşya Servisi",
  description:
    "Kerem Teknik Servis; klima, kombi ve beyaz eşya arızaları için hızlı, güvenilir ve profesyonel teknik servis hizmeti sunar. İstanbul geneli aynı gün servis.",
  path: "/",
  absoluteTitle: true,
});

export default async function HomePage() {
  const repo = getBlogRepository();
  const latestPosts = (await repo.findPublished()).slice(0, 3);

  return (
    <>
      <JsonLd data={[buildOrganizationJsonLd(), buildFaqPageJsonLd(FAQ_ITEMS.slice(0, 4))]} />

      {/* Hero */}
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
              Klima, Kombi ve Beyaz Eşya Servisinde Güvenilir Çözüm
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              Deneyimli teknik ekibimizle klima, kombi, çamaşır makinesi,
              buzdolabı, bulaşık makinesi, fırın ve ocak arızalarınız için
              hızlı, güvenilir ve profesyonel teknik servis hizmeti sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/iletisim">Hemen Randevu Al</Button>
              <Button href={`tel:${SITE.phoneTel}`} variant="outline">
                <span className="material-symbols-outlined">call</span>
                Bizi Ara
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-premium-lg relative h-[360px] md:h-[440px]">
              <Image
                src={HERO_IMAGE}
                alt="Kerem Teknik Servis uzman teknisyen ekibi"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:left-4 bg-surface rounded-2xl shadow-premium-lg p-4 hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold text-3xl">
                  verified
                </span>
                <div>
                  <p className="text-headline-sm font-headline-sm text-primary">
                    Garantili İşçilik
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Tüm onarımlarda garanti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10 md:py-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-headline-md md:text-headline-lg font-headline-md text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-body-md text-primary-fixed-dim">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <Section
        id="hizmetler"
        title="Hizmetlerimiz"
        subtitle="Klima, kombi ve beyaz eşya cihazlarınız için kapsamlı teknik servis çözümleri"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/hizmetlerimiz" variant="outline">
            Tüm Hizmetleri Gör
          </Button>
        </div>
      </Section>

      {/* Why Us */}
      <Section
        variant="muted"
        title="Neden Kerem Teknik Servis?"
        subtitle="Yılların deneyimi ve müşteri odaklı hizmet anlayışımızla yanınızdayız"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-2xl p-6 shadow-level-1 text-center card-elevation group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.icon}
                </span>
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

      {/* Process */}
      <Section
        title="Servis Sürecimiz"
        subtitle="4 adımda hızlı ve şeffaf teknik servis deneyimi"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
          {SERVICE_PROCESS.map((step, index) => (
            <div key={step.step} className="relative">
              {index < SERVICE_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-outline-variant/50" />
              )}
              <div className="bg-surface rounded-2xl p-6 shadow-level-1 h-full border border-outline-variant/30">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cta/10 text-cta text-headline-sm font-headline-sm mb-4">
                  {step.step}
                </span>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        variant="muted"
        title="Müşterilerimiz Ne Diyor?"
        subtitle="Binlerce mutlu müşterimizden bazı yorumlar"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* Blog */}
      {latestPosts.length > 0 && (
        <Section title="Blogdan Son Yazılar">
          <div className="flex justify-end mb-6 -mt-6">
            <Link
              href="/blog"
              className="text-secondary font-button text-button hover:underline"
            >
              Tüm Yazılar →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-surface rounded-2xl card-elevation overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 bg-surface-container overflow-hidden">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-label-md font-label-md text-secondary mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                    {post.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary font-button text-button hover:underline"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section
        title="Sık Sorulan Sorular"
        subtitle="Merak ettiğiniz soruların cevapları"
      >
        <div className="max-w-3xl mx-auto">
          <Accordion items={[...FAQ_ITEMS]} limit={4} />
          <div className="text-center mt-8">
            <Button href="/sss" variant="outline">
              Tüm Sorular
            </Button>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
