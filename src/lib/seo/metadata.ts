import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/env";

const SITE_NAME = "Kerem Teknik Servis";
const DEFAULT_DESCRIPTION =
  "Kerem Teknik Servis; klima, kombi ve beyaz eşya arızaları için hızlı, güvenilir ve profesyonel teknik servis hizmeti sunar.";
const DEFAULT_OG_IMAGE = "/brand/logo-kerem-teknik-servis.png";

export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildCanonical(path: string): string {
  return absoluteUrl(path);
}

type BuildPageMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  absoluteTitle = false,
  type = "website",
  publishedTime,
}: BuildPageMetadataOptions): Metadata {
  const canonical = buildCanonical(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: SITE_NAME }],
      ...(publishedTime && type === "article"
        ? { publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME };
