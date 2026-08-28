import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de coste por kilómetro",
  description:
    "Calcula cuánto cuesta cada kilómetro que recorres en coche según el consumo y el precio del combustible.",
};

export default function CosteKmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}