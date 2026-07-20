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

export const CONTENT_DATES = {
  /** Initial programmatic SEO batch publish */
  initialPublish: "2026-03-01T10:00:00.000Z",
  /** Pre-launch QC content refresh */
  qcUpdate: "2026-07-20T12:00:00.000Z",
  /** Technical review stamp for verified content */
  technicalReview: "2026-07-20T12:00:00.000Z",
} as const;
