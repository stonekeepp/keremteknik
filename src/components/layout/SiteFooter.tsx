import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
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
const footerRegionLinks = [
  { href: "/servis-bolgeleri/alibeykoy", label: "Alibeyköy" },
  { href: "/servis-bolgeleri/eyupsultan", label: "Eyüpsultan" },
  { href: "/servis-bolgeleri/gaziosmanpasa", label: "Gaziosmanpaşa" },
  { href: "/servis-bolgeleri/kagithane", label: "Kağıthane" },
  { href: "/servis-bolgeleri", label: "Tüm servis bölgeleri" },
];

export function SiteFooter() {
  const serviceLinks = detailServices.map((s) => ({
    href: `/hizmetlerimiz/${s.slug}`,
    label: s.title,
  }));

  return (
    <footer className="bg-primary text-on-primary w-full mt-auto mobile-cta-clearance lg:pb-0">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12 lg:py-10">
        {/* Brand — mobile */}
        <div className="mb-8 pb-8 border-b border-on-primary/10 md:hidden">
          <FooterBrandBlock />
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
                        <Icon
                          name={group.icon as IconName}
                          className="w-4 h-4 text-gold/90"
                        />
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
            {
              id: "bolgeler",
              title: "Servis Bölgeleri",
              children: <FooterLinkList links={footerRegionLinks} />,
            },
          ]}
        />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr_1fr] gap-8 lg:gap-10 items-start">
          <FooterBrandBlock compact />

          <div className="pt-1">
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              Kurumsal
            </h3>
            <FooterLinkList links={[...FOOTER_CORPORATE]} />
          </div>

          <div className="pt-1">
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              Hizmetler
            </h3>
            <FooterLinkList links={serviceLinks} />
          </div>

          <div className="pt-1">
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              Bölgeler
            </h3>
            <FooterLinkList links={footerRegionLinks} />
          </div>

          <div className="pt-1">
            <h3 className={`text-label-md font-label-md mb-4 uppercase tracking-wide ${footer.heading} flex items-center gap-2`}>
              <span className="w-6 h-px bg-gold/50" aria-hidden />
              İletişim
            </h3>
            <FooterContactBlock compact />
          </div>
        </div>

        {/* Bottom bar — desktop */}
        <div className="hidden md:flex mt-8 pt-6 border-t border-on-primary/12 items-center justify-between gap-5">
          <p className={`${footer.copyright} text-body-md`}>
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-row flex-wrap gap-2.5 justify-end">
            <Button
              href={`tel:${SITE.phoneTel}`}
              variant="primary"
              className="!py-2 !px-4 text-sm"
            >
              <Icon name="call" className="w-5 h-5" />
              Hemen Ara
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="whatsapp"
              external
              className="!py-2 !px-4 text-sm"
            >
              <Icon name="chat" className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button
              href="/iletisim"
              variant="outline"
              className="!py-2 !px-4 text-sm !border-on-primary/25 !text-on-primary/90 hover:!text-on-primary hover:!bg-on-primary/10 hover:!border-gold/40"
            >
              <Icon name="edit_calendar" className="w-5 h-5" />
              Randevu Al
            </Button>
          </div>
        </div>

        {/* Copyright — mobile */}
        <div className="mt-8 pt-6 border-t border-gold/20 md:hidden">
          <div className="rounded-2xl bg-on-primary/[0.05] border border-on-primary/10 px-5 py-4 text-center">
            <div
              className="w-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-3"
              aria-hidden
            />
            <p className="text-sm text-on-primary/70 font-medium tracking-wide">
              © {new Date().getFullYear()} {SITE.name}
            </p>
            <p className="text-xs text-on-primary/45 mt-1">
              Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterBrandBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <img
        src={SITE.logoFooter}
        alt={SITE.logoAlt}
        width={715}
        height={240}
        className={compact ? "h-9 w-auto mb-3" : "h-10 w-auto mb-4"}
      />
      <p
        className={`text-body-md ${footer.body} ${
          compact ? "mb-3 max-w-sm leading-6" : "mb-4 max-w-md leading-relaxed"
        }`}
      >
        {SITE.description}
      </p>
      <div
        className={
          compact
            ? "flex flex-wrap gap-1.5 max-w-sm"
            : "grid grid-cols-2 gap-2 sm:gap-2.5 max-w-md"
        }
      >
        {TRUST_BADGES.map((badge) => (
          <Badge
            key={badge.label}
            icon={badge.icon}
            variant="on-dark"
            className={
              compact
                ? "!rounded-full px-2.5 py-1 text-[11px] leading-none"
                : "w-full !rounded-xl justify-start px-3 py-2.5 text-[13px] leading-snug"
            }
          >
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function FooterContactBlock({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "flex flex-col gap-2" : "flex flex-col gap-3"}>
      <li className={`flex gap-3 rounded-xl bg-on-primary/5 border border-on-primary/10 ${compact ? "p-2.5" : "p-3"}`}>
        <Icon name="call" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
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
      <li className={`flex gap-3 rounded-xl bg-on-primary/5 border border-on-primary/10 ${compact ? "p-2.5" : "p-3"}`}>
        <Icon name="location_on" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <div>
          <span className={`block text-label-md font-label-md ${footer.label} mb-0.5`}>
            Adres
          </span>
          <span className={`${footer.body} text-body-md`}>
            {SITE.fullAddress}
          </span>
        </div>
      </li>
      <li className={`flex gap-3 rounded-xl bg-on-primary/5 border border-on-primary/10 ${compact ? "p-2.5" : "p-3"}`}>
        <Icon name="schedule" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
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
