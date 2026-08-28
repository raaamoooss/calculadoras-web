"use client";

import { useState } from "react";
import Link from "next/link";

export default function AhorroPage() {
  const [cantidadInicial, setCantidadInicial] = useState("");
  const [ahorroMensual, setAhorroMensual] = useState("");
  const [meses, setMeses] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const inicial = parseFloat(cantidadInicial) || 0;
    const mensual = parseFloat(ahorroMensual);
    const numeroMeses = parseInt(meses);

    if (
      inicial < 0 ||
      isNaN(mensual) ||
      isNaN(numeroMeses) ||
      mensual < 0 ||
      numeroMeses <= 0
    ) {
      setResultado(null);
      return;
    }

    const total = inicial + mensual * numeroMeses;

    setResultado(total);
  }

  function limpiar() {
    setCantidadInicial("");
    setAhorroMensual("");
    setMeses("");
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
            href="/dinero"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            ← Dinero
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            💰 Dinero
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de ahorro
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Descubre cuánto dinero puedes acumular ahorrando una
            cantidad determinada cada mes.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {/* Cantidad inicial */}
            <div>
              <label
                htmlFor="cantidadInicial"
                className="mb-2 block text-sm font-semibold"
              >
                Ahorro inicial
              </label>

              <div className="relative">
                <input
                  id="cantidadInicial"
                  type="number"
                  min="0"
                  step="0.01"
                  value={cantidadInicial}
                  onChange={(e) =>
                    setCantidadInicial(e.target.value)
                  }
                  placeholder="Ej. 500"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €
                </span>
              </div>
            </div>

            {/* Ahorro mensual */}
            <div>
              <label
                htmlFor="ahorroMensual"
                className="mb-2 block text-sm font-semibold"
              >
                Cantidad que ahorrarás cada mes
              </label>

              <div className="relative">
                <input
                  id="ahorroMensual"
                  type="number"
                  min="0"
                  step="0.01"
                  value={ahorroMensual}
                  onChange={(e) =>
                    setAhorroMensual(e.target.value)
                  }
                  placeholder="Ej. 200"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €/mes
                </span>
              </div>
            </div>

            {/* Meses */}
            <div>
              <label
                htmlFor="meses"
                className="mb-2 block text-sm font-semibold"
              >
                Tiempo de ahorro
              </label>

              <div className="relative">
                <input
                  id="meses"
                  type="number"
                  min="1"
                  step="1"
                  value={meses}
                  onChange={(e) => setMeses(e.target.value)}
                  placeholder="Ej. 12"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  meses
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular ahorro
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
                Ahorro acumulado
              </p>

              <p className="mt-2 text-5xl font-bold text-blue-700">
                {resultado.toFixed(2)} €
              </p>

              <p className="mt-2 text-sm text-gray-500">
                después de {meses} meses
              </p>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula el ahorro?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            El cálculo es sencillo: partimos del dinero que ya tienes
            ahorrado y añadimos la cantidad que consigues ahorrar cada
            mes durante el periodo indicado.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            Ahorro total = Ahorro inicial + (Ahorro mensual × Meses)
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Si empiezas con 500 €, ahorras 200 € al mes y mantienes
            este ritmo durante un año:
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            500 + (200 × 12) = 2.900 €
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            Al cabo de un año habrás acumulado{" "}
            <strong>2.900 €</strong>.
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
                ¿Se tienen en cuenta los intereses?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. Esta calculadora supone que el dinero simplemente
                se acumula y no genera intereses ni rentabilidad.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo empezar desde cero?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Puedes introducir 0 € como ahorro inicial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo ahorrar una cantidad diferente cada mes?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Esta versión utiliza una cantidad mensual constante.
                Para cantidades variables necesitaríamos una
                calculadora algo más avanzada.
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