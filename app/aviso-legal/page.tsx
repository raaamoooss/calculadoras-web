import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Cabecera */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a CalculaTodo
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <FileText className="h-7 w-7" strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Información legal
              </p>

              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Aviso legal
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Última actualización: agosto de 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="px-6 py-12 sm:py-16">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Información del sitio web
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                El presente aviso legal regula el uso del sitio web
                CalculaTodo y de las herramientas y contenidos
                disponibles a través del mismo.
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                <dl className="space-y-3 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row">
                    <dt className="font-semibold text-slate-900 sm:w-40">
                      Nombre:
                    </dt>
                    <dd className="text-slate-600">CalculaTodo</dd>
                  </div>

                  <div className="flex flex-col gap-1 sm:flex-row">
                    <dt className="font-semibold text-slate-900 sm:w-40">
                      Sitio web:
                    </dt>
                    <dd className="text-slate-600">
                      CalculaTodo
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Objeto del sitio web
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                CalculaTodo proporciona herramientas online destinadas
                a realizar diferentes tipos de cálculos de manera
                sencilla y rápida.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Los resultados obtenidos mediante las calculadoras
                tienen carácter meramente informativo y no sustituyen
                el asesoramiento profesional cuando este sea necesario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Uso del sitio web
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                El usuario se compromete a utilizar el sitio web de
                forma adecuada y conforme a la legislación aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Propiedad intelectual
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Los contenidos, diseño, estructura y elementos propios
                del sitio web están protegidos por la normativa
                aplicable en materia de propiedad intelectual e
                industrial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Responsabilidad
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                CalculaTodo procura ofrecer resultados correctos y
                actualizados, pero no garantiza que las herramientas
                estén libres de errores o que los resultados sean
                adecuados para cualquier situación concreta.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                El uso de los resultados obtenidos mediante las
                calculadoras será responsabilidad del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Modificaciones
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                CalculaTodo se reserva el derecho a modificar,
                actualizar o eliminar contenidos y funcionalidades del
                sitio web cuando resulte necesario.
              </p>
            </section>
          </div>

          {/* Aviso */}
          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Este aviso legal es provisional y deberá actualizarse con
              los datos del responsable del sitio antes de publicar
              CalculaTodo de forma definitiva.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}