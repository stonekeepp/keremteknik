"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/services/site";
import { cn } from "@/lib/utils/cn";
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
  return (
    <Link
      href={href}
      className={cn(
        "relative text-label-md font-label-md transition-colors py-1",
        active
          ? "text-secondary font-bold"
          : "text-on-surface-variant hover:text-primary",
      )}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full" />
      )}
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
        className={cn(
          "relative text-label-md font-label-md transition-colors py-1",
          active
            ? "text-secondary font-bold"
            : "text-on-surface-variant hover:text-primary",
        )}
      >
        Hizmetlerimiz
        {active && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full" />
        )}
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-surface rounded-2xl shadow-premium-lg border border-outline-variant/50 py-2 min-w-[280px]">
            {SERVICES.filter((s) => s.hasDetailPage).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                className="flex items-center gap-3 px-4 py-2.5 text-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors"
              >
                <Icon
                  name={service.icon as IconName}
                  className="w-5 h-5 text-primary"
                />
                {service.title}
              </Link>
            ))}
            <Link
              href="/hizmetlerimiz"
              className="block px-4 py-2.5 text-label-md font-label-md text-secondary border-t border-outline-variant/50 mt-1"
            >
              Tüm Hizmetler →
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const headerClass = cn(
    "w-full sticky top-0 z-50 transition-all duration-300",
    scrolled
      ? "glass shadow-premium-sm"
      : "bg-surface/95 backdrop-blur-sm",
  );

  return (
    <>
      <header className={cn("hidden lg:flex", headerClass)}>
        <div className="flex justify-between items-center px-margin-desktop py-4 w-full max-w-container-max mx-auto gap-6">
          <Link
            href="/"
            className="flex items-center shrink-0 h-14 lg:h-16"
          >
            <img
              src={SITE.logo}
              alt={SITE.logoAlt}
              width={715}
              height={240}
              className="h-full w-auto object-contain object-left"
            />
          </Link>
          <nav className="flex gap-6 xl:gap-8 items-center flex-wrap justify-center">
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
          <div className="flex items-center gap-3 shrink-0">
            <Button
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="whatsapp"
              external
              className="!px-4 !py-2.5 text-sm"
            >
              <Icon name="chat" className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button href={`tel:${SITE.phoneTel}`} className="!px-5 !py-2.5">
              <Icon name="call" className="w-5 h-5" />
              Hemen Ara
            </Button>
          </div>
        </div>
      </header>

      <header className={cn("lg:hidden flex justify-between items-center px-margin-mobile py-3", headerClass)}>
        <Link
          href="/"
          className="flex items-center shrink-0 min-w-0 h-11 flex-1 max-w-[75%]"
        >
          <img
            src={SITE.logo}
            alt={SITE.logoAlt}
            width={715}
            height={240}
            className="h-full w-auto max-w-full object-contain object-left"
          />
        </Link>
        <button
          type="button"
          className="text-primary p-2 rounded-xl hover:bg-surface-container-high transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Menüyü aç"
          aria-expanded={mobileOpen}
        >
          <Icon name="menu" className="w-8 h-8" />
        </button>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
