import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/services/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kerem Teknik Servis olarak klima, kombi ve beyaz eşya cihazlarınız için hızlı, güvenilir ve profesyonel servis çözümleri sunuyoruz.",
};

export default function HizmetlerimizPage() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-stack-md">
          Hizmetlerimiz
        </h1>
        <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-on-surface-variant">
          Kerem Teknik Servis olarak klima, kombi ve beyaz eşya cihazlarınız
          için hızlı, güvenilir ve profesyonel servis çözümleri sunuyoruz.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </main>
  );
}
