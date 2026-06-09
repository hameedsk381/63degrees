import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | 63° Modern Regional Buffet",
  description: "Explore 250+ dishes at 63° Modern Regional Buffet in Gachibowli, Hyderabad. Live grills, biryanis, starters, desserts, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
