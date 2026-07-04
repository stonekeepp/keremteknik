import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StickyMobileCTA } from "./StickyMobileCTA";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pb-[72px] md:pb-0">{children}</main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
