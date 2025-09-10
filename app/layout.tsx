import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.metaDescription,
  keywords: site.keywords,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.metaDescription,
    url: `https://${site.domain}`,
    siteName: site.name,
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    title: `${site.name} — ${site.tagline}`,
    description: site.metaDescription,
    images: ["/og.png"],
  },
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
