import type { BlogCategory } from "@/lib/blog/types";
import { SERVICES } from "@/lib/services/site";

export const INTERNAL_LINK_LIMIT = 6;

export type ContextualLink = {
  href: string;
  label: string;
  description?: string;
};

const UTILITY_LINKS = {
  contact: {
    href: "/iletisim",
    label: "İletişim",
    description: "Randevu planlamak veya servis talebi oluşturmak için",
  },
  faq: {
    href: "/sss",
    label: "Sık Sorulan Sorular",
    description: "Servis süreci, garanti ve fiyatlandırma hakkında",
  },
  blog: {
    href: "/blog",
    label: "Blog",
    description: "Bakım ipuçları ve arıza rehberleri",
  },
  services: {
    href: "/hizmetlerimiz",
    label: "Tüm Hizmetlerimiz",
    description: "Klima, kombi ve beyaz eşya servis kapsamı",
  },
  about: {
    href: "/hakkimizda",
    label: "Hakkımızda",
    description: "Ekibimiz ve hizmet anlayışımız hakkında",
  },
  home: {
    href: "/",
    label: "Ana Sayfa",
    description: "Kerem Teknik Servis ana sayfası",
  },
} as const satisfies Record<string, ContextualLink>;

const CATEGORY_SERVICE_SLUG: Partial<Record<BlogCategory, string>> = {
  Klima: "klima-servisi",
  Kombi: "kombi-servisi",
  "Beyaz Eşya": "beyaz-esya-servisi",
  "Bakım Önerileri": "klima-servisi",
  "Arıza Rehberi": "beyaz-esya-servisi",
};

const SERVICE_RELATED_SLUGS: Record<string, string[]> = {
  "klima-servisi": ["kombi-servisi", "beyaz-esya-servisi", "periyodik-bakim"],
  "kombi-servisi": ["klima-servisi", "beyaz-esya-servisi", "periyodik-bakim"],
  "beyaz-esya-servisi": [
    "camasir-makinesi-servisi",
    "buzdolabi-servisi",
    "bulasik-makinesi-servisi",
  ],
  "camasir-makinesi-servisi": ["buzdolabi-servisi", "beyaz-esya-servisi"],
  "buzdolabi-servisi": ["camasir-makinesi-servisi", "bulasik-makinesi-servisi"],
  "bulasik-makinesi-servisi": ["camasir-makinesi-servisi", "firin-ocak-servisi"],
  "firin-ocak-servisi": ["bulasik-makinesi-servisi", "beyaz-esya-servisi"],
  "periyodik-bakim": ["klima-servisi", "kombi-servisi", "yedek-parca-iscilik"],
  "yedek-parca-iscilik": ["periyodik-bakim", "beyaz-esya-servisi", "klima-servisi"],
};

