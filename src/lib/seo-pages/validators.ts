import { STRIP_SIMILARITY_PATTERNS } from "./constants";
import { KEYWORD_TO_URL_MAP } from "./keyword-map";
import { getAllSeoPages, getIndexableSeoPages } from "./registry";

export type SeoValidationIssue = {
  level: "red" | "yellow";
  message: string;
  path?: string;
};

const PLACEHOLDER_PATTERNS = [/todo/i, /lorem ipsum/i, /placeholder/i];

export function normalizeBodyForSimilarity(text: string): string {
  let normalized = text.toLocaleLowerCase("tr");
  // alias for internal use
  for (const pattern of STRIP_SIMILARITY_PATTERNS) {
    normalized = normalized.replaceAll(pattern.toLocaleLowerCase("tr"), " ");
  }
  return normalized
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildShingles(text: string, size = 3): Set<string> {
  const words = normalizeBodyForSimilarity(text).split(" ").filter(Boolean);
  if (words.length < size) return new Set(words);
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - size; i += 1) {
    shingles.add(words.slice(i, i + size).join(" "));
  }
  return shingles;
}

export function jaccardSimilarity(a: string, b: string): number {
  const setA = buildShingles(a);
  const setB = buildShingles(b);
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection += 1;
  }
  const union = new Set([...setA, ...setB]).size;
  return intersection / union;
}

export function validateSeoPages(): SeoValidationIssue[] {
  const issues: SeoValidationIssue[] = [];
  const pages = getAllSeoPages();
  const indexable = getIndexableSeoPages();

  const seenCanonical = new Map<string, string>();
  const seenTitle = new Map<string, string>();
  const seenDescription = new Map<string, string>();
  const seenFocusKeyphrase = new Map<string, string>();
  const seenKeywordQuery = new Map<string, string>();
  const knownPaths = new Set(pages.map((page) => page.canonicalPath));
  const allowedStaticPaths = new Set([
    "/",
    "/hizmetlerimiz",
    "/blog",
    "/iletisim",
    "/sss",
    "/hakkimizda",
  ]);

  for (const page of pages) {
    if (!page.title) {
      issues.push({ level: "red", message: "Eksik title", path: page.canonicalPath });
    }
    if (!page.metaDescription) {
      issues.push({
        level: "red",
        message: "Eksik meta description",
        path: page.canonicalPath,
      });
    }
    if (!page.h1) {
      issues.push({ level: "red", message: "Eksik H1", path: page.canonicalPath });
    }

    if (seenCanonical.has(page.canonicalPath)) {
      issues.push({
        level: "red",
        message: `Duplicate canonical: ${page.canonicalPath}`,
        path: page.canonicalPath,
      });
    } else {
      seenCanonical.set(page.canonicalPath, page.slug);
    }

    if (seenTitle.has(page.seoTitle)) {
      issues.push({
        level: "red",
        message: `Duplicate SEO title: ${page.seoTitle}`,
        path: page.canonicalPath,
      });
    } else {
      seenTitle.set(page.seoTitle, page.canonicalPath);
    }

    if (seenDescription.has(page.metaDescription)) {
      issues.push({
        level: "yellow",
        message: `Duplicate meta description: ${page.metaDescription}`,
        path: page.canonicalPath,
      });
    } else {
      seenDescription.set(page.metaDescription, page.canonicalPath);
    }

    const normalizedFocus = page.focusKeyphrase.toLocaleLowerCase("tr").trim();
    if (normalizedFocus) {
      if (seenFocusKeyphrase.has(normalizedFocus)) {
        issues.push({
          level: "red",
          message: `Focus keyphrase çakışması: ${page.focusKeyphrase}`,
          path: page.canonicalPath,
        });
      } else {
        seenFocusKeyphrase.set(normalizedFocus, page.canonicalPath);
      }
    }

    const combinedText = [page.h1, page.intro, ...page.sections.map((section) => section.body)].join(
      " ",
    );
    if (PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(combinedText))) {
      issues.push({
        level: "red",
        message: "Placeholder veya TODO metni bulundu",
        path: page.canonicalPath,
      });
    }

    if (page.indexable && page.status !== "published") {
      issues.push({
        level: "red",
        message: "Indexlenebilir görünüyor ama published değil",
        path: page.canonicalPath,
      });
    }

    if (!page.indexable && page.status === "published" && page.pageType === "error-code") {
      issues.push({
        level: "red",
        message: "Doğrulanmamış hata kodu publish görünüyor",
        path: page.canonicalPath,
      });
    }

    for (const link of page.internalLinks) {
      const isKnown =
        knownPaths.has(link.href) ||
        allowedStaticPaths.has(link.href) ||
        link.href.startsWith("/hizmetlerimiz/") ||
        link.href.startsWith("/blog/");
      if (!isKnown) {
        issues.push({
          level: "red",
          message: `Kırık iç bağlantı: ${link.href}`,
          path: page.canonicalPath,
        });
      }
    }
  }

  for (const page of indexable) {
    if (!page.intro.toLocaleLowerCase("tr").includes(page.focusKeyphrase.split(" ")[0].toLocaleLowerCase("tr"))) {
      issues.push({
        level: "yellow",
        message: "Focus keyphrase girişte zayıf görünüyor",
        path: page.canonicalPath,
      });
    }
  }

  for (const entry of KEYWORD_TO_URL_MAP) {
    const normalizedQuery = entry.query.toLocaleLowerCase("tr").trim();
    if (seenKeywordQuery.has(normalizedQuery)) {
      issues.push({
        level: "red",
        message: `Keyword map duplicate query: ${entry.query}`,
        path: entry.href,
      });
    } else {
      seenKeywordQuery.set(normalizedQuery, entry.href);
    }

    if (!knownPaths.has(entry.href) && !allowedStaticPaths.has(entry.href) && !entry.href.startsWith("/hizmetlerimiz/") && !entry.href.startsWith("/blog/")) {
      issues.push({
        level: "red",
        message: `Keyword map kırık hedef: ${entry.href}`,
        path: entry.href,
      });
    }
  }

  for (let i = 0; i < indexable.length; i += 1) {
    for (let j = i + 1; j < indexable.length; j += 1) {
      const first = indexable[i];
      const second = indexable[j];
      if (first.pageType !== second.pageType) continue;
      const firstBody = [first.intro, ...first.sections.map((section) => section.body)].join(" ");
      const secondBody = [second.intro, ...second.sections.map((section) => section.body)].join(" ");
      const similarity = jaccardSimilarity(firstBody, secondBody);

      if (similarity >= 0.8) {
        issues.push({
          level: "red",
          message: `Doorway benzerliği kritik seviyede (${Math.round(similarity * 100)}%) -> ${second.canonicalPath}`,
          path: first.canonicalPath,
        });
      } else if (similarity >= 0.65) {
        issues.push({
          level: "yellow",
          message: `İçerik benzerliği yüksek (${Math.round(similarity * 100)}%) -> ${second.canonicalPath}`,
          path: first.canonicalPath,
        });
      }
    }
  }

  return issues;
}
