import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Accordion } from "@/components/ui/Accordion";
import { getBlogRepository } from "@/lib/blog";
import {
  FAQ_ITEMS,
  HERO_IMAGE,
  SERVICE_PROCESS,
  SERVICES,
  SITE,
  TRUST_BADGES,
  WHY_US,
} from "@/lib/services/site";

export const metadata: Metadata = {
  title: "Kerem Teknik Servis | Klima, Kombi ve Beyaz Eşya Servisi",
  description:
    "Kerem Teknik Servis; klima, kombi ve beyaz eşya arızaları için hızlı, güvenilir ve profesyonel teknik servis hizmeti sunar.",
};

export default async function HomePage() {
  const repo = getBlogRepository();
  const latestPosts = (await repo.findPublished()).slice(0, 3);

  return (
    <>
      <section className="relative px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface-container-low max-w-container-max mx-auto w-full flex flex-col md:flex-row items-center gap-stack-lg">
        <div className="w-full md:w-1/2 flex flex-col gap-stack-md z-10">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile md:text-headline-lg md:font-headline-lg text-primary">
            Klima, Kombi ve Beyaz Eşya Servisinde Güvenilir Çözüm
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Deneyimli teknik ekibimizle klima, kombi, çamaşır makinesi,
            buzdolabı, bulaşık makinesi, fırın ve ocak arızalarınız için
            hızlı, güvenilir ve profesyonel teknik servis hizmeti sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/iletisim"
              className="bg-cta text-on-primary px-8 py-4 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors shadow-sm text-center"
            >
              Hemen Randevu Al
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="border-2 border-primary text-primary px-8 py-4 rounded-[12px] font-button text-button hover:bg-surface-container-high transition-colors text-center"
            >
              Bizi Ara
            </a>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-outline-variant/30">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  {badge.icon}
                </span>
                <span className="text-label-md font-label-md text-on-surface">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden elevation-1 elevation-2 relative h-[400px]">
          <Image
            src={HERO_IMAGE}
            alt="Teknik servis"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <h2 className="text-headline-md font-headline-md text-primary mb-stack-lg text-center">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.slice(0, 3).map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetlerimiz/${service.slug}`}
              className="bg-surface rounded-xl p-6 elevation-1 elevation-2 flex flex-col gap-4 items-start"
            >
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-primary">
                {service.title}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                {service.shortDescription.slice(0, 80)}...
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/hizmetlerimiz"
            className="text-secondary font-button text-button hover:underline"
          >
            Tüm Hizmetleri Gör
          </Link>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full bg-surface-container-low rounded-2xl">
        <h2 className="text-headline-md font-headline-md text-primary mb-stack-lg text-center">
          Neden Kerem Teknik Servis?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="bg-surface rounded-xl p-6 elevation-1 text-center"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
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
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <h2 className="text-headline-md font-headline-md text-primary mb-stack-lg text-center">
          Servis Sürecimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {SERVICE_PROCESS.map((step) => (
            <div
              key={step.step}
              className="bg-surface rounded-xl p-6 shadow-level-1 relative"
            >
              <span className="text-headline-md font-headline-md text-secondary mb-3 block">
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
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <h2 className="text-headline-md font-headline-md text-primary mb-stack-lg text-center">
          Öne Çıkan Hizmetler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.filter((s) => s.hasDetailPage)
            .slice(0, 3)
            .map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
          <div className="flex justify-between items-center mb-stack-lg">
            <h2 className="text-headline-md font-headline-md text-primary">
              Blogdan Son Yazılar
            </h2>
            <Link
              href="/blog"
              className="text-secondary font-button text-button hover:underline"
            >
              Tüm Yazılar
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-surface rounded-2xl card-elevation overflow-hidden flex flex-col"
              >
                <div className="relative h-48 bg-surface-container">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
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
        </section>
      )}

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <h2 className="text-headline-md font-headline-md text-primary mb-stack-lg text-center">
          Sık Sorulan Sorular
        </h2>
        <Accordion items={[...FAQ_ITEMS]} limit={4} />
        <div className="text-center mt-6">
          <Link
            href="/sss"
            className="text-secondary font-button text-button hover:underline"
          >
            Tüm Sorular
          </Link>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-on-primary shadow-xl">
          <h2 className="text-headline-md font-headline-md mb-4">
            Arıza Kaydı Oluşturun
          </h2>
          <p className="text-body-lg font-body-lg text-primary-fixed-dim mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz en kısa sürede adresinizde olsun.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-block bg-cta text-on-primary px-8 py-4 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors shadow-sm"
          >
            Bizi Arayın: {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
