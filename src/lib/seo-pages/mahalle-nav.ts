import {
  EYUPSULTAN_MAHALLE_SEEDS,
  EYUPSULTAN_SPOKE_REDIRECTS,
  MAHALLE_GROUP_LABELS,
  type MahalleSeed,
} from "./eyupsultan-mahalle-seed";

const MAHALLE_BY_SLUG = new Map(
  EYUPSULTAN_MAHALLE_SEEDS.map((seed) => [seed.slug, seed]),
);

const MAHALLE_BY_NAME = new Map(
  EYUPSULTAN_MAHALLE_SEEDS.map((seed) => [seed.name, seed]),
);

export function getMahalleSeed(slug: string): MahalleSeed | undefined {
  return MAHALLE_BY_SLUG.get(slug);
}

export function getMahalleHrefForNeighborhood(name: string): string | null {
  const spoke = EYUPSULTAN_SPOKE_REDIRECTS[name];
  if (spoke) return spoke;

  const seed = MAHALLE_BY_NAME.get(name);
  if (seed) return `/servis-bolgeleri/eyupsultan/${seed.slug}`;

  return null;
}

export function getMahalleCanonicalPath(slug: string): string {
  return `/servis-bolgeleri/eyupsultan/${slug}`;
}

export function getMahalleStaticParams(): { mahalle: string }[] {
  return EYUPSULTAN_MAHALLE_SEEDS.map((seed) => ({ mahalle: seed.slug }));
}

export function getMahalleSeedsByGroup(): {
  group: MahalleSeed["group"];
  label: string;
  items: MahalleSeed[];
}[] {
  const order: MahalleSeed["group"][] = [
    "merkez-rami",
    "alibeykoy-band",
    "tarihi",
    "kuzey",
    "gokturk-yakini",
    "bati",
    "ofis-yakini",
  ];
  return order
    .map((group) => ({
      group,
      label: MAHALLE_GROUP_LABELS[group],
      items: EYUPSULTAN_MAHALLE_SEEDS.filter((s) => s.group === group),
    }))
    .filter((entry) => entry.items.length > 0);
}
