// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "./nprogress.css";
import { ProgressBarProvider } from "./providers";

export const metadata: Metadata = {
  title: "Espresso Organic Coffee House",
  description: "Serving simplicity and organic excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
