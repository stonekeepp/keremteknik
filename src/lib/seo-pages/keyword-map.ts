import { BRAND_SERVICE_SEEDS } from "./brand-services";
import { PRIORITY_REGION_SLUGS, REGION_SERVICE_SLUGS } from "./constants";
import { buildErrorCodePages } from "./error-codes";
import { FAULT_GUIDE_SEEDS } from "./fault-guides";
import { REGION_SEEDS } from "./regions-seed";

export type KeywordMapEntry = {
  query: string;
  href: string;
  pageType: string;
  source: "existing" | "created";
  reason: string;
};

const SERVICE_SLUGS = [
  { query: "beyaz eşya servisi", slug: "beyaz-esya-servisi" },
  { query: "beyaz eşya teknik servisi", slug: "beyaz-esya-servisi" },
  { query: "en yakın beyaz eşya servisi", slug: "beyaz-esya-servisi" },
  { query: "klima servisi", slug: "klima-servisi" },
  { query: "kombi servisi", slug: "kombi-servisi" },
  { query: "çamaşır makinesi servisi", slug: "camasir-makinesi-servisi" },
  { query: "bulaşık makinesi servisi", slug: "bulasik-makinesi-servisi" },
  { query: "buzdolabı servisi", slug: "buzdolabi-servisi" },
];

const BLOG_CANONICAL: KeywordMapEntry[] = [
  {
    query: "buzdolabı soğutmuyorsa ne yapılmalı",
    href: "/blog/buzdolabi-sogutmuyorsa-ne-yapilmali",
    pageType: "blog",
    source: "existing",
    reason: "Mevcut blog yazısı bu bilgi niyetinin canonical hedefidir.",
  },
  {
    query: "çamaşır makinesi sıkma yapmıyorsa",
    href: "/blog/camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir",
    pageType: "blog",
    source: "existing",
    reason: "Sıkma sorunu için mevcut blog içeriği korunur.",
  },
  {
    query: "klima bakımı ne zaman yapılmalı",
    href: "/blog/klima-bakimi-ne-zaman-yapilmali",
    pageType: "blog",
    source: "existing",
    reason: "Bakım zamanlaması bilgi niyeti blogda karşılanır.",
  },
  {
    query: "kombi bakımı neden önemli",
    href: "/blog/kombi-bakimi-neden-onemlidir",
    pageType: "blog",
    source: "existing",
    reason: "Kombi bakım bilgi niyeti mevcut blogda.",
  },
  {
    query: "bulaşık makinesi neden koku yapar",
    href: "/blog/bulasik-makinesi-neden-koku-yapar",
    pageType: "blog",
    source: "existing",
    reason: "Koku sorunu blog canonical; arıza rehberi destekleyici link alır.",
  },
];

const SERVICE_TITLES: Record<string, string> = {
  "klima-servisi": "klima servisi",
  "kombi-servisi": "kombi servisi",
  "beyaz-esya-servisi": "beyaz eşya servisi",
};

function buildRegionEntries(): KeywordMapEntry[] {
  return REGION_SEEDS.flatMap((region) => {
    const base: KeywordMapEntry[] = [
      {
        query: `${region.name} teknik servis`,
        href: `/servis-bolgeleri/${region.slug}`,
        pageType: "region",
        source: "created",
        reason: "İlçe/semt genel teknik servis niyeti bölge sayfasına yönlendirildi.",
      },
    ];
    if (PRIORITY_REGION_SLUGS.includes(region.slug as (typeof PRIORITY_REGION_SLUGS)[number])) {
      for (const serviceSlug of REGION_SERVICE_SLUGS) {
        const serviceTitle = SERVICE_TITLES[serviceSlug] ?? serviceSlug;
        base.push({
          query: `${region.name} ${serviceTitle}`,
          href: `/servis-bolgeleri/${region.slug}/${serviceSlug}`,
          pageType: "region-service",
          source: "created",
          reason: "Öncelikli bölge+hizmet kombinasyonu ayrı sayfada.",
        });
      }
    }
    return base;
  });
}

function buildBrandEntries(): KeywordMapEntry[] {
  return BRAND_SERVICE_SEEDS.map((seed) => ({
    query: `${seed.brandName} ${seed.deviceTitle.toLowerCase()} servisi`,
    href: `/markalar/${seed.brandSlug}/${seed.servisSlug}`,
    pageType: "brand-service",
    source: "created" as const,
    reason: "Marka+cihaz ticari arama niyeti bağımsız sayfada.",
  }));
}

function buildFaultEntries(): KeywordMapEntry[] {
  return FAULT_GUIDE_SEEDS.map((seed) => ({
    query: seed.focusKeyphrase,
    href: `/ariza-rehberi/${seed.deviceSlug}/${seed.problemSlug}`,
    pageType: "fault-guide",
    source: "created" as const,
    reason: "Teknik arıza niyeti gruplanmış rehberde toplandı.",
  }));
}

function buildErrorCodeEntries(): KeywordMapEntry[] {
  return buildErrorCodePages()
    .filter((page) => page.indexable)
    .map((page) => ({
      query: `${page.brandGroupTitle} ${page.code} hata kodu`,
      href: page.canonicalPath,
      pageType: "error-code",
      source: "created" as const,
      reason: "Doğrulanmış hata kodu detay sayfası canonical hedef.",
    }));
}

function buildStaticServiceEntries(): KeywordMapEntry[] {
  return SERVICE_SLUGS.map(({ query, slug }) => ({
    query,
    href: `/hizmetlerimiz/${slug}`,
    pageType: "service",
    source: "existing" as const,
    reason: "Genel hizmet niyeti mevcut hizmet detay sayfasında.",
  }));
}

const REGIONAL_FAULT_CANNIBALIZATION: KeywordMapEntry[] = [
  {
    query: "Sarıyer klima soğutmuyor",
    href: "/ariza-rehberi/klima/sogutmuyor",
    pageType: "fault-guide",
    source: "created",
    reason: "Bölgesel teknik sorun için ayrı kopya URL açılmadı; rehber canonical.",
  },
  {
    query: "Bosch bulaşık makinesi musluk işareti",
    href: "/ariza-rehberi/bulasik-makinesi/musluk-isareti",
    pageType: "fault-guide",
    source: "created",
    reason: "Marka varyasyonları tek güçlü rehberde toplandı.",
  },
  {
    query: "Siemens bulaşık makinesi musluk işareti",
    href: "/ariza-rehberi/bulasik-makinesi/musluk-isareti",
    pageType: "fault-guide",
    source: "created",
    reason: "Aynı teknik niyet ayrı URL üretmeden tek rehberde.",
  },
  {
    query: "Bosch çamaşır makinesi tamiri",
    href: "/markalar/bosch/camasir-makinesi-servisi",
    pageType: "brand-service",
    source: "created",
    reason: "Marka+cihaz ticari niyet marka servis sayfasında.",
  },
];

export const KEYWORD_TO_URL_MAP: KeywordMapEntry[] = [
  ...buildStaticServiceEntries(),
  ...BLOG_CANONICAL,
  ...REGIONAL_FAULT_CANNIBALIZATION,
  ...buildRegionEntries(),
  ...buildBrandEntries(),
  ...buildFaultEntries(),
  ...buildErrorCodeEntries(),
];
