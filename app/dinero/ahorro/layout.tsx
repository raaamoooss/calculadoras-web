import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de ahorro",
  description:
    "Calcula cuánto puedes ahorrar en un periodo de tiempo según tu ahorro inicial y tus aportaciones periódicas.",
};

export default function AhorroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}