import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SERVICES, SITE, type ServiceItem } from "@/lib/services/site";
import { cn } from "@/lib/utils/cn";

const NAV_GROUPS = [
  {
    label: "İklimlendirme",
    icon: "ac_unit",
    accent: "from-sky-500/8 to-transparent",
    slugs: ["klima-servisi", "kombi-servisi"],
  },
  {
    label: "Beyaz Eşya",
    icon: "kitchen",
    accent: "from-violet-500/8 to-transparent",
    slugs: [
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
      "buzdolabi-servisi",
      "bulasik-makinesi-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    label: "Bakım & Destek",
    icon: "handyman",
    accent: "from-emerald-500/8 to-transparent",
    slugs: ["periyodik-bakim", "yedek-parca-iscilik"],
  },
] as const;

const ICON_STYLES: Record<string, { bg: string; color: string }> = {
  "klima-servisi": { bg: "bg-sky-500/12", color: "text-sky-700" },
  "kombi-servisi": { bg: "bg-orange-500/12", color: "text-orange-700" },
  "beyaz-esya-servisi": { bg: "bg-violet-500/12", color: "text-violet-700" },
  "camasir-makinesi-servisi": { bg: "bg-blue-500/12", color: "text-blue-700" },
  "buzdolabi-servisi": { bg: "bg-cyan-500/12", color: "text-cyan-700" },
  "bulasik-makinesi-servisi": { bg: "bg-indigo-500/12", color: "text-indigo-700" },
  "firin-ocak-servisi": { bg: "bg-rose-500/12", color: "text-rose-700" },
  "periyodik-bakim": { bg: "bg-emerald-500/12", color: "text-emerald-700" },
  "yedek-parca-iscilik": { bg: "bg-amber-500/12", color: "text-amber-800" },
};

const TRUST_PILLS = [
  { icon: "verified", label: "Garantili" },
  { icon: "speed", label: "Aynı Gün" },
  { icon: "payments", label: "Şeffaf Fiyat" },
] as const;

function getService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function ServiceQuickNav() {
  const totalServices = SERVICES.filter((s) => s.hasDetailPage).length;

  return (
    <section
      aria-label="Hizmetlere hızlı erişim"
      className="relative -mt-6 md:-mt-10 z-10 pb-2"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="relative bg-surface rounded-3xl shadow-premium-lg border border-outline-variant/40 overflow-hidden">
          {/* Üst gradient çizgi */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cta to-gold"
            aria-hidden
          />

          {/* Dekoratif arka plan */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 100% 0%, rgba(0,30,64,0.06) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative p-5 md:p-8">
            {/* Başlık */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6 pb-6 border-b border-outline-variant/30">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon name="grid_view" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="text-label-md font-label-md uppercase tracking-wide text-secondary">
                      Hızlı Erişim
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-label-md font-label-md">
                      {totalServices} Hizmet
                    </span>
                  </div>
                  <h2 className="text-headline-sm md:text-headline-md font-headline-sm text-primary">
                    Servis Kategorileri
                  </h2>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <p className="text-body-md text-on-surface-variant max-w-md lg:text-right">
                  İhtiyacınız olan hizmete tek tıkla ulaşın
                </p>
                <div className="flex flex-wrap gap-2">
                  {TRUST_PILLS.map((pill) => (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 text-label-md font-label-md text-on-surface-variant"
                    >
                      <Icon
                        name={pill.icon as IconName}
                        className="w-4 h-4 text-cta"
                      />
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 sütun kategori grid — yapı aynı */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
              {NAV_GROUPS.map((group, groupIndex) => (
                <div
                  key={group.label}
                  className={cn(
                    "lg:px-6 first:lg:pl-0 last:lg:pr-0",
                    groupIndex > 0 &&
                      "lg:border-l lg:border-outline-variant/30 pt-6 lg:pt-0 border-t lg:border-t-0 border-outline-variant/30",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-between gap-3 mb-4 p-3 rounded-2xl bg-gradient-to-r",
                      group.accent,
                    )}
                  >
                    <p className="text-label-md font-label-md text-on-surface-variant flex items-center gap-2">
                      <span className="w-8 h-px bg-outline-variant hidden sm:block" aria-hidden />
                      <Icon
                        name={group.icon as IconName}
                        className="w-5 h-5 text-secondary"
                      />
                      {group.label}
                    </p>
                    <span className="text-label-md font-label-md text-on-surface-variant/70 tabular-nums">
                      {group.slugs.length}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {group.slugs.map((slug) => {
                      const service = getService(slug);
                      if (!service) return null;
                      const style = ICON_STYLES[slug] ?? {
                        bg: "bg-primary/10",
                        color: "text-primary",
                      };
                      return (
                        <li key={slug}>
                          <Link
                            href={`/hizmetlerimiz/${slug}`}
                            className="group flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-primary/15 hover:bg-surface-container-low hover:shadow-premium-sm transition-all hover:-translate-y-0.5"
                          >
                            <span
                              className={cn(
                                "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ring-1 ring-black/5",
                                style.bg,
                              )}
                            >
                              <Icon
                                name={service.icon as IconName}
                                className={cn("w-6 h-6", style.color)}
                              />
                            </span>
                            <span className="flex-1 text-body-md font-semibold text-primary group-hover:text-secondary transition-colors leading-tight">
                              {service.title}
                            </span>
                            <Icon
                              name="arrow_forward"
                              className="w-5 h-5 text-on-surface-variant group-hover:text-cta group-hover:translate-x-0.5 transition-all shrink-0"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Alt CTA şeridi */}
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-body-md text-on-surface-variant flex items-center gap-2">
                <Icon name="support_agent" className="w-5 h-5 text-gold" />
                Arıza veya bakım için hemen destek alın
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 shrink-0">
                <Button
                  href={`tel:${SITE.phoneTel}`}
                  variant="outline"
                  className="!px-5 !py-2.5"
                >
                  <Icon name="call" className="w-5 h-5" />
                  {SITE.phone}
                </Button>
                <Button
                  href={`https://wa.me/${SITE.whatsapp}`}
                  variant="whatsapp"
                  external
                  className="!px-5 !py-2.5"
                >
                  <Icon name="chat" className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button href="/iletisim" className="!px-5 !py-2.5">
                  <Icon name="edit_calendar" className="w-5 h-5" />
                  Randevu Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
