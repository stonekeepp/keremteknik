import { BRAND_HUB_SEEDS } from "./brands";
import { BRAND_SERVICE_SEEDS } from "./brand-services";
import {
  buildBrandHubIndexPage,
  buildBrandHubPages,
  buildBrandServicePages,
  buildErrorHubPage,
  buildFaultGuidePages,
  buildFaultHubPage,
  buildRegionHubPage,
} from "./builders";
import { buildErrorCodeHubPages, buildErrorCodePages } from "./error-codes";
import { buildRegionPages } from "./regions";
import {
  buildRegionServicePages,
  getRegionServiceStaticParams,
} from "./region-services";
import type { SeoPageRecord } from "./types";

export function getAllSeoPages(): SeoPageRecord[] {
  return [
    buildRegionHubPage(),
    ...buildRegionPages(),
    ...buildRegionServicePages(),
    buildBrandHubIndexPage(),
    ...buildBrandHubPages(),
    ...buildBrandServicePages(),
    buildFaultHubPage(),
    ...buildFaultGuidePages(),
    buildErrorHubPage(),
    ...buildErrorCodeHubPages(),
    ...buildErrorCodePages(),
  ];
}

export function getIndexableSeoPages(): SeoPageRecord[] {
  return getAllSeoPages().filter((page) => page.status === "published" && page.indexable);
}

export function getSeoPageByCanonicalPath(path: string): SeoPageRecord | undefined {
  return getAllSeoPages().find((page) => page.canonicalPath === path);
}

export function getRegionStaticParams(): { bolge: string }[] {
  return buildRegionPages().map((page) => ({ bolge: page.slug }));
}

export function getBrandStaticParams(): { marka: string }[] {
  return BRAND_HUB_SEEDS.map((brand) => ({ marka: brand.brandSlug }));
}

export function getBrandServiceStaticParams(): { marka: string; servisSlug: string }[] {
  return BRAND_SERVICE_SEEDS.map((seed) => ({
    marka: seed.brandSlug,
    servisSlug: seed.servisSlug,
  }));
}

export function getFaultGuideStaticParams(): { cihaz: string; sorun: string }[] {
  return buildFaultGuidePages().map((page) => ({
    cihaz: page.deviceSlug,
    sorun: page.problemSlug,
  }));
}

export function getRegionServiceParams(): { bolge: string; hizmet: string }[] {
  return getRegionServiceStaticParams();
}

export function getErrorDeviceParams(): { cihaz: string }[] {
  return buildErrorCodeHubPages()
    .filter(
      (page) =>
        page.pageType === "error-device-hub" &&
        page.status === "published" &&
        page.indexable,
    )
    .map((page) => ({ cihaz: page.deviceSlug }));
}

export function getErrorBrandParams(): { cihaz: string; markaGrubu: string }[] {
  return buildErrorCodeHubPages()
    .filter(
      (page) =>
        page.pageType === "error-brand-hub" &&
        page.status === "published" &&
        page.indexable,
    )
    .map((page) => ({
      cihaz: page.deviceSlug,
      markaGrubu: page.brandGroupSlug ?? "",
    }));
}

export function getErrorCodeParams(): {
  cihaz: string;
  markaGrubu: string;
  kod: string;
}[] {
  return buildErrorCodePages()
    .filter((page) => page.status === "published" && page.indexable)
    .map((page) => ({
      cihaz: page.deviceSlug,
      markaGrubu: page.brandGroupSlug,
      kod: page.codeSlug,
    }));
}
