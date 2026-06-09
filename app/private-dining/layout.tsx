import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining | 63° Modern Regional Buffet",
  description: "Host exclusive private dining events at 63° Modern Regional Buffet in Gachibowli, Hyderabad. Elegant spaces for celebrations and corporate gatherings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
