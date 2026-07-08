import { SITE, FAQ_ITEMS } from "@/lib/services/site";
import { absoluteUrl } from "./metadata";

const localBusinessId = () => absoluteUrl("/#localbusiness");
const organizationId = () => absoluteUrl("/#organization");

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": localBusinessId(),
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

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: SITE.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE.logoImage),
    image: absoluteUrl(SITE.image),
    sameAs: [SITE.mapsUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
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
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "HVACBusiness",
      "@id": localBusinessId(),
      name: SITE.name,
      telephone: SITE.phoneTel,
    },
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
  coverImage,
  canonicalUrl,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  coverImage?: string;
  canonicalUrl?: string | null;
}) {
  const pageUrl =
    canonicalUrl && canonicalUrl.trim()
      ? canonicalUrl.trim()
      : absoluteUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      "@type": "Organization",
      "@id": organizationId(),
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationId(),
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(SITE.logoImage),
      },
    },
    mainEntityOfPage: pageUrl,
    ...(coverImage
      ? {
          image: coverImage.startsWith("http")
            ? coverImage
            : absoluteUrl(coverImage),
        }
      : {}),
  };
}
