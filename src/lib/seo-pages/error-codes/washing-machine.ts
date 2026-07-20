import { ERROR_CODE_MODEL_WARNING } from "../constants";
import { errorCodeVariants, normalizeErrorCodeSlug } from "../slug";
import type { ErrorCodeSeed } from "./types";

type WashingGroupConfig = {
  brandGroupSlug: string;
  brandGroupTitle: string;
  brand: string;
  applicableModels: string[];
  commonRelatedCodes: string[];
};

const VERIFIED_AT = "2026-07-20";
const DEVICE_SLUG = "camasir-makinesi";
const DEVICE_TITLE = "Çamaşır Makinesi";

const BSH_GROUP: WashingGroupConfig = {
  brandGroupSlug: "bosch-siemens-profilo",
  brandGroupTitle: "Bosch / Siemens / Profilo",
  brand: "Bosch / Siemens / Profilo",
  applicableModels: [
    "Bosch Serie 4 / Serie 6 / Serie 8 çamaşır makineleri",
    "Siemens iQ300 / iQ500 / iQ700 serileri",
    "Profilo CMG / CGA platformuna yakın modeller",
  ],
  commonRelatedCodes: ["e18", "e23", "e24"],
};

const ARCELIK_BEKO_GROUP: WashingGroupConfig = {
  brandGroupSlug: "arcelik-beko",
  brandGroupTitle: "Arçelik / Beko",
  brand: "Arçelik / Beko",
  applicableModels: [
    "Arçelik 7 kg - 10 kg dijital ekranlı ön yüklemeli modeller",
    "Beko BK / BKM / WMY / WTV platformuna yakın makineler",
    "İkiz elektronik altyapı kullanan Arçelik-Beko ev tipi seriler",
  ],
  commonRelatedCodes: ["e01", "e02", "e03", "e05"],
};

const VESTEL_GROUP: WashingGroupConfig = {
  brandGroupSlug: "vestel",
  brandGroupTitle: "Vestel",
  brand: "Vestel",
  applicableModels: [
    "Vestel ön yüklemeli dijital ekranlı çamaşır makineleri",
    "Regal / Seg ile benzer şasi kullanan bazı Vestel platformları",
  ],
  commonRelatedCodes: ["e01"],
};

type SeedInput = {
  code: string;
  meaning: string;
  verificationStatus: "verified" | "unverified";
  sources: ErrorCodeSeed["sources"];
  relatedCodes?: string[];
  symptoms?: string[];
  possibleCauses?: string[];
  safeChecks?: string[];
  doNotDo?: string[];
  technicianChecks?: string[];
  modelVariationWarning?: string;
};

function createGenericWashingSeed(
  group: WashingGroupConfig,
  input: SeedInput,
): ErrorCodeSeed {
  const codeSlug = normalizeErrorCodeSlug(input.code);
  const relatedCodes = input.relatedCodes ?? group.commonRelatedCodes.filter((code) => code !== codeSlug);

  return {
    deviceSlug: DEVICE_SLUG,
    deviceTitle: DEVICE_TITLE,
    brandGroupSlug: group.brandGroupSlug,
    brandGroupTitle: group.brandGroupTitle,
    brand: group.brand,
    code: input.code,
    codeSlug,
    codeVariants: errorCodeVariants(input.code),
    meaning: input.meaning,
    applicableModels: group.applicableModels,
    symptoms: input.symptoms ?? [
      `${group.brandGroupTitle} çamaşır makinesinde program başlamadan veya programın ortasında ${input.code} kodu görünür.`,
      "Kapak kilitlenmiş görünse bile cihaz güvenlik nedeniyle çevrimi durdurabilir.",
      "Su alma, yıkama, ısıtma veya tahliye adımlarından biri beklenenden uzun sürebilir.",
      "Kullanıcı tarafında net bir mekanik ses olmadan yalnızca ekranda servis uyarısı belirebilir.",
    ],
    possibleCauses: input.possibleCauses ?? [
      "Kodun anlamı ilgili model platformunda sensör, pompa, ısıtıcı veya elektronik kart izlemesine bağlı olarak değişebilir.",
      "Düşük şebeke gerilimi, kısa süreli su kesintisi veya önceki çevrimden kalan hata kaydı yanlış yönlendirebilir.",
      "Kablo tesisatı, konnektör teması veya kart üzerindeki ölçüm devresi stabil çalışmıyor olabilir.",
      "Aynı kod farklı yazılım sürümlerinde farklı alt arıza tanımıyla kullanılabilir.",
    ],
    safeChecks: input.safeChecks ?? [
      "Cihazı kapatıp birkaç dakika bekledikten sonra ekranın aynı kodu tekrar verip vermediğini gözlemleyin.",
      "Su vanasının açık, tahliye hortumunun kıvrımsız ve filtre kapağı çevresinin kuru olduğunu dışarıdan kontrol edin.",
      "Çamaşır yükünün tambur içinde aşırı sıkışık olmadığını ve cihazın dengesiz zeminde durmadığını doğrulayın.",
      "Model etiketi ve tam hata kodunu not edin; servis kaydı sırasında seri bilgisiyle paylaşın.",
    ],
    doNotDo: input.doNotDo ?? [
      "Makine enerjiliyken alt kapak, arka kapak veya üst tabla sökümü yapmayın.",
      "Hata kodunu silmek için peş peşe fiş çekip takma veya gizli servis menüsü denemesi uygulamayın.",
      "Su veya deterjan teması varken prize dokunmayın; kaçak şüphesinde önce güvenliği sağlayın.",
      "Elektronik kart, kilit, pompa veya rezistans bağlantılarını kullanıcı olarak ayırmaya çalışmayın.",
    ],
    technicianChecks: input.technicianChecks ?? [
      "Teknisyen model koduna göre servis dokümanı veya saha çapraz referansı üzerinden hata sınıfını doğrular.",
      "Su alma, tahliye, ısıtma ve sensör devreleri sırayla canlı test veya ölçüm ile kontrol edilir.",
      "Kart hata hafızası, ilgili konnektörlerde oksitlenme ve yük altındaki voltaj davranışı değerlendirilir.",
      "Gerekirse pompa, rezistans, NTC, kapı kilidi veya kaçak koruma devresine yönelik parça testi yapılır.",
    ],
    relatedCodes,
    modelVariationWarning:
      input.modelVariationWarning ??
      `${ERROR_CODE_MODEL_WARNING} ${group.brandGroupTitle} grubunda ${input.code} bazı serilerde alt hata, bazı serilerde genel servis uyarısı olarak geçebilir.`,
    verificationStatus: input.verificationStatus,
    sources: input.sources,
  };
}

