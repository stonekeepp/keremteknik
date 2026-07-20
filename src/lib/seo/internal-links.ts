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

const BLOG_SERVICE_SLUG: Record<string, string> = {
  "klima-bakimi-ne-zaman-yapilmali": "klima-servisi",
  "kombi-bakimi-neden-onemlidir": "kombi-servisi",
  "buzdolabi-sogutmuyorsa-ne-yapilmali": "buzdolabi-servisi",
  "camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir":
    "camasir-makinesi-servisi",
  "bulasik-makinesi-neden-koku-yapar": "bulasik-makinesi-servisi",
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
  } else if (path === "/servis-bolgeleri") {
    block = {
      heading: "Öne çıkan bölgeler ve cihaz sayfaları",
      links: finalizeLinks(
        [
          { href: "/servis-bolgeleri/alibeykoy", label: "Alibeyköy Servis Bölgesi" },
          { href: "/servis-bolgeleri/eyupsultan", label: "Eyüpsultan Teknik Servis" },
          { href: "/servis-bolgeleri/gaziosmanpasa", label: "Gaziosmanpaşa Teknik Servis" },
          { href: "/servis-bolgeleri/kagithane", label: "Kağıthane Teknik Servis" },
          { href: "/markalar", label: "Marka Servisleri" },
          { href: "/ariza-rehberi", label: "Arıza Rehberi" },
        ],
        path,
      ),
    };
  } else if (path.startsWith("/servis-bolgeleri/")) {
    block = {
      heading: "Bölgesel servis bağlantıları",
      links: finalizeLinks(
        [
          { href: "/servis-bolgeleri", label: "Tüm servis bölgeleri" },
          { href: "/hizmetlerimiz/klima-servisi", label: "Klima Servisi" },
          { href: "/hizmetlerimiz/kombi-servisi", label: "Kombi Servisi" },
          { href: "/hizmetlerimiz/beyaz-esya-servisi", label: "Beyaz Eşya Servisi" },
          { href: "/ariza-rehberi", label: "Arıza Rehberi" },
          { href: "/iletisim", label: "İletişim" },
        ],
        path,
      ),
    };
  } else if (path === "/markalar") {
    block = {
      heading: "Marka ve servis sayfaları",
      links: finalizeLinks(
        [
          { href: "/markalar/bosch", label: "Bosch Servisi" },
          { href: "/markalar/arcelik", label: "Arçelik Servisi" },
          { href: "/markalar/beko", label: "Beko Servisi" },
          { href: "/hata-kodlari", label: "Hata Kodları" },
          { href: "/ariza-rehberi", label: "Arıza Rehberi" },
        ],
        path,
      ),
    };
  } else if (path.startsWith("/markalar/")) {
    block = {
      heading: "İlgili servis ve bilgi sayfaları",
      links: finalizeLinks(
        [
          { href: "/markalar", label: "Tüm markalar" },
          { href: "/hata-kodlari", label: "Hata kodları rehberi" },
          { href: "/ariza-rehberi", label: "Arıza rehberi" },
          { href: "/servis-bolgeleri/alibeykoy", label: "Alibeyköy Servis Bölgesi" },
          { href: "/servis-bolgeleri/eyupsultan", label: "Eyüpsultan Servis Bölgesi" },
        ],
        path,
      ),
    };
  } else if (path === "/ariza-rehberi") {
    block = {
      heading: "Arıza rehberinden devam edin",
      links: finalizeLinks(
        [
          { href: "/ariza-rehberi/klima/sogutmuyor", label: "Klima soğutmuyor" },
          { href: "/ariza-rehberi/kombi/su-akitiyor", label: "Kombi su akıtıyor" },
          { href: "/hizmetlerimiz", label: "Tüm hizmetlerimiz" },
          { href: "/hata-kodlari", label: "Hata kodları" },
          { href: "/markalar", label: "Marka servisleri" },
        ],
        path,
      ),
    };
  } else if (path.startsWith("/ariza-rehberi/")) {
    block = {
      heading: "İlgili sayfalar",
      links: finalizeLinks(
        [
          { href: "/ariza-rehberi", label: "Tüm arıza rehberleri" },
          { href: "/hata-kodlari", label: "Hata kodları rehberi" },
          { href: "/hizmetlerimiz", label: "Ana hizmet sayfaları" },
          { href: "/servis-bolgeleri/alibeykoy", label: "Alibeyköy Servisi" },
          { href: "/servis-bolgeleri/gaziosmanpasa", label: "Gaziosmanpaşa Servisi" },
        ],
        path,
      ),
    };
  } else if (path === "/hata-kodlari" || path.startsWith("/hata-kodlari/")) {
    block = {
      heading: "Hata kodlarından ilgili sayfalara geçin",
      links: finalizeLinks(
        [
          { href: "/hata-kodlari", label: "Hata kodları ana merkezi" },
          { href: "/ariza-rehberi", label: "Arıza rehberi" },
          { href: "/markalar", label: "Marka servisleri" },
          { href: "/hizmetlerimiz/klima-servisi", label: "Klima Servisi" },
          { href: "/hizmetlerimiz/camasir-makinesi-servisi", label: "Çamaşır Makinesi Servisi" },
        ],
        path,
      ),
    };
  }

  if (!block || block.links.length === 0) return null;

  return block;
}

