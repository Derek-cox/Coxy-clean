import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Coxy Clean | Professional Cleaning in State College, PA",
  description:
    "Coxy Clean provides Airbnb turnover, residential, commercial, and move-out cleaning in State College, PA and the surrounding area. Book your free quote today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBookButton />
      </body>
    </html>
  );
}
