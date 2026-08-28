import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
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
              <ShieldCheck className="h-7 w-7" strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Información legal
              </p>

              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Política de privacidad
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
                1. Información general
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                CalculaTodo es un sitio web que ofrece calculadoras
                online gratuitas para realizar diferentes tipos de
                cálculos de forma sencilla y rápida.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Datos personales
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Actualmente, CalculaTodo no requiere que los usuarios
                creen una cuenta ni proporcionen datos personales para
                utilizar sus calculadoras.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Datos de navegación
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                El sitio puede utilizar servicios de terceros para
                analizar el tráfico y mejorar la experiencia del
                usuario. Estos servicios pueden recopilar determinada
                información técnica y de navegación de acuerdo con sus
                propias políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Publicidad
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                CalculaTodo puede mostrar publicidad proporcionada por
                terceros. Estos proveedores pueden utilizar cookies u
                otras tecnologías para mostrar anuncios relevantes para
                los usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Contacto
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Si tienes alguna pregunta relacionada con esta política
                de privacidad, puedes ponerte en contacto con el
                responsable del sitio web.
              </p>
            </section>
          </div>

          {/* Aviso */}
          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Esta página contiene información general sobre el
              funcionamiento actual de CalculaTodo. La política se
              actualizará cuando se incorporen nuevos servicios,
              herramientas de análisis o publicidad.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}