import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientInitializer from "@/components/ClientInitializer";

export const metadata: Metadata = {
  title: "Rozdi Agency || Enterprise-Grade Technology & Marketing",
  description: "Rozdi helps businesses outsource world-class technology, AI automation, and marketing services at an affordable cost without the burden of building expensive in-house teams.",
  keywords: ["Rozdi", "Rozdi Agency", "Outsource Technology", "AI Automation", "Web Development", "Ecommerce Development", "SEO Services", "Google Ads", "Facebook Ads", "Growth Strategy"],
  authors: [{ name: "Rozdi Agency" }],
  openGraph: {
    type: "website",
    url: "https://rozdi.agency",
    title: "Rozdi Agency - Outsource Enterprise Technology & Marketing",
    description: "Rozdi combining technology, AI, automation, and marketing into one powerful ecosystem to help businesses grow smarter while reducing operational costs.",
    images: [
      {
        url: "https://images.prismic.io/staticmania/aPD-K55xUNkB2D2X_og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rozdi Agency - Outsource Enterprise Technology & Marketing",
      },
    ],
    siteName: "Rozdi Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozdi Agency || Enterprise-Grade Technology & Marketing",
    description: "Rozdi helps businesses outsource world-class technology, AI automation, and marketing services at an affordable cost.",
    images: ["https://images.prismic.io/staticmania/aPD-K55xUNkB2D2X_og-image.jpg"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..600&family=Instrument+Serif:wght@400..600&family=Inter+Tight:wght@300..600&family=Manrope:wght@300..600&family=Sora:wght@300..600&family=Space+Grotesk:wght@300..600&family=IBM+Plex+Mono:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ClientInitializer />
        <Header />
        {children}
        <Footer />
        
        {/* Vendor Scripts */}
        <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/scroll-trigger.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/vanilla-infinite-marquee.min.js" strategy="lazyOnload" />
        <Script src="/vendor/split-text.min.js" strategy="lazyOnload" />
        <Script src="/vendor/lenis.min.js" strategy="lazyOnload" />
        <Script src="/vendor/springer.min.js" strategy="lazyOnload" />
        <Script src="/vendor/number-counter.js" strategy="lazyOnload" />
        <Script src="/vendor/stack-card.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
