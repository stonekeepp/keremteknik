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
  alibeykoy: {
    "klima-servisi": {
      seoTitle: "Alibeyköy Klima Servisi | Aynı Gün Randevu | Kerem Teknik",
      metaDescription:
        "Alibeyköy klima servisi: yerinde arıza tespiti, bakım ve gaz kontrolü. Yeşilpınar, Karadolap, Güzeltepe. Randevu: 0551 397 25 26.",
      secondaryKeyphrases: [
        "alibeyköy klima servisi",
        "alibeyköy klima",
        "alibeyköy klima bakım",
        "alibeyköy klima tamiri",
      ],
      intro:
        "Alibeyköy klima servisi, Uygar Sokak üzerindeki merkez ofisimize yakın apartman stoğunda yerinde teşhisle planlanır. Sanayi ve konutun iç içe geçtiği semtte filtre tıkanması ve drenaj şikâyetleri sık görülür; Alibeyköy Caddesi trafiği nedeniyle randevu aralığı önceden netleştirilir. Yeşilpınar, Karadolap, Güzeltepe, Topçular ve Rami Cuma adreslerinde iç ünite çoğu zaman balkon duvarındadır.",
      sections: [
        {
          id: "scope",
          title: "Alibeyköy klima servisi kapsamı",
          body: `Alibeyköy’de klima servisi; duvar tipi split ve inverter cihazlarda soğutmama, ısıtmama, su damlatma, koku ve anormal ses şikâyetlerini kapsar. Önce kumanda ayarı, filtre durumu ve tahliye hattı kontrol edilir; ardından gaz kaçağı veya elektronik arıza ayrıştırılır.

Merkez noktamız semt içinde olduğu için parça teyidi ve ikinci ziyaret çoğu zaman kısa mesafede planlanır. Arçelik, Beko, Daikin, Samsung, LG, Bosch, Baymak ve benzeri yaygın markalarda bağımsız özel teknik servis olarak çalışırız; yetkili servis değiliz. Onayınız olmadan kart veya kompresör değişimi yapılmaz.

Periyodik bakımda iç ünite hijyeni, fan kanatları ve dış ünite hava girişi birlikte bakılır. Semtteki atölye ve ana yol tozu filtreleri merkeze göre daha hızlı doldurur; yaz öncesi temizlik enerji tüketimini düşürmeye yardımcı olur.`,
        },
        {
          id: "neighborhoods",
          title: "Alibeyköy semtinde klima verdiğimiz hatlar",
          body: `Bu sayfa Alibeyköy semti içindir; ilçe geneli Eyüpsultan klima sayfasındadır. Semt içi başlıca hatlar:

Alibeyköy Merkez ve Uygar Sokak çevresi: ofise en yakın rota, aynı gün penceresi daha sıktır.
Yeşilpınar ve Karadolap: çok katlı apartman, merdiven ve asansör erişimi randevu notuna yazılır.
Güzeltepe, Topçular, Mimarsinan: balkon dış ünite ve komşu bilgilendirmesi gerekebilir.
Rami Cuma hattı: Eyüpsultan ilçe sınırına yakın; adres mahalle adı ile teyit edilir.

Alibeyköy Caddesi ve çevre bağlantılarda sabah/akşam yoğunluğu varış aralığını etkiler. Site girişli binalarda güvenlik kaydı için daire numarası önceden alınır.`,
        },
        {
          id: "device-types",
          title: "Semtte sık görülen klima arızaları",
          body: `Apartman stoğunda en sık talepler: zayıf üfleme, iç üniteden su, kötü koku ve gece ses artışı. Zayıf üflemede önce filtre ve dış ünite hava yolu bakılır; gaz şüphesi varsa kaçak testi dolumdan önce gelir. Su damlatmada tahliye tıkanıklığı veya eğim hatası öne çıkar.

Sanayiye yakın konutlarda dış ünite kanatları daha çabuk tozlanır; yıllık bakımdan kısa aralıklarla filtre kontrolü önerilir. Kumanda çalışmıyorsa pil ve alıcı yüzeyi kullanıcı kontrolüdür; kart arızası ölçüm sonrası konuşulur.

Gaz işlemi yalnızca modelin uygun soğutucu türü ve kaçak sonucu netleştikten sonra planlanır. Kaçak varken dolum önerilmez.`,
        },
        {
          id: "local-notes",
          title: "Uygar Sokak ofisi ve semt planlaması",
          body: `Ofisimiz Alibeyköy Uygar Sokak üzerindedir; semt içi çoğu adrese kuş uçuşu kısa mesafedir, yol süresi cadde trafiğine bağlıdır. Aynı sokak/blokta birden fazla daire talebi tek rotada birleştirilebilir.

Dış ünite yangın merdiveni veya dar balkondaysa merdiven güvenliği ve komşu onayı randevu günü netleştirilir. Eski bina stoğunda sigorta kapasitesi ve priz hattı teşhis listesindedir.

İlçe dışındaki Göktürk veya Rami Yeni gibi adresler bu semt sayfasının konusu değildir; Eyüpsultan ilçe sayfasından yönlendirilir. Google Haritalar kaydımızdan ofis konumu görülebilir; randevu telefon, WhatsApp veya form ile alınır.`,
        },
        {
          id: "parent-hub",
          title: "Eyüpsultan ilçe klima sayfası",
          href: "/servis-bolgeleri/eyupsultan/klima-servisi",
          body: `Alibeyköy, Eyüpsultan ilçesine bağlı bir semttir. İlçe genelindeki mahalleler, Göktürk kuzeyi ve Kemerburgaz hattı ilçe klima sayfasında toplanır. Semt içi apartman ve ofis yakınlığı bu sayfada; ilçe haritası ve diğer mahalleler bağlı hub’dadır.`,
        },
        {
          id: "process",
          title: "Alibeyköy klima servis süreci",
          body: `1) Adres (sokak ve mahalle), marka-model ve şikâyet özeti alınır.
2) Semt içi taleplerde aynı gün veya ertesi iş günü saat aralığı önerilir; cadde yoğunluğuna göre pencere kayabilir.
3) Yerinde ölçüm sonrası işçilik ve parça bedeli onayınıza sunulur.
4) Onaylanan işlem yapılır; soğutma/ısıtma kısa test edilir.
5) Bağımsız özel servis bilgilendirmesi paylaşılır.

Cumartesi planlı randevu açıktır. Pazar için önceden rezervasyon gerekir.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy hangi ilçeye bağlı?",
          answer:
            "Alibeyköy, Eyüpsultan ilçesi sınırları içinde bir semttir. Semt içi klima randevusu bu sayfadan; ilçe geneli Eyüpsultan klima sayfasından planlanır.",
        },
        {
          question: "Alibeyköy'de klima servisi aynı gün gelir mi?",
          answer:
            "Ofis semt içinde olduğu için Alibeyköy Merkez, Yeşilpınar ve Karadolap hatlarında aynı gün penceresi sık açılır. Saat, rota ve ekip müsaitliğine göre bildirilir.",
        },
        {
          question: "Dış ünite balkondaysa ne bilgi vermeliyim?",
          answer:
            "Kat, balkon yönü ve merdiven/asansör durumunu yazmanız yeterlidir. Dar balkonda merdiven kullanımı randevu günü teyit edilir.",
        },
        {
          question: "Alibeyköy'de klima bakımı ne zaman yapılmalı?",
          answer:
            "Yaz öncesi, Nisan-Mayıs aralığında filtre ve dış ünite kontrolü önerilir. Sanayiye yakın konutlarda sezon içinde ikinci filtre bakımı gerekebilir.",
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
  },
  gokturk: {
    "klima-servisi": {
      seoTitle: "Göktürk Klima Servisi | Yerinde Randevu | Kerem Teknik",
      metaDescription:
        "Göktürk klima servisi: villa ve site adreslerinde yerinde teşhis, bakım, gaz kontrolü. 5. Levent, Işıklar. Tel: 0551 397 25 26.",
      secondaryKeyphrases: [
        "göktürk klima servisi",
        "göktürk klima",
        "göktürk klima bakım",
        "5. levent klima",
      ],
      intro:
        "Göktürk klima servisi, kapalı site ve villa stoğuna göre planlanır. Göktürk Merkez ve 5. Levent’te dış ünite sıkça bahçe, çatı veya otopark katındadır; güvenlik kaydı için blok ve daire randevu öncesi alınır. Alibeyköy ofisinden kuzey rotası TEM bağlantısı üzerinden kurulur, varış aralığı yola göre paylaşılır.",
      sections: [
        {
          id: "scope",
          title: "Göktürk klima servisi kapsamı",
          body: `Göktürk’te klima servisi; ev tipi split, çoklu iç ünite (multi) ve villa salon tipi cihazlarda arıza tespiti, bakım, tahliye ve gaz/basınç değerlendirmesini kapsar. Site teknik odası veya çatı dış ünite erişimi randevu kaydının parçasıdır.

Marka-model bilgisi teşhisi hızlandırır. Daikin, Mitsubishi Electric, Samsung, LG, Toshiba, Arçelik ve benzeri modellerde bağımsız özel teknik servis olarak yerinde müdahale sunulur; yetkili servis değiliz. Onaysız parça değişimi yapılmaz.

Villa ve büyük dairelerde birden fazla iç ünite aynı günde kontrol edilebilir; her ünite için ayrı onay alınır. VRF/merkezi sistemler kurumsal kapsamda ayrıca netleştirilir.`,
        },
        {
          id: "neighborhoods",
          title: "Göktürk ve kuzey mahalleler",
          body: `Bu sayfa Göktürk semti içindir. Kapsam: Göktürk Merkez, 5. Levent, Işıklar, Ağaçlı, Odayeri, Pirinççi ve Çiftalan.

Kemerburgaz ayrı semt URL’si değildir; ilçe klima hub’ında kalır. Göktürk–Kemerburgaz yolunda öğleden sonra trafik varış penceresini uzatabilir.

Site kapısında kimlik ve araç plakası istenebilir. Bahçe dış ünitede ıslak zemin ve kablo kanalı; çatı ünitesinde merdiven/iskele ihtiyacı önceden sorulur.`,
        },
        {
          id: "device-types",
          title: "Villa ve sitede öne çıkan klima işleri",
          body: `Göktürk stoğunda multi split hatlar ve uzun bakır hat daha sıktır. Soğutma düşüklüğünde iç ünite filtresi ile dış ünite hava yolu ayrı bakılır; hat kaçak şüphesinde basınca göre karar verilir.

Çatı dış ünitelerinde yaprak ve toz birikimi hava girişini kesebilir. Bahçe ünitesinde çim sulama suyu kablo ve fan tarafını ıslatmasın diye konum not edilir.

Su damlatma villalarda tavan içi tahliye eğiminden kaynaklanabilir; asma tavan erişimi varsa randevu günü belirtilmelidir. Gaz dolumu kaçak kapanmadan önerilmez.`,
        },
        {
          id: "levent-vs-merkez",
          title: "Göktürk Merkez ve 5. Levent farkı",
          body: `Göktürk Merkez’de caddeye yakın sitelerde otopark katı dış ünite ve güvenlik bankosu rutini yaygındır. 5. Levent hattında villa bahçesi ve çatı üniteleri daha sık görülür; randevu kaydına hangi cephe ve kaçıncı kat yazılmalıdır.

Ağaçlı, Odayeri ve Pirinççi daha seyrek yerleşimdir; yol tarifinde site adı tek başına yetmeyebilir, sokak ve kapı numarası istenir. Işıklar ve Çiftalan’da orman/tozu ile villa bahçe sulaması dış ünite bakımı aralığını kısaltabilir.

Bu ayrımlar Alibeyköy apartman stoğuna benzemez; semt sayfası bu yüzden ilçe hub’ından ayrı durur.`,
        },
        {
          id: "local-notes",
          title: "Güvenlik kaydı ve kuzey rota",
          body: `Alibeyköy merkezinden Göktürk’e kuş uçuşu mesafe ilçe içi kuzey hattıdır; yol süresi TEM ve Göktürk girişi trafiğine bağlıdır. Aynı sitede birden fazla daire talebi güvenlik listesine birlikte yazılabilir.

Ziyaretçi bildirimi yapılmayan randevularda kapıda bekleme oluşur. Blok, daire, dış ünite katı ve site adı kaydı süreci kısaltır.

İlçe geneli ve Alibeyköy apartman hattı bu sayfanın konusu değildir; bağlı ilçe hub’ı ve Alibeyköy semt sayfası ayrı tutulur.`,
        },
        {
          id: "parent-hub",
          title: "Eyüpsultan ilçe klima sayfası",
          href: "/servis-bolgeleri/eyupsultan/klima-servisi",
          body: `Göktürk, Eyüpsultan ilçesine bağlıdır. Rami, tarihi merkez ve ilçe mahalle listesi ilçe klima sayfasındadır. Semt detayı (site/villa, 5. Levent, çatı ünitesi) bu sayfada kalır.`,
        },
        {
          id: "process",
          title: "Göktürk klima servis süreci",
          body: `1) Site/villa adı, blok-daire, dış ünite konumu ve cihaz modeli alınır.
2) Kuzey rota için saat aralığı paylaşılır; güvenlik kaydı sizin tarafta başlatılır.
3) Yerinde teşhis ve fiyat onayı.
4) Onaylanan işçilik/parça uygulanır; üniteler test edilir.
5) Bağımsız özel servis notu bırakılır.

