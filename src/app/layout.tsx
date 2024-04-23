import type { Metadata } from "next";
import { sora } from "@/components/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Berrynet - Best Internet Service Provider in Tangerang",
  description: "Internet Unlimited with High Connection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}