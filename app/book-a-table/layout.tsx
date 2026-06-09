import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table | 63° Modern Regional Buffet",
  description: "Reserve your table at 63° Modern Regional Buffet in Gachibowli, Hyderabad. Book online for the ultimate buffet experience with 250+ dishes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
