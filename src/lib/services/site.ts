export const SITE = {
  name: "Kerem Teknik Servis",
  phone: "0551 397 25 26",
  phoneTel: "05513972526",
  whatsapp: "905513972526",
  address: "Alibeyköy, Uygar Sk. No:8 A",
  city: "Eyüpsultan / İstanbul",
  fullAddress: "Alibeyköy, Uygar Sk. No:8 A, Eyüpsultan / İstanbul",
  workingHours: {
    weekday: "Hafta içi: 08:00 - 20:00",
    saturday: "Cumartesi: 09:00 - 18:00",
  },
  description:
    "Klima, kombi ve beyaz eşya servisinde hızlı, güvenilir ve profesyonel teknik destek.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const FOOTER_CORPORATE = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export type ServiceItem = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  hasDetailPage: boolean;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "klima-servisi",
    title: "Klima Servisi",
    icon: "ac_unit",
    shortDescription:
      "Klimalarınızın bakım, onarım ve montaj işlemlerini uzman ekibimizle hızlı ve güvenilir olarak gerçekleştiriyoruz.",
    hasDetailPage: true,
  },
  {
    slug: "kombi-servisi",
    title: "Kombi Servisi",
    icon: "thermostat",
    shortDescription:
      "Kış aylarında mağdur olmamanız için kombi bakımı ve arıza onarımında profesyonel destek sağlıyoruz.",
    hasDetailPage: true,
  },
  {
    slug: "beyaz-esya-servisi",
    title: "Beyaz Eşya Servisi",
    icon: "kitchen",
    shortDescription:
      "Evlerinizin vazgeçilmezi olan tüm beyaz eşyalarınız için güvenilir tamir ve periyodik bakım hizmeti.",
    hasDetailPage: true,
  },
  {
    slug: "camasir-makinesi-servisi",
    title: "Çamaşır Makinesi Servisi",
    icon: "local_laundry_service",
    shortDescription:
      "Çamaşır makinelerinizdeki su sızıntısı, sesli çalışma veya yıkama problemlerine kesin çözümler.",
    hasDetailPage: true,
  },
  {
    slug: "buzdolabi-servisi",
    title: "Buzdolabı Servisi",
    icon: "severe_cold",
    shortDescription:
      "Soğutmama, buzlanma veya motor arızaları gibi buzdolabı sorunlarınıza aynı gün içinde müdahale ediyoruz.",
    hasDetailPage: true,
  },
  {
    slug: "bulasik-makinesi-servisi",
    title: "Bulaşık Makinesi Servisi",
    icon: "dishwasher_gen",
    shortDescription:
      "Bulaşık makinelerinizin temiz yıkamama veya su boşaltmama sorunlarını güvenilir parçalarla onarıyoruz.",
    hasDetailPage: true,
  },
  {
    slug: "firin-ocak-servisi",
    title: "Fırın ve Ocak Servisi",
    icon: "microwave",
    shortDescription:
      "Fırın, ocak ve ankastre cihaz arızalarında profesyonel teknik servis ve bakım hizmeti sunuyoruz.",
    hasDetailPage: true,
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    icon: "handyman",
    shortDescription:
      "Klima, kombi ve beyaz eşya cihazlarınız için düzenli bakım ve performans kontrolü hizmetleri.",
    hasDetailPage: false,
  },
  {
    slug: "yedek-parca-iscilik",
    title: "Yedek Parça ve İşçilik",
    icon: "settings",
    shortDescription:
      "Orijinal ve uyumlu yedek parça temini ile şeffaf işçilik bedeli sunuyoruz.",
    hasDetailPage: false,
  },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  commonIssues: string[];
  scope?: string[];
  relatedFaqIndices?: number[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "klima-servisi": {
    slug: "klima-servisi",
    title: "Klima Servisi",
    icon: "ac_unit",
    description:
      "Klima arızaları, bakım, gaz kontrolü, temizlik ve montaj işlemleri için deneyimli teknik ekibimizle hızlı ve güvenilir servis hizmeti sunuyoruz.",
    commonIssues: [
      "Klima soğutmuyor",
      "Klima ısıtmıyor",
      "Klimadan su akıyor",
      "Klima sesli çalışıyor",
      "Klima kötü koku yapıyor",
      "Klima gaz eksiltiyor",
      "Kumanda veya elektronik kart arızası",
    ],
    relatedFaqIndices: [0, 1, 6, 7],
  },
  "kombi-servisi": {
    slug: "kombi-servisi",
    title: "Kombi Servisi",
    icon: "thermostat",
    description:
      "Kombi arızaları, sıcak su problemleri, petek ısıtma sorunları ve periyodik bakım ihtiyaçlarınız için profesyonel teknik servis desteği sunuyoruz.",
    commonIssues: [
      "Kombi çalışmıyor",
      "Sıcak su gelmiyor",
      "Petekler ısınmıyor",
      "Kombi basınç düşürüyor",
      "Kombi ses yapıyor",
      "Kombi arıza kodu veriyor",
      "Periyodik bakım ihtiyacı",
    ],
    relatedFaqIndices: [0, 1, 6, 7],
  },
  "beyaz-esya-servisi": {
    slug: "beyaz-esya-servisi",
    title: "Beyaz Eşya Servisi",
    icon: "kitchen",
    description:
      "Ev ve iş yerlerinde kullanılan beyaz eşya cihazları için arıza tespiti, bakım, onarım ve parça değişimi hizmetleri sunuyoruz.",
    commonIssues: [],
    scope: [
      "Çamaşır makinesi",
      "Buzdolabı",
      "Bulaşık makinesi",
      "Fırın",
      "Ocak",
      "Ankastre cihazlar",
    ],
    relatedFaqIndices: [2, 3, 6],
  },
  "camasir-makinesi-servisi": {
    slug: "camasir-makinesi-servisi",
    title: "Çamaşır Makinesi Servisi",
    icon: "local_laundry_service",
    description:
      "Çamaşır makinesi arızalarında hızlı teşhis ve profesyonel onarım hizmeti sunuyoruz.",
    commonIssues: [
      "Su almıyor",
      "Su boşaltmıyor",
      "Sıkma yapmıyor",
      "Sesli çalışıyor",
      "Kapak açılmıyor",
      "Deterjan almıyor",
      "Elektronik kart arızası",
    ],
    relatedFaqIndices: [0, 2, 6],
  },
  "buzdolabi-servisi": {
    slug: "buzdolabi-servisi",
    title: "Buzdolabı Servisi",
    icon: "severe_cold",
    description:
      "Buzdolabı soğutma, buzlanma ve motor arızalarında aynı gün teknik servis desteği sağlıyoruz.",
    commonIssues: [
      "Soğutmuyor",
      "Aşırı buzlanma yapıyor",
      "Sesli çalışıyor",
      "Motor devreye girmiyor",
      "Gaz kaçağı",
      "Kapı lastiği problemi",
      "Dijital gösterge arızası",
    ],
    relatedFaqIndices: [0, 2, 6],
  },
  "bulasik-makinesi-servisi": {
    slug: "bulasik-makinesi-servisi",
    title: "Bulaşık Makinesi Servisi",
    icon: "dishwasher_gen",
    description:
      "Bulaşık makinesi yıkama, su alma ve boşaltma sorunlarında uzman teknik destek sunuyoruz.",
    commonIssues: [
      "Yıkamıyor",
      "Su almıyor",
      "Su boşaltmıyor",
      "Koku yapıyor",
      "Bardakları lekeli çıkarıyor",
      "Sesli çalışıyor",
      "Program tamamlamıyor",
    ],
    relatedFaqIndices: [0, 2, 6],
  },
  "firin-ocak-servisi": {
    slug: "firin-ocak-servisi",
    title: "Fırın ve Ocak Servisi",
    icon: "microwave",
    description:
      "Fırın, ocak ve ankastre cihaz arızalarında güvenilir teknik servis ve bakım hizmeti sunuyoruz.",
    commonIssues: [
      "Fırın ısıtmıyor",
      "Ocak yanmıyor",
      "Ankastre arızası",
      "Rezistans problemi",
      "Düğme / çakmak arızası",
      "Elektrik bağlantı problemi",
    ],
    relatedFaqIndices: [0, 2, 6],
  },
};

