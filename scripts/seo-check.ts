import { KEYWORD_TO_URL_MAP, validateSeoPages } from "../src/lib/seo-pages";

function run() {
  const issues = validateSeoPages();
  const red = issues.filter((item) => item.level === "red");
  const yellow = issues.filter((item) => item.level === "yellow");

  console.log(`SEO pages checked. Queries mapped: ${KEYWORD_TO_URL_MAP.length}`);
  console.log(`Red: ${red.length}`);
  console.log(`Yellow: ${yellow.length}`);

  for (const issue of issues) {
    console.log(`[${issue.level.toUpperCase()}] ${issue.path ?? "-"} :: ${issue.message}`);
  }

  if (red.length > 0) {
    process.exitCode = 1;
  }
}

run();
