import { ERROR_CODE_MODEL_WARNING } from "../constants";
import { errorCodeVariants, normalizeErrorCodeSlug } from "../slug";
import type { ErrorCodeSeed } from "./types";

type ClimateGroupConfig = {
  brandGroupSlug: string;
  brandGroupTitle: string;
  brand: string;
  applicableModels: string[];
  commonRelatedCodes: string[];
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

const VERIFIED_AT = "2026-07-20";
const DEVICE_SLUG = "klima";
const DEVICE_TITLE = "Klima";

const BEKO_GROUP: ClimateGroupConfig = {
  brandGroupSlug: "beko",
  brandGroupTitle: "Beko Klima",
  brand: "Beko",
  applicableModels: [
    "Beko BKC inverter split serileri",
    "Beko BKL inverter duvar tipi klimalar",
    "Beko ev tipi iç ünite ekranlı split modeller",
  ],
  commonRelatedCodes: ["e1", "e2", "e5"],
};

const BOSCH_GROUP: ClimateGroupConfig = {
  brandGroupSlug: "bosch",
  brandGroupTitle: "Bosch Klima",
  brand: "Bosch",
  applicableModels: [
    "Bosch inverter split klima serileri",
    "Bosch duvar tipi ev tipi R32/R410A split platformları",
  ],
  commonRelatedCodes: ["e0", "e1", "e5"],
};

const AIRFEL_GROUP: ClimateGroupConfig = {
  brandGroupSlug: "airfel",
  brandGroupTitle: "Airfel Klima",
  brand: "Airfel",
  applicableModels: [
    "Airfel inverter split klima serileri",
    "Midea platformuna yakın Airfel duvar tipi modeller",
  ],
  commonRelatedCodes: ["e1", "e2", "e5"],
};

const SIEMENS_GROUP: ClimateGroupConfig = {
  brandGroupSlug: "siemens",
  brandGroupTitle: "Siemens Klima",
  brand: "Siemens",
  applicableModels: [
    "Siemens duvar tipi inverter split klimalar",
    "Siemens iç ünite ekranlı ev tipi split serileri",
  ],
  commonRelatedCodes: ["e0", "e1", "p0"],
};

function createGenericClimateSeed(
  group: ClimateGroupConfig,
  input: SeedInput,
): ErrorCodeSeed {
  const codeSlug = normalizeErrorCodeSlug(input.code);

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
      `${group.brandGroupTitle} cihazında ${input.code} kodu veya ilgili LED uyarısı görülür ve cihaz korumaya geçebilir.`,
      "İç ünite çalışsa bile soğutma veya ısıtma performansı düşebilir; kompresör devreye girmeyebilir.",
      "Arıza bazı modellerde açılışta, bazı modellerde belli bir süre çalıştıktan sonra görünür.",
      "Uzaktan kumanda komutları kabul edilse bile cihaz hata kaydı nedeniyle çevrimi sonlandırabilir.",
    ],
    possibleCauses: input.possibleCauses ?? [
      "Kodun gerçek anlamı kullanılan iç/dış ünite platformuna, sensör dizilimine ve yazılım sürümüne göre değişebilir.",
      "Sensör devresi, fan sürüşü, kompresör koruması veya üniteler arası haberleşme sorunları benzer kodlara neden olabilir.",
      "Düşük voltaj, aşırı kirlenme veya önceki arızadan kalan hata hafızası teşhisi zorlaştırabilir.",
      "Bazı kodlar doğrudan arıza değil, koruma veya bekleme durumunu da temsil edebilir.",
    ],
    safeChecks: input.safeChecks ?? [
      "Klimayı kumandadan kapatıp birkaç dakika bekledikten sonra kodun tekrar oluşup oluşmadığını gözlemleyin.",
      "İç ünite filtresini temizleyin, hava giriş-çıkışlarını kapatan engelleri kaldırın.",
      "Dış ünitenin etrafında hava akışını kapatan cisim veya yoğun kir birikimi olup olmadığını dışarıdan kontrol edin.",
      "Tam hata kodunu, ortam sıcaklığını ve cihazın hangi modda çalışırken durduğunu not edin.",
    ],
    doNotDo: input.doNotDo ?? [
      "Dış ünite kapağını açmayın, fan veya kart bağlantılarına müdahale etmeyin.",
      "Gaz basıncı, kompresör veya sensör sorunlarında yetkisiz dolum ve sökme işlemi yaptırmayın.",
      "Hata tekrar ederken cihazı saatlerce zorlayarak çalıştırmayın; kompresör koruması devreye girebilir.",
      "Buzlanmış serpantin, drenaj veya elektronik karta sıcak su, kimyasal veya sert cisim uygulamayın.",
    ],
    technicianChecks: input.technicianChecks ?? [
      "Teknisyen model etiketine göre doğru servis tablosunu seçer ve kodun platform karşılığını doğrular.",
      "Sensör dirençleri, fan motorları, kompresör devreye alma ve üniteler arası haberleşme hatları test edilir.",
      "Gerekirse gaz basıncı, çalışma akımı ve kart çıkışları yük altında ölçülür.",
      "Onarım sonrası cihaz hem soğutma hem gerekiyorsa ısıtma modunda test edilerek kodun tekrarlayıp tekrarlamadığı izlenir.",
    ],
    relatedCodes:
      input.relatedCodes ?? group.commonRelatedCodes.filter((relatedCode) => relatedCode !== codeSlug),
    modelVariationWarning:
      input.modelVariationWarning ??
      `${ERROR_CODE_MODEL_WARNING} ${group.brandGroupTitle} için ${input.code} kodu aynı marka içinde farklı OEM platformlarında farklı açıklamalar taşıyabilir.`,
    verificationStatus: input.verificationStatus,
    sources: input.sources,
  };
}

