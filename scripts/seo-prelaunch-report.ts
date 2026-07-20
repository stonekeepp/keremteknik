import { writeFileSync } from "node:fs";
import { ALL_ERROR_CODE_SEEDS } from "../src/lib/seo-pages/error-codes";
import { getAllSeoPages, getIndexableSeoPages } from "../src/lib/seo-pages/registry";
import { jaccardSimilarity } from "../src/lib/seo-pages/validators";
import type { SeoPageRecord } from "../src/lib/seo-pages/types";

function pageBody(page: SeoPageRecord): string {
  return [page.intro, ...page.sections.map((section) => section.body)].join(" ");
}

function run() {
  const indexable = getIndexableSeoPages();
  const all = getAllSeoPages();

  console.log("=== INDEXABLE URL INVENTORY ===");
  console.log("URL\tpageType\ttitle\tcanonical\tstatus\tindexable");
  for (const page of indexable) {
    console.log(
      `${page.canonicalPath}\t${page.pageType}\t${page.title}\t${page.canonicalPath}\t${page.status}\t${page.indexable}`,
    );
  }
  console.log(`\nTotal indexable: ${indexable.length} / all: ${all.length}`);

  const byType = indexable.reduce<Record<string, number>>((acc, page) => {
    acc[page.pageType] = (acc[page.pageType] ?? 0) + 1;
    return acc;
  }, {});
  console.log("\nBy pageType:", JSON.stringify(byType, null, 2));

  console.log("\n=== REGION SIMILARITY (>=65%) ===");
  const regions = indexable.filter((page) => page.pageType === "region");
  const regionPairs: { a: string; b: string; score: number }[] = [];
  for (let i = 0; i < regions.length; i += 1) {
    for (let j = i + 1; j < regions.length; j += 1) {
      const score = jaccardSimilarity(pageBody(regions[i]), pageBody(regions[j]));
      if (score >= 0.65) {
        regionPairs.push({
          a: regions[i].canonicalPath,
          b: regions[j].canonicalPath,
          score: Math.round(score * 100),
        });
      }
    }
  }
  regionPairs.sort((a, b) => b.score - a.score);
  for (const pair of regionPairs) {
    console.log(`${pair.score}% ${pair.a} <-> ${pair.b}`);
  }
  console.log(`Region pairs >=65%: ${regionPairs.length}`);

  console.log("\n=== BRAND SERVICE SIMILARITY (>=65%) ===");
  const brandPages = indexable.filter((page) => page.pageType === "brand-service");
  let brandPairCount = 0;
  for (let i = 0; i < brandPages.length; i += 1) {
    for (let j = i + 1; j < brandPages.length; j += 1) {
      const score = jaccardSimilarity(pageBody(brandPages[i]), pageBody(brandPages[j]));
      if (score >= 0.65) {
        brandPairCount += 1;
        console.log(
          `${Math.round(score * 100)}% ${brandPages[i].canonicalPath} <-> ${brandPages[j].canonicalPath}`,
        );
      }
    }
  }
  console.log(`Brand-service pairs >=65%: ${brandPairCount}`);

  console.log("\n=== ERROR CODE VERIFICATION ===");
  const verified = ALL_ERROR_CODE_SEEDS.filter((s) => s.verificationStatus === "verified");
  const draft = ALL_ERROR_CODE_SEEDS.filter((s) => s.verificationStatus !== "verified");
  console.log(`Verified: ${verified.length}`);
  for (const seed of verified) {
    console.log(
      `  ${seed.deviceSlug}/${seed.brandGroupSlug}/${seed.codeSlug} — ${seed.meaning.slice(0, 80)}...`,
    );
  }
  console.log(`Draft/unverified: ${draft.length}`);
  for (const seed of draft) {
    console.log(`  ${seed.brandGroupTitle} ${seed.code} — kaynak yetersiz veya model varyasyonu`);
  }

  writeFileSync(
    "seo-prelaunch-report.json",
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        indexableCount: indexable.length,
        allCount: all.length,
        byType,
        indexableUrls: indexable.map((page) => ({
          url: page.canonicalPath,
          pageType: page.pageType,
          title: page.title,
          canonical: page.canonicalPath,
          status: page.status,
          indexable: page.indexable,
        })),
        regionSimilarityPairs: regionPairs,
        verifiedCodes: verified.length,
        draftCodes: draft.length,
      },
      null,
      2,
    ),
  );
  console.log("\nWrote seo-prelaunch-report.json");
}

run();
