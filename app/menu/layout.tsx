import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore 250+ dishes at 63° Modern Regional Buffet in Hyderabad. View our full buffet menu including biryanis, starters, live counters, Chinese, desserts, and more.",
  openGraph: {
    title: "Buffet Menu | 63° Modern Regional Buffet Hyderabad",
    description:
      "Browse 250+ dishes from our buffet menu — biryanis, starters, live counters, Chinese, desserts & more at Gachibowli, Hyderabad.",
  },
  alternates: {
    canonical: "https://63degrees.in/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
