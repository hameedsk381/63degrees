import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reserve your table at 63° Modern Regional Buffet in Gachibowli, Hyderabad. Call +91 97333 86333 or book online for the best buffet experience.",
  openGraph: {
    title: "Contact 63° Modern Regional Buffet | Reserve Your Table",
    description:
      "Book your table at Hyderabad's #1 buffet. Call +91 97333 86333 or reserve online at 63° Modern Regional Buffet, Gachibowli.",
  },
  alternates: {
    canonical: "https://63degrees.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
