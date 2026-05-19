import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind 63° Modern Regional Buffet — how our passion for regional Indian cuisine created Hyderabad's ultimate buffet experience with 250+ dishes.",
  openGraph: {
    title: "Our Story | 63° Modern Regional Buffet Hyderabad",
    description:
      "From a love for food to Hyderabad's #1 buffet — the journey of 63° Modern Regional Buffet. 250+ dishes, one incredible story.",
  },
  alternates: {
    canonical: "https://63degrees.in/our-story",
  },
};

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
