import {
  CONTENT_DATES,
  INDEPENDENT_SERVICE_DISCLAIMER,
  PRIORITY_REGION_SLUGS,
  getRegionServiceSlugs,
  hasRegionServicePage,
} from "./constants";
import { REGION_SERVICE_CONTENT } from "./region-service-content";
import { getRegionPage } from "./regions";
import type { ContentSection, FaqItem, RegionServicePageData } from "./types";

export const SERVICE_TITLES: Record<string, string> = {
  "klima-servisi": "Klima Servisi",
  "kombi-servisi": "Kombi Servisi",
  "beyaz-esya-servisi": "Beyaz Eşya Servisi",
  "camasir-makinesi-servisi": "Çamaşır Makinesi Servisi",
  "buzdolabi-servisi": "Buzdolabı Servisi",
  "bulasik-makinesi-servisi": "Bulaşık Makinesi Servisi",
};

const REGION_SERVICE_INTROS: Record<string, Record<string, string>> = {
  alibeykoy: {
    "klima-servisi":
      "Alibeyköy'de split ve inverter klimalarda soğutma, ısıtma ve su damlatma şikâyetleri için yerinde teşhis planlanır. Eyüpsultan merkezli ekibimiz bölgeye yakın konumda olduğundan randevu planlaması genellikle hızlı ilerler. Gaz, filtre ve drenaj kontrolleri onarım öncesi paylaşılır.",
    "kombi-servisi":
      "Alibeyköy konutlarında kombi basınç düşmesi, sıcak su dalgalanması ve petek ısınma sorunları için yerinde servis verilir. Arıza kodu ve belirtiler kayıt altına alınır; onayınız olmadan parça değişimi yapılmaz.",
    "beyaz-esya-servisi":
      "Alibeyköy'de çamaşır makinesi, bulaşık makinesi ve buzdolabı arızalarında yerinde teşhis önceliklidir. Cihaz markası ve model bilgisi paylaşıldığında uygun parça ve işçilik seçenekleri net fiyatla bildirilir.",
  },
  eyupsultan: {
    "kombi-servisi":
      "Eyüpsultan'da kombi servis taleplerinde basınç, brülör ve petek devresi birlikte değerlendirilir. Alibeyköy merkezine yakınlık sayesinde Rami, Yeşilpınar ve Göktürk hatlarında kış yoğunluğunda sezon öncesi bakım randevuları planlı yürütülür.",
  },
  gaziosmanpasa: {
    "klima-servisi":
      "Gaziosmanpaşa'da klima servis taleplerinde iç/dış ünite erişimi ve elektrik hattı güvenliği kontrol edilir. Filtre tıkanıklığı ve drenaj sorunları sık görülen nedenler arasındadır.",
    "kombi-servisi":
      "Gaziosmanpaşa'da kombi arızalarında emniyet ekipmanları ve baca hattı kontrolleri önceliklidir. Basınç kaybı tekrarlıyorsa kaçak tespiti için yerinde ölçüm yapılır.",
    "beyaz-esya-servisi":
      "Gaziosmanpaşa'da beyaz eşya onarımlarında pompa, motor ve elektronik kart arızaları ayrı değerlendirilir. Uyumlu parça seçenekleri maliyet ve garanti süresiyle birlikte açıklanır.",
  },
  kagithane: {
    "klima-servisi":
      "Kağıthane'de klima servisinde dış ünite hava akışı ve iç ünite filtre durumu birlikte incelenir. Yüksek katlı konutlarda erişim ve güvenlik koşulları randevu sırasında netleştirilir.",
    "kombi-servisi":
      "Kağıthane'de kombi servisinde petek temizliği ihtiyacı ile cihaz arızası ayrı değerlendirilir. Sıcak su ve ısıtma şikâyetleri için arıza kodu kaydı alınır.",
    "beyaz-esya-servisi":
      "Kağıthane'de çamaşır ve bulaşık makinesi arızalarında su kaçağı ve sesli çalışma şikâyetleri öncelikli teşhis alır. Onarım öncesi işlem kapsamı yazılı veya sözlü paylaşılır.",
  },
};

