"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotaFinalPage() {
  const [notaActual, setNotaActual] = useState("");
  const [porcentajeActual, setPorcentajeActual] = useState("");
  const [notaRestante, setNotaRestante] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState("");

  function calcular() {
    const nota = parseFloat(notaActual);
    const porcentaje = parseFloat(porcentajeActual);
    const restante = parseFloat(notaRestante);

    if (
      isNaN(nota) ||
      isNaN(porcentaje) ||
      isNaN(restante) ||
      nota < 0 ||
      nota > 10 ||
      porcentaje <= 0 ||
      porcentaje >= 100 ||
      restante < 0 ||
      restante > 10
    ) {
      setResultado(null);
      setMensaje(
        "Introduce valores válidos. El porcentaje debe estar entre 1% y 99% y las notas entre 0 y 10."
      );
      return;
    }

    const porcentajeRestante = 100 - porcentaje;

    const notaFinal =
      nota * (porcentaje / 100) +
      restante * (porcentajeRestante / 100);

    setResultado(notaFinal);
    setMensaje("");
  }

  function limpiar() {
    setNotaActual("");
    setPorcentajeActual("");
    setNotaRestante("");
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
            Calculadora de nota final
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula qué nota final obtendrás teniendo en cuenta tu
            nota actual y la nota que esperas conseguir en la parte
            restante.
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

            {/* Porcentaje actual */}
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
            </div>

            {/* Nota restante */}
            <div>
              <label
                htmlFor="notaRestante"
                className="mb-2 block text-sm font-semibold"
              >
                Nota que esperas obtener en la parte restante
              </label>

              <div className="relative">
                <input
                  id="notaRestante"
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={notaRestante}
                  onChange={(e) =>
                    setNotaRestante(e.target.value)
                  }
                  placeholder="Ej. 8"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  /10
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                El porcentaje restante se calcula automáticamente.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular nota final
              </button>

              <button
                onClick={limpiar}
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Limpiar
              </button>
            </div>
          </div>

          {/* Error */}
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
                Tu nota final estimada
              </p>

              <p className="mt-2 text-5xl font-bold text-blue-700">
                {resultado.toFixed(2)}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                sobre 10
              </p>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula la nota final?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            La nota final se obtiene multiplicando cada nota por el
            porcentaje que representa y sumando los resultados.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            Nota final = (Nota actual × porcentaje actual) + (Nota
            restante × porcentaje restante)
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Tienes un 6 que representa el 40% de la asignatura y
            esperas sacar un 8 en el examen, que representa el 60%.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            (6 × 0,40) + (8 × 0,60)
            <br />
            = 2,40 + 4,80
            <br />
            = 7,20
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            Tu nota final sería aproximadamente un{" "}
            <strong>7,20 sobre 10</strong>.
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
                ¿Qué porcentaje debo introducir?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Introduce el porcentaje que representa la nota que ya
                tienes. La calculadora obtiene automáticamente el
                porcentaje restante.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo utilizar decimales?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes utilizar notas como 7,5 o 8,25.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿El resultado es una predicción?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No exactamente. Es el resultado matemático que
                obtendrías si consigues la nota introducida en la parte
                restante.
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