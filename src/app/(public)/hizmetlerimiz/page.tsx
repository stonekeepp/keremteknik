import { ServiceCard } from "@/components/services/ServiceCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SERVICES } from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Hizmetlerimiz",
  description:
    "Kerem Teknik Servis olarak klima, kombi ve beyaz eşya cihazlarınız için hızlı, güvenilir ve profesyonel servis çözümleri sunuyoruz.",
  path: "/hizmetlerimiz",
});

export default function HizmetlerimizPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Kerem Teknik Servis olarak klima, kombi ve beyaz eşya cihazlarınız için hızlı, güvenilir ve profesyonel servis çözümleri sunuyoruz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz" },
        ]}
      />
      <Section className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
}