const BLOG_SEO_LINKS: Record<string, ContextualLink[]> = {
  "klima-bakimi-ne-zaman-yapilmali": [
    { href: "/ariza-rehberi/klima/sogutmuyor", label: "Klima soğutmuyor rehberi" },
    { href: "/servis-bolgeleri/alibeykoy/klima-servisi", label: "Alibeyköy klima servisi" },
    { href: "/hata-kodlari/klima", label: "Klima hata kodları" },
  ],
  "kombi-bakimi-neden-onemlidir": [
    { href: "/ariza-rehberi/kombi/su-akitiyor", label: "Kombi su akıtıyor rehberi" },
    { href: "/servis-bolgeleri/eyupsultan/kombi-servisi", label: "Eyüpsultan kombi servisi" },
  ],
  "buzdolabi-sogutmuyorsa-ne-yapilmali": [
    { href: "/ariza-rehberi", label: "Arıza rehberi" },
    { href: "/markalar/arcelik/buzdolabi-servisi", label: "Arçelik buzdolabı servisi" },
  ],
  "camasir-makinesi-sikma-yapmiyorsa-sebebi-ne-olabilir": [
    { href: "/markalar/bosch/camasir-makinesi-servisi", label: "Bosch çamaşır makinesi servisi" },
    {
      href: "/hata-kodlari/camasir-makinesi/bosch-siemens-profilo/e09",
      label: "Bosch E09 hata kodu",
    },
  ],
  "bulasik-makinesi-neden-koku-yapar": [
    { href: "/ariza-rehberi/bulasik-makinesi/musluk-isareti", label: "Bulaşık makinesi musluk işareti" },
    { href: "/markalar/bosch/bulasik-makinesi-servisi", label: "Bosch bulaşık makinesi servisi" },
  ],
};

const FAULT_GUIDE_BLOG: Record<string, string> = {
  "klima/sogutmuyor": "/blog/klima-bakimi-ne-zaman-yapilmali",
  "kombi/su-akitiyor": "/blog/kombi-bakimi-neden-onemlidir",
};

export function getBlogPostInternalLinks(
  category: BlogCategory,
  currentSlug: string,
): InternalLinksBlock {
  const serviceSlug = BLOG_SERVICE_SLUG[currentSlug] ?? CATEGORY_SERVICE_SLUG[category];
  const service = serviceSlug ? serviceLink(serviceSlug) : null;
  const seoLinks = BLOG_SEO_LINKS[currentSlug] ?? [];

  const links = finalizeLinks(
    [
      ...seoLinks,
      service,
      UTILITY_LINKS.services,
      UTILITY_LINKS.faq,
      UTILITY_LINKS.contact,
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
  currentSlug?: string,
): string | null {
  if (currentSlug && BLOG_SERVICE_SLUG[currentSlug]) {
    return BLOG_SERVICE_SLUG[currentSlug];
  }
  return CATEGORY_SERVICE_SLUG[category] ?? null;
}
