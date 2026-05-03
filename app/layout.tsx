import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Great_Vibes } from "next/font/google";

import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

export const metadata = {
  title: "Tarun & Vineela Wedding",
  description: "Join us for the wedding celebration of Tharun & Vineela",
  verification: {
    google: "NRYfxebAeiv6cFQMMvJhYuWa_F_DYRWNxr32qXiQUjk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
