import type { ContentSection, FaqItem } from "./types";

/** Local shape — avoids circular import with region-service-content. */
type KlimaIntentOverride = {
  intro: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  seoTitle?: string;
  metaDescription?: string;
  secondaryKeyphrases?: string[];
};

/** Deep unique copy for indexable region × klima-intent money pages. */
export const REGION_KLIMA_INTENT_CONTENT: Record<
  string,
  Partial<Record<string, KlimaIntentOverride>>
> = {
  alibeykoy: {
    "klima-gaz-dolumu": {
      seoTitle: "Alibeyköy Klima Gaz Dolumu | Manometre Kaçak ve Tartı | Kerem Teknik",
      metaDescription: "Alibeyköy klima gaz dolumu: manometre, flare kaçak arama, R32/R410A tartılı dolum ve vakum. Merkez–Güzeltepe–Yeşilpınar. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy klima gaz dolumu","güzeltepe klima gaz","alibeyköy r32 dolum"],
      intro: "Alibeyköy Merkez ve Güzeltepe hattında klima gaz dolumu taleplerinde önce soğutucu etiketi okunur; manometre ile yüksek-düşük basınç kaydı alınır. Sanayiye bitişik apartmanlarda dış ünite titreşimi flare somunlarını gevşetebilir; Uygar Sokak ve Alibeyköy Caddesi üzerindeki adreslerde yağ izi ile köpük testi birlikte kullanılır. Merkez ofise yaklaşık 0,9 km mesafede planlanan işlerde semt içi kısa rota ölçüm ekipmanını aynı güne sığdırır. Kaçak kapatılmadan R32 veya R410A ilavesi yapılmaz; tartı ile gramaj doğrulanır, gerektiğinde vakum yeniden çekilir. Yeşilpınar ve Mimarsinan balkonlarında yağ filmi görülen flare noktaları kayıt altına alınır; komşuya gürültü vermeden manometre hortumu sabitlenir. Semt içi kısa mesafede ekip tartı ve vakum pompasını aynı turda taşıyabilir.",
      sections: [
        {
          id: "scope",
          title: "Alibeyköy gaz dolumu neyi kapsar?",
          body: `Kapsam rastgele gaz basmak değil; basınç dengesi, kaçak lokalizasyonu ve etiket uyumlu soğutucu ile kontrollü dolumdur. Split inverterlerde servis portundan okunan değerler yetersiz soğutmayı kompresör arızasından ayırır. Karadolap ve Mimarsinan balkonlarında dış ünite korkuluğa yakınsa flare bağlantıları özel dikkat ister.

Elektronik kart hatası ile gaz kaybı karıştırılmamalıdır: fan dönüyor ama üfleme ılıksa önce manometre, sonra serpantin ve genleşme elemanı incelenir. R32 cihazlarda açık ateş ve kapalı hacimde gereksiz işlem yapılmaz; dolum gramajı tartı veya kızgınlık değerleriyle teyit edilir.`,
        },
        {
          id: "neighborhoods",
          title: "Merkez, Güzeltepe ve Yeşilpınar randevu notları",
          body: `Merkez Mahallesi ile Güzeltepe yoğun apartman stoğunda park süresi randevu slotuna eklenir. Yeşilpınar–Karadolap bandında sanayi trafiği öğle saatlerinde yavaşlatabilir; Uygar Sokak tarafında dar çıkmazlar için araç bırakma noktası önceden sorulur.

Mimarsinan eski stok dairelerde dış ünite çatı sahanlığında olabilir; merdiven taşıması süreye yansır. Alibeyköy Caddesi üzerindeki işyerlerine yakın konutlarda gürültü ve titreşim kaynaklı mikro kaçaklar daha sık görülür.`,
        },
        {
          id: "process",
          title: "Tartılı dolum adımları",
          body: `Şikâyet (ılık hava, buzlanma, kısa döngü), marka-model ve soğutucu etiketi alınır. Yerinde manometre okunur; anormal değerde elektronik dedektör veya köpük ile kaçak aranır. Onaylanan onarım sonrası sızdırmazlık ve gerekirse vakum tamamlanır, tartılı dolum yapılır. İç ünite üfleme sıcaklığı ve akım ile doğrulama testi uygulanır.

Alibeyköy için tipik süre 40–90 dakikadır; hat yenileme gerekirse uzar. Fiyat, gaz türü ve işçilik kalemleri teşhis sonrası şeffaf paylaşılır.`,
        },
        {
          id: "when",
          title: "Ne zaman dolum gerekir?",
          body: `Eskiden iyi soğutan cihaz aniden güç kaybettiyse, dış ünite buz tutuyorsa veya bakır hatta yağ izi varsa gaz kaybı ihtimali yükselir. Yeni montajda eksik vakum da benzer belirtiler üretir. Filtre tıkalıysa önce bakım; gaz ikinci adımdır.

Yaz aylarında acele dolum talepleri artar; kaçak varken tekrarlayan basım kompresör ömrünü kısaltır. Bu yüzden önce sızıntı, sonra dolum prensibi uygulanır.`,
        },
        {
          id: "trust",
          title: "Ücret onayı ve bağımsız servis",
          body: `Teşhis sonrası işçilik ve soğutucu bedeli onayınıza sunulur; onay yoksa dolum yapılmaz. Kerem Teknik Servis bağımsız özel teknik servistir; marka yetkili servisi değildir. Alibeyköy işlerinde faturalı süreç ve ölçüm özeti paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy klima gaz dolumu ne kadar sürer?",
          answer: "Kaçak yoksa kontrollü dolum ve test genelde 40–70 dakikadır. Kaçak onarımı veya hat müdahalesi gerekirse süre uzar; aralık önceden bildirilir.",
        },
        {
          question: "Kaçak varken Alibeyköy’de gaz basılır mı?",
          answer: "Hayır. Önce kaçak lokalize edilip onarım teklifi sunulur; sızdırmazlık sağlanmadan dolum önerilmez.",
        },
        {
          question: "Güzeltepe ve Merkez’e aynı gün gelir misiniz?",
          answer: "0,9 km yakınlık ve ekip müsaitliğine göre aynı gün veya ertesi iş günü planlanır; saat aralığı 0551 397 25 26 üzerinden netleştirilir.",
        },
        {
          question: "R32 ile R410A karıştırılır mı?",
          answer: "Karıştırılmaz. Etiket ve servis bilgisine göre yalnızca uygun soğutucu kullanılır; yanlış gaz kompresöre zarar verebilir.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer: "Kerem Teknik Servis bağımsız özel teknik servistir; markaların yetkili servisi değildir.",
        },
      ],
    },
    "klima-bakimi": {
      seoTitle: "Alibeyköy Klima Bakımı | Filtre Serpantin Delta-T | Kerem Teknik",
      metaDescription: "Alibeyköy klima bakımı: filtre, serpantin, drenaj ve delta-T checklist. Güzeltepe, Karadolap, Mimarsinan. Randevu: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy klima bakımı","yeşilpınar klima bakım","güzeltepe filtre temizliği"],
      intro: "Alibeyköy’de periyodik klima bakımı, sanayiye yakın toz yükü yüzünden filtre ve evaporatör serpantinini öne çıkarır. Merkez ile Mimarsinan arasındaki apartman stoğunda checklist; iç ünite paneli, drenaj tavası, dış ünite kanatları ve delta-T ölçümünü kapsar. Alibeyköy Caddesi çevresindeki dairelerde ince partikül birikimi üfleme sıcaklık farkını düşürebilir. Yaklaşık 0,9 km semt içi mesafede planlanan bakımlarda ekip aynı gün filtre yıkama ile performans doğrulamasını tamamlayabilir. Karadolap ve Yeşilpınar dairelerinde checklist fotoğrafları kir sınıfını belgeler; tıkalı filtre ile düşük delta-T ayrımı yerinde anlatılır. Kullanıcıya bir sonraki filtre yıkama aralığı da randevu sonunda hatırlatılır.",
      sections: [
        {
          id: "scope",
          title: "Bakım checklist kapsamı",
          body: `Standart bakım; filtre sökümü ve yıkama, evaporatör kanatçıklarının yumuşak fırça veya uygun kimyasal ile temizliği, drenaj hattı akış testi, dış ünite fan-kanat kontrolü ve üfleme ile oda arası delta-T kaydını içerir. Kapasitör şişmesi veya anormal titreşim görülürse not düşülür; parça değişimi ayrı tekliftir.

Karadolap ve Yeşilpınar’da balkon tozu yüksekse serpantin yıkama sıklığı artırılır. Checklist maddeleri tamamlanmadan iş bitmiş sayılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Mahalle bazlı toz ve erişim",
          body: `Güzeltepe yüksek katlarında iç ünite duvar montajı paneli zorlaştırabilir; merdiven taşıması önceden konuşulur. Merkez sokaklarında park yeri sınırlı olduğundan ekip araçtan malzemeyi kısa mesafede taşır.

Uygar Sokak tarafındaki eski binalarda drenaj hortumu duvar içinde kıvrılmış olabilir; tıkanıklık kontrolü bakımın parçasıdır. Mimarsinan çatı ünitelerinde stabil platform şarttır.`,
        },
        {
          id: "process",
          title: "Bakım nasıl ilerler?",
          body: `Randevuda marka-model ve son bakım tarihi sorulur. Enerji kesilerek panel açılır; filtre ve serpantin durumu fotoğraflanır. Temizlik sonrası cihaz çalıştırılır, delta-T ve ses seviyesi kaydedilir. Anormal bulgular gaz şüphesi veya kart hatası gibi ayrı teşhis kalemi olarak sunulur.

Alibeyköy bakımları çoğu zaman 45–75 dakika sürer; ağır biopellem varsa süre uzar.`,
        },
        {
          id: "device",
          title: "Hangi cihazlarda bakım kritik?",
          body: `Inverter split’lerde tıkalı filtre kompresörü yüksek basınca zorlar. Kaset tipi ofis ünitelerinde filtre erişimi tavan boşluğundan yapılır. Pencere tipi eski cihazlarda serpantin temizliği sınırlıdır; gerçekçi beklenti paylaşılır.

Sanayiye yakın Alibeyköy adreslerinde yılda en az bir kapsamlı bakım önerilir; yoğun tozda sezon ortası ara kontrol faydalıdır.`,
        },
        {
          id: "trust",
          title: "Şeffaf ücret ve kayıt",
          body: `Bakım kapsamı ve ücret randevu veya yerinde ön inceleme sonrası onayınıza sunulur. Bağımsız özel teknik servis olarak marka yetkilisi değiliz; yapılan checklist maddeleri özetlenir. Alibeyköy bakım kayıtlarında ölçülen delta-T değeri paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy klima bakımı ne kadar sürer?",
          answer: "Standart filtre-serpantin bakımı genelde 45–75 dakikadır. Ağır kir veya drenaj tıkanıklığında süre uzayabilir.",
        },
        {
          question: "Bakım sırasında gaz dolumu da yapılır mı?",
          answer: "Hayır, bakım ile gaz işlemi ayrıdır. Basınç düşüklüğü şüphesi varsa ayrıca manometre ölçümü teklif edilir.",
        },
        {
          question: "Yeşilpınar’da yılda kaç bakım gerekir?",
          answer: "Toz yüküne göre yılda 1–2 kez kapsamlı bakım yeterlidir; yoğun sezon öncesi tercih edilir.",
        },
        {
          question: "Filtreyi kendim yıkasam yeterli mi?",
          answer: "Kullanıcı filtresi yardımcı olur ama serpantin, tava ve dış ünite checklist’i yerinde bakım gerektirir.",
        },
        {
          question: "Ücret önceden belli olur mu?",
          answer: "Standart checklist ücreti randevuda paylaşılır; ek parça veya gaz işlemi onayınız olmadan yapılmaz.",
        },
      ],
    },
    "klima-montaji": {
      seoTitle: "Alibeyköy Klima Montajı | Keşif Bakır Hat Azot Vakum | Kerem Teknik",
      metaDescription: "Alibeyköy klima montajı: keşif, konsol, bakır hat, azot sızdırmazlık testi ve vakum. Merkez–Mimarsinan. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy klima montajı","güzeltepe klima montaj","alibeyköy bakır hat"],
      intro: "Alibeyköy’de yeni klima montajı keşifle başlar: iç-dış ünite mesafesi, duvar tipi, elektrik hattı ve yoğuşma tahliyesi yerinde ölçülür. Merkez ve Güzeltepe apartmanlarında balkon konsolu ile çatı sahanlığı seçenekleri karşılaştırılır. Bakır hat flare işçiliği, azot ile basınç testi ve derin vakum olmadan cihaz garanti koşullarına uygun sayılmaz. Ofise yaklaşık 0,9 km mesafede Uygar Sokak–Alibeyköy Caddesi rotası ekip ve merdiven taşımasını hızlandırır. Mimarsinan ve Karadolap keşiflerinde duvar tipi, drenaj eğimi ve sigorta kapasitesi tek formda toplanır. Yanlış çap bakır veya eksik izolasyon teklife açıkça işlenir; onay olmadan delik açılmaz.",
      sections: [
        {
          id: "scope",
          title: "Montaj kapsamı ve malzemeler",
          body: `Kapsam; duvar deliği, titreşim takozlu konsol, izole bakır hat, sinyal kablosu, drenaj hortumu, azot sızdırmazlık testi, vakum ve ilk çalıştırmayı içerir. Karadolap eski binalarda duvar kalınlığı ve elektrik panosu mesafesi keşif formuna yazılır.

R32 cihazlarda havalandırma ve açık ateş yasağına uyulur. Onaysız hat uzatma veya uygunsuz dirsek kullanılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Apartman ve sanayi çevresi yerleşim",
          body: `Yeşilpınar ve Mimarsinan’da site yönetimi dış ünite yerini kısıtlayabilir; keşifte yönetim kuralı sorulur. Merkez mahallesinde dar merdivenler büyük dış ünite taşımasını iki kişilik plan gerektirir.

Sanayiye yakın cephelerde toz ve egzoz yükü dış ünite yönünü etkiler; emiş tarafı mümkünse açık alana bakacak şekilde seçilir.`,
        },
        {
          id: "process",
          title: "Keşiften ilk çalıştırmaya",
          body: `Keşifte hat metrajı ve konsol tipi belirlenir; teklif kalem kalem sunulur. Onay sonrası delik ve konsol, bakır çekimi, flare sıkımı, azot test, vakum, gaz açma ve uzaktan kumanda ayarı sırası izlenir. Üfleme sıcaklığı ve ses kontrolü ile teslim yapılır.

Alibeyköy standart split montajı genellikle yarım–bir gün sürer; uzun hat veya çatı işi uzatır.`,
        },
        {
          id: "when",
          title: "Montaj öncesi hazırlık",
          body: `Elektrik prizi ve sigorta kapasitesi kontrol edilir; yetersiz hat ayrı elektrik işidir. Balkon demiri çürükse konsol alternatifi önerilir. Kışın montaj mümkün olsa da yoğuşma testi için ılık gün tercih edilir.

İkinci el cihaz taşımada eski bakırın yeniden kullanımı risklidir; çoğu vakada yeni hat önerilir.`,
        },
        {
          id: "trust",
          title: "Teklif ve garanti sınırı",
          body: `Keşif sonrası işçilik ve sarf bedeli onayınıza sunulur. Satıcı yetkili montaj ağı olmak zorunda değiliz; bağımsız özel teknik servis olarak ölçü kayıtları paylaşılır. Alibeyköy montajlarında vakum süresi ve azot basıncı not edilir.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy klima montajı ne kadar sürer?",
          answer: "Standart duvar tipi split genelde yarım–bir gündür. Çatı, uzun hat veya betonarme özel işçilikte süre uzar.",
        },
        {
          question: "Keşif ücretsiz mi?",
          answer: "Keşif koşulları randevuda açıklanır; montaj onaylanırsa çoğu zaman keşif bedeli işçilikten düşülür veya dahil edilir.",
        },
        {
          question: "Güzeltepe’de site izni gerekir mi?",
          answer: "Birçok site dış ünite yeri için yönetim onayı ister; keşifte kural netleştirilir.",
        },
        {
          question: "Vakum yapılmazsa ne olur?",
          answer: "Nem ve hava kompresöre zarar verir; performans düşer. Azot test ve vakum standart prosedürümüzdür.",
        },
        {
          question: "Eski bakır hat kullanılır mı?",
          answer: "Duruma göre; mikroçatlak veya yanlış çap varsa yeni hat önerilir. Riskler keşifte anlatılır.",
        },
      ],
    },
    "klima-ariza-tamiri": {
      seoTitle: "Alibeyköy Klima Arıza Tamiri | Hata Kodu PCB Teşhisi | Kerem Teknik",
      metaDescription: "Alibeyköy klima arıza tamiri: hata kodu okuma, PCB ve kompresör kök neden teşhisi. Karadolap–Merkez. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy klima arıza","güzeltepe klima tamiri","alibeyköy hata kodu"],
      intro: "Alibeyköy’de klima arıza tamiri kök neden bulmaya dayanır: kumandadaki hata kodu, PCB üzerindeki LED yanıp sönme ve akım ölçümü birlikte okunur. Merkez–Güzeltepe apartmanlarında sık görülen şikâyetler üfleme yok, kısa döngü ve dış ünite çalışmama şeklindedir. Uygar Sokak hattında titreşim kaynaklı kablo kopmaları ile kart arızası ayrılır. Yaklaşık 0,9 km yakınlık sayesinde teşhis ekipmanı aynı gün sahaya çıkarılabilir; parça değişimi onayınız olmadan yapılmaz. Yeşilpınar ve Karadolap adreslerinde hata kodu ile birlikte boru sensörü direnci okunur; kör kart değişimi yerine ölçülebilir kök neden hedeflenir. Parça uyumu ve tedarik süresi onay öncesi netleştirilir.",
      sections: [
        {
          id: "scope",
          title: "Teşhis kapsamı",
          body: `Kapsam; hata kodu çözümü, sensör (boru/oda) kontrolü, röle ve kapasitör ölçümü, kompresör sargı direnci ve PCB görsel incelemesidir. Yeşilpınar’da inverter kartlarında şişmiş kondansatör sık rastlanır.

Gaz eksikliği ile elektronik arıza ayrımı manometre ve elektrik ölçümüyle yapılır. Kör parça değiştirme yerine ölçülebilir kök neden hedeflenir.`,
        },
        {
          id: "neighborhoods",
          title: "Semt tipik arıza profili",
          body: `Sanayiye yakın Mimarsinan ve Karadolap’ta toz, PCB soğutma fanını tıkayabilir. Merkez mahallesinde eski tesisat topraklama sorunları kartı strese sokar.

Alibeyköy Caddesi gürültülü cephelerde dış ünite fan rulmanı erken aşınabilir; ses şikâyeti ayrı değerlendirilir.`,
        },
        {
          id: "process",
          title: "Arıza süreci",
          body: `Şikâyet ve hata kodu alınır; güvenlik için fiş veya sigorta kontrol edilir. Ölçümlerle kök neden listelenir; işçilik ve parça teklifi sunulur. Onay sonrası değişim ve fonksiyon testi yapılır. Uyumsuz yan sanayi parça dayatılmaz.

Alibeyköy teşhisleri çoğu vakada 30–60 dakikadır; parça tedariki ayrı planlanır.`,
        },
        {
          id: "when",
          title: "Ne zaman tamir, ne zaman değişim?",
          body: `Kart yanığı tekrarlıyorsa güç kaynağı ve topraklama da kontrol edilir. Kompresör kilitliyse maliyet cihaz yaşıyla karşılaştırılır. On yıldan eski ünitelerde ekonomik sınır açıkça anlatılır.

Su taşması varsa önce drenaj; elektronik ıslanmışsa kurutma ve test şarttır.`,
        },
        {
          id: "trust",
          title: "Parça ve bağımsızlık",
          body: `Net işçilik ve parça teklifi olmadan işlem yapılmaz. Marka yetkili servisi değiliz; değiştirilen parçanın uyumluluğu açıklanır. Alibeyköy onarımlarında ölçüm değerleri kayıt altına alınır.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy’de klima hata kodu nasıl okunur?",
          answer: "Kumanda veya iç ünite LED yanıp sönme sayısına göre kod alınır; modele göre anlamı açıklanır ve ölçümle doğrulanır.",
        },
        {
          question: "PCB değişimi şart mı?",
          answer: "Her zaman değil. Sensör, kapasitör veya kablo sorunu kartı taklit edebilir; önce ölçüm yapılır.",
        },
        {
          question: "Aynı gün tamir olur mu?",
          answer: "Teşhis aynı gün çoğu zaman mümkündür. Parça stokta yoksa tedarik günü ayrıca planlanır.",
        },
        {
          question: "Kompresör arızası kesin midir?",
          answer: "Sargı direnci, akım ve basınç birlikte bakılır; tek belirtiyle kesin hüküm verilmez.",
        },
        {
          question: "Garanti kapsamında mısınız?",
          answer: "Bağımsız özel teknik servisiz; cihazın marka garantisi satıcı veya yetkili koşullarına bağlıdır.",
        },
      ],
    },
    "klima-temizligi": {
      seoTitle: "Alibeyköy Klima Temizliği | Hijyenik Yıkama Küf Giderme | Kerem Teknik",
      metaDescription: "Alibeyköy klima temizliği: biopellem, küf giderme, tava hijyeni ve serpantin yıkama. Yeşilpınar–Güzeltepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy klima temizliği","güzeltepe klima yıkama","alibeyköy küf temizliği"],
      intro: "Alibeyköy klima temizliği hijyen odaklıdır: evaporatör üzerindeki biopellem, küf kokusu ve drenaj tavasındaki birikinti önceliklenir. Merkez ile Güzeltepe dairelerinde kapalı ortam nemi yazın tava taşmasına yol açabilir. Karadolap–Yeşilpınar bandında toz, serpantin kanatçıklarını yapıştırır; yumuşak yıkama ve antibakteriyel uygulama ile hava kalitesi yükseltilir. Semt içi yaklaşık 0,9 km mesafede planlanan hijyen işlerinde koruyucu örtü ve su tahliyesi daireye zarar vermeden yürütülür. Mimarsinan eski ünitelerde kırılgan kanatlar yumuşak fırçayla ele alınır; ağır biopellemde süre uzayabileceği önceden söylenir. Temizlik bitiminde üfleme kokusu ve drenaj akışı birlikte kontrol edilir.",
      sections: [
        {
          id: "scope",
          title: "Hijyenik temizlik kapsamı",
          body: `Kapsam; filtre, evaporatör serpantin, vantilatör kanadı, drenaj tavası ve mümkünse dış ünite kanat temizliğiidir. Küf kokusu varsa tava ve hortum ayrı dezenfekte edilir. Ağır biopellemde özel kimyasal ve fırçalama süresi uzar.

Mimarsinan eski ünitelerde kırılgan plastikler için agresif basınçlı su kullanılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Nem ve toz yoğun mahalleler",
          body: `Uygar Sokak tarafı kuzey cepheli dairelerde nem birikimi küfü hızlandırır. Alibeyköy Caddesi’ne bakan evlerde egzoz tozu filtreyi çabuk kirletir.

Merkez apartmanlarında ortak havalandırma kısıtlıysa koku şikâyeti komşu daireyle karışabilir; kaynak yerinde ayrılır.`,
        },
        {
          id: "process",
          title: "Yıkama adımları",
          body: `Enerji kesilir, panel sökülür, zemin korunur. Serpantin ve tava yıkanır; drenaj akışı test edilir. Kurutma sonrası cihaz çalıştırılıp koku kontrolü yapılır. Kullanıcıya filtre takvimi anlatılır.

Alibeyköy hijyen temizliği tipik 60–100 dakikadır.`,
        },
        {
          id: "when",
          title: "Ne zaman temizlik şart?",
          body: `Koku, alerji şikâyeti, siyah su damlaması veya üflemede göz yanması varsa hijyen temizliği önceliklidir. Yalnızca filtre silmek yetersiz kalabilir.

Sezon başı temizlik, yaz boyu koku riskini düşürür.`,
        },
        {
          id: "trust",
          title: "Ücret ve kimyasal şeffaflığı",
          body: `Kir sınıfı görüldükten sonra ücret onayınıza sunulur. Bağımsız özel teknik servis olarak marka yetkilisi değiliz; kullanılan ürünler ve önerilen filtre aralığı anlatılır.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy klima temizliği kokuyu bitirir mi?",
          answer: "Çoğu küf ve biopellem kaynaklı koku temizlikte azalır. Kanal veya duvar nemi varsa ayrıca nem kaynağı aranır.",
        },
        {
          question: "Bebekli evde kimyasal güvenli mi?",
          answer: "Uygulama sonrası havalandırma önerilir; ürün bilgisi paylaşılır. Hassas durumda alternatif yöntem konuşulur.",
        },
        {
          question: "Temizlik ile bakım aynı mı?",
          answer: "Temizlik hijyen yıkamasına odaklanır; bakım checklist’i performans ölçümlerini de içerir. İkisini birlikte talep edebilirsiniz.",
        },
        {
          question: "Ne sıklıkla yaptırmalıyım?",
          answer: "Kullanım ve toz yüküne göre yılda 1–2 hijyen temizliği yeterlidir.",
        },
        {
          question: "Su daireye zarar verir mi?",
          answer: "Koruyucu örtü ve kontrollü tahliye kullanılır; riskli zemin önceden korunur.",
        },
      ],
    },
    "acil-klima-servisi": {
      seoTitle: "Alibeyköy Acil Klima Servisi | Aynı Gün Öncelikli Müdahale | Kerem Teknik",
      metaDescription: "Alibeyköy acil klima servisi: taşma, yanık koku, aşırı sıcak ve fiş çek güvenliği. Merkez–Güzeltepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["alibeyköy acil klima","güzeltepe acil servis","alibeyköy klima acil"],
      intro: "Alibeyköy’de acil klima servisi öncelik sırasına göre planlanır: tavan veya duvar taşması, yanık kokusu ve aşırı sıcak gece şikâyetleri öne alınır. Merkez ve Güzeltepe’de dar sokak parkı varışı geciktirebilir; Uygar Sokak adreslerinde net tarif istenir. Güvenlik için yanık koku veya duman varsa fiş çekilmesi ve sigorta kontrolü anlatılır. Ofise yaklaşık 0,9 km mesafede semt içi rota, müsait ekiple aynı gün slot ihtimalini yükseltir; kalıcı onarım ile geçici emniyet ayrımı net söylenir. Yeşilpınar ve Mimarsinan çağrılarında şikâyet tipi (taşma, koku, aşırı sıcak) öncelik skoruna yazılır. Geçici drenaj açma ile kalıcı hortum yenileme aynı iş kalemi sayılmaz; fark telefonla da özetlenir.",
      sections: [
        {
          id: "scope",
          title: "Acil müdahale kapsamı",
          body: `Öncelik; güvenli enerji kesimi yönlendirmesi, su taşması için drenaj açma, kısa süreli soğutma sağlayan geçici önlem ve kök neden teşhisidir. Parça yoksa geçici çözüm ile kalıcı randevu ayrılır.

Karadolap ve Mimarsinan’da gece çağrılarında gürültü kısıtı varsa sabah erken slot önerilir.`,
        },
        {
          id: "neighborhoods",
          title: "Hızlı varış notları",
          body: `Alibeyköy Caddesi trafik yoğunluğunda alternatif yan sokaklar kullanılır. Yeşilpınar çıkışında sanayi tır trafiği öğleden sonra sıkışabilir.

Site girişlerinde güvenlik kaydı için plaka bilgisi önceden iletilir.`,
        },
        {
          id: "process",
          title: "Acil süreç",
          body: `Telefon veya WhatsApp ile şikâyet tipi alınır; güvenlik adımları anlatılır. Sahada hızlı teşhis, geçici emniyet, onaylı onarım veya parça siparişi sırası izlenir. İş bitiminde yapılanlar kısa özetlenir.

Alibeyköy acil kayıtlarında geçici ve kalıcı ayrımı not edilir.`,
        },
        {
          id: "when",
          title: "Ne acil sayılır?",
          body: `Su damlaması mobilyayı tehdit ediyorsa, cihaz yanık kokuyorsa veya bebek yaşlı evinde sıcaklık kritikse öncelik yükselir. Hafif soğutmama tek başına acil olmayabilir; slot müsaitliğine göre planlanır.

Fiş çekmeden müdahale istenmez; elektrik riski varsa önce enerji kesilir.`,
        },
        {
          id: "trust",
          title: "Öncelik şeffaflığı",
          body: `Önceliklendirme şeffaf anlatılır; onayınız olmadan parça takılmaz. Bağımsız özel teknik servisiz. Alibeyköy acil işlerinde ücret aralığı mümkün olduğunca önceden paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Alibeyköy’de aynı gün acil gelir misiniz?",
          answer: "Ekip ve rota müsaitliğine bağlıdır; 0,9 km yakınlık avantajdır. Saat aralığı 0551 397 25 26 ile netleştirilir.",
        },
        {
          question: "Taşmada ne yapmalıyım?",
          answer: "Cihazı kapatıp fişi çekin, tavayı taşıran suyu silin, kovayı hortum ucuna koyun; ekip drenajı açar.",
        },
        {
          question: "Gece servisi var mı?",
          answer: "Mesai dışı talepler müsaitliğe göre değerlendirilir; güvenlik riski varsa yönlendirme telefonla verilir.",
        },
        {
          question: "Acil ücret farklı mı?",
          answer: "Öncelikli slot ve mesai dışı koşullar randevuda açıklanır; sürpriz kalem eklenmez.",
        },
        {
          question: "Geçici çözüm kalıcı sayılır mı?",
          answer: "Hayır. Geçici emniyet ile kalıcı onarım ayrı planlanır; fark açıkça belirtilir.",
        },
      ],
    },
  },
  eyupsultan: {
    "klima-gaz-dolumu": {
      seoTitle: "Eyüpsultan Klima Gaz Dolumu | Rami–Göktürk Kaçak Testi | Kerem Teknik",
      metaDescription: "Eyüpsultan klima gaz dolumu: manometre ölçümü, flare kaçak testi, R32 tartı. Rami, Göktürk, Kemerburgaz. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan klima gaz dolumu","göktürk klima gaz","rami klima gaz dolumu"],
      intro: "Eyüpsultan ilçesinde klima gaz dolumu planı mahalle bandına göre değişir: Rami’nin sık apartman stoğu ile Göktürk–Kemerburgaz villa/site hattı aynı gün rotasında birleştirilmez. Emniyettepe ve Yeşilpınar adreslerinde dış ünite çoğunlukla balkon konsolunda; kaçak aramada flare somunu ve servis portu manometreyle okunur. Ofise yaklaşık 3,9 km değişken mesafede varış süresi trafiğe bağlıdır. Etiket R32 veya R410A netleşmeden ve sızıntı kapatılmadan tartılı dolum yapılmaz; vakum ihtiyacı hat müdahalesine göre değerlendirilir. Yeşilpınar ve Emniyettepe bandında yağ izi görülen bağlantılar fotoğraflanır; villa uzun hatlarında mikro kaçak arama süresi ayrıca belirtilir. Tartı gramajı etiket değerine göre doğrulanmadan iş kapatılmaz.",
      sections: [
        {
          id: "scope",
          title: "Eyüpsultan’da gaz işleminin sınırı",
          body: `İşin özü basınç okuma, kaçak yerini işaretleme ve doğru soğutucu ile gramajlı dolumdur. Villa tipi Göktürk bahçelerinde uzun bakır hat mikroçatlakları ılık üflemeyi gaz eksikliği gibi gösterebilir; önce dedektör, sonra köpük.

Alibeyköy mahallesi Eyüpsultan sınırında sanayi tozu flare bağlantılarını kirletebilir. Kompresör sesi anormalken kör dolum yapılmaz; akım ve basınç birlikte yorumlanır. R32 için kapalı depoda işlem açılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Rami’den Kemerburgaz’a erişim",
          body: `Rami yoğunluğunda park ve asansör beklemesi süreye eklenir. Göktürk sitelerinde güvenlik kaydı ve dış ünite yerleşim kuralı önceden sorulur. Kemerburgaz’a uzanan bantta yol süresi randevu penceresini genişletir.

Emniyettepe yamaç sokaklarında ekip aracı bırakma noktası WhatsApp konum ile netleştirilir. Yeşilpınar tarafında apartman ile müstakil karışımı hat uzunluğunu değiştirir.`,
        },
        {
          id: "process",
          title: "Ölçümden tartıya akış",
          body: `Model etiketi ve şikâyet alınır. Manometre yüksek-düşük basınç kaydı tutulur. Kaçak varsa onarım teklifi; yoksa tartılı dolum ve üfleme doğrulaması yapılır. Gerekirse vakum yenilenir.

Eyüpsultan’da tipik saha süresi 45–100 dakika bandındadır; villa çatı ünitelerinde merdiven veya platform eklenir.`,
        },
        {
          id: "when",
          title: "Dolum kararı ne zaman?",
          body: `Buzlanma, yağ lekesi veya ani kapasite düşüşü gaz kaybını düşündürür. Yeni taşınmış cihazlarda yanlış vakum geçmişi sık görülür. Filtre tıkalıysa önce bakım önerilir.

Yaz sıcaklarında tekrarlayan dolum isteği kaçak onarımı olmadan kompresörü yorar; red gerekçesi açıkça anlatılır.`,
        },
        {
          id: "trust",
          title: "Onaylı işçilik notu",
          body: `İşçilik ve soğutucu bedeli teşhis sonrası onaylanır. Markaların yetkili ağı değiliz; bağımsız özel teknik servis olarak ölçüm özeti paylaşılır. Eyüpsultan randevularında mahalle bandı süreye yansıtılır.`,
        },
      ],
      faqs: [
        {
          question: "Göktürk’e gaz dolumu aynı gün olur mu?",
          answer: "3,9 km bandı ve site giriş süreleri nedeniyle slot müsaitliğe bağlıdır; saat aralığı telefonla netleşir.",
        },
        {
          question: "Rami’de kaçak onarımı şart mı?",
          answer: "Kaçak varken dolum önerilmez. Önce lokalizasyon ve onarım teklifi sunulur.",
        },
        {
          question: "Kemerburgaz villalarında süre neden uzun?",
          answer: "Uzun hat, çatı erişimi ve güvenlik prosedürü süreyi uzatabilir; keşif notu önceden alınır.",
        },
        {
          question: "Hangi gaz kullanılır?",
          answer: "Yalnızca cihaz etiketindeki soğutucu (R32, R410A vb.); karışım yapılmaz.",
        },
        {
          question: "Fatura kesiliyor mu?",
          answer: "Evet, onaylı işler için faturalı süreç yürütülür; ölçüm kalemleri özetlenir.",
        },
      ],
    },
    "klima-bakimi": {
      seoTitle: "Eyüpsultan Klima Bakımı | Delta-T Filtre Checklist | Kerem Teknik",
      metaDescription: "Eyüpsultan klima bakımı: filtre-serpantin checklist, drenaj kontrolü ve delta-T. Rami–Göktürk–Emniyettepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan klima bakımı","kemerburgaz klima bakım","emniyettepe klima bakımı"],
      intro: "Eyüpsultan klima bakımı apartman ve villa farkını checklist’e yansıtır. Rami dairelerinde filtre tozu öne çıkarken Göktürk sitelerinde dış ünite bahçe ünitelerinde yaprak ve polen birikir. Emniyettepe yamaç konutlarında drenaj eğimi yanlışsa tava taşması bakımda yakalanır. Serpantin temizliği sonrası delta-T ölçülerek soğutma verimi kayıt altına alınır. İlçe içi yaklaşık 3,9 km değişken mesafede mahalle bandı randevu saatini belirler. Kemerburgaz ve Yeşilpınar adreslerinde bahçe ünitesi yaprak birikimi checklist’e eklenir; delta-T düşükse gaz veya kir ayrımı anlatılır. Bakım özeti mahalle ve ölçülen sıcaklık farkıyla birlikte iletilir.",
      sections: [
        {
          id: "scope",
          title: "Checklist maddeleri",
          body: `İç filtre, evaporatör kanatçığı, vantilatör, drenaj hattı, dış ünite kanat ve elektrik bağlantı gözlemi yapılır. Anormal titreşim veya kapasitör şişmesi not edilir; değişim ayrı tekliftir.

Kemerburgaz müstakillerinde uzun drenaj hortumu akış testi şarttır. Bakım bitmeden performans iddiası verilmez.`,
        },
        {
          id: "neighborhoods",
          title: "Mahalle tipolojisi",
          body: `Yeşilpınar ve Alibeyköy mahalle sınırında toz profili sanayiye yakınlaşır. Göktürk’te site yönetim odası randevu girişini hızlandırır veya yavaşlatır.

Rami dar sokaklarında malzeme taşıması merdivenle yapılır; asansör boyutu önceden sorulur.`,
        },
        {
          id: "process",
          title: "Saha akışı",
          body: `Son bakım tarihi ve şikâyet alınır. Enerji kesilerek panel açılır, kir sınıfı fotoğraflanır. Temizlik ve delta-T sonrası özet verilir. Gaz veya kart şüphesi ayrı kalem olur.

Eyüpsultan bakımları genelde 50–80 dakika sürer.`,
        },
        {
          id: "device",
          title: "Cihaz tipine göre bakım",
          body: `Duvar tipi split en yaygın senaryodur. Multi split’te her iç ünite ayrı checklist ister. Yer tipi ünitelerde taban filtresi unutulmamalıdır.

İnverterlerde tıkalı filtre frekansı yükseltir; bakım kompresör ömrünü korur.`,
        },
        {
          id: "trust",
          title: "Ücret netliği",
          body: `Kapsam ve ücret ön inceleme sonrası onaylanır. Yetkili servis değiliz; checklist çıktısı paylaşılır. Eyüpsultan bakım notunda mahalle ve ölçülen sıcaklık farkı yazılır.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan klima bakımı ücreti nasıl netleşir?",
          answer: "Standart checklist randevuda paylaşılır; ek parça veya gaz işlemi ayrı onay ister.",
        },
        {
          question: "Göktürk sitesinde dış ünite bakımı yapılır mı?",
          answer: "Evet; güvenlik ve erişim izni varsa bahçe veya çatı üniteleri checklist’e dahildir.",
        },
        {
          question: "Delta-T ne anlama gelir?",
          answer: "Üfleme ile oda sıcaklığı farkıdır; düşük fark kirli serpantin veya gaz sorununa işaret edebilir.",
        },
        {
          question: "Bakım koku giderir mi?",
          answer: "Hafif kokuda yardımcı olur; ağır küfte hijyenik yıkama önerilir.",
        },
        {
          question: "Ne sıklıkla bakım yaptırmalıyım?",
          answer: "Yıllık bir kapsamlı bakım çoğu ev için yeterlidir; villa bahçe ünitelerinde sezon ortası ara kontrol faydalıdır.",
        },
      ],
    },
    "klima-montaji": {
      seoTitle: "Eyüpsultan Klima Montajı | Villa-Site Keşif Azot Testi | Kerem Teknik",
      metaDescription: "Eyüpsultan klima montajı: villa/site keşfi, bakır hat, azot sızdırmazlık ve vakum. Göktürk–Kemerburgaz. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan klima montajı","göktürk klima montaj","rami klima montajı"],
      intro: "Eyüpsultan’da klima montajı keşfi, Rami apartman duvarı ile Göktürk villa bahçesini aynı kalıba sokmaz. İç-dış ünite mesafesi, konsol tipi, bakır hat izolasyonu ve drenaj eğimi yerinde çizilir. Kemerburgaz sitelerinde yönetim dış ünite yeri kuralı teklifi değiştirir. Azot ile sızdırmazlık ve derin vakum tamamlanmadan ilk çalıştırma yapılmaz. Yaklaşık 3,9 km değişken bandında ekip ve merdiven planı mahalleye göre kurulur. Emniyettepe eğimli arsalarda platform ihtiyacı keşifte işaretlenir; Göktürk sitelerinde yönetim kuralı teklifi değiştirmeden montaj başlamaz. Azot basıncı ve vakum süresi teslim tutanağına işlenir.",
      sections: [
        {
          id: "scope",
          title: "Montaj paketi",
          body: `Duvar deliği, titreşim takozu, izole bakır, sinyal kablosu, drenaj, azot test, vakum ve kumanda ayarı dahildir. Emniyettepe eğimli arsalarda dış ünite platformu keşifte seçilir.

R32 montajında havalandırma kuralına uyulur; onaysız hat uzatma yapılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Apartman–villa farkı",
          body: `Rami’de komşu daire gürültü şikâyeti için konsol lastiği kalitesi kritiktir. Göktürk villalarında uzun hat metrajı teklifi yükseltebilir.

Yeşilpınar karışık dokuda hem balkon hem bahçe senaryosu görülür; keşif fotoğrafı şarttır.`,
        },
        {
          id: "process",
          title: "Keşiften teslime",
          body: `Keşif formu doldurulur, kalem kalem teklif verilir. Onay sonrası delik-konsol, bakır, flare, azot, vakum, gaz açma ve test sırası izlenir. Ses ve üfleme ile teslim yapılır.

Eyüpsultan standart montajı yarım–bir gün; villa uzun hat iki güne yayılabilir.`,
        },
        {
          id: "when",
          title: "Hazırlık checklist’i",
          body: `Sigorta kapasitesi ve priz hattı kontrol edilir. Çürük balkon demiri varsa alternatif konsol önerilir. Kış montajında yoğuşma testi sınırlı olabilir.

İkinci el taşımada eski bakırın riski anlatılır; çoğu zaman yeni hat önerilir.`,
        },
        {
          id: "trust",
          title: "Bağımsız montaj kaydı",
          body: `Sarf ve işçilik onay sonrası uygulanır. Satıcı yetkili ağı olmak zorunda değiliz; vakum süresi ve azot basıncı kayda geçer. Eyüpsultan işlerinde mahalle bandı süre notu düşülür.`,
        },
      ],
      faqs: [
        {
          question: "Kemerburgaz’da montaj kaç gün sürer?",
          answer: "Standart split çoğu zaman bir gündür; uzun hat veya özel platformda süre uzar.",
        },
        {
          question: "Site yönetimi izin ister mi?",
          answer: "Göktürk ve benzeri sitelerde sıkça evet; keşifte kural sorulur.",
        },
        {
          question: "Azot testi neden gerekli?",
          answer: "Flare kaçaklarını gaz basmadan yakalar; kompresör güvenliği için standarttır.",
        },
        {
          question: "Rami’de asansörle dış ünite çıkar mı?",
          answer: "Asansör ölçüsü keşifte alınır; yetmezse merdiven ekibi planlanır.",
        },
        {
          question: "Montaj sonrası garanti kimde?",
          answer: "İşçilik kaydı paylaşılır; cihaz marka garantisi satıcı koşullarına bağlıdır. Yetkili servis değiliz.",
        },
      ],
    },
    "klima-ariza-tamiri": {
      seoTitle: "Eyüpsultan Klima Arıza Tamiri | Kök Neden Hata Kodu | Kerem Teknik",
      metaDescription: "Eyüpsultan klima arıza tamiri: hata kodu okuma, PCB, sensör ve kök neden teşhisi. Rami–Emniyettepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan klima arıza","göktürk klima tamiri","kemerburgaz klima arıza"],
      intro: "Eyüpsultan klima arıza tamirinde önce hata kodu ve PCB davranışı okunur; Rami apartmanlarında topraklama kaynaklı kart yanıkları villa hattından farklı profil çizer. Göktürk sitelerinde dış ünite iletişim kablosu kopması çalışmama şikâyetini taklit eder. Kök neden bulunmadan parça dayatılmaz. Yaklaşık 3,9 km değişken mesafede mahalle bandı teşhis ekipmanının varışını etkiler; Emniyettepe ve Yeşilpınar adreslerinde ölçüm aynı gün tamamlanabilir. Kemerburgaz ve Yeşilpınar çağrılarında iletişim hattı kopması ile kart arızası önce ayrılır. Ölçüm değerleri onaylı teklifte görünür; stokta olmayan parça için net tedarik günü verilir.",
      sections: [
        {
          id: "scope",
          title: "Teşhis çerçevesi",
          body: `Hata kodu, boru/oda sensörü, röle, kapasitör, kompresör sargıları ve kart görsel kontrolü yapılır. Kemerburgaz’ta uzun hat iletişim hataları ayrı test edilir.

Gaz ile elektronik ayrımı manometre ve elektrik ölçümüyle netleştirilir.`,
        },
        {
          id: "neighborhoods",
          title: "Bölgesel arıza izleri",
          body: `Rami eski panolarında nötr-toprak karışıklığı kartı strese sokabilir. Göktürk bahçe ünitelerinde nem PCB’yi etkiler.

Alibeyköy mahalle sınırında titreşim kablo gevşemesi sık görülür.`,
        },
        {
          id: "process",
          title: "Onarıma giden yol",
          body: `Şikâyet alınır, güvenli enerji kontrolü yapılır, ölçümlerle kök neden listelenir. Teklif onayınca parça veya işçilik uygulanır, fonksiyon testi yapılır.

Eyüpsultan teşhisi çoğu zaman 35–70 dakikadır; tedarik ayrıdır.`,
        },
        {
          id: "when",
          title: "Tamir mi değişim mi?",
          body: `Tekrarlayan kart yanığında güç kalitesi incelenir. Kilitli kompresörde cihaz yaşıyla maliyet kıyaslanır. Su giren kartta kurutma sonrası test şarttır.

Ekonomik sınır açıkça konuşulur.`,
        },
        {
          id: "trust",
          title: "Parça şeffaflığı",
          body: `Teklif olmadan işlem yok. Marka yetkilisi değiliz; uyumluluk anlatılır. Eyüpsultan onarımlarında ölçüm değerleri kayda alınır.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan’da hata kodu yeterli midir?",
          answer: "Kod yol gösterir; sensör ve kart ölçümü olmadan kesin hüküm verilmez.",
        },
        {
          question: "Göktürk’te aynı gün PCB bulunur mu?",
          answer: "Stok ve model uyumuna bağlıdır; yoksa tedarik günü planlanır.",
        },
        {
          question: "İletişim hatası nedir?",
          answer: "İç-dış ünite kablo veya kopma sorunudur; özellikle uzun hatlı villa montajlarında görülür.",
        },
        {
          question: "Kompresör kesin arızalı denir mi?",
          answer: "Akım, direnç ve basınç birlikte bakılır; tek belirtiyle karar verilmez.",
        },
        {
          question: "Yetkili misiniz?",
          answer: "Hayır; bağımsız özel teknik servisiz.",
        },
      ],
    },
    "klima-temizligi": {
      seoTitle: "Eyüpsultan Klima Temizliği | Biopellem Tava Hijyeni | Kerem Teknik",
      metaDescription: "Eyüpsultan klima temizliği: küf, biopellem ve hijyenik tava-serpantin yıkama. Rami–Göktürk–Yeşilpınar. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan klima temizliği","göktürk klima yıkama","rami klima hijyen"],
      intro: "Eyüpsultan’da klima temizliği koku ve hijyen şikâyetlerinde öne çıkar. Rami kapalı dairelerinde evaporatör biopellemi hızla oluşurken Göktürk villalarında polen serpantine yapışır. Tava birikintisi siyah su damlatırsa önce hijyenik yıkama planlanır. Kemerburgaz–Emniyettepe bandında nemli bodrum kat üniteleri küf riskini artırır. İlçe içi yaklaşık 3,9 km değişken mesafede koruyucu örtü ve kontrollü su tahliyesi daire düzenini bozmadan uygulanır. Emniyettepe ve Yeşilpınar nemli katlarda tava birikintisi önceliklenir; polen yoğun villa ünitelerinde serpantin yıkama süresi uzayabilir. Filtre takvimi kullanıcıya yazılı hatırlatılır.",
      sections: [
        {
          id: "scope",
          title: "Hijyen kapsamı",
          body: `Filtre, serpantin, vantilatör, drenaj tavası ve erişilebilen dış ünite kanatları temizlenir. Antibakteriyel uygulama koku kaynağına göre seçilir.

Kırılgan plastiğe yüksek basınç uygulanmaz; Yeşilpınar eski ünitelerde yumuşak yöntem tercih edilir.`,
        },
        {
          id: "neighborhoods",
          title: "Koku profili mahallelere göre",
          body: `Rami’de banyo bitişik duvar nemi kokuyu klimaya taşıyabilir; kaynak ayrılır. Göktürk sitelerinde ortak havalandırma kısıtı kokuyu uzatır.

Alibeyköy mahalle sınırında toz ve nem kombosu biopellemi hızlandırır.`,
        },
        {
          id: "process",
          title: "Yıkama sırası",
          body: `Enerji kesilir, zemin korunur, panel sökülür. Serpantin ve tava yıkanır, drenaj test edilir, kurutma sonrası koku kontrolü yapılır. Filtre takvimi anlatılır.

Eyüpsultan hijyen işi tipik 60–110 dakikadır.`,
        },
        {
          id: "when",
          title: "Temizlik zamanı",
          body: `Göz yanması, küf kokusu, alerji artışı veya siyah damlama varsa önceliklidir. Sezon başı yıkama yaz şikâyetlerini azaltır.

Yalnızca bezle silmek serpantin biopellemini çözmez.`,
        },
        {
          id: "trust",
          title: "Ürün ve ücret",
          body: `Kir sınıfı görüldükten sonra ücret onaylanır. Yetkili servis değiliz; ürün bilgisi ve filtre aralığı paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan klima temizliği kokuyu alır mı?",
          answer: "Biopellem ve tava kaynaklı kokularda etkili olur; duvar nemi varsa ayrıca nem işi gerekir.",
        },
        {
          question: "Göktürk villasında süre neden uzun?",
          answer: "Birden fazla iç ünite veya zor erişim süreyi uzatır.",
        },
        {
          question: "Çocuklu evde uygulama nasıl?",
          answer: "Havalandırma önerilir; hassasiyette alternatif yöntem konuşulur.",
        },
        {
          question: "Temizlik bakımdan farkı nedir?",
          answer: "Temizlik hijyene odaklanır; bakım delta-T ve checklist ölçümlerini de kapsar.",
        },
        {
          question: "Ne sıklıkla?",
          answer: "Yılda 1–2 hijyen temizliği çoğu konut için yeterlidir.",
        },
      ],
    },
    "acil-klima-servisi": {
      seoTitle: "Eyüpsultan Acil Klima Servisi | Taşma Öncelikli Slot | Kerem Teknik",
      metaDescription: "Eyüpsultan acil klima servisi: taşma önceliği, yanık koku ve fiş çek yönlendirme. Rami–Göktürk bandı. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["eyüpsultan acil klima","göktürk acil klima servisi","rami acil klima"],
      intro: "Eyüpsultan acil klima çağrılarında öncelik su taşması, yanık koku ve kritik sıcaklıktadır. Rami apartmanlarında tava taşması alt komşuyu etkileyebilir; Göktürk–Kemerburgaz bandında site girişi varışı geciktirebilir. Emniyettepe yamaçlarında konum pini netleştirilir. Güvenlik için duman veya yanık kokuda fiş çekilmesi anlatılır. Yaklaşık 3,9 km değişken mesafede aynı gün slot ihtimali rota yoğunluğuna bağlıdır; geçici emniyet ile kalıcı onarım ayrılır. Yeşilpınar ve Alibeyköy mahalle sınırındaki çağrılarda konum pini ile blok bilgisi birlikte alınır. Geçici emniyet uygulandıysa kalıcı randevu aynı gün içinde netleştirilmeye çalışılır.",
      sections: [
        {
          id: "scope",
          title: "Acil kapsam",
          body: `Güvenli enerji yönlendirmesi, drenaj açma, kısa süreli rahatlama ve kök neden teşhisi önceliklidir. Parça yoksa geçici çözüm notu düşülür.

Yeşilpınar gece çağrılarında gürültü kuralı varsa sabah slotu önerilir.`,
        },
        {
          id: "neighborhoods",
          title: "Varış değişkenleri",
          body: `Rami trafiği akşam saatlerinde uzar. Göktürk sitelerinde güvenlik kaydı plaka ister.

Kemerburgaz yol bandı randevu penceresini genişletir; WhatsApp ile canlı konum paylaşılır.`,
        },
        {
          id: "process",
          title: "Çağrı akışı",
          body: `Şikâyet tipi alınır, güvenlik adımları anlatılır, sahada teşhis ve onaylı müdahale yapılır. Yapılanlar özetlenir.

Eyüpsultan acil kaydında geçici/kalıcı ayrımı yazılır.`,
        },
        {
          id: "when",
          title: "Acil kriterleri",
          body: `Mobilyayı ıslatan damlama, yanık koku veya risk grubu evinde aşırı sıcak öncelik yükseltir. Hafif performans düşüğü normal randevuya alınabilir.

Elektrik riskinde önce fiş veya sigorta kesilir.`,
        },
        {
          id: "trust",
          title: "Öncelik anlatımı",
          body: `Öncelik sırası açık anlatılır; onaysız parça takılmaz. Bağımsız özel teknik servisiz. Ücret aralığı mümkünse önceden paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Eyüpsultan’da aynı gün acil garanti mi?",
          answer: "Garanti edilmez; müsaitlik ve mahalle bandına bağlıdır. 0551 397 25 26 ile slot sorulur.",
        },
        {
          question: "Taşmada ilk adım?",
          answer: "Cihazı kapatın, fişi çekin, suyu silin; hortum ucuna kap koyun.",
        },
        {
          question: "Site geciktirir mi?",
          answer: "Göktürk güvenlik prosedürü varışı uzatabilir; plaka önceden iletilir.",
        },
        {
          question: "Mesai dışı gelir misiniz?",
          answer: "Müsaitliğe göre değerlendirilir; güvenlik yönlendirmesi telefonda verilir.",
        },
        {
          question: "Geçici çözüm yeterli mi?",
          answer: "Hayır; kalıcı onarım ayrı planlanır.",
        },
      ],
    },
  },
  gaziosmanpasa: {
    "klima-gaz-dolumu": {
      seoTitle: "Gaziosmanpaşa Klima Gaz Dolumu | Dar Sokak Yerinde Ölçüm | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa klima gaz dolumu: manometre, kaçak lokalizasyonu, R32 tartı. Karayolları–Yenidoğan–Küçükköy. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa klima gaz dolumu","küçükköy klima gaz","karayolları klima gaz"],
      intro: "Gaziosmanpaşa’da klima gaz dolumu sıkışık apartman dokusunda planlanır: Karayolları ve Yenidoğan dar sokaklarında ekip aracı bırakma noktası önceden konuşulur. Merkez Mahallesi ile Küçükköy adreslerinde dış ünite çoğu kez dar balkona sıkışmıştır; flare somunu ve servis portu manometreyle okunurken yağ izi aranır. Ofise yaklaşık 3,2 km mesafede ilçe merkezi yoğunluğu varış süresini etkiler. R32 veya R410A tartılı dolum ancak kaçak giderildikten ve etiket doğrulandıktan sonra yapılır; vakum ihtiyacı hat durumuna bağlanır. Karadeniz ve Merkez Mahallesi balkonlarında dar alan manometre yerleşimini zorlaştırabilir; güvenlik mesafesi korunarak ölçüm alınır. Kaçak onarımı onaylanmadan tartılı doluma geçilmez; gramaj etiketle doğrulanır.",
      sections: [
        {
          id: "scope",
          title: "Gaziosmanpaşa dolum çerçevesi",
          body: `Amaç basıncı rastgele yükseltmek değil; sızdırmazlığı kanıtlayıp etiket soğutucusuyla gramaj basmaktır. Karadeniz mahallesinde eski bakır hatlarda mikro kaçak ılık üflemeyi taklit eder; dedektör ve köpük sırası izlenir.

Kompresör akımı yüksekken kör dolum yapılmaz. Dar balkonlarda hortum ve manometre yerleşimi güvenlik mesafesiyle ayarlanır.`,
        },
        {
          id: "neighborhoods",
          title: "Karayolları–Küçükköy erişim",
          body: `Karayolları aksında park yeri bulmak öğle saatlerinde zordur; yan sokak tarifı istenir. Yenidoğan’da merdiven taşıması dış ünite çatıdaysa süreyi uzatır.

Merkez Mahallesi trafik ışıkları rotayı böler. Küçükköy ve Karadeniz’de apartman aralıkları dar olduğundan malzeme sırt çantasıyla çıkarılır.`,
        },
        {
          id: "process",
          title: "Sahadaki sıra",
          body: `Etiket okunur, şikâyet dinlenir, manometre kaydı alınır. Kaçak varsa onarım teklifi; yoksa tartı ve doğrulama testi yapılır. Gerekirse vakum yenilenir.

Gaziosmanpaşa’da ortalama müdahale 45–95 dakikadır; hat yenilemede uzar.`,
        },
        {
          id: "when",
          title: "Dolumu tetikleyen işaretler",
          body: `Ani kapasite kaybı, dış ünite buzlanması ve bakırda yağ filmi gaz şüphesini yükseltir. Yeni taşınmış cihazlarda eksik vakum geçmişi sık görülür.

Tıkalı filtre önce bakım ister; aksi halde dolum yanlış teşhis olur.`,
        },
        {
          id: "trust",
          title: "Onay ve fatura",
          body: `İşçilik ile soğutucu bedeli teşhis sonrası onaylanır. Marka yetkili ağı değiliz; bağımsız özel teknik servis olarak ölçüm özeti verilir. Gaziosmanpaşa işlerinde dar sokak notu süreye işlenir.`,
        },
      ],
      faqs: [
        {
          question: "Küçükköy’e aynı gün gaz dolumu gelir misiniz?",
          answer: "3,2 km mesafe avantajdır; ekip müsaitliğine göre 0551 397 25 26 ile slot netleşir.",
        },
        {
          question: "Dar balkonda işlem güvenli mi?",
          answer: "Hortum ve manometre yerleşimi mesafeye göre ayarlanır; güvensiz ise alternatif erişim planlanır.",
        },
        {
          question: "Kaçak varken basım yapılır mı?",
          answer: "Hayır. Önce lokalizasyon ve onarım teklifi sunulur.",
        },
        {
          question: "R32 özel önlem ister mi?",
          answer: "Evet; havalandırma ve ateş yasağına uyulur, karışım yapılmaz.",
        },
        {
          question: "Ücret nasıl belirlenir?",
          answer: "Gaz türü, kaçak onarımı ve işçilik kalemleri teşhis sonrası şeffaf listelenir.",
        },
      ],
    },
    "klima-bakimi": {
      seoTitle: "Gaziosmanpaşa Klima Bakımı | Checklist Serpantin Delta-T | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa klima bakımı: filtre, serpantin, drenaj ve delta-T checklist. Yenidoğan–Karadeniz–Küçükköy. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa klima bakımı","küçükköy klima bakım","karayolları klima bakımı"],
      intro: "Gaziosmanpaşa klima bakımı yoğun apartman stoğunda filtre ve serpantin checklist’iyle yürür. Karayolları–Yenidoğan hattında dar sokak tozu iç üniteyi hızla kirletir; Merkez Mahallesi dairelerinde drenaj tıkanıklığı tava taşmasına yol açabilir. Küçükköy ve Karadeniz’de balkon dış ünitelerinde kanat temizliği erişim notuna bağlıdır. Delta-T ölçümüyle soğutma verimi kayıtlanır. Ofise yaklaşık 3,2 km mesafede ilçe merkezi yoğunluğu randevu penceresini şekillendirir. Küçükköy ve Karadeniz checklist’inde drenaj akışı özel işaretlenir; egzoz tozu yüksek cephelerde filtre aralığı kısaltılır. Delta-T kaydı bakım özetine eklenir.",
      sections: [
        {
          id: "scope",
          title: "Bakımda neler yapılır?",
          body: `Filtre yıkama, evaporatör kanatçığı temizliği, vantilatör kontrolü, drenaj akış testi, dış ünite gözlemi ve delta-T kaydı standarttır. Şişmiş kapasitör görülürse ayrı teklif yazılır.

Checklist tamamlanmadan performans sözü verilmez.`,
        },
        {
          id: "neighborhoods",
          title: "Sıkışık sokak notları",
          body: `Yenidoğan çıkmazlarında araç bırakma noktası WhatsApp ile alınır. Karayolları üzerinde işyeri altı konutlarda egzoz tozu filtre ömrünü kısaltır.

Merkez Mahallesi asansörsüz binalarda malzeme taşıması süreyi etkiler.`,
        },
        {
          id: "process",
          title: "Adım adım bakım",
          body: `Son bakım tarihi sorulur, enerji kesilir, panel açılır, kir sınıfı belgelenir. Temizlik sonrası delta-T ve ses kaydı alınır. Gaz veya elektronik şüphe ayrı kalem olur.

Gaziosmanpaşa bakımı tipik 45–80 dakikadır.`,
        },
        {
          id: "device",
          title: "Cihaz çeşitleri",
          body: `Duvar tipi split yaygındır. Multi iç ünitelerde her oda ayrı checklist ister. Eski pencere tiplerinde beklenti sınırlı anlatılır.

İnverterlerde tıkalı filtre frekansı yükseltir; düzenli bakım ömrü korur.`,
        },
        {
          id: "trust",
          title: "Ücret netliği",
          body: `Kapsam ön inceleme sonrası onaylanır. Yetkili servis değiliz; checklist özeti paylaşılır. Gaziosmanpaşa notunda mahalle ve ölçülen fark yazılır.`,
        },
      ],
      faqs: [
        {
          question: "Gaziosmanpaşa klima bakımı ne kadar sürer?",
          answer: "Çoğu dairede 45–80 dakikadır; ağır kirde uzar.",
        },
        {
          question: "Karadeniz mahallesinde yılda kaç kez?",
          answer: "Yoğun tozda yılda 1–2 kapsamlı bakım önerilir.",
        },
        {
          question: "Bakım gaz doldurur mu?",
          answer: "Hayır. Basınç şüphesi varsa ayrı manometre teklifi sunulur.",
        },
        {
          question: "Drenaj tıkanınca ne olur?",
          answer: "Tava taşar; bakımda akış testi yapılır, gerekirse hortum açılır.",
        },
        {
          question: "Ücret peşin mi?",
          answer: "Standart checklist randevuda netleşir; ek kalem onay ister.",
        },
      ],
    },
    "klima-montaji": {
      seoTitle: "Gaziosmanpaşa Klima Montajı | Keşif Konsol Bakır Vakum | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa klima montajı: keşif, konsol, bakır hat, azot sızdırmazlık testi ve vakum. Küçükköy–Karayolları. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa klima montajı","yenidoğan klima montaj","karayolları klima montajı"],
      intro: "Gaziosmanpaşa’da klima montajı keşfi dar sokak ve sık apartman gerçeğine göre çizilir. Karayolları ile Yenidoğan’da balkon demiri taşıma kapasitesi konsol seçimini belirler; Merkez Mahallesi’nde elektrik panosu mesafesi ölçülür. Bakır hat flare’i, azot sızdırmazlık testi ve derin vakum tamamlanmadan cihaz çalıştırılmaz. Küçükköy–Karadeniz adreslerinde merdiven genişliği dış ünite taşıma planını değiştirir. Ofise yaklaşık 3,2 km mesafede ilçe yoğunluğu ekip saatini etkiler. Karadeniz ve Merkez Mahallesi keşiflerinde merdiven genişliği ve konsol demiri fotoğraflanır. Azot test sonucu düşükse flare yeniden sıkılır; vakum tamamlanmadan gaz açılmaz.",
      sections: [
        {
          id: "scope",
          title: "Montaj içeriği",
          body: `Duvar deliği, titreşim takozlu konsol, izole bakır, sinyal kablosu, drenaj, azot test, vakum ve ilk çalışma dahildir. Dar balkonlarda konsol açısı komşu görüşünü de hesaba katar.

R32’de havalandırma kuralı uygulanır; onaysız hat uzatılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Mahalle yerleşim kısıtları",
          body: `Yenidoğan’da site olmasa da apartman yönetimi dış ünite yerini tartışabilir. Karayolları gürültülü cephede emiş yönü seçimi önemlidir.

Küçükköy eski stokta duvar kalınlığı delik tipini değiştirir.`,
        },
        {
          id: "process",
          title: "Keşiften teslime",
          body: `Keşif formu ve kalem kalem teklif verilir. Onay sonrası delik, konsol, bakır, flare, azot, vakum, gaz açma ve test yapılır.

Gaziosmanpaşa standart split çoğu zaman yarım–bir gündür.`,
        },
        {
          id: "when",
          title: "Hazırlık",
          body: `Sigorta kapasitesi ve priz hattı kontrol edilir. Çürük demir varsa alternatif konsol önerilir. Kış montajında yoğuşma testi sınırlı olabilir.

İkinci el taşımada eski bakır riski anlatılır.`,
        },
        {
          id: "trust",
          title: "Kayıtlı montaj",
          body: `Sarf ve işçilik onaylıdır. Satıcı yetkili ağı olmak zorunda değiliz; vakum ve azot değerleri kayda geçer. Gaziosmanpaşa işlerinde sokak erişim notu düşülür.`,
        },
      ],
      faqs: [
        {
          question: "Gaziosmanpaşa montajı ne kadar sürer?",
          answer: "Standart duvar tipi genelde yarım–bir gündür; çatı veya uzun hatta uzar.",
        },
        {
          question: "Dar merdivende dış ünite nasıl çıkar?",
          answer: "Keşifte ölçü alınır; gerekirse iki kişilik merdiven planı kurulur.",
        },
        {
          question: "Azot ve vakum şart mı?",
          answer: "Evet; kaçak ve nem riskini azaltmak için standarttır.",
        },
        {
          question: "Keşif zorunlu mu?",
          answer: "Doğru teklif için yerinde ölçü önerilir; koşullar randevuda açıklanır.",
        },
        {
          question: "Garanti kimde?",
          answer: "İşçilik kaydı paylaşılır; marka garantisi satıcı koşullarına bağlıdır.",
        },
      ],
    },
    "klima-ariza-tamiri": {
      seoTitle: "Gaziosmanpaşa Klima Arıza Tamiri | Hata Kodu Kök Neden | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa klima arıza tamiri: hata kodu, PCB ve kompresör kök neden teşhisi. Karayolları–Yenidoğan. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa klima arıza","küçükköy klima tamiri","yenidoğan klima arıza"],
      intro: "Gaziosmanpaşa klima arıza tamirinde hata kodu, PCB LED davranışı ve akım ölçümü birlikte okunur. Karayolları–Yenidoğan apartmanlarında topraklama zayıflığı kart yanığını hızlandırabilir; Merkez Mahallesi’nde kısa döngü şikâyeti sensör veya gaz ile karışır. Küçükköy dar balkonlarında dış ünite fan rulman sesi ayrı incelenir. Kök neden bulunmadan parça dayatılmaz. Yaklaşık 3,2 km mesafede ilçe merkezi yoğunluğu teşhis ekipmanının varışını etkiler. Küçükköy ve Karadeniz adreslerinde topraklama zayıflığı kart yanığıyla birlikte değerlendirilir. Kök neden listesi onaylı teklifte yer alır; uyumsuz yan sanayi parça dayatılmaz.",
      sections: [
        {
          id: "scope",
          title: "Teşhis sınırı",
          body: `Hata kodu çözümü, boru/oda sensörü, röle, kapasitör, kompresör sargıları ve kart görsel kontrolü yapılır. Karadeniz mahallesinde nemli depo tipi balkonlar PCB’yi etkiler.

Gaz-elektronik ayrımı ölçümle netleşir.`,
        },
        {
          id: "neighborhoods",
          title: "Yoğun semt arıza izi",
          body: `Karayolları egzoz tozu dış ünite soğutmasını bozabilir. Yenidoğan eski panolarında nötr sorunu kartı strese sokar.

Küçükköy’de titreşim kablo gevşemesi sık görülür.`,
        },
        {
          id: "process",
          title: "Onarım yolu",
          body: `Şikâyet alınır, enerji güvenliği kontrol edilir, ölçümlerle kök neden listelenir. Onaylı parça veya işçilik sonrası fonksiyon testi yapılır.

Gaziosmanpaşa teşhisi çoğu vakada 30–65 dakikadır.`,
        },
        {
          id: "when",
          title: "Tamir–değişim sınırı",
          body: `Tekrarlayan kart yanığında güç kalitesi bakılır. Kilitli kompresörde yaş ve maliyet kıyaslanır. Islak kartta kurutma sonrası test şarttır.

Ekonomik sınır açık konuşulur.`,
        },
        {
          id: "trust",
          title: "Şeffaf parça",
          body: `Teklif olmadan işlem yok. Marka yetkilisi değiliz; uyumluluk anlatılır. Gaziosmanpaşa onarımlarında ölçüm kaydı tutulur.`,
        },
      ],
      faqs: [
        {
          question: "Gaziosmanpaşa’da hata kodu yeterli mi?",
          answer: "Yol gösterir; ölçüm olmadan kesin karar verilmez.",
        },
        {
          question: "Aynı gün PCB değişir mi?",
          answer: "Stok ve model uyumuna bağlıdır; yoksa tedarik planlanır.",
        },
        {
          question: "Fan sesi arıza mı?",
          answer: "Rulman aşınması olabilir; yerinde dinlenip ayrılır.",
        },
        {
          question: "Kompresör kesin midir?",
          answer: "Akım, direnç ve basınç birlikte yorumlanır.",
        },
        {
          question: "Yetkili servis misiniz?",
          answer: "Hayır; bağımsız özel teknik servisiz.",
        },
      ],
    },
    "klima-temizligi": {
      seoTitle: "Gaziosmanpaşa Klima Temizliği | Küf Biopellem Hijyen | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa klima temizliği: küf, biopellem, tava hijyeni ve serpantin yıkama. Küçükköy–Yenidoğan. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa klima temizliği","karayolları klima yıkama","küçükköy klima hijyen"],
      intro: "Gaziosmanpaşa’da klima temizliği hijyen ve koku odaklıdır. Karayolları apartmanlarında egzoz tozu serpantine yapışır; Yenidoğan kapalı dairelerinde biopellem hızla oluşur. Merkez Mahallesi’nde tava birikintisi siyah damlama yaparsa öncelik hijyenik yıkamadır. Küçükköy–Karadeniz bandında nemli kuzey cepheler küf riskini artırır. Yaklaşık 3,2 km mesafede koruyucu örtü ve kontrollü tahliye dar salonlarda dikkatle uygulanır. Merkez Mahallesi ve Karadeniz dairelerinde siyah damlama varsa tava hijyeni öne alınır; egzoz tozu yapışmış serpantinde fırçalama süresi uzatılır. Kurutma sonrası koku kontrolü yapılır. Yıkama sonrası üfleme kokusu ve drenaj akışı birlikte doğrulanır.",
      sections: [
        {
          id: "scope",
          title: "Hijyen paketi",
          body: `Filtre, evaporatör, vantilatör, drenaj tavası ve erişilebilir dış ünite kanatları temizlenir. Antibakteriyel seçim koku kaynağına göre yapılır.

Kırılgan plastiğe sert basınç uygulanmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Toz–nem haritası",
          body: `Karayolları cepheleri filtreyi çabuk doldurur. Yenidoğan’da banyo bitişik nem kokuyu klimaya taşıyabilir.

Küçükköy eski ünitelerde yumuşak fırçalama tercih edilir.`,
        },
        {
          id: "process",
          title: "Yıkama düzeni",
          body: `Enerji kesilir, zemin korunur, panel sökülür. Serpantin ve tava yıkanır, drenaj test edilir, kurutma sonrası koku kontrolü yapılır.

Gaziosmanpaşa hijyen işi tipik 55–100 dakikadır.`,
        },
        {
          id: "when",
          title: "Ne zaman yaptırmalı?",
          body: `Küf kokusu, alerji artışı, göz yanması veya siyah damlama varsa önceliklidir. Sezon başı yıkama yaz şikâyetini azaltır.

Bezle silmek biopellemi çözmez.`,
        },
        {
          id: "trust",
          title: "Ücret ve ürün",
          body: `Kir sınıfı görüldükten sonra ücret onaylanır. Yetkili servis değiliz; ürün bilgisi ve filtre aralığı paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Gaziosmanpaşa klima temizliği kokuyu alır mı?",
          answer: "Tava ve biopellem kaynaklı kokularda etkili olur; duvar nemi ayrı iş ister.",
        },
        {
          question: "Dar salonda su hasarı riski?",
          answer: "Örtü ve kontrollü tahliye kullanılır; zemin önceden korunur.",
        },
        {
          question: "Bakımdan farkı?",
          answer: "Temizlik hijyene odaklanır; bakım delta-T checklist’ini de kapsar.",
        },
        {
          question: "Ne sıklıkla?",
          answer: "Yılda 1–2 hijyen temizliği çoğu konut için yeterlidir.",
        },
        {
          question: "Çocuklu evde?",
          answer: "Havalandırma önerilir; hassasiyette alternatif konuşulur.",
        },
      ],
    },
    "acil-klima-servisi": {
      seoTitle: "Gaziosmanpaşa Acil Klima Servisi | Taşma Öncelik Fiş Çek | Kerem Teknik",
      metaDescription: "Gaziosmanpaşa acil klima servisi: taşma, yanık koku, fiş çek güvenliği ve öncelikli slot. Yenidoğan. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["gaziosmanpaşa acil klima","küçükköy acil klima","yenidoğan acil servis"],
      intro: "Gaziosmanpaşa acil klima çağrılarında su taşması, yanık koku ve kritik sıcaklık öne alınır. Karayolları dar sokak parkı varışı geciktirebilir; Yenidoğan çıkmazlarında net tarif şarttır. Merkez Mahallesi’nde alt komşuya akan tava suyu önceliği yükseltir. Güvenlik için duman veya yanık kokuda fiş çekilmesi anlatılır. Yaklaşık 3,2 km mesafede aynı gün slot ihtimali rota yoğunluğuna bağlıdır; geçici emniyet ile kalıcı onarım ayrılır. Küçükköy ve Karadeniz çağrılarında dar sokak bırakma noktası önceden alınır. Taşma vakasında geçici drenaj ile kalıcı hortum işi ayrı kalemlerde anlatılır; fiş çek güvenliği tekrarlanır.",
      sections: [
        {
          id: "scope",
          title: "Acil müdahale",
          body: `Güvenli enerji yönlendirmesi, drenaj açma, kısa rahatlama ve kök neden teşhisi önceliklidir. Parça yoksa geçici çözüm notu düşülür.

Karadeniz gece çağrılarında gürültü kuralı varsa sabah slotu önerilir.`,
        },
        {
          id: "neighborhoods",
          title: "Hızlı varış engelleri",
          body: `Karayolları akşam trafiği uzar. Küçükköy’de site olmasa da apartman girişi dar olabilir.

Yenidoğan’da canlı konum paylaşımı istenir.`,
        },
        {
          id: "process",
          title: "Çağrı sırası",
          body: `Şikâyet tipi alınır, güvenlik adımları anlatılır, sahada teşhis ve onaylı müdahale yapılır. Özet paylaşılır.

Gaziosmanpaşa acil kaydında geçici/kalıcı ayrımı yazılır.`,
        },
        {
          id: "when",
          title: "Acil sayılan durumlar",
          body: `Mobilyayı ıslatan damlama, yanık koku veya risk grubunda aşırı sıcak öncelik yükseltir. Hafif performans düşüğü normal randevuya alınabilir.

Elektrik riskinde önce fiş kesilir.`,
        },
        {
          id: "trust",
          title: "Öncelik netliği",
          body: `Öncelik sırası açık anlatılır; onaysız parça takılmaz. Bağımsız özel teknik servisiz. Ücret aralığı mümkünse önceden paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Gaziosmanpaşa’da aynı gün acil garanti mi?",
          answer: "Garanti edilmez; müsaitlik şarttır. 0551 397 25 26 ile sorun.",
        },
        {
          question: "Taşmada ne yapayım?",
          answer: "Kapatın, fişi çekin, suyu silin; hortuma kap koyun.",
        },
        {
          question: "Dar sokak geciktirir mi?",
          answer: "Evet; yan sokak bırakma noktası önceden alınır.",
        },
        {
          question: "Mesai dışı?",
          answer: "Müsaitliğe göre; güvenlik yönlendirmesi telefonda verilir.",
        },
        {
          question: "Geçici çözüm kalıcı mı?",
          answer: "Değil; kalıcı onarım ayrı planlanır.",
        },
      ],
    },
  },
  kagithane: {
    "klima-gaz-dolumu": {
      seoTitle: "Kağıthane Klima Gaz Dolumu | Yüksek Kat Manometre Tartı | Kerem Teknik",
      metaDescription: "Kağıthane klima gaz dolumu: yüksek kat manometre, flare kaçak, R32 tartı ve vakum. Çağlayan–Seyrantepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane klima gaz dolumu","seyrantepe klima gaz","çağlayan klima gaz"],
      intro: "Kağıthane’de klima gaz dolumu yüksek katlı yenileme projelerinde farklı erişim ister: Çağlayan ve Gürsel sitelerinde dış ünite çoğunlukla balkon veya teknik katta, Seyrantepe–Çeliktepe bandında asansör boyutu ekipman taşımasını belirler. Şirintepe adreslerinde flare kaçakları manometre ve dedektörle aranır. Ofise yaklaşık 2,9 km mesafede Haliç yakını trafik randevu penceresini etkiler. Etiket R32/R410A netleşmeden ve sızıntı kapatılmadan tartılı dolum yapılmaz; vakum hat müdahalesine göre yenilenir. Gürsel ve Şirintepe sitelerinde teknik kat erişimi yönetim iznine bağlanabilir; flare kaçakları dedektörle işaretlenir. Tartı doğrulaması olmadan R32 veya R410A basılmaz; vakum ihtiyacı hat durumuna göre netleşir.",
      sections: [
        {
          id: "scope",
          title: "Kağıthane gaz kapsamı",
          body: `Basınç okuma, kaçak işaretleme ve gramajlı doğru soğutucu dolumu esastır. Yüksek kat rüzgârı dış ünite titreşimini artırıp flare somununu gevşetebilir.

Kart arızası ile gaz kaybı karıştırılmaz; akım ve manometre birlikte yorumlanır. R32’de kapalı hacimde gereksiz işlem açılmaz.`,
        },
        {
          id: "neighborhoods",
          title: "Site girişleri ve mahalleler",
          body: `Çağlayan sitelerinde güvenlik kaydı plaka ister. Seyrantepe’de adliye çevresi trafik öğleden sonra sıkışır.

Çeliktepe ve Şirintepe dönüşüm binalarında teknik kat erişimi yönetimden izin gerektirebilir. Gürsel’de dar otopark malzeme taşımasını planlatır.`,
        },
        {
          id: "process",
          title: "Ölçüm–tartı akışı",
          body: `Etiket ve şikâyet alınır, manometre kaydı tutulur. Kaçak varsa onarım teklifi; yoksa tartı ve üfleme doğrulaması yapılır.

Kağıthane’de tipik süre 40–90 dakikadır; teknik kat taşıması uzatır.`,
        },
        {
          id: "when",
          title: "Dolum zamanı",
          body: `Ani ılık üfleme, buzlanma veya yağ izi gaz şüphesini yükseltir. Yeni proje teslimlerinde eksik vakum izleri görülebilir.

Filtre tıkalıysa önce bakım; acele basım reddedilebilir.`,
        },
        {
          id: "trust",
          title: "Onaylı ölçüm",
          body: `İşçilik ve soğutucu teşhis sonrası onaylanır. Marka yetkili değiliz; bağımsız özel teknik servis olarak özet paylaşılır. Kağıthane işlerinde site giriş süresi not edilir.`,
        },
      ],
      faqs: [
        {
          question: "Seyrantepe’ye aynı gün gelir misiniz?",
          answer: "2,9 km mesafe avantajdır; site girişi ve müsaitlik 0551 397 25 26 ile netleşir.",
        },
        {
          question: "Yüksek katta kaçak nasıl bulunur?",
          answer: "Manometre, dedektör ve köpük ile; güvenlik kemeri gereken yerde platform planlanır.",
        },
        {
          question: "R32 karışır mı?",
          answer: "Hayır; yalnızca etiket soğutucusu kullanılır.",
        },
        {
          question: "Site yönetimi engeller mi?",
          answer: "Teknik kat izni gerekebilir; randevu öncesi sorulur.",
        },
        {
          question: "Ücret nasıl?",
          answer: "Gaz türü ve kaçak onarımı teşhis sonrası listelenir.",
        },
      ],
    },
    "klima-bakimi": {
      seoTitle: "Kağıthane Klima Bakımı | Site Checklist Delta-T | Kerem Teknik",
      metaDescription: "Kağıthane klima bakımı: site checklist, filtre-serpantin temizliği ve delta-T. Çağlayan–Çeliktepe–Gürsel. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane klima bakımı","gürsel klima bakım","şirintepe klima bakımı"],
      intro: "Kağıthane klima bakımı yüksek kat ve kentsel dönüşüm stoğuna göre checklist üretir. Çağlayan sitelerinde filtre tozu inşaat periyotlarında artar; Seyrantepe ofis-konut karışımında kaset tip erişim tavan boşluğundan yapılır. Gürsel ve Çeliktepe’de dış ünite teknik katta ise kanat temizliği izinle yürür. Delta-T ile verim kaydı tutulur. Yaklaşık 2,9 km mesafede site giriş prosedürü randevu saatini etkiler. Çeliktepe ve Şirintepe checklist’inde site teknik kat izni not edilir; inşaat tozu dönemlerinde filtre aralığı kısaltılır. Delta-T düşükse kir veya gaz ayrımı kullanıcıya açıklanır.",
      sections: [
        {
          id: "scope",
          title: "Checklist içeriği",
          body: `Filtre, evaporatör, vantilatör, drenaj, dış ünite gözlemi ve delta-T standarttır. Kapasitör veya titreşim notu ayrı teklife gider.

Şirintepe yeni projelerde üretici panel kilitleri söküm süresini uzatabilir.`,
        },
        {
          id: "neighborhoods",
          title: "Yüksek kat erişimi",
          body: `Çağlayan’da asansör boyutu ekipman çantasını sınırlar. Seyrantepe’de yol çalışması varışı kaydırabilir.

Gürsel otoparkında misafir kotası varsa plaka önceden verilir.`,
        },
        {
          id: "process",
          title: "Bakım akışı",
          body: `Son bakım tarihi alınır, enerji kesilir, kir sınıfı belgelenir, temizlik ve delta-T sonrası özet verilir.

Kağıthane bakımı genelde 50–85 dakikadır.`,
        },
        {
          id: "device",
          title: "Cihaz tipolojisi",
          body: `Duvar tipi ve kaset tip yaygındır. Multi split’te her iç ünite ayrı checklist ister.

İnverterlerde tıkalı filtre frekansı yükseltir.`,
        },
        {
          id: "trust",
          title: "Kayıt netliği",
          body: `Kapsam onaylıdır. Yetkili servis değiliz; checklist çıktısı paylaşılır. Kağıthane notunda site adı ve ölçülen fark yazılır.`,
        },
      ],
      faqs: [
        {
          question: "Kağıthane klima bakımı süresi?",
          answer: "Çoğu dairede 50–85 dakikadır; kaset tipte uzayabilir.",
        },
        {
          question: "Teknik kat izni gerekir mi?",
          answer: "Birçok sitede evet; randevu öncesi yönetim sorulur.",
        },
        {
          question: "Bakım gaz ekler mi?",
          answer: "Hayır; basınç şüphesi ayrı ölçüm teklifidir.",
        },
        {
          question: "İnşaat tozu etkiler mi?",
          answer: "Çağlayan dönüşüm bölgelerinde filtre daha sık kirlenir.",
        },
        {
          question: "Ücret?",
          answer: "Standart checklist randevuda netleşir.",
        },
      ],
    },
    "klima-montaji": {
      seoTitle: "Kağıthane Klima Montajı | Site Keşif Azot Vakum | Kerem Teknik",
      metaDescription: "Kağıthane klima montajı: site keşfi, konsol, bakır hat, azot sızdırmazlık ve vakum. Seyrantepe–Şirintepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane klima montajı","çağlayan klima montaj","çeliktepe klima montajı"],
      intro: "Kağıthane’de klima montajı site yönetmeliği ve yüksek kat lojistiğiyle başlar. Çağlayan–Şirintepe projelerinde dış ünite yeri yönetim şablonuyla sınırlı olabilir; Seyrantepe’de balkon konsolu rüzgâr yüküne göre seçilir. Bakır hat, azot testi ve derin vakum olmadan ilk çalışma yapılmaz. Gürsel ve Çeliktepe’de asansör rezervasyonu taşıma planını değiştirir. Yaklaşık 2,9 km mesafede ekip ve merdiven kapasitesi keşifte netleşir. Çeliktepe ve Şirintepe keşiflerinde asansör rezervasyonu ve dış ünite yönetim şablonu sorulur. Azot ve vakum değerleri teslim kaydına işlenir; onaysız hat uzatması yapılmaz.",
      sections: [
        {
          id: "scope",
          title: "Montaj paketi",
          body: `Delik, titreşim takozlu konsol, izole bakır, sinyal, drenaj, azot, vakum ve kumanda ayarı dahildir. Teknik kat yerleşiminde titreşim yalıtımı kritiktir.

R32 havalandırma kuralına uyulur.`,
        },
        {
          id: "neighborhoods",
          title: "Site ve dönüşüm notları",
          body: `Çağlayan sitelerinde delik için yazılı izin istenebilir. Seyrantepe’de komşu gürültü şikâyetine karşı lastik takoz kalitesi yükseltilir.

Şirintepe yeni cephelerinde gizli hat kanalı varsa keşif fotoğrafı şarttır.`,
        },
        {
          id: "process",
          title: "Keşif–teslim",
          body: `Keşif formu ve teklif verilir. Onay sonrası montaj sırası izlenir; ses ve üfleme ile teslim yapılır.

Kağıthane standart split yarım–bir gün; teknik kat işi uzayabilir.`,
        },
        {
          id: "when",
          title: "Hazırlık",
          body: `Sigorta ve priz kontrol edilir. Yönetim dış ünite yeri vermezse alternatif konuşulur. Kış montajında yoğuşma testi sınırlı olabilir.

İkinci el hat riski anlatılır.`,
        },
        {
          id: "trust",
          title: "Bağımsız kayıt",
          body: `Sarf ve işçilik onaylıdır. Satıcı yetkili ağı olmak zorunda değiliz; vakum/azot kayda geçer. Kağıthane işlerinde site kuralı notu düşülür.`,
        },
      ],
      faqs: [
        {
          question: "Çağlayan’da site izni şart mı?",
          answer: "Çoğu projede evet; keşifte yönetim kuralı sorulur.",
        },
        {
          question: "Asansörle dış ünite çıkar mı?",
          answer: "Ölçü keşifte alınır; yetmezse merdiven ekibi planlanır.",
        },
        {
          question: "Azot–vakum neden?",
          answer: "Kaçak ve nem riskini azaltır; standart prosedürdür.",
        },
        {
          question: "Süre?",
          answer: "Standart split genelde yarım–bir gündür.",
        },
        {
          question: "Garanti?",
          answer: "İşçilik kaydı paylaşılır; marka garantisi satıcıya bağlıdır.",
        },
      ],
    },
    "klima-ariza-tamiri": {
      seoTitle: "Kağıthane Klima Arıza Tamiri | PCB Hata Kodu Teşhis | Kerem Teknik",
      metaDescription: "Kağıthane klima arıza tamiri: hata kodu, PCB ve iç-dış iletişim hattı teşhisi. Çağlayan–Seyrantepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane klima arıza","gürsel klima tamiri","şirintepe klima arıza"],
      intro: "Kağıthane klima arıza tamirinde hata kodu ve PCB davranışı okunur; Çağlayan yüksek katlarında iletişim kablosu kopması çalışmama şikâyetini taklit edebilir. Seyrantepe ofis-konut karışımında kaset tip kart erişimi tavan boşluğundan yapılır. Gürsel–Çeliktepe dönüşüm binalarında topraklama kalitesi kart ömrünü etkiler. Kök neden olmadan parça dayatılmaz. Yaklaşık 2,9 km mesafede site girişi teşhis ekipmanının varışını etkiler. Çeliktepe ve Şirintepe çağrılarında iletişim kablosu ile PCB arızası önce ayrılır. Ölçüm özeti teklifte görünür; stok dışı parça için tedarik günü verilir. Site giriş prosedürü teşhis ekipmanının taşınma süresine ayrıca eklenir.",
      sections: [
        {
          id: "scope",
          title: "Teşhis kapsamı",
          body: `Hata kodu, sensörler, röle, kapasitör, kompresör sargıları ve kart incelenir. Şirintepe multi hatlarda iletişim testi ayrıdır.

Gaz ile elektronik ayrımı ölçümle yapılır.`,
        },
        {
          id: "neighborhoods",
          title: "Semt arıza profili",
          body: `Çağlayan rüzgârlı balkonlarda fan rulmanı erken aşınabilir. Seyrantepe’de gerilim dalgalanması kartı strese sokabilir.

Gürsel teknik kat nemi PCB’yi etkiler.`,
        },
        {
          id: "process",
          title: "Onarım süreci",
          body: `Şikâyet alınır, enerji güvenliği kontrol edilir, kök neden listelenir, onaylı işçilik/parça sonrası test yapılır.

Kağıthane teşhisi çoğu zaman 35–70 dakikadır.`,
        },
        {
          id: "when",
          title: "Tamir veya değişim",
          body: `Tekrarlayan kart yanığında güç kalitesi bakılır. Kilitli kompresörde maliyet kıyaslanır. Islak kartta kurutma sonrası test şarttır.

Ekonomik sınır açık anlatılır.`,
        },
        {
          id: "trust",
          title: "Parça şeffaflığı",
          body: `Teklif olmadan işlem yok. Marka yetkilisi değiliz; uyumluluk anlatılır. Kağıthane onarımlarında ölçüm kaydı tutulur.`,
        },
      ],
      faqs: [
        {
          question: "Kağıthane’de hata kodu yeter mi?",
          answer: "Yol gösterir; ölçüm şarttır.",
        },
        {
          question: "Aynı gün kart bulunur mu?",
          answer: "Stok ve modele bağlıdır.",
        },
        {
          question: "İletişim hatası sık mı?",
          answer: "Yüksek kat ve multi hatlarda daha sık görülür.",
        },
        {
          question: "Kompresör kesin mi?",
          answer: "Akım, direnç, basınç birlikte bakılır.",
        },
        {
          question: "Yetkili misiniz?",
          answer: "Hayır; bağımsız özel teknik servisiz.",
        },
      ],
    },
    "klima-temizligi": {
      seoTitle: "Kağıthane Klima Temizliği | Hijyen Biopellem Küf | Kerem Teknik",
      metaDescription: "Kağıthane klima temizliği: biopellem, küf giderme ve hijyenik tava-serpantin yıkama. Çağlayan–Şirintepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane klima temizliği","seyrantepe klima yıkama","gürsel klima hijyen"],
      intro: "Kağıthane’de klima temizliği site dairelerinde koku ve hijyen şikâyetleriyle öne çıkar. Çağlayan yüksek katlarında kapalı cam cephe nemi biopellemi hızlandırır; Seyrantepe’de ofis kaset tipinde tava birikintisi koku yayar. Gürsel–Çeliktepe dönüşüm stoğunda inşaat tozu serpantine yapışır. Şirintepe’de koruyucu örtü ve kontrollü tahliye zemin kaplamasını korur. Yaklaşık 2,9 km mesafede site girişi hijyen ekipmanının taşınmasını planlatır. Çeliktepe ve Gürsel sitelerinde koruyucu örtü zemin kaplamasını korur; kaset tip tava birikintisi varsa süre uzayabilir. Filtre takvimi site sakinine hatırlatılır.",
      sections: [
        {
          id: "scope",
          title: "Hijyen kapsamı",
          body: `Filtre, serpantin, vantilatör, drenaj tavası ve erişilebilir dış ünite kanatları temizlenir. Antibakteriyel seçim koku kaynağına göredir.

Kaset tipte tavan koruması eklenir.`,
        },
        {
          id: "neighborhoods",
          title: "Site koku profili",
          body: `Çağlayan cam cephelerde havalandırma azsa küf hızlanır. Seyrantepe ortak koridor kokusu kaynak ayrımı ister.

Şirintepe yeni dairelerde ilk sezon biopellem sık görülür.`,
        },
        {
          id: "process",
          title: "Yıkama adımları",
          body: `Enerji kesilir, zemin korunur, panel/tavan sökümü yapılır. Yıkama, drenaj testi, kurutma ve koku kontrolü izlenir.

Kağıthane hijyen işi tipik 60–120 dakikadır.`,
        },
        {
          id: "when",
          title: "Temizlik zamanı",
          body: `Küf kokusu, alerji, göz yanması veya siyah damlama önceliklidir. Sezon başı yıkama yaz şikâyetini azaltır.

Bezle silmek yetersiz kalır.`,
        },
        {
          id: "trust",
          title: "Ürün şeffaflığı",
          body: `Kir sınıfı sonrası ücret onaylanır. Yetkili servis değiliz; ürün ve filtre aralığı anlatılır.`,
        },
      ],
      faqs: [
        {
          question: "Kağıthane klima temizliği kokuyu alır mı?",
          answer: "Biopellem ve tava kaynaklı kokularda etkili olur.",
        },
        {
          question: "Kaset tip daha uzun mu?",
          answer: "Evet; tavan erişimi süreyi uzatır.",
        },
        {
          question: "Site izni?",
          answer: "Ortak alan kullanımı için yönetim bilgilendirilir.",
        },
        {
          question: "Ne sıklıkla?",
          answer: "Yılda 1–2 hijyen temizliği yeterlidir.",
        },
        {
          question: "Çocuklu ev?",
          answer: "Havalandırma önerilir; alternatif yöntem konuşulur.",
        },
      ],
    },
    "acil-klima-servisi": {
      seoTitle: "Kağıthane Acil Klima Servisi | Site Öncelik Taşma | Kerem Teknik",
      metaDescription: "Kağıthane acil klima servisi: site önceliği, taşma müdahalesi ve fiş çek güvenliği. Çağlayan–Seyrantepe. Tel: 0551 397 25 26.",
      secondaryKeyphrases: ["kağıthane acil klima","seyrantepe acil klima","çağlayan acil servis"],
      intro: "Kağıthane acil klima çağrılarında taşma, yanık koku ve kritik sıcaklık öne alınır. Çağlayan sitelerinde güvenlik kaydı varışı geciktirebilir; Seyrantepe’de akşam trafik bandı slotu kaydırır. Gürsel–Çeliktepe yüksek katlarında tava taşması alt daireyi tehdit ederse öncelik yükselir. Duman veya yanık kokuda fiş çekilmesi anlatılır. Yaklaşık 2,9 km mesafede aynı gün ihtimali müsaitliğe bağlıdır; geçici emniyet ile kalıcı onarım ayrılır. Çeliktepe ve Şirintepe çağrılarında blok-daire ve plaka bilgisi site girişini hızlandırır. Geçici emniyet uygulandıysa kalıcı onarım randevusu aynı görüşmede planlanır.",
      sections: [
        {
          id: "scope",
          title: "Acil kapsam",
          body: `Güvenli enerji yönlendirmesi, drenaj açma, kısa rahatlama ve kök neden teşhisi önceliklidir. Parça yoksa geçici not düşülür.

Şirintepe gece çağrılarında site gürültü kuralı varsa sabah slotu önerilir.`,
        },
        {
          id: "neighborhoods",
          title: "Site varış notları",
          body: `Çağlayan’da plaka önceden iletilir. Seyrantepe yol çalışmaları alternatif güzergâh ister.

Gürsel otopark kotası varsa misafir kaydı açılır.`,
        },
        {
          id: "process",
          title: "Çağrı akışı",
          body: `Şikâyet alınır, güvenlik anlatılır, sahada teşhis ve onaylı müdahale yapılır. Özet paylaşılır.

Kağıthane acil kaydında geçici/kalıcı ayrımı yazılır.`,
        },
        {
          id: "when",
          title: "Acil kriter",
          body: `Islatan damlama, yanık koku veya risk grubunda aşırı sıcak öncelik yükseltir. Hafif soğutmama normal randevuya alınabilir.

Elektrik riskinde önce fiş kesilir.`,
        },
        {
          id: "trust",
          title: "Öncelik anlatımı",
          body: `Öncelik açık anlatılır; onaysız parça takılmaz. Bağımsız özel teknik servisiz. Ücret aralığı mümkünse önceden paylaşılır.`,
        },
      ],
      faqs: [
        {
          question: "Kağıthane’de aynı gün acil garanti mi?",
          answer: "Garanti edilmez; 0551 397 25 26 ile müsaitlik sorulur.",
        },
        {
          question: "Site girişi geciktirir mi?",
          answer: "Evet; plaka ve blok bilgisi önceden iletilir.",
        },
        {
          question: "Taşmada ilk adım?",
          answer: "Kapatın, fişi çekin, suyu silin; hortuma kap koyun.",
        },
        {
          question: "Mesai dışı?",
          answer: "Müsaitliğe göre; güvenlik yönlendirmesi telefonda verilir.",
        },
        {
          question: "Geçici çözüm yeterli mi?",
          answer: "Hayır; kalıcı onarım ayrı planlanır.",
        },
      ],
    },
  },
};
