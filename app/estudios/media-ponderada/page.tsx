"use client";

import { useState } from "react";
import Link from "next/link";

export default function MediaPonderadaPage() {
  const [notas, setNotas] = useState([
    { nota: "", peso: "" },
    { nota: "", peso: "" },
    { nota: "", peso: "" },
    { nota: "", peso: "" },
    { nota: "", peso: "" },
  ]);

  const [resultado, setResultado] = useState<number | null>(null);

  function actualizarCampo(
    index: number,
    campo: "nota" | "peso",
    valor: string
  ) {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = {
      ...nuevasNotas[index],
      [campo]: valor,
    };

    setNotas(nuevasNotas);
  }

  function calcular() {
    const datosValidos = notas
      .map((item) => ({
        nota: parseFloat(item.nota),
        peso: parseFloat(item.peso),
      }))
      .filter(
        (item) =>
          !isNaN(item.nota) &&
          !isNaN(item.peso) &&
          item.nota >= 0 &&
          item.nota <= 10 &&
          item.peso > 0
      );

    if (datosValidos.length === 0) {
      setResultado(null);
      return;
    }

    const sumaPonderada = datosValidos.reduce(
      (total, item) => total + item.nota * item.peso,
      0
    );

    const sumaPesos = datosValidos.reduce(
      (total, item) => total + item.peso,
      0
    );

    setResultado(sumaPonderada / sumaPesos);
  }

  function limpiar() {
    setNotas([
      { nota: "", peso: "" },
      { nota: "", peso: "" },
      { nota: "", peso: "" },
      { nota: "", peso: "" },
      { nota: "", peso: "" },
    ]);

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
            Calculadora de media ponderada
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula tu nota media teniendo en cuenta el peso o los
            créditos de cada asignatura.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-4 hidden grid-cols-[1fr_160px] gap-4 px-1 sm:grid">
            <span className="text-sm font-semibold text-gray-600">
              Nota
            </span>

            <span className="text-sm font-semibold text-gray-600">
              Peso / ECTS
            </span>
          </div>

          <div className="grid gap-4">
            {notas.map((item, index) => (
              <div
                key={index}
                className="grid gap-3 rounded-xl border border-gray-200 p-4 sm:grid-cols-[1fr_160px] sm:border-0 sm:p-0"
              >
                <div>
                  <label
                    htmlFor={`nota-${index}`}
                    className="mb-2 block text-sm font-semibold sm:hidden"
                  >
                    Nota {index + 1}
                  </label>

                  <input
                    id={`nota-${index}`}
                    type="number"
                    min="0"
                    max="10"
                    step="0.01"
                    value={item.nota}
                    onChange={(e) =>
                      actualizarCampo(index, "nota", e.target.value)
                    }
                    placeholder="Ej. 7,5"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`peso-${index}`}
                    className="mb-2 block text-sm font-semibold sm:hidden"
                  >
                    Peso / ECTS
                  </label>

                  <input
                    id={`peso-${index}`}
                    type="number"
                    min="0"
                    step="0.5"
                    value={item.peso}
                    onChange={(e) =>
                      actualizarCampo(index, "peso", e.target.value)
                    }
                    placeholder="Ej. 6"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
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
                Tu media ponderada
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
            ¿Cómo se calcula la media ponderada?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            A diferencia de una media simple, la media ponderada tiene
            en cuenta que algunas notas pueden tener más importancia
            que otras.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            Media ponderada = Σ (nota × peso) ÷ Σ pesos
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo con ECTS
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Supongamos que tienes estas tres asignaturas:
          </p>

          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Asignatura</th>
                  <th className="px-4 py-3 text-center">Nota</th>
                  <th className="px-4 py-3 text-center">ECTS</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Matemáticas</td>
                  <td className="px-4 py-3 text-center">7</td>
                  <td className="px-4 py-3 text-center">6</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">Física</td>
                  <td className="px-4 py-3 text-center">8</td>
                  <td className="px-4 py-3 text-center">6</td>
                </tr>

                <tr className="border-t">
                  <td className="px-4 py-3">Programación</td>
                  <td className="px-4 py-3 text-center">9</td>
                  <td className="px-4 py-3 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            (7 × 6 + 8 × 6 + 9 × 3) ÷ (6 + 6 + 3)
            <br />
            = 117 ÷ 15
            <br />
            = 7,80
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            La media ponderada sería de{" "}
            <strong>7,80 sobre 10</strong>.
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
                ¿Puedo utilizar los créditos ECTS como peso?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Si quieres calcular una media universitaria
                ponderada por créditos, introduce los ECTS de cada
                asignatura como peso.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Qué ocurre si dejo una asignatura vacía?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                La calculadora no tendrá en cuenta esa fila. Para que
                una asignatura se incluya necesitas introducir tanto
                la nota como el peso.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Cuál es la diferencia con la nota media normal?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                La media normal da la misma importancia a todas las
                notas. La media ponderada da más importancia a las
                asignaturas que tienen un peso mayor.
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