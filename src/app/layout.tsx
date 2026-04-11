import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MagneticCursor } from "@/components/MagneticCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fruboo.vercel.app'),
  title: {
    default: "FRUBOO | Freshness, redefined.",
    template: "%s | FRUBOO",
  },
  description: "sip | eat | feel. A completely new way to enjoy freshness. Experience the ultimate premium beverage.",
  keywords: ["Fruboo", "freshness", "beverage", "premium drink", "drink", "healthy", "natural"],
  authors: [{ name: "Fruboo Team" }],
  openGraph: {
    title: "FRUBOO | Freshness, redefined.",
    description: "sip | eat | feel. A completely new way to enjoy freshness.",
    url: "/",
    siteName: "FRUBOO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fruboo - Freshness, redefined",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRUBOO | Freshness, redefined.",
    description: "sip | eat | feel. A completely new way to enjoy freshness.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <MagneticCursor />
        <FloatingWhatsApp />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
