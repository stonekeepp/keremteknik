import { INDEPENDENT_SERVICE_DISCLAIMER, CONTENT_DATES } from "./constants";
import { BRAND_HUB_SEEDS } from "./brands";
import { BRAND_SERVICE_SEEDS } from "./brand-services";
import { FAULT_GUIDE_SEEDS } from "./fault-guides";
import type {
  BrandHubPageData,
  BrandServicePageData,
  FaultGuidePageData,
  SeoPageBase,
} from "./types";

const FAULT_GUIDE_BLOG: Record<string, string> = {
  "klima/sogutmuyor": "/blog/klima-bakimi-ne-zaman-yapilmali",
  "kombi/su-akitiyor": "/blog/kombi-bakimi-neden-onemlidir",
  "bulasik-makinesi/musluk-isareti": "/blog/bulasik-makinesi-neden-koku-yapar",
  "bulasik-makinesi/su-bosaltmiyor": "/blog/bulasik-makinesi-neden-koku-yapar",
  "camasir-makinesi/kazan-donmuyor": "/blog/camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir",
};

const BRAND_SERVICE_BLOG: Record<string, string> = {
  "arcelik/buzdolabi-servisi": "/blog/buzdolabi-sogutmuyorsa-ne-yapilmali",
  "bosch/camasir-makinesi-servisi": "/blog/camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir",
  "bosch/bulasik-makinesi-servisi": "/blog/bulasik-makinesi-neden-koku-yapar",
};

export function buildBrandHubPages(): BrandHubPageData[] {
  return BRAND_HUB_SEEDS.map((seed) => {
    const canonicalPath = `/markalar/${seed.brandSlug}`;
    return {
      slug: seed.brandSlug,
      pageType: "brand-hub",
      status: "published",
      indexable: true,
      focusKeyphrase: seed.focusKeyphrase,
      secondaryKeyphrases: [
        `${seed.brandName} teknik servis`,
        `${seed.brandName} servisi`,
      ],
      searchIntent: "commercial",
      cornerstone: false,
      priorityTier: 2,
      title: `${seed.brandName} Servisi | Bağımsız Özel Teknik Servis`,
      seoTitle: `${seed.brandName} Servisi | Bağımsız Özel Teknik Servis`,
      metaDescription: `${seed.brandName} cihazları için bağımsız özel teknik servis. Yerinde teşhis, şeffaf fiyat ve garantili işçilik. Yetkili servis değildir.`,
      h1: `${seed.brandName} Teknik Servis`,
      intro: seed.uniqueIntro,
      sections: seed.sections,
      faqs: seed.faqs,
      internalLinks: seed.serviceSlugs.map((servisSlug) => ({
        href: `/markalar/${seed.brandSlug}/${servisSlug}`,
        label: servisSlug.replace(/-/g, " "),
      })),
      relatedPageSlugs: seed.serviceSlugs,
      canonicalPath,
      author: "Kerem Teknik Servis",
      technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
      publishedAt: CONTENT_DATES.initialPublish,
      updatedAt: CONTENT_DATES.qcUpdate,
      reviewedAt: CONTENT_DATES.technicalReview,
      sourceNotes: INDEPENDENT_SERVICE_DISCLAIMER,
      brandSlug: seed.brandSlug,
      brandName: seed.brandName,
      serviceSlugs: seed.serviceSlugs,
    };
  });
}

