import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kerem Teknik Servis",
    template: "%s | Kerem Teknik Servis",
  },
  description:
    "Kerem Teknik Servis; klima, kombi ve beyaz eşya arızaları için hızlı, güvenilir ve profesyonel teknik servis hizmeti sunar.",
};

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
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
