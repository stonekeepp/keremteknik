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

export const PRIORITY_REGION_SLUGS = [
  "alibeykoy",
  "eyupsultan",
  "gaziosmanpasa",
  "kagithane",
] as const;

export const REGION_SERVICE_SLUGS = [
  "klima-servisi",
  "kombi-servisi",
  "beyaz-esya-servisi",
] as const;

/** Extra district×device pages — Eyüpsultan only (white-goods long-tail). */
export const EYUPSULTAN_EXTRA_SERVICE_SLUGS = [
  "camasir-makinesi-servisi",
  "buzdolabi-servisi",
  "bulasik-makinesi-servisi",
] as const;

export function getRegionServiceSlugs(regionSlug: string): readonly string[] {
  if (!PRIORITY_REGION_SLUGS.includes(regionSlug as (typeof PRIORITY_REGION_SLUGS)[number])) {
    return [];
  }
  if (regionSlug === "eyupsultan") {
    return [...REGION_SERVICE_SLUGS, ...EYUPSULTAN_EXTRA_SERVICE_SLUGS];
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
  /** Eyüpsultan local SEO content + linking refresh */
  qcUpdate: "2026-07-29T10:00:00.000Z",
  /** Technical review stamp for verified content */
  technicalReview: "2026-07-29T10:00:00.000Z",
} as const;
