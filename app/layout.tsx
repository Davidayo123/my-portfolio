import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David | AI Engineer — Portfolio",
  description:
    "Architecting intelligent systems, optimizing energy grids, and building full-stack retrieval-augmented generation pipelines.",
  keywords: ["AI Engineer", "Machine Learning", "Full Stack", "Portfolio", "David"],
  openGraph: {
    title: "David | AI Engineer",
    description:
      "Architecting intelligent systems, optimizing energy grids, and building full-stack RAG pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
