import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Host private events in style at 63° Modern Regional Buffet, Hyderabad. Perfect for birthdays, corporate dinners, anniversaries, family gatherings, and celebrations.",
  openGraph: {
    title: "Private Dining | 63° Modern Regional Buffet Hyderabad",
    description:
      "Book our private dining space in Gachibowli, Hyderabad. Customised menus, dedicated service, and a grand ambiance for your special occasions.",
  },
  alternates: {
    canonical: "https://63degrees.in/private-dining",
  },
};

export default function PrivateDiningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
