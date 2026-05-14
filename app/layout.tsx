import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purside | The Finance Operations Engine for Scale",
  description: "Modern payment orchestration and intelligent financial workflows for businesses moving money at scale. Programmable, auditable, and compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}