export function buildBrandServicePages(): BrandServicePageData[] {
  return BRAND_SERVICE_SEEDS.map((seed) => {
    const canonicalPath = `/markalar/${seed.brandSlug}/${seed.servisSlug}`;
    const focusKeyphrase = seed.focusKeyphrase;
    return {
      slug: `${seed.brandSlug}-${seed.servisSlug}`,
      pageType: "brand-service",
      status: "published",
      indexable: true,
      focusKeyphrase,
      secondaryKeyphrases: [
        `${seed.brandName} ${seed.deviceTitle.toLowerCase()} tamiri`,
        `${seed.brandName} ${seed.deviceTitle.toLowerCase()} servisi`,
      ],
      searchIntent: "commercial",
      cornerstone: false,
      priorityTier: 2,
      title: `${seed.brandName} ${seed.deviceTitle} Servisi | Bağımsız Teknik Servis`,
      seoTitle: `${seed.brandName} ${seed.deviceTitle} Servisi | Bağımsız Teknik Servis`,
      metaDescription: `${seed.brandName} ${seed.deviceTitle.toLowerCase()} arıza ve bakımında bağımsız özel teknik servis. Yerinde teşhis, şeffaf fiyat. Yetkili servis değildir.`,
      h1: `${seed.brandName} ${seed.deviceTitle} Servisi`,
      intro: seed.uniqueIntro,
      sections: [
        ...seed.sections,
        {
          id: "disclaimer",
          title: "Bağımsız servis bilgilendirmesi",
          body: INDEPENDENT_SERVICE_DISCLAIMER,
        },
        {
          id: "common-issues",
          title: "Yaygın arıza grupları",
          body: seed.commonIssues.join(". ") + ".",
        },
        {
          id: "safe-checks",
          title: "Güvenli kullanıcı kontrolleri",
          body: seed.safeChecks.join(". ") + ".",
        },
      ],
      faqs: seed.faqs,
      internalLinks: [
        { href: `/markalar/${seed.brandSlug}`, label: `${seed.brandName} servisleri` },
        { href: `/hizmetlerimiz/${seed.servisSlug}`, label: `Genel ${seed.deviceTitle.toLowerCase()} servisi` },
        { href: "/iletisim", label: "Servis talebi" },
        ...(BRAND_SERVICE_BLOG[`${seed.brandSlug}/${seed.servisSlug}`]
          ? [
              {
                href: BRAND_SERVICE_BLOG[`${seed.brandSlug}/${seed.servisSlug}`],
                label: "İlgili blog yazısı",
              },
            ]
          : []),
      ],
      relatedPageSlugs: seed.relatedFaultSlugs ?? [],
      canonicalPath,
      author: "Kerem Teknik Servis",
      technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
      publishedAt: CONTENT_DATES.initialPublish,
      updatedAt: CONTENT_DATES.qcUpdate,
      reviewedAt: CONTENT_DATES.technicalReview,
      sourceNotes: INDEPENDENT_SERVICE_DISCLAIMER,
      brandSlug: seed.brandSlug,
      brandName: seed.brandName,
      deviceSlug: seed.deviceSlug,
      deviceTitle: seed.deviceTitle,
      servisSlug: seed.servisSlug,
    };
  });
}

