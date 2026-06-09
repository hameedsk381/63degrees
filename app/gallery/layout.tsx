import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | 63° Modern Regional Buffet",
  description: "Explore the visual journey of 63° Modern Regional Buffet in Gachibowli, Hyderabad. Photos of our grand ambiance, live grills, biryanis, and desserts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
