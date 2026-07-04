import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessJsonLd } from "@/lib/seo/json-ld";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} min-h-screen flex flex-col font-sans`}
      >
        <JsonLd data={buildLocalBusinessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
