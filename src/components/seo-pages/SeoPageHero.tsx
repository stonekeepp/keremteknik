import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { HeroContactButtons } from "@/components/ui/HeroContactButtons";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/services/site";

type SeoPageHeroProps = {
  h1: string;
  intro: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: string;
  imageAlt?: string;
};

function SeoHeroImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-outline-variant/30 ring-1 ring-primary/5">
      <div className="relative aspect-[4/3] sm:aspect-[16/11] min-h-[280px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-3 bg-surface/95 backdrop-blur-sm rounded-2xl p-4 shadow-premium-md">
          <Icon name="handyman" className="w-8 h-8 text-gold shrink-0" />
          <div>
            <p className="text-headline-sm font-headline-sm text-primary leading-tight">
              Uzman Servis Ekibi
            </p>
            <p className="text-body-md text-on-surface-variant">
              Yerinde teşhis · Garantili onarım
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SeoPageHero({
  h1,
  intro,
  breadcrumbs,
  image,
  imageAlt,
}: SeoPageHeroProps) {
  const alt = imageAlt ?? h1;

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(0,30,64,0.07) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(255,85,0,0.06) 0%, transparent 45%)",
        }}
      />
      <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 md:pt-10 md:pb-16">
        <Breadcrumb items={breadcrumbs} className="mb-6" />

        {image ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5 z-10">
              <h1 className="text-headline-lg-mobile md:text-[2.5rem] md:leading-tight font-headline-lg text-primary">
                {h1}
              </h1>
              <div className="lg:hidden">
                <SeoHeroImageCard src={image} alt={alt} />
              </div>
              <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
                {intro}
              </p>
              <HeroContactButtons appointmentLabel="Servis Talebi Oluştur" />
            </div>
            <div className="hidden lg:block lg:col-span-6">
              <SeoHeroImageCard src={image} alt={alt} />
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary max-w-4xl">
              {h1}
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-5 max-w-3xl">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href={`tel:${SITE.phoneTel}`}>Hemen Ara</Button>
              <Button href={`https://wa.me/${SITE.whatsapp}`} variant="whatsapp" external>
                WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
