import { Icon, type IconName } from "@/components/ui/Icon";

const QUALITY_ITEMS = [
  { icon: "verified", label: "Garantili İşçilik" },
  { icon: "speed", label: "Aynı Gün Servis" },
  { icon: "payments", label: "Şeffaf Fiyat" },
  { icon: "engineering", label: "Uzman Teknisyen" },
] as const;

export function ServiceQualityStrip() {
  return (
    <section
      aria-label="Hizmet kalite taahhütleri"
      className="bg-primary border-y border-primary-container"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5 md:py-6">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {QUALITY_ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center sm:justify-start gap-3"
            >
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon
                  name={item.icon as IconName}
                  className="w-5 h-5 text-gold"
                />
              </span>
              <span className="text-body-md font-semibold text-primary-fixed-dim">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
