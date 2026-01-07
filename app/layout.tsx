import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PlacelyAI - Make Confident Real Estate Decisions",
  description:
    "Placely provides unbiased, area-level intelligence to help you understand where to buy and why.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://placelyai.com'),
  openGraph: {
    title: "PlacelyAI - Make Confident Real Estate Decisions",
    description: "Placely provides unbiased, area-level intelligence to help you understand where to buy and why.",
    type: "website",
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/gt-walsheim"
          rel="stylesheet"
        />
        <link rel="preload" href="/assets/Sand-Texture.webp" as="image" type="image/webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-textured text-neutral-900" suppressHydrationWarning>
        <div className="w-full min-h-screen">
          <Header />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

