import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Regla de Tres",
  description:
    "Calculadora de regla de tres directa e inversa. Calcula fácilmente el valor que falta introduciendo tres valores.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}