"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/services/site";
import { MobileNav } from "./MobileNav";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  if (active) {
    return (
      <Link
        href={href}
        className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="text-on-surface-variant hover:text-secondary transition-colors text-label-md font-label-md"
    >
      {label}
    </Link>
  );
}

function ServicesDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/hizmetlerimiz"
        className={
          active
            ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md"
            : "text-on-surface-variant hover:text-secondary transition-colors text-label-md font-label-md"
        }
      >
        Hizmetlerimiz
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-surface rounded-xl elevation-3 border border-outline-variant py-2 min-w-[260px]">
            {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                className="block px-4 py-2 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors"
              >
                {service.title}
              </Link>
            ))}
            <Link
              href="/hizmetlerimiz"
              className="block px-4 py-2 text-label-md font-label-md text-secondary border-t border-outline-variant mt-1"
            >
              Tüm Hizmetler
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="hidden md:flex bg-surface shadow-sm w-full sticky top-0 z-50">
        <div className="flex justify-between items-center px-margin-desktop py-stack-md w-full max-w-container-max mx-auto">
          <Link
            href="/"
            className="text-headline-sm font-headline-sm font-bold text-primary"
          >
            {SITE.name}
          </Link>
          <nav className="flex gap-gutter items-center">
            {NAV_LINKS.map((link) =>
              "hasDropdown" in link && link.hasDropdown ? (
                <ServicesDropdown
                  key={link.href}
                  active={isActive("/hizmetlerimiz")}
                />
              ) : (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={isActive(link.href)}
                />
              ),
            )}
          </nav>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="bg-cta text-on-primary px-6 py-3 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors shadow-sm"
          >
            Hemen Ara
          </a>
        </div>
      </header>

      <header className="md:hidden flex justify-between items-center px-margin-mobile py-stack-md bg-surface shadow-sm sticky top-0 z-40">
        <Link
          href="/"
          className="text-headline-sm font-headline-sm font-bold text-primary"
        >
          {SITE.name}
        </Link>
        <button
          type="button"
          className="text-primary"
          onClick={() => setMobileOpen(true)}
          aria-label="Menüyü aç"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