Cumartesi planlıdır. Pazar ön rezervasyon ister. Acil soğutmama, ekip uygunluğuna göre kaydırılır.`,
        },
      ],
      faqs: [
        {
          question: "Göktürk hangi ilçede?",
          answer:
            "Göktürk, Eyüpsultan ilçesi içindeki bir semttir. Semt klima randevusu bu sayfadan; ilçe geneli Eyüpsultan klima sayfasından ilerler.",
        },
        {
          question: "Site yönetimine ne söylemeliyim?",
          answer:
            "Teknisyen ziyaret saati, daire numarası ve mümkünse plaka bilgisi yeterlidir. Dış ünite çatıdaysa site görevlisinin eşlik etmesi gerekebilir.",
        },
        {
          question: "Göktürk'e aynı gün klima servisi gelir mi?",
          answer:
            "Kuzey rota ve site girişine bağlıdır. Sabah taleplerinde aynı gün penceresi açılabilir; öğleden sonra TEM yoğunluğu aralığı kaydırabilir.",
        },
        {
          question: "Kemerburgaz bu sayfada mı?",
          answer:
            "Hayır. Kemerburgaz ayrı URL açılmaz; Eyüpsultan ilçe klima kapsamındadır. Bu sayfa Göktürk Merkez, 5. Levent ve listedeki kuzey mahalleler içindir.",
        },
        {
          question: "Yetkili klima servisi misiniz?",
          answer:
            "Kerem Teknik Servis bağımsız özel teknik servistir; markaların yetkili servisi değildir.",
        },
        {
          question: "Onarım öncesi fiyat belli olur mu?",
          answer:
            "Evet. Teşhis sonrası işçilik ve parça bedeli onayınıza sunulur; onay olmadan ek işlem yapılmaz.",
        },
      ],
    },
  },
  eyupsultan: {
    "klima-servisi": {
      seoTitle: "Eyüpsultan Klima Servisi | Aynı Gün Randevu | Kerem Teknik",
      metaDescription:
        "Eyüpsultan klima servisi: yerinde arıza tespiti, bakım, gaz kontrolü. Rami, Yeşilpınar, Kemerburgaz. Tel: 0551 397 25 26.",
      secondaryKeyphrases: [
        "eyüpsultan klima servisi",
        "eyüpsultan klima",
        "eyüp klima servisi",
        "eyüpsultan klima bakım",
      ],
      intro:
        "Eyüpsultan klima servisi ilçe genelini kapsar: Rami ve Yeşilpınar apartman hattı, tarihi merkez mahalleler, Kemerburgaz çevresi. Semt detayı Alibeyköy ve Göktürk sayfalarındadır; bu sayfa ilçe hub’ıdır. Yoğun yaz döneminde aynı gün randevu, rota ve ekip müsaitliğine göre paylaşılır.",
      sections: [
        {
          id: "scope",
          title: "Eyüpsultan klima servisi kapsamı",
          body: `Eyüpsultan'da klima servisi; split, inverter, salon tipi ve uygun olduğunda kaset tipi cihazlarda arıza tespiti, periyodik bakım, filtre/serpantin temizliği, drenaj kontrolü ve gaz kaçak/basınç değerlendirmesini kapsar. Soğutmama, ısıtmama, su damlatma, koku, aşırı ses ve kumanda/sensör sorunlarında önce kullanım ayarı ile teknik arıza ayrıştırılır.

