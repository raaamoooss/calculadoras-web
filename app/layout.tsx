import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "CalculaTodo | Calculadoras online gratuitas",
    template: "%s | CalculaTodo",
  },
  description:
    "Calculadoras online gratuitas, sencillas y rápidas para estudios, coche, viajes y finanzas.",
  keywords: [
    "calculadoras online",
    "calculadora gratuita",
    "calculadoras",
    "calcular",
    "calculadora coche",
    "calculadora estudios",
    "calculadora financiera",
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LN3dYvjIQpbhiPxmOYY57a-JznrHm8R0LC_Xn5tLp98",
  },
  other: {
    "google-adsense-account": "ca-pub-8667582927950175",
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

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0D0W5X5V97"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0D0W5X5V97');
        `}
      </Script>
    </html>
  );
}