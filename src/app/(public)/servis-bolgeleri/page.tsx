import Link from "next/link";
import { SeoPageTemplate } from "@/components/seo-pages/SeoPageTemplate";
import { Section } from "@/components/ui/Section";
import {
  buildCollectionPageJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildRegionHubPage, PRIORITY_REGION_SLUGS, REGION_SEEDS } from "@/lib/seo-pages";

const page = buildRegionHubPage();
const priorityRegions = REGION_SEEDS.filter((item) =>
  PRIORITY_REGION_SLUGS.includes(item.slug as (typeof PRIORITY_REGION_SLUGS)[number]),
);
const europe = REGION_SEEDS.filter(
  (item) => item.continentSide === "Avrupa Yakası" && item.slug !== "alibeykoy",
);
const anatolia = REGION_SEEDS.filter((item) => item.continentSide === "Anadolu Yakası");
const alibeykoy = REGION_SEEDS.find((item) => item.slug === "alibeykoy");

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.metaDescription,
  path: page.canonicalPath,
});

function RegionGrid({
  title,
  items,
}: {
  title: string;
  items: { slug: string; name: string }[];
}) {
  return (
    <Section title={title} centered={false}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/servis-bolgeleri/${item.slug}`}
            className="rounded-2xl border border-outline-variant/40 bg-surface p-4 text-body-md text-primary hover:border-primary/30 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default function RegionHubPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Servis Bölgeleri" },
      ]}
      jsonLd={buildCollectionPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: page.canonicalPath,
      })}
      extraTop={
        <>
          <Section title="Öncelikli servis bölgeleri" subtitle="En sık talep gelen dört bölge ve Alibeyköy semti" centered={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {priorityRegions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/servis-bolgeleri/${region.slug}`}
                  className="rounded-3xl border border-outline-variant/40 bg-surface p-5 shadow-premium-sm hover:border-primary/20"
                >
                  <div className="text-headline-sm font-headline-sm text-primary">{region.name}</div>
                  <p className="text-body-md text-on-surface-variant mt-2">{region.continentSide}</p>
                </Link>
              ))}
            </div>
          </Section>
          {alibeykoy && <RegionGrid title="Alibeyköy özel hizmet alanı" items={[alibeykoy]} />}
          <RegionGrid title="Avrupa Yakası ilçeleri" items={europe} />
          <RegionGrid title="Anadolu Yakası ilçeleri" items={anatolia} />
        </>
      }
    />
  );
}
