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
  logo: "/brand/logo-kerem-teknik-servis.png",
  logoFooter: "/brand/logo-kerem-teknik-servis-footer.png",
  logoAlt: "Kerem Teknik Servis — keremteknikservis.com",
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
  { href: "/sss", label: "SSS" },
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
      "Klima, kombi ve beyaz eşya cihazlarınız için planlı bakım, performans kontrolü ve arıza önleme hizmetleri.",
    hasDetailPage: true,
  },
  {
    slug: "yedek-parca-iscilik",
    title: "Yedek Parça ve İşçilik",
    icon: "settings",
    shortDescription:
      "Orijinal ve uyumlu yedek parça temini ile şeffaf işçilik bedeli; onarım öncesi net fiyat bilgisi.",
    hasDetailPage: true,
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
      "İstanbul genelinde split, multi, salon ve inverter klima arızalarında yerinde teşhis, gaz dolumu, filtre temizliği, bakım ve montaj hizmeti sunuyoruz. Kerem Teknik Servis olarak soğutmama, ısıtmama, su akıtma ve koku problemlerine aynı gün müdahale ediyor; onarım öncesi şeffaf fiyat bilgisi paylaşıyor, garantili işçilik ile kalıcı çözüm sağlıyoruz.",
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
      "İstanbul'da kombi arıza, sıcak su, petek ısıtma ve basınç sorunlarında uzman teknisyen kadromuzla yerinde servis veriyoruz. Arıza kodu tespiti, petek temizliği, sezon öncesi kombi bakımı ve parça değişiminde şeffaf fiyatlandırma uyguluyor; onayınız olmadan işlem yapmadan, garantili işçilik ile kış aylarında kesintisiz ısınmanızı hedefliyoruz.",
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
      "Çamaşır makinesi, buzdolabı, bulaşık makinesi, fırın ve ocak dahil tüm beyaz eşya cihazlarınız için İstanbul genelinde yerinde arıza tespiti, bakım ve onarım hizmeti sunuyoruz. Kerem Teknik Servis; ev ve iş yerlerinde aynı gün müdahale, uyumlu yedek parça temini ve garantili işçilik ile cihazlarınızın ömrünü uzatmayı amaçlar.",
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
      "İstanbul'da çamaşır makinesi su almama, boşaltmama, sıkmama, ses ve kapak arızalarında aynı gün yerinde teknik servis sağlıyoruz. Pompa, motor, kayış, elektronik kart ve rulman değişimlerinde önce arızayı net teşhis ediyor, fiyat bilgisini paylaşıyor ve onayınız sonrası garantili onarım gerçekleştiriyoruz.",
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
      "Buzdolabı soğutmama, aşırı buzlanma, motor çalışmama ve gaz kaçağı gibi arızalarda İstanbul genelinde hızlı teknik servis desteği veriyoruz. Kerem Teknik Servis olarak termostat, kompresör, fan ve kapı lastiği değişimlerinde şeffaf fiyat politikası izler; yerinde teşhis sonrası garantili işçilik ile cihazınızı güvenle teslim ederiz.",
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
      "Bulaşık makinesi yıkamama, su almama, boşaltmama, koku ve program hatalarında İstanbul'da yerinde arıza tespiti ve profesyonel onarım hizmeti sunuyoruz. Pompa, rezistans, filtre ve elektronik kart arızalarında uyumlu yedek parça kullanır; onarım öncesi net fiyat bilgisi vererek garantili işçilik ile kalıcı çözüm sağlarız.",
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
      "Fırın, ocak ve ankastre cihazlarda ısıtmama, ateşleme, rezistans ve elektrik bağlantı arızalarına İstanbul genelinde yerinde müdahale ediyoruz. Kerem Teknik Servis; ankastre setlerde güvenli teşhis, şeffaf işçilik bedeli ve orijinal ya da uyumlu parça değişimi ile mutfağınızdaki cihazları kısa sürede tekrar çalışır hale getirir.",
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
  "periyodik-bakim": {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    icon: "handyman",
    description:
      "Klima, kombi ve beyaz eşya cihazlarınız için İstanbul genelinde planlı periyodik bakım, filtre temizliği, gaz ve basınç kontrolü ile performans testi hizmeti sunuyoruz. Düzenli bakım sayesinde enerji tüketimini düşürür, beklenmedik arızaların önüne geçer ve cihaz ömrünü uzatırsınız. Kerem Teknik Servis, sezon öncesi kombi ve yıllık klima bakımında şeffaf fiyat ve garantili işçilik ile yanınızdadır.",
    commonIssues: [],
    scope: [
      "Klima periyodik bakım ve filtre temizliği",
      "Kombi sezon öncesi bakım",
      "Beyaz eşya genel kontrol ve ayar",
      "Gaz ve basınç kontrolleri",
      "Performans testi ve bilgilendirme",
      "Arıza riski önleyici müdahale",
    ],
    relatedFaqIndices: [7, 1, 3],
  },
  "yedek-parca-iscilik": {
    slug: "yedek-parca-iscilik",
    title: "Yedek Parça ve İşçilik",
    icon: "settings",
    description:
      "Klima, kombi ve beyaz eşya onarımlarında orijinal ve uyumlu yedek parça temini ile şeffaf işçilik bedeli sunuyoruz. Parça değişimi öncesi fiyat bilgisi paylaşılır; onayınız olmadan işlem yapılmaz. Kerem Teknik Servis olarak elektronik kart, motor, pompa ve mekanik parça değişimlerinde garanti belgesi ve fatura ile hizmet verir; İstanbul genelinde güvenilir, kaliteli ve uzun ömürlü onarım çözümleri sağlarız.",
    commonIssues: [],
    scope: [
      "Orijinal ve uyumlu yedek parça temini",
      "Şeffaf işçilik ve servis ücreti",
      "Parça ve işçilik garantisi bilgilendirmesi",
      "Klima, kombi ve beyaz eşya yedek parçaları",
      "Elektronik kart ve mekanik parça değişimi",
      "Servis sonrası fatura ve garanti belgesi",
    ],
    relatedFaqIndices: [4, 6, 3],
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
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Deneyimli Ekip",
    description:
      "Sertifikalı teknisyenlerimiz, klima, kombi ve beyaz eşya arızalarında yılların birikimiyle kalıcı çözümler üretir.",
  },
  {
    icon: "speed",
    iconColor: "text-cta",
    iconBg: "bg-cta/10",
    title: "Hızlı Müdahale",
    description:
      "İstanbul genelinde aynı gün servis planlaması yapıyor; acil arızalarda bekleme süresini minimuma indiriyoruz.",
  },
  {
    icon: "shield",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    title: "Garantili İşçilik",
    description:
      "Yapılan onarım ve değiştirilen parçalar için yazılı garanti sunarak hizmet kalitemizi güvence altına alıyoruz.",
  },
  {
    icon: "payments",
    iconColor: "text-gold",
    iconBg: "bg-gold/15",
    title: "Şeffaf Fiyatlandırma",
    description:
      "Servis öncesi net fiyat bilgisi paylaşır; onayınız olmadan ek işlem veya sürpriz maliyet oluşturmayız.",
  },
] as const;

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Talep Oluşturma",
    description:
      "Telefon, WhatsApp veya iletişim formu ile arıza veya bakım talebinizi bize iletin.",
  },
  {
    step: "02",
    title: "Randevu Planlama",
    description:
      "Size en uygun gün ve saat için randevu oluşturur, teknisyen yönlendirmesini netleştiririz.",
  },
  {
    step: "03",
    title: "Yerinde Teşhis",
    description:
      "Uzman teknisyenimiz adresinize gelerek arızayı yerinde tespit eder ve çözüm planını paylaşır.",
  },
  {
    step: "04",
    title: "Onarım ve Teslim",
    description:
      "Onayınız sonrası profesyonel onarım yapılır; cihazınız test edilerek sorunsuz şekilde teslim edilir.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Servis ne kadar sürer?",
    answer:
      "Arızanın türüne göre değişmekle birlikte birçok müdahale aynı gün tamamlanır. Kapsamlı onarım gerektiren durumlarda süre, teknisyenimiz tarafından onayınız alınmadan önce net olarak paylaşılır.",
  },
  {
    question: "Aynı gün servis mümkün mü?",
    answer:
      "Evet. İstanbul genelinde yoğunluğa bağlı olarak aynı gün servis planlaması yapıyoruz. Acil arızalar için telefon veya WhatsApp hattımızdan hızlı talep oluşturabilirsiniz.",
  },
  {
    question: "Hangi cihazlara servis veriyorsunuz?",
    answer:
      "Klima, kombi, çamaşır makinesi, buzdolabı, bulaşık makinesi, fırın, ocak ve ankastre cihazlara yerinde teknik servis hizmeti veriyoruz.",
  },
  {
    question: "İşçilik garantisi var mı?",
    answer:
      "Evet. Gerçekleştirdiğimiz işçilik ve değiştirdiğimiz parçalar için garanti sunuyoruz. Garanti kapsamı servis sonrası tarafınıza yazılı veya sözlü olarak bildirilir.",
  },
  {
    question: "Servis ücreti nasıl belirlenir?",
    answer:
      "Servis ücreti; arıza türü, gerekli yedek parça ve işçilik kapsamına göre belirlenir. Onarım öncesi şeffaf fiyat bilgisi paylaşılır, onayınız olmadan ek işlem yapılmaz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "İstanbul genelinde hizmet veriyoruz. Merkez ofisimiz Eyüpsultan'da olup Gaziosmanpaşa, Sultangazi, Esenler ve çevre ilçelere hızlı servis yönlendirmesi yapıyoruz.",
  },
  {
    question: "Parça değişimi yapıyor musunuz?",
    answer:
      "Evet. Yerinde teşhis sonrası gerekli parça değişimlerini, cihazınıza uygun yedek parçalarla gerçekleştiriyoruz.",
  },
  {
    question: "Klima ve kombi bakımını ne sıklıkla yaptırmalıyım?",
    answer:
      "Klima bakımı yılda en az bir kez, kombi bakımı ise kış sezonu öncesinde yılda bir kez yaptırılması önerilir. Düzenli bakım, arıza riskini azaltır ve cihaz ömrünü uzatır.",
  },
  {
    question: "WhatsApp üzerinden servis talebi oluşturabilir miyim?",
    answer:
      "Evet. WhatsApp hattımızdan arıza bilgisi, adres ve uygun saat paylaşarak hızlıca servis talebi oluşturabilirsiniz.",
  },
  {
    question: "Yerinde servis mi, atölye servisi mi uyguluyorsunuz?",
    answer:
      "Klima, kombi ve beyaz eşya arızalarının büyük bölümünde yerinde servis hizmeti sunuyoruz. Gerekli durumlarda cihazın atölyeye alınması gerekip gerekmediği teknisyenimiz tarafından bilgilendirilir.",
  },
] as const;

