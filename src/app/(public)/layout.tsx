import { JsonLd } from "@/components/seo/JsonLd";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { buildLocalBusinessJsonLd } from "@/lib/seo/json-ld";

export default function PublicRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      {children}
    </PublicLayout>
  );
}
