import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de consumo del coche",
  description:
    "Calcula el consumo de tu coche en litros por cada 100 km. Introduce los kilómetros recorridos y los litros utilizados y obtén el resultado al instante.",
};

export default function ConsumoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}