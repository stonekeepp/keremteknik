const TR_MAP: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

export function slugifyTitle(title: string): string {
  let slug = title.trim();

  slug = slug
    .split("")
    .map((char) => TR_MAP[char] ?? char)
    .join("");

  slug = slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || "yazi";
}

export function ensureUniqueSlug(
  slug: string,
  existingSlugs: string[],
  excludeSlug?: string,
): string {
  const filtered = existingSlugs.filter((s) => s !== excludeSlug);
  if (!filtered.includes(slug)) return slug;

  let counter = 2;
  let candidate = `${slug}-${counter}`;
  while (filtered.includes(candidate)) {
    counter += 1;
    candidate = `${slug}-${counter}`;
  }
  return candidate;
}
