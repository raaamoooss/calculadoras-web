import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de coste de combustible",
  description:
    "Calcula cuánto te cuesta el combustible de un viaje según la distancia, el consumo de tu coche y el precio del combustible.",
};

export default function CosteCombustibleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}