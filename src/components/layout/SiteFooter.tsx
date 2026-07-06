import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FooterAccordion,
  FooterLinkList,
} from "@/components/layout/FooterAccordion";
import {
  FOOTER_CORPORATE,
  SERVICES,
  SITE,
  TRUST_BADGES,
} from "@/lib/services/site";
import { SERVICE_NAV_GROUPS } from "@/lib/services/nav-groups";

/** Footer metin renkleri — bg-primary üzerinde tutarlı kontrast */
const footer = {
  body: "text-on-primary/80",
  muted: "text-on-primary/65",
  label: "text-gold",
  link: "text-on-primary/85 hover:text-gold transition-colors",
  heading: "text-gold",
  copyright: "text-on-primary/55",
} as const;

const detailServices = SERVICES.filter((s) => s.hasDetailPage);

export function SiteFooter() {
  const serviceLinks = detailServices.map((s) => ({
    href: `/hizmetlerimiz/${s.slug}`,
    label: s.title,
  }));

  return (
    <footer className="bg-primary text-on-primary w-full mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-16">
        {/* Brand */}
        <div className="mb-8 md:mb-10 pb-8 border-b border-on-primary/10">
          <img
            src={SITE.logoFooter}
            alt={SITE.logoAlt}
            width={715}
            height={240}
            className="h-10 w-auto mb-4"
          />
          <p className={`text-body-md ${footer.body} mb-4 max-w-md leading-relaxed`}>
            {SITE.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {TRUST_BADGES.map((badge) => (
              <Badge
                key={badge.label}
                icon={badge.icon}
                className="bg-on-primary/8 text-on-primary/90 border-on-primary/15 [&_.material-symbols-outlined]:text-gold"
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <FooterAccordion
          items={[
            {
              id: "kurumsal",
              title: "Kurumsal",
              children: <FooterLinkList links={[...FOOTER_CORPORATE]} />,
            },
            {
              id: "hizmetler",
              title: "Hizmetler",
              children: (
                <div className="flex flex-col gap-4">
                  {SERVICE_NAV_GROUPS.map((group) => (
                    <div key={group.label}>
                      <p className={`text-label-md font-label-md ${footer.label} mb-2 flex items-center gap-1.5`}>
                        <span className="material-symbols-outlined text-gold/90 text-base">
                          {group.icon}
                        </span>
                        {group.label}
                      </p>
                      <ul className="flex flex-col gap-2 pl-1">
                        {group.slugs.map((slug) => {
                          const service = SERVICES.find((s) => s.slug === slug);
                          if (!service) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/hizmetlerimiz/${slug}`}
                                className={`${footer.link} text-body-md`}
                              >
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              id: "iletisim",
              title: "İletişim",
              children: <FooterContactBlock />,
            },
          ]}
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              Kurumsal
            </h3>
            <FooterLinkList links={[...FOOTER_CORPORATE]} />
          </div>

          <div>
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              Hizmetler
            </h3>
            <FooterLinkList links={serviceLinks} />
          </div>

          <div>
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              İletişim
            </h3>
            <FooterContactBlock />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-on-primary/15 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-end">
            <Button
              href={`tel:${SITE.phoneTel}`}
              variant="primary"
              className="!py-2.5 !px-5 text-sm w-full sm:w-auto"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Hemen Ara
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="whatsapp"
              external
              className="!py-2.5 !px-5 text-sm w-full sm:w-auto"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              WhatsApp
            </Button>
            <Button
              href="/iletisim"
              variant="outline"
              className="!py-2.5 !px-5 text-sm w-full sm:w-auto !border-on-primary/25 !text-on-primary/90 hover:!text-on-primary hover:!bg-on-primary/10 hover:!border-gold/40"
            >
              <span className="material-symbols-outlined text-lg">
                edit_calendar
              </span>
              Randevu Al
            </Button>
          </div>
          <p className={`${footer.copyright} text-body-md text-center md:text-left`}>
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterContactBlock() {
  return (
    <ul className="flex flex-col gap-3">
      <li className="flex gap-3 p-3 rounded-xl bg-on-primary/5 border border-on-primary/10">
        <span className="material-symbols-outlined text-gold shrink-0 mt-0.5">
          call
        </span>
        <div>
          <span className={`block text-label-md font-label-md ${footer.label} mb-0.5`}>
            Telefon
          </span>
          <a
            href={`tel:${SITE.phoneTel}`}
            className={`${footer.link} text-body-md font-medium`}
          >
            {SITE.phone}
          </a>
        </div>
      </li>
      <li className="flex gap-3 p-3 rounded-xl bg-on-primary/5 border border-on-primary/10">
        <span className="material-symbols-outlined text-gold shrink-0 mt-0.5">
          location_on
        </span>
        <div>
          <span className={`block text-label-md font-label-md ${footer.label} mb-0.5`}>
            Adres
          </span>
          <span className={`${footer.body} text-body-md`}>
            {SITE.fullAddress}
          </span>
        </div>
      </li>
      <li className="flex gap-3 p-3 rounded-xl bg-on-primary/5 border border-on-primary/10">
        <span className="material-symbols-outlined text-gold shrink-0 mt-0.5">
          schedule
        </span>
        <div>
          <span className={`block text-label-md font-label-md ${footer.label} mb-0.5`}>
            Çalışma Saatleri
          </span>
          <span className={`${footer.body} text-body-md block`}>
            {SITE.workingHours.weekday}
          </span>
          <span className={`${footer.body} text-body-md block`}>
            {SITE.workingHours.saturday}
          </span>
        </div>
      </li>
    </ul>
  );
}
