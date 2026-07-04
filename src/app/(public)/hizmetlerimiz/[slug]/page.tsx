import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import {
  FAQ_ITEMS,
  SERVICE_DETAILS,
  SERVICE_PROCESS,
  SITE,
  WHY_US,
  getServiceDetailSlugs,
} from "@/lib/services/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServiceDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.description,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) notFound();

  const relatedFaq = (detail.relatedFaqIndices ?? [0, 1, 2]).map(
    (i) => FAQ_ITEMS[i],
  );

  return (
    <main>
      <section className="bg-surface-container-low py-stack-lg md:py-[80px]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-4">
              {detail.title}
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-6">
              {detail.description}
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-[12px] font-button text-button hover:bg-secondary-container transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
              {SITE.phone}
            </a>
          </div>
          <div className="bg-primary-container rounded-2xl p-8 text-on-primary-container">
            <span className="material-symbols-outlined text-5xl mb-4">
              {detail.icon}
            </span>
            <p className="text-body-lg">
              İstanbul genelinde aynı gün teknik servis desteği sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {(detail.commonIssues.length > 0 || detail.scope) && (
        <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-md font-headline-md text-primary mb-6">
            {detail.scope ? "Kapsam" : "Sık Karşılaşılan Arızalar"}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(detail.scope ?? detail.commonIssues).map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-surface rounded-xl p-4 shadow-level-1"
              >
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <span className="text-body-md text-on-surface-variant">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-md font-headline-md text-primary mb-6 text-center">
            Nasıl Destek Veriyoruz?
          </h2>
          <p className="text-body-lg text-on-surface-variant text-center max-w-3xl mx-auto">
            Yerinde arıza tespiti, şeffaf bilgilendirme ve onayınız sonrası
            profesyonel onarım ile cihazınızı güvenle teslim ediyoruz.
          </p>
        </div>
      </section>

      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="text-headline-md font-headline-md text-primary mb-8 text-center">
          Servis Süreci
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {SERVICE_PROCESS.map((step) => (
            <div
              key={step.step}
              className="text-center bg-surface rounded-xl p-6 shadow-level-1"
            >
              <span className="text-secondary text-headline-md font-headline-md block mb-2">
                {step.step}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-md font-headline-md text-primary mb-8 text-center">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-surface rounded-xl p-6 shadow-level-1">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">
                  {item.icon}
                </span>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="text-headline-md font-headline-md text-primary mb-6">
          İlgili SSS
        </h2>
        <Accordion items={relatedFaq} />
      </section>

      <section className="py-stack-lg bg-primary-container text-on-primary-container">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="text-headline-md font-headline-md mb-4 text-white">
            Hemen Servis Talebi Oluştur
          </h2>
          <p className="text-body-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Arıza, bakım veya montaj ihtiyaçlarınız için profesyonel teknik
            ekibimiz bir telefon uzağınızda.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl text-button font-button shadow-level-1 hover:shadow-level-2 transition-all"
          >
            Hemen Servis Talebi Oluştur
          </Link>
        </div>
      </section>
    </main>
  );
}