/** Ana sayfada gösterilecek SSS adedi */
export const HOME_FAQ_LIMIT = 7;

export const CONTACT_SERVICE_TYPES = [
  "Klima Servisi",
  "Kombi Servisi",
  "Beyaz Eşya Servisi",
  "Çamaşır Makinesi Servisi",
  "Buzdolabı Servisi",
  "Bulaşık Makinesi Servisi",
  "Fırın ve Ocak Servisi",
  "Periyodik Bakım",
  "Yedek Parça ve İşçilik",
  "Diğer",
] as const;

export const HERO_IMAGE = "/images/hero-kerem-teknik-servis.png";

export const SERVICES_HERO_IMAGE = "/images/hero-hizmetlerimiz-kerem-teknik.png";

export const ABOUT_HERO_IMAGE = "/images/hero-hakkimizda-kerem-teknik.png";

export const ABOUT_TIMELINE = [
  {
    year: "2010",
    title: "Kuruluş ve İlk Servis Ağı",
    description:
      "Eyüpsultan merkezli olarak klima ve kombi servisiyle faaliyete başladık; yerel müşteri güvenini temel aldık.",
  },
  {
    year: "2015",
    title: "Beyaz Eşya Hizmetlerinin Eklenmesi",
    description:
      "Çamaşır makinesi, buzdolabı ve bulaşık makinesi servisini portföyümüze ekleyerek kapsamı genişlettik.",
  },
  {
    year: "2020",
    title: "İstanbul Geneline Yayılım",
    description:
      "Servis ağımızı Gaziosmanpaşa, Sultangazi, Esenler ve çevre ilçelere taşıyarak daha hızlı yönlendirme sağladık.",
  },
  {
    year: "2024",
    title: "Dijital Talep ve Şeffaf Süreç",
    description:
      "WhatsApp, telefon ve online form ile talep alımını kolaylaştırdık; onarım öncesi fiyat bilgilendirmesini standart hale getirdik.",
  },
] as const;

