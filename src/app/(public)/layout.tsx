import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAdsTag } from "@/components/analytics/GoogleAdsTag";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { buildLocalBusinessJsonLd } from "@/lib/seo/json-ld";

export default function PublicRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      <GoogleAdsTag />
      <JsonLd data={buildLocalBusinessJsonLd()} />
      {children}
    </PublicLayout>
  );
}