Marka ve model bilgisi paylaşıldığında teşhis planı netleşir. Arçelik, Beko, Daikin, Samsung, LG, Mitsubishi Electric, Toshiba, Bosch, Baymak, Airfel, General ve benzeri yaygın markalarda bağımsız özel teknik servis olarak yerinde müdahale sunulur; markanın yetkili servisi değiliz. Onayınız olmadan parça değişimi yapılmaz; işçilik ve parça seçenekleri teşhis sonrası şeffaf paylaşılır.

Periyodik bakımda filtre hijyeni, serpantin kontrolü, fan performansı ve drenaj hattı birlikte ele alınır. Bu adımlar yaz yoğunluğunda enerji tüketimini düşürmeye ve kötü koku riskini azaltmaya yardımcı olur. Kart/elektronik arızalarında önce ölçüm yapılır; gereksiz kart değişimi önerilmez.`,
        },
        {
          id: "neighborhoods-alibeykoy",
          title: "Alibeyköy semti klima sayfası",
          href: "/servis-bolgeleri/alibeykoy/klima-servisi",
          body: `Alibeyköy, ofisimizin bulunduğu semttir. Uygar Sokak, Alibeyköy Caddesi, Yeşilpınar, Karadolap, Güzeltepe ve Topçular hatlarındaki apartman stoğu semt sayfasında ayrıntılanır. İlçe hub’ında yalnızca yönlendirme vardır; semt içi cadde, ofis mesafesi ve sanayi tozu notları Alibeyköy klima sayfasındadır.`,
        },
        {
          id: "neighborhoods-gokturk",
          title: "Göktürk semti klima sayfası",
          href: "/servis-bolgeleri/gokturk/klima-servisi",
          body: `Göktürk Merkez, 5. Levent, Işıklar ve kuzey villa/site stoğu Göktürk klima sayfasındadır. Çatı ve bahçe dış ünite, site güvenlik kaydı ve TEM rotası orada yazılır. Kemerburgaz ayrı URL açılmaz; ilçe kapsamındadır ve varış aralığı Göktürk–Kemerburgaz yolu trafiğine göre paylaşılır.`,
        },
        {
          id: "neighborhoods-center",
          title: "Rami, tarihi merkez ve diğer mahalleler",
          body: `Yoğun apartman: Rami Cuma, Rami Yeni, Yeşilpınar (ilçe planı), Silahtarağa, Emniyettepe, Defterdar, Nişanca, Mithatpaşa, Akşemsettin, Merkez, Mimar Sinan, İslambey, İhsaniye, Düğmeciler, Sakarya, Esentepe, Çırçır, Akpınar.