const SERVICE_SCOPE_HINTS: Record<string, string> = {
  "klima-servisi":
    "soğutma/ısıtma performansı, filtre ve drenaj hattı, gaz kaçak/basınç değerlendirmesi",
  "kombi-servisi":
    "basınç, sıcak su, petek ısınma, baca ve emniyet ekipmanları kontrolü",
  "beyaz-esya-servisi":
    "çamaşır, bulaşık ve buzdolabı arızalarında yerinde teşhis; kullanım hatası ile mekanik sorun ayrımı",
  "camasir-makinesi-servisi":
    "pompa, motor, kayış, tahliye ve kart arızaları",
  "buzdolabi-servisi":
    "soğutma zayıflığı, buzlanma, fan/defrost ve conta kontrolü",
  "bulasik-makinesi-servisi":
    "yıkama kalitesi, koku, ısıtıcı ve tahliye sorunları",
};

function buildDefaultSections(
  regionName: string,
  regionSlug: string,
  serviceSlug: string,
  serviceTitle: string,
  neighborhoods: string[],
  localProfile: string,
  planningNote: string,
): ContentSection[] {
  const mahalleList =
    neighborhoods.length > 0
      ? neighborhoods.slice(0, 12).join(", ")
      : regionName;
  const profileSentence = localProfile.split(".")[0] + ".";
  const scopeHint = SERVICE_SCOPE_HINTS[serviceSlug] ?? "arıza tespiti, bakım ve onarım";

  return [
    {
      id: "scope",
      title: "Hizmet kapsamı",
      body: `${regionName} ${serviceTitle.toLowerCase()} kapsamında ${scopeHint} yerinde değerlendirilir. ${profileSentence} Cihaz markası ve model bilgisi paylaşıldığında uygun teşhis planı oluşturulur; onayınız olmadan parça değişimi yapılmaz.`,
    },
    {
      id: "neighborhoods",
      title: `${regionName} hizmet mahalleleri`,
      body: `${regionName} içinde ${serviceTitle.toLowerCase()} randevuları başta ${mahalleList} olmak üzere bölge mahallelerine planlanır. ${planningNote}`,
    },
    {
      id: "process",
      title: "Servis süreci",
      body: `${regionName} taleplerinde iletişim kanallarımızdan adres ve cihaz bilgisi alınır, uygun randevu planlanır. Yerinde teşhis sonrası işçilik ve parça bedeli onayınıza sunulur. Kerem Teknik Servis bağımsız özel teknik servistir; ${regionSlug === "eyupsultan" ? "merkez ofis Eyüpsultan Alibeyköy'dedir." : "markaların yetkili servisi değildir."}`,
    },
  ];
}

function buildDefaultFaqs(
  regionName: string,
  serviceTitle: string,
): FaqItem[] {
  return [
    {
      question: `${regionName} için ${serviceTitle.toLowerCase()} randevusu nasıl alınır?`,
      answer:
        "Telefon, WhatsApp veya iletişim formu ile adres, cihaz bilgisi ve uygun saat paylaşarak talep oluşturabilirsiniz.",
    },
    {
      question: "Onarım öncesi fiyat bilgisi veriliyor mu?",
      answer:
        "Evet. Teşhis sonrası işçilik ve gerekli parça bedeli onayınıza sunulur; onay olmadan işlem yapılmaz.",
    },
    {
      question: `${regionName} ${serviceTitle.toLowerCase()} aynı gün planlanır mı?`,
      answer:
        "Yoğunluk ve adrese göre aynı gün veya ertesi iş günü randevu açılabilir; saat aralığı önceden bildirilir.",
    },
    {
      question: "Yetkili servis misiniz?",
      answer:
        "Kerem Teknik Servis bağımsız özel teknik servis olarak hizmet verir; markaların yetkili servisi değildir.",
    },
  ];
}

