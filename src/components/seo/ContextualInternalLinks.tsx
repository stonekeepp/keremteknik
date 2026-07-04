"use client";

import { usePathname } from "next/navigation";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { getInternalLinksForPath } from "@/lib/seo/internal-links";

export function ContextualInternalLinks() {
  const pathname = usePathname() ?? "/";
  const block = getInternalLinksForPath(pathname);

  if (!block) return null;

  return (
    <InternalLinksSection heading={block.heading} links={block.links} />
  );
}