export function buildFaultGuidePages(): FaultGuidePageData[] {
  return FAULT_GUIDE_SEEDS.map((seed) => {
    const canonicalPath = `/ariza-rehberi/${seed.deviceSlug}/${seed.problemSlug}`;
    return {
      slug: `${seed.deviceSlug}-${seed.problemSlug}`,
      pageType: "fault-guide",
      status: "published",
      indexable: true,
      focusKeyphrase: seed.focusKeyphrase,
      secondaryKeyphrases: seed.secondaryKeyphrases,
      searchIntent: "informational",
      cornerstone: false,
      priorityTier: 2,
      title: seed.title,
      seoTitle: seed.title,
      metaDescription: `${seed.focusKeyphrase} sorununun olası nedenleri, güvenli kontroller ve ne zaman servis çağırmanız gerektiği.`,
      h1: seed.h1,
      intro: seed.intro,
      sections: [
        {
          id: "short-answer",
          title: "Kısa cevap",
          body: seed.shortAnswer,
        },
        {
          id: "symptoms",
          title: "Görülen belirtiler",
          body: seed.symptoms.join(". ") + ".",
        },
        {
          id: "causes",
          title: "Olası nedenler",
          body: seed.possibleCauses.join(". ") + ".",
        },
        {
          id: "safe-checks",
          title: "Güvenli kontroller",
          body: seed.safeChecks.join(". ") + ".",
        },
        {
          id: "do-not-do",
          title: "Yapılmaması gerekenler",
          body: seed.doNotDo.join(". ") + ".",
        },
        {
          id: "shut-off",
          title: "Cihaz ne zaman kapatılmalı?",
          body: seed.whenToShutOff,
        },
        {
          id: "technician",
          title: "Teknik servis süreci",
          body: seed.technicianProcess,
        },
        ...seed.sections,
        ...(seed.brandNotes?.length
          ? [
              {
                id: "brand-notes",
                title: "Marka farklılıkları",
                body: seed.brandNotes
                  .map((n) => `${n.brand}: ${n.note}`)
                  .join(" "),
              },
            ]
          : []),
      ],
      faqs: seed.faqs,
      internalLinks: [
        { href: `/hizmetlerimiz/${seed.relatedServiceSlug}`, label: "İlgili cihaz servisi" },
        { href: "/ariza-rehberi", label: "Tüm arıza rehberleri" },
        { href: "/iletisim", label: "Servis talebi" },
        ...(FAULT_GUIDE_BLOG[`${seed.deviceSlug}/${seed.problemSlug}`]
          ? [
              {
                href: FAULT_GUIDE_BLOG[`${seed.deviceSlug}/${seed.problemSlug}`],
                label: "İlgili blog yazısı",
              },
            ]
          : []),
      ],
      relatedPageSlugs: seed.relatedRegionSlugs ?? [],
      canonicalPath,
      author: "Kerem Teknik Servis",
      technicalReviewer: "Kerem Teknik Servis Teknik Ekip",
      publishedAt: CONTENT_DATES.initialPublish,
      updatedAt: CONTENT_DATES.qcUpdate,
      reviewedAt: CONTENT_DATES.technicalReview,
      sourceNotes: "Teknik değerlendirme, güvenli kullanıcı kontrolleri ve saha servis pratiği dikkate alınarak hazırlanmıştır.",
      deviceSlug: seed.deviceSlug,
      deviceTitle: seed.deviceTitle,
      problemSlug: seed.problemSlug,
      brandNotes: seed.brandNotes,
    };
  });
}

export function buildRegionHubPage(): SeoPageBase {
  return {
    slug: "servis-bolgeleri",
    pageType: "region-hub",
    status: "published",
    indexable: true,
    focusKeyphrase: "İstanbul teknik servis bölgeleri",
    secondaryKeyphrases: [
      "İstanbul servis bölgeleri",
      "İstanbul klima servisi bölgeleri",
    ],
    searchIntent: "navigational",
    cornerstone: true,
    priorityTier: 1,
    title: "İstanbul Servis Bölgeleri | Kerem Teknik Servis",
    seoTitle: "İstanbul Servis Bölgeleri | Kerem Teknik Servis",
    metaDescription:
      "İstanbul'un 39 ilçesi ve Alibeyköy için klima, kombi ve beyaz eşya teknik servis bölgeleri. Avrupa ve Anadolu Yakası kapsamı.",
    h1: "İstanbul Servis Bölgeleri",
    intro:
      "Kerem Teknik Servis, İstanbul genelinde klima, kombi ve beyaz eşya arızaları için yerinde teknik destek sunar. Merkez ofisimiz Eyüpsultan Alibeyköy'dedir; aşağıdan ilçenize veya öncelikli hizmet alanlarımıza göz atabilirsiniz.",
    sections: [],
    faqs: [],
    internalLinks: [],
    relatedPageSlugs: [],
    canonicalPath: "/servis-bolgeleri",
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: CONTENT_DATES.qcUpdate,
    reviewedAt: CONTENT_DATES.technicalReview,
  };
}