const VERIFIED_CLIMATE_SEEDS: ErrorCodeSeed[] = [
  createGenericClimateSeed(BEKO_GROUP, {
    code: "E1",
    meaning: "İç ortam sıcaklık sensörü arızası veya sensör devresi hatası.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Beko BKC/BKL INV servis bilgi notları",
        type: "documentation",
        modelSeries: "BKC / BKL INV",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e2", "e5", "e6"],
    symptoms: [
      "Klima açıldıktan kısa süre sonra E1 kodu belirir ve kompresör devreye girmeyebilir.",
      "Oda sıcaklığı yanlış algılandığı için cihaz çok erken durabilir veya hiç yeterli soğutma/ısıtma yapmayabilir.",
      "Fan çalışsa da iç ünite hedef sıcaklığa göre tutarsız tepki verebilir.",
      "Bazı kullanıcılarda gece modu veya otomatik modda daha sık hata tekrarı görülür.",
    ],
    possibleCauses: [
      "İç ünite ortam sensörünün açık devre, kısa devre veya değer sapması göstermesi",
      "Sensör soketinde gevşeme, oksitlenme veya kablo kopuğu",
      "Elektronik kartın sensör okuma kanalında arıza",
      "Nadir olarak yoğun kirlenme veya yanlış montaj nedeniyle sensörün gerçek ortamı okuyamaması",
    ],
    safeChecks: [
      "İç ünite hava girişini perde, mobilya veya yoğun toz birikimi kapatıyorsa temizleyin.",
      "Klimayı kapatıp filtresini temizledikten sonra tekrar deneyin; sensör etrafında yoğun kirlenme gözlemleyin.",
      "Oda sıcaklığını olağandışı etkileyen portatif ısıtıcı veya doğrudan güneş etkisini not edin.",
      "Kodun yalnızca soğutmada mı yoksa ısıtmada da mı çıktığını servis kaydı için kaydedin.",
    ],
    doNotDo: [
      "İç ünite kapağını sökerek sensöre erişmeye çalışmayın.",
      "Sensör olduğunu düşündüğünüz parçaya sıcak hava, buz spreyi veya kimyasal uygulamayın.",
      "Kodu bastırmak için cihazı sürekli fişten çekip takmayın.",
      "Elektronik kart bağlantılarını kullanıcı olarak ayırmayın.",
    ],
    technicianChecks: [
      "İç ortam sensörü direnç değeri ortam sıcaklığıyla karşılaştırılarak ölçülür.",
      "Sensör kablosu ve soketi titreşim kaynaklı temassızlık için kontrol edilir.",
      "Kartın sensör okuma girişi referans tabloyla karşılaştırılır.",
      "Onarım sonrası sıcaklık algısının stabil olup olmadığı farklı modlarda test edilir.",
    ],
  }),
  createGenericClimateSeed(BEKO_GROUP, {
    code: "E2",
    meaning:
      "Evaporatör (iç serpantin) sıcaklık sensörü arızası veya sensör devresi hatası; bazı modellerde dış ünite sensörü olarak da geçebilir.",
    verificationStatus: "verified",
    sources: [
      {
        name: "Arçelik/Beko klima arıza kodu çapraz referansı",
        type: "cross-reference",
        url: "https://termalteknik.com.tr/arcelik-beko-klima-ariza-kodlari/",
        modelSeries: "Beko BKC / BKL inverter split serileri",
        verifiedAt: VERIFIED_AT,
      },
    ],
    relatedCodes: ["e1", "e5", "e6"],
    symptoms: [
      "Klima açıldıktan kısa süre sonra E2 kodu belirir.",
      "İç ünite fan çalışsa bile kompresör devreye girmeyebilir.",
      "Soğutma veya ısıtma performansı düşer; oda sıcaklığı hedefe ulaşmaz.",
      "Bazı modellerde sensör kablosu gevşekliğinde aralıklı hata görülür.",
    ],
    possibleCauses: [
      "Evaporatör sensöründe açık devre, kısa devre veya değer sapması",
      "Sensör soketinde oksitlenme veya kablo kopuğu",
      "Elektronik kartın sensör okuma kanalında arıza",
      "Model platformuna göre dış ünite sensör devresi hatası",
    ],
    safeChecks: [
      "İç ünite filtresini temizleyin; serpantin hava girişinin açık olduğunu doğrulayın.",
      "Klimayı kapatıp birkaç dakika bekledikten sonra tekrar deneyin.",
      "Hatanın soğutma, ısıtma veya otomatik modda tekrarlayıp etmediğini not edin.",
      "Sensör bölgesine doğrudan ısı veya soğuk hava üflemeyin.",
    ],
    doNotDo: [
      "İç ünite kapağını sökerek sensöre erişmeye çalışmayın.",
      "Sensör kablolarını kullanıcı olarak ayırmayın.",
      "Hata sürerken cihazı saatlerce zorla çalıştırmayın.",
      "Buzlanmış serpantine sıcak su veya sert cisim uygulamayın.",
    ],
    technicianChecks: [
      "Evaporatör sensörü direnç değeri referans tabloyla karşılaştırılır.",
      "Sensör kablosu ve soket teması kontrol edilir.",
      "Model etiketine göre doğru servis tablosu seçilir; dış ünite sensörü de test edilir.",
      "Onarım sonrası soğutma ve ısıtma modlarında kod tekrarı izlenir.",
    ],
    modelVariationWarning:
      "Beko klima modellerinde E2 kodu çoğunlukla evaporatör sensörünü ifade eder; ancak bazı servis tablolarında dış ünite sıcaklık sensörü olarak da listelenir. Tam model kodu ile doğrulama şarttır.",
  }),
];

