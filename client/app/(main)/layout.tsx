import type { Metadata } from "next";
import ".././globals.css";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Load Google Font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// Load Reporter Font (local)
const reporter = localFont({
  src: "../../public/font/reporter/reportr.ttf",
  variable: "--font-reporter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espresso Organic Coffee",
  description: "Brewed with Passion. Served with Purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${reporter.variable} antialiased bg-[color:var(--color-background)] text-[color:var(--color-foreground)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
