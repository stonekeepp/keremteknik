import Link from "next/link";
import type { InternalLinksBlock } from "@/lib/seo/internal-links";

type InternalLinksSectionProps = InternalLinksBlock;

export function InternalLinksSection({
  heading,
  links,
}: InternalLinksSectionProps) {
  if (links.length === 0) return null;

  return (
    <section
      aria-label={heading}
      className="border-t border-outline-variant/40 bg-surface-container-low/60"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-12">
        <h2 className="text-headline-sm font-headline-sm text-primary mb-2">
          {heading}
        </h2>
        <p className="text-body-md text-on-surface-variant mb-6 max-w-2xl">
          İhtiyacınıza uygun sayfaya doğrudan geçebilirsiniz.
        </p>
        <nav aria-label={`${heading} bağlantıları`}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex flex-col h-full rounded-2xl border border-outline-variant/50 bg-surface p-4 shadow-premium-sm hover:border-primary/20 hover:shadow-premium-md transition-all"
                >
                  <span className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="text-body-md text-on-surface-variant mt-1.5 line-clamp-2">
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
