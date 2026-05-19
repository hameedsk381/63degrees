import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our photo gallery showcasing 250+ dishes, elegant ambiance, live counters, and the dining experience at 63° Modern Regional Buffet in Gachibowli, Hyderabad.",
  openGraph: {
    title: "Gallery | 63° Modern Regional Buffet Hyderabad",
    description:
      "See photos of our 250+ dish buffet spread, restaurant ambiance, live counters, and desserts at Hyderabad's favourite buffet destination.",
  },
  alternates: {
    canonical: "https://63degrees.in/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
