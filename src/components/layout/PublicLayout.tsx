import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StickyMobileCTA } from "./StickyMobileCTA";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pb-24 lg:pb-0">{children}</main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
