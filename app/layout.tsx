import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { LanguageProvider } from "@/components/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  applicationName: siteConfig.shortTitle,
  category: "Multimedia Tool",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortTitle,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": siteConfig.adSenseClientId || "ca-pub-7298235222437919",
    "msvalidate.01": "C5B8CCF063D86850778DB66387A53E61",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adSenseClientId}`}
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="min-h-screen antialiased selection:bg-blue-500/30 selection:text-white bg-[#09090b] text-[#fafafa]"
        suppressHydrationWarning
      >
        {siteConfig.googleAnalyticsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <JsonLd />
        {/* Background gradient decorative glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-pink-600/8 blur-[120px]" />
        </div>

        {/* Language & Interactive Shell */}
        <LanguageProvider>
          <Navbar />

          <div className="flex min-h-[calc(100vh-60px)] flex-col">
            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
