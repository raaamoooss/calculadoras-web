import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de nota media",
  description:
    "Calcula tu nota media de forma rápida y sencilla a partir de tus calificaciones.",
};

export default function NotaMediaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}