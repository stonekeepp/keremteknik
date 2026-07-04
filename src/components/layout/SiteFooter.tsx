import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FOOTER_CORPORATE,
  SERVICES,
  SITE,
  TRUST_BADGES,
} from "@/lib/services/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-on-primary w-full mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/brand/logo-yatay.svg"
              alt="Kerem Teknik Servis"
              width={200}
              height={60}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-body-md text-primary-fixed-dim mb-4">
              {SITE.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <Badge
                  key={badge.label}
                  icon={badge.icon}
                  className="bg-on-primary/10 text-on-primary border-on-primary/20"
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-label-md font-label-md mb-4 uppercase tracking-wide text-gold">
              Kurumsal
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_CORPORATE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-fixed-dim hover:text-on-primary transition-colors text-body-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md mb-4 uppercase tracking-wide text-gold">
              Hizmetler
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    className="text-primary-fixed-dim hover:text-on-primary transition-colors text-body-md"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md mb-4 uppercase tracking-wide text-gold">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4 text-body-md text-primary-fixed-dim">
              <li>
                <span className="block text-label-md font-label-md text-on-primary mb-1">
                  Telefon
                </span>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-label-md font-label-md text-on-primary mb-1">
                  Adres
                </span>
                {SITE.address}
                <br />
                {SITE.city}
              </li>
              <li>
                <span className="block text-label-md font-label-md text-on-primary mb-1">
                  Çalışma Saatleri
                </span>
                {SITE.workingHours.weekday}
                <br />
                {SITE.workingHours.saturday}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-on-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-fixed-dim text-body-md text-center md:text-left">
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-3">
            <Button
              href={`tel:${SITE.phoneTel}`}
              variant="primary"
              className="!py-2.5 !px-5 text-sm"
            >
              Hemen Ara
            </Button>
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="whatsapp"
              external
              className="!py-2.5 !px-5 text-sm"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
