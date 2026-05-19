import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Service",
  description:
    "Book catering for your events at 63° Modern Regional Buffet, Hyderabad. Perfect for birthdays, corporate events, weddings, and private parties with 250+ dishes.",
  openGraph: {
    title: "Catering Service | 63° Modern Regional Buffet Hyderabad",
    description:
      "Let 63° cater your next event in Hyderabad. 250+ dishes, professional service, and customised menus for birthdays, corporate events, and celebrations.",
  },
  alternates: {
    canonical: "https://63degrees.in/catering",
  },
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
