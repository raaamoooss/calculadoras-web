import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculatodo.com"),

  title: {
    default: "CalculaTodo - Calculadoras online gratuitas",
    template: "%s | CalculaTodo",
  },

  description:
    "Calculadoras online gratuitas para coche, estudios, dinero y mucho más. Calcula de forma rápida, sencilla y sin registrarte.",

  keywords: [
    "calculadoras online",
    "calculadora",
    "calculadoras gratuitas",
    "calculadora de notas",
    "calculadora de ahorro",
    "calculadora coche",
  ],

  authors: [{ name: "CalculaTodo" }],

  creator: "CalculaTodo",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CalculaTodo - Calculadoras online gratuitas",
    description:
      "Calculadoras online gratuitas para coche, estudios, dinero y mucho más.",
    type: "website",
    locale: "es_ES",
    siteName: "CalculaTodo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}