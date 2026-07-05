import Image from "next/image";
import Link from "next/link";
import { HeroContactButtons } from "@/components/ui/HeroContactButtons";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TRUST_BADGES } from "@/lib/services/site";

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
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(0,30,64,0.07) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(255,85,0,0.06) 0%, transparent 45%)",
        }}
      />
      <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 md:pt-10 md:pb-16">
        <Breadcrumb items={breadcrumbs} className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5 z-10">
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.slice(0, 3).map((badge) => (
                <Badge key={badge.label} icon={badge.icon}>
                  {badge.label}
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-label-md font-label-md uppercase tracking-[0.15em] text-secondary mb-3">
                Premium Teknik Servis · İstanbul
              </p>
              <h1 className="text-headline-lg-mobile md:text-[2.5rem] md:leading-tight font-headline-lg text-primary">
                {title}
              </h1>
            </div>

            <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              {description}
            </p>

            <HeroContactButtons appointmentLabel="Servis Talebi Oluştur" />

            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant/40">
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center gap-1.5 text-label-md font-label-md text-secondary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">
                  grid_view
                </span>
                Tüm Hizmetler
              </Link>
              <Link
                href="/sss"
                className="inline-flex items-center gap-1.5 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">help</span>
                SSS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-outline-variant/30 ring-1 ring-primary/5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] min-h-[280px]">
                <Image
                  src={heroImage}
                  alt={`${title} — Kerem Teknik Servis İstanbul`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 bg-surface/95 backdrop-blur-sm rounded-2xl p-4 shadow-premium-md flex-1">
                  <span className="material-symbols-outlined text-gold text-3xl shrink-0">
                    {icon}
                  </span>
                  <div>
                    <p className="text-headline-sm font-headline-sm text-primary leading-tight">
                      Uzman Servis Ekibi
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      Yerinde teşhis · Garantili onarım
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-primary/90 backdrop-blur-sm rounded-2xl px-4 py-3 text-on-primary shrink-0">
                  <span className="material-symbols-outlined text-gold">
                    star
                  </span>
                  <span className="text-body-md font-semibold whitespace-nowrap">
                    %98 Memnuniyet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
