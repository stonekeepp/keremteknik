import { Breadcrumb } from "./Breadcrumb";
import { cn } from "@/lib/utils/cn";

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
  compact,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,30,64,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,85,0,0.06) 0%, transparent 40%)",
        }}
      />
      <div
        className={cn(
          "relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop",
          compact ? "py-12 md:py-16" : "py-16 md:py-24",
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="mb-6" />
        )}
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-2xl">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
