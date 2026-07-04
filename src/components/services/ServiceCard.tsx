import Link from "next/link";
import type { ServiceItem } from "@/lib/services/site";
import { SITE, getServiceHref } from "@/lib/services/site";

type ServiceCardProps = {
  service: ServiceItem;
  showActions?: boolean;
};

export function ServiceCard({ service, showActions = true }: ServiceCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-[16px] p-6 shadow-level-1 elevation-2 transition-all duration-300 flex flex-col h-full">
      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container mb-4">
        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
      </div>
      <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
        {service.title}
      </h3>
      <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
        {service.shortDescription}
      </p>
      {showActions && (
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {service.hasDetailPage ? (
            <Link
              href={getServiceHref(service.slug)}
              className="flex-1 py-2 px-4 rounded-[12px] border-2 border-primary text-primary font-button text-button hover:bg-surface-container-high transition-colors text-center"
            >
              Detaylı İncele
            </Link>
          ) : (
            <Link
              href="/iletisim"
              className="flex-1 py-2 px-4 rounded-[12px] border-2 border-primary text-primary font-button text-button hover:bg-surface-container-high transition-colors text-center"
            >
              Detaylı İncele
            </Link>
          )}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex-1 py-2 px-4 rounded-[12px] bg-cta text-white font-button text-button hover:bg-secondary-container transition-colors text-center shadow-sm"
          >
            Hemen Ara
          </a>
        </div>
      )}
    </div>
  );
}
