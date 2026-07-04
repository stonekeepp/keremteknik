import { CTABand } from "@/components/ui/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SERVICE_AREAS, SITE, STATS } from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "Hakkımızda",
  description:
    "Kerem Teknik Servis, İstanbul'da klima, kombi ve beyaz eşya teknik servis hizmetleri sunan güvenilir bir teknik servis firmasıdır.",
  path: "/hakkimizda",
});

const sections = [
  {
    icon: "business",
    title: "Firma Tanıtımı",
    text: "Kerem Teknik Servis, İstanbul'da klima, kombi ve beyaz eşya teknik servis hizmetleri sunan, müşteri memnuniyetini ve güvenilir hizmet anlayışını ön planda tutan bir teknik servis firmasıdır.",
  },
  {
    icon: "groups",
    title: "Deneyimli Ekip",
    text: "Alanında uzman teknisyenlerimiz her arızaya profesyonel ve kalıcı çözümler üretir.",
  },
  {
    icon: "speed",
    title: "Hızlı Servis Anlayışı",
    text: "Aynı gün servis imkânı ile arızalarınıza en kısa sürede müdahale ediyoruz.",
  },
  {
    icon: "verified",
    title: "Garantili İşçilik",
    text: "Yapılan işçilik ve değiştirilen parçalar için garanti sunuyoruz.",
  },
  {
    icon: "payments",
    title: "Şeffaf Fiyatlandırma",
    text: "Onarım öncesi net bilgilendirme ile sürpriz maliyet oluşmasını önlüyoruz.",
  },
  {
    icon: "thumb_up",
    title: "Müşteri Memnuniyeti",
    text: "Her servis sonrası müşteri memnuniyetini ölçerek hizmet kalitemizi sürekli geliştiriyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        title="Kerem Teknik Servis Hakkında"
        description="İstanbul'da klima, kombi ve beyaz eşya teknik servis hizmetleri sunan, müşteri memnuniyetini ve güvenilir hizmet anlayışını ön planda tutan bir teknik servis firmasıyız."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
      />

      <Section className="!pt-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-surface rounded-2xl p-6 shadow-level-1 card-elevation"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {section.icon}
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
                {section.title}
              </h2>
              <p className="text-body-md text-on-surface-variant">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        variant="muted"
        title="Hizmet Bölgelerimiz"
        subtitle="İstanbul genelinde hızlı servis ağı"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {SERVICE_AREAS.map((area) => (
            <span
              key={area}
              className="px-4 py-2 rounded-full bg-surface shadow-level-1 text-body-md text-on-surface-variant"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="text-center text-body-md text-on-surface-variant mt-8">
          Merkez ofisimiz: {SITE.fullAddress}
        </p>
      </Section>

      <CTABand />
    </>
  );
}
