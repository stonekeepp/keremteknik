import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { HeroShowcaseImage } from "@/components/ui/HeroShowcaseImage";
import { Badge } from "@/components/ui/Badge";
import { SITE, TRUST_BADGES } from "@/lib/services/site";

type ServiceDetailHeroProps = {
  title: string;
  description: string;
  heroImage: string;
  icon: string;
  breadcrumbs: { label: string; href?: string }[];
};

export function ServiceDetailHero({
  title,
  description,
  heroImage,
  icon,
  breadcrumbs,
}: ServiceDetailHeroProps) {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(0,30,64,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,85,0,0.05) 0%, transparent 40%)",
        }}
      />
      <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 lg:py-20">
        <Breadcrumb items={breadcrumbs} className="mb-8" />

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
              {title}
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE.phoneTel}`}>
                <span className="material-symbols-outlined">call</span>
                Hemen Ara
              </Button>
              <Button href="/iletisim" variant="outline">
                Servis Talebi Oluştur
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <HeroShowcaseImage
              src={heroImage}
              alt={`${title} - Kerem Teknik Servis`}
            />
            <div className="absolute -bottom-5 -left-2 md:left-4 bg-surface rounded-2xl shadow-premium-lg p-4 hidden sm:flex items-center gap-3">
              <span className="material-symbols-outlined text-gold text-3xl shrink-0">
                {icon}
              </span>
              <div>
                <p className="text-headline-sm font-headline-sm text-primary leading-tight">
                  Uzman Servis
                </p>
                <p className="text-body-md text-on-surface-variant">
                  Garantili işçilik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
