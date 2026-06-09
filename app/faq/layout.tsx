import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | 63° Modern Regional Buffet",
  description: "Frequently asked questions about 63° Modern Regional Buffet in Gachibowli, Hyderabad. Buffet timings, pricing, reservations, menu, parking and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
