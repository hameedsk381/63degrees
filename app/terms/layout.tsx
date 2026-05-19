import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://63degrees.in/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
