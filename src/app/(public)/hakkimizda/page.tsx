import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/services/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kerem Teknik Servis, İstanbul'da klima, kombi ve beyaz eşya teknik servis hizmetleri sunan güvenilir bir teknik servis firmasıdır.",
};

export default function HakkimizdaPage() {
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

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">
          Kerem Teknik Servis Hakkında
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Kerem Teknik Servis, İstanbul&apos;da klima, kombi ve beyaz eşya
          teknik servis hizmetleri sunan, müşteri memnuniyetini ve güvenilir
          hizmet anlayışını ön planda tutan bir teknik servis firmasıdır.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-16">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-surface rounded-xl p-6 shadow-level-1 elevation-2"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              {section.icon}
            </span>
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">
              {section.title}
            </h2>
            <p className="text-body-md text-on-surface-variant">{section.text}</p>
          </div>
        ))}
      </div>

      <section className="bg-primary rounded-2xl p-8 md:p-12 text-center text-on-primary">
        <h2 className="text-headline-md font-headline-md mb-4">
          Bizimle İletişime Geçin
        </h2>
        <p className="text-body-lg text-primary-fixed-dim mb-8 max-w-2xl mx-auto">
          Servis talebi, randevu veya bilgi almak için bize ulaşın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="bg-cta text-white px-8 py-4 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors"
          >
            İletişim Formu
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="border-2 border-white text-white px-8 py-4 rounded-[12px] font-button text-button hover:bg-white/10 transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
