import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/services/site";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 safe-bottom">
      <div className="mx-3 mb-3 flex gap-2 p-1.5 rounded-2xl glass shadow-premium-lg">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex-1 bg-gradient-cta text-on-primary py-3.5 rounded-xl font-button text-button shadow-premium-sm flex justify-center items-center gap-2"
        >
          <Icon name="call" className="w-5 h-5" />
          Ara
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-whatsapp text-white py-3.5 rounded-xl font-button text-button flex justify-center items-center gap-2"
        >
          <Icon name="chat" className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