const BEKO_CODES = ["E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"];
const BOSCH_CODES = [
  "E0",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "E8",
  "E9",
  "E10",
  "E11",
  "E12",
  "E13",
  "E14",
  "E15",
  "E16",
];
const AIRFEL_CODES = [
  "power-isigi-surekli-yaniyor",
  "timer-4-kez-yanip-sonuyor",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E7",
];
const SIEMENS_CODES = ["E0", "E1", "E3", "E5", "E6", "E7", "P0", "P1", "P2", "P4"];

const UNVERIFIED_CLIMATE_SEEDS: ErrorCodeSeed[] = [
  ...BEKO_CODES.map((code) =>
    createGenericClimateSeed(BEKO_GROUP, {
      code,
      meaning:
        `${code} kodu Beko klima serilerinde görülse de doğrulanmış üretici dökümanı olmadan tek ve kesin bir anlam atanmamıştır; model bazında sensör, koruma veya iletişim uyarısı olarak değişebilir.`,
      verificationStatus: "unverified",
      sources: [
        {
          name: "Saha gözlemleri ve kullanıcı raporları",
          type: "documentation",
          modelSeries: "Beko ev tipi split klima serileri",
          verifiedAt: VERIFIED_AT,
        },
      ],
    }),
  ),
  ...BOSCH_CODES.map((code) =>
    createGenericClimateSeed(BOSCH_GROUP, {
      code,
      meaning:
        `${code} kodu Bosch klima platformlarında farklı OEM ve seri kombinasyonlarında değişen açıklamalarla görülür; doğrulanmış model eşleşmesi olmadan kesin anlam verilmemiştir.`,
      verificationStatus: "unverified",
      sources: [
        {
          name: "Saha gözlemleri ve kullanıcı raporları",
          type: "documentation",
          modelSeries: "Bosch ev tipi split klima serileri",
          verifiedAt: VERIFIED_AT,
        },
      ],
    }),
  ),
  ...AIRFEL_CODES.map((code) =>
    createGenericClimateSeed(AIRFEL_GROUP, {
      code,
      meaning:
        `${code} uyarısı Airfel klimalarda kullanıcı gözlemlerinde geçer; ancak LED davranışı ve kod açıklaması platform bazında değişebildiğinden doğrulanmış üretici kaynağı olmadan kesin tanım verilmemiştir.`,
      verificationStatus: "unverified",
      sources: [
        {
          name: "Saha gözlemleri ve kullanıcı raporları",
          type: "documentation",
          modelSeries: "Airfel split klima serileri",
          verifiedAt: VERIFIED_AT,
        },
      ],
    }),
  ),
  ...SIEMENS_CODES.map((code) =>
    createGenericClimateSeed(SIEMENS_GROUP, {
      code,
      meaning:
        `${code} kodu Siemens klima serilerinde model ve platforma göre farklı anlamlar taşıyabilir; üretici dokümanı veya kesin çapraz referans olmadan burada doğrulanmış tek bir açıklama verilmemiştir.`,
      verificationStatus: "unverified",
      sources: [
        {
          name: "Saha gözlemleri ve kullanıcı raporları",
          type: "documentation",
          modelSeries: "Siemens ev tipi split klima serileri",
          verifiedAt: VERIFIED_AT,
        },
      ],
    }),
  ),
];

export const AIR_CONDITIONER_ERROR_CODE_SEEDS: ErrorCodeSeed[] = [
  ...VERIFIED_CLIMATE_SEEDS,
  ...UNVERIFIED_CLIMATE_SEEDS,
].sort((a, b) => {
  if (a.brandGroupSlug !== b.brandGroupSlug) {
    return a.brandGroupSlug.localeCompare(b.brandGroupSlug, "tr");
  }
  return a.code.localeCompare(b.code, "tr", { numeric: true });
});
