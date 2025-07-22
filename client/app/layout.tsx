// app/(main)/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

// === METADATA ===
export const metadata: Metadata = {
  metadataBase: new URL("https://expressocoffee.com.np"),
  title: {
    default: "Espresso Organic Coffee House",
    template: "%s | Espresso Organic Coffee",
  },
  description:
    "Best Barista Training School in Nepal. Brewed with Passion. Served with Purpose.",
  openGraph: {
    title: "Espresso Organic Coffee House",
    description:
      "Rooted in craft and community. Learn, brew, and serve the perfect cup.",
    url: "https://expressocoffee.com.np",
    siteName: "Espresso Organic Coffee",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espresso Organic Coffee House",
    description: "Crafted barista courses and premium organic blends in Nepal.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MBXQP4RS');
            `,
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T74D39NLP7"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T74D39NLP7');
            `,
          }}
        />
      </head>

      <body
        className={` antialiased  bg-[color:var(--color-background)] text-[color:var(--color-foreground)]`}
      >
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBXQP4RS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
