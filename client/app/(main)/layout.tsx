// app/(main)/layout.tsx

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const reporter = localFont({
  src: "../../public/font/reporter/reportr.ttf",
  variable: "--font-reporter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Best Barista Training School in Nepal || Espresso Organic Coffee House",
  description: "Brewed with Passion. Served with Purpose.",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${lato.variable} ${reporter.variable} antialiased bg-[color:var(--color-background)] text-[color:var(--color-foreground)] font-lato`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
