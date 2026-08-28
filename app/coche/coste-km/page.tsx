"use client";

import { useState } from "react";
import Link from "next/link";

export default function CosteKmPage() {
  const [kilometros, setKilometros] = useState("");
  const [coste, setCoste] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const km = parseFloat(kilometros);
    const c = parseFloat(coste);

    if (!km || !c || km <= 0 || c <= 0) {
      setResultado(null);
      return;
    }

    setResultado(c / km);
  }

  function limpiar() {
    setKilometros("");
    setCoste("");
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
            href="/coche"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            ← Coche y viajes
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            🚗 Coche y viajes
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de coste por kilómetro
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula cuánto dinero te cuesta recorrer cada kilómetro
            con tu vehículo.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {/* Kilómetros */}
            <div>
              <label
                htmlFor="kilometros"
                className="mb-2 block text-sm font-semibold"
              >
                Kilómetros recorridos
              </label>

              <div className="relative">
                <input
                  id="kilometros"
                  type="number"
                  min="0"
                  step="any"
                  value={kilometros}
                  onChange={(e) => setKilometros(e.target.value)}
                  placeholder="Ej. 1000"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  km
                </span>
              </div>
            </div>

            {/* Coste */}
            <div>
              <label
                htmlFor="coste"
                className="mb-2 block text-sm font-semibold"
              >
                Coste total
              </label>

              <div className="relative">
                <input
                  id="coste"
                  type="number"
                  min="0"
                  step="any"
                  value={coste}
                  onChange={(e) => setCoste(e.target.value)}
                  placeholder="Ej. 80"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular coste
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
                Coste por kilómetro
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-700">
                {resultado.toFixed(2)} €/km
              </p>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula el coste por kilómetro?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            El coste por kilómetro indica cuánto dinero gastas, de
            media, por cada kilómetro recorrido.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            Coste por km = Coste total ÷ Kilómetros recorridos
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Si has gastado 80 € y has recorrido 1.000 kilómetros:
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            80 ÷ 1.000 = 0,08 €/km
          </div>

          <p className="mt-4 leading-7 text-gray-600">
            Esto significa que cada kilómetro recorrido te ha costado
            aproximadamente 8 céntimos.
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
                ¿Qué gastos puedo incluir?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Puedes incluir el gasto que quieras analizar, como
                combustible, peajes, aparcamiento u otros costes del
                viaje.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿El resultado incluye el mantenimiento del coche?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Solo si incluyes esos gastos dentro del coste total.
                Esta calculadora utiliza únicamente los valores que
                introduzcas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo calcular el coste de un viaje?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Para calcular el coste de un viaje completo
                utilizaremos nuestra calculadora de coste de viaje.
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