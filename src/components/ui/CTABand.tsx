import { SITE } from "@/lib/services/site";
import { Button } from "./Button";

export function CTABand() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-12 md:py-16 max-w-container-max mx-auto w-full">
      <div className="relative bg-gradient-primary rounded-3xl p-8 md:p-14 text-center text-on-primary shadow-premium-lg overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 90% 10%, rgba(255,85,0,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-headline-md font-headline-md mb-4">
            Arıza Kaydı Oluşturun
          </h2>
          <p className="text-body-lg text-primary-fixed-dim mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz en kısa sürede adresinizde olsun. Aynı gün
            servis imkânı ile hızlı çözüm sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`tel:${SITE.phoneTel}`}
              variant="primary"
              className="bg-cta hover:bg-secondary-container"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              {SITE.phone}
            </Button>
            <Button
              href="/iletisim"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              Online Talep Oluştur
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
