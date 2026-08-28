import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de coste de viaje en coche",
  description:
    "Calcula cuánto cuesta un viaje en coche según la distancia, el consumo y el precio del combustible.",
};

export default function CosteViajeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}