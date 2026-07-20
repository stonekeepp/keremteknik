import { slugifyTurkish } from "./slug";

export type BrandServiceSeed = {
  brandSlug: string;
  brandName: string;
  deviceSlug: string;
  deviceTitle: string;
  servisSlug: string;
  focusKeyphrase: string;
  commonIssues: string[];
  safeChecks: string[];
  uniqueIntro: string;
  sections: { id: string; title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedErrorGroups?: string[];
  relatedFaultSlugs?: string[];
};

type DeviceKey = "camasir" | "bulasik" | "buzdolabi" | "klima" | "kombi";

type DeviceConfig = {
  deviceSlug: string;
  deviceTitle: string;
  servisSlug: string;
  deviceLabel: string;
  faultSlugs: string[];
};

const DEVICE_CONFIG: Record<DeviceKey, DeviceConfig> = {
  camasir: {
    deviceSlug: "camasir-makinesi",
    deviceTitle: "Çamaşır Makinesi",
    servisSlug: "camasir-makinesi-servisi",
    deviceLabel: "çamaşır makinesi",
    faultSlugs: ["sikma-yapmiyor", "su-kaciriyor", "calismiyor"],
  },
  bulasik: {
    deviceSlug: "bulasik-makinesi",
    deviceTitle: "Bulaşık Makinesi",
    servisSlug: "bulasik-makinesi-servisi",
    deviceLabel: "bulaşık makinesi",
    faultSlugs: ["koku-yapiyor", "yikamiyor", "su-kalmiyor"],
  },
  buzdolabi: {
    deviceSlug: "buzdolabi",
    deviceTitle: "Buzdolabı",
    servisSlug: "buzdolabi-servisi",
    deviceLabel: "buzdolabı",
    faultSlugs: ["sogutmuyor", "buzlaniyor", "ses-yapiyor"],
  },
  klima: {
    deviceSlug: "klima",
    deviceTitle: "Klima",
    servisSlug: "klima-servisi",
    deviceLabel: "klima",
    faultSlugs: ["sogutmuyor", "isitmiyor", "su-damlatiyor"],
  },
  kombi: {
    deviceSlug: "kombi",
    deviceTitle: "Kombi",
    servisSlug: "kombi-servisi",
    deviceLabel: "kombi",
    faultSlugs: ["isitmiyor", "sicak-su-yok", "basinc-dusuk"],
  },
};

const ERROR_GROUP_BY_BRAND_DEVICE: Partial<Record<string, string[]>> = {
  "bosch-camasir": ["bosch-siemens-profilo"],
  "siemens-camasir": ["bosch-siemens-profilo"],
  "profilo-camasir": ["bosch-siemens-profilo"],
  "arcelik-camasir": ["arcelik-beko"],
  "beko-camasir": ["arcelik-beko"],
  "vestel-camasir": ["vestel"],
  "bosch-bulasik": ["bosch-siemens-profilo"],
  "siemens-bulasik": ["bosch-siemens-profilo"],
  "profilo-bulasik": ["bosch-siemens-profilo"],
  "arcelik-bulasik": ["arcelik-beko"],
  "beko-bulasik": ["arcelik-beko"],
  "bosch-klima": ["bosch"],
  "beko-klima": ["beko"],
};

type BrandProfile = {
  name: string;
  origin: string;
  strength: string;
  note: string;
};

const BRAND_PROFILES: Record<string, BrandProfile> = {
  bosch: {
    name: "Bosch",
    origin: "Alman mühendisliği",
    strength: "sessiz çalışma ve dayanıklı motor yapısı",
    note: "Seri 4/6/8 gibi serilerde farklı elektronik kart ve motor kombinasyonları bulunur",
  },
  siemens: {
    name: "Siemens",
    origin: "premium beyaz eşya segmenti",
    strength: "iqdrive motor teknolojisi ve dengeli yıkama performansı",
    note: "Home Connect özellikli modellerde bağlantı sorunları ayrı teşhis gerektirir",
  },
  profilo: {
    name: "Profilo",
    origin: "Türkiye pazarına uygun yerli üretim",
    strength: "yedek parça erişilebilirliği ve pratik kullanım",
    note: "Bosch/Siemens grubu parça uyumluluğu bazı modellerde sınırlı olabilir",
  },
  arcelik: {
    name: "Arçelik",
    origin: "yerli üretim ve geniş servis ağı",
    strength: "fiyat-performans dengesi ve yaygın model çeşitliliği",
    note: "Beko ile ortak platform kullanan modellerde parça kodları benzer olabilir",
  },
  beko: {
    name: "Beko",
    origin: "hacimli üretim ve erişilebilir segment",
    strength: "ekonomik model yelpazesi ve hızlı parça temini",
    note: "Arçelik grubu elektronik kartları model yılına göre farklılık gösterir",
  },
  vestel: {
    name: "Vestel",
    origin: "yerli üretim",
    strength: "uygun fiyatlı model seçenekleri",
    note: "Elektronik kart ve sensör arızalarında model serisi doğrulaması önemlidir",
  },
  miele: {
    name: "Miele",
    origin: "premium Alman segmenti",
    strength: "uzun ömürlü mekanik yapı ve hassas program kontrolü",
    note: "Orijinal parça kullanımı ve kalibrasyon hassasiyeti yüksektir",
  },
  samsung: {
    name: "Samsung",
    origin: "dijital inverter teknolojisi",
    strength: "akıllı sensörler ve enerji verimli kompresör yapısı",
    note: "Digital Inverter kompresör arızalarında özel test ekipmanı gerekebilir",
  },
  "general-electric": {
    name: "General Electric",
    origin: "Amerikan kökenli buzdolabı serileri",
    strength: "geniş hacimli modeller ve dayanıklı soğutma ünitesi",
    note: "Eski ve yeni serilerde gaz tipi ve kart yapısı farklılık gösterebilir",
  },
  westinghouse: {
    name: "Westinghouse",
    origin: "Avustralya/Avrupa kökenli buzdolabı markası",
    strength: "no-frost sistemli modellerde dengeli soğutma",
    note: "Türkiye'deki eski stok modellerde parça tedariki planlı yapılmalıdır",
  },
  mitsubishi: {
    name: "Mitsubishi",
    origin: "Japon inverter klima teknolojisi",
    strength: "verimli inverter kompresör ve sessiz iç ünite",
    note: "R32 gazlı yeni nesil modellerde kaçak testi özel ekipman ister",
  },
  daikin: {
    name: "Daikin",
    origin: "klima sektöründe uzman Japon markası",
    strength: "inverter teknolojisi ve geniş kapasite aralığı",
    note: "VRV ve split serileri farklı servis prosedürleri gerektirir",
  },
  midea: {
    name: "Midea",
    origin: "Çin kökenli global klima üreticisi",
    strength: "uygun fiyatlı inverter modeller ve hızlı yedek parça",
    note: "Carrier ve diğer OEM markalarla ortak platform kullanımı yaygındır",
  },
  baymak: {
    name: "Baymak",
    origin: "Türkiye'nin yerli kombi markası",
    strength: "yaygın kurulum tabanı ve erişilebilir yedek parça",
    note: "Yoğuşmalı ve hermetik modellerde bakım aralıkları farklıdır",
  },
  demirdokum: {
    name: "Demirdöküm",
    origin: "Türkiye'de köklü ısıtma markası",
    strength: "dayanıklı eşanjör yapısı ve geniş servis ağı",
    note: "Atron, Nitron gibi serilerde kart ve pompa kodları değişir",
  },
  eca: {
    name: "ECA",
    origin: "yerli kombi ve ısıtma çözümleri",
    strength: "fiyat-performans odaklı yoğuşmalı modeller",
    note: "Proteus ve Confeo serilerinde elektronik kart versiyonları farklıdır",
  },
  buderus: {
    name: "Buderus",
    origin: "Alman ısıtma teknolojisi",
    strength: "yüksek verimli yoğuşmalı kombi yapısı",
    note: "Bosch grubu parça uyumluluğu bazı modellerde geçerlidir",
  },
  vaillant: {
    name: "Vaillant",
    origin: "premium Alman kombi segmenti",
    strength: "verimli yanma odası ve hassas sıcaklık kontrolü",
    note: "ecoTEC serilerinde sensör kalibrasyonu özel prosedür gerektirir",
  },
  protherm: {
    name: "Protherm",
    origin: "Vaillant grubu Çek kökenli marka",
    strength: "kompakt yoğuşmalı modeller ve pratik montaj",
    note: "Vaillant ile ortak platform kullanan modellerde parça kodları benzer olabilir",
  },
  ferroli: {
    name: "Ferroli",
    origin: "İtalyan kombi üreticisi",
    strength: "kompakt tasarım ve geniş model yelpazesi",
    note: "Divatech ve Bluehelix serilerinde kart yapısı farklılık gösterir",
  },
  viessmann: {
    name: "Viessmann",
    origin: "premium Alman ısıtma sistemleri",
    strength: "yüksek verim ve uzun ömürlü eşanjör",
    note: "Vitodens serilerinde servis yazılımı ile teşhis tercih edilir",
  },
};

const DEVICE_ISSUES: Record<DeviceKey, string[][]> = {
  camasir: [
    ["Kazan dönmüyor veya sıkma yapmıyor", "Motor kayışı gevşemesi veya kopması", "Pompa tıkanıklığı ve su tahliye sorunu", "Elektronik kart arızası", "Amortisör veya rulman aşınması", "Kapı kilidi sensör hatası"],
    ["Su kaçağı veya tambur altında birikinti", "Tahliye filtresi tıkanıklığı", "Giriş vanası arızası", "Conta ve hortum yaşlanması", "Dengesiz yükleme kaynaklı sarsıntı", "Program yarıda kalıyor"],
    ["Aşırı gürültü ve titreşim", "Rulman veya bilya arızası", "Yabancı cisim (madeni para, düğme)", "Taşıma emniyet vidalarının çıkarılmaması", "Amortisör değişimi gerektiren aşınma", "Motor rulmanı arızası"],
    ["Su almıyor veya yavaş dolduruyor", "Giriş vanası filtresi tıkanıklığı", "Su basıncı düşüklüğü", "Aquastop hortumu arızası", "Elektronik kart su giriş sinyali hatası", "Program seçici arızası"],
    ["Koku veya küf oluşumu", "Filtre ve lastik contada birikinti", "Düşük sıcaklıkta yıkama alışkanlığı", "Kapak contası nem tutması", "Tambur temizliği ihtiyacı", "Tahliye hattı tersiyon sorunu"],
    ["Ekranda hata kodu görünüyor", "Sensör okuma hatası", "Motor sürücü kartı arızası", "Sıcaklık sensörü hatası", "Tahliye pompası arızası", "Model bazlı elektronik kart sorunu"],
    ["Çamaşırlar ıslak kalıyor", "Sıkma devri düşük", "Pompa verimsiz çalışıyor", "Motor zayıflaması", "Program ayarı hatası", "Aşırı yükleme"],
  ],
  bulasik: [
    ["Bulaşıklar temiz çıkmıyor", "Püskürtme kolu tıkanıklığı", "Düşük su sıcaklığı", "Deterjan dozaj hatası", "Filtre kirlenmesi", "Su basıncı yetersizliği", "Program süresi kısaltılmış"],
    ["Makineden koku geliyor", "Filtre ve pompa bölgesinde birikinti", "Sifon bağlantısı sorunu", "Düşük sıcaklıkta yıkama", "Uzun süre kapalı kalma", "Tahliye hattı tersiyonu"],
    ["Su tahliye etmiyor", "Pompa tıkanıklığı", "Tahliye hortumu bükülmesi", "Filtre tıkanıklığı", "Sifon tıkanıklığı", "Pompa motoru arızası"],
    ["Kapı altından veya hortumdan kaçak", "Kapı contası yıpranması", "Aquastop hortumu arızası", "Bağlantı kelepçesi gevşemesi", "Pompa contası arızası", "İç hazne çatlak"],
    ["Program yarıda kesiliyor", "Su giriş vanası arızası", "Isıtıcı eleman arızası", "Elektronik kart hatası", "Kapı kilidi sensörü", "Aşırı köpük algılama"],
    ["Kurutma performansı düşük", "Zeolit veya ısı pompası arızası", "Kapak açılması gecikmesi", "Program seçimi hatası", "Fan arızası", "Isıtıcı zayıflaması"],
    ["Ekranda hata kodu", "Su sensörü arızası", "Turbidite sensörü hatası", "Isıtıcı termostat arızası", "Elektronik kart sorunu", "Model bazlı yazılım hatası"],
  ],
  buzdolabi: [
    ["Soğutmuyor veya zayıf soğutma", "Kompresör arızası", "Gaz kaçağı", "Fan motoru durması", "Termostat veya kart arızası", "Kapı contası bozukluğu", "Aşırı buzlanma hava kanalını tıkamış"],
    ["Dondurucu çalışıyor soğutucu bölüm soğutmuyor", "Buzlanmış hava kanalı", "Evaporatör fanı arızası", "Defrost sistemi arızası", "Sensör okuma hatası", "Kart arızası"],
    ["Aşırı buzlanma", "Defrost ısıtıcısı arızası", "Defrost termostatı arızası", "Kapı contası hatası", "Sık kapı açılması", "Nemli gıda yerleşimi"],
    ["Su birikintisi veya damlama", "Tahliye kanalı tıkanıklığı", "Defrost suyu haznesi dolu", "Evaporatör tepsisi kırığı", "Arka duvar buzlanması", "Kapı contası nem geçirgenliği"],
    ["Anormal ses veya titreşim", "Kompresör ayakları gevşek", "Fan pervanesi buzlanması", "Kondenser fan arızası", "Buzlanmış evaporatör", "Kompresör rulmanı aşınması"],
    ["Kapı düzgün kapanmıyor", "Conta deformasyonu", "Menteşe ayarı bozuk", "Dolap dengesiz duruyor", "Ağır raf yüklemesi", "Conta kirlenmesi"],
    ["Enerji tüketimi arttı", "Kondenser kirlenmesi", "Gaz basıncı düşüklüğü", "Kapı contası hatası", "Kompresör sürekli çalışıyor", "Sensör kalibrasyonu bozuk"],
  ],
  klima: [
    ["Soğutmuyor veya yetersiz soğutma", "Gaz kaçağı veya düşük gaz basıncı", "Kompresör arızası", "İç ünite fan motoru arızası", "Filtre tıkanıklığı", "Dış ünite kondenser kirlenmesi", "Inverter kart arızası"],
    ["Isıtmıyor", "Dört yollu vana arızası", "Gaz eksikliği", "Dış ünite defrost sorunu", "Elektronik kart arızası", "Oda sensörü hatası", "Kompresör çalışmıyor"],
    ["İç üniteden su damlatıyor", "Tahliye hattı tıkanıklığı", "İç ünite eğimi yanlış", "Drenaj pompası arızası", "Buzlanma sonrası erime", "Hava kanalı tıkanıklığı"],
    ["Kötü koku", "İç ünite bakteri ve küf birikimi", "Drenaj suyu birikintisi", "Filtre kirlenmesi", "Drenaj hattı tersiyonu", "Uzun süre kullanılmama"],
    ["Dış ünite çalışmıyor", "Kondenser fan arızası", "Kompresör koruması devrede", "Elektrik beslemesi sorunu", "Kart arızası", "Aşırı yük koruması"],
    ["Gürültülü çalışma", "Fan motoru rulmanı", "Kompresör titreşimi", "Gevşek montaj", "Buzlanma ve çözülme sesi", "Dış ünite pervane dengesizliği"],
    ["Uzaktan kumanda veya bağlantı sorunu", "Kumanda pili zayıf", "IR alıcı arızası", "Wi-Fi modül arızası", "Kart iletişim hatası", "Programlama kaybı"],
  ],
  kombi: [
    ["Petekler ısınmıyor", "Sirkülasyon pompası arızası", "Hava yapma ihtiyacı", "Üç yollu vana arızası", "Kart arızası", "Basınç düşüklüğü", "Termostat ayarı"],
    ["Sıcak su gelmiyor veya kesiliyor", "Plaka eşanjör kireçlenmesi", "NTC sensör arızası", "Üç yollu vana sıkışması", "Akış sensörü hatası", "Minimum debi sağlanmıyor"],
    ["Basınç düşüyor veya hata kodu", "Tesisat kaçağı", "Genleşme tankı arızası", "Emniyet ventili arızası", "Radyatör vanası kaçağı", "Eşanjör çatlağı"],
    ["Ateşleme yapmıyor", "Gaz valfi arızası", "İyonizasyon elektrodu kirlenmesi", "Kart arızası", "Gaz basıncı düşük", "Baca sensörü hatası"],
    ["Sürekli yanma veya kısa devre", "Oda termostatı arızası", "NTC sensör hatası", "Kart yazılım sorunu", "Pompa sıkışması", "Eşanjör tıkanıklığı"],
    ["Gürültülü çalışma", "Pompa hava yapmış", "Fan motoru arızası", "Kireç birikimi", "Baca fanı arızası", "Yanma odası birikinti"],
    ["Koku veya duman", "Baca tıkanıklığı", "Yanma odası birikinti", "Hatalı havalandırma", "Gaz kaçağı şüphesi", "Eşanjör sızıntısı"],
  ],
};

const DEVICE_SAFE_CHECKS: Record<DeviceKey, string[][]> = {
  camasir: [
    ["Programın sıkma aşaması içerip içermediğini kontrol edin", "Makinenin düz ve sabit zeminde durduğunu doğrulayın", "Tahliye filtresinin tıkalı olup olmadığını kullanım kılavuzuna uygun şekilde inceleyin", "Su giriş vanalarının açık olduğunu kontrol edin"],
    ["Çamaşır yükünün dengeli dağıtıldığından emin olun", "Kapı contasının temiz ve sağlam olduğunu kontrol edin", "Taşıma emniyet vidalarının söküldüğünü doğrulayın", "Giriş hortumlarında bükülme olmadığını kontrol edin"],
    ["Deterjan çekmecesini ve lastik contayı görsel olarak inceleyin", "Makine altında su birikintisi olup olmadığına bakın", "Elektrik fişinin sağlam bağlandığını kontrol edin", "Aşırı köpük oluşumuna neden olan deterjan kullanımını gözden geçirin"],
  ],
  bulasik: [
    ["Filtreyi çıkarıp kullanım kılavuzuna uygun şekilde temizleyin", "Püskürtme kollarının serbestçe döndüğünü kontrol edin", "Tuz ve parlatıcı seviyelerini kontrol edin", "Kapı contasında yırtık veya kalıntı olup olmadığına bakın"],
    ["Tahliye hortumunda bükülme olmadığını doğrulayın", "Su giriş vanasının tam açık olduğunu kontrol edin", "Deterjan bölmesinde birikinti olup olmadığını inceleyin", "Makine içinde yabancı cisim kalmadığından emin olun"],
    ["Sifon bağlantısının tersiyonlu olduğunu kontrol edin", "Programın uygun sıcaklık ayarında olduğunu doğrulayın", "Kapının tam kapandığını kontrol edin", "Su basıncının yeterli olduğunu gözden geçirin"],
  ],
  buzdolabi: [
    ["Termostat ayarının doğru konumda olduğunu kontrol edin", "Kapı contasının sıkı kapandığını ve temiz olduğunu doğrulayın", "Cihazın duvara yeterli mesafede durduğunu kontrol edin", "Kondenser bobininde aşırı toz birikimi olup olmadığına bakın"],
    ["Dondurucu ve soğutucu bölüm sıcaklık ayarlarını kontrol edin", "Kapı menteşelerinin düzgün hizalandığını inceleyin", "İç hava kanallarının buzla tıkanmadığını gözlemleyin", "Cihazın düz zeminde durduğunu doğrulayın"],
    ["Defrost suyu haznesinin dolu olup olmadığını kontrol edin", "Arka tarafta aşırı toz veya kir birikimi olup olmadığına bakın", "Kapı açık uyarısı varsa contayı inceleyin", "Fan sesinin normal olup olmadığını dinleyin"],
  ],
  klima: [
    ["İç ünite filtresini çıkarıp temizleyin veya tozunu alın", "Uzaktan kumandada mod ve sıcaklık ayarını kontrol edin", "Dış ünite önünde hava akışını engelleyen cisim olmadığını doğrulayın", "Priz ve sigorta bağlantısının sağlam olduğunu kontrol edin"],
    ["Drenaj hortumunun tıkalı olmadığını görsel olarak inceleyin", "Kapı ve pencerelerin kapalı olduğunu kontrol edin", "Kumanda pillerini değiştirip tekrar deneyin", "İç ünite hava girişinin önünde engel olmadığından emin olun"],
    ["Dış ünite kanatlarında aşırı kir birikimi olup olmadığına bakın", "Klima modunun soğutma veya ısıtma için doğru seçildiğini kontrol edin", "Oda sensörünün engellenmediğini doğrulayın", "Zamanlayıcı veya uyku modunun devrede olmadığını kontrol edin"],
  ],
  kombi: [
    ["Kombi basınç göstergesini kontrol edin (genelde 1–1,5 bar arası)", "Petek vanalarının açık olduğunu doğrulayın", "Gaz vanasının açık olduğunu kontrol edin", "Oda termostatı ayarını gözden geçirin"],
    ["Kombi ekranındaki hata kodunu not alın", "Sıcak su musluğunu tam açarak debi sağlandığını kontrol edin", "Baca çıkışının tıkalı olmadığını görsel olarak inceleyin", "Elektrik beslemesinin kesilmediğini doğrulayın"],
    ["Tesisatta görünür kaçak olup olmadığına bakın", "Kombi altında su birikintisi olup olmadığını kontrol edin", "Yanma odası kapağının kapalı olduğunu doğrulayın", "Düşük basınç uyarısı varsa kullanım kılavuzundaki talimatları inceleyin"],
  ],
};

function brandKey(name: string): string {
  return slugifyTurkish(name);
}

function buildIntro(
  profile: BrandProfile,
  device: DeviceConfig,
  deviceKey: DeviceKey,
): string {
  const intros: Record<string, string> = {
    "bosch-camasir": `${profile.name} çamaşır makineleri ${profile.strength} ile evlerde sık tercih edilir. ${profile.note}. Kerem Teknik Servis, İstanbul genelinde ${profile.name} çamaşır makinesi arızalarında bağımsız özel servis olarak yerinde teşhis ve onarım desteği sunar.`,
    "siemens-camasir": `${profile.name} çamaşır makinelerinde ${profile.strength} öne çıkar. ${profile.note}. İstanbul'da ${profile.name} çamaşır makinesi pompa, motor ve elektronik kart arızalarında Kerem Teknik Servis bağımsız servis ekibiyle hizmet verir.`,
    "profilo-camasir": `Yerli üretim ${profile.name} çamaşır makineleri ${profile.strength} sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} çamaşır makinesi kullanıcılarına İstanbul genelinde yetkili servis olmadan bağımsız teknik destek sağlar.`,
    "arcelik-camasir": `${profile.name} çamaşır makineleri Türkiye'de geniş kullanıcı tabanına sahiptir; ${profile.strength} dikkat çeker. ${profile.note}. Kerem Teknik Servis, ${profile.name} çamaşır makinesi arıza ve bakım taleplerinde bağımsız özel servis olarak çalışır.`,
    "beko-camasir": `${profile.name} çamaşır makinelerinde ${profile.strength} ön plandadır. ${profile.note}. İstanbul'da ${profile.name} çamaşır makinesi su kaçağı, sıkma ve kart arızalarında Kerem Teknik Servis yerinde servis planlaması yapar.`,
    "vestel-camasir": `${profile.name} çamaşır makineleri ${profile.strength} ile ekonomik segmentte yer alır. ${profile.note}. Kerem Teknik Servis, ${profile.name} çamaşır makinesi kullanıcılarına bağımsız özel servis kapsamında İstanbul genelinde destek verir.`,
    "miele-camasir": `Premium segment ${profile.name} çamaşır makineleri ${profile.strength} ile bilinir. ${profile.note}. Kerem Teknik Servis, ${profile.name} çamaşır makinesi hassas parça ve kalibrasyon gerektiren arızalarda bağımsız servis deneyimi sunar.`,
    "bosch-bulasik": `${profile.name} bulaşık makinelerinde ${profile.strength} ve program çeşitliliği öne çıkar. ${profile.note}. Kerem Teknik Servis, ${profile.name} bulaşık makinesi pompa, ısıtıcı ve elektronik arızalarında İstanbul'da bağımsız servis hizmeti verir.`,
    "siemens-bulasik": `${profile.name} bulaşık makineleri ${profile.strength} ile mutfaklarda güvenilir performans sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} bulaşık makinesi koku, tahliye ve yıkama sorunlarında bağımsız özel servis olarak destek sağlar.`,
    "profilo-bulasik": `${profile.name} bulaşık makineleri ${profile.strength} ile pratik kullanım sunar. ${profile.note}. İstanbul genelinde ${profile.name} bulaşık makinesi arızalarında Kerem Teknik Servis bağımsız teknik servis ekibiyle hizmet verir.`,
    "arcelik-bulasik": `${profile.name} bulaşık makineleri ${profile.strength} ile yaygın kullanılır. ${profile.note}. Kerem Teknik Servis, ${profile.name} bulaşık makinesi filtre, pompa ve ısıtıcı arızalarında yetkili servis olmadan bağımsız destek sunar.`,
    "beko-bulasik": `${profile.name} bulaşık makinelerinde ${profile.strength} dikkat çeker. ${profile.note}. Kerem Teknik Servis, İstanbul'da ${profile.name} bulaşık makinesi su tahliye ve yıkama performansı sorunlarında bağımsız servis planlaması yapar.`,
    "miele-bulasik": `${profile.name} bulaşık makineleri ${profile.strength} ile premium mutfaklarda tercih edilir. ${profile.note}. Kerem Teknik Servis, ${profile.name} bulaşık makinesi hassas parça değişimlerinde bağımsız özel servis olarak çalışır.`,
    "arcelik-buzdolabi": `${profile.name} buzdolapları ${profile.strength} ile Türkiye'de yaygındır. ${profile.note}. Kerem Teknik Servis, ${profile.name} buzdolabı soğutma, defrost ve kompresör arızalarında İstanbul genelinde bağımsız servis desteği sunar.`,
    "samsung-buzdolabi": `${profile.name} buzdolaplarında ${profile.strength} öne çıkar. ${profile.note}. Kerem Teknik Servis, ${profile.name} buzdolabı inverter kompresör ve kart arızalarında bağımsız özel servis olarak yerinde teşhis yapar.`,
    "general-electric-buzdolabi": `${profile.name} buzdolapları ${profile.strength} ile bilinir. ${profile.note}. İstanbul'da ${profile.name} buzdolabı soğutma sistemi arızalarında Kerem Teknik Servis bağımsız teknik servis hizmeti verir.`,
    "westinghouse-buzdolabi": `${profile.name} buzdolapları ${profile.strength} sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} buzdolabı defrost ve kompresör sorunlarında bağımsız özel servis kapsamında destek sağlar.`,
    "bosch-klima": `${profile.name} klimaları ${profile.strength} ile verimli iklimlendirme sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} klima gaz dolumu, kart ve kompresör arızalarında İstanbul'da bağımsız servis olarak hizmet verir.`,
    "mitsubishi-klima": `${profile.name} klimaları ${profile.strength} ile yüksek verim sağlar. ${profile.note}. Kerem Teknik Servis, ${profile.name} klima inverter ve drenaj arızalarında bağımsız özel servis desteği sunar.`,
    "daikin-klima": `${profile.name} klimaları ${profile.origin} ile sektörde öncü konumdadır; ${profile.strength} dikkat çeker. ${profile.note}. İstanbul genelinde ${profile.name} klima bakım ve onarımında Kerem Teknik Servis bağımsız servis ekibiyle çalışır.`,
    "arcelik-klima": `${profile.name} klimaları ${profile.strength} ile ev ve ofislerde yaygın kullanılır. ${profile.note}. Kerem Teknik Servis, ${profile.name} klima soğutma ve ısıtma arızalarında yetkili servis olmadan bağımsız destek verir.`,
    "beko-klima": `${profile.name} klimaları ${profile.strength} sunar. ${profile.note}. Kerem Teknik Servis, İstanbul'da ${profile.name} klima gaz kaçağı, fan ve kart sorunlarında bağımsız özel servis planlaması yapar.`,
    "vestel-klima": `${profile.name} klimaları ${profile.strength} ile erişilebilir segmentte yer alır. ${profile.note}. Kerem Teknik Servis, ${profile.name} klima bakım ve arıza taleplerinde bağımsız teknik servis hizmeti sunar.`,
    "midea-klima": `${profile.name} klimaları ${profile.strength} ile hızla yaygınlaşmaktadır. ${profile.note}. Kerem Teknik Servis, ${profile.name} klima inverter ve elektronik arızalarında İstanbul genelinde bağımsız servis desteği sağlar.`,
    "baymak-kombi": `${profile.name} kombileri ${profile.strength} ile Türkiye'de en yaygın kurulumlardan birine sahiptir. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi basınç, pompa ve ateşleme arızalarında bağımsız özel servis olarak hizmet verir.`,
    "demirdokum-kombi": `${profile.name} kombileri ${profile.strength} ile köklü bir markadır. ${profile.note}. İstanbul'da ${profile.name} kombi eşanjör, kart ve sensör arızalarında Kerem Teknik Servis bağımsız servis ekibiyle çalışır.`,
    "eca-kombi": `${profile.name} kombileri ${profile.strength} sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi sıcak su ve petek ısıtma sorunlarında yetkili servis olmadan bağımsız teknik destek sağlar.`,
    "buderus-kombi": `${profile.name} kombileri ${profile.origin} ile yüksek verimli ısıtma sunar. ${profile.strength} dikkat çeker. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi yoğuşma ve ateşleme arızalarında bağımsız özel servis hizmeti verir.`,
    "vaillant-kombi": `${profile.name} kombileri ${profile.strength} ile premium ısıtma segmentinde yer alır. ${profile.note}. İstanbul genelinde ${profile.name} kombi sensör ve eşanjör arızalarında Kerem Teknik Servis bağımsız servis desteği sunar.`,
    "protherm-kombi": `${profile.name} kombileri ${profile.strength} ile kompakt çözümler sunar. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi basınç düşüklüğü ve pompa arızalarında bağımsız özel servis olarak çalışır.`,
    "bosch-kombi": `${profile.name} kombileri ${profile.strength} ile yoğuşmalı segmentte güvenilir performans sağlar. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi ateşleme ve sıcak su sorunlarında İstanbul'da bağımsız servis hizmeti verir.`,
    "ferroli-kombi": `${profile.name} kombileri ${profile.strength} ile bilinir. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi kart, pompa ve eşanjör arızalarında bağımsız teknik servis desteği sunar.`,
    "viessmann-kombi": `${profile.name} kombileri ${profile.origin} ile premium ısıtma çözümleri sunar; ${profile.strength} öne çıkar. ${profile.note}. Kerem Teknik Servis, ${profile.name} kombi verim ve ateşleme arızalarında bağımsız özel servis olarak hizmet verir.`,
  };

  const key = `${brandKey(profile.name)}-${deviceKey}`;
  return (
    intros[key] ??
    `${profile.name} ${device.deviceLabel} cihazlarında ${profile.strength} öne çıkar. ${profile.note}. Kerem Teknik Servis, İstanbul genelinde ${profile.name} ${device.deviceLabel} arıza ve bakım taleplerinde bağımsız özel servis olarak yerinde destek sunar.`
  );
}

function buildSections(
  profile: BrandProfile,
  device: DeviceConfig,
  deviceKey: DeviceKey,
): { id: string; title: string; body: string }[] {
  const scopeBodies: Record<DeviceKey, string> = {
    camasir: `${profile.name} çamaşır makinesi servis kapsamımız; motor, kayış, pompa, amortisör, rulman, kapı kilidi, giriş vanası, tahliye sistemi ve elektronik kart arızalarını içerir. ${profile.origin} kökenli ${profile.name} serilerinde ${profile.note}. Parça değişimi öncesi model etiketi üzerinden uyumluluk kontrol edilir.`,
    bulasik: `${profile.name} bulaşık makinesi için pompa, ısıtıcı eleman, filtre, püskürtme kolu, kapı contası, sifon bağlantısı, aquastop hortumu ve elektronik kart onarımları servis kapsamındadır. ${profile.strength} sunan bu markada ${profile.note.toLowerCase()}. Yerinde teşhis sonrası parça ve işçilik planı şeffaf şekilde paylaşılır.`,
    buzdolabi: `${profile.name} buzdolabı servisinde kompresör, gaz dolumu, evaporatör fanı, defrost sistemi, termostat, kapı contası, kart ve sensör arızaları ele alınır. ${profile.note}. No-frost ve statik soğutmalı modeller farklı prosedürler gerektirir; teşhis model bilgisiyle yapılır.`,
    klima: `${profile.name} klima servisi; gaz kaçak testi, gaz dolumu, kompresör, iç ve dış ünite fan motoru, drenaj hattı, inverter kart, sensör ve bakım işlemlerini kapsar. ${profile.strength} ile bilinen bu markada ${profile.note.toLowerCase()}. Montaj ve taşıma hizmeti talebe göre ayrı planlanır.`,
    kombi: `${profile.name} kombi servis kapsamı; ateşleme, gaz valfi, üç yollu vana, sirkülasyon pompası, plaka eşanjör, genleşme tankı, NTC sensör, baca ve elektronik kart arızalarını içerir. ${profile.note}. Yoğuşmalı modellerde kireç ve baca kontrolü servis sürecinin parçasıdır.`,
  };

  const processBodies: Record<DeviceKey, string> = {
    camasir: `Arıza kaydı sonrası ${profile.name} çamaşır makineniz için uygun zaman diliminde randevu planlanır. Teknisyen yerinde önce güvenli kontrolleri yapar, ardından tambur, pompa ve elektronik bölümlerde teşhis gerçekleştirir. Onayınız olmadan parça değişimi yapılmaz; kullanılan parçalar ve işçilik hakkında bilgi verilir. Test çalıştırması sonrası cihaz teslim edilir.`,
    bulasik: `${profile.name} bulaşık makinesi için önce koku, tahliye veya yıkama şikayeti dinlenir. Filtre, pompa ve ısıtıcı bölgesi kontrol edilir; gerekirse sifon bağlantısı da değerlendirilir. Parça ihtiyacı varsa onay alınır, onarım sonrası kısa program ile test yapılır.`,
    buzdolabi: `${profile.name} buzdolabında soğutma şikayeti için önce kapı contası, fan ve kompresör çalışması gözlemlenir. Gaz basıncı ve kart ölçümleri model uygunluğuna göre yapılır. Onarım planı onaylandıktan sonra işlem uygulanır; soğutma testi ile süreç tamamlanır.`,
    klima: `${profile.name} klima arızasında iç ve dış ünite birlikte değerlendirilir. Filtre, drenaj, gaz basıncı ve elektronik kart sırasıyla kontrol edilir. Bakım taleplerinde iç ünite temizliği ve drenaj hattı kontrolü standart prosedüre dahildir. Onarım sonrası soğutma veya ısıtma testi yapılır.`,
    kombi: `${profile.name} kombi servisinde önce basınç, ateşleme ve sıcak su şikayeti dinlenir. Ekran hata kodu not edilir; pompa, eşanjör ve sensörler kontrol edilir. Güvenlik açısından gaz ve baca kontrolleri atlanmaz. Onay sonrası onarım ve basınç testi ile süreç sonlandırılır.`,
  };

  const notesBodies: Record<DeviceKey, string> = {
    camasir: `${profile.name} çamaşır makinesinde taşıma sonrası emniyet vidalarının sökülmesi gerekir. Aşırı köpük, dengesiz yükleme ve düşük su basıncı bazı arızaları taklit edebilir. Elektrik çekmeden iç aksama müdahale etmeyin; su kaçağında prizi kapatın. Kerem Teknik Servis, ${profile.name} markasının yetkili servisi değildir.`,
    bulasik: `${profile.name} bulaşık makinesinde düzenli filtre temizliği koku ve performans sorunlarını azaltır. Koku giderden geliyorsa sifon veya tesisat kaynaklı olabilir. Isıtıcı arızalarında program yarıda kalabilir; cihazı zorlamayın. Bağımsız servis olduğumuz için garanti kapsamı dışı işlemlerde üretici servisine başvurmanız gerekebilir.`,
    buzdolabi: `${profile.name} buzdolabında kapı contası ve kondenser temizliği enerji tüketimini doğrudan etkiler. Defrost suyu haznesi doluysa içten damlama görülebilir. Kompresör sürekli çalışıyorsa cihazı kapatmadan önce contayı kontrol edin. Gaz ve kompresör işlemleri özel ekipman gerektirir.`,
    klima: `${profile.name} klima bakımı yılda en az bir kez önerilir; filtre temizliği kullanıcı tarafından düzenli yapılabilir. Gaz dolumu kaçak giderilmeden kalıcı çözüm sağlamaz. Dış ünite hava akışı engellenmemelidir. Elektrik ve yüksek basınçlı gaz işlemlerinde uzman desteği şarttır.`,
    kombi: `${profile.name} kombide düşük basınç uyarısında kullanım kılavuzundaki talimatları izleyin; tesisat kaçağı varsa basınç tekrar düşer. Baca tıkanıklığı ve gaz kokusu acil müdahale gerektirir. Kireçli su bölgelerinde eşanjör bakımı daha sık gerekebilir. Yoğuşma gideri tıkalıysa performans düşer.`,
  };

  return [
    { id: "kapsam", title: "Servis kapsamı", body: scopeBodies[deviceKey] },
    { id: "surec", title: "Servis süreci", body: processBodies[deviceKey] },
    { id: "notlar", title: "Önemli notlar", body: notesBodies[deviceKey] },
  ];
}

function buildFaqs(
  profile: BrandProfile,
  device: DeviceConfig,
  deviceKey: DeviceKey,
): { question: string; answer: string }[] {
  const faqMap: Record<string, { question: string; answer: string }[]> = {
    "bosch-camasir": [
      {
        question: `${profile.name} çamaşır makinesi için yetkili servis misiniz?`,
        answer: `Hayır. Kerem Teknik Servis bağımsız özel teknik servistir; ${profile.name} markasının yetkili servisi değildir. Garanti kapsamındaki cihazlar için üretici yetkili servisine yönlendirme yapılabilir.`,
      },
      {
        question: `${profile.name} çamaşır makinesinde E kodlu hata görüyorum, ne yapmalıyım?`,
        answer: `Hata kodunu not alın ve cihazı güvenli şekilde durdurun. Bosch/Siemens/Profilo grubu modellerde kod anlamları seriye göre değişir; teknisyenimiz model bilgisiyle teşhis yapar.`,
      },
      {
        question: `${profile.name} çamaşır makinesi sıkma yapmıyorsa servis ne kadar sürer?`,
        answer: `Pompa tıkanıklığı gibi basit sorunlar aynı ziyarette çözülebilir; motor veya kart arızalarında parça temini süreyi uzatabilir. Yerinde teşhis sonrası net bilgi verilir.`,
      },
    ],
    "siemens-camasir": [
      {
        question: `${profile.name} çamaşır makinesi iQdrive motor arızası nasıl anlaşılır?`,
        answer: `Kazan dönmüyor, anormal gürültü veya hata kodu görülebilir. Kesin teşhis için motor sürücü kartı ve kayış durumu yerinde kontrol edilmelidir.`,
      },
      {
        question: `${profile.name} çamaşır makinesi su kaçırıyorsa önce ne kontrol edilmeli?`,
        answer: `Kapı contası, deterjan çekmecesi, tahliye filtresi ve hortum bağlantıları görsel olarak incelenmelidir. Elektrik çekmeden filtre kapağını açarken su birikintisine dikkat edin.`,
      },
      {
        question: `İstanbul'da ${profile.name} çamaşır makinesi servisi nasıl planlanır?`,
        answer: `İletişim kanallarımızdan arıza kaydı oluşturabilirsiniz. İlçe ve uygunluk durumuna göre randevu planlanır; bağımsız özel servis olarak yerinde hizmet verilir.`,
      },
    ],
    "arcelik-kombi": [
      {
        question: `${profile.name} kombi petekleri ısıtmıyorsa ne yapılmalı?`,
        answer: `Basınç, petek vanaları ve oda termostatı kontrol edilmelidir. Pompa veya üç yollu vana arızası söz konusu olabilir; yerinde teşhis gerekir.`,
      },
      {
        question: `${profile.name} kombi sıcak su kesiliyorsa sebebi ne olabilir?`,
        answer: `Plaka eşanjör kireçlenmesi, akış sensörü veya NTC arızası sık görülür. Minimum debi sağlanmıyorsa musluk tam açılmalı; sorun devam ederse servis çağırın.`,
      },
      {
        question: `${profile.name} kombi için yıllık bakım gerekli mi?`,
        answer: `Yoğuşmalı kombilerde yıllık bakım verim ve güvenlik açısından önerilir. Filtre, baca ve basınç kontrolleri bakım kapsamına girer.`,
      },
    ],
  };

  const key = `${brandKey(profile.name)}-${deviceKey}`;
  if (faqMap[key]) return faqMap[key];

  const deviceFaqTemplates: Record<DeviceKey, { question: string; answer: string }[]> = {
    camasir: [
      {
        question: `${profile.name} çamaşır makinesi arızasında parça değişimi yapılıyor mu?`,
        answer: `Evet. Yerinde teşhis sonrası motor, pompa, kayış, kart ve conta gibi parçaların değişimi onayınızla yapılabilir. ${profile.note}.`,
      },
      {
        question: `${profile.name} çamaşır makinesi gürültülü çalışıyorsa ne yapmalıyım?`,
        answer: `Makinenin dengede olduğunu ve yabancı cisim olmadığını kontrol edin. Rulman veya amortisör arızası söz konusu olabilir; cihazı zorlamadan servis desteği alın.`,
      },
      {
        question: `Kerem Teknik Servis ${profile.name} yetkili servisi mi?`,
        answer: `Hayır, bağımsız özel teknik servisiz. ${profile.name} adı yalnızca servis kapsamını açıklamak için kullanılır; üretici garantisi için yetkili servise başvurmanız gerekir.`,
      },
    ],
    bulasik: [
      {
        question: `${profile.name} bulaşık makinesi koku yapıyorsa evde ne yapılabilir?`,
        answer: `Filtre temizliği, boş sıcak program ve kapak contası kontrolü denenebilir. Koku giderden geliyorsa sifon bağlantısı veya tesisat kaynaklı olabilir.`,
      },
      {
        question: `${profile.name} bulaşık makinesi su tahliye etmiyorsa servis gerekir mi?`,
        answer: `Filtre ve tahliye hortumu kontrol edildikten sonra sorun devam ediyorsa pompa veya kart arızası olabilir. Su birikintisini önlemek için programı durdurun ve destek alın.`,
      },
      {
        question: `${profile.name} bulaşık makinesi için hangi arızalarda destek veriyorsunuz?`,
        answer: `Pompa, ısıtıcı, filtre, contalar, elektronik kart ve sifon bağlantı kaynaklı sorunlarda yerinde teşhis ve onarım sunuyoruz.`,
      },
    ],
    buzdolabi: [
      {
        question: `${profile.name} buzdolabı soğutmuyorsa acil mi?`,
        answer: `Gıda güvenliği açısından hızlı müdahale önemlidir. Conta ve ayar kontrolü yapılabilir; kompresör veya gaz sorunlarında cihazı zorlamadan servis çağırın.`,
      },
      {
        question: `${profile.name} buzdolabında buzlanma normal mi?`,
        answer: `Aşırı buzlanma defrost sistemi veya conta arızasına işaret edebilir. No-frost modellerde bile hava kanalı buzlanması performansı düşürür.`,
      },
      {
        question: `${profile.name} buzdolabı kompresör çalışıyor ama soğutmuyorsa?`,
        answer: `Gaz eksikliği, fan arızası veya kart sorunu olabilir. Model etiketi ve çalışma sesi teknisyene iletilmeli; yerinde ölçüm gerekir.`,
      },
    ],
    klima: [
      {
        question: `${profile.name} klima gaz dolumu yapıyor musunuz?`,
        answer: `Kaçak testi yapıldıktan sonra uygun gaz tipi ile dolum hizmeti verilebilir. Kaçak giderilmeden dolum kalıcı çözüm sağlamaz.`,
      },
      {
        question: `${profile.name} klimadan su damlıyorsa ne yapılmalı?`,
        answer: `Drenaj hattı tıkanıklığı veya iç ünite eğimi en sık nedenlerdir. Cihazı kapatıp su birikintisini önleyin; filtre temizliği de kontrol edilmelidir.`,
      },
      {
        question: `${profile.name} klima bakımı ne sıklıkla yapılmalı?`,
        answer: `Yoğun kullanımda yılda en az bir kez bakım önerilir. Filtre temizliği kullanıcı tarafından daha sık yapılabilir.`,
      },
    ],
    kombi: [
      {
        question: `${profile.name} kombi basınç düşüyorsa ne anlama gelir?`,
        answer: `Tesisat kaçağı, genleşme tankı veya emniyet ventili sorunu olabilir. Kullanım kılavuzundaki basınç talimatlarını izleyin; kaçak şüphesinde servis çağırın.`,
      },
      {
        question: `${profile.name} kombi ateşleme yapmıyorsa ne yapılmalı?`,
        answer: `Gaz vanası, elektrik beslemesi ve ekran hata kodu kontrol edilmelidir. İyonizasyon veya gaz valfi arızasında uzman müdahale gerekir; kendi başınıza sökmeyin.`,
      },
      {
        question: `${profile.name} kombi için periyodik bakım şart mı?`,
        answer: `Güvenlik ve verim için yıllık bakım önerilir. Baca, filtre, basınç ve yanma odası kontrolleri bakım kapsamına girer.`,
      },
    ],
  };

  return deviceFaqTemplates[deviceKey];
}

function createEntry(
  brandName: string,
  deviceKey: DeviceKey,
  variantIndex: number,
): BrandServiceSeed {
  const slug = brandKey(brandName);
  const profile = BRAND_PROFILES[slug];
  const device = DEVICE_CONFIG[deviceKey];
  const issues = DEVICE_ISSUES[deviceKey][variantIndex % DEVICE_ISSUES[deviceKey].length];
  const safeChecks =
    DEVICE_SAFE_CHECKS[deviceKey][variantIndex % DEVICE_SAFE_CHECKS[deviceKey].length];
  const errorKey = `${slug}-${deviceKey}`;
  const relatedErrorGroups = ERROR_GROUP_BY_BRAND_DEVICE[errorKey];

  return {
    brandSlug: slug,
    brandName: profile.name,
    deviceSlug: device.deviceSlug,
    deviceTitle: device.deviceTitle,
    servisSlug: device.servisSlug,
    focusKeyphrase: `${profile.name} ${device.deviceTitle} Servisi`,
    commonIssues: issues,
    safeChecks,
    uniqueIntro: buildIntro(profile, device, deviceKey),
    sections: buildSections(profile, device, deviceKey),
    faqs: buildFaqs(profile, device, deviceKey),
    ...(relatedErrorGroups ? { relatedErrorGroups } : {}),
    relatedFaultSlugs: device.faultSlugs,
  };
}

const BRAND_DEVICE_MATRIX: { device: DeviceKey; brands: string[] }[] = [
  {
    device: "camasir",
    brands: ["Bosch", "Siemens", "Profilo", "Arçelik", "Beko", "Vestel", "Miele"],
  },
  {
    device: "bulasik",
    brands: ["Bosch", "Siemens", "Profilo", "Arçelik", "Beko", "Miele"],
  },
  {
    device: "buzdolabi",
    brands: ["Arçelik", "Samsung", "General Electric", "Westinghouse"],
  },
  {
    device: "klima",
    brands: ["Bosch", "Mitsubishi", "Daikin", "Arçelik", "Beko", "Vestel", "Midea"],
  },
  {
    device: "kombi",
    brands: [
      "Baymak",
      "Demirdöküm",
      "ECA",
      "Buderus",
      "Vaillant",
      "Protherm",
      "Bosch",
      "Ferroli",
      "Viessmann",
    ],
  },
];

export const BRAND_SERVICE_SEEDS: BrandServiceSeed[] = BRAND_DEVICE_MATRIX.flatMap(
  ({ device, brands }) =>
    brands.map((brandName, index) => createEntry(brandName, device, index)),
);
