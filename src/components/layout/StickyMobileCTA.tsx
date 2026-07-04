import { SITE } from "@/lib/services/site";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-3 z-50 elevation-3">
      <div className="flex gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex-1 bg-cta text-on-primary py-3 rounded-[12px] font-button text-button shadow-sm flex justify-center items-center gap-2"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          Hemen Ara
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-primary text-primary py-3 rounded-[12px] font-button text-button flex justify-center items-center gap-2"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