export const TRUST_BADGES = [
  { icon: "timer", label: "Aynı Gün Servis" },
  { icon: "verified", label: "Garantili İşçilik" },
  { icon: "engineering", label: "Uzman Teknik Ekip" },
  { icon: "location_on", label: "İstanbul Geneli Hizmet" },
] as const;

export const WHY_US = [
  {
    icon: "groups",
    title: "Deneyimli Ekip",
    description:
      "Alanında uzman teknisyenlerimizle her arızaya profesyonel çözüm sunuyoruz.",
  },
  {
    icon: "speed",
    title: "Hızlı Müdahale",
    description:
      "Aynı gün servis imkânı ile arızalarınıza en kısa sürede müdahale ediyoruz.",
  },
  {
    icon: "shield",
    title: "Garantili İşçilik",
    description:
      "Yapılan işçilik ve değişen parçalar için garanti sağlıyoruz.",
  },
  {
    icon: "payments",
    title: "Şeffaf Fiyatlandırma",
    description:
      "Servis öncesi net bilgilendirme ile sürpriz maliyet oluşmasını önlüyoruz.",
  },
] as const;

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Talep Oluşturma",
    description: "Telefon veya form ile servis talebinizi iletin.",
  },
  {
    step: "02",
    title: "Randevu Planlama",
    description: "Size uygun gün ve saatte randevu oluşturalım.",
  },
  {
    step: "03",
    title: "Yerinde Teşhis",
    description: "Teknisyenimiz arızayı yerinde tespit eder.",
  },
  {
    step: "04",
    title: "Onarım ve Teslim",
    description: "Onayınız sonrası onarım yapılır, cihaz teslim edilir.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Servis ne kadar sürer?",
    answer:
      "Arızanın türüne göre değişmekle birlikte çoğu müdahale aynı gün içinde tamamlanır. Detaylı onarım gerektiren durumlarda süre teknisyenimiz tarafından bilgilendirilir.",
  },
  {
    question: "Aynı gün servis mümkün mü?",
    answer:
      "Evet, yoğunluğa bağlı olarak İstanbul genelinde aynı gün servis hizmeti sunuyoruz. Acil durumlar için bizi arayabilirsiniz.",
  },
  {
    question: "Hangi cihazlara servis veriyorsunuz?",
    answer:
      "Klima, kombi, çamaşır makinesi, buzdolabı, bulaşık makinesi, fırın, ocak ve ankastre cihazlara teknik servis hizmeti veriyoruz.",
  },
  {
    question: "İşçilik garantisi var mı?",
    answer:
      "Evet, gerçekleştirdiğimiz işçilik ve değiştirdiğimiz parçalar için garanti sunuyoruz. Detaylar servis sonrası paylaşılır.",
  },
  {
    question: "Servis ücreti nasıl belirlenir?",
    answer:
      "Servis ücreti arızanın türü, gerekli parça ve işçilik kapsamına göre belirlenir. Onarım öncesi şeffaf fiyat bilgisi verilir.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "İstanbul genelinde, özellikle Eyüpsultan ve çevre ilçelerde hızlı servis hizmeti sunuyoruz.",
  },
  {
    question: "Parça değişimi yapıyor musunuz?",
    answer:
      "Evet, arıza tespiti sonrası gerekli parça değişimlerini uygun yedek parçalarla gerçekleştiriyoruz.",
  },
  {
    question: "Klima ve kombi bakımını ne sıklıkla yaptırmalıyım?",
    answer:
      "Klima bakımı yılda en az bir, kombi bakımı ise yılda bir kez kış sezonu öncesinde yaptırılması önerilir.",
  },
] as const;

