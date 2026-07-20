import {
  CONTENT_DATES,
  DISTANCE_DISCLAIMER,
  PRIORITY_REGION_SLUGS,
} from "./constants";
import { computeDistanceFromBusiness, isBusinessLocationVerified } from "./geo";
import { REGION_SEEDS, type RegionSeed } from "./regions-seed";
import type { RegionPageData } from "./types";

const SERVICE_LABELS: Record<string, string> = {
  "klima-servisi": "Klima Servisi",
  "kombi-servisi": "Kombi Servisi",
  "beyaz-esya-servisi": "Beyaz Eşya Servisi",
  "camasir-makinesi-servisi": "Çamaşır Makinesi Servisi",
  "buzdolabi-servisi": "Buzdolabı Servisi",
  "bulasik-makinesi-servisi": "Bulaşık Makinesi Servisi",
  "firin-ocak-servisi": "Fırın ve Ocak Servisi",
};

const SERVICE_BODY_VARIANTS: Record<string, string[]> = {
  "klima-servisi": [
    "{name} bölgesinde {label} taleplerinde önce soğutma/ısıtma şikâyeti, filtre durumu ve drenaj hattı değerlendirilir. {side} konut profiline uygun randevu planlanır; yüksek katlı binalarda erişim koşulları önceden netleştirilir.",
    "{name} genelinde {label} için gaz kontrolü, fan performansı ve iç ünite temizliği yerinde teşhis kapsamındadır. {mahalle} gibi yoğun yerleşim alanlarında cihaz konumu ve elektrik hattı güvenliği randevu sırasında not edilir.",
    "{name} sakinlerinin {label} ihtiyacında mevsimsel yoğunluk dikkate alınır. {profile} Filtre tıkanıklığı ve drenaj sorunları sık görülen nedenler arasındadır; onarım öncesi işlem kapsamı paylaşılır.",
  ],
  "kombi-servisi": [
    "{name} bölgesinde {label} taleplerinde basınç, sıcak su dalgalanması ve petek ısınma şikâyetleri birlikte dinlenir. {side} konutlarda baca hattı ve emniyet ekipmanları kontrol listesinde önceliklidir.",
    "{name} genelinde {label} için sezon öncesi bakım randevuları planlı yürütülür. {planning} Basınç kaybı tekrarlıyorsa kaçak tespiti için yerinde ölçüm yapılır.",
    "{name} konutlarında {label} arızalarında ekran kodu kaydı alınır; pompa, eşanjör ve sensör devreleri ayrı değerlendirilir. Onayınız olmadan parça değişimi yapılmaz.",
  ],
  "beyaz-esya-servisi": [
    "{name} bölgesinde {label} kapsamında çamaşır makinesi, bulaşık makinesi ve buzdolabı arızaları için yerinde teşhis önceliklidir. {profile} Marka ve model bilgisi paylaşıldığında uygun parça seçenekleri netleştirilir.",
    "{name} genelinde {label} taleplerinde su kaçağı, sesli çalışma ve program yarıda kalma şikâyetleri ayrıştırılır. {mahalle} mahallelerinde adres ve cihaz erişimi randevu öncesi doğrulanır.",
    "{name} sakinlerine {label} desteğinde önce kullanım hatası ile mekanik/elektronik sorun ayrılır. {side} bölgesinde randevu planlaması uygunluk durumuna göre hızlandırılabilir.",
  ],
  "camasir-makinesi-servisi": [
    "{name} bölgesinde {label} için pompa, motor, kayış ve kart arızaları yerinde teşhis edilir. Tambur dönmeme ve su tahliye sorunlarında model etiketi paylaşılmalıdır.",
    "{name} genelinde {label} taleplerinde su kaçağı ve sıkma performansı birlikte değerlendirilir. {planning}",
  ],
  "buzdolabi-servisi": [
    "{name} bölgesinde {label} için soğutma zayıflığı, aşırı buzlanma ve kompresör sesi şikâyetleri önceliklidir. Gıda güvenliği açısından hızlı teşhis önerilir.",
    "{name} konutlarında {label} arızalarında kapı contası, fan ve defrost devresi kontrol edilir. {profile}",
  ],
  "bulasik-makinesi-servisi": [
    "{name} bölgesinde {label} için yıkama kalitesi düşüklüğü, koku ve tahliye sorunları ayrı değerlendirilir. Filtre ve sifon bağlantısı kullanıcı tarafından kontrol edilebilir.",
    "{name} genelinde {label} taleplerinde pompa ve ısıtıcı arızaları yerinde teşhis edilir. {mahalle} bölgesindeki adres bilgisi randevu planlamasını hızlandırır.",
  ],
  "firin-ocak-servisi": [
    "{name} bölgesinde {label} kapsamında fırın ısınmama, ocak alevi ve termostat arızaları ele alınır. Gazlı modellerde güvenlik kontrolleri atlanmaz.",
    "{name} konutlarında {label} taleplerinde cam kapak, rezistans ve kontrol paneli arızaları teşhis edilir. {side} yerleşimlerinde erişim koşulları önceden netleştirilir.",
  ],
};

function pickVariantIndex(seed: RegionSeed, serviceSlug: string): number {
  const variants = SERVICE_BODY_VARIANTS[serviceSlug] ?? SERVICE_BODY_VARIANTS["beyaz-esya-servisi"];
  const hash = `${seed.slug}-${serviceSlug}`.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return hash % variants.length;
}

