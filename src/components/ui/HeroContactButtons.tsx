import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/services/site";

type HeroContactButtonsProps = {
  showAppointment?: boolean;
  appointmentLabel?: string;
  callLabel?: string;
};

export function HeroContactButtons({
  showAppointment = true,
  appointmentLabel = "Hemen Randevu Al",
  callLabel,
}: HeroContactButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
      {showAppointment && (
        <Button href="/iletisim">{appointmentLabel}</Button>
      )}
      <Button href={`tel:${SITE.phoneTel}`} variant="outline">
        <Icon name="call" className="w-5 h-5" />
        {callLabel ?? SITE.phone}
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
  );
}