export const CONTACT_SERVICE_TYPES = [
  "Klima Servisi",
  "Kombi Servisi",
  "Beyaz Eşya Servisi",
  "Çamaşır Makinesi Servisi",
  "Buzdolabı Servisi",
  "Bulaşık Makinesi Servisi",
  "Fırın ve Ocak Servisi",
  "Periyodik Bakım",
  "Diğer",
] as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80";

export const STATS = [
  { value: "15+", label: "Yıllık Deneyim", icon: "history" },
  { value: "5000+", label: "Tamamlanan Servis", icon: "handyman" },
  { value: "98%", label: "Müşteri Memnuniyeti", icon: "sentiment_satisfied" },
  { value: "7/24", label: "Destek Hattı", icon: "support_agent" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmet Y.",
    service: "Kombi Servisi",
    rating: 5,
    text: "Kombim kış ortasında arızalandı, aynı gün geldiler ve sorunu çözdüler. Çok profesyonel bir ekip.",
  },
  {
    name: "Elif K.",
    service: "Klima Servisi",
    rating: 5,
    text: "Klima bakımı için randevu aldım, hem temiz hem de uygun fiyatlı bir hizmet aldım. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet S.",
    service: "Buzdolabı Servisi",
    rating: 5,
    text: "Buzdolabım soğutmuyordu, teknisyen hızlıca arızayı tespit etti ve garantili onarım yaptı.",
  },
  {
    name: "Zeynep A.",
    service: "Çamaşır Makinesi Servisi",
    rating: 4,
    text: "Çamaşır makinem su almıyordu, aynı gün müdahale ettiler. Fiyat bilgisi önceden verildi, sürpriz olmadı.",
  },
] as const;

export const SERVICE_IMAGES: Record<string, string> = {
  "klima-servisi":
    "https://images.unsplash.com/photo-1631545806609-5d8f29e8c100?w=800&q=80",
  "kombi-servisi":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "beyaz-esya-servisi":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "camasir-makinesi-servisi":
    "https://images.unsplash.com/photo-1626806819282-2c1dc01a5b0a?w=800&q=80",
  "buzdolabi-servisi":
    "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
  "bulasik-makinesi-servisi":
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  "firin-ocak-servisi":
    "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  "periyodik-bakim":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  "yedek-parca-iscilik":
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
};

export const SERVICE_AREAS = [
  "Eyüpsultan",
  "Gaziosmanpaşa",
  "Sultangazi",
  "Esenler",
  "Bayrampaşa",
  "Fatih",
  "Kağıthane",
  "Sarıyer",
  "Beşiktaş",
  "Şişli",
  "Beyoğlu",
  "Bağcılar",
] as const;

export function getServiceImage(slug: string): string {
  return (
    SERVICE_IMAGES[slug] ??
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
  );
}

export function getServiceHref(slug: string): string {
  const service = SERVICES.find((s) => s.slug === slug);
  if (service?.hasDetailPage) {
    return `/hizmetlerimiz/${slug}`;
  }
  return "/hizmetlerimiz";
}

export function getServiceDetailSlugs(): string[] {
  return SERVICES.filter((s) => s.hasDetailPage).map((s) => s.slug);
}