const VERIFIED_WASHING_SEEDS: ErrorCodeSeed[] = [
  createGenericWashingSeed(BSH_GROUP, {
    code: "E09",
    meaning: "Isıtma devresi arızası; platform çapraz referanslarında ısıtıcı/ısı pompası hattı hatası olarak geçer.",
    verificationStatus: "verified",
    sources: [
      {
        name: "BSH platform çapraz referansı",
        type: "cross-reference",
        modelSeries: "Bosch/Siemens/Profilo çamaşır makinesi platformları",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e60-07", "e60-10", "e36-25"],
    symptoms: [
      "Program normal ilerlese bile su ısınmadığı için yıkama performansı düşer ve çevrim uzayabilir.",
      "Makine durulama veya ana yıkama aşamasında bekleme yapıp bir süre sonra E09 uyarısına düşebilir.",
      "Çamaşırlar program bitiminde normalden daha soğuk kalabilir; hijyen programlarında süre sapması görülebilir.",
      "Bazı serilerde sıkma öncesi güvenlik kesmesi olur ve cihaz kodu kaydedip çevrimi sonlandırır.",
    ],
    possibleCauses: [
      "Rezistans veya ısıtıcı devrede açık devre, kaçak veya verimsiz çalışma",
      "NTC okuması ile ısıtıcı tepkisi arasında beklenen artışın görülmemesi",
      "Isıtıcı rölesi, güç kartı sürüşü veya kablo tesisatında temas problemi",
      "Nadir olarak su seviyesi ve sirkülasyon koşulları sağlanmadığı için ısıtma güvenliği devreye girmesi",
    ],
    safeChecks: [
      "Programı iptal edip cihaz soğuduktan sonra tambur içinde su kalıp kalmadığını gözlemleyin.",
      "Evde düşük voltaj veya aynı anda çalışan yüksek güçlü cihazlar varsa not alın; teknisyen için faydalıdır.",
      "Su girişinin normal olduğunu ve makinenin çevrime gerçekten su alarak başladığını kontrol edin.",
      "Tekrar deneme yapacaksanız kısa program seçin; cihaz peş peşe uzun programlarda zorlanmamalıdır.",
    ],
    doNotDo: [
      "Rezistans ölçmek için arka kapağı sökmeyin veya cihazı yan yatırmayın.",
      "Topraklama hattı şüphesi varken makineyi ıslak zeminde tekrar çalıştırmayın.",
      "Kodu geçici olarak bastırmak için sigorta aç-kapa veya uzatma kablosu değiştirme denemeleri yapmayın.",
      "Tambur içinde su varken makineyi zorla eğip boşaltmaya çalışmayın.",
    ],
    technicianChecks: [
      "Isıtıcı elemanın direnç, izolasyon ve kaçak akım davranışı megger ve multimetre ile doğrulanır.",
      "NTC sensörü, kablo tesisatı ve kart üzerindeki ısıtma rölesi yük altında test edilir.",
      "Program içinde hedef sıcaklığa yükselme süresi izlenir; su seviyesi ve sirkülasyon koşulları değerlendirilir.",
      "Arıza tekrarlıyorsa kart sürüş devresi ve ilgili konnektörlerde ısınma/oksitlenme kontrolü yapılır.",
    ],
  }),
  createGenericWashingSeed(ARCELIK_BEKO_GROUP, {
    code: "E01",
    meaning: "Kapı kilidi veya kapak emniyet devresi arızası.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Arçelik/Beko servis hata kodu çapraz notları",
        type: "cross-reference",
        modelSeries: "Arçelik-Beko ön yüklemeli çamaşır makineleri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e02", "e03", "e05"],
    symptoms: [
      "Start komutu verilse bile kapak kilit sesi duyulmadan E01 uyarısı ekranda kalabilir.",
      "Kapak kapanmış görünse de cihaz programı başlatmaz veya birkaç saniye içinde iptal eder.",
      "Bazı modellerde kilit lambası yanıp söner ve tambur hiç hareket etmeden çevrim kesilir.",
      "Kapak mandalı yıprandıysa kullanıcı kapağı bastırdığında hata aralıklı olarak kaybolabilir.",
    ],
    possibleCauses: [
      "Kapı kilit mekanizması veya kilit bobininde arıza",
      "Kapak dili, menteşe hizası ya da karşılık parçasında fiziksel kaçıklık",
      "Kilit konnektöründe gevşeme, oksitlenme veya kablo kırığı",
      "Elektronik kartın kilit algılama girişinde arıza",
    ],
    safeChecks: [
      "Kapağın önüne sıkışmış çamaşır, lastik conta kıvrılması veya yabancı cisim olup olmadığını kontrol edin.",
      "Kapıyı sert vurmadan kapatıp kilitleme sesinin gelip gelmediğini dinleyin.",
      "Makineyi kapatıp fişini çekin; birkaç dakika sonra yeniden deneyin.",
      "Çocuk kilidi veya program iptali sonrası bekleme durumunu kullanım kılavuzundan doğrulayın.",
    ],
    doNotDo: [
      "Kilit dili veya kapağı tornavida ile zorlayarak kapatmaya çalışmayın.",
      "Kapak açıkken kilit mekanizmasına elle baskı uygulayıp program başlatmayı denemeyin.",
      "Kilidi sökmek için ön paneli açmayın veya kabloya müdahale etmeyin.",
      "Kapak tam oturmuyorken makineyi zorla çalıştırmayın.",
    ],
    technicianChecks: [
      "Kapı kilidinin mekanik oturması ve elektriksel bobin değeri ölçülür.",
      "Kapak dili, menteşe ve ön panel hizası birlikte değerlendirilir.",
      "Kilitten karta giden kablo sürekliliği ve konnektör teması test edilir.",
      "Gerekirse kartın kilit algılama devresi canlı testte izlenir.",
    ],
  }),
  createGenericWashingSeed(ARCELIK_BEKO_GROUP, {
    code: "E02",
    meaning: "Su girişinde yetersizlik veya su alma devresi arızası.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Arçelik/Beko servis hata kodu çapraz notları",
        type: "cross-reference",
        modelSeries: "Arçelik-Beko ön yüklemeli çamaşır makineleri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e01", "e03", "e05"],
    symptoms: [
      "Program başlar fakat kazan beklenen sürede su ile dolmaz.",
      "Musluk açık olmasına rağmen cihaz aralıklı su alma denemeleri yapıp E02 verir.",
      "Yıkama süresi uzar veya makine sessizce bekleyip ardından hata koduna düşer.",
      "Deterjan çekmecesine su gelişi zayıf olabilir.",
    ],
    possibleCauses: [
      "Şebeke su basıncının düşük olması veya giriş vanasının kısık kalması",
      "Giriş hortumu filtresi veya elektromanyetik su vanasında tıkanma",
      "Basınç şalteri, seviye sensörü ya da ilgili hava tuzağında sorun",
      "Kartın su alma komutu vermemesi veya vanaya enerji iletiminde arıza",
    ],
    safeChecks: [
      "Su vanasının tam açık olduğunu ve hortumda kıvrılma olmadığını kontrol edin.",
      "Makineyi yerinden sökmeden, hortum girişlerinde görünür kaçak veya ezilme olup olmadığına bakın.",
      "Evde aynı anda başka noktalarda su kullanımı varsa basınç düşüşünü not edin.",
      "Deterjan çekmecesinde yoğun kireç veya kalıntı birikimi varsa temizlik yapın.",
    ],
    doNotDo: [
      "Basınç düşükken makineyi peş peşe yeniden başlatmayın.",
      "Su giriş filtresini pense veya sivri cisimle deforme etmeyin.",
      "Vana ve hortum bağlantılarını enerjiliyken sökmeyin.",
      "Şebeke suyu kesikken cihazı uzun süre açık bırakmayın.",
    ],
    technicianChecks: [
      "Giriş vanası bobinleri, su alma debisi ve vana besleme voltajı ölçülür.",
      "Basınç şalteri, seviye hortumu ve hava tuzağında tıkanıklık kontrol edilir.",
      "Karttan vanaya çıkan komut ve gecikmeli kesme davranışı test edilir.",
      "Gerekirse model menüsünde su alma süresi ve hata hafızası incelenir.",
    ],
  }),
  createGenericWashingSeed(ARCELIK_BEKO_GROUP, {
    code: "E03",
    meaning: "Su tahliye edilemiyor veya tahliye süresi aşılıyor.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Arçelik/Beko servis hata kodu çapraz notları",
        type: "cross-reference",
        modelSeries: "Arçelik-Beko ön yüklemeli çamaşır makineleri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e02", "e05", "e09"],
    symptoms: [
      "Program sonunda veya sıkma öncesi kazan içinde su kalır.",
      "Pompa sesi duyulsa bile tahliye yetersizdir ve çevrim uzar.",
      "Kapak kilidi geç açılır; ekranda E03 belirir.",
      "Makine bazen kısa programda tamamlar, dolu yükte hata tekrar eder.",
    ],
    possibleCauses: [
      "Tahliye filtresi, pompa gövdesi veya hortumda yabancı cisim tıkanıklığı",
      "Tahliye pompası kanadı hasarı veya zayıf motor performansı",
      "Sifon bağlantısında geri basma ya da hortum yüksekliğinde montaj sorunu",
      "Kartın pompa sürüş devresinde arıza",
    ],
    safeChecks: [
      "Kullanım kılavuzuna uygun şekilde alt filtre kapağını kontrollü açın ve suya hazırlıklı olun.",
      "Tahliye hortumunun ezilmediğini ve sifon girişinin tıkalı görünmediğini kontrol edin.",
      "Çevrim iptalinden sonra makineyi su doluyken eğmeyin; önce güvenli tahliye planlayın.",
      "Sıkma öncesi aşırı köpük oluşup oluşmadığını not edin; bu da tahliyeyi etkileyebilir.",
    ],
    doNotDo: [
      "Filtre kapağını sıcak su boşalabilecek durumda hızlıca tamamen çıkarmayın.",
      "Pompa içine tel, çubuk veya metal cisim sokmayın.",
      "Hortumu yerinden çıkarıp zemine rastgele boşaltma yapmayın.",
      "Su varken kapağı zorla açmaya çalışmayın.",
    ],
    technicianChecks: [
      "Pompa akımı, kanat durumu ve gerçek debi testi yapılır.",
      "Tahliye hattı, kazan-pompa körüğü ve sifon bağlantısı birlikte incelenir.",
      "Kartın pompa çıkışı ve pompa çalışma süresi hata mantığıyla karşılaştırılır.",
      "Gerekirse seviye sensörü tahliye sonrası boş kazan algısı için test edilir.",
    ],
  }),
  createGenericWashingSeed(ARCELIK_BEKO_GROUP, {
    code: "E05",
    meaning: "Sıcaklık sensörü veya ısıtma devresi hatası.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Arçelik/Beko servis hata kodu çapraz notları",
        type: "cross-reference",
        modelSeries: "Arçelik-Beko ön yüklemeli çamaşır makineleri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e02", "e03", "e09"],
    symptoms: [
      "Makine su alır ve döner ancak su ısınmadığı için program süresi anormal uzar.",
      "Yüksek sıcaklık programlarında hata daha sık tekrarlanır.",
      "Çamaşırlar program sonunda beklenenden soğuk çıkar veya temizlik performansı düşer.",
      "Bazı modellerde E05, su ısısı algılanamadığında çevrimin ortasında görünür.",
    ],
    possibleCauses: [
      "NTC sensörü arızası veya sensör değerinin sınır dışına çıkması",
      "Rezistans açık devre, kaçak veya kısmi verimsizlik",
      "Sensör ile kart arasındaki kablo tesisatında temas problemi",
      "Kartın ısıtma rölesi veya sensör okuma kanalında arıza",
    ],
    safeChecks: [
      "Sorunun sadece yüksek sıcaklık programlarında mı oluştuğunu not edin.",
      "Cihazın su alıp almadığını ve yıkama hareketini başlatıp başlatmadığını gözlemleyin.",
      "Aynı prizde belirgin voltaj dalgalanması yapan başka cihazlar varsa servisle paylaşın.",
      "Peş peşe çok sıcak program denemeleri yapmayın; bir kez test edip cihazı dinlendirin.",
    ],
    doNotDo: [
      "Rezistansı veya sensörü kontrol etmek için arka kapağı açmayın.",
      "Topraklama şüphesi varken cihazın metal gövdesine çıplak elle temas etmeyin.",
      "Hata kodunu gizlemek için düşük sıcaklık programlarıyla uzun süre kullanmaya devam etmeyin.",
      "Elektrik bağlantısını uzatma kablosu veya çoklayıcı ile değiştirme denemeleri yapmayın.",
    ],
    technicianChecks: [
      "NTC sensörü oda sıcaklığında ve ısınma altında ölçülerek karakteristiği kontrol edilir.",
      "Rezistansın direnç ve izolasyon testi yapılır; kaçak akım ihtimali değerlendirilir.",
      "Kart rölesi, sensör girişi ve ısıtma komut zamanlaması canlı testte izlenir.",
      "Program su seviyesi uygunluğu ile ısıtma emniyet koşulları birlikte doğrulanır.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E18",
    meaning:
      "Tahliye sorunu; pompa tıkanıklığı, tahliye hortumu kıvrımı veya filtre bölgesinde tıkanıklık nedeniyle su boşaltılamıyor.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Bosch Home Appliances — E18 drainage error",
        type: "documentation",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
        modelSeries: "Bosch/Siemens/Profilo çamaşır makinesi platformları",
        verifiedAt: VERIFIED_AT,
      },
      {
        name: "Siemens Home — E18/F18 error codes",
        type: "cross-reference",
        url: "https://www.siemens-home.bsh-group.com/ae/customer-service/support/troubleshooting/washing-machines/error-codes-symbols",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e23", "e24"],
    symptoms: [
      "Program ilerlerken su tahliye edilmez ve makine E18/F18 kodu verir.",
      "Tambur içinde su kalır; sıkma aşamasına geçilemeyebilir.",
      "Pompa bölgesinden gürültü duyulabilir veya hiç ses gelmeyebilir.",
      "Tahliye hortumu kıvrılmışsa hata kısa sürede tekrar eder.",
    ],
    possibleCauses: [
      "Pompa filtresinde yabancı cisim veya tüy birikimi",
      "Tahliye hortumunun kıvrılması, ezilmesi veya sifon çıkışında tıkanıklık",
      "Pompa motorunun mekanik kilitlenmesi veya arızası",
      "Kablo/konektör temassızlığı nedeniyle pompanın çalışmaması",
    ],
    safeChecks: [
      "Programı durdurun, fişi çekin ve tahliye filtresinin dışarıdan erişilebilir olduğunu kontrol edin.",
      "Tahliye hortumunun kıvrılmadığından ve sifon bağlantısının tıkalı olmadığından emin olun.",
      "Makine dengesiz zeminde duruyorsa ayarlayın; aşırı köpük de tahliyeyi zorlaştırabilir.",
      "Tekrar denemeden önce tambur içindeki su seviyesini gözlemleyin.",
    ],
    doNotDo: [
      "Pompa kapağını açmadan makineyi zorla eğmeyin veya sallamayın.",
      "Sıcak su tahliyesi sırasında filtre kapağını ani açmayın; scalding riski vardır.",
      "Pompayı tornavida ile zorla çevirmeye çalışmayın.",
      "Hata sürerken uzun programlarda cihazı çalıştırmaya devam etmeyin.",
    ],
    technicianChecks: [
      "Pompa ve filtre bölgesi sökülerek yabancı cisim ve tıkanıklık kontrol edilir.",
      "Pompa motoru ve impeller dönüşü test edilir; gerekirse pompa değiştirilir.",
      "Tahliye hortumu ve sifon hattı basınç testi ile kontrol edilir.",
      "Elektronik kart pompa sürüş çıkışı yük altında ölçülür.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E23",
    meaning:
      "AquaStop devresi tetiklendi; taban platosunda su birikimi veya kaçak algılandı.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Bosch Home Appliances — E23 leak/base plate",
        type: "documentation",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
        modelSeries: "BSH grup çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
      {
        name: "Siemens Home — E23 leak warning",
        type: "cross-reference",
        url: "https://www.siemens-home.bsh-group.com/ae/customer-service/support/troubleshooting/washing-machines/error-codes-symbols",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e18", "e24"],
    symptoms: [
      "Makine aniden durur ve E23 kodu görünür; su vanası kapanmış olabilir.",
      "Cihaz altında veya yan panelde nem/su izi fark edilebilir.",
      "Program tekrar başlatılsa bile kısa sürede aynı kod tekrarlanır.",
      "Bazı modellerde pompa bakımı sonrası taban şalteri tetiklenmiş olabilir.",
    ],
    possibleCauses: [
      "Hortum, pompa contası veya kapak contasından su kaçağı",
      "Taban platosundaki AquaStop şalterinin nem algılaması",
      "Aşırı köpük veya deterjan taşması sonrası su birikintisi",
      "Pompa sökümü sonrası tabanda kalan su",
    ],
    safeChecks: [
      "Su vanasını kapatın, fişi çekin ve cihaz altında görünür kaçak olup olmadığını kontrol edin.",
      "Kapı contası, deterjan çekmecesi ve tahliye filtresi çevresinde ıslaklık arayın.",
      "Yakın zamanda pompa/filtre bakımı yapıldıysa taban suyunun boşaltılması gerekebilir.",
      "Kaçak yoksa cihazı hafifçe arkaya eğerek taban suyunun tahliyesi denenebilir (kılavuza uygun).",
    ],
    doNotDo: [
      "Su birikintisi varken priz veya cihaz gövdesine ıslak elle temas etmeyin.",
      "Kaçağı gizlemek için makineyi sürekli resetlemeyin.",
      "Conta veya hortum sökümünü elektrik çekiliyken yapmayın.",
      "Taban plakasını kullanıcı olarak sökmeye çalışmayın.",
    ],
    technicianChecks: [
      "Taban platosu ve AquaStop şalteri kurulanarak nem/kısa devre kontrol edilir.",
      "Pompa, hortum, kapak contası ve iç bağlantılar basınçlı su testi ile incelenir.",
      "Elektronik kart su girişi ve şalter devresi ölçülür.",
      "Onarım sonrası kısa program ile kaçaksız çalışma doğrulanır.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E14",
    meaning:
      "Su alma süresi aşıldı; makine belirlenen sürede yeterli su akışını algılayamadı.",
    verificationStatus: "verified",
    sources: [
      {
        name: "BSH platform su alma hata referansı",
        type: "cross-reference",
        url: "https://www.whitegoodshelp.co.uk/bosch-washing-machine-error-codes/",
        modelSeries: "Bosch/Siemens/Profilo çamaşır makinesi platformları",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e18", "e23", "e24"],
    symptoms: [
      "Program başlar ancak kazan beklenen sürede dolmaz ve E14 görünür.",
      "Su vanası açık olsa bile makine su alma aşamasında bekler.",
      "Deterjan çekmecesine su gelişi zayıf veya hiç olmayabilir.",
      "Hata genelde yıkama başlangıcında, su alma adımında ortaya çıkar.",
    ],
    possibleCauses: [
      "Giriş vanasının kısık kalması veya şebeke basıncının düşük olması",
      "Giriş hortumunda kıvrım, ezilme veya filtre tıkanıklığı",
      "Elektromanyetik su vanası arızası veya kart komutu eksikliği",
      "Aquastop hortumu veya basınç şalteri devresinde sorun",
    ],
    safeChecks: [
      "Su vanasının tam açık olduğunu ve hortumda bükülme olmadığını kontrol edin.",
      "Aynı anda başka noktalarda yoğun su kullanımı varsa basınç düşüşünü not edin.",
      "Makineyi kapatıp birkaç dakika bekledikten sonra kısa programla tekrar deneyin.",
      "Giriş hortumu filtresine erişim varsa kullanım kılavuzuna uygun temizlik yapın.",
    ],
    doNotDo: [
      "Basınç düşükken peş peşe uzun programlarda makineyi zorlamayın.",
      "Vanayı sökmek veya elektrikli bağlantılara müdahale etmeyin.",
      "Hata sürerken deterjan dozajını artırarak deneme yapmayın.",
      "Hortumu zorla germek yerine montaj hatasını düzeltin.",
    ],
    technicianChecks: [
      "Giriş vanası bobinleri, debi ve besleme voltajı ölçülür.",
      "Basınç şalteri, seviye sensörü ve hava tuzağı kontrol edilir.",
      "Karttan vanaya giden komut ve su alma zaman aşımı mantığı test edilir.",
      "Aquastop ve giriş filtreleri sökülerek tıkanıklık giderilir.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E16",
    meaning: "Kapı açık veya kapak tam kilitlenmedi; emniyet devresi çevrimi durdurdu.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Bosch Home — E16/F16 door error",
        type: "documentation",
        url: "https://www.bosch-home.com/us/experience-bosch/heart-of-the-home/tips-and-tricks/washer-error-codes",
        modelSeries: "BSH grup çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
      {
        name: "Whitegoods Help — E16/F16",
        type: "cross-reference",
        url: "https://www.whitegoodshelp.co.uk/bosch-washing-machine-error-codes/",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e09", "e18", "e23"],
    symptoms: [
      "Start verilse bile program hemen başlamaz ve E16/F16 görünür.",
      "Kapak kapanmış görünse de kilit sesi gelmeyebilir.",
      "Tambur hareket etmeden çevrim iptal olur.",
      "Conta arasına sıkışan çamaşır nedeniyle hata aralıklı tekrarlayabilir.",
    ],
    possibleCauses: [
      "Kapı tam kapanmamış veya conta arasına çamaşır sıkışmış",
      "Kapı kilidi (interlock) mekanik veya elektriksel arızası",
      "Kapak dili, menteşe hizası veya karşılık parçasında kaçıklık",
      "Kartın kilit algılama devresinde arıza",
    ],
    safeChecks: [
      "Conta çevresinde sıkışmış çamaşır veya yabancı cisim olup olmadığını kontrol edin.",
      "Kapıyı sert vurmadan kapatıp kilitleme sesini dinleyin.",
      "Makineyi kapatıp birkaç dakika bekledikten sonra yeniden deneyin.",
      "Kapak mandalında görünür yıpranma veya gevşeklik olup olmadığına bakın.",
    ],
    doNotDo: [
      "Kilit dilini tornavida ile zorlayarak kapatmayın.",
      "Kapak tam oturmadan program başlatmayı tekrarlamayın.",
      "Ön paneli sökerek kilide müdahale etmeyin.",
      "Çocuk kilidi veya gecikmeli kilit modunu bilmeden resetlemeyin.",
    ],
    technicianChecks: [
      "Kapı kilidi bobini ve mekanik oturması ölçülür.",
      "Kapak dili, menteşe ve panel hizası birlikte değerlendirilir.",
      "Kilitten karta giden kablo sürekliliği test edilir.",
      "Gerekirse interlock parçası değiştirilip kısa program testi yapılır.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E24",
    meaning:
      "Tahliye süresi aşıldı; pompa suyu belirlenen sürede boşaltamadı.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Bosch Home — drainage/pump blocked",
        type: "documentation",
        url: "https://www.bosch-home.com/us/owner-support/error-codes/washers",
        modelSeries: "BSH grup çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e18", "e23", "e25"],
    symptoms: [
      "Program tahliye aşamasında durur ve E24/F24 kodu görünür.",
      "Tambur içinde su kalır; sıkma gerçekleşmeyebilir.",
      "Pompa sesi duyulmayabilir veya sürekli uğultu olabilir.",
      "Filtre temizliği sonrası kısa süre düzelip tekrar edebilir.",
    ],
    possibleCauses: [
      "Pompa filtresi veya tahliye hortumunda tıkanıklık",
      "Pompa kanadında yabancı cisim veya motor arızası",
      "Sifon bağlantısında geri basma veya montaj hatası",
      "Kartın pompa sürüş devresinde arıza",
    ],
    safeChecks: [
      "Programı durdurun, fişi çekin ve tahliye hortumunun kıvrılmadığını kontrol edin.",
      "Kullanım kılavuzuna uygun filtre erişimini kontrol edin; su birikintisine hazırlıklı olun.",
      "Sifon veya lavabo giderinin tıkalı olup olmadığına bakın.",
      "Tekrar denemeden önce tambur su seviyesini gözlemleyin.",
    ],
    doNotDo: [
      "Pompa kapağını sıcak su varken ani açmayın.",
      "Pompayı tornavida ile zorla çevirmeye çalışmayın.",
      "Su dolu tamburu eğerek boşaltmaya çalışmayın.",
      "Hata sürerken uzun programlarda cihazı çalıştırmaya devam etmeyin.",
    ],
    technicianChecks: [
      "Pompa, filtre ve tahliye hattı sökülerek tıkanıklık giderilir.",
      "Pompa motoru akımı ve impeller dönüşü test edilir.",
      "Sifon hattı ve hortum eğimi kontrol edilir.",
      "Kart pompa sürüş çıkışı yük altında ölçülür.",
    ],
  }),
  createGenericWashingSeed(BSH_GROUP, {
    code: "E25",
    meaning: "Turbidite (bulanıklık) sensörü arızası veya ölçüm devresi hatası.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Bosch Home — E25/F25 turbidity sensor",
        type: "documentation",
        url: "https://www.bosch-home.com/us/experience-bosch/heart-of-the-home/tips-and-tricks/washer-error-codes",
        modelSeries: "BSH grup çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e24", "e18", "e23"],
    symptoms: [
      "Yıkama veya durulama aşamasında E25/F25 kodu belirir.",
      "Program beklenenden erken durabilir veya durulama tekrarlanabilir.",
      "Su berrak olsa bile sensör hatası kaydedilebilir.",
      "Bazı serilerde otomatik deterjan dozajı etkilenebilir.",
    ],
    possibleCauses: [
      "Turbidite sensöründe kirlenme, buğu veya optik yüzey bozulması",
      "Sensör kablosunda kopukluk veya konnektör temassızlığı",
      "Kartın sensör okuma kanalında arıza",
      "Aşırı köpük veya deterjan kalıntısı yanlış okumaya yol açması",
    ],
    safeChecks: [
      "Deterjan dozajını kullanım kılavuzuna uygun seviyeye indirin.",
      "Makineyi kapatıp birkaç dakika bekledikten sonra kısa program deneyin.",
      "Aşırı köpük oluştuysa programı iptal edip tamburu boşaltın.",
      "Sorunun belirli programlarda mı yoksa tüm programlarda mı olduğunu not edin.",
    ],
    doNotDo: [
      "Sensör bölgesine kimyasal veya aşındırıcı temizleyici dökmeyin.",
      "Kart veya sensör bağlantılarını kullanıcı olarak sökmeyin.",
      "Hata sürerken deterjan miktarını artırarak test yapmayın.",
      "Optik sensörü zorla silerek çizilmesine neden olmayın.",
    ],
    technicianChecks: [
      "Turbidite sensörü temizliği ve optik yüzey durumu kontrol edilir.",
      "Sensör direnci ve kablo sürekliliği ölçülür.",
      "Kart sensör girişi referans değerlerle karşılaştırılır.",
      "Onarım sonrası durulama ve otomatik dozaj testi yapılır.",
    ],
  }),
];

const UNVERIFIED_WASHING_SEEDS: ErrorCodeSeed[] = [
  "E15",
  "E22",
  "E30-10",
  "E30-80",
  "E36-10",
  "E36-25",
  "E36-26",
  "E38-25",
  "E38-26",
  "E60-07",
  "E60-10",
].map((code) =>
  createGenericWashingSeed(BSH_GROUP, {
    code,
    meaning:
      `${code} kodu Bosch / Siemens / Profilo çamaşır makinesi platformlarında görülür; ancak anlamı modele ve yazılım sürümüne göre değişebildiğinden üretici dokümanı olmadan kesin doğrulanmamalıdır.`,
    verificationStatus: "unverified",
    sources: [
      {
        name: "Saha gözlemleri ve kullanıcı raporları",
        type: "documentation",
        modelSeries: "BSH grup çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
  }),
);

UNVERIFIED_WASHING_SEEDS.push(
  createGenericWashingSeed(ARCELIK_BEKO_GROUP, {
    code: "E09",
    meaning:
      "E09 kodu Arçelik / Beko çamaşır makinelerinde bazı saha kayıtlarında geçer; ancak anlamı model ailesine göre değişebildiği için burada doğrulanmış tekil bir açıklama verilmemiştir.",
    verificationStatus: "unverified",
    sources: [
      {
        name: "Saha gözlemleri ve kullanıcı raporları",
        type: "documentation",
        modelSeries: "Arçelik-Beko çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
  }),
);

UNVERIFIED_WASHING_SEEDS.push(
  createGenericWashingSeed(VESTEL_GROUP, {
    code: "E01",
    meaning:
      "Vestel çamaşır makinelerinde E01 kodu çeşitli kullanıcı raporlarında görülür; ancak platformlar arasında değişen tanımlar nedeniyle üretici servis dökümanı olmadan kesin anlam doğrulanmamalıdır.",
    verificationStatus: "unverified",
    sources: [
      {
        name: "Saha gözlemleri ve kullanıcı raporları",
        type: "documentation",
        modelSeries: "Vestel ön yüklemeli çamaşır makinesi serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
  }),
);

export const WASHING_MACHINE_ERROR_CODE_SEEDS: ErrorCodeSeed[] = [
  ...VERIFIED_WASHING_SEEDS,
  ...UNVERIFIED_WASHING_SEEDS,
].sort((a, b) => {
  if (a.brandGroupSlug !== b.brandGroupSlug) {
    return a.brandGroupSlug.localeCompare(b.brandGroupSlug, "tr");
  }
  return a.code.localeCompare(b.code, "tr", { numeric: true });
});
