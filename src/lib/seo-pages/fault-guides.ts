import { PRIORITY_REGION_SLUGS } from "./constants";

export type FaultGuideSeed = {
  deviceSlug: string;
  deviceTitle: string;
  problemSlug: string;
  title: string;
  h1: string;
  focusKeyphrase: string;
  secondaryKeyphrases: string[];
  intro: string;
  shortAnswer: string;
  symptoms: string[];
  possibleCauses: string[];
  safeChecks: string[];
  doNotDo: string[];
  whenToShutOff: string;
  technicianProcess: string;
  brandNotes?: { brand: string; note: string }[];
  relatedServiceSlug: string;
  relatedErrorGroups?: string[];
  relatedRegionSlugs?: string[];
  faqs: { question: string; answer: string }[];
  sections: { id: string; title: string; body: string }[];
};

export const FAULT_GUIDE_SEEDS: FaultGuideSeed[] = [
  {
    deviceSlug: "kombi",
    deviceTitle: "Kombi",
    problemSlug: "su-akitiyor",
    title: "Kombi Su Akıtıyor | Nedenleri ve Ne Yapmalı?",
    h1: "Kombi su akıtıyor",
    focusKeyphrase: "kombi su akıtıyor",
    secondaryKeyphrases: [
      "kombiden su damlıyor",
      "kombi altında su birikiyor",
      "kombi tesisat kaçağı",
      "kombi emniyet ventili su akıtıyor",
    ],
    intro:
      "Kombi altında veya bağlantı noktalarında su birikmesi, basınç kaybı, sıcak su dalgalanması veya ekranda uyarı ile birlikte görülebilir. Su kaçağı hem tesisat hem de cihaz içi parça arızasından kaynaklanır; elektrik ve gaz güvenliği açısından erken müdahale önemlidir. Bu rehberde belirtileri, güvenli kontrolleri ve teknisyen teşhis sürecini özetliyoruz.",
    shortAnswer:
      "Kombi su akıtıyorsa önce cihazı kapatın, su ve elektrik temasını önleyin. Görünür bağlantı ve basınç göstergesini kontrol edin; kaçak devam ediyorsa veya sıcak su/gaz kokusu varsa cihazı zorlamadan servis çağırın.",
    symptoms: [
      "Kombi altında veya bağlantı noktalarında su birikintisi",
      "Basınç göstergesinde düşüş veya sık basınç tamamlama ihtiyacı",
      "Peteklerin ısınması düşerken sıcak su akışı zayıflar",
      "Ekranda basınç veya emniyet uyarısı",
      "Damlama sesi veya nemli duvar/zemin izi",
    ],
    possibleCauses: [
      "Tesisat bağlantılarında gevşeklik veya conta aşınması",
      "Emniyet ventili veya genleşme tankı basınç kaybı",
      "Eşanjör veya plakalı ısı eşanjörü kaçağı",
      "Pompa veya üç yollu vana contası arızası",
      "Yoğuşma suyu tahliye hattı tıkanıklığı veya sifon sorunu",
      "Doldurma vanası veya basınç sensörü arızası",
    ],
    safeChecks: [
      "Kombiyi kapatın; su birikintisinin elektrik prizine veya kabloya temas etmediğinden emin olun.",
      "Basınç göstergesini kullanım kılavuzundaki aralıkla karşılaştırın; talimat dışı müdahale yapmayın.",
      "Görünür tesisat bağlantılarında belirgin damlama var mı dışarıdan kontrol edin; sıkmaya çalışmayın.",
      "Yoğuşmalı kombilerde yoğuşma tahliye hortumunun tıkanıp tıkanmadığını dışarıdan gözlemleyin.",
      "Gaz veya yanık kokusu varsa cihazı kullanmayın ve havalandırın.",
    ],
    doNotDo: [
      "Sıcak su veya basınç altındaki bağlantıları elle sıkmaya çalışmayın.",
      "Emniyet ventilini veya gaz vanasını kendi başınıza sökmeyin.",
      "Kaçağı geçici olarak kapatmak için bant veya kimyasal uygulama yapmayın.",
      "Basınç düşükken cihazı sürekli ateşlemeye zorlamayın.",
      "Elektrik prizine su temas etmişse prize dokunmadan servis çağırın.",
    ],
    whenToShutOff:
      "Su hızla birikiyorsa, sıcak su kaçağı varsa, basınç sürekli düşüyorsa, gaz kokusu alıyorsanız veya ekranda emniyet uyarısı yanıp sönüyorsa kombiyi hemen kapatın. Elektrik teması riski varsa ilgili sigortayı kapatın ve profesyonel destek bekleyin.",
    technicianProcess:
      "Teknisyen önce kaçağın kaynağını basınç testi, görsel inceleme ve gerekirse termal kontrol ile ayırır. Tesisat, pompa, eşanjör, emniyet ventili ve yoğuşma hattı ayrı ayrı değerlendirilir. Parça değişimi öncesi onay alınır; onarım sonrası basınç, sızdırmazlık ve çalışma testi yapılarak cihaz teslim edilir.",
    relatedServiceSlug: "kombi-servisi",
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Kombi su akıtıyorsa basınç düşer mi?",
        answer:
          "Evet. Tesisat veya iç parça kaçağında basınç göstergesi düşebilir ve cihaz sık sık doldurma uyarısı verebilir. Basınç talimatı dışında müdahale etmeyin; kaçak giderilmeden basınç tamamlamak geçici çözüm sağlar.",
      },
      {
        question: "Yoğuşmalı kombide su akıtması normal mi?",
        answer:
          "Yoğuşma suyu kontrollü şekilde tahliye edilir; bu normaldir. Ancak cihaz altında sürekli birikinti, damlama veya koku varsa tahliye hattı tıkanıklığı veya iç kaçak olabilir. Sürekli birikinti normal kabul edilmemelidir.",
      },
      {
        question: "Kombi su kaçağı acil servis gerektirir mi?",
        answer:
          "Hızlı su birikimi, sıcak su kaçağı, gaz kokusu veya elektrik teması riski acil kabul edilir. Bu durumlarda cihazı kapatıp servis çağırın. Yavaş damlama bile zamanla duvar, zemin ve tesisat hasarına yol açabilir.",
      },
    ],
    sections: [
      {
        id: "kaynak-ayirimi",
        title: "Kaçağın kaynağını ayırt etmek",
        body: "Kombi altındaki su birikintisi her zaman eşanjör kaçağı anlamına gelmez. Yoğuşma tahliye hattından gelen su, gevşek tesisat bağlantısı veya pompa contasından sızan su farklı müdahale gerektirir. Su damlasının sıcaklığı, birikintinin konumu ve basınç göstergesinin davranışı teknisyene önemli ipuçları verir. Evde yalnızca görsel gözlem yapılabilir; iç parça sökümü güvenlik riski taşır.",
      },
      {
        id: "onleme-bakim",
        title: "Önleme ve bakım",
        body: "Yıllık kombi bakımında basınç, emniyet ventili, genleşme tankı ve yoğuşma hattı kontrol edilir. Tesisat bağlantı noktalarının periyodik gözlemi erken uyarı sağlar. Basınç düşüşünü sürekli tamamlayarak kullanmak kaçağı büyütebilir; kalıcı çözüm için kaynak tespit edilmelidir.",
      },
      {
        id: "servis-kapsami",
        title: "Servis kapsamı",
        body: "Kerem Teknik Servis, İstanbul genelinde kombi su kaçağı şikayetlerinde yerinde teşhis ve onarım hizmeti sunar. Bağımsız özel teknik servis olarak çalışırız; onayınız olmadan parça değişimi yapılmaz. Acil kaçak durumlarında öncelikli randevu planlaması için iletişime geçebilirsiniz.",
      },
    ],
  },
  {
    deviceSlug: "klima",
    deviceTitle: "Klima",
    problemSlug: "sogutmuyor",
    title: "Klima Soğutmuyor | Olası Nedenler ve Çözüm",
    h1: "Klima soğutmuyor",
    focusKeyphrase: "klima soğutmuyor",
    secondaryKeyphrases: [
      "klima üfleme yapıyor ama soğutmuyor",
      "klima soğuk üflemiyor",
      "klima gazı bitti mi",
      "inverter klima soğutmuyor",
    ],
    intro:
      "Klima çalışıyor gibi görünse de odanın ısısını düşürmüyorsa filtre tıkanıklığı, gaz eksikliği, dış ünite fan arızası veya elektronik kart sorunu gündeme gelebilir. Yaz aylarında sık karşılaşılan bu şikayette doğru teşhis hem enerji tüketimini hem de kompresör ömrünü korur. Aşağıda belirtiler, güvenli kontroller ve marka farkları özetlenmiştir.",
    shortAnswer:
      "Klima soğutmuyorsa önce filtre ve hava akışını kontrol edin, kapağı kapalı tutun. Sorun devam ederse cihazı uzun süre zorlamayın; gaz kaçağı, fan veya kart arızası için yerinde teşhis gerekir.",
    symptoms: [
      "İç ünite çalışıyor ancak üflediği hava soğuk değil",
      "Oda sıcaklığı hedef değere inmiyor",
      "Dış ünite çalışmıyor veya anormal ses çıkarıyor",
      "Buzlanma veya yoğuşma birikimi iç ünitede görülüyor",
      "Uzun çalışmaya rağmen enerji tüketimi artıyor",
    ],
    possibleCauses: [
      "Kirli veya tıkalı filtre ve serpantin",
      "Soğutucu gaz eksikliği veya kaçağı",
      "Dış ünite fan motoru veya kompresör arızası",
      "İç/dış ünite arası iletişim veya inverter kart sorunu",
      "Termostat veya oda sensörü hatası",
      "Aşırı yük veya yanlış kapasite seçimi",
    ],
    safeChecks: [
      "Klimanın fişini çekmeden önce kumandadan kapatın; filtreyi kullanım kılavuzuna uygun şekilde temizleyin veya yıkayın.",
      "İç ve dış ünite arasında engel olmadığını, kapı ve pencerelerin kapalı olduğunu kontrol edin.",
      "Dış ünitenin çalışıp çalışmadığını ve fanın döndüğünü dışarıdan gözlemleyin.",
      "Buzlanma varsa cihazı kapatıp erimesini bekleyin; buzlu çalıştırmayın.",
      "Gaz dolumu veya kaçak testi için kendiniz müdahale etmeyin.",
    ],
    doNotDo: [
      "Gaz dolumu veya kaçak tamiri için yetkisiz kişilere başvurmayın.",
      "Filtre temizliği yapmadan kompresörü sürekli çalıştırmaya zorlamayın.",
      "Dış ünite kapağını veya elektrik bağlantılarını sökmeyin.",
      "Buzlanmış serpantine sıcak su veya kesici aletle müdahale etmeyin.",
      "Uzaktan kumanda pilini değiştirmek dışında kart ayarı yapmayın.",
    ],
    whenToShutOff:
      "Yanık kokusu, aşırı ısınma, sürekli sigorta attırma, iç ünitede yoğun buzlanma veya anormal gürültü varsa klimayı kapatın. Elektrik çarpması riski hissederseniz fişi çekin ve servis çağırın.",
    technicianProcess:
      "Teknisyen önce hava akışı ve filtre durumunu değerlendirir; ardından basınç ölçümü ve kaçak testi uygular. Fan, kompresör, sensör ve kart kontrolleri model bazlı yapılır. Gerekirse gaz dolumu onarım sonrası planlanır; test çalıştırmasıyla oda sıcaklığı düşüşü doğrulanır.",
    brandNotes: [
      {
        brand: "Vestel",
        note: "Vestel split klimalarda filtre ve serpantin tıkanıklığı sık görülür; bazı modellerde hata kodu ekranda belirgin değildir. Kart versiyonu model etiketinden doğrulanmalıdır.",
      },
      {
        brand: "Arçelik",
        note: "Arçelik ve Beko grubu klimalarda inverter kart arızaları ile gaz eksikliği benzer belirtiler verebilir. Oda sensörü konumu performansı etkileyebilir.",
      },
      {
        brand: "Daikin",
        note: "Daikin modellerde hata kodu ekranı teşhisi hızlandırır; R32 gazlı yeni serilerde kaçak testi özel ekipman gerektirir. Filtre temizliği periyodu kısa tutulmalıdır.",
      },
      {
        brand: "Midea",
        note: "Midea inverter klimalarda dış ünite fan arızası soğutma kaybının sık nedenidir. OEM platform kullanan modellerde parça kodu doğrulaması önemlidir.",
      },
      {
        brand: "Mitsubishi",
        note: "Mitsubishi Electric klimalarda iletişim hatası iç ve dış ünite arası kablo veya kart kaynaklı olabilir. Japon serilerinde servis prosedürü modele özeldir.",
      },
    ],
    relatedServiceSlug: "klima-servisi",
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Klima çalışıyor ama soğutmuyorsa gaz mı bitti?",
        answer:
          "Gaz eksikliği olası nedenlerden biridir ancak tek neden değildir. Filtre tıkanıklığı, fan arızası veya kart sorunu da aynı belirtiyi verebilir. Kaçak testi yapılmadan sadece gaz dolumu kalıcı çözüm sağlamaz.",
      },
      {
        question: "Klima filtresi kirli olunca soğutma düşer mi?",
        answer:
          "Evet. Tıkalı filtre hava akışını azaltır, serpantin buzlanabilir ve soğutma performansı belirgin şekilde düşer. Filtre temizliği en güvenli ilk adımdır.",
      },
      {
        question: "İnverter klima soğutmuyorsa tamir pahalı mı?",
        answer:
          "Maliyet arızanın kaynağına bağlıdır. Filtre temizliği düşük maliyetlidir; kompresör veya kart değişimi daha yüksek olabilir. Yerinde teşhis sonrası net fiyat paylaşılması gerekir.",
      },
    ],
    sections: [
      {
        id: "performans-kontrol",
        title: "Soğutma performansını etkileyen faktörler",
        body: "Oda hacmi, güneş alan cephe, kapı-pencere sızdırmazlığı ve iç ünite konumu soğutma hissini doğrudan etkiler. Teknik arıza olmadan da yetersiz soğutma yaşanabilir. Buna rağmen filtre temizliğine rağmen üfleme ılık kalıyorsa mekanik veya gaz kaynaklı sorun araştırılmalıdır. Dış ünitenin hava akışını engelleyen nesneler kaldırılmalıdır.",
      },
      {
        id: "gaz-kacak",
        title: "Gaz eksikliği ve kaçak",
        body: "Soğutucu devrede yeterli gaz olmadığında kompresör çalışsa bile ısı transferi yetersiz kalır. Kaçak varsa önce giderilmeli, ardından doğru miktarda ve doğru gaz tipiyle dolum yapılmalıdır. Yanlış gaz tipi veya hatalı dolum kompresöre zarar verebilir; bu işlemler sertifikalı teknisyen tarafından yapılmalıdır.",
      },
      {
        id: "bakim-onemi",
        title: "Bakımın önemi",
        body: "Yıllık klima bakımında filtre, serpantin, drenaj ve gaz basıncı kontrol edilir. Özellikle yaz öncesi bakım, soğutmama şikayetlerinin önüne geçer. Kerem Teknik Servis, İstanbul genelinde klima soğutma sorunlarında yerinde teşhis ve bakım hizmeti sunar.",
      },
    ],
  },
  {
    deviceSlug: "klima",
    deviceTitle: "Klima",
    problemSlug: "calismiyor",
    title: "Klima Çalışmıyor | Nedenleri ve Güvenli Kontroller",
    h1: "Klima çalışmıyor",
    focusKeyphrase: "klima çalışmıyor",
    secondaryKeyphrases: [
      "klima açılmıyor",
      "klima hiç çalışmıyor",
      "klima kumandası çalışıyor ama klima açılmıyor",
      "split klima çalışmıyor",
    ],
    intro:
      "Klima hiç tepki vermiyorsa, iç ünite açılmıyorsa veya kısa süre sonra kapanıyorsa elektrik beslemesi, kumanda, sigorta, kart veya emniyet sensörü kaynaklı olabilir. Tamamen sessiz kalan cihaz ile hata kodu veren cihaz farklı teşhis yolları gerektirir. Bu rehberde güvenli ilk kontroller ve servis süreci anlatılmaktadır.",
    shortAnswer:
      "Klima çalışmıyorsa elektrik beslemesi, sigorta ve kumanda pillerini kontrol edin. Cihaz hâlâ açılmıyorsa veya sigorta attırıyorsa zorlamayın; kart, sensör veya kompresör arızası için yerinde teşhis gerekir.",
    symptoms: [
      "Kumandaya basıldığında iç ünite hiç tepki vermiyor",
      "Cihaz birkaç saniye çalışıp kapanıyor",
      "Ekranda hata kodu veya yanıp sönen uyarı ışığı",
      "Sigorta veya kaçak akım rölesi atıyor",
      "Dış ünite hiç devreye girmiyor",
    ],
    possibleCauses: [
      "Priz, sigorta veya kaçak akım rölesi sorunu",
      "Uzaktan kumanda pil veya alıcı ünite arızası",
      "İç veya dış ünite kartı arızası",
      "Kompresör veya fan motoru kilitlenmesi",
      "Yüksek/düşük basınç emniyet sensörü devreyi kesiyor",
      "İç-dış ünite iletişim kablosu kopukluğu",
    ],
    safeChecks: [
      "Klimanın fişinin takılı olduğunu ve prizde başka cihazla elektrik olup olmadığını kontrol edin.",
      "Ev sigortası veya kaçak akım rölesinin atıp atmadığını kontrol edin; tekrar tekrar zorlamayın.",
      "Uzaktan kumanda pillerini değiştirin; duvar tipi kumanda varsa ekran mesajına bakın.",
      "İç ünite kapaklarının tam kapalı olduğundan emin olun; bazı modellerde güvenlik kilidi vardır.",
      "Dış ünite elektrik şalterinin açık olduğunu dışarıdan gözlemleyin; kapağı açmayın.",
    ],
    doNotDo: [
      "Sigorta attıkça cihazı tekrar çalıştırmaya zorlamayın.",
      "İç ünite kapağını veya kart bağlantılarını sökmeyin.",
      "Dış ünite veya kompresöre çekiç vb. ile vurmayın.",
      "Elektrik bağlantılarını kısa devre yapacak geçici çözümler uygulamayın.",
      "Hata kodunu silmek için fabrika ayarına dönmeyi denemeyin.",
    ],
    whenToShutOff:
      "Yanık kokusu, kıvılcım, duman veya ısınmış kablo gördüğünüzde klimayı kullanmayın ve elektriği kesin. Sigorta sürekli atıyorsa cihazı fişten çekin ve servis çağırın.",
    technicianProcess:
      "Teknisyen besleme voltajı, sigorta hattı ve kumanda sinyalini ölçer. Hata kodu varsa modele göre yorumlanır. Kart, sensör, fan ve kompresör testleri sırayla uygulanır; arıza onayı sonrası parça değişimi veya onarım planlanır.",
    brandNotes: [
      {
        brand: "Arçelik",
        note: "Arçelik ve Beko klimalarda iletişim hatası veya kapak sensörü nedeniyle cihaz hiç açılmayabilir. Ekrandaki hata kodu teşhisi yönlendirir.",
      },
      {
        brand: "Beko",
        note: "Beko split modellerde kumanda eşleştirme kaybı çalışmama gibi görünebilir. Kart arızaları sık sigorta attırma ile birlikte gelir.",
      },
      {
        brand: "Vestel",
        note: "Vestel klimalarda alıcı ünite ve kart versiyonu uyumsuzluğu nadiren de olsa açılmama nedeni olabilir.",
      },
      {
        brand: "Daikin",
        note: "Daikin modellerde hata kodu listesi detaylıdır; iletişim ve güç kaynağı hataları ayrı kodlarla gösterilir.",
      },
    ],
    relatedServiceSlug: "klima-servisi",
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Klima kumandası çalışıyor ama klima açılmıyorsa ne olabilir?",
        answer:
          "Alıcı ünite, iç kart veya besleme hattı sorunu olabilir. Kumanda sinyali ulaşmıyorsa cihaz tepki vermez. Elektrik ve sigorta kontrolünden sonra teknik teşhis gerekir.",
      },
      {
        question: "Klima sigorta attırıyorsa ne yapmalıyım?",
        answer:
          "Cihazı tekrar çalıştırmayın; kompresör veya kartta kısa devre olabilir. Sigortayı bir kez kontrol edip sorun devam ederse fişi çekin ve servis çağırın.",
      },
      {
        question: "Dış ünite çalışmıyor iç ünite açılıyorsa arıza mı?",
        answer:
          "Evet, split sistemde her iki ünite de koordineli çalışmalıdır. İletişim hatası, gaz eksikliği veya dış ünite kartı arızası olabilir. Uzun süre bu şekilde kullanmak verimsizdir.",
      },
    ],
    sections: [
      {
        id: "elektrik-kontrol",
        title: "Elektrik ve kumanda kontrolleri",
        body: "Çalışmama şikayetinin önemli bir bölümü priz, sigorta veya kumanda kaynaklıdır. Kumanda pili zayıf olduğunda sinyal gitmeyebilir; priz topraklı ve uygun amperde olmalıdır. Kaçak akım rölesi atıyorsa cihaz içinde izolasyon sorunu olabilir; tekrar tekrar resetlemek risklidir.",
      },
      {
        id: "hata-kodlari",
        title: "Hata kodları ve emniyet kilidi",
        body: "Birçok klima çalışmıyor gibi görünse de ekranda hata kodu gösterir. Kapak açık, filtre takılı değil veya drenaj tıkalı uyarıları da çalışmayı engelleyebilir. Kullanım kılavuzundaki hata kodu tablosu ilk yönlendirmeyi sağlar; kalıcı çözüm için teknisyen desteği gerekir.",
      },
      {
        id: "yerinde-servis",
        title: "Yerinde servis desteği",
        body: "Kerem Teknik Servis, İstanbul genelinde klima çalışmama arızalarında yerinde elektriksel ve mekanik teşhis yapar. Bağımsız özel servis olarak marka adını yalnızca hizmet kapsamını açıklamak için kullanırız.",
      },
    ],
  },
  {
    deviceSlug: "camasir-makinesi",
    deviceTitle: "Çamaşır Makinesi",
    problemSlug: "kazan-donmuyor",
    title: "Çamaşır Makinesi Kazan Dönmüyor | Nedenleri",
    h1: "Çamaşır makinesi kazan dönmüyor",
    focusKeyphrase: "çamaşır makinesi kazan dönmüyor",
    secondaryKeyphrases: [
      "çamaşır makinesi tambur dönmüyor",
      "çamaşır makinesi yıkarken dönmüyor",
      "çamaşır makinesi motor çalışıyor ama dönmüyor",
      "çamaşır makinesi kayış koptu mu",
    ],
    intro:
      "Çamaşır makinesi su alıyor ancak kazan dönmüyorsa dengesiz yükleme, kapı kilidi, motor kayışı veya motor arızası akla gelir. Sıkma aşamasında durma farklı nedenlere işaret edebilir; sıkma sorunları için ayrı blog rehberimizi inceleyebilirsiniz. Bu sayfa özellikle kazanın hiç veya yıkama sırasında dönmemesi durumuna odaklanır.",
    shortAnswer:
      "Kazan dönmüyorsa programı durdurun, dengesiz yük ve kapı kilidini kontrol edin. Motor sesi var ama hareket yoksa kayış veya motor arızası olabilir; cihazı zorlamadan servis çağırın.",
    symptoms: [
      "Yıkama programında kazan hiç hareket etmiyor",
      "Motor uğultusu var ancak tambur dönmüyor",
      "Program başlıyor ama bir noktada duruyor",
      "Kapı kilidi sesi geliyor fakat dönme yok",
      "Ekranda motor veya kilit ile ilgili hata kodu",
    ],
    possibleCauses: [
      "Aşırı yükleme veya tek taraflı çamaşır yığılması",
      "Kapı kilidi veya kilit mandalı arızası",
      "Motor kayışının gevşemesi veya kopması",
      "Motor veya motor kömürü arızası",
      "Elektronik kart veya motor sürücü arızası",
      "Rulman veya tambur askısı sıkışması",
    ],
    safeChecks: [
      "Programı iptal edin ve makinenin dengesiz yükten kurtulması için çamaşırları yeniden dağıtın.",
      "Kapının tam kapandığından ve çocuk kilidinin devrede olmadığından emin olun.",
      "Makinenin düz ve sabit zeminde durduğunu kontrol edin.",
      "Filtre kapağı veya alt panel açıksa kapatın; bazı modellerde güvenlik kilidi vardır.",
      "Kayış veya motor bölgesine kullanıcı müdahalesi yapmayın.",
    ],
    doNotDo: [
      "Kazan dönmüyorken programı tekrar tekrar başlatmayın.",
      "Alt kapağı veya kayış bölgesini sökerek parça çıkarmaya çalışmayın.",
      "Tambura el ile zorla döndürmeyin.",
      "Motor uğultusu varken uzun süre çalıştırmaya devam etmeyin.",
      "Elektrik fişi takılıyken iç aksama müdahale etmeyin.",
    ],
    whenToShutOff:
      "Yanık kokusu, duman, kıvılcım veya anormal gıcırtı duyduğunuzda programı durdurun ve fişi çekin. Su sızıntısı ile birlikte dönme yoksa cihazı kullanmayın.",
    technicianProcess:
      "Teknisyen kapı kilidi, kayış gerginliği ve motor dönüşünü kontrol eder. Gerekirse tambur sökümü ile rulman ve askı sistemi incelenir. Kart testi yapılarak arıza kaynağı belirlenir; onay sonrası parça değişimi uygulanır.",
    brandNotes: [
      {
        brand: "Bosch",
        note: "Bosch çamaşır makinelerinde iQdrive motorlu modellerde kayışsız tahrik kullanılır; dönmeme durumunda motor veya kart teşhisi gerekir. Seri 4/6/8 modellerinde parça kodları farklıdır.",
      },
      {
        brand: "Siemens",
        note: "Siemens modellerde tambur kilitlenmesi rulman aşınmasından kaynaklanabilir. iQdrive motor arızalarında belirgin uğultu ve durma görülür.",
      },
    ],
    relatedServiceSlug: "camasir-makinesi-servisi",
    relatedErrorGroups: ["bosch-siemens-profilo"],
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Çamaşır makinesi su alıyor ama dönmüyorsa ne olabilir?",
        answer:
          "Kapı kilidi, kayış veya motor arızası en sık nedenlerdir. Program su alma aşamasını tamamlayıp dönme aşamasında duruyorsa teknik arıza olasılığı yüksektir.",
      },
      {
        question: "Motor sesi geliyor ama tambur dönmüyorsa kayış mı kopmuş?",
        answer:
          "Kayış kopması veya gevşemesi bu tabloya yol açabilir. Kayışsız motorlu modellerde ise motor veya kart arızası düşünülür. Teşhis için alt panel sökümü gerekir.",
      },
      {
        question: "Kazan dönmüyorsa çamaşır makinesi kullanılmaya devam edilir mi?",
        answer:
          "Hayır. Dönme olmadan ısıtıcı veya pompa çalışmaya devam ederse ek arızalara yol açabilir. Programı durdurup servis çağırın.",
      },
    ],
    sections: [
      {
        id: "yuk-dengesi",
        title: "Yük dengesi ve program seçimi",
        body: "Tek parça ağır tekstil veya yorgan gibi yükler tamburu denge dışı bırakabilir. Makine güvenlik nedeniyle dönmeyi durdurabilir. Yükü yeniden dağıtmak sorunu çözebilir; ancak her programda tekrarlanıyorsa mekanik arıza araştırılmalıdır.",
      },
      {
        id: "mekanik-ariza",
        title: "Kayış, motor ve rulman",
        body: "Geleneksel kayışlı sistemlerde kayış aşınması veya kopması tamburun durmasına neden olur. Rulman arızasında gıcırtı ve zorlanma hissedilir. Bu müdahaleler özel alet ve deneyim gerektirir; evde söküm yapılmamalıdır.",
      },
      {
        id: "sikma-farki",
        title: "Sıkma yapmama ile farkı",
        body: "Kazan yıkama sırasında hiç dönmüyorsa mekanik veya kilit sorunu ön plandadır. Yalnızca sıkma aşamasında sorun varsa farklı nedenler gündeme gelir. Sıkma odaklı şikayetler için blog rehberimizdeki sıkma yapmama yazısına bakabilirsiniz.",
      },
    ],
  },
  {
    deviceSlug: "bulasik-makinesi",
    deviceTitle: "Bulaşık Makinesi",
    problemSlug: "tabaninda-su-var",
    title: "Bulaşık Makinesi Tabanında Su Var | Ne Yapmalı?",
    h1: "Bulaşık makinesi tabanında su var",
    focusKeyphrase: "bulaşık makinesi tabanında su var",
    secondaryKeyphrases: [
      "bulaşık makinesi altında su birikiyor",
      "bulaşık makinesi sızıntı yapıyor",
      "bulaşık makinesi taban su sensörü",
      "bulaşık makinesi kaçak yapıyor",
    ],
    intro:
      "Bulaşık makinesi tabanında su birikmesi, sızıntı, tahliye sorunu veya emniyet sensörü uyarısıyla kendini gösterebilir. Su, elektrikli bileşenlere yaklaştığında risk artar. Bu rehberde güvenli kontroller, olası nedenler ve teknisyen müdahale süreci anlatılmaktadır.",
    shortAnswer:
      "Tabanda su varsa programı durdurun, cihazın fişini çekin ve suyun priz veya kabloya temas etmediğinden emin olun. Filtre ve kapak contasını dışarıdan kontrol edin; birikinti devam ediyorsa servis çağırın.",
    symptoms: [
      "Makine altında veya ön panelde su birikintisi",
      "Taban emniyet sensörü uyarısı veya program durması",
      "Kapı altından su damlaması",
      "Mutfak zemininde nem veya su izi",
      "Program sonunda tabanda su kalması",
    ],
    possibleCauses: [
      "Kapı contası yıpranması veya kirli conta",
      "Pompa veya tahliye hortumu bağlantı kaçağı",
      "Su giriş vanası veya hortum arızası",
      "Tambur veya filtre kapağı contası sızdırması",
      "Aşırı köpük ve taşma (yanlış deterjan)",
      "Çatlak tank veya iç komponent kaçağı",
    ],
    safeChecks: [
      "Programı durdurun ve fişi çekin; suyun elektrik bileşenlerine ulaşmadığını kontrol edin.",
      "Kapı contasının temiz ve düzgün oturduğunu dışarıdan inceleyin.",
      "Filtre kapağının sıkı kapandığını kontrol edin; sökmeden önce kullanım kılavuzuna bakın.",
      "Su giriş hortumunda belirgin damlama var mı arkadan gözlemleyin; hortumu sökmeyin.",
      "Deterjanın bulaşık makinesine uygun ve ölçülü kullanıldığını doğrulayın.",
    ],
    doNotDo: [
      "Su birikmişken cihazı çalıştırmaya devam etmeyin.",
      "Taban panelini veya alt kapağı sökerek içeri su dökmeyin.",
      "Elektrik prizine su temas etmişse prize dokunmayın.",
      "Contayı yapıştırıcı veya bantla geçici onarmaya çalışmayın.",
      "Pompa veya hortum bağlantılarını elle sıkmayın.",
    ],
    whenToShutOff:
      "Tabanda su birikmişse, emniyet sensörü devreye girmişse veya su priz ve kabloya yakınsa cihazı hemen kapatın ve fişi çekin. Elektrik çarpması riski varsa sigortayı kapatıp servis bekleyin.",
    technicianProcess:
      "Teknisyen sızıntı kaynağını pompa, hortum, conta ve tank kontrolleriyle belirler. Taban sensörü ve emniyet devresi test edilir. Gerekli conta veya parça değişimi onay sonrası yapılır; kaçak testi ile teslim edilir.",
    brandNotes: [
      {
        brand: "Bosch",
        note: "Bosch bulaşık makinelerinde AquaStop hortum emniyeti ve taban sensörü sık kullanılır. Sensör tetiklendiyse alt kapağın altında su birikmiş olabilir; kurutma için cihazın eğilmesi önerilmez, servis müdahalesi gerekir.",
      },
    ],
    relatedServiceSlug: "bulasik-makinesi-servisi",
    relatedErrorGroups: ["bosch-siemens-profilo"],
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Bulaşık makinesi tabanında su birikince kendiliğinden durur mu?",
        answer:
          "Birçok modelde taban emniyet sensörü su algıladığında programı durdurur. Bu emniyet özelliğidir; su giderilmeden ve kaçak bulunmadan kullanıma devam etmeyin.",
      },
      {
        question: "Kapı contası su kaçırır mı?",
        answer:
          "Evet. Yıpranmış veya kirli conta kapı altından sızıntı yapabilir. Conta temizliği bazen yeterli olur; yırtık conta değişim gerektirir.",
      },
      {
        question: "Yanlış deterjan tabanda su biriktirir mi?",
        answer:
          "Aşırı köpük oluşumu taşmaya ve tabana su kaçmasına yol açabilir. Bulaşık makinesi deterjanı kullanın ve dozajı aşmayın.",
      },
    ],
    sections: [
      {
        id: "emniyet-sensoru",
        title: "Taban sensörü ve emniyet",
        body: "Modern bulaşık makinelerinde taban sensörü su birikimini algılayarak cihazı durdurur. Bu, pompa ve kart hasarını önlemek içindir. Sensör tetiklendikten sonra cihazın altını kurutmak için eğmek veya sallamak önerilmez; doğru yöntem kaçağın giderilmesi ve gerekirse profesyonel kurutmadır.",
      },
      {
        id: "sizinti-noktalari",
        title: "Sık sızıntı noktaları",
        body: "Kapı contası, filtre kapağı, pompa bağlantısı ve su giriş vanası en sık kontrol edilen noktalardır. İç tank çatlağı nadir ama ciddi kaçak yapar. Dışarıdan görülemeyen kaçaklar için alt panel açılması gerekir; bu işlem teknik bilgi gerektirir.",
      },
      {
        id: "servis-onerisi",
        title: "Ne zaman servis çağırmalı?",
        body: "Su birikintisi tekrarlıyorsa, emniyet uyarısı sıfırlanmıyorsa veya elektrik bileşenlerine yakınsa gecikmeden servis alın. Kerem Teknik Servis, İstanbul genelinde bulaşık makinesi sızıntı ve taban su sorunlarında yerinde müdahale sunar.",
      },
    ],
  },
  {
    deviceSlug: "bulasik-makinesi",
    deviceTitle: "Bulaşık Makinesi",
    problemSlug: "musluk-isareti",
    title: "Bulaşık Makinesi Musluk İşareti | Anlamı ve Çözüm",
    h1: "Bulaşık makinesi musluk işareti",
    focusKeyphrase: "bulaşık makinesi musluk işareti",
    secondaryKeyphrases: [
      "bulaşık makinesi su musluğu lambası",
      "bulaşık makinesi su almıyor",
      "bulaşık makinesi musluk sembolü yanıyor",
      "bulaşık makinesi su giriş arızası",
    ],
    intro:
      "Bulaşık makinesinde musluk veya su musluğu sembolü genellikle su girişiyle ilgili bir soruna işaret eder. Cihaz su alamadığında program başlamaz veya kısa süre sonra durur. Bu rehberde sembolün anlamı, güvenli kontroller ve servis gerektiren durumlar açıklanmaktadır.",
    shortAnswer:
      "Musluk işareti yanıyorsa ev su vanasının açık olduğunu, giriş hortumunun bükülmediğini ve musluk vanasının açık konumda olduğunu kontrol edin. Sorun devam ederse su giriş vanası veya kart arızası için servis gerekir.",
    symptoms: [
      "Panelde musluk veya su damlası sembolü yanıyor",
      "Program başlıyor ancak su almıyor",
      "Makine birkaç dakika içinde duruyor",
      "Yıkama sırasında su sesi gelmiyor",
      "Ekranda su girişi ile ilgili hata kodu",
    ],
    possibleCauses: [
      "Ev su vanasının kapalı olması veya düşük su basıncı",
      "Su giriş hortumunun bükülmesi veya tıkanması",
      "Makine musluk vanasının kapalı konumda olması",
      "Su giriş vanası (selenoid) arızası",
      "Basınç şalteri veya akış sensörü arızası",
      "Elektronik kart su giriş devresi sorunu",
    ],
    safeChecks: [
      "Ev su vanasının ve bulaşık makinesi musluk vanasının tam açık olduğunu kontrol edin.",
      "Su giriş hortumunun bükülmediğini ve ezilmediğini görsel olarak inceleyin.",
      "Başka bir muslukta su basıncının normal olduğunu kontrol edin.",
      "Programı iptal edip birkaç dakika sonra yeniden başlatın.",
      "Hortum bağlantılarını sökmeye veya vanayı parçalamaya çalışmayın.",
    ],
    doNotDo: [
      "Selenoid vanayı veya hortum contasını kendi başınıza sökmeyin.",
      "Su basıncı düşükken cihazı tekrar tekrar zorlamayın.",
      "Musluk vanasını zorla açmaya çalışmayın; kırık parça riski vardır.",
      "Elektrik fişi takılıyken su bağlantısını gevşetmeyin.",
      "Hata kodunu görmezden gelip uzun program çalıştırmayın.",
    ],
    whenToShutOff:
      "Su giriş hortumunda patlama, şiddetli sızıntı veya elektrik prizine su sıçraması varsa vanayı kapatın, cihazı fişten çekin ve servis çağırın.",
    technicianProcess:
      "Teknisyen su basıncını, musluk vanasını ve hortum akışını kontrol eder. Selenoid vana ve basınç şalteri test edilir. Kart üzerindeki su giriş devresi ölçülür; arızalı parça onay sonrası değiştirilir.",
    brandNotes: [
      {
        brand: "Bosch",
        note: "Bosch modellerde musluk sembolü genellikle E15 veya su giriş hatası ile birlikte görülebilir. AquaStop hortumunda emniyet kilidi varsa su girişi kesilmiş olabilir.",
      },
      {
        brand: "Siemens",
        note: "Siemens bulaşık makinelerinde düşük şebeke basıncı musluk uyarısını tetikleyebilir. Gece su kesintisi sonrası hava girişi de benzer belirti verir.",
      },
    ],
    relatedServiceSlug: "bulasik-makinesi-servisi",
    relatedErrorGroups: ["bosch-siemens-profilo"],
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Musluk işareti yanıyor ama su var, neden?",
        answer:
          "Hortum bükülmüş, musluk vanası kısmen kapalı veya selenoid vana arızalı olabilir. Basınç yeterli görünse de makine girişinde akış algılanmıyor olabilir.",
      },
      {
        question: "Bulaşık makinesi su almıyorsa program çalışır mı?",
        answer:
          "Birçok model su almadan yıkamaya geçmez veya kısa süre sonra durur. Musluk sembolü bu emniyet durumunu gösterir.",
      },
      {
        question: "Su giriş vanası arızası evde tamir edilir mi?",
        answer:
          "Selenoid vana ve basınç şalteri değişimi teknik bilgi gerektirir. Yanlış montaj sızıntı riski taşır; yerinde teşhis önerilir.",
      },
    ],
    sections: [
      {
        id: "sembol-anlami",
        title: "Musluk sembolünün anlamı",
        body: "Musluk veya su damlası ikonu, cihazın yeterli su alamadığını bildirir. Bu durum ev tesisatından veya makine su giriş bileşenlerinden kaynaklanabilir. Sembol kaybolmadan programın tamamlanmasını beklemek mümkün olmayabilir.",
      },
      {
        id: "basinc-hortum",
        title: "Basınç ve hortum kontrolleri",
        body: "İstanbul'da bazı binalarda özellikle gün içi su basıncı düşebilir. Hortum bükülmesi en sık kullanıcı kaynaklı nedendir. Musluk vanası tam açılmadığında da akış yetersiz kalır. Bu kontroller güvenli şekilde evde yapılabilir.",
      },
      {
        id: "teknik-mudahale",
        title: "Teknik müdahale gerektiren durumlar",
        body: "Vanalar ve sensörler arızalıysa cihaz sürekli su alamama moduna geçer. Kerem Teknik Servis, musluk işareti ve su giriş arızalarında yerinde teşhis ve onarım hizmeti sunar.",
      },
    ],
  },
  {
    deviceSlug: "bulasik-makinesi",
    deviceTitle: "Bulaşık Makinesi",
    problemSlug: "su-bosaltmiyor",
    title: "Bulaşık Makinesi Su Boşaltmıyor | Nedenleri",
    h1: "Bulaşık makinesi su boşaltmıyor",
    focusKeyphrase: "bulaşık makinesi su boşaltmıyor",
    secondaryKeyphrases: [
      "bulaşık makinesi su tahliye etmiyor",
      "bulaşık makinesi dibinde su kalıyor",
      "bulaşık makinesi pompa çalışmıyor",
      "bulaşık makinesi su boşaltma arızası",
    ],
    intro:
      "Bulaşık makinesi su boşaltmıyor sorunu, program sonunda tabanda su kalması, tahliye pompasının çalışmaması veya tıkanıklık belirtisi olabilir. Su birikimi koku, hijyen sorunu ve yeni programlarda taşmaya yol açar. Aşağıda belirtiler, güvenli kontroller ve teknisyen süreci özetlenmiştir.",
    shortAnswer:
      "Su boşaltmıyorsa programı durdurun, filtre ve tahliye hortumunu dışarıdan kontrol edin. Su hâlâ boşalmıyorsa pompa veya kart arızası olabilir; cihazı su dolu çalıştırmaya devam etmeyin.",
    symptoms: [
      "Program bitince tabanda belli miktar su kalıyor",
      "Tahliye sırasında pompa sesi gelmiyor",
      "Su tahliye hortumundan akış yok",
      "Ekranda tahliye veya pompa ile ilgili hata",
      "Makine su dolu iken yeni program başlamıyor",
    ],
    possibleCauses: [
      "Filtre veya tahliye bölgesinde tıkanıklık",
      "Tahliye hortumunda bükülme veya tıkanma",
      "Pompa pervanesinde yabancı cisim",
      "Tahliye pompası motor arızası",
      "Sifon bağlantısı veya mutfak gideri tıkanıklığı",
      "Elektronik kart pompa sürücü arızası",
    ],
    safeChecks: [
      "Programı iptal edin; kullanım kılavuzuna uygun şekilde alt filtreyi kontrol edin.",
      "Tahliye hortumunun bükülmediğini ve sifona doğru eğimde olduğunu gözlemleyin.",
      "Mutfak lavabosunun tıkalı olup olmadığını kontrol edin.",
      "Filtre temizliği sonrası kısa boşaltma programı deneyin.",
      "Pompa kapağını zorla sökmeyin; kesici alet kullanmayın.",
    ],
    doNotDo: [
      "Su dolu makineyi uzun süre kapalı bırakıp koku riskini artırmayın; programı durdurun.",
      "Pompa bölgesine elle müdahale ederek contayı bozmayın.",
      "Tahliye hortumunu sökmeden içine tel sokmayın.",
      "Taşan suyu elektrik prizine yakın bırakmayın.",
      "Pompa arızasında cihazı tekrar tekrar çalıştırmayın.",
    ],
    whenToShutOff:
      "Su taşması, elektrik bileşenlerine su teması veya yanık kokusu varsa cihazı kapatın ve fişi çekin. Pompa hiç çalışmıyorsa yeni program başlatmayın.",
    technicianProcess:
      "Teknisyen filtre, hortum ve sifon hattını kontrol eder. Pompa sökülerek pervane ve motor test edilir. Kart çıkışları ölçülür; tıkanıklık giderildikten sonra boşaltma testi yapılır.",
    brandNotes: [
      {
        brand: "Arçelik",
        note: "Arçelik bulaşık makinelerinde tahliye hatası ekranda kod ile gösterilebilir. Filtre konumu modele göre değişir; kart arızaları pompa sessizliği ile birlikte gelir.",
      },
      {
        brand: "Beko",
        note: "Beko modellerde sifon bağlantısı yüksek montajda tahliye sorununa yol açabilir. Pompa tıkanıklığı sık görülür ve filtre temizliği ile çözülebilir.",
      },
    ],
    relatedServiceSlug: "bulasik-makinesi-servisi",
    relatedErrorGroups: ["arcelik-beko"],
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Bulaşık makinesi dibinde su kalması normal mi?",
        answer:
          "Az miktarda su bazı modellerde normal sayılabilir; ancak belirgin birikinti ve her programda tekrar tahliye sorunu arıza işaretidir.",
      },
      {
        question: "Filtre temizliği su boşaltma sorununu çözer mi?",
        answer:
          "Tıkanıklık filtreden kaynaklanıyorsa evet. Pompa veya kart arızasında filtre temizliği yeterli olmaz.",
      },
      {
        question: "Pompa çalışmıyorsa değişim gerekir mi?",
        answer:
          "Önce tıkanıklık ve elektriksel besleme kontrol edilir. Motor arızası doğrulanırsa pompa değişimi gerekebilir.",
      },
    ],
    sections: [
      {
        id: "filtre-tikaniklik",
        title: "Filtre ve tıkanıklık",
        body: "Yemek artığı birikimi filtre ve pompa girişini tıkar. Düzenli filtre temizliği tahliye sorunlarının önüne geçer. Tıkanıklık giderilmeden pompa zorlanırsa motor hasarı oluşabilir.",
      },
      {
        id: "sifon-baglanti",
        title: "Sifon ve mutfak gideri",
        body: "Tahliye hortumu mutfak sifonuna bağlıdır. Sifon veya gider tıkalıysa makine suyu dışarı atamaz. Lavabo geri tepmesi bu durumda ipucu verir. Gider sorunu giderilmeden pompa değişimi fayda sağlamaz.",
      },
      {
        id: "pompa-arizasi",
        title: "Pompa ve kart arızası",
        body: "Mekanik tıkanıklık yoksa pompa motoru veya kart sürücüsü arızalı olabilir. Kerem Teknik Servis, su boşaltmama şikayetlerinde yerinde teşhis ve onarım hizmeti sunar.",
      },
    ],
  },
  {
    deviceSlug: "camasir-makinesi",
    deviceTitle: "Çamaşır Makinesi",
    problemSlug: "calismiyor",
    title: "Çamaşır Makinesi Çalışmıyor | Nedenleri ve Kontroller",
    h1: "Çamaşır makinesi çalışmıyor",
    focusKeyphrase: "çamaşır makinesi çalışmıyor",
    secondaryKeyphrases: [
      "çamaşır makinesi açılmıyor",
      "çamaşır makinesi hiç çalışmıyor",
      "çamaşır makinesi tepki vermiyor",
      "çamaşır makinesi panel çalışmıyor",
    ],
    intro:
      "Çamaşır makinesi hiç açılmıyorsa, panelde ışık yanmıyorsa veya program başlamıyorsa elektrik beslemesi, kapı kilidi, sigorta veya elektronik kart kaynaklı olabilir. Tamamen ölü cihaz ile hata kodu veren cihaz farklı yollar izler. Güvenli kontroller ve servis süreci aşağıda özetlenmiştir.",
    shortAnswer:
      "Çalışmıyorsa priz, sigorta ve kapı kilidini kontrol edin. Panel hiç yanıt vermiyorsa elektrik hattı veya kart arızası olabilir. Sigorta attırıyorsa cihazı zorlamadan servis çağırın.",
    symptoms: [
      "Panelde hiç ışık veya ekran yok",
      "Program tuşlarına basıldığında tepki yok",
      "Kapı kilitlenmiyor ve program başlamıyor",
      "Sigorta veya kaçak akım rölesi atıyor",
      "Kısa süre çalışıp tamamen kapanıyor",
    ],
    possibleCauses: [
      "Priz, kablo veya sigorta sorunu",
      "Kapı kilidi veya kilit mandalı arızası",
      "Elektronik kart veya güç modülü arızası",
      "Motor veya pompa kısa devresi",
      "Su baskı anahtarı veya emniyet sensörü kilidi",
      "Aşırı köpük veya taşma sonrası emniyet modu",
    ],
    safeChecks: [
      "Fişin takılı olduğunu ve prizde başka bir cihazla elektrik olup olmadığını kontrol edin.",
      "Ev sigortası veya kaçak akım rölesinin durumunu kontrol edin.",
      "Kapının tam kapandığından ve çamaşır sıkışmadığından emin olun.",
      "Çocuk kilidi veya gecikmeli başlatma aktif mi kontrol edin.",
      "Son programda taşma veya su kaçağı olup olmadığını hatırlayın.",
    ],
    doNotDo: [
      "Sigorta attıkça makineyi tekrar çalıştırmayın.",
      "Kapı kilidini zorla açmaya veya kırmaya çalışmayın.",
      "Arka paneli veya kart bölümünü sökmeyin.",
      "Su birikmişse fişe takılı halde içeri müdahale etmeyin.",
      "Garanti dışı kart müdahalesi için yetkisiz kişilere başvurmayın.",
    ],
    whenToShutOff:
      "Yanık kokusu, duman, kıvılcım veya ısınmış kablo varsa fişi çekin ve cihazı kullanmayın. Su kaçağı ile birlikte elektrik varsa sigortayı kapatıp servis bekleyin.",
    technicianProcess:
      "Teknisyen besleme voltajı, kapı kilidi ve emniyet devresini test eder. Kart ve motor çıkışları ölçülür. Arıza kaynağı belirlendikten sonra parça onayı alınır ve onarım sonrası program testi yapılır.",
    brandNotes: [
      {
        brand: "Miele",
        note: "Miele çamaşır makinelerinde elektronik kart ve kapı kilidi hassas kalibrasyon gerektirir. Hata kodu ekranı teşhisi yönlendirir; parça değişiminde model serisi doğrulaması şarttır.",
      },
    ],
    relatedServiceSlug: "camasir-makinesi-servisi",
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Çamaşır makinesi hiç açılmıyorsa priz mi bozuk?",
        answer:
          "Priz veya sigorta sorunu olabilir. Başka cihazla prizi test edin. Priz çalışıyorsa kart veya kapı kilidi arızası düşünülür.",
      },
      {
        question: "Kapı kilitlenmiyorsa makine neden çalışmaz?",
        answer:
          "Güvenlik nedeniyle kapı kilitlenmeden program başlamaz. Kilit mandalı veya elektronik kilit arızalı olabilir.",
      },
      {
        question: "Çamaşır makinesi sigorta attırıyorsa ne yapmalıyım?",
        answer:
          "Cihazı fişten çekin ve tekrar çalıştırmayın. Motor, pompa veya kartta kısa devre olabilir. Yerinde teşhis gerekir.",
      },
    ],
    sections: [
      {
        id: "elektrik-panel",
        title: "Elektrik ve panel sorunları",
        body: "Panel tamamen karanlıksa besleme hattı veya ana kart güç devresi arızalı olabilir. Kısmi çalışma durumunda dokunmatik panel veya bağlantı sorunu da gündeme gelir. Elektrik ölçümü olmadan kart değişimi önerilmemelidir.",
      },
      {
        id: "kapi-kilidi",
        title: "Kapı kilidi ve emniyet",
        body: "Kapı kilidi hem mekanik hem elektronik bileşen içerir. Kilit sesi gelmiyorsa program başlamaz. Zorla açmak contaya ve kilide zarar verir. Teknisyen uygun açma prosedürünü uygular.",
      },
      {
        id: "servis-destegi",
        title: "Servis desteği",
        body: "Kerem Teknik Servis, çamaşır makinesi çalışmama arızalarında İstanbul genelinde yerinde teşhis hizmeti sunar. Sıkma yapmama gibi farklı şikayetler için blog rehberlerimizi de inceleyebilirsiniz.",
      },
    ],
  },
  {
    deviceSlug: "bulasik-makinesi",
    deviceTitle: "Bulaşık Makinesi",
    problemSlug: "elektrik-gelmiyor",
    title: "Bulaşık Makinesine Elektrik Gelmiyor | Nedenleri",
    h1: "Bulaşık makinesine elektrik gelmiyor",
    focusKeyphrase: "bulaşık makinesine elektrik gelmiyor",
    secondaryKeyphrases: [
      "bulaşık makinesi açılmıyor",
      "bulaşık makinesi panel yanmıyor",
      "bulaşık makinesi fişe takılı ama çalışmıyor",
      "bulaşık makinesi sigorta attırıyor",
    ],
    intro:
      "Bulaşık makinesine elektrik gelmiyorsa panel tamamen karanlık kalır veya cihaz anında kapanır. Sorun prizden, sigortadan, kablodan veya cihaz içi kart ve emniyet devresinden kaynaklanabilir. Elektrik güvenliği açısından doğru adımlar önemlidir.",
    shortAnswer:
      "Elektrik gelmiyorsa priz ve sigortayı kontrol edin, fişin sağlam olduğundan emin olun. Panel hâlâ yanıt vermiyorsa veya sigorta atıyorsa cihazı zorlamadan teknik servis çağırın.",
    symptoms: [
      "Panelde hiç ışık veya ekran görünmüyor",
      "Fiş takılı olmasına rağmen tuşlara basınca tepki yok",
      "Cihaz açılıyor gibi olup hemen kapanıyor",
      "Ev sigortası veya kaçak akım rölesi atıyor",
      "Kablo veya priz bölgesinde ısınma kokusu",
    ],
    possibleCauses: [
      "Priz, sigorta veya kaçak akım rölesi arızası",
      "Gevşek fiş veya hasarlı besleme kablosu",
      "Ana kart veya güç modülü arızası",
      "Taban su sensörü emniyet kesmesi",
      "Pompa veya ısıtıcı kısa devresi",
      "Kapı anahtarı veya emniyet şalteri arızası",
    ],
    safeChecks: [
      "Fişin prize tam oturduğunu ve prizde başka cihazla elektrik olup olmadığını kontrol edin.",
      "Sigorta panosunda ilgili hattın açık olduğunu doğrulayın.",
      "Kablo üzerinde görünür hasar, ezilme veya ısınma olup olmadığını dışarıdan inceleyin.",
      "Tabanda su birikintisi var mı kontrol edin; varsa fişe dokunmadan servis çağırın.",
      "Sigortayı bir kez resetleyin; tekrar atıyorsa zorlamayın.",
    ],
    doNotDo: [
      "Islak ellerle fiş veya prize dokunmayın.",
      "Sigorta sürekli atarken cihazı tekrar çalıştırmayın.",
      "Arka kapağı veya kart bölümünü sökmeyin.",
      "Hasarlı kabloyu bantla sarmaya çalışmayın.",
      "Taban su sensörü devredeyken emniyeti atlatmaya çalışmayın.",
    ],
    whenToShutOff:
      "Yanık kokusu, kıvılcım, duman veya kablo ısınması varsa fişi çekin ve cihazı kullanmayın. Su birikintisi ile birlikte elektrik riski varsa sigortayı kapatın.",
    technicianProcess:
      "Teknisyen besleme voltajını, sigorta hattını ve cihaz içi emniyet devresini ölçer. Taban sensörü, kapı şalteri ve kart test edilir. Kısa devre kaynağı bulunur; onay sonrası parça değişimi ve elektriksel güvenlik testi yapılır.",
    brandNotes: [
      {
        brand: "Bosch",
        note: "Bosch bulaşık makinelerinde AquaStop emniyeti ve taban sensörü elektrik kesmesine neden olabilir. Alt kapağa su girmişse panel tamamen kapanır; önce kaçak giderilmelidir.",
      },
      {
        brand: "Siemens",
        note: "Siemens modellerde güç modülü arızası sigorta attırma ile birlikte görülebilir. iQdrive pompalı serilerde kart-pompa uyumu modele özeldir.",
      },
    ],
    relatedServiceSlug: "bulasik-makinesi-servisi",
    relatedErrorGroups: ["bosch-siemens-profilo"],
    relatedRegionSlugs: [...PRIORITY_REGION_SLUGS],
    faqs: [
      {
        question: "Bulaşık makinesi fişe takılı ama panel yanmıyorsa ne olabilir?",
        answer:
          "Priz, sigorta, kablo veya ana kart arızası olabilir. Priz çalışıyorsa cihaz içi güç devresi veya emniyet sensörü kesmiş olabilir.",
      },
      {
        question: "Tabanda su varken elektrik gelmez mi?",
        answer:
          "Birçok modelde taban sensörü su algıladığında cihazı güvenlik amacıyla devre dışı bırakır. Su giderilmeden panel açılmayabilir.",
      },
      {
        question: "Sigorta attırıyorsa bulaşık makinesi tamir edilir mi?",
        answer:
          "Evet, kısa devre kaynağı bulunduğunda onarım mümkündür. Pompa, ısıtıcı veya kart arızası sık nedenlerdir. Tekrar tekrar sigorta zorlamak risklidir.",
      },
    ],
    sections: [
      {
        id: "priz-sigorta",
        title: "Priz ve sigorta kontrolleri",
        body: "Elektrik gelmiyor şikayetinin önemli kısmı ev tesisatından kaynaklanır. Priz, sigorta ve kaçak akım rölesi kontrol edilmelidir. Fiş gevşekliği aralıklı çalışmama da yapabilir. Bu kontroller güvenli şekilde kullanıcı tarafından yapılabilir.",
      },
      {
        id: "emniyet-devresi",
        title: "Emniyet devresi ve taban sensörü",
        body: "Su kaçağı sonrası taban sensörü cihazı elektriksel olarak kilitleyebilir. Bu durumda önce sızıntı giderilmelidir. Emniyeti atlatmak yerine kaçak tespiti yapılmalıdır.",
      },
      {
        id: "kart-onarim",
        title: "Kart ve kablo arızası",
        body: "Besleme hattı sağlamken panel karanlıksa kart veya güç modülü arızalı olabilir. Kerem Teknik Servis, elektrik gelmeme şikayetlerinde yerinde ölçüm ve onarım hizmeti sunar.",
      },
    ],
  },
];