export function buildBrandHubIndexPage(): SeoPageBase {
  return {
    slug: "markalar",
    pageType: "brand-hub",
    status: "published",
    indexable: true,
    focusKeyphrase: "marka teknik servis",
    secondaryKeyphrases: ["beyaz eşya marka servisi", "klima marka servisi"],
    searchIntent: "navigational",
    cornerstone: true,
    priorityTier: 1,
    title: "Marka Servisleri | Bağımsız Özel Teknik Servis",
    seoTitle: "Marka Servisleri | Bağımsız Özel Teknik Servis",
    metaDescription:
      "Bosch, Siemens, Arçelik, Beko, Daikin ve diğer markalar için bağımsız özel teknik servis. Yetkili servis değildir.",
    h1: "Marka Servisleri",
    intro:
      "Farklı marka ve cihaz türlerinde yerinde arıza tespiti ve onarım hizmeti sunuyoruz. Kerem Teknik Servis bağımsız özel teknik servistir; sayfada adı geçen markaların yetkili servisi değildir.",
    sections: [],
    faqs: [],
    internalLinks: [],
    relatedPageSlugs: [],
    canonicalPath: "/markalar",
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: CONTENT_DATES.qcUpdate,
    reviewedAt: CONTENT_DATES.technicalReview,
  };
}

export function buildFaultHubPage(): SeoPageBase {
  return {
    slug: "ariza-rehberi",
    pageType: "fault-hub",
    status: "published",
    indexable: true,
    focusKeyphrase: "arıza rehberi",
    secondaryKeyphrases: ["klima arıza rehberi", "kombi arıza rehberi"],
    searchIntent: "informational",
    cornerstone: true,
    priorityTier: 1,
    title: "Arıza Rehberi | Klima, Kombi ve Beyaz Eşya",
    seoTitle: "Arıza Rehberi | Klima, Kombi ve Beyaz Eşya",
    metaDescription:
      "Klima soğutmuyor, kombi su akıtıyor, çamaşır makinesi çalışmıyor gibi sorunlar için güvenli kontroller ve teknisyen süreci.",
    h1: "Arıza Rehberi",
    intro:
      "Sık karşılaşılan arıza belirtilerini, güvenli kontrolleri ve ne zaman servis çağırmanız gerektiğini anlatan rehberler.",
    sections: [],
    faqs: [],
    internalLinks: [],
    relatedPageSlugs: [],
    canonicalPath: "/ariza-rehberi",
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: CONTENT_DATES.qcUpdate,
    reviewedAt: CONTENT_DATES.technicalReview,
  };
}

export function buildErrorHubPage(): SeoPageBase {
  return {
    slug: "hata-kodlari",
    pageType: "error-hub",
    status: "published",
    indexable: true,
    focusKeyphrase: "hata kodları",
    secondaryKeyphrases: ["çamaşır makinesi hata kodları", "klima hata kodları"],
    searchIntent: "informational",
    cornerstone: true,
    priorityTier: 1,
    title: "Hata Kodları Rehberi | Çamaşır Makinesi ve Klima",
    seoTitle: "Hata Kodları Rehberi | Çamaşır Makinesi ve Klima",
    metaDescription:
      "Çamaşır makinesi ve klima hata kodlarının anlamları, güvenli kontroller ve model farkı uyarıları. Kaynak doğrulamalı içerik.",
    h1: "Hata Kodları",
    intro:
      "Cihaz ekranında gördüğünüz hata kodlarının olası anlamlarını, güvenli kontrolleri ve ne zaman servis çağırmanız gerektiğini açıklayan rehberler.",
    sections: [],
    faqs: [],
    internalLinks: [],
    relatedPageSlugs: [],
    canonicalPath: "/hata-kodlari",
    publishedAt: CONTENT_DATES.initialPublish,
    updatedAt: CONTENT_DATES.qcUpdate,
    reviewedAt: CONTENT_DATES.technicalReview,
  };
}
