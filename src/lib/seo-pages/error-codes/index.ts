import { CONTENT_DATES, INDEPENDENT_SERVICE_DISCLAIMER } from "../constants";
import type { ErrorCodeHubPageData, ErrorCodePageData } from "../types";
import { AIR_CONDITIONER_ERROR_CODE_SEEDS } from "./air-conditioner";
import type { ErrorCodeSeed } from "./types";
import { WASHING_MACHINE_ERROR_CODE_SEEDS } from "./washing-machine";

export { AIR_CONDITIONER_ERROR_CODE_SEEDS } from "./air-conditioner";
export type { ErrorCodeSeed } from "./types";
export { WASHING_MACHINE_ERROR_CODE_SEEDS } from "./washing-machine";

export const ALL_ERROR_CODE_SEEDS: ErrorCodeSeed[] = [
  ...WASHING_MACHINE_ERROR_CODE_SEEDS,
  ...AIR_CONDITIONER_ERROR_CODE_SEEDS,
].sort((a, b) => {
  if (a.deviceSlug !== b.deviceSlug) {
    return a.deviceSlug.localeCompare(b.deviceSlug, "tr");
  }
  if (a.brandGroupSlug !== b.brandGroupSlug) {
    return a.brandGroupSlug.localeCompare(b.brandGroupSlug, "tr");
  }
  return a.code.localeCompare(b.code, "tr", { numeric: true });
});

function buildCodePageSlug(seed: ErrorCodeSeed): string {
  return `error-${seed.deviceSlug}-${seed.brandGroupSlug}-${seed.codeSlug}`;
}

function buildCodePath(seed: ErrorCodeSeed): string {
  return `/hata-kodlari/${seed.deviceSlug}/${seed.brandGroupSlug}/${seed.codeSlug}`;
}

function buildHubSlug(deviceSlug: string, brandGroupSlug?: string): string {
  return brandGroupSlug ? `error-${deviceSlug}-${brandGroupSlug}` : `error-${deviceSlug}`;
}

function buildHubPath(deviceSlug: string, brandGroupSlug?: string): string {
  return brandGroupSlug
    ? `/hata-kodlari/${deviceSlug}/${brandGroupSlug}`
    : `/hata-kodlari/${deviceSlug}`;
}

function buildFaqs(seed: ErrorCodeSeed): ErrorCodePageData["faqs"] {
  return [
    {
      question: `${seed.brandGroupTitle} ${seed.code} hata kodu hemen tamir gerektirir mi?`,
      answer:
        seed.verificationStatus === "verified"
          ? `${seed.code} kodu doğrulanmış bir arıza başlığına işaret eder; ancak arızanın büyüklüğü model ve eşlik eden belirtilere göre değişir. Cihazı zorlamadan önce güvenli kontrolleri yapın, kod tekrarlıyorsa yerinde teşhis planlayın.`
          : `${seed.code} kodunun anlamı model serisine göre değişebildiğinden önce tam model bilgisiyle doğrulama gerekir. Kod tekrarlıyorsa cihazı zorlamadan profesyonel teşhis almak daha güvenlidir.`,
    },
    {
      question: `${seed.code} kodu silinse sorun çözülür mü?`,
      answer:
        "Hayır. Hata kaydını geçici olarak temizlemek alttaki nedeni ortadan kaldırmaz. Özellikle sensör, tahliye, ısıtma, fan veya kart kaynaklı arızalarda kod kısa süre sonra tekrar dönebilir.",
    },
    {
      question: `${seed.brandGroupTitle} cihazımda bu kod başka anlama gelebilir mi?`,
      answer:
        `${seed.modelVariationWarning} Bu yüzden model etiketi, tam kod yazımı ve arızanın hangi aşamada oluştuğu birlikte değerlendirilmelidir.`,
    },
  ];
}