function serviceLink(slug: string, description?: string): ContextualLink | null {
  const service = SERVICES.find((s) => s.slug === slug && s.hasDetailPage);
  if (!service) return null;
  return {
    href: `/hizmetlerimiz/${service.slug}`,
    label: service.title,
    description: description ?? truncate(service.shortDescription, 72),
  };
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

const FALLBACK_LINK_POOL: (ContextualLink | null)[] = [
  UTILITY_LINKS.services,
  UTILITY_LINKS.faq,
  UTILITY_LINKS.contact,
  UTILITY_LINKS.blog,
  UTILITY_LINKS.about,
  UTILITY_LINKS.home,
  serviceLink("klima-servisi"),
  serviceLink("kombi-servisi"),
  serviceLink("beyaz-esya-servisi"),
  serviceLink("camasir-makinesi-servisi"),
  serviceLink("periyodik-bakim"),
  serviceLink("yedek-parca-iscilik"),
];

function uniqueLinks(links: (ContextualLink | null)[]): ContextualLink[] {
  const seen = new Set<string>();
  const result: ContextualLink[] = [];

  for (const link of links) {
    if (!link || seen.has(link.href)) continue;
    seen.add(link.href);
    result.push(link);
  }

  return result;
}

function excludePath(links: ContextualLink[], pathname: string): ContextualLink[] {
  const normalized =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return links.filter((link) => link.href !== normalized);
}

function finalizeLinks(
  candidates: (ContextualLink | null)[],
  pathname: string,
): ContextualLink[] {
  const merged = uniqueLinks([...candidates, ...FALLBACK_LINK_POOL]);
  const filtered = excludePath(merged, pathname);
  return filtered.slice(0, INTERNAL_LINK_LIMIT);
}

export type InternalLinksBlock = {
  heading: string;
  links: ContextualLink[];
};

export function getInternalLinksForPath(pathname: string): InternalLinksBlock | null {
  const path =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (path.startsWith("/blog/") && path !== "/blog") {
    return null;
  }

  if (path.startsWith("/admin")) {
    return null;
  }

  let block: InternalLinksBlock | null = null;

  if (path === "/") {
    block = {
      heading: "Sitede gezinin",
      links: finalizeLinks(
        [
          UTILITY_LINKS.services,
          serviceLink("klima-servisi"),
          serviceLink("kombi-servisi"),
          serviceLink("beyaz-esya-servisi"),
          serviceLink("periyodik-bakim"),
          UTILITY_LINKS.faq,
          UTILITY_LINKS.contact,
        ],
        path,
      ),
    };
  } else if (path === "/hizmetlerimiz") {
    block = {
      heading: "Öne çıkan servisler",
      links: finalizeLinks(
        [
          serviceLink("klima-servisi"),
          serviceLink("kombi-servisi"),
          serviceLink("beyaz-esya-servisi"),
          serviceLink("periyodik-bakim"),
          UTILITY_LINKS.faq,
          UTILITY_LINKS.contact,
          UTILITY_LINKS.blog,
        ],
        path,
      ),
    };
  } else if (path.startsWith("/hizmetlerimiz/")) {
    const slug = path.replace("/hizmetlerimiz/", "");
    const related = (SERVICE_RELATED_SLUGS[slug] ?? []).map((s) =>
      serviceLink(s),
    );
    block = {
      heading: "İlgili servis ve bilgi sayfaları",
      links: finalizeLinks(
        [
          ...related,
          UTILITY_LINKS.services,
          UTILITY_LINKS.faq,
          UTILITY_LINKS.blog,
          UTILITY_LINKS.contact,
          UTILITY_LINKS.about,
        ],
        path,
      ),
    };
  } else if (path === "/blog") {
    block = {
      heading: "Servis ve destek",
      links: finalizeLinks(
        [
          UTILITY_LINKS.services,
          serviceLink("klima-servisi", "Klima bakımı ve arıza çözümleri"),
          serviceLink("kombi-servisi"),
          UTILITY_LINKS.faq,
          UTILITY_LINKS.about,
          UTILITY_LINKS.contact,
        ],
        path,
      ),
    };
  } else if (path === "/hakkimizda") {
    block = {
      heading: "Hizmetlerimizi inceleyin",
      links: finalizeLinks(
        [
          UTILITY_LINKS.services,
          serviceLink("klima-servisi"),
          serviceLink("kombi-servisi"),
          serviceLink("beyaz-esya-servisi"),
          UTILITY_LINKS.blog,
          UTILITY_LINKS.contact,
        ],
        path,
      ),
    };
  } else if (path === "/sss") {
    block = {
      heading: "Servis talebi ve hizmetler",
      links: finalizeLinks(
        [
          UTILITY_LINKS.contact,
          UTILITY_LINKS.services,
          serviceLink("beyaz-esya-servisi"),
          serviceLink("kombi-servisi"),
          serviceLink("periyodik-bakim"),
          UTILITY_LINKS.about,
        ],
        path,
      ),
    };
  } else if (path === "/iletisim") {
    block = {
      heading: "Hizmetler hakkında bilgi",
      links: finalizeLinks(
        [
          UTILITY_LINKS.services,
          UTILITY_LINKS.faq,
          serviceLink("klima-servisi"),
          serviceLink("camasir-makinesi-servisi"),
          serviceLink("periyodik-bakim"),
          UTILITY_LINKS.blog,
        ],
        path,
      ),
    };
  }

  if (!block || block.links.length === 0) return null;

  return block;
}

export function getBlogPostInternalLinks(
  category: BlogCategory,
  currentSlug: string,
): InternalLinksBlock {
  const serviceSlug = CATEGORY_SERVICE_SLUG[category];
  const service = serviceSlug ? serviceLink(serviceSlug) : null;

  const links = finalizeLinks(
    [
      service,
      UTILITY_LINKS.services,
      UTILITY_LINKS.faq,
      UTILITY_LINKS.contact,
      UTILITY_LINKS.blog,
      serviceLink("kombi-servisi"),
      UTILITY_LINKS.about,
    ],
    `/blog/${currentSlug}`,
  ).filter((link) => link.href !== `/blog/${currentSlug}`);

  return {
    heading: "Bu yazıyla ilgili sayfalar",
    links: links.slice(0, INTERNAL_LINK_LIMIT),
  };
}

export function getServiceSidebarLink(slug: string): ContextualLink | null {
  return serviceLink(slug);
}

export function getBlogCategoryServiceSlug(
  category: BlogCategory,
): string | null {
  return CATEGORY_SERVICE_SLUG[category] ?? null;
}
