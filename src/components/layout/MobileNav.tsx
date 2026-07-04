"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/services/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
          aria-hidden
        />
      )}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 flex flex-col p-stack-md h-full w-72 shadow-lg bg-surface transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-start mb-stack-lg">
          <div>
            <h2 className="text-headline-sm font-headline-sm font-bold text-primary">
              {SITE.name}
            </h2>
            <p className="text-on-surface-variant text-label-md font-label-md">
              Profesyonel teknik servis
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-primary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-grow overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all text-label-md font-label-md ${
                isActive(link.href)
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-outline-variant my-2 pt-2">
            <p className="text-label-md font-label-md text-on-surface-variant px-3 mb-2">
              Hizmetler
            </p>
            {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                onClick={onClose}
                className="block px-3 py-2 text-body-md text-on-surface-variant hover:text-primary"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <Link
            href="/sss"
            onClick={onClose}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all text-label-md font-label-md ${
              isActive("/sss")
                ? "bg-primary-container text-on-primary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            Sık Sorulan Sorular
          </Link>
        </nav>

        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="bg-cta text-white w-full py-3 rounded-[12px] font-button text-button text-center shadow-sm"
          >
            Hemen Ara
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary w-full py-3 rounded-[12px] font-button text-button text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
