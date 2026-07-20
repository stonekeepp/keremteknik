export type RegionSeed = {
  slug: string;
  name: string;
  areaType: "ilce" | "semt";
  parentArea?: string;
  parentAreaName?: string;
  continentSide: "Avrupa Yakası" | "Anadolu Yakası";
  priorityTier: 1 | 2 | 3;
  featured: boolean;
  cornerstone: boolean;
  latitude: number;
  longitude: number;
  neighborhoods: string[];
  nearbyAreas: string[];
  localProfile: string;
  servicePlanningNote: string;
  uniqueIntro: string;
  uniqueFaqs: { question: string; answer: string }[];
  localNotes?: string[];
  secondaryKeyphrases?: string[];
  highlightedServices: string[];
};

export const REGION_SEEDS: RegionSeed[] = [
  {
    slug: "adalar",
    name: "Adalar",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 40.8756,
    longitude: 29.0922,
    neighborhoods: [
      "Büyükada",
      "Heybeliada",
      "Burgazada",
      "Kınalıada",
      "Maden Mahallesi",
      "Nizam Mahallesi",
    ],
    nearbyAreas: ["kadikoy", "uskudar", "maltepe", "kartal"],
    localProfile:
      "Adalar'da motorlu araç trafiği kısıtlı olduğundan ev tipi cihazların taşınması ve servis planlaması feribot saatlerine göre yapılır. Yazlık ve sürekli ikamet eden hanelerin bir arada bulunduğu ada yerleşimlerinde kombi ve klima kullanımı mevsimsel olarak belirginleşir.",
    servicePlanningNote:
      "Ada içi ulaşım fayton ve bisiklet ağırlıklı olduğundan randevu öncesi cihazın bulunduğu ada ve adres netleştirilmelidir.",
    uniqueIntro:
      "Adalar ilçesinde teknik servis talepleri, feribot bağlantıları ve ada içi ulaşım koşulları göz önünde bulundurularak planlanır. Büyükada, Heybeliada, Burgazada ve Kınalıada'daki konutlarda kombi, klima ve beyaz eşya arızaları için yerinde müdahale randevusu oluşturulabilir. Yaz sezonunda artan talep nedeniyle özellikle klima ve buzdolabı servislerinde önceden randevu alınması süreci hızlandırır. Kerem Teknik Servis, Adalar'daki hanelere bağımsız özel teknik servis olarak ulaşım planını sizinle birlikte netleştirir.",
    uniqueFaqs: [
      {
        question: "Adalar'a teknik servis nasıl ulaşıyor?",
        answer:
          "Servis ekibi feribot seferlerine uygun şekilde planlanır. Randevu sırasında hangi adada olduğunuz ve adres bilgisi alınarak ulaşım süreci önceden netleştirilir.",
      },
      {
        question: "Adalarda klima servisi talep edebilir miyim?",
        answer:
          "Evet. Yazlık ve sürekli kullanılan konutlarda klima bakımı, gaz dolumu ve arıza tespiti için yerinde servis randevusu oluşturulabilir.",
      },
      {
        question: "Adalarda kombi servisi veriliyor mu?",
        answer:
          "Kış aylarında ısıtma arızaları için kombi bakım ve onarım hizmeti sunulur. Cihaz markası ve arıza belirtisi paylaşıldığında uygun ekipmanla müdahale planlanır.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "alibeykoy",
    name: "Alibeyköy",
    areaType: "semt",
    parentArea: "eyupsultan",
    parentAreaName: "Eyüpsultan",
    continentSide: "Avrupa Yakası",
    priorityTier: 1,
    featured: true,
    cornerstone: true,
    latitude: 41.0769,
    longitude: 28.9456,
    neighborhoods: [
      "Alibeyköy Merkez",
      "Güzeltepe",
      "Yeşilpınar",
      "Karadolap",
      "Mimarsinan",
      "Topçular",
      "Rami Cuma",
    ],
    nearbyAreas: ["eyupsultan", "gaziosmanpasa", "kagithane", "sultangazi", "bayrampasa"],
    localProfile:
      "Alibeyköy, Eyüpsultan sınırında yoğun apartman yerleşimi ve sanayi-ticaret alanlarının iç içe geçtiği bir semttir. Eski bina stokunda kombi ve doğalgaz dönüşümü sonrası beyaz eşya yenileme talepleri sık görülür.",
    servicePlanningNote:
      "Yoğun trafik saatlerinde Alibeyköy Caddesi ve çevre bağlantı yolları dikkate alınarak randevu aralığı planlanmalıdır.",
    uniqueIntro:
      "Alibeyköy'de kombi, klima ve beyaz eşya teknik servisi talepleri yoğun konut dokusuna göre şekillenir. Semt, Eyüpsultan ilçesi içinde yer aldığından servis planlaması hem Alibeyköy mahalleleri hem de bağlantı yolları üzerinden yapılır. Apartman dairelerinde çamaşır makinesi, bulaşık makinesi ve buzdolabı arızaları günlük yaşamı doğrudan etkilediğinden hızlı randevu önemlidir. Kerem Teknik Servis, Alibeyköy ve çevresindeki hanelere bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Alibeyköy hangi ilçeye bağlı?",
        answer:
          "Alibeyköy, Eyüpsultan ilçesi sınırları içinde bir semttir. Teknik servis planlaması Eyüpsultan kapsamında, Alibeyköy adresine göre yapılır.",
      },
      {
        question: "Alibeyköy'de kombi bakımı yaptırabilir miyim?",
        answer:
          "Evet. Yoğun apartman yerleşiminde kombi periyodik bakımı, arıza tespiti ve petek temizliği için randevu oluşturulabilir.",
      },
      {
        question: "Alibeyköy'de beyaz eşya servisi ne kadar sürer?",
        answer:
          "Arıza türüne göre değişmekle birlikte çoğu yerinde müdahale aynı gün veya ertesi gün planlanabilir. Cihaz markası ve belirti paylaşıldığında süre netleştirilir.",
      },
    ],
    secondaryKeyphrases: [
      "Alibeyköy teknik servis",
      "Alibeyköy kombi servisi",
      "Alibeyköy beyaz eşya servisi",
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
    ],
    localNotes: [
      "Merkez servis noktamız Alibeyköy Uygar Sokak üzerindedir; semt içi ulaşım genellikle kısa sürer.",
      "Yeşilpınar ve Karadolap hattında apartman yoğunluğu nedeniyle kombi ve beyaz eşya talepleri kış aylarında artar.",
      "Sanayi bölgesine yakın konutlarda klima filtre bakımı daha sık gerekebilir.",
    ],
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.1839,
    longitude: 28.7394,
    neighborhoods: [
      "Arnavutköy Merkez",
      "Bolluca",
      "Taşoluk",
      "Hadımköy",
      "Haraççı",
      "Deliklikaya",
      "Durusu",
    ],
    nearbyAreas: ["basaksehir", "sultangazi", "eyupsultan", "buyukcekmece", "kucukcekmece"],
    localProfile:
      "Arnavutköy geniş arazi yapısıyla villa, site ve yeni konut projelerinin hızla arttığı bir ilçedir. Üçüncü havalimanına yakınlık nedeniyle yeni yerleşimlerde klima ve kombi kurulumları yaygındır.",
    servicePlanningNote:
      "İlçe geniş olduğundan adresin hangi mahalle bandında olduğu (merkez, Bolluca, Taşoluk vb.) randevu öncesi netleştirilmelidir.",
    uniqueIntro:
      "Arnavutköy'de teknik servis ihtiyacı, hızla büyüyen konut alanları ve mevcut köy yerleşimlerinin bir arada bulunmasıyla çeşitlenir. Yeni sitelerde klima montajı sonrası bakım, villalarda kombi arızaları ve apartmanlarda beyaz eşya onarımları sık talep edilir. İlçenin geniş coğrafyası nedeniyle servis planlamasında mahalle konumu önem taşır. Kerem Teknik Servis, Arnavutköy genelinde bağımsız özel teknik servis olarak randevu oluşturmanıza yardımcı olur.",
    uniqueFaqs: [
      {
        question: "Arnavutköy'ün hangi mahallelerine servis gidiyor?",
        answer:
          "Merkez, Bolluca, Taşoluk, Hadımköy ve çevre mahallelere randevu ile yerinde servis planlanır. Adres paylaşıldığında en uygun rota belirlenir.",
      },
      {
        question: "Arnavutköy'de yeni site dairelerinde klima servisi var mı?",
        answer:
          "Evet. Yeni yerleşimlerde klima bakımı, gaz kaçağı kontrolü ve performans düşüklüğü şikayetleri için servis talebi oluşturulabilir.",
      },
      {
        question: "Arnavutköy'e en yakın servis noktası neresi?",
        answer:
          "Servis planlaması Eyüpsultan merkezli operasyon ağı üzerinden yapılır; kuş uçuşu mesafe yaklaşık hesaplanır, yol süresi trafiğe göre değişir.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "beyaz-esya-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9923,
    longitude: 29.1244,
    neighborhoods: [
      "İnönü Mahallesi",
      "Küçükbakkalköy",
      "Barbaros Mahallesi",
      "Örnek Mahallesi",
      "Ferhatpaşa",
      "İçerenköy",
      "Ataşehir Merkez",
    ],
    nearbyAreas: ["kadikoy", "umraniye", "uskudar", "maltepe", "cekmekoy"],
    localProfile:
      "Ataşehir modern rezidans ve iş merkezleriyle tanınır; yüksek katlı binalarda merkezi sistem ve daire tipi kombi kullanımı yaygındır. Finans Merkezi çevresinde ofis tipi klima sistemleri de servis kapsamına girer.",
    servicePlanningNote:
      "Rezidans ve site girişlerinde güvenlik prosedürleri nedeniyle ziyaret saati ve daire numarası önceden bildirilmelidir.",
    uniqueIntro:
      "Ataşehir'de teknik servis talepleri, lüks konut projelerinden klasik apartmanlara kadar geniş bir yelpazede karşılanır. Küçükbakkalköy ve Barbaros çevresindeki yoğun yerleşimde kombi ve beyaz eşya arızaları günlük yaşamı aksatır. Yaz aylarında klima bakımı ve gaz dolumu talepleri belirgin şekilde artar. Kerem Teknik Servis, Ataşehir'deki hanelere ve iş yerlerine bağımsız özel teknik servis hizmeti sunar.",
    uniqueFaqs: [
      {
        question: "Ataşehir'de rezidans dairelerine servis girişi nasıl oluyor?",
        answer:
          "Site ve rezidans güvenlik kurallarına uygun şekilde randevu saatinde ziyaret planlanır. Daire numarası ve iletişim bilgisi önceden paylaşılmalıdır.",
      },
      {
        question: "Ataşehir'de bulaşık makinesi tamiri yapılıyor mu?",
        answer:
          "Evet. Su almama, programda kalma veya kurutma sorunları için yerinde arıza tespiti ve onarım randevusu oluşturulabilir.",
      },
      {
        question: "Ataşehir kombi servisi hangi markaları kapsıyor?",
        answer:
          "Bağımsız özel teknik servis olarak farklı marka ve modellerde kombi bakım, arıza ve petek temizliği hizmeti verilir; yetkili servis değildir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "bulasik-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9792,
    longitude: 28.7211,
    neighborhoods: [
      "Ambarlı",
      "Firuzköy",
      "Yeşilkent",
      "Denizköşkler",
      "Gümüşpala",
      "Merkez Mahallesi",
      "Üniversite Mahallesi",
    ],
    nearbyAreas: ["beylikduzu", "kucukcekmece", "esenyurt", "buyukcekmece", "bakirkoy"],
    localProfile:
      "Avcılar Marmara kıyısına yakın konumuyla öğrenci yoğunluğu ve yoğun apartman yerleşiminin bir arada olduğu bir ilçedir. Deniz nemine maruz kalan bölgelerde klima ve kombi bakım ihtiyacı daha sık ortaya çıkar.",
    servicePlanningNote:
      "E-5 ve sahil yolu trafiği yoğun olduğundan sabah ve akşam saatleri dışında randevu tercih edilebilir.",
    uniqueIntro:
      "Avcılar'da kombi, klima ve beyaz eşya servisi ihtiyacı hem öğrenci evlerinde hem de aile konutlarında düzenli olarak karşımıza çıkar. Ambarlı ve Firuzköy gibi mahallelerde eski bina stoku nedeniyle tesisat ve cihaz uyumluluğu kontrolü önemlidir. Yazın klima, kışın kombi arızaları öncelikli talepler arasındadır. Kerem Teknik Servis, Avcılar genelinde bağımsız özel teknik servis olarak yerinde müdahale planlar.",
    uniqueFaqs: [
      {
        question: "Avcılar'da çamaşır makinesi servisi alabilir miyim?",
        answer:
          "Evet. Su boşaltmama, tambur dönmeme veya aşırı titreşim gibi arızalar için yerinde servis randevusu oluşturulabilir.",
      },
      {
        question: "Avcılar'da klima gaz dolumu yapılıyor mu?",
        answer:
          "Klima soğutmama veya zayıf üfleme şikayetlerinde gaz kaçağı kontrolü ve gerekirse dolum işlemi servis kapsamında değerlendirilir.",
      },
      {
        question: "Avcılar hangi ilçelere yakın?",
        answer:
          "Beylikdüzü, Küçükçekmece ve Esenyurt ile komşudur; servis planlaması bu bağlantı yolları üzerinden yapılır.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0392,
    longitude: 28.8567,
    neighborhoods: [
      "Kirazlı",
      "Barbaros Mahallesi",
      "Güneşli",
      "Mahmutbey",
      "Yenimahalle",
      "Fevziçakmak",
      "Kemalpaşa",
    ],
    nearbyAreas: ["gungoren", "bahcelievler", "esenler", "basaksehir", "kucukcekmece"],
    localProfile:
      "Bağcılar İstanbul'un en yoğun nüfuslu ilçelerinden biridir; çoğunlukla çok katlı apartman yapılarında doğalgazlı kombi ve bireysel klima kullanımı yaygındır. Kirazlı ve Güneşli hatlarında eski bina stoku servis talebini artırır.",
    servicePlanningNote:
      "Yoğun nüfus nedeniyle aynı gün içinde birden fazla mahalleye planlama yapılırken adres doğrulaması kritiktir.",
    uniqueIntro:
      "Bağcılar'da teknik servis ihtiyacı yüksek nüfus yoğunluğuyla doğru orantılıdır. Kombi arızaları kış aylarında, klima bakımları yaz aylarında yoğun talep görür. Çamaşır ve bulaşık makinesi arızaları günlük ihtiyaçları doğrudan etkilediğinden hızlı müdahale önem taşır. Kerem Teknik Servis, Bağcılar'ın tüm mahallelerine bağımsız özel teknik servis olarak ulaşır.",
    uniqueFaqs: [
      {
        question: "Bağcılar'da kombi petek temizliği yaptırılabilir mi?",
        answer:
          "Evet. Isınma verimliliğini artırmak için kombi bakımı ile birlikte petek temizliği talep edilebilir.",
      },
      {
        question: "Bağcılar'da buzdolabı servisi ne kadar sürer?",
        answer:
          "Arıza türüne bağlı olarak çoğu yerinde müdahale aynı gün veya ertesi iş günü planlanabilir.",
      },
      {
        question: "Bağcılar'da hangi mahallelere servis gidiyor?",
        answer:
          "Kirazlı, Güneşli, Mahmutbey, Barbaros ve diğer tüm mahallelere randevu ile servis planlanır.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "buzdolabi-servisi",
      "camasir-makinesi-servisi",
    ],
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0022,
    longitude: 28.8594,
    neighborhoods: [
      "Bahçelievler Merkez",
      "Fevziçakmak",
      "Soğanlı",
      "Zafer Mahallesi",
      "Yenibosna",
      "Cumhuriyet Mahallesi",
      "Şirinevler",
    ],
    nearbyAreas: ["bakirkoy", "bagcilar", "gungoren", "zeytinburnu", "kucukcekmece"],
    localProfile:
      "Bahçelievler merkezi konumuyla yoğun ticaret ve konut alanlarının iç içe geçtiği bir ilçedir. Şirinevler ve Yenibosna çevresinde apartman dairelerinde kombi ve beyaz eşya kullanımı yaygındır.",
    servicePlanningNote:
      "Metro ve otobüs hatlarına yakın adreslerde randevu saatleri toplu taşıma yoğunluğu dikkate alınarak ayarlanabilir.",
    uniqueIntro:
      "Bahçelievler'de teknik servis talepleri, merkezi ulaşım aksına yakın konutlar ve yoğun iş yerleri nedeniyle yıl boyunca devam eder. Kombi bakımı, klima arızası ve beyaz eşya onarımı en sık karşılaşılan ihtiyaçlardır. İlçenin kompakt yapısı servis ekiplerinin aynı gün içinde birden fazla adrese ulaşmasını kolaylaştırır. Kerem Teknik Servis, Bahçelievler'de bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Bahçelievler'de fırın ve ocak servisi var mı?",
        answer:
          "Evet. Ankastre fırın, ocak ve davlumbaz arızaları için yerinde arıza tespiti ve onarım randevusu oluşturulabilir.",
      },
      {
        question: "Bahçelievler kombi servisi hangi arızaları kapsar?",
        answer:
          "Su basıncı düşüklüğü, ateşleme sorunu, sıcak su gelmemesi gibi kombi arızalarında yerinde müdahale planlanır.",
      },
      {
        question: "Bahçelievler'e aynı gün servis mümkün mü?",
        answer:
          "Yoğunluğa bağlı olarak aynı gün randevu mümkün olabilir; arıza aciliyeti ve adres bilgisi paylaşıldığında en uygun zaman önerilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "firin-ocak-servisi",
      "beyaz-esya-servisi",
      "klima-servisi",
    ],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9819,
    longitude: 28.8772,
    neighborhoods: [
      "Ataköy",
      "Yeşilköy",
      "Yeşilyurt",
      "Kartaltepe",
      "Cevizlik",
      "Zeytinlik",
      "Osmaniye",
    ],
    nearbyAreas: ["bahcelievler", "zeytinburnu", "kucukcekmece", "besiktas", "avcilar"],
    localProfile:
      "Bakırköy sahil şeridi ve Ataköy yerleşimleriyle konut kalitesi yüksek bir ilçedir. Yeşilköy ve Ataköy'deki sitelerde merkezi ısıtma ve bireysel kombi sistemleri bir arada bulunur.",
    servicePlanningNote:
      "Ataköy ve Yeşilköy site girişlerinde araç parkı sınırlı olabileceğinden alternatif park bilgisi paylaşılması faydalıdır.",
    uniqueIntro:
      "Bakırköy'de teknik servis ihtiyacı hem sahil konutlarında hem de merkez apartmanlarında düzenli olarak karşılanır. Ataköy'deki yüksek katlı binalarda kombi ve klima bakımı, Yeşilköy'deki villalarda beyaz eşya onarımı sık talep edilir. İlçenin ulaşım altyapısı servis planlamasını kolaylaştırır. Kerem Teknik Servis, Bakırköy genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Bakırköy Ataköy'e servis gidiyor mu?",
        answer:
          "Evet. Ataköy, Yeşilköy ve diğer tüm Bakırköy mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Bakırköy'de klima bakımı ne sıklıkla yapılmalı?",
        answer:
          "Yılda en az bir kez filtre temizliği ve genel kontrol önerilir; yoğun kullanımda iki kez bakım düşünülebilir.",
      },
      {
        question: "Bakırköy'de buzdolabı soğutmama sorunu için ne yapmalıyım?",
        answer:
          "Cihazı kapatmadan önce priz bağlantısını kontrol edin ve servis randevusu oluşturarak yerinde arıza tespiti yaptırın.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0936,
    longitude: 28.8022,
    neighborhoods: [
      "Bahçeşehir",
      "Kayabaşı",
      "Metrokent",
      "Ziya Gökalp",
      "Başak Mahallesi",
      "Şamlar",
      "İkitelli OSB",
    ],
    nearbyAreas: ["kucukcekmece", "bagcilar", "arnavutkoy", "sultangazi", "esenler"],
    localProfile:
      "Başakşehir planlı şehir konseptiyle yeni konut projeleri, park alanları ve geniş caddeleriyle öne çıkar. Bahçeşehir ve Kayabaşı'ndaki sitelerde yeni kombi ve klima kurulumları sonrası bakım talepleri yoğundur.",
    servicePlanningNote:
      "Site ve rezidans girişlerinde güvenlik kaydı için ziyaretçi bildirimi önceden yapılmalıdır.",
    uniqueIntro:
      "Başakşehir'de teknik servis ihtiyacı, yeni yerleşim alanlarının hızla büyümesiyle birlikte artmaktadır. Bahçeşehir göl çevresindeki konutlarda klima ve kombi bakımı, Metrokent'teki apartmanlarda beyaz eşya arızaları sık görülür. Planlı şehir düzeni servis ekiplerinin mahalle bazında rota planlamasını kolaylaştırır. Kerem Teknik Servis, Başakşehir'de bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Başakşehir Bahçeşehir'e servis var mı?",
        answer:
          "Evet. Bahçeşehir, Kayabaşı, Metrokent ve tüm Başakşehir mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Başakşehir'de yeni taşınanlar için kombi kontrolü gerekli mi?",
        answer:
          "Yeni taşınmada kombi basınç, ateşleme ve baca kontrolü yaptırmak güvenli kullanım için önerilir.",
      },
      {
        question: "Başakşehir'de bulaşık makinesi kurulumu sonrası servis alınır mı?",
        answer:
          "Kurulum sonrası ilk kullanımda su almama veya program hatası yaşanırsa servis talebi oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "bulasik-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0447,
    longitude: 28.9044,
    neighborhoods: [
      "Yenidoğan",
      "Altıntepsi",
      "Kocatepe",
      "Muratpaşa",
      "Vatan Mahallesi",
      "Terazidere",
      "Cevatpaşa",
    ],
    nearbyAreas: ["eyupsultan", "gaziosmanpasa", "zeytinburnu", "fatih", "esenyurt"],
    localProfile:
      "Bayrampaşa merkezi konumu ve yoğun apartman dokusuyla kombi ve beyaz eşya kullanımının yoğun olduğu bir ilçedir. Forum İstanbul çevresindeki ticari alanlar da klima servis talebi oluşturur.",
    servicePlanningNote:
      "Vatan Caddesi ve çevresinde trafik yoğunluğu nedeniyle randevu saatleri esnek planlanabilir.",
    uniqueIntro:
      "Bayrampaşa'da teknik servis ihtiyacı, yoğun konut yapısı ve merkezi ulaşım aksına yakınlık nedeniyle süreklidir. Kombi arızaları kışın, klima bakımları yazın ön plana çıkar. Altıntepsi ve Yenidoğan mahallelerinde eski bina stoku nedeniyle tesisat uyumluluğu kontrolü önemlidir. Kerem Teknik Servis, Bayrampaşa'da bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Bayrampaşa'da kombi arızası için ne zaman servis çağırmalıyım?",
        answer:
          "Sıcak su gelmemesi, düzensiz yanma veya hata kodu görüldüğünde cihazı zorlamadan servis randevusu oluşturmanız önerilir.",
      },
      {
        question: "Bayrampaşa'ya en yakın servis bölgesi neresi?",
        answer:
          "Servis planlaması Eyüpsultan ve çevre ilçeler üzerinden yapılır; adres paylaşıldığında uygun rota belirlenir.",
      },
      {
        question: "Bayrampaşa'da çamaşır makinesi su kaçırıyorsa ne yapmalıyım?",
        answer:
          "Cihazı kapatıp su vanasını kapatın ve servis randevusu oluşturarak conta veya hortum kaynaklı kaçağı yerinde tespit ettirin.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0422,
    longitude: 29.0069,
    neighborhoods: [
      "Levent",
      "Etiler",
      "Bebek",
      "Ortaköy",
      "Akatlar",
      "Gayrettepe",
      "Dikilitaş",
    ],
    nearbyAreas: ["sisli", "beyoglu", "sariyer", "uskudar", "kadikoy"],
    localProfile:
      "Beşiktaş Boğaz hattı boyunca uzanan prestijli konut ve iş merkezlerini barındırır. Levent ve Etiler'deki yüksek katlı binalarda merkezi sistem ve daire tipi kombi bir arada kullanılır.",
    servicePlanningNote:
      "Boğaz hattındaki dar sokaklarda park kısıtı olabileceğinden adres tarifi detaylı verilmelidir.",
    uniqueIntro:
      "Beşiktaş'ta teknik servis talepleri, lüks konutlardan tarihi bina dairelerine kadar geniş bir yelpazede karşılanır. Bebek ve Ortaköy'deki sahil konutlarında klima nem ve tuz etkisine maruz kalabilir; düzenli bakım önemlidir. Levent iş merkezlerinde ofis tipi klima servisi de talep edilir. Kerem Teknik Servis, Beşiktaş genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Beşiktaş Levent'e kombi servisi gidiyor mu?",
        answer:
          "Evet. Levent, Etiler, Bebek ve tüm Beşiktaş mahallelerine randevu ile yerinde kombi servisi planlanır.",
      },
      {
        question: "Beşiktaş'ta boğaz manzaralı dairelerde klima bakımı farklı mı?",
        answer:
          "Deniz etkisi filtrelerde daha hızlı kir birikimine yol açabilir; bu nedenle filtre temizliği ve dış ünite kontrolü önem kazanır.",
      },
      {
        question: "Beşiktaş'ta ankastre fırın arızası için servis var mı?",
        answer:
          "Evet. Fırın ısıtmama, fan çalışmama veya program hatası gibi arızalar için yerinde servis talebi oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "firin-ocak-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "beykoz",
    name: "Beykoz",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.1417,
    longitude: 29.0958,
    neighborhoods: [
      "Anadolu Hisarı",
      "Kavacık",
      "Paşabahçe",
      "Çubuklu",
      "Riva",
      "Göksu",
      "Yalıköy",
    ],
    nearbyAreas: ["uskudar", "sariyer", "cekmekoy", "umraniye", "kadikoy"],
    localProfile:
      "Beykoz Boğaz kıyısı ve ormanlık alanlarıyla villa ve müstakil konut ağırlıklı bir ilçedir. Kavacık ve Anadolu Hisarı çevresinde apartman yerleşimi de artmaktadır; kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "Riva ve Çubuklu gibi uzak mahallelere planlama yapılırken ulaşım süresi randevu saatine yansıtılır.",
    uniqueIntro:
      "Beykoz'da teknik servis ihtiyacı, sahil villalarından orman içi konutlara kadar çeşitli yapı tiplerinde ortaya çıkar. Paşabahçe ve Anadolu Hisarı'ndaki tarihi dokuda tesisat uyumluluğu önemlidir. Yazlık kullanılan evlerde klima ve buzdolabı bakımı mevsimsel olarak yoğunlaşır. Kerem Teknik Servis, Beykoz'un tüm mahallelerine bağımsız özel teknik servis olarak ulaşır.",
    uniqueFaqs: [
      {
        question: "Beykoz Riva'ya teknik servis gidiyor mu?",
        answer:
          "Evet. Riva, Çubuklu, Kavacık ve diğer Beykoz mahallelerine randevu ile servis planlanır; uzak mahallelerde saat netleştirilir.",
      },
      {
        question: "Beykoz'da villada kombi bakımı nasıl yapılır?",
        answer:
          "Müstakil konutlarda kombi ve baca hattı yerinde kontrol edilir; periyodik bakım randevusu oluşturulabilir.",
      },
      {
        question: "Beykoz'da klima dış ünite temizliği gerekli mi?",
        answer:
          "Ormanlık alana yakın konutlarda dış ünite hava girişinde birikinti oluşabilir; yıllık bakımda temizlik yapılması önerilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0022,
    longitude: 28.6556,
    neighborhoods: [
      "Adnan Kahveci",
      "Barış Mahallesi",
      "Cumhuriyet Mahallesi",
      "Kavaklı",
      "Gürpınar",
      "Dereağzı",
      "Yakuplu",
    ],
    nearbyAreas: ["avcilar", "buyukcekmece", "esenyurt", "kucukcekmece", "silivri"],
    localProfile:
      "Beylikdüzü Marmara kıyısında planlı yerleşim alanları ve geniş siteleriyle bilinir. Sahil şeridine yakın konutlarda nem ve tuz etkisi klima ve kombi bakım ihtiyacını artırır.",
    servicePlanningNote:
      "E-5 ve TEM bağlantı yollarındaki trafik yoğunluğu randevu planlamasında dikkate alınır.",
    uniqueIntro:
      "Beylikdüzü'nde teknik servis talepleri, hızla büyüyen konut projeleri ve sahil yerleşimleri nedeniyle sürekli artmaktadır. Adnan Kahveci ve Barış mahallelerindeki sitelerde kombi ve klima bakımı, yaz aylarında klima servisi öncelik kazanır. Dereağzı sahil hattındaki konutlarda nem kaynaklı arızalar daha sık görülebilir. Kerem Teknik Servis, Beylikdüzü genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Beylikdüzü'nde klima bakımı ne zaman yaptırılmalı?",
        answer:
          "Yaz sezonu öncesi, tercihen Nisan-Mayıs aylarında filtre temizliği ve gaz kontrolü için bakım yaptırılması önerilir.",
      },
      {
        question: "Beylikdüzü'nde kombi su basıncı düşerse ne yapmalıyım?",
        answer:
          "Kullanım kılavuzundaki basınç aralığına göre doldurmayı deneyebilirsiniz; sık tekrarlıyorsa servis çağırın.",
      },
      {
        question: "Beylikdüzü'nde beyaz eşya servisi hangi cihazları kapsar?",
        answer:
          "Buzdolabı, çamaşır makinesi, bulaşık makinesi ve fırın-ocak arızaları için yerinde servis talebi oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "beyaz-esya-servisi",
      "buzdolabi-servisi",
    ],
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0311,
    longitude: 28.9744,
    neighborhoods: [
      "Cihangir",
      "Taksim",
      "Galata",
      "Kasımpaşa",
      "Hasköy",
      "Tarlabaşı",
      "Kuledibi",
    ],
    nearbyAreas: ["sisli", "besiktas", "fatih", "kagithane", "eyupsultan"],
    localProfile:
      "Beyoğlu tarihi bina stoku, butik oteller ve yoğun ticaret alanlarıyla karakterize olur. Cihangir ve Galata'daki restore edilmiş binalarda eski tesisat ve modern cihaz uyumsuzluğu servis talebini şekillendirir.",
    servicePlanningNote:
      "Dar sokaklar ve park kısıtları nedeniyle adres tarifi ve bina giriş bilgisi detaylı paylaşılmalıdır.",
    uniqueIntro:
      "Beyoğlu'nda teknik servis ihtiyacı, tarihi konut dokusu ve turizm yoğunluğuyla birlikte çeşitlenir. Cihangir'deki apartman dairelerinde kombi ve beyaz eşya arızaları, Taksim çevresindeki iş yerlerinde klima servisi sık talep edilir. Eski binalarda tesisat kontrolü onarım öncesi önemlidir. Kerem Teknik Servis, Beyoğlu genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Beyoğlu'nda tarihi binada kombi servisi yapılır mı?",
        answer:
          "Evet. Baca hattı ve tesisat uyumluluğu yerinde kontrol edilerek kombi bakım ve onarım planlanır.",
      },
      {
        question: "Beyoğlu Cihangir'e servis ne kadar sürer?",
        answer:
          "Randevu yoğunluğuna bağlı olarak aynı gün veya ertesi iş günü planlanabilir; acil arızalarda öncelik değerlendirilir.",
      },
      {
        question: "Beyoğlu'nda otel ve iş yerlerine klima servisi var mı?",
        answer:
          "Konut ve küçük ölçekli iş yerlerinde klima bakım ve arıza servisi için randevu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.0217,
    longitude: 28.5856,
    neighborhoods: [
      "Alkent",
      "Mimarsinan",
      "Tepekent",
      "Türkoba",
      "Kumburgaz",
      "Celaliye",
      "Merkez Mahallesi",
    ],
    nearbyAreas: ["beylikduzu", "silivri", "kucukcekmece", "avcilar", "catalca"],
    localProfile:
      "Büyükçekmece göl kıyısı ve sahil şeridiyle villa, site ve apartman yerleşimlerinin bir arada bulunduğu bir ilçedir. Kumburgaz ve Celaliye sahil hattında yazlık konutlarda mevsimsel servis talebi artar.",
    servicePlanningNote:
      "Kumburgaz ve Celaliye gibi sahil mahallelerine yaz sezonunda randevu önceden alınması önerilir.",
    uniqueIntro:
      "Büyükçekmece'de teknik servis ihtiyacı, göl çevresi konutları ve sahil yerleşimleri nedeniyle mevsimsel dalgalanmalar gösterir. Alkent ve Tepekent'teki sitelerde kombi ve klima bakımı, yazlık evlerde buzdolabı ve klima arızaları sık görülür. İlçenin geniş coğrafyası mahalle bazında planlama gerektirir. Kerem Teknik Servis, Büyükçekmece genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Büyükçekmece Kumburgaz'a servis gidiyor mu?",
        answer:
          "Evet. Kumburgaz, Celaliye, Alkent ve tüm Büyükçekmece mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Büyükçekmece'de yazlık evde klima çalışmıyorsa ne yapmalıyım?",
        answer:
          "Uzun süre kullanılmayan klimalarda filtre ve gaz kontrolü gerekebilir; servis randevusu oluşturarak yerinde tespit yaptırın.",
      },
      {
        question: "Büyükçekmece'de kombi baca temizliği yapılıyor mu?",
        answer:
          "Kombi bakımı sırasında baca hattı kontrolü yapılır; gerekirse temizlik veya onarım önerilir.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.1417,
    longitude: 28.4611,
    neighborhoods: [
      "Ferhatpaşa",
      "Kaleiçi",
      "İzzetin",
      "Çakıl",
      "Ovayenice",
      "Merkez Mahallesi",
    ],
    nearbyAreas: ["silivri", "arnavutkoy", "buyukcekmece", "basaksehir"],
    localProfile:
      "Çatalca tarım ve köy yerleşimleriyle kırsal karakterini koruyan, son yıllarda villa ve site projelerinin arttığı geniş bir ilçedir. Merkez ve çevre mahallelerde kombi kullanımı yaygındır.",
    servicePlanningNote:
      "Kırsal mahallelere ulaşım mesafesi nedeniyle randevu saatleri esnek planlanır ve önceden teyit edilir.",
    uniqueIntro:
      "Çatalca'da teknik servis ihtiyacı, kırsal konutlardan yeni site projelerine kadar geniş bir alana yayılır. Kış aylarında kombi arızaları, yaz aylarında klima bakımı öncelikli talepler arasındadır. İlçenin İstanbul merkezine uzaklığı servis planlamasında rota optimizasyonu gerektirir. Kerem Teknik Servis, Çatalca genelinde bağımsız özel teknik servis olarak randevu oluşturur.",
    uniqueFaqs: [
      {
        question: "Çatalca'ya teknik servis ne kadar sürede ulaşır?",
        answer:
          "Adres ve trafik koşullarına göre randevu saati netleştirilir; uzak mahallelerde süre önceden bildirilir.",
      },
      {
        question: "Çatalca'da müstakil evde kombi servisi var mı?",
        answer:
          "Evet. Müstakil ve villa tipi konutlarda kombi bakım, arıza ve baca kontrolü için yerinde servis planlanır.",
      },
      {
        question: "Çatalca'da beyaz eşya tamiri yapılıyor mu?",
        answer:
          "Buzdolabı, çamaşır makinesi ve diğer ev tipi cihazlarda arıza tespiti ve onarım için randevu alınabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "buzdolabi-servisi",
    ],
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0317,
    longitude: 29.1789,
    neighborhoods: [
      "Taşdelen",
      "Hamidiye",
      "Ömerli",
      "Nişantepe",
      "Soğukpınar",
      "Ekşioğlu",
      "Merkez Mahallesi",
    ],
    nearbyAreas: ["umraniye", "sancaktepe", "beykoz", "atasehir", "sile"],
    localProfile:
      "Çekmeköy ormanlık alanlar ve yeni konut projeleriyle hızla gelişen bir ilçedir. Taşdelen ve Hamidiye'deki sitelerde kombi ve klima kurulumları yaygındır.",
    servicePlanningNote:
      "Ömerli ve Taşdelen gibi yüksek rakımlı mahallelerde kış aylarında kombi talebi artar; randevu önceden planlanmalıdır.",
    uniqueIntro:
      "Çekmeköy'de teknik servis ihtiyacı, yeni yerleşim alanlarının büyümesiyle birlikte sürekli artmaktadır. Taşdelen çevresindeki sitelerde kombi bakımı, yaz aylarında klima servisi yoğun talep görür. Ormanlık alana yakın konutlarda dış ünite bakımı önem kazanır. Kerem Teknik Servis, Çekmeköy genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Çekmeköy Taşdelen'e servis gidiyor mu?",
        answer:
          "Evet. Taşdelen, Hamidiye, Ömerli ve tüm Çekmeköy mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Çekmeköy'de yeni site dairelerinde kombi kontrolü gerekli mi?",
        answer:
          "Yeni taşınmada basınç, ateşleme ve baca kontrolü yaptırmak güvenli ısınma için önerilir.",
      },
      {
        question: "Çekmeköy'de çamaşır makinesi arızası için servis alınır mı?",
        answer:
          "Su almama, sıkma yapmama veya aşırı gürültü gibi arızalar için yerinde servis randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "esenler",
    name: "Esenler",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0439,
    longitude: 28.8761,
    neighborhoods: [
      "Turgutreis",
      "Fatih Mahallesi",
      "Menderes",
      "Havaalanı Mahallesi",
      "Direk",
      "Nine Hatun",
      "Oruçreis",
    ],
    nearbyAreas: ["bagcilar", "gungoren", "bahcelievler", "basaksehir", "bayrampasa"],
    localProfile:
      "Esenler yoğun apartman yerleşimi ve merkezi ulaşım bağlantılarıyla İstanbul'un en kalabalık ilçelerinden biridir. Kombi ve beyaz eşya arızaları günlük yaşamı doğrudan etkiler.",
    servicePlanningNote:
      "Metro ve otobüs hatlarına yakın adreslerde randevu saatleri toplu taşıma yoğunluğu dikkate alınabilir.",
    uniqueIntro:
      "Esenler'de teknik servis talepleri yüksek nüfus yoğunluğu nedeniyle yıl boyunca devam eder. Kombi arızaları kışın, klima bakımları yazın ön plana çıkar. Turgutreis ve Fatih mahallelerinde eski bina stoku servis ihtiyacını artırır. Kerem Teknik Servis, Esenler genelinde bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Esenler'de kombi bakımı yılda kaç kez yapılmalı?",
        answer:
          "Üretici önerilerine göre yılda bir kez periyodik bakım önerilir; yoğun kullanımda iki kez düşünülebilir.",
      },
      {
        question: "Esenler'de bulaşık makinesi su almıyorsa ne yapmalıyım?",
        answer:
          "Su vanasını ve giriş hortumunu kontrol edin; sorun devam ederse servis randevusu oluşturarak pompa veya valf kontrolü yaptırın.",
      },
      {
        question: "Esenler'e aynı gün servis mümkün mü?",
        answer:
          "Yoğunluğa bağlı olarak aynı gün randevu mümkün olabilir; arıza aciliyeti paylaşıldığında en uygun zaman önerilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "bulasik-makinesi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0278,
    longitude: 28.6756,
    neighborhoods: [
      "Cumhuriyet Mahallesi",
      "Güzelyurt",
      "Fatih Mahallesi",
      "Yenikent",
      "Mehterçeşme",
      "Kıraç",
      "Akçaburgaz",
    ],
    nearbyAreas: ["avcilar", "beylikduzu", "kucukcekmece", "buyukcekmece", "basaksehir"],
    localProfile:
      "Esenyurt İstanbul'un en hızlı büyüyen ve en kalabalık ilçelerinden biridir. Yoğun apartman ve site yerleşiminde kombi, klima ve beyaz eşya kullanımı yaygındır.",
    servicePlanningNote:
      "Geniş ilçe sınırları nedeniyle mahalle konumu randevu planlamasında öncelikle netleştirilmelidir.",
    uniqueIntro:
      "Esenyurt'ta teknik servis ihtiyacı, büyük nüfus ve yoğun konut yapısıyla doğru orantılıdır. Cumhuriyet ve Güzelyurt mahallelerinde kombi arızaları, yaz aylarında klima servisi yoğun talep görür. Yeni taşınan ailelerde beyaz eşya kurulum sonrası kontrolleri sık yapılır. Kerem Teknik Servis, Esenyurt genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Esenyurt'ta klima montajı sonrası bakım gerekli mi?",
        answer:
          "Montaj sonrası ilk sezonda filtre temizliği ve genel kontrol yaptırmak performans ve ömür açısından faydalıdır.",
      },
      {
        question: "Esenyurt'ta kombi hata kodu görürsem ne yapmalıyım?",
        answer:
          "Kodu not alın ve cihazı sıfırlamadan servis çağırın; teknisyen yerinde teşhis koyarak müdahale planlar.",
      },
      {
        question: "Esenyurt'un hangi mahallelerine servis gidiyor?",
        answer:
          "Cumhuriyet, Güzelyurt, Yenikent, Kıraç ve diğer tüm mahallelere randevu ile servis planlanır.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
    ],
  },
  {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 1,
    featured: true,
    cornerstone: true,
    latitude: 41.0489,
    longitude: 28.9344,
    neighborhoods: [
      "Alibeyköy",
      "Rami",
      "Yeşilpınar",
      "Akşemsettin",
      "Göktürk",
      "Defterdar",
      "Emniyettepe",
    ],
    nearbyAreas: ["alibeykoy", "gaziosmanpasa", "kagithane", "sultangazi", "bayrampasa"],
    localProfile:
      "Eyüpsultan tarihi dokusu, sanayi alanları ve hızla gelişen konut bölgelerini bir arada barındırır. Alibeyköy ve Rami hatlarında yoğun apartman yerleşimi, Göktürk'te villa ve site projeleri kombi ve klima talebini şekillendirir.",
    servicePlanningNote:
      "Merkez servis noktasına yakınlık nedeniyle Eyüpsultan ve Alibeyköy adreslerine hızlı randevu planlanabilir.",
    uniqueIntro:
      "Eyüpsultan, Kerem Teknik Servis'in ana hizmet bölgesi olarak öncelikli planlama yapılan ilçelerden biridir. Alibeyköy, Rami ve Yeşilpınar'daki yoğun konutlarda kombi ve beyaz eşya arızaları, Göktürk'teki villalarda klima bakımı sık karşılaşılan ihtiyaçlardır. Tarihi bölgedeki eski bina stokunda tesisat uyumluluğu kontrolü önem taşır. Kemerburgaz ve çevre mahalleler de servis kapsamı içinde değerlendirilir.",
    uniqueFaqs: [
      {
        question: "Eyüpsultan'da teknik servis ne kadar sürede gelir?",
        answer:
          "Merkez bölgeye yakınlık sayesinde çoğu adrese aynı gün veya ertesi iş günü randevu planlanabilir; saat aralığı önceden bildirilir.",
      },
      {
        question: "Eyüpsultan Göktürk'e servis gidiyor mu?",
        answer:
          "Evet. Göktürk, Kemerburgaz, Alibeyköy ve tüm Eyüpsultan mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Eyüpsultan'da kombi ve klima servisi birlikte alınabilir mi?",
        answer:
          "Aynı adreste birden fazla cihaz için tek randevuda planlama yapılabilir; cihaz listesini paylaşmanız yeterlidir.",
      },
    ],
    localNotes: [
      "Kemerburgaz mahallesi servis kapsamı içindedir; ayrı ilçe sayfası olarak listelenmez.",
      "Alibeyköy semti Eyüpsultan ilçesi altında ayrı sayfa ile sunulmaktadır.",
    ],
    secondaryKeyphrases: [
      "Eyüp teknik servis",
      "Eyüpsultan kombi servisi",
      "Eyüpsultan beyaz eşya servisi",
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
    ],
  },
  {
    slug: "fatih",
    name: "Fatih",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0186,
    longitude: 28.9397,
    neighborhoods: [
      "Balat",
      "Fener",
      "Süleymaniye",
      "Haseki",
      "Aksaray",
      "Cibali",
      "Eminönü",
    ],
    nearbyAreas: ["eyupsultan", "beyoglu", "zeytinburnu", "bayrampasa", "uskudar"],
    localProfile:
      "Fatih tarihi yarımada dokusu, restore edilmiş konaklar ve yoğun apartman yerleşimini bir arada barındırır. Balat ve Fener'deki eski binalarda tesisat ve cihaz uyumluluğu servis planlamasını etkiler.",
    servicePlanningNote:
      "Dar sokaklar ve tarihi bina girişleri nedeniyle detaylı adres tarifi ve bina numarası paylaşılmalıdır.",
    uniqueIntro:
      "Fatih'te teknik servis ihtiyacı, tarihi konut dokusu ve yoğun yerleşim nedeniyle çeşitlilik gösterir. Süleymaniye ve Haseki çevresindeki apartmanlarda kombi arızaları, yaz aylarında klima bakımı sık talep edilir. Eski binalarda baca ve tesisat kontrolü onarım öncesi kritiktir. Kerem Teknik Servis, Fatih genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Fatih Balat'ta kombi servisi yapılır mı?",
        answer:
          "Evet. Balat, Fener ve diğer Fatih mahallelerinde baca ve tesisat uyumluluğu kontrol edilerek kombi servisi planlanır.",
      },
      {
        question: "Fatih'te tarihi binada beyaz eşya tamiri mümkün mü?",
        answer:
          "Evet. Çamaşır makinesi, bulaşık makinesi ve buzdolabı arızaları için yerinde servis randevusu oluşturulabilir.",
      },
      {
        question: "Fatih Eminönü'ne servis ne kadar sürer?",
        answer:
          "Merkezi konum sayesinde çoğu adrese aynı gün veya ertesi iş günü randevu planlanabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 1,
    featured: true,
    cornerstone: true,
    latitude: 41.0644,
    longitude: 28.9106,
    neighborhoods: [
      "Karayolları",
      "Yenidoğan",
      "Merkez Mahallesi",
      "Karadeniz",
      "Küçükköy",
      "Habipler",
      "Şemsipaşa",
    ],
    nearbyAreas: ["eyupsultan", "alibeykoy", "sultangazi", "kagithane", "bayrampasa"],
    localProfile:
      "Gaziosmanpaşa yoğun apartman yerleşimi ve merkezi konumuyla kombi ve beyaz eşya servis talebinin yüksek olduğu bir ilçedir. Küçükköy ve Karayolları mahallelerinde eski bina stoku bakım ihtiyacını artırır.",
    servicePlanningNote:
      "Eyüpsultan merkezine yakınlık sayesinde Gaziosmanpaşa adreslerine hızlı randevu planlanabilir.",
    uniqueIntro:
      "Gaziosmanpaşa, Kerem Teknik Servis'in öncelikli hizmet verdiği ilçelerden biridir. Yoğun konut yapısında kombi arızaları kışın, klima bakımları yazın belirgin şekilde artar. Küçükköy ve Yenidoğan mahallelerinde çamaşır makinesi ve bulaşık makinesi arızaları günlük ihtiyaçları etkiler. Kerem Teknik Servis, Gaziosmanpaşa genelinde bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Gaziosmanpaşa'da kombi servisi ne kadar sürede gelir?",
        answer:
          "Öncelikli bölge planlaması sayesinde çoğu adrese aynı gün veya ertesi iş günü randevu planlanabilir.",
      },
      {
        question: "Gaziosmanpaşa Küçükköy'e servis gidiyor mu?",
        answer:
          "Evet. Küçükköy, Karayolları, Yenidoğan ve tüm Gaziosmanpaşa mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Gaziosmanpaşa'da klima gaz kaçağı şüphesi varsa ne yapmalıyım?",
        answer:
          "Cihazı kapatın, havalandırın ve servis randevusu oluşturarak yerinde kaçak tespiti yaptırın.",
      },
    ],
    secondaryKeyphrases: [
      "Gaziosmanpaşa teknik servis",
      "Gaziosmanpaşa kombi servisi",
      "Küçükköy teknik servis",
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
    ],
    localNotes: [
      "Küçükköy ve Yıldıztabya mahallelerinde yoğun konut stokunda kombi basınç ve petek sorunları sık görülür.",
      "Yeni yapılaşma alanlarında klima montaj sonrası ilk sezon bakım talepleri artar.",
    ],
  },
  {
    slug: "gungoren",
    name: "Güngören",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0217,
    longitude: 28.8756,
    neighborhoods: [
      "Tozkoparan",
      "Haznedar",
      "Güven Mahallesi",
      "Sanayi Mahallesi",
      "Gençosman",
      "Akıncılar",
      "Mareşal Çakmak",
    ],
    nearbyAreas: ["bagcilar", "bahcelievler", "esenler", "zeytinburnu", "bakirkoy"],
    localProfile:
      "Güngören kompakt ilçe yapısı ve yoğun apartman dokusuyla kombi ve beyaz eşya kullanımının yoğun olduğu bir bölgedir. Tozkoparan ve Haznedar mahallelerinde eski bina stoku servis talebini artırır.",
    servicePlanningNote:
      "Küçük ilçe sınırı sayesinde aynı gün içinde birden fazla mahalleye planlama yapılabilir.",
    uniqueIntro:
      "Güngören'de teknik servis ihtiyacı, yoğun konut yapısı nedeniyle yıl boyunca devam eder. Kombi arızaları kışın, klima bakımları yazın ön plana çıkar. Sanayi Mahallesi çevresindeki ticari alanlarda da klima servisi talep edilir. Kerem Teknik Servis, Güngören genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Güngören'de kombi petek temizliği yapılıyor mu?",
        answer:
          "Evet. Kombi bakımı ile birlikte petek temizliği talep edilebilir; ısınma verimliliğini artırır.",
      },
      {
        question: "Güngören'e en yakın servis bölgesi neresi?",
        answer:
          "Bağcılar ve Bahçelievler ile komşu konumda olup servis planlaması bu aks üzerinden yapılır.",
      },
      {
        question: "Güngören'de buzdolabı soğutmuyorsa ne yapmalıyım?",
        answer:
          "Termostat ayarını kontrol edin; sorun devam ederse servis randevusu oluşturarak kompresör veya gaz kaçağı tespiti yaptırın.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "buzdolabi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9817,
    longitude: 29.0575,
    neighborhoods: [
      "Moda",
      "Fenerbahçe",
      "Göztepe",
      "Caferağa",
      "Osmanağa",
      "Rasimpaşa",
      "Bostancı",
    ],
    nearbyAreas: ["uskudar", "atasehir", "maltepe", "besiktas", "adalar"],
    localProfile:
      "Kadıköy Anadolu yakasının en merkezi ilçelerinden biridir; tarihi apartmanlar, yeni rezidanslar ve sahil konutları bir arada bulunur. Moda ve Göztepe'de kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "Sahil ve merkez mahallelerde park kısıtı olabileceğinden alternatif ulaşım bilgisi paylaşılması faydalıdır.",
    uniqueIntro:
      "Kadıköy'de teknik servis talepleri, sahil şeridinden iç mahallelere kadar geniş bir yelpazede karşılanır. Moda ve Fenerbahçe'deki tarihi binalarda tesisat uyumluluğu, Göztepe'deki apartmanlarda kombi bakımı sık ihtiyaçlardır. Yaz aylarında klima servisi yoğun talep görür. Kerem Teknik Servis, Kadıköy genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Kadıköy Moda'ya kombi servisi gidiyor mu?",
        answer:
          "Evet. Moda, Fenerbahçe, Göztepe ve tüm Kadıköy mahallelerine randevu ile yerinde kombi servisi planlanır.",
      },
      {
        question: "Kadıköy'de klima bakımı ne sıklıkla yapılmalı?",
        answer:
          "Yılda en az bir kez filtre temizliği ve genel kontrol önerilir; sahil konutlarında iki kez düşünülebilir.",
      },
      {
        question: "Kadıköy'de çamaşır makinesi arızası için servis alınır mı?",
        answer:
          "Evet. Tambur dönmeme, su boşaltmama veya aşırı titreşim gibi arızalar için yerinde servis randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 1,
    featured: true,
    cornerstone: true,
    latitude: 41.0783,
    longitude: 28.9733,
    neighborhoods: [
      "Çağlayan",
      "Gürsel",
      "Seyrantepe",
      "Mehmet Akif Ersoy",
      "Çeliktepe",
      "Şirintepe",
      "Hamidiye",
    ],
    nearbyAreas: ["eyupsultan", "sisli", "beyoglu", "gaziosmanpasa", "sariyer"],
    localProfile:
      "Kağıthane Haliç kıyısı boyunca uzanan, son yıllarda yoğun kentsel dönüşüm ve yeni konut projeleriyle gelişen bir ilçedir. Çağlayan ve Gürsel mahallelerinde kombi ve klima talebi yüksektir.",
    servicePlanningNote:
      "Eyüpsultan ve Şişli arasında merkezi konumda olup hızlı randevu planlaması yapılabilir.",
    uniqueIntro:
      "Kağıthane, Kerem Teknik Servis'in öncelikli hizmet verdiği ilçelerden biridir. Kentsel dönüşüm sonrası yeni binalarda kombi ve klima kurulumları, eski mahallelerde bakım talepleri bir arada görülür. Çağlayan Adliyesi çevresindeki yoğun yerleşimde beyaz eşya arızaları günlük yaşamı etkiler. Kerem Teknik Servis, Kağıthane genelinde bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Kağıthane'de teknik servis ne kadar sürede gelir?",
        answer:
          "Öncelikli bölge planlaması sayesinde çoğu adrese aynı gün veya ertesi iş günü randevu planlanabilir.",
      },
      {
        question: "Kağıthane Çağlayan'a kombi servisi var mı?",
        answer:
          "Evet. Çağlayan, Gürsel, Seyrantepe ve tüm Kağıthane mahallelerine randevu ile kombi servisi planlanır.",
      },
      {
        question: "Kağıthane'de kentsel dönüşüm sonrası kombi kontrolü gerekli mi?",
        answer:
          "Yeni binaya taşınmada basınç, ateşleme ve baca kontrolü yaptırmak güvenli kullanım için önerilir.",
      },
    ],
    secondaryKeyphrases: [
      "Kağıthane teknik servis",
      "Kağıthane kombi servisi",
      "Çağlayan teknik servis",
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "bulasik-makinesi-servisi",
    ],
    localNotes: [
      "Çağlayan ve Gürsel mahallelerinde yüksek katlı binalarda dış ünite erişimi randevu sırasında netleştirilir.",
      "Kentsel dönüşüm alanlarında yeni dairelerde kombi devreye alma kontrolleri talep edilir.",
    ],
  },
  {
    slug: "kartal",
    name: "Kartal",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9067,
    longitude: 29.1894,
    neighborhoods: [
      "Yakacık",
      "Soğanlık",
      "Topselvi",
      "Cevizli",
      "Uğur Mumcu",
      "Karlıktepe",
      "Petrol-İş",
    ],
    nearbyAreas: ["maltepe", "pendik", "sultanbeyli", "umraniye", "cekmekoy"],
    localProfile:
      "Kartal sahil şeridi ve Yakacık yerleşimiyle konut ve sanayi alanlarının bir arada bulunduğu bir ilçedir. Yüksek katlı binalarda kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "D-100 ve sahil yolu trafiği randevu saatlerinde dikkate alınır.",
    uniqueIntro:
      "Kartal'da teknik servis ihtiyacı, sahil konutlarından iç mahallelere kadar çeşitlilik gösterir. Yakacık ve Soğanlık'taki yoğun apartman yerleşiminde kombi arızaları, yaz aylarında klima bakımı sık talep edilir. Cevizli metro hattı çevresinde hızlı ulaşım imkânı servis planlamasını kolaylaştırır. Kerem Teknik Servis, Kartal genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Kartal Yakacık'a servis gidiyor mu?",
        answer:
          "Evet. Yakacık, Soğanlık, Topselvi ve tüm Kartal mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Kartal'da kombi su basıncı sürekli düşüyorsa ne yapmalıyım?",
        answer:
          "Sık basınç düşüşü tesisat kaçağı işareti olabilir; servis çağırarak yerinde kontrol yaptırın.",
      },
      {
        question: "Kartal'da fırın ısıtmıyorsa servis alınır mı?",
        answer:
          "Evet. Ankastre fırın ve ocak arızaları için yerinde arıza tespiti ve onarım randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "firin-ocak-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0006,
    longitude: 28.7894,
    neighborhoods: [
      "Halkalı",
      "İkitelli",
      "Atakent",
      "Toki",
      "Beşyol",
      "Sefaköy",
      "Söğütlüçeşme",
    ],
    nearbyAreas: ["basaksehir", "bagcilar", "bakirkoy", "avcilar", "bahcelievler"],
    localProfile:
      "Küçükçekmece göl kıyısı ve Halkalı yerleşimiyle geniş konut alanları barındırır. İkitelli OSB çevresinde ticari klima sistemleri, konut bölgelerinde kombi ve beyaz eşya talebi yoğundur.",
    servicePlanningNote:
      "Halkalı ve Sefaköy metro hatlarına yakın adreslerde randevu saatleri trafik yoğunluğuna göre ayarlanabilir.",
    uniqueIntro:
      "Küçükçekmece'de teknik servis ihtiyacı, göl çevresi konutları ve Halkalı'nın yoğun yerleşimi nedeniyle süreklidir. Atakent ve Toki mahallelerindeki sitelerde kombi bakımı, yaz aylarında klima servisi öncelik kazanır. İkitelli bölgesindeki iş yerlerinde klima arızaları da talep edilir. Kerem Teknik Servis, Küçükçekmece genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Küçükçekmece Halkalı'ya servis gidiyor mu?",
        answer:
          "Evet. Halkalı, Sefaköy, Atakent ve tüm Küçükçekmece mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Küçükçekmece'de klima dış ünite temizliği gerekli mi?",
        answer:
          "Göl çevresi nemli ortamda dış ünite hava girişinde birikinti oluşabilir; yıllık bakımda temizlik önerilir.",
      },
      {
        question: "Küçükçekmece'de bulaşık makinesi servisi var mı?",
        answer:
          "Evet. Su almama, programda kalma veya kurutma sorunları için yerinde servis randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "bulasik-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9356,
    longitude: 29.155,
    neighborhoods: [
      "Başıbüyük",
      "Cevizli",
      "Fındıklı",
      "Zümrütevler",
      "Erenköy",
      "Altıntepe",
      "Girne",
    ],
    nearbyAreas: ["kadikoy", "kartal", "atasehir", "umraniye", "pendik"],
    localProfile:
      "Maltepe sahil şeridi ve metro hattı boyunca uzanan konut alanlarıyla Anadolu yakasının önemli ilçelerinden biridir. Sahil konutlarında nem etkisi klima bakım ihtiyacını artırır.",
    servicePlanningNote:
      "Maltepe sahil yolu ve metro hatları trafik yoğunluğu randevu planlamasında dikkate alınır.",
    uniqueIntro:
      "Maltepe'de teknik servis talepleri, sahil apartmanlarından iç mahallelere kadar geniş bir alana yayılır. Başıbüyük ve Zümrütevler'deki yoğun yerleşimde kombi arızaları, yaz aylarında klima bakımı sık karşılaşılan ihtiyaçlardır. Metro hattı çevresinde ulaşım kolaylığı servis planlamasını destekler. Kerem Teknik Servis, Maltepe genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Maltepe sahil bölgesine klima servisi gidiyor mu?",
        answer:
          "Evet. Sahil şeridi ve iç mahalleler dahil tüm Maltepe adreslerine randevu ile klima servisi planlanır.",
      },
      {
        question: "Maltepe'de kombi bakımı ne zaman yaptırılmalı?",
        answer:
          "Kış sezonu öncesi, tercihen Eylül-Ekim aylarında periyodik bakım yaptırılması önerilir.",
      },
      {
        question: "Maltepe'de buzdolabı buzlanıyorsa ne yapmalıyım?",
        answer:
          "Termostat ayarını kontrol edin; aşırı buzlanma devam ederse servis randevusu oluşturarak conta ve sensör kontrolü yaptırın.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "pendik",
    name: "Pendik",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.8778,
    longitude: 29.2333,
    neighborhoods: [
      "Kurtköy",
      "Kaynarca",
      "Güzelyalı",
      "Yenişehir",
      "Ertuğrul Gazi",
      "Velibaba",
      "Bahçelievler",
    ],
    nearbyAreas: ["kartal", "tuzla", "sultanbeyli", "maltepe", "sancaktepe"],
    localProfile:
      "Pendik Sabiha Gökçen Havalimanı ve sahil yerleşimleriyle hızla gelişen bir ilçedir. Kurtköy ve Yenişehir'deki yeni konut projelerinde kombi ve klima kurulumları yaygındır.",
    servicePlanningNote:
      "Havalimanı çevresi ve D-100 trafiği randevu saatlerinde dikkate alınır.",
    uniqueIntro:
      "Pendik'te teknik servis ihtiyacı, havalimanı çevresindeki yeni yerleşimler ve sahil konutları nedeniyle sürekli artmaktadır. Kurtköy ve Kaynarca mahallelerinde kombi bakımı, yaz aylarında klima servisi yoğun talep görür. Güzelyalı sahil hattındaki konutlarda nem kaynaklı arızalar daha sık görülebilir. Kerem Teknik Servis, Pendik genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Pendik Kurtköy'e servis gidiyor mu?",
        answer:
          "Evet. Kurtköy, Kaynarca, Yenişehir ve tüm Pendik mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Pendik'te yeni taşınanlar için kombi kontrolü gerekli mi?",
        answer:
          "Yeni taşınmada basınç, ateşleme ve baca kontrolü yaptırmak güvenli ısınma için önerilir.",
      },
      {
        question: "Pendik'te çamaşır makinesi servisi alınır mı?",
        answer:
          "Evet. Su boşaltmama, tambur dönmeme veya aşırı titreşim gibi arızalar için yerinde servis randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0022,
    longitude: 29.2311,
    neighborhoods: [
      "Sarıgazi",
      "Emek Mahallesi",
      "Yenidoğan",
      "Osmangazi",
      "Mevlana",
      "Atatürk Mahallesi",
      "Abdurrahmangazi",
    ],
    nearbyAreas: ["umraniye", "cekmekoy", "sultanbeyli", "pendik", "atasehir"],
    localProfile:
      "Sancaktepe yeni konut projeleri ve geniş site alanlarıyla hızla büyüyen bir ilçedir. Sarıgazi ve Emek mahallelerinde kombi ve klima kullanımı yoğundur.",
    servicePlanningNote:
      "Site ve rezidans girişlerinde güvenlik prosedürleri için ziyaret saati önceden bildirilmelidir.",
    uniqueIntro:
      "Sancaktepe'de teknik servis ihtiyacı, yeni yerleşim alanlarının büyümesiyle birlikte artmaktadır. Sarıgazi ve Yenidoğan'daki sitelerde kombi bakımı, yaz aylarında klima servisi öncelikli talepler arasındadır. Geniş caddeler servis ekiplerinin mahalle bazında rota planlamasını kolaylaştırır. Kerem Teknik Servis, Sancaktepe genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Sancaktepe Sarıgazi'ye servis var mı?",
        answer:
          "Evet. Sarıgazi, Emek, Yenidoğan ve tüm Sancaktepe mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Sancaktepe'de klima montajı sonrası bakım gerekli mi?",
        answer:
          "Montaj sonrası ilk sezonda filtre temizliği ve genel kontrol yaptırmak performans açısından faydalıdır.",
      },
      {
        question: "Sancaktepe'de kombi hata kodu görürsem ne yapmalıyım?",
        answer:
          "Kodu not alın ve servis çağırın; teknisyen yerinde teşhis koyarak uygun müdahaleyi planlar.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "bulasik-makinesi-servisi",
    ],
  },
  {
    slug: "sariyer",
    name: "Sarıyer",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.1661,
    longitude: 29.0561,
    neighborhoods: [
      "Tarabya",
      "İstinye",
      "Zekeriyaköy",
      "Rumeli Kavağı",
      "Yeniköy",
      "Büyükdere",
      "Emirgan",
    ],
    nearbyAreas: ["besiktas", "kagithane", "eyupsultan", "beykoz", "sile"],
    localProfile:
      "Sarıyer Boğaz kıyısı ve ormanlık alanlarıyla villa, müstakil konut ve lüks rezidansların yoğun olduğu bir ilçedir. Zekeriyaköy ve Tarabya'da kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "Boğaz hattındaki dar yollar ve park kısıtları nedeniyle detaylı adres tarifi paylaşılmalıdır.",
    uniqueIntro:
      "Sarıyer'de teknik servis ihtiyacı, sahil villalarından orman içi konutlara kadar çeşitli yapı tiplerinde ortaya çıkar. Tarabya ve İstinye'deki prestijli konutlarda kombi ve klima bakımı, Zekeriyaköy'deki villalarda beyaz eşya onarımı sık talep edilir. Deniz etkisi klima filtrelerinde daha hızlı kir birikimine yol açabilir. Kerem Teknik Servis, Sarıyer genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Sarıyer Zekeriyaköy'e servis gidiyor mu?",
        answer:
          "Evet. Zekeriyaköy, Tarabya, İstinye ve tüm Sarıyer mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Sarıyer'de villada kombi bakımı nasıl yapılır?",
        answer:
          "Müstakil konutlarda kombi ve baca hattı yerinde kontrol edilir; periyodik bakım randevusu oluşturulabilir.",
      },
      {
        question: "Sarıyer'de boğaz manzaralı dairelerde klima bakımı farklı mı?",
        answer:
          "Deniz etkisi filtrelerde daha hızlı kir birikimine yol açabilir; yıllık bakımda filtre temizliği önem kazanır.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "firin-ocak-servisi",
    ],
  },
  {
    slug: "silivri",
    name: "Silivri",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.0739,
    longitude: 28.2467,
    neighborhoods: [
      "Silivri Merkez",
      "Büyükçavuşlu",
      "Selimpaşa",
      "Gümüşyaka",
      "Kavaklı",
      "Değirmenköy",
      "Ortaköy",
    ],
    nearbyAreas: ["buyukcekmece", "catalca", "beylikduzu", "avcilar"],
    localProfile:
      "Silivri Marmara kıyısında geniş arazi yapısıyla villa, site ve köy yerleşimlerinin bir arada bulunduğu batı İstanbul'un en uzak ilçelerinden biridir. Sahil konutlarında mevsimsel servis talebi artar.",
    servicePlanningNote:
      "İlçe merkezine uzaklık nedeniyle randevu saatleri önceden netleştirilir ve teyit edilir.",
    uniqueIntro:
      "Silivri'de teknik servis ihtiyacı, sahil yerleşimleri ve kırsal konutlar nedeniyle mevsimsel dalgalanmalar gösterir. Selimpaşa ve Gümüşyaka sahil hattında yaz aylarında klima ve buzdolabı arızaları yoğunlaşır. Kış aylarında kombi bakımı öncelik kazanır. Kerem Teknik Servis, Silivri genelinde bağımsız özel teknik servis olarak randevu oluşturur.",
    uniqueFaqs: [
      {
        question: "Silivri'ye teknik servis ne kadar sürede ulaşır?",
        answer:
          "Adres ve trafik koşullarına göre randevu saati netleştirilir; uzak mahallelerde süre önceden bildirilir.",
      },
      {
        question: "Silivri Selimpaşa'ya servis gidiyor mu?",
        answer:
          "Evet. Selimpaşa, Gümüşyaka, Büyükçavuşlu ve tüm Silivri mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Silivri'de yazlık evde klima çalışmıyorsa ne yapmalıyım?",
        answer:
          "Uzun süre kullanılmayan klimalarda filtre ve gaz kontrolü gerekebilir; servis randevusu oluşturarak yerinde tespit yaptırın.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.9606,
    longitude: 29.265,
    neighborhoods: [
      "Adil Mahallesi",
      "Abdurrahmangazi",
      "Fatih Mahallesi",
      "Necip Fazıl",
      "Akşemsettin",
      "Hasanpaşa",
      "Mimar Sinan",
    ],
    nearbyAreas: ["sancaktepe", "pendik", "kartal", "tuzla", "sile"],
    localProfile:
      "Sultanbeyli yoğun apartman yerleşimi ve genç nüfus yapısıyla kombi ve beyaz eşya kullanımının yoğun olduğu bir ilçedir. Abdurrahmangazi ve Fatih mahallelerinde eski bina stoku servis talebini artırır.",
    servicePlanningNote:
      "Yoğun nüfus nedeniyle aynı gün içinde birden fazla mahalleye planlama yapılırken adres doğrulaması önemlidir.",
    uniqueIntro:
      "Sultanbeyli'de teknik servis ihtiyacı, yüksek nüfus yoğunluğu ve yoğun konut yapısıyla doğru orantılıdır. Kombi arızaları kışın, klima bakımları yazın belirgin şekilde artar. Çamaşır ve bulaşık makinesi arızaları günlük ihtiyaçları doğrudan etkiler. Kerem Teknik Servis, Sultanbeyli genelinde bağımsız özel teknik servis olarak yerinde müdahale sunar.",
    uniqueFaqs: [
      {
        question: "Sultanbeyli'de kombi bakımı yılda kaç kez yapılmalı?",
        answer:
          "Üretici önerilerine göre yılda bir kez periyodik bakım önerilir; yoğun kullanımda iki kez düşünülebilir.",
      },
      {
        question: "Sultanbeyli'ye aynı gün servis mümkün mü?",
        answer:
          "Yoğunluğa bağlı olarak aynı gün randevu mümkün olabilir; arıza aciliyeti paylaşıldığında en uygun zaman önerilir.",
      },
      {
        question: "Sultanbeyli'de bulaşık makinesi su almıyorsa ne yapmalıyım?",
        answer:
          "Su vanasını ve giriş hortumunu kontrol edin; sorun devam ederse servis randevusu oluşturarak pompa kontrolü yaptırın.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "bulasik-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.1067,
    longitude: 28.8661,
    neighborhoods: [
      "Sultançiftliği",
      "Habibler",
      "50. Yıl",
      "Uğur Mumcu",
      "Cebeci",
      "Gazi Mahallesi",
      "Yayla",
    ],
    nearbyAreas: ["eyupsultan", "gaziosmanpasa", "arnavutkoy", "kagithane", "basaksehir"],
    localProfile:
      "Sultangazi yoğun konut yerleşimi ve Sultançiftliği bölgesiyle bilinen bir ilçedir. Apartman dairelerinde kombi ve beyaz eşya kullanımı yaygındır; Gazi Mahallesi çevresinde kentsel dönüşüm devam etmektedir.",
    servicePlanningNote:
      "Eyüpsultan ve Gaziosmanpaşa'ya yakınlık sayesinde Sultangazi adreslerine hızlı randevu planlanabilir.",
    uniqueIntro:
      "Sultangazi'de teknik servis ihtiyacı, yoğun apartman dokusu ve geniş mahalle yapısı nedeniyle süreklidir. Sultançiftliği ve Habibler bölgelerinde kombi arızaları kışın, klima bakımları yazın ön plana çıkar. Kentsel dönüşüm sonrası yeni binalarda cihaz kurulum kontrolleri sık yapılır. Kerem Teknik Servis, Sultangazi genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Sultangazi Sultançiftliği'ne servis gidiyor mu?",
        answer:
          "Evet. Sultançiftliği, Habibler, Gazi ve tüm Sultangazi mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Sultangazi'de kombi petek temizliği yapılıyor mu?",
        answer:
          "Evet. Kombi bakımı ile birlikte petek temizliği talep edilebilir; ısınma verimliliğini artırır.",
      },
      {
        question: "Sultangazi'de klima gaz dolumu yapılıyor mu?",
        answer:
          "Klima soğutmama şikayetlerinde gaz kaçağı kontrolü ve gerekirse dolum işlemi servis kapsamında değerlendirilir.",
      },
    ],
    localNotes: [
      "Sultançiftliği mahallesi ilçe içinde önemli bir yerleşim alanıdır; servis planlaması bu bölgeyi kapsar.",
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "camasir-makinesi-servisi",
    ],
  },
  {
    slug: "sile",
    name: "Şile",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 3,
    featured: false,
    cornerstone: false,
    latitude: 41.1764,
    longitude: 29.6131,
    neighborhoods: [
      "Ağva",
      "Şile Merkez",
      "Balibey",
      "Kızılca",
      "Kumbaba",
      "Saklıköy",
      "Yeşilvadi",
    ],
    nearbyAreas: ["beykoz", "pendik", "sultanbeyli", "cekmekoy", "sancaktepe"],
    localProfile:
      "Şile Karadeniz kıyısı ve ormanlık alanlarıyla yazlık ve sürekli ikamet eden hanelerin bir arada bulunduğu doğuya uzanan bir ilçedir. Ağva ve merkez mahallelerde mevsimsel servis talebi belirgindir.",
    servicePlanningNote:
      "İlçe merkezine uzaklık ve sahil yolu koşulları nedeniyle randevu saatleri önceden netleştirilir.",
    uniqueIntro:
      "Şile'de teknik servis ihtiyacı, yazlık konutlar ve sürekli yerleşim alanları nedeniyle mevsimsel dalgalanmalar gösterir. Ağva ve Kumbaba sahil hattında yaz aylarında klima ve buzdolabı arızaları yoğunlaşır. Kış aylarında merkez mahallelerde kombi bakımı öncelik kazanır. Kerem Teknik Servis, Şile genelinde bağımsız özel teknik servis olarak randevu oluşturur.",
    uniqueFaqs: [
      {
        question: "Şile'ye teknik servis ne kadar sürede ulaşır?",
        answer:
          "Adres ve trafik koşullarına göre randevu saati netleştirilir; uzak mahallelerde süre önceden bildirilir.",
      },
      {
        question: "Şile Ağva'ya servis gidiyor mu?",
        answer:
          "Evet. Ağva, Kumbaba, Şile Merkez ve diğer mahallelere randevu ile servis planlanır.",
      },
      {
        question: "Şile'de yazlık evde kombi servisi var mı?",
        answer:
          "Evet. Kış kullanımı için kombi bakım ve arıza servisi; yaz aylarında klima servisi talep edilebilir.",
      },
    ],
    highlightedServices: [
      "klima-servisi",
      "kombi-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "sisli",
    name: "Şişli",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0603,
    longitude: 28.9878,
    neighborhoods: [
      "Mecidiyeköy",
      "Esentepe",
      "Kurtuluş",
      "Feriköy",
      "Halaskargazi",
      "Teşvikiye",
      "Bomonti",
    ],
    nearbyAreas: ["besiktas", "beyoglu", "kagithane", "fatih", "sariyer"],
    localProfile:
      "Şişli iş ve konut merkezlerinin yoğun olduğu merkezi bir ilçedir. Mecidiyeköy ve Esentepe'deki yüksek katlı binalarda kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "Merkezi konum ve metro hatları sayesinde hızlı randevu planlaması yapılabilir.",
    uniqueIntro:
      "Şişli'de teknik servis talepleri, iş merkezlerinden konut alanlarına kadar geniş bir yelpazede karşılanır. Mecidiyeköy ve Bomonti'deki yoğun apartman yerleşiminde kombi arızaları, yaz aylarında klima bakımı sık ihtiyaçlardır. Kurtuluş ve Feriköy'deki tarihi binalarda tesisat uyumluluğu kontrolü önemlidir. Kerem Teknik Servis, Şişli genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Şişli Mecidiyeköy'e kombi servisi gidiyor mu?",
        answer:
          "Evet. Mecidiyeköy, Esentepe, Kurtuluş ve tüm Şişli mahallelerine randevu ile yerinde kombi servisi planlanır.",
      },
      {
        question: "Şişli'de ofis tipi klima servisi var mı?",
        answer:
          "Konut ve küçük ölçekli iş yerlerinde klima bakım ve arıza servisi için randevu oluşturulabilir.",
      },
      {
        question: "Şişli'de ankastre fırın arızası için servis alınır mı?",
        answer:
          "Evet. Fırın ısıtmama, fan çalışmama veya program hatası gibi arızalar için yerinde servis talebi oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "firin-ocak-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 40.8167,
    longitude: 29.3,
    neighborhoods: [
      "Postane",
      "Aydınlı",
      "Orhanlı",
      "Tepeören",
      "İçmeler",
      "Aydıntepe",
      "Şifa",
    ],
    nearbyAreas: ["pendik", "sultanbeyli", "kartal", "sile"],
    localProfile:
      "Tuzla sanayi bölgesi ve sahil yerleşimleriyle konut ve iş alanlarının bir arada bulunduğu güneydoğu İstanbul'un önemli ilçelerinden biridir. Aydınlı ve Orhanlı'daki sitelerde kombi ve klima kullanımı yaygındır.",
    servicePlanningNote:
      "Sanayi ve sahil bölgeleri arası mesafe randevu planlamasında dikkate alınır.",
    uniqueIntro:
      "Tuzla'da teknik servis ihtiyacı, sanayi çevresi konutları ve sahil yerleşimleri nedeniyle çeşitlilik gösterir. Aydınlı ve Postane mahallelerinde kombi bakımı, yaz aylarında klima servisi yoğun talep görür. İçmeler sahil hattındaki konutlarda nem kaynaklı arızalar daha sık görülebilir. Kerem Teknik Servis, Tuzla genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Tuzla Aydınlı'ya servis gidiyor mu?",
        answer:
          "Evet. Aydınlı, Orhanlı, Postane ve tüm Tuzla mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Tuzla'da kombi bakımı ne zaman yaptırılmalı?",
        answer:
          "Kış sezonu öncesi, tercihen Eylül-Ekim aylarında periyodik bakım yaptırılması önerilir.",
      },
      {
        question: "Tuzla'da çamaşır makinesi arızası için servis var mı?",
        answer:
          "Evet. Su boşaltmama, tambur dönmeme veya aşırı titreşim gibi arızalar için yerinde servis randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "camasir-makinesi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0167,
    longitude: 29.1167,
    neighborhoods: [
      "Çakmak",
      "Atakent",
      "Esenşehir",
      "Finanskent",
      "Parseller",
      "Tantavi",
      "İnkılap",
    ],
    nearbyAreas: ["atasehir", "uskudar", "cekmekoy", "sancaktepe", "kadikoy"],
    localProfile:
      "Ümraniye Anadolu yakasının en yoğun nüfuslu ilçelerinden biridir; yüksek katlı binalar, siteler ve ticaret alanları bir arada bulunur. Çakmak ve Esenşehir'de kombi ve klima talebi yüksektir.",
    servicePlanningNote:
      "Yoğun nüfus nedeniyle mahalle konumu randevu planlamasında öncelikle netleştirilmelidir.",
    uniqueIntro:
      "Ümraniye'de teknik servis ihtiyacı, yoğun konut yapısı ve merkezi konum nedeniyle yıl boyunca devam eder. Çakmak ve Atakent mahallelerinde kombi arızaları, yaz aylarında klima bakımı belirgin şekilde artar. Finanskent çevresindeki yeni projelerde cihaz kurulum kontrolleri sık yapılır. Kerem Teknik Servis, Ümraniye genelinde bağımsız özel teknik servis olarak hizmet verir.",
    uniqueFaqs: [
      {
        question: "Ümraniye Çakmak'a kombi servisi gidiyor mu?",
        answer:
          "Evet. Çakmak, Esenşehir, Atakent ve tüm Ümraniye mahallelerine randevu ile yerinde kombi servisi planlanır.",
      },
      {
        question: "Ümraniye'de klima bakımı ne sıklıkla yapılmalı?",
        answer:
          "Yılda en az bir kez filtre temizliği ve genel kontrol önerilir; yoğun kullanımda iki kez düşünülebilir.",
      },
      {
        question: "Ümraniye'ye aynı gün servis mümkün mü?",
        answer:
          "Yoğunluğa bağlı olarak aynı gün randevu mümkün olabilir; arıza aciliyeti paylaşıldığında en uygun zaman önerilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "beyaz-esya-servisi",
      "bulasik-makinesi-servisi",
    ],
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    areaType: "ilce",
    continentSide: "Anadolu Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0236,
    longitude: 29.0153,
    neighborhoods: [
      "Altunizade",
      "Acıbadem",
      "Çengelköy",
      "Kandilli",
      "Bulgurlu",
      "Kuzguncuk",
      "Beylerbeyi",
    ],
    nearbyAreas: ["kadikoy", "umraniye", "beykoz", "besiktas", "fatih"],
    localProfile:
      "Üsküdar Boğaz kıyısı ve tarihi mahalleleriyle konut kalitesi yüksek bir ilçedir. Kuzguncuk ve Çengelköy'deki tarihi binalarda tesisat uyumluluğu, Altunizade'deki yeni projelerde modern cihaz kullanımı yaygındır.",
    servicePlanningNote:
      "Boğaz hattındaki dar sokaklar ve park kısıtları nedeniyle detaylı adres tarifi paylaşılmalıdır.",
    uniqueIntro:
      "Üsküdar'da teknik servis talepleri, tarihi mahallelerden modern rezidanslara kadar geniş bir yelpazede karşılanır. Acıbadem ve Altunizade'deki yoğun apartman yerleşiminde kombi arızaları, yaz aylarında klima bakımı sık ihtiyaçlardır. Kuzguncuk ve Kandilli'deki sahil konutlarında nem etkisi cihaz bakımını önemli kılar. Kerem Teknik Servis, Üsküdar genelinde bağımsız özel teknik servis olarak hizmet sunar.",
    uniqueFaqs: [
      {
        question: "Üsküdar Acıbadem'e servis gidiyor mu?",
        answer:
          "Evet. Acıbadem, Altunizade, Çengelköy ve tüm Üsküdar mahallelerine randevu ile yerinde servis planlanır.",
      },
      {
        question: "Üsküdar'da tarihi binada kombi servisi yapılır mı?",
        answer:
          "Evet. Baca hattı ve tesisat uyumluluğu kontrol edilerek kombi bakım ve onarım planlanır.",
      },
      {
        question: "Üsküdar'da buzdolabı soğutmuyorsa ne yapmalıyım?",
        answer:
          "Termostat ayarını kontrol edin; sorun devam ederse servis randevusu oluşturarak yerinde arıza tespiti yaptırın.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "buzdolabi-servisi",
      "beyaz-esya-servisi",
    ],
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    areaType: "ilce",
    continentSide: "Avrupa Yakası",
    priorityTier: 2,
    featured: false,
    cornerstone: false,
    latitude: 41.0036,
    longitude: 28.91,
    neighborhoods: [
      "Merkezefendi",
      "Seyitnizam",
      "Maltepe",
      "Kazlıçeşme",
      "Veliefendi",
      "Telsiz",
      "Yeşiltepe",
    ],
    nearbyAreas: ["fatih", "bakirkoy", "bahcelievler", "bayrampasa", "gungoren"],
    localProfile:
      "Zeytinburnu merkezi konumu ve yoğun apartman dokusuyla kombi ve beyaz eşya kullanımının yoğun olduğu bir ilçedir. Merkezefendi ve Kazlıçeşme mahallelerinde eski bina stoku servis talebini artırır.",
    servicePlanningNote:
      "Tramvay hatları ve merkezi ulaşım aksına yakın adreslerde randevu saatleri trafik yoğunluğuna göre ayarlanabilir.",
    uniqueIntro:
      "Zeytinburnu'nda teknik servis ihtiyacı, yoğun konut yapısı ve merkezi ulaşım aksına yakınlık nedeniyle süreklidir. Kombi arızaları kışın, klima bakımları yazın ön plana çıkar. Kazlıçeşme ve Veliefendi mahallelerinde kentsel dönüşüm sonrası yeni binalarda cihaz kurulum kontrolleri yapılır. Kerem Teknik Servis, Zeytinburnu genelinde bağımsız özel teknik servis olarak randevu alır.",
    uniqueFaqs: [
      {
        question: "Zeytinburnu'nda kombi arızası için ne zaman servis çağırmalıyım?",
        answer:
          "Sıcak su gelmemesi, düzensiz yanma veya hata kodu görüldüğünde cihazı zorlamadan servis randevusu oluşturmanız önerilir.",
      },
      {
        question: "Zeytinburnu Merkezefendi'ye servis gidiyor mu?",
        answer:
          "Evet. Merkezefendi, Kazlıçeşme, Seyitnizam ve tüm Zeytinburnu mahallelerine randevu ile servis planlanır.",
      },
      {
        question: "Zeytinburnu'nda fırın ve ocak servisi var mı?",
        answer:
          "Evet. Ankastre fırın, ocak ve davlumbaz arızaları için yerinde arıza tespiti ve onarım randevusu oluşturulabilir.",
      },
    ],
    highlightedServices: [
      "kombi-servisi",
      "klima-servisi",
      "firin-ocak-servisi",
      "beyaz-esya-servisi",
    ],
  },
];
