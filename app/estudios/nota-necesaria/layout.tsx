import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de nota necesaria",
  description:
    "Calcula qué nota necesitas sacar en tu próximo examen o evaluación para alcanzar la calificación final que quieres.",
};

export default function NotaNecesariaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}