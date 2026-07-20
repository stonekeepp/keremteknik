import {
  CONTENT_DATES,
  INDEPENDENT_SERVICE_DISCLAIMER,
  PRIORITY_REGION_SLUGS,
  REGION_SERVICE_SLUGS,
} from "./constants";
import { getRegionPage } from "./regions";
import type { RegionServicePageData } from "./types";

const SERVICE_TITLES: Record<string, string> = {
  "klima-servisi": "Klima Servisi",
  "kombi-servisi": "Kombi Servisi",
  "beyaz-esya-servisi": "Beyaz Eşya Servisi",
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
    "klima-servisi":
      "Eyüpsultan genelinde klima bakımı, gaz kontrolü ve arıza onarımı için randevu oluşturulabilir. Kemerburgaz gibi geniş yerleşim alanlarında adres ve cihaz konumu önceden netleştirilir.",
    "kombi-servisi":
      "Eyüpsultan'da kombi servis taleplerinde basınç, brülör ve petek devresi birlikte değerlendirilir. Kış yoğunluğunda sezon öncesi bakım randevuları planlı şekilde yürütülür.",
    "beyaz-esya-servisi":
      "Eyüpsultan'da beyaz eşya arızalarında önce kullanım hatası ile mekanik/elektronik sorun ayrıştırılır. Gereksiz sökme işlemi yapılmadan yerinde teşhis tercih edilir.",
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

export function buildRegionServicePages(): RegionServicePageData[] {
  const pages: RegionServicePageData[] = [];

  for (const regionSlug of PRIORITY_REGION_SLUGS) {
    const region = getRegionPage(regionSlug);
    if (!region) continue;

    for (const serviceSlug of REGION_SERVICE_SLUGS) {
      const serviceTitle = SERVICE_TITLES[serviceSlug] ?? serviceSlug;
      const uniqueIntro =
        REGION_SERVICE_INTROS[regionSlug]?.[serviceSlug] ??
        `${region.name} bölgesinde ${serviceTitle.toLowerCase()} için yerinde teknik destek sunulur.`;
      const canonicalPath = `/servis-bolgeleri/${regionSlug}/${serviceSlug}`;
      const focusKeyphrase = `${region.name} ${serviceTitle.toLowerCase()}`;

      pages.push({
        slug: `${regionSlug}-${serviceSlug}`,
        pageType: "region-service",
        status: "published",
        indexable: true,
        focusKeyphrase,
        secondaryKeyphrases: [
          `${region.name} ${serviceSlug.replace(/-/g, " ")}`,
          `${region.name} teknik servis`,
        ],
        searchIntent: "local",
        cornerstone: true,
        priorityTier: 1,
        title: `${region.name} ${serviceTitle} | Yerinde Teknik Destek`,
        seoTitle: `${region.name} ${serviceTitle} | Yerinde Teknik Destek`,
        metaDescription: `${region.name} ${serviceTitle.toLowerCase()}: yerinde teşhis, şeffaf fiyat ve bağımsız özel teknik servis. Randevu için iletişime geçin.`,
        h1: `${region.name} ${serviceTitle}`,
        intro: uniqueIntro,
        sections: [
          {
            id: "scope",
            title: "Hizmet kapsamı",
            body: `${region.name} bölgesinde ${serviceTitle.toLowerCase()} kapsamında arıza tespiti, bakım ve onarım hizmeti verilir. Cihaz markası ve model bilgisi paylaşıldığında uygun teşhis planı oluşturulur.`,
          },
          {
            id: "process",
            title: "Servis süreci",
            body: "Talep alındıktan sonra uygun randevu planlanır. Yerinde teşhis sonrası işlem ve ücret bilgisi paylaşılır; onayınız olmadan ek işlem yapılmaz.",
          },
        ],
        faqs: [
          {
            question: `${region.name} için ${serviceTitle.toLowerCase()} randevusu nasıl alınır?`,
            answer:
              "Telefon, WhatsApp veya iletişim formu ile adres, cihaz bilgisi ve uygun saat paylaşarak talep oluşturabilirsiniz.",
          },
          {
            question: "Onarım öncesi fiyat bilgisi veriliyor mu?",
            answer:
              "Evet. Teşhis sonrası işçilik ve gerekli parça bedeli onayınıza sunulur; onay olmadan işlem yapılmaz.",
          },
          {
            question: "Yetkili servis misiniz?",
            answer:
              "Kerem Teknik Servis bağımsız özel teknik servis olarak hizmet verir; markaların yetkili servisi değildir.",
          },
        ],
        internalLinks: [
          { href: `/servis-bolgeleri/${regionSlug}`, label: `${region.name} servis bölgesi` },
          { href: `/hizmetlerimiz/${serviceSlug}`, label: `Genel ${serviceTitle.toLowerCase()} sayfası` },
          { href: "/iletisim", label: "İletişim ve randevu" },
        ],
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
  return (
    buildRegionServicePages().find(
      (p) => p.regionSlug === regionSlug && p.serviceSlug === serviceSlug,
    ) ?? null
  );
}

export function getRegionServiceStaticParams(): { bolge: string; hizmet: string }[] {
  return PRIORITY_REGION_SLUGS.flatMap((bolge) =>
    REGION_SERVICE_SLUGS.map((hizmet) => ({ bolge, hizmet })),
  );
}
