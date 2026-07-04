import { cn } from "@/lib/utils/cn";

type SectionVariant = "default" | "muted" | "primary";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  variant?: SectionVariant;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-surface-container-low",
  primary: "bg-gradient-primary text-on-primary",
};

export function Section({
  id,
  title,
  subtitle,
  variant = "default",
  centered = true,
  className,
  children,
}: SectionProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={cn("py-16 md:py-20", variantClasses[variant], className)}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {(title || subtitle) && (
          <div
            className={cn(
              "mb-10 md:mb-12",
              centered && "text-center max-w-3xl mx-auto",
            )}
          >
            {title && (
              <h2
                id={titleId}
                className={cn(
                  "text-headline-md font-headline-md mb-3",
                  variant === "primary" ? "text-on-primary" : "text-primary",
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-body-lg",
                  variant === "primary"
                    ? "text-primary-fixed-dim"
                    : "text-on-surface-variant",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
