import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SERVICES, WHY_US } from "@/lib/services/site";
import { ServiceProcessBlock } from "@/components/services/ServiceProcessBlock";

type ServiceWhySectionProps = {
  serviceTitle: string;
};

export function ServiceWhySection({ serviceTitle }: ServiceWhySectionProps) {
  return (
    <Section
      title="Neden Kerem Teknik Servis?"
      subtitle={`${serviceTitle} hizmetinde kalite, hız ve şeffaflığı bir arada sunuyoruz`}
      centered
      className="!pb-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {WHY_US.map((item) => (
          <article
            key={item.title}
            className="relative bg-surface rounded-2xl p-6 shadow-premium-sm border border-outline-variant/30 text-center card-elevation group overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-cta/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden
            />
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
          </article>
        ))}
      </div>
    </Section>
  );
}

type ServiceScopeSectionProps = {
  title: string;
  subtitle: string;
  items: string[];
  heroImage: string;
  serviceTitle: string;
  icon: string;
};

export function ServiceScopeSection({
  title,
  subtitle,
  items,
  heroImage,
  serviceTitle,
  icon,
}: ServiceScopeSectionProps) {
  return (
    <Section variant="muted" title={title} subtitle={subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-outline-variant/30 aspect-[4/5] max-h-[480px]">
            <Image
              src={heroImage}
              alt={`${serviceTitle} — Kerem Teknik Servis`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <Icon
                name={icon as IconName}
                className="w-8 h-8 text-gold mb-2 block"
              />
              <p className="text-headline-sm font-headline-sm text-on-primary">
                Profesyonel {serviceTitle}
              </p>
              <p className="text-body-md text-primary-fixed-dim mt-1">
                İstanbul geneli yerinde servis
              </p>
            </div>
          </div>
        </div>

        <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-surface rounded-2xl p-5 shadow-premium-sm border border-outline-variant/30 hover:border-cta/25 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cta/10 text-cta text-label-md font-label-md shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-body-md text-on-surface-variant text-left pt-0.5">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

type ServiceProcessSectionProps = {
  serviceTitle: string;
};

export function ServiceProcessSection({
  serviceTitle,
}: ServiceProcessSectionProps) {
  return (
    <ServiceProcessBlock
      subtitle={`${serviceTitle} için randevudan teslimata şeffaf ve profesyonel akış`}
    />
  );
}

const RELATED_SLUGS: Record<string, string[]> = {
  "klima-servisi": ["kombi-servisi", "periyodik-bakim", "beyaz-esya-servisi"],
  "kombi-servisi": ["klima-servisi", "periyodik-bakim", "yedek-parca-iscilik"],
  "beyaz-esya-servisi": [
    "camasir-makinesi-servisi",
    "buzdolabi-servisi",
    "periyodik-bakim",
  ],
  "camasir-makinesi-servisi": [
    "buzdolabi-servisi",
    "beyaz-esya-servisi",
    "yedek-parca-iscilik",
  ],
  "buzdolabi-servisi": [
    "camasir-makinesi-servisi",
    "bulasik-makinesi-servisi",
    "beyaz-esya-servisi",
  ],
  "bulasik-makinesi-servisi": [
    "camasir-makinesi-servisi",
    "firin-ocak-servisi",
    "beyaz-esya-servisi",
  ],
  "firin-ocak-servisi": [
    "bulasik-makinesi-servisi",
    "beyaz-esya-servisi",
    "yedek-parca-iscilik",
  ],
  "periyodik-bakim": ["klima-servisi", "kombi-servisi", "yedek-parca-iscilik"],
  "yedek-parca-iscilik": [
    "periyodik-bakim",
    "beyaz-esya-servisi",
    "klima-servisi",
  ],
};

type ServiceRelatedSectionProps = {
  currentSlug: string;
};

export function ServiceRelatedSection({
  currentSlug,
}: ServiceRelatedSectionProps) {
  const slugs = RELATED_SLUGS[currentSlug] ?? [
    "klima-servisi",
    "kombi-servisi",
    "beyaz-esya-servisi",
  ];
  const related = slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <Section
      variant="muted"
      title="İlgili Hizmetler"
      subtitle="Diğer teknik servis alanlarımıza da göz atın"
      centered
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter max-w-4xl mx-auto">
        {related.map((service) => {
          if (!service) return null;
          return (
            <Link
              key={service.slug}
              href={`/hizmetlerimiz/${service.slug}`}
              className="group flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-outline-variant/30 shadow-premium-sm hover:border-primary/20 hover:shadow-premium-md transition-all"
            >
              <span className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
                <Icon
                  name={service.icon as IconName}
                  className="w-8 h-8 text-primary"
                />
              </span>
              <span className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">
                {service.title}
              </span>
              <Icon
                name="arrow_forward"
                className="w-5 h-5 text-cta mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
