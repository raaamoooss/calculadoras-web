import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de media ponderada",
  description:
    "Calcula tu media ponderada fácilmente introduciendo tus notas y el peso de cada asignatura, examen o evaluación.",
};

export default function MediaPonderadaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}