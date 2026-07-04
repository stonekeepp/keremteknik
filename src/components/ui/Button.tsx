import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "outline" | "ghost" | "whatsapp";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-cta text-on-primary shadow-premium-sm hover:shadow-premium-glow hover:brightness-105",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
  ghost: "text-primary hover:bg-surface-container-high",
  whatsapp: "bg-whatsapp text-white hover:brightness-105 shadow-premium-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-button text-button transition-all duration-200";

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
