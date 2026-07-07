import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("hidden md:block text-body-md", className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-on-surface-variant">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="material-symbols-outlined text-sm opacity-50">
                  chevron_right
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={isLast ? "text-primary font-medium" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
