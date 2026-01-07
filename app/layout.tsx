import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PlacelyAI - Make Confident Real Estate Decisions",
  description:
    "Placely provides unbiased, area-level intelligence to help you understand where to buy — and why.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/gt-walsheim"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-textured text-neutral-900">
        <div className="w-full min-h-screen">
          <Header />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

