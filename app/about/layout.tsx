import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 63° Modern Regional Buffet",
  description: "Learn about 63° Modern Regional Buffet — Hyderabad's premier buffet destination at Gachibowli. Passion for food, fresh ingredients, and guest-first philosophy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