export const ABOUT_STORY = {
  title: "İstanbul'da Güvenilir Teknik Servis Deneyimi",
  paragraphs: [
    "Kerem Teknik Servis, Eyüpsultan merkezli olarak İstanbul genelinde klima, kombi ve beyaz eşya cihazlarına yerinde arıza tespiti, bakım ve onarım hizmeti sunar.",
    "Her servis talebinde önce doğru teşhis, ardından şeffaf fiyat bilgisi ve onayınız sonrası profesyonel müdahale ilkesiyle çalışırız. Amacımız yalnızca arızayı gidermek değil; cihazınızın uzun ömürlü ve verimli çalışmasını sağlamaktır.",
    "Aynı gün servis planlaması, garantili işçilik ve müşteri odaklı iletişim anlayışımızla ev ve iş yerlerinizde kesintisiz konfor hedefliyoruz.",
  ],
  missionTitle: "Misyonumuz",
  mission:
    "İstanbul genelinde hızlı, güvenilir ve kalıcı teknik servis çözümleri sunarak her müşterimize şeffaf ve memnuniyet odaklı bir hizmet deneyimi yaşatmak.",
  visionTitle: "Vizyonumuz",
  vision:
    "Bölgenin en güvenilir klima, kombi ve beyaz eşya teknik servis markası olarak sürdürülebilir kalite ve uzmanlıkla fark yaratmak.",
} as const;

