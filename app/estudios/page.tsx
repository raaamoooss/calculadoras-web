import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/lib/calculadoras";

export default function EstudiosPage() {
  const estudiosTools = tools.filter(
    (tool) => tool.category === "estudios"
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Título */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            🎓 CalculaTodo
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadoras de estudios
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula tus notas, medias y objetivos académicos de forma
            rápida y sencilla.
          </p>
        </div>

        {/* Calculadoras */}
        <div className="grid gap-6 sm:grid-cols-2">
          {estudiosTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                  {tool.emoji}
                </div>

                <div>
                  <h2 className="text-xl font-bold group-hover:text-blue-600">
                    {tool.title}
                  </h2>

                  <p className="mt-2 leading-6 text-gray-600">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-sm font-semibold text-blue-600">
                Utilizar calculadora →
              </div>
            </Link>
          ))}
        </div>

        {/* Información */}
        <article className="mt-16 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            Calculadoras para estudiantes
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            En esta sección encontrarás diferentes herramientas para
            ayudarte a calcular tus notas y planificar tus objetivos
            académicos.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Puedes calcular una media simple, una media ponderada por
            créditos, saber qué nota necesitas para aprobar o estimar
            tu nota final.
          </p>
        </article>

        {/* Volver */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Volver a todas las categorías
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}