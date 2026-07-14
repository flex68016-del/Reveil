import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flambeau du Réveil",
  description: "Flambeau du Réveil - Une plateforme dédiée à la diffusion de la parole de Dieu, des enseignements et des ressources spirituelles.",
  metadataBase: new URL("https://flambeaureveil.vercel.app"),
  openGraph: {
    title: "Flambeau du Réveil",
    description: "Flambeau du Réveil - Une plateforme dédiée à la diffusion de la parole de Dieu, des enseignements et des ressources spirituelles.",
    type: "website",
    locale: "fr_FR",
    url: "https://flambeaureveil.vercel.app",
    images: [
      {
        url: "https://flambeaureveil.vercel.app/images/home/hero-flambeau.jpg",
        width: 1200,
        height: 630,
        alt: "Flambeau du Réveil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flambeau du Réveil",
    description: "Flambeau du Réveil - Une plateforme dédiée à la diffusion de la parole de Dieu, des enseignements et des ressources spirituelles.",
    images: ["https://flambeaureveil.vercel.app/images/home/hero-flambeau.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