export function buildErrorCodePages(
  seeds: ErrorCodeSeed[] = ALL_ERROR_CODE_SEEDS,
): ErrorCodePageData[] {
  return seeds.map((seed) => {
    const isVerified = seed.verificationStatus === "verified";
    return {
    slug: buildCodePageSlug(seed),
    pageType: "error-code",
    status: isVerified ? "published" : "draft",
    indexable: isVerified,
    focusKeyphrase: `${seed.brandGroupTitle} ${seed.code} hata kodu`,
    secondaryKeyphrases: [
      `${seed.brandGroupTitle} ${seed.code} arızası`,
      `${seed.brandGroupTitle} ${seed.deviceTitle} ${seed.code}`,
      `${seed.code} ne demek`,
    ],
    searchIntent: "informational",
    cornerstone: false,
    priorityTier: seed.verificationStatus === "verified" ? 1 : 2,
    title: `${seed.brandGroupTitle} ${seed.code} Hata Kodu`,
    seoTitle: `${seed.brandGroupTitle} ${seed.code} Hata Kodu | Kerem Teknik Servis`,
    metaDescription: `${seed.brandGroupTitle} ${seed.deviceTitle} cihazlarda ${seed.code} hata kodunun olası anlamı, belirtileri, güvenli kontrolleri ve teknik servis süreci.`,
    h1: `${seed.brandGroupTitle} ${seed.code} hata kodu`,
    intro: `${seed.meaning} Bu sayfa, ${seed.brandGroupTitle} ${seed.deviceTitle} modellerinde görülen ${seed.code} kodu için güvenli ilk kontrolleri, kullanıcı seviyesinde kaçınılması gereken adımları ve teknik teşhis çerçevesini özetler.`,
    sections: [
      {
        id: "kod-anlami",
        title: "Kodun anlamı",
        body: `${seed.meaning} Doğrulama durumu: ${seed.verificationStatus}. ${seed.modelVariationWarning}`,
      },
      {
        id: "belirtiler",
        title: "Sık görülen belirtiler",
        body: seed.symptoms.map((item) => `- ${item}`).join("\n"),
      },
      {
        id: "olasi-nedenler",
        title: "Olası nedenler",
        body: seed.possibleCauses.map((item) => `- ${item}`).join("\n"),
      },
      {
        id: "guvenli-kontroller",
        title: "Güvenli ilk kontroller",
        body: seed.safeChecks.map((item) => `- ${item}`).join("\n"),
      },
      {
        id: "yapilmamasi-gerekenler",
        title: "Yapılmaması gerekenler",
        body: seed.doNotDo.map((item) => `- ${item}`).join("\n"),
      },
      {
        id: "teknisyen-teshisi",
        title: "Teknisyen neyi kontrol eder?",
        body: `${seed.technicianChecks.map((item) => `- ${item}`).join("\n")}\n\n${INDEPENDENT_SERVICE_DISCLAIMER}`,
      },
    ],
    faqs: buildFaqs(seed),
    internalLinks: [
      {
        href: buildHubPath(seed.deviceSlug),
        label: `${seed.deviceTitle} hata kodları`,
      },
      {
        href: buildHubPath(seed.deviceSlug, seed.brandGroupSlug),
        label: `${seed.brandGroupTitle} hata kodları`,
      },
    ],
    relatedPageSlugs: seed.relatedCodes.map(
      (relatedCode) => `error-${seed.deviceSlug}-${seed.brandGroupSlug}-${relatedCode}`,
    ),
    canonicalPath: buildCodePath(seed),
    author: "Kerem Teknik Servis",
    technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: isVerified ? CONTENT_DATES.qcUpdate : CONTENT_DATES.initialPublish,
    reviewedAt:
      seed.verificationStatus === "verified" ? CONTENT_DATES.technicalReview : undefined,
    sourceNotes:
      seed.verificationStatus === "verified"
        ? "Anlam, doğrulanmış üretici veya platform çapraz referansına dayandırılmıştır."
        : "Anlam, doğrulanmamış saha notları ve kullanıcı raporlarıyla sınırlıdır; kesin teşhis için model doğrulaması gerekir.",
    sourceReferences: seed.sources,
    safetyLevel: seed.deviceSlug === "klima" ? "high" : "medium",
    deviceSlug: seed.deviceSlug,
    deviceTitle: seed.deviceTitle,
    brandGroupSlug: seed.brandGroupSlug,
    brandGroupTitle: seed.brandGroupTitle,
    brand: seed.brand,
    brandGroup: seed.brandGroupTitle,
    code: seed.code,
    codeSlug: seed.codeSlug,
    codeVariants: seed.codeVariants,
    meaning: seed.meaning,
    applicableModels: seed.applicableModels,
    symptoms: seed.symptoms,
    possibleCauses: seed.possibleCauses,
    safeChecks: seed.safeChecks,
    doNotDo: seed.doNotDo,
    technicianChecks: seed.technicianChecks,
    relatedCodes: seed.relatedCodes,
    modelVariationWarning: seed.modelVariationWarning,
    verificationStatus: seed.verificationStatus,
    verifiedAt:
      seed.verificationStatus === "verified"
        ? seed.sources[0]?.verifiedAt ?? CONTENT_DATES.technicalReview
        : undefined,
    sources: seed.sources,
  };
  });
}

