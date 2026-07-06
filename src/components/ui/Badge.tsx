import { cn } from "@/lib/utils/cn";

const badgeVariants = {
  default:
    "bg-primary/5 text-primary border-primary/10 [&_.material-symbols-outlined]:text-primary",
  "on-dark":
    "bg-white/[0.07] text-primary-fixed-dim border-gold/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] [&_.material-symbols-outlined]:text-gold",
} as const;

type BadgeProps = {
  icon?: string;
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof badgeVariants;
};

export function Badge({
  icon,
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-label-md font-label-md border",
        badgeVariants[variant],
        className,
      )}
    >
      {icon && (
        <span className="material-symbols-outlined text-base">{icon}</span>
      )}
      {children}
    </span>
  );
}
