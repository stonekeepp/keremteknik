import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  icon?: string;
  children: React.ReactNode;
  className?: string;
};

export function Badge({ icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-label-md font-label-md border border-primary/10",
        className,
      )}
    >
      {icon && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
      {children}
    </span>
  );
}