function buildServiceSections(seed: RegionSeed): { id: string; title: string; body: string }[] {
  const mahalleSample = seed.neighborhoods.slice(0, 2).join(", ") || seed.name;
  return seed.highlightedServices.map((slug) => {
    const label = SERVICE_LABELS[slug] ?? slug;
    const variants = SERVICE_BODY_VARIANTS[slug] ?? SERVICE_BODY_VARIANTS["beyaz-esya-servisi"];
    const template = variants[pickVariantIndex(seed, slug)];
    const body = template
      .replaceAll("{name}", seed.name)
      .replaceAll("{label}", label.toLowerCase())
      .replaceAll("{side}", seed.continentSide)
      .replaceAll("{mahalle}", mahalleSample)
      .replaceAll("{profile}", seed.localProfile.split(".")[0] + ".")
      .replaceAll("{planning}", seed.servicePlanningNote.split(".")[0] + ".");

    return {
      id: slug,
      title: `${seed.name} ${label}`,
      body,
    };
  });
}

function regionDates(seed: RegionSeed) {
  const isPriority = PRIORITY_REGION_SLUGS.includes(
    seed.slug as (typeof PRIORITY_REGION_SLUGS)[number],
  );
  return {
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: isPriority ? CONTENT_DATES.qcUpdate : CONTENT_DATES.initialPublish,
    reviewedAt: isPriority ? CONTENT_DATES.technicalReview : CONTENT_DATES.initialPublish,
  };
}

export function buildRegionPages(): RegionPageData[] {
  return REGION_SEEDS.map((seed) => {
    const distance = computeDistanceFromBusiness(seed.latitude, seed.longitude);
    const dates = regionDates(seed);
    const canonicalPath = `/servis-bolgeleri/${seed.slug}`;
    const focusKeyphrase = `${seed.name} teknik servis`;
    const seoTitle = `${seed.name} Teknik Servis | Klima, Kombi ve Beyaz Eşya`;
    const metaDescription = `${seed.name} bölgesinde klima, kombi ve beyaz eşya için yerinde teknik servis. ${seed.continentSide} kapsamında randevu planlaması, şeffaf fiyat ve bağımsız özel servis desteği.`;

    const sections = [
      {
        id: "local-profile",
        title: `${seed.name} bölgesi hakkında`,
        body: seed.localProfile,
      },
      {
        id: "planning",
        title: "Servis planlama notu",
        body: seed.servicePlanningNote,
      },
      ...buildServiceSections(seed),
    ];

    if (seed.localNotes?.length) {
      sections.push({
        id: "local-notes",
        title: "Önemli yerel hizmet alanları",
        body: seed.localNotes.join(" "),
      });
    }

    const nearbyLinks = seed.nearbyAreas.slice(0, 6).map((slug) => {
      const nearby = REGION_SEEDS.find((r) => r.slug === slug);
      return {
        href: `/servis-bolgeleri/${slug}`,
        label: nearby?.name ?? slug,
        description: "Yakın servis bölgesi",
      };
    });

    return {
      slug: seed.slug,
      pageType: "region",
      status: "published",
      indexable: true,
      focusKeyphrase,
      secondaryKeyphrases: [
        `${seed.name} klima servisi`,
        `${seed.name} kombi servisi`,
        `${seed.name} beyaz eşya servisi`,
        ...(seed.secondaryKeyphrases ?? []),
      ],
      searchIntent: "local",
      cornerstone: seed.cornerstone,
      priorityTier: seed.priorityTier,
      title: seoTitle,
      seoTitle,
      metaDescription,
      h1: `${seed.name} Teknik Servis`,
      intro: seed.uniqueIntro,
      sections,
      faqs: seed.uniqueFaqs,
      internalLinks: [
        ...nearbyLinks,
        { href: "/hizmetlerimiz", label: "Tüm hizmetlerimiz" },
        { href: "/iletisim", label: "Servis talebi oluştur" },
        { href: "/servis-bolgeleri", label: "Tüm servis bölgeleri" },
      ],
      relatedPageSlugs: seed.nearbyAreas,
      canonicalPath,
      author: "Kerem Teknik Servis",
      technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
      publishedAt: dates.publishedAt,
      updatedAt: dates.updatedAt,
      reviewedAt: dates.reviewedAt,
      sourceNotes: isBusinessLocationVerified() ? DISTANCE_DISCLAIMER : undefined,
      name: seed.name,
      areaType: seed.areaType,
      parentArea: seed.parentArea,
      parentAreaName: seed.parentAreaName,
      continentSide: seed.continentSide,
      featured: seed.featured,
      latitude: seed.latitude,
      longitude: seed.longitude,
      distanceKm: distance?.distanceKm,
      distanceLabel: distance?.distanceLabel,
      neighborhoods: seed.neighborhoods,
      nearbyAreas: seed.nearbyAreas,
      highlightedServices: seed.highlightedServices,
      localProfile: seed.localProfile,
      servicePlanningNote: seed.servicePlanningNote,
      uniqueIntro: seed.uniqueIntro,
      uniqueFaqs: seed.uniqueFaqs,
      localNotes: seed.localNotes,
    };
  });
}

export function getRegionPage(slug: string): RegionPageData | null {
  return buildRegionPages().find((p) => p.slug === slug) ?? null;
}

export function getAllRegionSlugs(): string[] {
  return REGION_SEEDS.map((r) => r.slug);
}

export { REGION_SEEDS };
