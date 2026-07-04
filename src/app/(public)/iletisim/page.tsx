import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/services/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Servis talebi oluşturmak, arıza hakkında bilgi almak veya randevu planlamak için bizimle iletişime geçebilirsiniz.",
};

export default function IletisimPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4">
          İletişim
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Servis talebi oluşturmak, arıza hakkında bilgi almak veya randevu
          planlamak için bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="flex flex-col gap-6">
          <div className="bg-surface rounded-xl p-6 shadow-level-1">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-6">
              İletişim Bilgileri
            </h2>
            <ul className="flex flex-col gap-5">
              <li>
                <p className="text-label-md font-label-md text-on-surface-variant mb-1">
                  Telefon
                </p>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-body-lg font-semibold text-primary hover:text-secondary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-label-md font-label-md text-on-surface-variant mb-1">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-lg font-semibold text-primary hover:text-secondary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-label-md font-label-md text-on-surface-variant mb-1">
                  Adres
                </p>
                <p className="text-body-md text-on-surface">
                  {SITE.address}
                  <br />
                  {SITE.city}
                </p>
              </li>
              <li>
                <p className="text-label-md font-label-md text-on-surface-variant mb-1">
                  Çalışma Saatleri
                </p>
                <p className="text-body-md text-on-surface">
                  {SITE.workingHours.weekday}
                  <br />
                  {SITE.workingHours.saturday}
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cta text-white rounded-[12px] font-button text-button hover:bg-secondary-container transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-[12px] font-button text-button hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          <div className="bg-surface-container rounded-xl overflow-hidden shadow-level-1 h-64 flex items-center justify-center">
            <div className="text-center p-6">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">
                map
              </span>
              <p className="text-body-md text-on-surface-variant mb-3">
                {SITE.fullAddress}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-button text-button hover:underline"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6 md:p-8 shadow-level-1">
          <h2 className="text-headline-sm font-headline-sm text-primary mb-6">
            İletişim Formu
          </h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
