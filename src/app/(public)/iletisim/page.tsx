import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SITE, TRUST_BADGES } from "@/lib/services/site";

export const metadata = buildPageMetadata({
  title: "İletişim | Servis Talebi ve Randevu",
  description:
    "Kerem Teknik Servis iletişim: telefon, WhatsApp veya online form ile klima, kombi ve beyaz eşya servis talebi oluşturun. Eyüpsultan merkezli, İstanbul geneli aynı gün teknik servis.",
  path: "/iletisim",
});

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3157303637377!2d28.939218!3d41.083947699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab13589ba8c63%3A0xa48288a7dda22cd3!2zS0VSRU0gVEVLTsSwSyAtIEJFWUFaIEXFnllBIFNFUlbEsFPEsA!5e0!3m2!1str!2str!4v1783426121998!5m2!1str!2str";
const MAP_DIRECTIONS_URL = SITE.mapsUrl;

const CONTACT_CHANNELS = [
  {
    icon: "call",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    label: "Telefon",
    value: SITE.phone,
    hint: "Acil arızalar için doğrudan arayın",
    href: `tel:${SITE.phoneTel}`,
    external: false,
  },
  {
    icon: "chat",
    iconBg: "bg-whatsapp/15",
    iconColor: "text-whatsapp",
    label: "WhatsApp",
    value: SITE.phone,
    hint: "Fotoğraf ve adres paylaşarak talep oluşturun",
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
  },
  {
    icon: "location_on",
    iconBg: "bg-cta/10",
    iconColor: "text-cta",
    label: "Adres",
    value: SITE.fullAddress,
    hint: "Merkez ofis — Eyüpsultan",
    href: undefined,
    external: false,
  },
  {
    icon: "schedule",
    iconBg: "bg-gold/15",
    iconColor: "text-gold",
    label: "Çalışma Saatleri",
    value: SITE.workingHours.weekday,
    hint: SITE.workingHours.saturday,
    href: undefined,
    external: false,
  },
] as const;

const RESPONSE_PROMISES = [
  {
    icon: "bolt",
    title: "Hızlı Geri Dönüş",
    text: "Form ve mesajlarınıza mesai saatlerinde en kısa sürede dönüş yapıyoruz.",
  },
  {
    icon: "event_available",
    title: "Aynı Gün Randevu",
    text: "Uygunluk durumuna göre aynı gün servis planlaması yapıyoruz.",
  },
  {
    icon: "receipt_long",
    title: "Şeffaf Bilgilendirme",
    text: "Yerinde teşhis sonrası net fiyat paylaşımı ile ilerliyoruz.",
  },
] as const;

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim" },
        ])}
      />

      {/* Premium header */}
      <header className="bg-primary text-on-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(201,162,39,0.18) 0%, transparent 45%), radial-gradient(circle at 10% 80%, rgba(255,85,0,0.08) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-14 md:pt-10 md:pb-20">
          <nav aria-label="Breadcrumb" className="hidden md:block text-body-md mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-primary-fixed-dim">
              <li>
                <Link
                  href="/"
                  className="hover:text-on-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="chevron_right" className="w-4 h-4 opacity-60" />
                <span className="text-gold font-medium" aria-current="page">
                  İletişim
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <div>
              <p className="text-label-md font-label-md uppercase tracking-[0.2em] text-gold mb-4">
                Bize Ulaşın
              </p>
              <h1 className="text-headline-lg-mobile md:text-[2.75rem] md:leading-tight font-headline-lg text-on-primary mb-5">
                Servis Talebi ve Randevu
              </h1>
              <p className="text-body-lg text-primary-fixed-dim leading-relaxed max-w-xl">
                Klima, kombi veya beyaz eşya arızalarınız için telefon,
                WhatsApp ya da online form ile talep oluşturun. İstanbul
                genelinde aynı gün teknik servis planlaması yapıyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:justify-end">
              <Button href={`tel:${SITE.phoneTel}`}>
                <Icon name="call" className="w-5 h-5" />
                {SITE.phone}
              </Button>
              <Button
                href={`https://wa.me/${SITE.whatsapp}`}
                variant="whatsapp"
                external
              >
                <Icon name="chat" className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-body-md text-primary-fixed-dim"
              >
                <Icon
                  name={badge.icon as IconName}
                  className="w-4 h-4 text-gold"
                />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Promise strip */}
      <section className="bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {RESPONSE_PROMISES.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <Icon
                  name={item.icon as IconName}
                  className="w-8 h-8 text-cta shrink-0"
                />
                <div>
                  <p className="text-headline-sm font-headline-sm text-primary mb-1">
                    {item.title}
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + contact channels */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-surface rounded-3xl p-6 md:p-10 shadow-premium-lg border border-outline-variant/30 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cta to-gold"
                aria-hidden
              />
              <div className="mb-8">
                <h2 className="text-headline-md font-headline-md text-primary mb-2">
                  Online Talep Formu
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  Formu doldurun; ekibimiz en kısa sürede sizi arayarak randevu
                  ve arıza detaylarını netleştirsin.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28 flex flex-col gap-4">
              <p className="text-label-md font-label-md uppercase tracking-wide text-secondary mb-1">
                İletişim Kanalları
              </p>

              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.label}
                  className="group bg-surface rounded-2xl p-5 shadow-premium-sm border border-outline-variant/30 hover:border-primary/20 hover:shadow-premium-md transition-all"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${channel.iconBg}`}
                    >
                      <Icon
                        name={channel.icon as IconName}
                        className={`w-6 h-6 ${channel.iconColor}`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-label-md font-label-md text-on-surface-variant mb-0.5">
                        {channel.label}
                      </p>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          target={channel.external ? "_blank" : undefined}
                          rel={
                            channel.external ? "noopener noreferrer" : undefined
                          }
                          className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors break-words"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-body-md font-semibold text-primary break-words">
                          {channel.value}
                        </p>
                      )}
                      <p className="text-body-md text-on-surface-variant mt-1">
                        {channel.hint}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-2 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-body-md text-on-surface-variant">
                  <span className="font-semibold text-primary">
                    Acil arıza mı?
                  </span>{" "}
                  Telefon veya WhatsApp üzerinden doğrudan ulaşarak aynı gün
                  servis talebi oluşturabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-headline-md font-headline-md text-primary mb-2">
                Konumumuz
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                {SITE.fullAddress}
              </p>
            </div>
            <Button
              href={MAP_DIRECTIONS_URL}
              variant="outline"
              external
            >
              <Icon name="directions" className="w-5 h-5" />
              Yol Tarifi Al
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-premium-lg border border-outline-variant/30 h-72 md:h-96 lg:h-[28rem] relative">
            <iframe
              title="Kerem Teknik Servis konum haritası — Eyüpsultan, İstanbul"
              src={MAP_EMBED}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
