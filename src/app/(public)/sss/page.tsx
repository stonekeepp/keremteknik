import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS, SITE } from "@/lib/services/site";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Kerem Teknik Servis hizmetleri, süreçleri ve politikaları hakkında sık sorulan sorular.",
};

export default function SssPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">
          Sık Sorulan Sorular
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Hizmetlerimiz, süreçlerimiz ve politikalarımız hakkında en çok merak
          edilen soruların cevaplarını burada bulabilirsiniz.
        </p>
      </section>

      <Accordion items={[...FAQ_ITEMS]} />

      <section className="mt-16 bg-surface-container-low rounded-2xl p-8 text-center">
        <h2 className="text-headline-sm font-headline-sm text-primary mb-4">
          Sorunuz mu var?
        </h2>
        <p className="text-body-md text-on-surface-variant mb-6">
          Aradığınız cevabı bulamadıysanız bize ulaşın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="bg-cta text-white px-6 py-3 rounded-[12px] font-button text-button"
          >
            İletişime Geç
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="border-2 border-primary text-primary px-6 py-3 rounded-[12px] font-button text-button"
          >
            Hemen Ara
          </a>
        </div>
      </section>
    </main>
  );
}