export function getVerifiedErrorCodes(
  seeds: ErrorCodeSeed[] = ALL_ERROR_CODE_SEEDS,
): ErrorCodeSeed[] {
  return seeds.filter((seed) => seed.verificationStatus === "verified");
}

export function getErrorCodeByPath(
  device: string,
  brandGroup: string,
  codeSlug: string,
): ErrorCodeSeed | undefined {
  return ALL_ERROR_CODE_SEEDS.find(
    (seed) =>
      seed.deviceSlug === device &&
      seed.brandGroupSlug === brandGroup &&
      seed.codeSlug === codeSlug,
  );
}

export function buildErrorCodeHubPages(
  seeds: ErrorCodeSeed[] = ALL_ERROR_CODE_SEEDS,
): ErrorCodeHubPageData[] {
  const deviceEntries = new Map<string, ErrorCodeSeed[]>();
  const brandEntries = new Map<string, ErrorCodeSeed[]>();

  for (const seed of seeds) {
    const deviceList = deviceEntries.get(seed.deviceSlug) ?? [];
    deviceList.push(seed);
    deviceEntries.set(seed.deviceSlug, deviceList);

    const brandKey = `${seed.deviceSlug}::${seed.brandGroupSlug}`;
    const brandList = brandEntries.get(brandKey) ?? [];
    brandList.push(seed);
    brandEntries.set(brandKey, brandList);
  }

  const deviceHubs: ErrorCodeHubPageData[] = [...deviceEntries.entries()].map(
    ([deviceSlug, deviceSeeds]) => {
      const deviceTitle = deviceSeeds[0].deviceTitle;
      const brandGroups = [...new Set(deviceSeeds.map((seed) => seed.brandGroupTitle))];
      const codeSlugs = deviceSeeds.map((seed) => seed.codeSlug);
      const verifiedCount = deviceSeeds.filter(
        (seed) => seed.verificationStatus === "verified",
      ).length;
      const isIndexable = verifiedCount > 0;

      return {
        slug: buildHubSlug(deviceSlug),
        pageType: "error-device-hub",
        status: isIndexable ? "published" : "draft",
        indexable: isIndexable,
        focusKeyphrase: `${deviceTitle} hata kodları`,
        secondaryKeyphrases: [
          `${deviceTitle} arıza kodları`,
          `${deviceTitle} hata kodu anlamları`,
          `${deviceTitle} servis kodları`,
        ],
        searchIntent: "informational",
        cornerstone: true,
        priorityTier: 1,
        title: `${deviceTitle} Hata Kodları`,
        seoTitle: `${deviceTitle} Hata Kodları | Kerem Teknik Servis`,
        metaDescription: `${deviceTitle} için marka gruplarına göre hata kodu sayfaları, doğrulanmış kodlar ve güvenli ilk kontrol başlıkları.`,
        h1: `${deviceTitle} hata kodları`,
        intro: `${deviceTitle} için hazırlanan bu merkez sayfası, farklı marka gruplarındaki hata kodu içeriklerini tek yerde toplar. ${deviceSlug === "camasir-makinesi" ? "Çamaşır makinesi kodlarında BSH, Arçelik/Beko ve Vestel platformları ayrı gruplarda listelenir." : "Klima kodlarında split ve inverter platformlar marka gruplarına göre ayrılır."} Kod anlamı model ve üretim yılına göre değişebileceği için her alt sayfada doğrulama durumu belirtilir.${isIndexable ? ` Şu anda ${verifiedCount} doğrulanmış kod yayındadır.` : " Bu cihaz grubunda doğrulanmış kod içeriği hazır olmadığından sayfa indexe açık tutulmaz."}`,
        sections: [
          {
            id: "kapsam",
            title: "Kapsanan marka grupları",
            body: `Bu cihaz kategorisinde içerik bulunan marka grupları: ${brandGroups.join(", ")}.`,
          },
          {
            id: "kullanim",
            title: "Kod sayfaları nasıl okunmalı?",
            body: "Önce cihazınızdaki tam hata kodunu ve marka grubunu eşleştirin. Ardından ilgili sayfadaki doğrulama durumu, güvenli kontroller ve teknisyen inceleme başlıklarını dikkate alın.",
          },
        ],
        faqs: [
          {
            question: `${deviceTitle} hata kodları kesin teşhis yerine geçer mi?`,
            answer:
              "Hayır. Hata kodları teşhisi hızlandırır ancak tek başına yeterli değildir. Belirti, model etiketi ve cihazın hangi aşamada durduğu birlikte değerlendirilmelidir.",
          },
          {
            question: "Aynı kod farklı markalarda farklı anlama gelir mi?",
            answer:
              "Evet. Özellikle OEM platform kullanan cihazlarda aynı harf-rakam kombinasyonu farklı arızalara karşılık gelebilir. Bu yüzden marka grubu bazlı sayfa ayrımı yapılmıştır.",
          },
        ],
        internalLinks: [],
        relatedPageSlugs: deviceSeeds
          .filter((seed) => seed.verificationStatus === "verified")
          .map((seed) => buildCodePageSlug(seed)),
        canonicalPath: buildHubPath(deviceSlug),
        author: "Kerem Teknik Servis",
        technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
        publishedAt: CONTENT_DATES.initialPublish,
        updatedAt: CONTENT_DATES.qcUpdate,
        reviewedAt: CONTENT_DATES.technicalReview,
        sourceNotes: INDEPENDENT_SERVICE_DISCLAIMER,
        deviceSlug,
        deviceTitle,
        codeSlugs,
      };
    },
  );

  const brandHubs: ErrorCodeHubPageData[] = [...brandEntries.values()].map((brandSeeds) => {
    const firstSeed = brandSeeds[0];
    const codeSlugs = brandSeeds.map((seed) => seed.codeSlug);
    const verifiedCount = brandSeeds.filter(
      (seed) => seed.verificationStatus === "verified",
    ).length;
    const isIndexable = verifiedCount > 0;
    const verifiedCodes = brandSeeds
      .filter((seed) => seed.verificationStatus === "verified")
      .map((seed) => seed.code)
      .join(", ");
    const isWashing = firstSeed.deviceSlug === "camasir-makinesi";
    const deviceIntro = isWashing
      ? `${firstSeed.brandGroupTitle} çamaşır makinesi platformlarında kapı kilidi, su alma, tahliye, ısıtma ve elektronik kart devrelerine ait hata kodları bu sayfada toplanır. Çamaşır makinesi kodları genelde yıkama çevriminin hangi aşamasında durduğunu gösterir.`
      : `${firstSeed.brandGroupTitle} split klima iç ünitelerinde sensör, fan, kompresör koruması, drenaj ve iç-dış ünite haberleşmesine ait hata kodları bu sayfada toplanır. Klima kodları soğutma/ısıtma moduna ve ortam koşullarına göre farklı anlamlar taşıyabilir.`;

    return {
      slug: buildHubSlug(firstSeed.deviceSlug, firstSeed.brandGroupSlug),
      pageType: "error-brand-hub",
      status: isIndexable ? "published" : "draft",
      indexable: isIndexable,
      focusKeyphrase: `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} hata kodları`,
      secondaryKeyphrases: [
        `${firstSeed.brandGroupTitle} arıza kodları`,
        `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} servis kodları`,
        `${firstSeed.brandGroupTitle} hata kodu anlamları`,
      ],
      searchIntent: "informational",
      cornerstone: false,
      priorityTier: 1,
      title: `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} Hata Kodları`,
      seoTitle: `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} Hata Kodları | Kerem Teknik Servis`,
      metaDescription: `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} için kod listesi, doğrulanmış anlamlar ve güvenli kontrol başlıkları.`,
      h1: `${firstSeed.brandGroupTitle} ${firstSeed.deviceTitle} hata kodları`,
      intro: `${deviceIntro} Özellikle doğrulanmış kodlarda anlam, belirti ve güvenli kullanıcı kontrolleri daha ayrıntılı verilmiştir.${isIndexable ? ` Bu grupta ${verifiedCount} doğrulanmış kod bulunur${verifiedCodes ? ` (${verifiedCodes})` : ""}.` : " Doğrulanmış teknik kaynak yeterli olmadığından bu grup indexe açılmaz."}`,
      sections: [
        {
          id: "dogrulama",
          title: "Doğrulama yaklaşımı",
          body: isWashing
            ? "Çamaşır makinesi kodlarında yalnızca üretici servis dökümanı veya BSH/Arçelik platform çapraz referansı bulunan kayıtlar verified olarak işaretlenmiştir. Aynı E kodu farklı marka grubunda farklı anlama gelebilir."
            : "Klima kodlarında yalnızca marka servis tablosu veya güvenilir OEM platform referansı bulunan kayıtlar verified olarak işaretlenmiştir. Split sistemlerde iç ve dış ünite eşleşmesi kod yorumunu değiştirir.",
        },
        {
          id: "liste",
          title: isWashing ? "Çamaşır makinesi kod kapsamı" : "Klima kod kapsamı",
          body: isWashing
            ? `Bu merkezde yer alan çamaşır makinesi kodları: ${brandSeeds.map((seed) => seed.code).join(", ")}. Kapı, su alma, tahliye ve ısıtma devreleri ayrı sayfalarda açıklanır.`
            : `Bu merkezde yer alan klima kodları: ${brandSeeds.map((seed) => seed.code).join(", ")}. Sensör, fan, kompresör ve haberleşme arızaları ayrı sayfalarda açıklanır.`,
        },
      ],
      faqs: [
        {
          question: "Neden bazı kodlar doğrulanmış, bazıları doğrulanmamış görünüyor?",
          answer:
            "Çünkü aynı grup içinde bile model platformları değişebiliyor. Güvenilir teknik kaynakla eşleşmeyen kodlar yanlış yönlendirme riskini azaltmak için unverified olarak tutulur.",
        },
        {
          question: "Kod sayfalarında evde uygulanabilir işlem var mı?",
          answer:
            "Yalnızca güvenli ve dışarıdan yapılabilecek kontroller listelenir. Sökme, gaz devresi, yüksek gerilim veya elektronik kart müdahaleleri kullanıcı için önerilmez.",
        },
      ],
      internalLinks: [
        {
          href: buildHubPath(firstSeed.deviceSlug),
          label: `${firstSeed.deviceTitle} hata kodları merkezi`,
        },
      ],
      relatedPageSlugs: brandSeeds
        .filter((seed) => seed.verificationStatus === "verified")
        .map((seed) => buildCodePageSlug(seed)),
      canonicalPath: buildHubPath(firstSeed.deviceSlug, firstSeed.brandGroupSlug),
      author: "Kerem Teknik Servis",
      technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
      publishedAt: CONTENT_DATES.initialPublish,
      updatedAt: CONTENT_DATES.qcUpdate,
      reviewedAt: CONTENT_DATES.technicalReview,
      sourceNotes: INDEPENDENT_SERVICE_DISCLAIMER,
      deviceSlug: firstSeed.deviceSlug,
      deviceTitle: firstSeed.deviceTitle,
      brandGroupSlug: firstSeed.brandGroupSlug,
      brandGroupTitle: firstSeed.brandGroupTitle,
      codeSlugs,
    };
  });

  return [...deviceHubs, ...brandHubs].sort((a, b) =>
    a.slug.localeCompare(b.slug, "tr", { numeric: true }),
  );
}
