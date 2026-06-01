import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Reserve your table at 63° Modern Regional Buffet, Hyderabad. Choose your meal, date, time, and guest count for your buffet experience.",
  openGraph: {
    title: "Book a Table | 63° Modern Regional Buffet Hyderabad",
    description:
      "Book your table at 63° in Gachibowli, Hyderabad. Enjoy 250+ dishes with our easy online reservation system.",
  },
  alternates: {
    canonical: "https://63degrees.in/book-a-table",
  },
};

export default function BookATableLayout({ children }: { children: React.ReactNode }) {
  return children;
}
