import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "DataPlatform — Automate Everything. Scale Without Limits.",
  description: "The AI-native data platform that turns complex workflows into competitive advantage.",
  alternates: {
    canonical: "https://dataplatform1.vercel.app",
  },
  openGraph: {
    title: "DataPlatform — Automate Everything. Scale Without Limits.",
    description: "The AI-native data platform that turns complex workflows into competitive advantage.",
    url: "https://dataplatform1.vercel.app",
    type: "website",
    images: [
      {
        url: "https://example.com/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-oceanic-noir text-arctic font-inter antialiased">
        {children}
        {/* JSON-LD for SoftwareApplication schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Pricing App",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "29",
                "highPrice": "199",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
