import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | 63° Modern Regional Buffet",
  description: "Get in touch with 63° Modern Regional Buffet in Gachibowli, Hyderabad. Call +91 9733386333 or visit us at Mindspace Road for the ultimate buffet experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
