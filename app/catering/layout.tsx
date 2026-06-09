import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Services | 63° Modern Regional Buffet",
  description: "Book 63° Modern Regional Buffet for your corporate events, weddings, and celebrations in Hyderabad. Customized catering menus for every occasion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
