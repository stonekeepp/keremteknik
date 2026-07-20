export type PageType =
  | "region-hub"
  | "region"
  | "region-service"
  | "brand-hub"
  | "brand-service"
  | "fault-hub"
  | "fault-guide"
  | "error-hub"
  | "error-device-hub"
  | "error-brand-hub"
  | "error-code";

export type PageStatus = "published" | "draft";
export type VerificationStatus = "verified" | "unverified" | "partial";
export type SafetyLevel = "low" | "medium" | "high";
export type SearchIntent =
  | "informational"
  | "commercial"
  | "local"
  | "navigational"
  | "transactional";

export type ContentSection = {
  id: string;
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type InternalLinkItem = {
  href: string;
  label: string;
  description?: string;
};

export type SourceReference = {
  name: string;
  type: "manual" | "support-page" | "documentation" | "cross-reference";
  modelSeries?: string;
  url?: string;
  verifiedAt: string;
};

export type SeoPageBase = {
  slug: string;
  pageType: PageType;
  status: PageStatus;
  indexable: boolean;
  focusKeyphrase: string;
  secondaryKeyphrases: string[];
  searchIntent: SearchIntent;
  cornerstone: boolean;
  priorityTier: 1 | 2 | 3;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  internalLinks: InternalLinkItem[];
  relatedPageSlugs: string[];
  image?: string;
  imageAlt?: string;
  canonicalPath: string;
  author?: string;
  technicalReviewer?: string;
  publishedAt: string;
  updatedAt: string;
  reviewedAt?: string;
  sourceNotes?: string;
  sourceReferences?: SourceReference[];
  safetyLevel?: SafetyLevel;
};

export type RegionAreaType = "ilce" | "semt";

export type RegionPageData = SeoPageBase & {
  pageType: "region";
  name: string;
  areaType: RegionAreaType;
  parentArea?: string;
  parentAreaName?: string;
  continentSide: "Avrupa Yakası" | "Anadolu Yakası";
  featured: boolean;
  latitude: number;
  longitude: number;
  distanceKm?: number;
  distanceLabel?: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  highlightedServices: string[];
  localProfile: string;
  servicePlanningNote: string;
  uniqueIntro: string;
  uniqueFaqs: FaqItem[];
  localNotes?: string[];
};

export type RegionServicePageData = SeoPageBase & {
  pageType: "region-service";
  regionSlug: string;
  regionName: string;
  serviceSlug: string;
  serviceTitle: string;
  uniqueIntro: string;
};

export type BrandHubPageData = SeoPageBase & {
  pageType: "brand-hub";
  brandSlug: string;
  brandName: string;
  serviceSlugs: string[];
};

export type BrandServicePageData = SeoPageBase & {
  pageType: "brand-service";
  brandSlug: string;
  brandName: string;
  deviceSlug: string;
  deviceTitle: string;
  servisSlug: string;
};

export type FaultGuidePageData = SeoPageBase & {
  pageType: "fault-guide";
  deviceSlug: string;
  deviceTitle: string;
  problemSlug: string;
  brandNotes?: { brand: string; note: string }[];
};

export type ErrorCodeHubPageData = SeoPageBase & {
  pageType: "error-hub" | "error-device-hub" | "error-brand-hub";
  deviceSlug: string;
  deviceTitle: string;
  brandGroupSlug?: string;
  brandGroupTitle?: string;
  codeSlugs?: string[];
};

export type ErrorCodePageData = SeoPageBase & {
  pageType: "error-code";
  deviceSlug: string;
  deviceTitle: string;
  brandGroupSlug: string;
  brandGroupTitle: string;
  brand: string;
  brandGroup: string;
  code: string;
  codeSlug: string;
  codeVariants: string[];
  meaning: string;
  applicableModels: string[];
  symptoms: string[];
  possibleCauses: string[];
  safeChecks: string[];
  doNotDo: string[];
  technicianChecks: string[];
  relatedCodes: string[];
  modelVariationWarning: string;
  verificationStatus: VerificationStatus;
  verifiedAt?: string;
  sources: SourceReference[];
};

export type SeoPageRecord =
  | SeoPageBase
  | RegionPageData
  | RegionServicePageData
  | BrandHubPageData
  | BrandServicePageData
  | FaultGuidePageData
  | ErrorCodeHubPageData
  | ErrorCodePageData;

export function isRegionPage(page: SeoPageRecord): page is RegionPageData {
  return page.pageType === "region";
}

export function isErrorCodePage(page: SeoPageRecord): page is ErrorCodePageData {
  return page.pageType === "error-code";
}