export const ABOUT_PILLARS = [
  {
    icon: "business",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Yerel ve Güvenilir",
    description:
      "Eyüpsultan merkezli ekibimizle İstanbul'un birçok ilçesine hızlı servis yönlendirmesi yapıyoruz.",
  },
  {
    icon: "groups",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    title: "Uzman Teknisyen Kadrosu",
    description:
      "Klima, kombi ve beyaz eşya alanında deneyimli teknisyenlerimiz her arızaya kalıcı çözüm üretir.",
  },
  {
    icon: "speed",
    iconColor: "text-cta",
    iconBg: "bg-cta/10",
    title: "Aynı Gün Müdahale",
    description:
      "Acil arızalarda bekleme süresini minimuma indiriyor; uygun randevu planlamasıyla hızlı servis sunuyoruz.",
  },
  {
    icon: "verified",
    iconColor: "text-gold",
    iconBg: "bg-gold/15",
    title: "Garantili İşçilik",
    description:
      "Yapılan onarım ve değiştirilen parçalar için yazılı garanti ile hizmet kalitemizi güvence altına alıyoruz.",
  },
  {
    icon: "payments",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Şeffaf Fiyat Politikası",
    description:
      "Onarım öncesi net fiyat paylaşır; onayınız olmadan ek işlem veya sürpriz maliyet oluşturmayız.",
  },
  {
    icon: "thumb_up",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    title: "Müşteri Memnuniyeti",
    description:
      "Her servis sonrası geri bildirimleri değerlendirerek süreçlerimizi sürekli iyileştiriyoruz.",
  },
] as const;

