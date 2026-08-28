"use client";

import { useState } from "react";
import Link from "next/link";

export default function NotaMediaPage() {
  const [notas, setNotas] = useState(["", "", "", "", ""]);
  const [resultado, setResultado] = useState<number | null>(null);

  function actualizarNota(index: number, valor: string) {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = valor;
    setNotas(nuevasNotas);
  }

  function calcular() {
    const notasValidas = notas
      .map((nota) => parseFloat(nota))
      .filter((nota) => !isNaN(nota) && nota >= 0 && nota <= 10);

    if (notasValidas.length === 0) {
      setResultado(null);
      return;
    }

    const suma = notasValidas.reduce((total, nota) => total + nota, 0);
    const media = suma / notasValidas.length;

    setResultado(media);
  }

  function limpiar() {
    setNotas(["", "", "", "", ""]);
    setResultado(null);
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
            Calculadora de nota media
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Introduce tus notas y calcula tu nota media de forma
            rápida y sencilla.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-4">
            {notas.map((nota, index) => (
              <div key={index}>
                <label
                  htmlFor={`nota-${index}`}
                  className="mb-2 block text-sm font-semibold"
                >
                  Asignatura {index + 1}
                </label>

                <div className="relative">
                  <input
                    id={`nota-${index}`}
                    type="number"
                    min="0"
                    max="10"
                    step="0.01"
                    value={nota}
                    onChange={(e) =>
                      actualizarNota(index, e.target.value)
                    }
                    placeholder="Ej. 7,5"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    /10
                  </span>
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular media
              </button>

              <button
                onClick={limpiar}
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Limpiar
              </button>
            </div>
          </div>

          {/* Result */}
          {resultado !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                Tu nota media
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
            ¿Cómo se calcula la nota media?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            La nota media se obtiene sumando todas las notas y
            dividiendo el resultado entre el número de asignaturas.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            Nota media = Suma de las notas ÷ Número de asignaturas
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Si tienes las notas 7, 8, 6, 9 y 7:
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            (7 + 8 + 6 + 9 + 7) ÷ 5 = 7,4
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            Tu nota media sería de <strong>7,4 sobre 10</strong>.
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
                ¿Puedo introducir menos de 5 asignaturas?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes dejar algunos campos vacíos. La
                calculadora solo tendrá en cuenta las notas que hayas
                introducido.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo utilizar decimales?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes introducir notas con decimales, como 7,5 o
                8,25.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Esta calculadora sirve para la universidad?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Es válida siempre que quieras calcular una media
                aritmética simple de tus notas.
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