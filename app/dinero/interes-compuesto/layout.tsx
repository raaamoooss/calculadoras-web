import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de interés compuesto",
  description:
    "Calcula cuánto crecerá tu dinero con el interés compuesto según la inversión inicial, las aportaciones, el tipo de interés y el tiempo.",
};

export default function InteresCompuestoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}