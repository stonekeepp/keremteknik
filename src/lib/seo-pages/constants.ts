export const INDEPENDENT_SERVICE_DISCLAIMER =
  "Kerem Teknik Servis bağımsız özel teknik servis olarak hizmet verir. Sayfada adı geçen markaların yetkili servisi değildir. Marka adları yalnızca servis kapsamını açıklamak için kullanılır.";

export const DISTANCE_DISCLAIMER =
  "Merkez servis noktası ile ilçe merkezi arasındaki mesafe yaklaşık kuş uçuşu hesaplanmıştır; yol mesafesi veya varış süresi değildir.";

export const ERROR_CODE_MODEL_WARNING =
  "Hata kodu anlamı modele ve üretim yılına göre değişebilir. Kesin teşhis için cihaz etiketindeki model bilgisiyle kontrol edilmelidir.";

export const SAFETY_ELECTRICAL =
  "Elektrikli cihazlarda fişi çekmeden iç aksama müdahale etmeyin. Islak ellerle priz veya panel temasından kaçının.";

export const SAFETY_WATER =
  "Su kaçağı veya birikintisi varsa cihazı kapatın; elektrik teması riskine karşı prizi kapatın ve servis çağırın.";

export const SAFETY_GAS =
  "Gaz veya yanma kokusu hissederseniz cihazı kapatın, havalandırın ve acil durumlarda yetkili acil hatları arayın.";

export const STRIP_SIMILARITY_PATTERNS = [
  INDEPENDENT_SERVICE_DISCLAIMER,
  DISTANCE_DISCLAIMER,
  ERROR_CODE_MODEL_WARNING,
  "Arıza Kaydı Oluşturun",
  "Hemen Ara",
  "WhatsApp",
  "İhtiyacınıza uygun sayfaya doğrudan geçebilirsiniz.",
] as const;

/** Homepage / hub QC / fault-guide related regions (featured UX). */
export const PRIORITY_REGION_SLUGS = [
  "alibeykoy",
  "eyupsultan",
  "gokturk",
  "gaziosmanpasa",
  "kagithane",
] as const;

/**
 * Districts that get `/servis-bolgeleri/[bolge]/[hizmet]` pages.
 * Includes Ads/SEO expansion districts beyond homepage priority set.
 */
export const REGION_SERVICE_REGION_SLUGS = [
  "alibeykoy",
  "eyupsultan",
  "gokturk",
  "gaziosmanpasa",
  "kagithane",
  "sisli",
  "sariyer",
  "besiktas",
  "bayrampasa",
  "sultangazi",
] as const;

/**
 * Indexable region×service pages. Includes all previously indexed priority
 * districts — never noindex a URL that was already in the indexable set.
 * New expansion districts stay noindex until explicit rollout.
 */
export const INDEXABLE_REGION_SERVICE_REGION_SLUGS = [
  "alibeykoy",
  "eyupsultan",
  "gokturk",
  "gaziosmanpasa",
  "kagithane",
] as const;

export const REGION_SERVICE_SLUGS = [
  "klima-servisi",
  "klima-gaz-dolumu",
  "klima-bakimi",
  "klima-montaji",
  "klima-ariza-tamiri",
  "klima-temizligi",
  "acil-klima-servisi",
  "kombi-servisi",
  "beyaz-esya-servisi",
] as const;

/** Extra district×device pages — Eyüpsultan only (white-goods long-tail). */
export const EYUPSULTAN_EXTRA_SERVICE_SLUGS = [
  "camasir-makinesi-servisi",
  "buzdolabi-servisi",
  "bulasik-makinesi-servisi",
] as const;

/** Göktürk is a neighborhood spoke — klima only, not a full service clone. */
export const GOKTURK_SERVICE_SLUGS = ["klima-servisi"] as const;

export function getRegionServiceSlugs(regionSlug: string): readonly string[] {
  if (
    !(REGION_SERVICE_REGION_SLUGS as readonly string[]).includes(regionSlug)
  ) {
    return [];
  }
  if (regionSlug === "eyupsultan") {
    return [...REGION_SERVICE_SLUGS, ...EYUPSULTAN_EXTRA_SERVICE_SLUGS];
  }
  if (regionSlug === "gokturk") {
    return GOKTURK_SERVICE_SLUGS;
  }
  return REGION_SERVICE_SLUGS;
}

export function hasRegionServicePage(
  regionSlug: string,
  serviceSlug: string,
): boolean {
  return getRegionServiceSlugs(regionSlug).includes(serviceSlug);
}

export const CONTENT_DATES = {
  /** Initial programmatic SEO batch publish */
  initialPublish: "2026-03-01T10:00:00.000Z",
  /** Alibeyköy/Eyüpsultan klima cluster + Göktürk spoke */
  qcUpdate: "2026-08-24T10:00:00.000Z",
  /** Technical review stamp for verified content */
  technicalReview: "2026-08-24T10:00:00.000Z",
} as const;
