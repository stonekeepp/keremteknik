import type { ContentSection, FaqItem } from "./types";
import { REGION_KLIMA_INTENT_CONTENT } from "./region-klima-intent-content";

export type RegionServiceContentOverride = {
  intro: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  seoTitle?: string;
  metaDescription?: string;
  secondaryKeyphrases?: string[];
};

function mergeRegionServiceContent(
  base: Record<string, Partial<Record<string, RegionServiceContentOverride>>>,
  extra: Record<string, Partial<Record<string, RegionServiceContentOverride>>>,
): Record<string, Partial<Record<string, RegionServiceContentOverride>>> {
  const out: Record<
    string,
    Partial<Record<string, RegionServiceContentOverride>>
  > = { ...base };
  for (const [regionSlug, services] of Object.entries(extra)) {
    out[regionSlug] = { ...out[regionSlug], ...services };
  }
  return out;
}

/** Deep, unique copy for money pages — avoids doorway similarity with sibling districts. */
const REGION_SERVICE_CONTENT_BASE: Record<
  string,
  Partial<Record<string, RegionServiceContentOverride>>
> = {
  eyupsultan: {
    "klima-servisi": {
      seoTitle: "Eyüpsultan Klima Servisi | Aynı Gün Randevu | Kerem Teknik",
      metaDescription:
        "Eyüpsultan klima servisi: yerinde arıza tespiti, bakım, gaz kontrolü. Göktürk, Alibeyköy, Rami, Kemerburgaz. Tel: 0551 397 25 26.",
      secondaryKeyphrases: [
        "eyüpsultan klima servisi",
        "eyüpsultan klima",
        "göktürk klima servisi",
        "alibeyköy klima servisi",
        "kemerburgaz klima servisi",
      ],
      intro:
        "Eyüpsultan klima servisi taleplerinde Alibeyköy merkezli ekibimiz ilçe genelinde yerinde teşhis planlar. Göktürk ve Kemerburgaz gibi geniş yerleşimlerde adres, dış ünite konumu ve erişim koşulları randevu öncesi netleştirilir; Rami, Yeşilpınar ve Alibeyköy apartmanlarında iç ünite erişimi ve elektrik hattı güvenliği kayıt altına alınır. Yoğun yaz döneminde aynı gün randevu imkânı, rota ve ekip müsaitliğine göre paylaşılır.",
      sections: [
        {
          id: "scope",
          title: "Eyüpsultan klima servisi kapsamı",
          body: `Eyüpsultan'da klima servisi; split, inverter, salon tipi ve uygun olduğunda kaset tipi cihazlarda arıza tespiti, periyodik bakım, filtre/serpantin temizliği, drenaj kontrolü ve gaz kaçak/basınç değerlendirmesini kapsar. Soğutmama, ısıtmama, su damlatma, koku, aşırı ses ve kumanda/sensör sorunlarında önce kullanım ayarı ile teknik arıza ayrıştırılır.

Marka ve model bilgisi paylaşıldığında teşhis planı netleşir. Arçelik, Beko, Daikin, Samsung, LG, Mitsubishi Electric, Toshiba, Bosch, Baymak, Airfel, General ve benzeri yaygın markalarda bağımsız özel teknik servis olarak yerinde müdahale sunulur; markanın yetkili servisi değiliz. Onayınız olmadan parça değişimi yapılmaz; işçilik ve parça seçenekleri teşhis sonrası şeffaf paylaşılır.

Periyodik bakımda filtre hijyeni, serpantin kontrolü, fan performansı ve drenaj hattı birlikte ele alınır. Bu adımlar yaz yoğunluğunda enerji tüketimini düşürmeye ve kötü koku riskini azaltmaya yardımcı olur. Kart/elektronik arızalarında önce ölçüm yapılır; gereksiz kart değişimi önerilmez.`,
        },
        {
          id: "neighborhoods",
          title: "Eyüpsultan'da klima servisi verdiğimiz mahalleler",
          body: `Merkez ofisimiz Eyüpsultan Alibeyköy'dedir; ilçe içi randevu planlaması bu yakınlığa göre önceliklendirilir. Mahalle bazında hizmet verdiğimiz başlıca bölgeler:

Yoğun konut hatları: Alibeyköy, Rami Cuma, Rami Yeni, Yeşilpınar, Güzeltepe, Karadolap, Silahtarağa, Topçular, Emniyettepe, Defterdar, Nişanca, Mithatpaşa, Akşemsettin, Merkez, Mimar Sinan, İslambey, İhsaniye, Düğmeciler, Sakarya, Esentepe, Çırçır, Akpınar.

Genişleyen ve villa/site yoğunluğu yüksek bölgeler: Göktürk Merkez, Kemerburgaz çevresi, Odayeri, Pirinççi, Ağaçlı, Çiftalan, Işıklar, 5. Levent.

Kemerburgaz ayrı ilçe sayfası olarak listelenmez; Eyüpsultan servis kapsamı içindedir. Yüksek katlı veya site girişli adreslerde dış ünite erişimi, balkon/teras güvenliği ve elektrik panosu konumu randevu sırasında not edilir. Trafik yoğun saatlerde Göktürk–Kemerburgaz hattında varış aralığı önceden paylaşılır.`,
        },
        {
          id: "device-types",
          title: "Cihaz tipi ve sık görülen klima arızaları",
          body: `Split ve inverter klimalarda soğutma düşüklüğü, gaz eksikliği şüphesi, drenaj tıkanıklığı ve fan motoru gürültüsü sık karşılaşılan taleplerdir. Salon tipi cihazlarda filtre ve hava kanalı bakımı; kaset tipi montajlarda tahliye hattı eğimi ve tavan erişimi kritik olur. VRF/VRV veya merkezi sistemlerde daha kapsamlı kurumsal planlama gerekir — uygunluk randevu görüşmesinde netleştirilir.

Yaz öncesi bakım; filtre, serpantin hijyeni ve çalışma basıncı kontrolü ile cihazın verimli çalışmasına katkı sağlar. Klima su akıtıyorsa çoğu zaman drenaj tıkanıklığı veya eğim problemi görülür. Sıcak hava üfleme; gaz eksikliği, dış ünite arızası veya yanlış mod ayarından kaynaklanabilir. Gaz dolumu yalnızca kaçak testi ve modelin uygun soğutucu gazı (ör. R32, R410A) doğrulandıktan sonra planlanır; kaçak varken dolum önerilmez. Filtre temizliği kullanıcı tarafından yapılabilecek basit bir adımdır; yine de soğutma sorunu sürüyorsa yerinde teknik kontrol gerekir.`,
        },
        {
          id: "local-notes",
          title: "Eyüpsultan’a özel planlama notları",
          body: `Alibeyköy ve Rami’deki apartman stoğunda iç ünite genellikle balkon veya mutfak duvarına yakındır; dış ünite erişimi için site yönetimi veya komşu bilgilendirmesi gerekebilir. Göktürk ve Kemerburgaz’ta villa/site projelerinde dış ünite çatı veya bahçe hattında olabilir — adres paylaşımında kat ve ünite konumu yazmanız süreci hızlandırır.

Tarihi dokuya yakın mahallelerde eski elektrik tesisatı ve sigorta kapasitesi kontrol listesinde yer alır. Aynı adreste kombi + klima talebi tek randevuda planlanabilir. Bağımsız özel teknik servis olarak faturalı/fişli süreç ve onaylı işçilik esas alınır. Google Haritalar üzerindeki işletme kaydımızdan yön tarifi alınabilir; randevu için web formunu veya telefon hattımızı kullanmanız yeterlidir.`,
        },
        {
          id: "process",
          title: "Servis süreci — Eyüpsultan",
          body: `1) Telefon, WhatsApp veya iletişim formu ile adres (mahalle/sokak), cihaz marka-modeli ve şikâyet özeti alınır.
2) Aynı gün veya ertesi iş günü uygun saat aralığı önerilir; Eyüpsultan merkezine yakın mahallelerde planlama genellikle daha hızlıdır.
3) Yerinde teşhis sonrası işlem kapsamı ve ücret bilgisi onayınıza sunulur.
4) Onaylanan işçilik/parça ile müdahale tamamlanır; temel çalışma testi yapılır.
5) Bağımsız özel servis bilgilendirmesi paylaşılır.

Cumartesi planlı randevu açıktır. Pazar günü için önceden rezervasyon gerekir. Acil soğutmama durumunda önceliklendirme, ekip müsaitliğine göre değerlendirilir.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan klima servisi aynı gün gelir mi?",
          answer:
            "Yoğunluğa bağlı olarak Eyüpsultan mahallelerinde çoğu talebe aynı gün veya ertesi iş günü randevu planlanabilir. Saat aralığı adres ve rota uygunluğuna göre önceden bildirilir.",
        },
        {
          question: "Göktürk ve Kemerburgaz'a klima servisi gidiyor mu?",
          answer:
            "Evet. Göktürk, Kemerburgaz, Odayeri ve çevre mahallelere randevu ile yerinde klima servisi planlanır; geniş site/villa adreslerinde dış ünite erişimi önceden netleştirilir.",
        },
        {
          question: "Klima gaz dolumu ne kadar sürer?",
          answer:
            "Kaçak kontrolü ve basınç testi sonrası gaz işlemi cihaza göre genellikle 20–40 dakika sürer. Önce kaçak varsa dolum önerilmez; onarım planı ayrı paylaşılır.",
        },
        {
          question: "Klima su akıtıyor — Eyüpsultan'da ne yapılır?",
          answer:
            "Çoğu durumda drenaj hattı tıkanıklığı veya eğim problemi görülür. Yerinde tahliye temizliği ve kontrol yapılır; gerekirse hortum/bağlantı onarımı onayınıza sunulur.",
        },
        {
          question: "Yetkili klima servisi misiniz?",
          answer:
            "Kerem Teknik Servis bağımsız özel teknik servistir; markaların yetkili servisi değildir. Marka adları yalnızca servis kapsamını açıklamak için kullanılır.",
        },
        {
          question: "Onarım öncesi fiyat belli olur mu?",
          answer:
            "Evet. Teşhis sonrası işçilik ve gerekli parça bedeli onayınıza sunulur; onay olmadan ek işlem yapılmaz.",
        },
      ],
    },
    "beyaz-esya-servisi": {
      seoTitle: "Eyüpsultan Beyaz Eşya Servisi | Yerinde Teşhis | Kerem Teknik",
      metaDescription:
        "Eyüpsultan beyaz eşya servisi: çamaşır, bulaşık, buzdolabı yerinde arıza tespiti. Alibeyköy, Rami, Yeşilpınar. Tel: 0551 397 25 26.",
      secondaryKeyphrases: [
        "eyüpsultan beyaz eşya servisi",
        "eyüpsultan beyaz eşya",
        "eyüpsultan çamaşır makinesi servisi",
        "eyüpsultan buzdolabı servisi",
      ],
      intro:
        "Eyüpsultan beyaz eşya servisinde çamaşır makinesi, bulaşık makinesi, buzdolabı ve fırın/ocak arızaları için yerinde teşhis önceliklidir. Alibeyköy, Rami ve Yeşilpınar'daki yoğun apartman stokunda su kaçağı ve sesli çalışma şikâyetleri sık görülür; Göktürk ve Kemerburgaz adreslerinde cihaz erişimi randevu öncesi doğrulanır.",
      sections: [
        {
          id: "scope",
          title: "Eyüpsultan beyaz eşya servisi kapsamı",
          body: `Kapsam: çamaşır makinesi (pompa, motor, kart, kayış, tahliye), bulaşık makinesi (yıkama kalitesi, koku, ısıtıcı, sifon), buzdolabı (soğutma zayıflığı, buzlanma, fan/defrost), fırın-ocak (ısınmama, termostat, güvenlik kontrolleri).

Önce kullanım hatası ile mekanik/elektronik arıza ayrılır; gereksiz sökme yapılmaz. Marka-model bilgisi ile uyumlu parça seçenekleri net fiyat ve garanti süresiyle paylaşılır. Bağımsız özel teknik servis olarak hizmet veririz; yetkili servis değiliz.`,
        },
        {
          id: "neighborhoods",
          title: "Hizmet verdiğimiz Eyüpsultan mahalleleri",
          body: `Alibeyköy, Rami, Yeşilpınar, Güzeltepe, Karadolap, Göktürk, Kemerburgaz, Emniyettepe, Defterdar, Silahtarağa, Topçular, Nişanca, Merkez, Akşemsettin ve diğer Eyüpsultan mahallelerine randevulu yerinde servis planlanır. Su kaçağı acillerinde elektrik güvenliği için fişi çekmeniz ve mümkünse vanayı kapatmanız önerilir.`,
        },
        {
          id: "devices",
          title: "Cihaz bazlı sık talepler",
          body: `Çamaşır makinesi: sıkma yapmama, su almama/boşaltmama, program yarıda kalma. Bulaşık: kirli çıkış, koku, su birikmesi. Buzdolabı: yeterince soğutmama, aşırı buz, kompresör sesi. Detaylı cihaz sayfalarımız çamaşır, buzdolabı ve bulaşık için Eyüpsultan özelinde de yayınlanmıştır.`,
        },
        {
          id: "process",
          title: "Servis süreci",
          body: `Talep → adres ve cihaz bilgisi → randevu → yerinde teşhis → onaylı işçilik/parça → test. Onayınız olmadan parça değişimi yapılmaz. Aynı adreste birden fazla beyaz eşya için tek randevuda planlama yapılabilir.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan beyaz eşya servisi randevusu nasıl alınır?",
          answer:
            "Telefon, WhatsApp veya iletişim formu ile mahalle/adres, cihaz türü, marka-model ve uygun saat paylaşmanız yeterlidir.",
        },
        {
          question: "Çamaşır makinesi için ayrı Eyüpsultan sayfası var mı?",
          answer:
            "Evet. Eyüpsultan çamaşır makinesi, buzdolabı ve bulaşık makinesi servisi için ayrı bölge sayfalarımız vardır; genel beyaz eşya sayfasından da ulaşabilirsiniz.",
        },
        {
          question: "Arıza tespit ücreti var mı?",
          answer:
            "Teşhis kapsamı ve ücret politikası randevu sırasında netleştirilir. Onarım kabul edilirse uygulanan mahsup kuralları varsa önceden bildirilir.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer:
            "Hayır. Kerem Teknik Servis bağımsız özel teknik servistir; markaların yetkili servisi değildir.",
        },
      ],
    },
    "camasir-makinesi-servisi": {
      seoTitle: "Eyüpsultan Çamaşır Makinesi Servisi | Kerem Teknik",
      metaDescription:
        "Eyüpsultan çamaşır makinesi servisi: sıkma, tahliye, su kaçağı ve kart arızalarında yerinde teşhis. Tel: 0551 397 25 26.",
      intro:
        "Eyüpsultan çamaşır makinesi servisinde pompa, motor, kayış ve elektronik kart arızaları yerinde teşhis edilir. Alibeyköy ve Rami apartmanlarında tahliye ve su kaçağı şikâyetleri sık görülür; model etiketi paylaşımı teşhisi hızlandırır.",
      sections: [
        {
          id: "scope",
          title: "Hizmet kapsamı",
          body: "Tambur dönmeme, sıkma yapmama, su almama/boşaltmama, program hatası ve sızıntı şikâyetlerinde yerinde kontrol yapılır. Uyumlu parça seçenekleri onayınızla uygulanır.",
        },
        {
          id: "process",
          title: "Servis süreci",
          body: "Randevu sonrası adresinizde teşhis; işçilik ve parça bedeli onayınızla. Bağımsız özel teknik servis — yetkili servis değiliz.",
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan çamaşır makinesi servisi aynı gün gelir mi?",
          answer:
            "Yoğunluğa göre aynı gün veya ertesi iş günü planlanabilir. Su kaçağı durumunda fişi çekmeniz önerilir.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer:
            "Kerem Teknik Servis bağımsız özel teknik servistir; markaların yetkili servisi değildir.",
        },
      ],
    },
    "buzdolabi-servisi": {
      seoTitle: "Eyüpsultan Buzdolabı Servisi | Kerem Teknik",
      metaDescription:
        "Eyüpsultan buzdolabı servisi: soğutmama, buzlanma ve kompresör sesinde yerinde teşhis. Tel: 0551 397 25 26.",
      intro:
        "Eyüpsultan buzdolabı servisinde soğutma zayıflığı, aşırı buzlanma, fan/defrost ve kompresör sesi şikâyetleri önceliklidir. Gıda güvenliği açısından hızlı teşhis önerilir; Göktürk ve Alibeyköy adreslerine randevulu servis planlanır.",
      sections: [
        {
          id: "scope",
          title: "Hizmet kapsamı",
          body: "Kapı contası, evaporatör fanı, defrost sistemi ve soğutma performansı yerinde değerlendirilir. Onayınız olmadan parça değişimi yapılmaz.",
        },
        {
          id: "process",
          title: "Servis süreci",
          body: "Adres ve model bilgisi alınır, randevu planlanır, teşhis sonrası şeffaf fiyat paylaşılır. Bağımsız özel teknik servis olarak çalışırız.",
        },
      ],
      faqs: [
        {
          question: "Buzdolabı soğutmuyorsa ne yapmalıyım?",
          answer:
            "Termostat ayarını ve kapı contasını kontrol edin; sorun sürerse Eyüpsultan için randevu oluşturun. Bozulma riski olan gıdaları ayırın.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer:
            "Hayır; bağımsız özel teknik servisiz. Marka adları yalnızca kapsam açıklaması içindir.",
        },
      ],
    },
    "bulasik-makinesi-servisi": {
      seoTitle: "Eyüpsultan Bulaşık Makinesi Servisi | Kerem Teknik",
      metaDescription:
        "Eyüpsultan bulaşık makinesi servisi: koku, yıkama kalitesi ve tahliye arızalarında yerinde teşhis. Tel: 0551 397 25 26.",
      intro:
        "Eyüpsultan bulaşık makinesi servisinde yıkama kalitesi düşüklüğü, koku, su tahliyesi ve ısıtıcı/pompa arızaları yerinde teşhis edilir. Filtre ve sifon bağlantısı kullanıcı tarafından ön kontrol edilebilir.",
      sections: [
        {
          id: "scope",
          title: "Hizmet kapsamı",
          body: "Pompa, ısıtıcı, hortum/sifon ve program hatalarında teşhis yapılır. Uyumlu parça ve işçilik onayınızla uygulanır.",
        },
        {
          id: "process",
          title: "Servis süreci",
          body: "Randevu, yerinde teşhis, onaylı onarım. Kerem Teknik Servis bağımsız özel teknik servistir.",
        },
      ],
      faqs: [
        {
          question: "Bulaşık makinesi koku yapıyorsa ne yapılır?",
          answer:
            "Filtre ve kapı contası temizliği sonrası sorun sürüyorsa pompa/hortum tıkanıklığı veya iç birikinti kontrol edilir; yerinde müdahale planlanır.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer:
            "Hayır; markaların yetkili servisi değiliz, bağımsız özel servis olarak hizmet veririz.",
        },
      ],
    },
  },
};

export const REGION_SERVICE_CONTENT = mergeRegionServiceContent(
  REGION_SERVICE_CONTENT_BASE,
  REGION_KLIMA_INTENT_CONTENT,
);
