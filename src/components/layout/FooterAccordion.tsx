"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils/cn";

type FooterAccordionItem = {
  id: string;
  title: string;
  children: React.ReactNode;
};

type FooterAccordionProps = {
  items: FooterAccordionItem[];
};

export function FooterAccordion({ items }: FooterAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-2 md:hidden">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-on-primary/10 bg-on-primary/5 overflow-hidden"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left"
            >
              <span className="text-label-md font-label-md uppercase tracking-wide text-gold">
                {item.title}
              </span>
              <Icon
                name="expand_more"
                className={cn(
                  "w-5 h-5 text-on-primary/60 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-on-primary/10">
                {item.children}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

type FooterLinkListProps = {
  links: { href: string; label: string }[];
};

export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-on-primary/85 hover:text-gold transition-colors text-body-md inline-flex items-center gap-2 group"
          >
            <span className="w-1 h-1 rounded-full bg-gold/80 group-hover:bg-gold transition-colors shrink-0" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