function buildInternalLinks(
  regionSlug: string,
  regionName: string,
  serviceSlug: string,
  serviceTitle: string,
): RegionServicePageData["internalLinks"] {
  const siblings = getRegionServiceSlugs(regionSlug)
    .filter((slug) => slug !== serviceSlug)
    .map((slug) => ({
      href: `/servis-bolgeleri/${regionSlug}/${slug}`,
      label: `${regionName} ${SERVICE_TITLES[slug] ?? slug}`,
    }));

  return [
    {
      href: `/servis-bolgeleri/${regionSlug}`,
      label: `${regionName} servis bölgesi`,
    },
    ...siblings.slice(0, 4),
    {
      href: `/hizmetlerimiz/${serviceSlug}`,
      label: `Genel ${serviceTitle.toLowerCase()} sayfası`,
    },
    { href: "/iletisim", label: "İletişim ve randevu" },
  ];
}

export function buildRegionServicePages(): RegionServicePageData[] {
  const pages: RegionServicePageData[] = [];

  for (const regionSlug of PRIORITY_REGION_SLUGS) {
    const region = getRegionPage(regionSlug);
    if (!region) continue;

    for (const serviceSlug of getRegionServiceSlugs(regionSlug)) {
      const serviceTitle = SERVICE_TITLES[serviceSlug] ?? serviceSlug;
      const override = REGION_SERVICE_CONTENT[regionSlug]?.[serviceSlug];
      const uniqueIntro =
        override?.intro ??
        REGION_SERVICE_INTROS[regionSlug]?.[serviceSlug] ??
        `${region.name} bölgesinde ${serviceTitle.toLowerCase()} için yerinde teknik destek sunulur. ${region.localProfile.split(".")[0]}.`;

      const sections =
        override?.sections ??
        buildDefaultSections(
          region.name,
          regionSlug,
          serviceSlug,
          serviceTitle,
          region.neighborhoods,
          region.localProfile,
          region.servicePlanningNote,
        );

      const faqs = override?.faqs ?? buildDefaultFaqs(region.name, serviceTitle);
      const canonicalPath = `/servis-bolgeleri/${regionSlug}/${serviceSlug}`;
      const focusKeyphrase = `${region.name} ${serviceTitle.toLowerCase()}`;
      const title =
        override?.seoTitle ??
        `${region.name} ${serviceTitle} | Yerinde Teknik Destek`;
      const metaDescription =
        override?.metaDescription ??
        `${region.name} ${serviceTitle.toLowerCase()}: yerinde teşhis, şeffaf fiyat ve bağımsız özel teknik servis. Randevu: 0551 397 25 26.`;

      pages.push({
        slug: `${regionSlug}-${serviceSlug}`,
        pageType: "region-service",
        status: "published",
        indexable: true,
        focusKeyphrase,
        secondaryKeyphrases: override?.secondaryKeyphrases ?? [
          `${region.name} ${serviceSlug.replace(/-/g, " ")}`,
          `${region.name} teknik servis`,
        ],
        searchIntent: "local",
        cornerstone: true,
        priorityTier: 1,
        title,
        seoTitle: title,
        metaDescription,
        h1: `${region.name} ${serviceTitle}`,
        intro: uniqueIntro,
        sections,
        faqs,
        internalLinks: buildInternalLinks(
          regionSlug,
          region.name,
          serviceSlug,
          serviceTitle,
        ),
        relatedPageSlugs: [regionSlug, serviceSlug],
        canonicalPath,
        author: "Kerem Teknik Servis",
        technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
        publishedAt: CONTENT_DATES.initialPublish,
        updatedAt: CONTENT_DATES.qcUpdate,
        reviewedAt: CONTENT_DATES.technicalReview,
        sourceNotes: INDEPENDENT_SERVICE_DISCLAIMER,
        regionSlug,
        regionName: region.name,
        serviceSlug,
        serviceTitle,
        uniqueIntro,
      });
    }
  }

  return pages;
}

export function getRegionServicePage(
  regionSlug: string,
  serviceSlug: string,
): RegionServicePageData | null {
  if (!hasRegionServicePage(regionSlug, serviceSlug)) return null;
  return (
    buildRegionServicePages().find(
      (p) => p.regionSlug === regionSlug && p.serviceSlug === serviceSlug,
    ) ?? null
  );
}

export function getRegionServiceStaticParams(): { bolge: string; hizmet: string }[] {
  return PRIORITY_REGION_SLUGS.flatMap((bolge) =>
    getRegionServiceSlugs(bolge).map((hizmet) => ({ bolge, hizmet })),
  );
}