Tarihi dokuya yakın mahallelerde eski elektrik tesisatı ve sigorta kapasitesi kontrol listesindedir. Yüksek katlı veya site girişli adreslerde balkon/teras güvenliği randevu notuna eklenir.

Odayeri, Pirinççi, Ağaçlı ve Çiftalan kuzey mahalleleri Göktürk semt sayfasıyla da ilişkilidir; ilçe randevusu yine bu hub üzerinden alınabilir.`,
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
          body: `İlçe randevuları Alibeyköy ofisinden dağılır. Rami apartman stoğunda iç ünite balkon/mutfak duvarına yakındır. Kemerburgaz ve kuzey sitelerde dış ünite çatı veya bahçede olabilir.

Aynı adreste kombi + klima talebi tek randevuda planlanabilir. Bağımsız özel teknik servis olarak faturalı/fişli süreç ve onaylı işçilik esas alınır. Google Haritalar üzerindeki işletme kaydımızdan yön tarifi alınabilir; randevu için web formunu veya telefon hattımızı kullanmanız yeterlidir.`,
        },
        {
          id: "process",
          title: "Servis süreci — Eyüpsultan",
          body: `1) Telefon, WhatsApp veya iletişim formu ile adres (mahalle/sokak), cihaz marka-modeli ve şikâyet özeti alınır.
2) Aynı gün veya ertesi iş günü uygun saat aralığı önerilir; ofise yakın mahallelerde planlama genellikle daha hızlıdır.
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
          question: "Alibeyköy ve Göktürk için ayrı sayfa var mı?",
          answer:
            "Evet. Alibeyköy ve Göktürk semtleri için ayrı klima sayfalarımız vardır. İlçe geneli bu sayfadan; semt detayı ilgili semt sayfasından okunur.",
        },
        {
          question: "Kemerburgaz'a klima servisi gidiyor mu?",
          answer:
            "Evet. Kemerburgaz ayrı URL açılmaz; Eyüpsultan ilçe kapsamındadır. Geniş site/villa adreslerinde dış ünite erişimi önceden netleştirilir.",
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
