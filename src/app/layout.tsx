import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://honeypotmedia.com"),
  title: "Honey Pot Media | Tampa Social Media Management & Content Creation",
  description:
    "Honey Pot Media is a boutique social media management and content creation studio in Tampa, FL. We help lifestyle brands build authentic communities and scroll-stopping content.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Honey Pot Media | Tampa Social Media Management & Content Creation",
    description:
      "Boutique social media management and content creation for lifestyle brands in Tampa, FL.",
    url: "https://honeypotmedia.com",
    siteName: "Honey Pot Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Honey Pot Media — Tampa Social Media Management & Content Creation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Pot Media | Tampa Social Media Management & Content Creation",
    description:
      "Boutique social media management and content creation for lifestyle brands in Tampa, FL.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://honeypotmedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <LocalBusinessSchema />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
