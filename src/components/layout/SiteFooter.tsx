import Link from "next/link";
import {
  FOOTER_CORPORATE,
  SERVICES,
  SITE,
} from "@/lib/services/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-stack-lg mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
          <div>
            <div className="text-headline-sm font-headline-sm font-bold text-primary mb-3">
              {SITE.name}
            </div>
            <p className="text-body-md text-on-surface-variant">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="text-label-md font-label-md text-primary mb-3 uppercase tracking-wide">
              Kurumsal
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_CORPORATE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary hover:underline transition-colors text-body-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md text-primary mb-3 uppercase tracking-wide">
              Hizmetler
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    className="text-on-surface-variant hover:text-primary hover:underline transition-colors text-body-md"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label-md font-label-md text-primary mb-3 uppercase tracking-wide">
              İletişim
            </h3>
            <ul className="flex flex-col gap-3 text-body-md text-on-surface-variant">
              <li>
                <span className="block text-label-md font-label-md text-on-surface mb-1">
                  Telefon
                </span>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-label-md font-label-md text-on-surface mb-1">
                  Adres
                </span>
                {SITE.address}
                <br />
                {SITE.city}
              </li>
              <li>
                <span className="block text-label-md font-label-md text-on-surface mb-1">
                  Çalışma Saatleri
                </span>
                {SITE.workingHours.weekday}
                <br />
                {SITE.workingHours.saturday}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant pt-stack-md text-center text-on-surface-variant text-body-md">
          © 2026 {SITE.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
