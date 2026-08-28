"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotaNecesariaPage() {
  const [notaActual, setNotaActual] = useState("");
  const [porcentajeActual, setPorcentajeActual] = useState("");
  const [notaObjetivo, setNotaObjetivo] = useState("5");
  const [resultado, setResultado] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState("");

  function calcular() {
    const nota = parseFloat(notaActual);
    const porcentaje = parseFloat(porcentajeActual);
    const objetivo = parseFloat(notaObjetivo);

    if (
      isNaN(nota) ||
      isNaN(porcentaje) ||
      isNaN(objetivo) ||
      nota < 0 ||
      nota > 10 ||
      porcentaje <= 0 ||
      porcentaje >= 100 ||
      objetivo < 0 ||
      objetivo > 10
    ) {
      setResultado(null);
      setMensaje(
        "Introduce valores válidos. El porcentaje debe estar entre 1% y 99%."
      );
      return;
    }

    const porcentajeRestante = 100 - porcentaje;

    const necesaria =
      (objetivo - nota * (porcentaje / 100)) /
      (porcentajeRestante / 100);

    if (necesaria <= 0) {
      setResultado(0);
      setMensaje(
        "Ya has alcanzado la nota objetivo con la parte realizada."
      );
      return;
    }

    if (necesaria > 10) {
      setResultado(null);
      setMensaje(
        `Necesitarías un ${necesaria.toFixed(
          2
        )}, por lo que no es posible alcanzar la nota objetivo con un máximo de 10.`
      );
      return;
    }

    setResultado(necesaria);
    setMensaje("");
  }

  function limpiar() {
    setNotaActual("");
    setPorcentajeActual("");
    setNotaObjetivo("5");
    setResultado(null);
    setMensaje("");
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-blue-600"
          >
            CalculaTodo
          </Link>

          <Link
            href="/estudios"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            ← Estudios
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            🎓 Estudios
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de nota necesaria
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Descubre qué nota necesitas obtener en la parte restante
            de una asignatura para alcanzar tu objetivo.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {/* Nota actual */}
            <div>
              <label
                htmlFor="notaActual"
                className="mb-2 block text-sm font-semibold"
              >
                Nota actual
              </label>

              <div className="relative">
                <input
                  id="notaActual"
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={notaActual}
                  onChange={(e) => setNotaActual(e.target.value)}
                  placeholder="Ej. 6"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  /10
                </span>
              </div>
            </div>

            {/* Porcentaje */}
            <div>
              <label
                htmlFor="porcentajeActual"
                className="mb-2 block text-sm font-semibold"
              >
                Porcentaje que representa tu nota actual
              </label>

              <div className="relative">
                <input
                  id="porcentajeActual"
                  type="number"
                  min="1"
                  max="99"
                  step="1"
                  value={porcentajeActual}
                  onChange={(e) =>
                    setPorcentajeActual(e.target.value)
                  }
                  placeholder="Ej. 40"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  %
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                El porcentaje restante será el que se utilice para
                calcular la nota que necesitas.
              </p>
            </div>

            {/* Nota objetivo */}
            <div>
              <label
                htmlFor="notaObjetivo"
                className="mb-2 block text-sm font-semibold"
              >
                Nota objetivo
              </label>

              <div className="relative">
                <input
                  id="notaObjetivo"
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={notaObjetivo}
                  onChange={(e) => setNotaObjetivo(e.target.value)}
                  placeholder="Ej. 5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  /10
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Por defecto, el objetivo es aprobar con un 5.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular nota necesaria
              </button>

              <button
                onClick={limpiar}
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Limpiar
              </button>
            </div>
          </div>

          {/* Error / message */}
          {mensaje && (
            <div className="mt-8 rounded-2xl bg-gray-50 p-5 text-center">
              <p className="text-sm leading-6 text-gray-600">
                {mensaje}
              </p>
            </div>
          )}

          {/* Result */}
          {resultado !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                Necesitas sacar
              </p>

              <p className="mt-2 text-5xl font-bold text-blue-700">
                {resultado.toFixed(2)}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                sobre 10 en la parte restante
              </p>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula la nota necesaria?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Para saber qué nota necesitas, tenemos en cuenta la nota
            que ya tienes, el porcentaje que representa y la nota final
            que quieres conseguir.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            Nota necesaria = (Objetivo − Nota actual × porcentaje
            actual) ÷ porcentaje restante
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Tienes un 6 que representa el 40% de la asignatura y
            quieres aprobar con un 5. El examen restante representa el
            60%.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            (5 − 6 × 0,40) ÷ 0,60
            <br />
            = 1,67
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            Por tanto, necesitarías aproximadamente un{" "}
            <strong>1,67</strong> en el examen para alcanzar un 5
            final.
          </p>
        </article>

        {/* FAQ */}
        <article className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold">
                ¿Puedo utilizar cualquier porcentaje?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes indicar qué porcentaje representa la parte
                de la asignatura cuya nota ya conoces. El resto se
                calculará automáticamente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo calcular una nota objetivo diferente de 5?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes introducir cualquier objetivo entre 0 y 10,
                por ejemplo un 7 para calcular qué necesitas para
                terminar con un notable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Qué ocurre si necesito más de un 10?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                La calculadora te indicará que la nota objetivo no es
                alcanzable con la parte restante de la asignatura.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
          © 2026 CalculaTodo. Todas las herramientas son gratuitas.
        </div>
      </footer>
    </main>
  );
}