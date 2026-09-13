import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBookBar from "@/components/StickyBookBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoxyClean | Professional Cleaning in State College, PA",
  description:
    "CoxyClean provides Airbnb turnover, residential, commercial, and move-out cleaning in State College, PA and the surrounding area. Book your free quote today.",
};

export const viewport: Viewport = {
  themeColor: "#141e38",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