export const STATS = [
  { value: "15+", label: "Yıllık Sektör Deneyimi", icon: "history" },
  { value: "5000+", label: "Başarılı Servis Kaydı", icon: "handyman" },
  { value: "98%", label: "Müşteri Memnuniyet Oranı", icon: "sentiment_satisfied" },
  { value: "7/24", label: "Ulaşılabilir Destek Hattı", icon: "support_agent" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmet Y.",
    service: "Kombi Servisi",
    rating: 5,
    text: "Kombim kış ortasında arızalandı. Aynı gün geldiler, arızayı net açıkladılar ve sorunu kalıcı şekilde çözdüler. Profesyonel ve güvenilir ekip.",
  },
  {
    name: "Elif K.",
    service: "Klima Servisi",
    rating: 5,
    text: "Klima bakımı için randevu aldım. Temiz, düzenli ve fiyatı önceden bildiren bir hizmet aldım. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet S.",
    service: "Buzdolabı Servisi",
    rating: 5,
    text: "Buzdolabım soğutmuyordu. Teknisyen kısa sürede arızayı tespit etti ve garantili onarım sonrası cihazım sorunsuz çalışıyor.",
  },
  {
    name: "Zeynep A.",
    service: "Çamaşır Makinesi Servisi",
    rating: 4,
    text: "Çamaşır makinem su almıyordu, aynı gün müdahale ettiler. Fiyat bilgisi önceden verildi, süreç boyunca bilgilendirildim.",
  },
] as const;

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "klima-servisi": "/images/services/hero-klima-servisi.png",
  "kombi-servisi": "/images/services/hero-kombi-servisi.png",
  "beyaz-esya-servisi": "/images/services/hero-beyaz-esya-servisi.png",
  "camasir-makinesi-servisi":
    "/images/services/hero-camasir-makinesi-servisi.png",
  "buzdolabi-servisi": "/images/services/hero-buzdolabi-servisi.png",
  "bulasik-makinesi-servisi":
    "/images/services/hero-bulasik-makinesi-servisi.png",
  "firin-ocak-servisi": "/images/services/hero-firin-ocak-servisi.png",
  "periyodik-bakim": "/images/services/hero-periyodik-bakim.png",
  "yedek-parca-iscilik": "/images/services/hero-yedek-parca-iscilik.png",
};

export const SERVICE_IMAGES: Record<string, string> = {
  "klima-servisi": SERVICE_HERO_IMAGES["klima-servisi"],
  "kombi-servisi": SERVICE_HERO_IMAGES["kombi-servisi"],
  "beyaz-esya-servisi": SERVICE_HERO_IMAGES["beyaz-esya-servisi"],
  "camasir-makinesi-servisi": SERVICE_HERO_IMAGES["camasir-makinesi-servisi"],
  "buzdolabi-servisi": SERVICE_HERO_IMAGES["buzdolabi-servisi"],
  "bulasik-makinesi-servisi": SERVICE_HERO_IMAGES["bulasik-makinesi-servisi"],
  "firin-ocak-servisi": SERVICE_HERO_IMAGES["firin-ocak-servisi"],
  "periyodik-bakim": SERVICE_HERO_IMAGES["periyodik-bakim"],
  "yedek-parca-iscilik": SERVICE_HERO_IMAGES["yedek-parca-iscilik"],
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

export function getServiceHeroImage(slug: string): string {
  return (
    SERVICE_HERO_IMAGES[slug] ??
    SERVICE_IMAGES[slug] ??
    HERO_IMAGE
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
