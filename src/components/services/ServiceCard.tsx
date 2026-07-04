import Image from "next/image";
import Link from "next/link";
import {
  getServiceHref,
  getServiceImage,
  SITE,
  type ServiceItem,
} from "@/lib/services/site";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const href = getServiceHref(service.slug);
  const image = getServiceImage(service.slug);

  return (
    <article className="group bg-surface rounded-2xl card-elevation overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={`${service.title} - Kerem Teknik Servis`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-4 left-4 w-11 h-11 bg-surface/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-premium-sm">
          <span className="material-symbols-outlined text-primary text-2xl">
            {service.icon}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-body-md text-on-surface-variant mb-5 flex-grow line-clamp-3">
          {service.shortDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          {service.hasDetailPage && (
            <Link
              href={href}
              className="flex-1 text-center px-4 py-2.5 rounded-xl border-2 border-primary text-primary font-button text-button hover:bg-primary/5 transition-colors"
            >
              Detaylı Bilgi
            </Link>
          )}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-cta text-on-primary font-button text-button hover:brightness-105 transition-all"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </article>
  );
}
