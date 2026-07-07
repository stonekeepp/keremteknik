import { cn } from "@/lib/utils/cn";
import { ICON_PATHS, type IconName } from "./icon-paths";

export type { IconName };

type IconProps = {
  name: IconName | string;
  className?: string;
  filled?: boolean;
  "aria-hidden"?: boolean;
};

export function Icon({
  name,
  className,
  filled = false,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  const resolvedName =
    name === "star" && !filled ? "star_outline" : (name as IconName);
  const path = ICON_PATHS[resolvedName as IconName];

  if (!path) {
    return (
      <span
        className={cn("inline-block w-6 h-6", className)}
        aria-hidden={ariaHidden}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={ariaHidden}
      className={cn("inline-block shrink-0 w-6 h-6", className)}
    >
      <path d={path} />
    </svg>
  );
}
