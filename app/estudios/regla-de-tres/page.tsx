"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReglaDeTresPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [tipo, setTipo] = useState<"directa" | "inversa">("directa");

  function calcular() {
    const valorA = parseFloat(a);
    const valorB = parseFloat(b);
    const valorC = parseFloat(c);

    if (
      !Number.isFinite(valorA) ||
      !Number.isFinite(valorB) ||
      !Number.isFinite(valorC) ||
      valorA === 0 ||
      valorC === 0
    ) {
      setResultado(null);
      return;
    }

    const resultadoCalculado =
      tipo === "directa"
        ? (valorB * valorC) / valorA
        : (valorA * valorB) / valorC;

    setResultado(resultadoCalculado);
  }

  function limpiar() {
    setA("");
    setB("");
    setC("");
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
        {/* Título */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            📚 Estudios y matemáticas
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de regla de tres
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula fácilmente una regla de tres directa o inversa
            introduciendo tres valores.
          </p>
        </div>

        {/* Calculadora */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Tipo */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold">
              ¿Qué tipo de regla de tres necesitas?
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setTipo("directa");
                  setResultado(null);
                }}
                className={`rounded-xl px-4 py-3 font-semibold transition ${
                  tipo === "directa"
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Directa
              </button>

              <button
                onClick={() => {
                  setTipo("inversa");
                  setResultado(null);
                }}
                className={`rounded-xl px-4 py-3 font-semibold transition ${
                  tipo === "inversa"
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Inversa
              </button>
            </div>

            {/* Explicación del tipo */}
            <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-gray-700">
              {tipo === "directa" ? (
                <>
                  <p className="font-semibold text-gray-900">
                    Regla de tres directa
                  </p>

                  <p className="mt-1">
                    Se utiliza cuando las dos cantidades cambian en el mismo
                    sentido: si una aumenta, la otra también aumenta; si una
                    disminuye, la otra también disminuye.
                  </p>

                  <p className="mt-2">
                    <strong>Ejemplo:</strong> más productos → más dinero.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-gray-900">
                    Regla de tres inversa
                  </p>

                  <p className="mt-1">
                    Se utiliza cuando las dos cantidades cambian en sentidos
                    opuestos: si una aumenta, la otra disminuye; si una
                    disminuye, la otra aumenta.
                  </p>

                  <p className="mt-2">
                    <strong>Ejemplo:</strong> más trabajadores → menos tiempo.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Explicación de las casillas */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold">
              Introduce los valores
            </p>

            <p className="text-sm leading-6 text-gray-600">
              Coloca en <strong>A y B</strong> los dos valores que ya conoces
              de la primera relación. Después coloca en <strong>C</strong> el
              nuevo valor de la primera magnitud. La calculadora calculará
              automáticamente <strong>X</strong>.
            </p>
          </div>

          {/* Regla visual */}
          <div className="mb-8">
            <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3 sm:gap-5">
              {/* A */}
              <div>
                <label
                  htmlFor="valor-a"
                  className="mb-2 block text-center text-sm font-bold"
                >
                  A
                </label>

                <p className="mb-2 text-center text-xs text-gray-500">
                  Valor conocido
                </p>

                <input
                  id="valor-a"
                  type="number"
                  step="any"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                  placeholder="Ej. 5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="pb-3 text-xl font-bold text-gray-400">→</div>

              {/* B */}
              <div>
                <label
                  htmlFor="valor-b"
                  className="mb-2 block text-center text-sm font-bold"
                >
                  B
                </label>

                <p className="mb-2 text-center text-xs text-gray-500">
                  Resultado conocido
                </p>

                <input
                  id="valor-b"
                  type="number"
                  step="any"
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                  placeholder="Ej. 10"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Flecha vertical */}
              <div className="col-span-3 flex justify-center py-2">
                <span className="text-xl font-bold text-gray-300">↓</span>
              </div>

              {/* C */}
              <div>
                <label
                  htmlFor="valor-c"
                  className="mb-2 block text-center text-sm font-bold"
                >
                  C
                </label>

                <p className="mb-2 text-center text-xs text-gray-500">
                  Nuevo valor
                </p>

                <input
                  id="valor-c"
                  type="number"
                  step="any"
                  value={c}
                  onChange={(e) => setC(e.target.value)}
                  placeholder="Ej. 20"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="pb-3 text-xl font-bold text-gray-400">→</div>

              {/* X */}
              <div>
                <label className="mb-2 block text-center text-sm font-bold">
                  X
                </label>

                <p className="mb-2 text-center text-xs text-gray-500">
                  Resultado
                </p>

                <div className="flex h-[50px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-gray-400">
                  ?
                </div>
              </div>
            </div>
          </div>

          {/* Ejemplo */}
          <div className="mb-8 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
            {tipo === "directa" ? (
              <>
                <p className="font-semibold text-gray-900">
                  Ejemplo de regla directa
                </p>

                <p className="mt-1">
                  Si 5 productos cuestan 10 €, ¿cuánto cuestan 20 productos?
                </p>

                <p className="mt-2 font-medium">
                  5 productos → 10 €
                  <br />
                  20 productos → X €
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-gray-900">
                  Ejemplo de regla inversa
                </p>

                <p className="mt-1">
                  Si 4 trabajadores tardan 6 horas en hacer un trabajo,
                  ¿cuánto tardarán 8 trabajadores?
                </p>

                <p className="mt-2 font-medium">
                  4 trabajadores → 6 horas
                  <br />
                  8 trabajadores → X horas
                </p>
              </>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={calcular}
              className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Calcular
            </button>

            <button
              onClick={limpiar}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Limpiar
            </button>
          </div>

          {/* Resultado */}
          {resultado !== null && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                Resultado de X
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-700">
                {resultado.toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* Explicación */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se hace una regla de tres?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            La regla de tres es un método matemático que permite calcular un
            valor desconocido cuando conocemos otros tres valores relacionados
            entre sí.
          </p>

          <h3 className="mt-8 text-xl font-bold">
            Regla de tres directa
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            En una regla de tres directa, las dos magnitudes cambian en el
            mismo sentido. Por ejemplo, cuanto más productos compras, más
            dinero pagas.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            A → B
            <br />
            C → X
            <br />
            <br />
            X = (B × C) ÷ A
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Regla de tres inversa
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            En una regla de tres inversa, las dos magnitudes cambian en
            sentidos opuestos. Por ejemplo, cuanto más trabajadores realizan
            un trabajo, menos tiempo necesitan para terminarlo.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            A → B
            <br />
            C → X
            <br />
            <br />
            X = (A × B) ÷ C
          </div>
        </article>

        {/* FAQ */}
        <article className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            Preguntas frecuentes
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold">
                ¿Qué es una regla de tres?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Es un método matemático para calcular un valor desconocido a
                partir de otros tres valores relacionados proporcionalmente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Cuándo se utiliza una regla de tres directa?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Cuando las dos cantidades cambian en el mismo sentido. Si una
                aumenta, la otra también aumenta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Cuándo se utiliza una regla de tres inversa?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Cuando las dos cantidades cambian en sentidos opuestos. Si una
                aumenta, la otra disminuye.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo utilizar la calculadora con decimales?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes introducir números enteros o decimales en cualquiera
                de los campos.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
          © 2026 CalculaTodo
        </div>
      </footer>
    </main>
  );
}