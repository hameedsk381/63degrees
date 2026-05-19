import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about 63° Modern Regional Buffet — pricing, timings, menu, parking, kids policy, vegetarian options, group bookings, events, and more.",
  openGraph: {
    title: "FAQ | 63° Modern Regional Buffet Hyderabad",
    description:
      "All you need to know about Hyderabad's ultimate buffet — pricing, timings, menu, parking, kids policy, vegetarian & Jain options, group bookings, and more.",
  },
  alternates: {
    canonical: "https://63degrees.in/faq",
  },
};
export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
