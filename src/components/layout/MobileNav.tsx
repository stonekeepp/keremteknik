"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/services/site";
import { SERVICE_NAV_GROUPS } from "@/lib/services/nav-groups";
import { cn } from "@/lib/utils/cn";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
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

  useEffect(() => {
    if (!open) setOpenGroups({});
  }, [open]);

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
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.filter((link) => link.href !== "/hizmetlerimiz").map((link) => (
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
            <Link
              href="/hizmetlerimiz"
              onClick={onClose}
              className={cn(
                "block px-4 py-3 rounded-xl text-label-md font-label-md transition-colors mb-2",
                isActive("/hizmetlerimiz")
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high",
              )}
            >
              Hizmetlerimiz
            </Link>

            <div className="flex flex-col gap-2">
              {SERVICE_NAV_GROUPS.map((group) => {
                const isGroupOpen = openGroups[group.label] ?? false;
                return (
                  <div
                    key={group.label}
                    className="rounded-xl border border-outline-variant/40 overflow-hidden bg-surface-container-low/50"
                  >
                    <button
                      type="button"
                      aria-expanded={isGroupOpen}
                      onClick={() => toggleGroup(group.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                    >
                      <span className="flex items-center gap-2 text-label-md font-label-md text-primary">
                        <Icon
                          name={group.icon as IconName}
                          className="w-5 h-5 text-secondary"
                        />
                        {group.label}
                      </span>
                      <Icon
                        name="expand_more"
                        className={cn(
                          "w-5 h-5 text-on-surface-variant transition-transform duration-200",
                          isGroupOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {isGroupOpen && (
                      <ul className="px-2 pb-2 flex flex-col gap-0.5 border-t border-outline-variant/30">
                        {group.slugs.map((slug) => {
                          const service = SERVICES.find((s) => s.slug === slug);
                          if (!service) return null;
                          const href = `/hizmetlerimiz/${slug}`;
                          return (
                            <li key={slug}>
                              <Link
                                href={href}
                                onClick={onClose}
                                className={cn(
                                  "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-body-md transition-colors",
                                  pathname === href
                                    ? "bg-primary/8 text-primary font-medium"
                                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary",
                                )}
                              >
                                <Icon
                                  name={service.icon as IconName}
                                  className="w-5 h-5 text-secondary"
                                />
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
