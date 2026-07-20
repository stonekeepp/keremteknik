export function slugifyTurkish(input: string): string {
  return input
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeErrorCodeSlug(code: string): string {
  return code
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/_/g, "-");
}

export function errorCodeVariants(code: string): string[] {
  const base = code.toUpperCase().replace(/\s+/g, "");
  const slug = normalizeErrorCodeSlug(code);
  const variants = new Set<string>([base, slug]);
  const compact = base.replace(/-/g, "");
  variants.add(compact);
  if (/^E\d+$/.test(compact)) {
    const num = compact.slice(1).replace(/^0+/, "") || "0";
    variants.add(`E${num}`);
    variants.add(`E ${num.padStart(2, "0")}`);
    variants.add(`E-${num.padStart(2, "0")}`);
  }
  return [...variants];
}
