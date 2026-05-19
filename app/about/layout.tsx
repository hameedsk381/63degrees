import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 63° Modern Regional Buffet — the Baap of Buffets in Hyderabad. Discover our story, journey, and what makes us Hyderabad's #1 buffet destination with 250+ dishes.",
  openGraph: {
    title: "About 63° Modern Regional Buffet | The Baap of Buffets",
    description:
      "Discover the story behind Hyderabad's #1 buffet — 250+ dishes, live counters, and authentic regional cuisine at Gachibowli.",
  },
  alternates: {
    canonical: "https://63degrees.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
