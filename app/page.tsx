import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/lib/calculadoras";
import {
  CarFront,
  GraduationCap,
  WalletCards,
  ArrowRight,
  Calculator,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Coche y viajes",
    icon: CarFront,
    description:
      "Calcula costes, consumos y gastos de tus viajes de forma rápida.",
    category: "coche",
    iconStyle: "bg-orange-50 text-orange-600",
  },
  {
    title: "Estudios",
    icon: GraduationCap,
    description:
      "Calcula tus notas, medias y objetivos académicos fácilmente.",
    category: "estudios",
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    title: "Dinero",
    icon: WalletCards,
    description:
      "Calcula ahorros, intereses y otros aspectos financieros.",
    category: "dinero",
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-30 blur-3xl">
          <div className="h-[350px] w-[600px] bg-gradient-to-tr from-blue-600 to-indigo-400 [clip-path:ellipse(50%_50%_at_50%_50%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <Sparkles className="h-4 w-4" />
            <span>
              {tools.length} calculadoras gratuitas y sin registro
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Calcula lo que necesites,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              en segundos.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-xl">
            Herramientas sencillas, rápidas y 100% gratuitas para
            resolver tus cálculos de estudios, viajes, dinero y mucho
            más.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#categorias"
              className="w-full rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/35 active:scale-95 sm:w-auto"
            >
              Explorar calculadoras
            </a>

            <a
              href="#sobre"
              className="w-full rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/30 active:scale-95 sm:w-auto"
            >
              ¿Qué es CalculaTodo?
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Categorías
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              ¿Qué quieres calcular hoy?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              Selecciona un área para encontrar rápidamente la
              herramienta que necesitas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category) => {
              const categoryTools = tools.filter(
                (tool) => tool.category === category.category
              );

              const Icon = category.icon;

              return (
                <div
                  key={category.category}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.iconStyle} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                        {categoryTools.length}{" "}
                        {categoryTools.length === 1
                          ? "opción"
                          : "opciones"}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {category.description}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      {categoryTools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={tool.href}
                          className="group/item flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <span className="flex items-center gap-3">
                            <Calculator className="h-4 w-4 text-slate-400 group-hover/item:text-blue-500" />
                            <span>{tool.title}</span>
                          </span>

                          <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover/item:translate-x-1 group-hover/item:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${category.category}`}
                    className="mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Ver todas las calculadoras</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200/80 bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 text-center sm:grid-cols-3">
          <div className="space-y-1">
            <p className="text-4xl font-extrabold tracking-tight text-slate-900">
              {tools.length}
            </p>
            <p className="text-sm font-medium text-slate-500">
              Calculadoras activas
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-4xl font-extrabold tracking-tight text-blue-600">
              100%
            </p>
            <p className="text-sm font-medium text-slate-500">
              Gratis
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-4xl font-extrabold tracking-tight text-slate-900">
              0
            </p>
            <p className="text-sm font-medium text-slate-500">
              Registros necesarios
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="sobre"
        className="relative overflow-hidden bg-blue-50/30 py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="rounded-full bg-blue-100/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Filosofía
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cálculos sencillos y directos al grano
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              En <strong>CalculaTodo</strong> eliminamos lo
              innecesario. Diseñamos herramientas limpias para
              responder a tus dudas cotidianas de manera rápida y
              transparente.
            </p>

            <div className="mt-10">
              <a
                href="#categorias"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95"
              >
                <span>Empezar a calcular</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}