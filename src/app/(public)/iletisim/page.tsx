import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "İletişim",
  description:
    "Servis talebi oluşturmak, arıza hakkında bilgi almak veya randevu planlamak için bizimle iletişime geçebilirsiniz.",
  path: "/iletisim",
});

const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="İletişim"
        description="Servis talebi oluşturmak, arıza hakkında bilgi almak veya randevu planlamak için bizimle iletişime geçebilirsiniz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />

      <Section className="!pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "call",
                  label: "Telefon",
                  value: SITE.phone,
                  href: `tel:${SITE.phoneTel}`,
                },
                {
                  icon: "chat",
                  label: "WhatsApp",
                  value: SITE.phone,
                  href: `https://wa.me/${SITE.whatsapp}`,
                  external: true,
                },
                {
                  icon: "location_on",
                  label: "Adres",
                  value: `${SITE.address}, ${SITE.city}`,
                },
                {
                  icon: "schedule",
                  label: "Çalışma Saatleri",
                  value: `${SITE.workingHours.weekday} | ${SITE.workingHours.saturday}`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface rounded-2xl p-5 shadow-level-1 border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-cta text-2xl mb-2">
                    {item.icon}
                  </span>
                  <p className="text-label-md font-label-md text-on-surface-variant mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-body-md font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-body-md text-on-surface">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={`tel:${SITE.phoneTel}`} className="flex-1">
                <span className="material-symbols-outlined">call</span>
                Hemen Ara
              </Button>
              <Button
                href={`https://wa.me/${SITE.whatsapp}`}
                variant="whatsapp"
                external
                className="flex-1"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </Button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-level-1 h-64 md:h-80 border border-outline-variant/30">
              <iframe
                title="Kerem Teknik Servis konum haritası"
                src={MAP_EMBED}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-level-1 border border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-2">
              İletişim Formu
            </h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
