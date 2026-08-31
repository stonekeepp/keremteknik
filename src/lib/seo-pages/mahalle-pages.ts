import { CONTENT_DATES, DISTANCE_DISCLAIMER } from "./constants";
import {
  EYUPSULTAN_MAHALLE_SEEDS,
  type MahalleSeed,
} from "./eyupsultan-mahalle-seed";
import { getMahalleCanonicalPath } from "./mahalle-nav";
import type { InternalLinkItem, MahallePageData } from "./types";

const MONEY_LINKS: InternalLinkItem[] = [
  {
    href: "/servis-bolgeleri/eyupsultan/klima-servisi",
    label: "Eyüpsultan klima servisi",
    description: "İlçe geneli klima arıza, bakım ve gaz kontrolü",
  },
  {
    href: "/servis-bolgeleri/eyupsultan/kombi-servisi",
    label: "Eyüpsultan kombi servisi",
    description: "Kombi bakım, arıza ve petek temizliği",
  },
  {
    href: "/servis-bolgeleri/eyupsultan/beyaz-esya-servisi",
    label: "Eyüpsultan beyaz eşya servisi",
    description: "Çamaşır, bulaşık, buzdolabı yerinde teşhis",
  },
];

const SPOKE_SLUG_LINKS: Record<string, InternalLinkItem> = {
  alibeykoy: {
    href: "/servis-bolgeleri/alibeykoy",
    label: "Alibeyköy semt hub",
    description: "Semt spoke — klima ve kombi money sayfaları",
  },
  gokturk: {
    href: "/servis-bolgeleri/gokturk",
    label: "Göktürk semt hub",
    description: "Klima spoke sayfası",
  },
};

function buildMahalleInternalLinks(seed: MahalleSeed): InternalLinkItem[] {
  const neighborLinks: InternalLinkItem[] = [];
  for (const slug of seed.nearbyMahalleler.slice(0, 1)) {
    const spoke = SPOKE_SLUG_LINKS[slug];
    if (spoke) {
      neighborLinks.push(spoke);
      continue;
    }
    const neighbor = EYUPSULTAN_MAHALLE_SEEDS.find((s) => s.slug === slug);
    if (neighbor) {
      neighborLinks.push({
        href: getMahalleCanonicalPath(neighbor.slug),
        label: `${neighbor.name} mahalle planı`,
        description: "Komşu mahalle planlama sayfası",
      });
    }
  }

  return [
    {
      href: "/servis-bolgeleri/eyupsultan",
      label: "Eyüpsultan ilçe hub",
      description: "Tüm mahalleler ve ilçe hizmet sayfaları",
    },
    ...MONEY_LINKS,
    ...neighborLinks,
    { href: "/iletisim", label: "Servis talebi oluştur" },
  ];
}

function buildMahalleSections(seed: MahalleSeed) {
  const stockLabels: Record<MahalleSeed["buildingStock"], string> = {
    apartman: "yoğun apartman",
    "villa-site": "villa ve site",
    "sanayi-karisik": "sanayi-konut karışık",
    tarihi: "tarihi-apartman karışık",
  };

  return [
    {
      id: "local-profile",
      title: `${seed.name} mahallesi yerel profil`,
      body: seed.localProfile,
    },
    {
      id: "distance",
      title: "Ofis mesafesi ve varış bandı",
      body: `Kerem Teknik Servis merkezi Alibeyköy Uygar Sokak üzerindedir. ${seed.name} mahallesi merkezine yaklaşık ${seed.distanceKmAir} km kuş uçuşu mesafededir; yol mesafesi ve varış süresi trafiğe göre değişir. Planlama notlarımızda trafik bandı genelde ${seed.driveTimeBand} aralığında paylaşılır. ${DISTANCE_DISCLAIMER}`,
    },
    {
      id: "building-stock",
      title: "Konut tipi ve erişim",
      body: `${seed.name} bölgesinde baskın konut tipi ${stockLabels[seed.buildingStock]} profilindedir.\n\nKlima erişimi: ${seed.klimaAccessNote}\n\n${seed.kombiNote ? `Kombi notu: ${seed.kombiNote}` : ""}`.trim(),
    },
    {
      id: "planning",
      title: "Randevu planlama notu",
      body: seed.planningNote,
    },
    {
      id: "money-cta",
      title: "Hizmet sayfalarına geçiş",
      body: `${seed.name} için arıza, bakım veya onarım randevusu almak istiyorsanız ilçe money sayfalarını kullanın. Mahalle hub sayfası bilgi ve planlama amaçlıdır; klima, kombi veya beyaz eşya işlemleri Eyüpsultan hizmet sayfalarından planlanır.`,
      href: "/servis-bolgeleri/eyupsultan/klima-servisi",
    },
  ];
}

export function buildMahallePages(): MahallePageData[] {
  return EYUPSULTAN_MAHALLE_SEEDS.map((seed) => {
    const canonicalPath = getMahalleCanonicalPath(seed.slug);
    const focusKeyphrase = `${seed.name} teknik servis`;
    const seoTitle = `${seed.name} Mahallesi — Eyüpsultan Teknik Servis Planı`;
    const metaDescription = `${seed.name} mahallesi için Eyüpsultan teknik servis planlama: yaklaşık ${seed.distanceKmAir} km, ${seed.driveTimeBand} trafik bandı, ${seed.buildingStock.replace("-", " ")} konut profili. Klima/kombi randevusu ilçe money sayfalarından.`;

    return {
      slug: seed.slug,
      pageType: "mahalle-hub",
      status: "published",
      indexable: seed.indexable,
      focusKeyphrase,
      secondaryKeyphrases: [
        `${seed.name} mahalle teknik servis`,
        `${seed.name} Eyüpsultan servis planı`,
      ],
      searchIntent: "local",
      cornerstone: false,
      priorityTier: seed.indexable ? 1 : 3,
      title: seoTitle,
      seoTitle,
      metaDescription,
      h1: `${seed.name} Mahallesi — Eyüpsultan teknik servis planı`,
      intro: `${seed.name} mahallesi Eyüpsultan ilçesi içinde yer alır. Bu sayfa mahalle bazlı servis planlama notları, kuş uçuşu mesafe (${seed.distanceKmAir} km) ve konut tipi bilgisi sunar. Klima, kombi veya beyaz eşya randevusu için Eyüpsultan hizmet sayfalarına geçin.`,
      sections: buildMahalleSections(seed),
      faqs: seed.faqs,
      internalLinks: buildMahalleInternalLinks(seed),
      relatedPageSlugs: ["eyupsultan", ...seed.nearbyMahalleler],
      canonicalPath,
      author: "Kerem Teknik Servis",
      publishedAt: CONTENT_DATES.qcUpdate,
      updatedAt: CONTENT_DATES.qcUpdate,
      reviewedAt: CONTENT_DATES.technicalReview,
      sourceNotes: DISTANCE_DISCLAIMER,
      name: seed.name,
      parentIlce: seed.parentIlce,
      parentIlceName: "Eyüpsultan",
      latitude: seed.latitude,
      longitude: seed.longitude,
      distanceKmAir: seed.distanceKmAir,
      driveTimeBand: seed.driveTimeBand,
      buildingStock: seed.buildingStock,
      klimaAccessNote: seed.klimaAccessNote,
      kombiNote: seed.kombiNote,
      nearbyMahalleler: seed.nearbyMahalleler,
      localProfile: seed.localProfile,
      planningNote: seed.planningNote,
      group: seed.group,
    };
  });
}

export function getMahallePage(slug: string): MahallePageData | null {
  return buildMahallePages().find((page) => page.slug === slug) ?? null;
}
