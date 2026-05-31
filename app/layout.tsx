import type { Metadata } from "next";
import { Jost, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import PreLoader from "@/components/PreLoader";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://63degrees.in"),
  title: {
    default: "63° Modern Regional Buffet | The Baap of Buffets in Hyderabad",
    template: "%s | 63° Modern Regional Buffet",
  },
  description:
    "Experience 250+ dishes at 63°, Hyderabad's ultimate modern regional buffet. Enjoy delicious & authentic regional cuisine — biryanis, live counters, desserts & more at Gachibowli.",
  keywords: "buffet hyderabad, regional buffet, 63 degrees, gachibowli restaurant, best buffet hyderabad, 63degree, 63buffet, white elephant food works",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "63° Modern Regional Buffet | The Baap of Buffets in Hyderabad",
    description: "250+ dishes of authentic regional cuisine. Live counters, biryanis, desserts & more at Gachibowli, Hyderabad.",
    type: "website",
    locale: "en_IN",
    siteName: "63Buffet",
    images: [{ url: "/og-image.png", width: 300, height: 300 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "63° Modern Regional Buffet | The Baap of Buffets in Hyderabad",
    description: "250+ dishes of authentic regional cuisine. Live counters, biryanis, desserts & more at Gachibowli, Hyderabad.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://63degrees.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${playfair.variable} ${bebasNeue.variable}`}>
      <body className="antialiased bg-brand-linen font-body">
        <JsonLd />
        <Analytics />
        <PreLoader />
        <WhatsAppButton />
        <CustomCursor />
        <SmoothScroller />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
