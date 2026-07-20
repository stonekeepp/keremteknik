import { SITE, FAQ_ITEMS } from "@/lib/services/site";
import { absoluteUrl } from "./metadata";

export const LOCAL_BUSINESS_ID =
  "https://keremteknikservis.com/#localbusiness";

function buildLocalBusinessReference() {
  return {
    "@id": LOCAL_BUSINESS_ID,
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness", "Organization"],
    "@id": LOCAL_BUSINESS_ID,
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phoneTel,
    image: absoluteUrl(SITE.image),
    logo: absoluteUrl(SITE.logoImage),
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      postalCode: SITE.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapsUrl,
    url: absoluteUrl("/"),
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    sameAs: [SITE.mapsUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function buildFaqPageJsonLd(
  items: readonly { question: string; answer: string }[] = FAQ_ITEMS,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; href?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function buildServiceJsonLd({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    provider: buildLocalBusinessReference(),
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    url: absoluteUrl(`/hizmetlerimiz/${slug}`),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  coverImage,
  canonicalUrl,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string | null;
  coverImage?: string;
  canonicalUrl?: string | null;
}) {
  const pageUrl =
    canonicalUrl && canonicalUrl.trim()
      ? canonicalUrl.startsWith("http")
        ? canonicalUrl.trim()
        : absoluteUrl(canonicalUrl.trim())
      : absoluteUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    author: {
      ...buildLocalBusinessReference(),
      name: SITE.name,
    },
    publisher: {
      "@id": LOCAL_BUSINESS_ID,
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(SITE.logoImage),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    ...(coverImage
      ? {
          image: coverImage.startsWith("http")
            ? coverImage
            : absoluteUrl(coverImage),
        }
      : {}),
  };
}

export function buildCollectionPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: absoluteUrl("/"),
  };
}

export function buildAreaServedServiceJsonLd({
  name,
  description,
  path,
  areaName,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  areaName: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: buildLocalBusinessReference(),
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaName,
    },
    url: absoluteUrl(path),
  };
}
