"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/services/site";
import { cn } from "@/lib/utils/cn";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasyon menüsü"
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 z-50 flex flex-col w-[min(100%,320px)] bg-surface shadow-premium-lg transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-outline-variant/50">
          <img
            src={SITE.logo}
            alt={SITE.logoAlt}
            width={715}
            height={240}
            className="h-9 w-auto max-w-[200px] object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-primary hover:bg-surface-container-high"
            aria-label="Menüyü kapat"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-label-md font-label-md transition-colors",
                    isActive(link.href)
                      ? "bg-primary-container text-on-primary-container font-bold"
                      : "text-on-surface-variant hover:bg-surface-container-high",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-outline-variant/50">
            <p className="text-label-md font-label-md text-on-surface-variant px-4 mb-2">
              Hizmetler
            </p>
            <ul className="flex flex-col gap-1">
              {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-2 px-4 py-2 text-body-md text-on-surface-variant hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {service.icon}
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-outline-variant/50 flex flex-col gap-2 safe-bottom">
          <Button href={`tel:${SITE.phoneTel}`} className="w-full">
            <span className="material-symbols-outlined">call</span>
            {SITE.phone}
          </Button>
          <Button
            href={`https://wa.me/${SITE.whatsapp}`}
            variant="whatsapp"
            external
            className="w-full"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}