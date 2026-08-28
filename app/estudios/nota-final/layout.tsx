import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de nota final",
  description:
    "Calcula tu nota final a partir de tus calificaciones y sus porcentajes. Averigua fácilmente cuál será tu nota media.",
};

export default function NotaFinalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}