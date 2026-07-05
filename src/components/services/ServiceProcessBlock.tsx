import { SERVICE_PROCESS } from "@/lib/services/site";
import { cn } from "@/lib/utils/cn";

type ServiceProcessBlockProps = {
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const DEFAULT_SUBTITLE =
  "Randevudan teslimata kadar net, hızlı ve şeffaf bir servis akışı";

export function ServiceProcessBlock({
  subtitle = DEFAULT_SUBTITLE,
  centered = true,
  className,
}: ServiceProcessBlockProps) {
  return (
    <section
      aria-labelledby="service-process-title"
      className={cn(
        "py-14 md:py-20 border-y border-outline-variant/50 bg-background",
        className,
      )}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="relative rounded-3xl overflow-hidden border border-outline-variant/40 shadow-premium-md">
          {/* İç arka plan */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-surface-container-low to-cta/[0.06]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 0% 0%, rgba(0,30,64,0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(255,85,0,0.04) 0%, transparent 45%)",
            }}
            aria-hidden
          />

          <div className="relative p-6 md:p-10 lg:p-12">
            <div
              className={cn(
                "mb-8 md:mb-10",
                centered && "text-center max-w-3xl mx-auto",
              )}
            >
              <p className="text-label-md font-label-md uppercase tracking-wide text-secondary mb-2">
                Nasıl Çalışıyoruz?
              </p>
              <h2
                id="service-process-title"
                className="text-headline-md font-headline-md text-primary mb-3"
              >
                Servis Sürecimiz
              </h2>
              <p className="text-body-lg text-on-surface-variant">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
              {SERVICE_PROCESS.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < SERVICE_PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-9 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/20 z-0" />
                  )}
                  <div className="relative z-10 bg-surface/90 backdrop-blur-sm rounded-2xl p-6 shadow-premium-sm border border-outline-variant/40 h-full text-center hover:border-primary/20 hover:shadow-premium-md transition-all">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-cta/20 to-primary/10 text-cta text-label-md font-label-md mb-4 ring-2 ring-surface">
                      {step.step}
                    </span>
                    <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
