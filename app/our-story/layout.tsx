import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | 63° Modern Regional Buffet",
  description: "Discover the story behind 63° Modern Regional Buffet — Hyderabad's ultimate buffet destination. The vision of White Elephant Food Works.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
