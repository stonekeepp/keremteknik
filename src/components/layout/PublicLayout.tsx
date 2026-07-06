import { ContextualInternalLinks } from "@/components/seo/ContextualInternalLinks";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StickyMobileCTA } from "./StickyMobileCTA";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow mobile-cta-clearance lg:pb-0">
        {children}
        <ContextualInternalLinks />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
