"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConsumoPage() {
  const [distancia, setDistancia] = useState("");
  const [litros, setLitros] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const d = parseFloat(distancia);
    const l = parseFloat(litros);

    if (!d || !l || d <= 0 || l <= 0) {
      setResultado(null);
      return;
    }

    const consumo = (l / d) * 100;
    setResultado(consumo);
  }

  function limpiar() {
    setDistancia("");
    setLitros("");
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
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            🚗 Coche y viajes
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de consumo del coche
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Descubre cuánto consume realmente tu coche en litros por
            cada 100 kilómetros.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {/* Distancia */}
            <div>
              <label
                htmlFor="distancia"
                className="mb-2 block text-sm font-semibold"
              >
                Distancia recorrida
              </label>

              <div className="relative">
                <input
                  id="distancia"
                  type="number"
                  min="0"
                  step="any"
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value)}
                  placeholder="Ej. 500"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  km
                </span>
              </div>
            </div>

            {/* Litros */}
            <div>
              <label
                htmlFor="litros"
                className="mb-2 block text-sm font-semibold"
              >
                Combustible utilizado
              </label>

              <div className="relative">
                <input
                  id="litros"
                  type="number"
                  min="0"
                  step="any"
                  value={litros}
                  onChange={(e) => setLitros(e.target.value)}
                  placeholder="Ej. 32"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  L
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={calcular}
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Calcular consumo
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
                Consumo de tu vehículo
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-700">
                {resultado.toFixed(2)} L/100 km
              </p>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula el consumo?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            El consumo indica cuántos litros de combustible utiliza
            un vehículo para recorrer 100 kilómetros.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            Consumo = (Litros utilizados ÷ Kilómetros recorridos) × 100
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Si has recorrido 500 km y has utilizado 32 litros de
            combustible:
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            (32 ÷ 500) × 100 = 6,40 L/100 km
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
                ¿Qué significa L/100 km?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Indica cuántos litros de combustible necesita el
                vehículo para recorrer 100 kilómetros.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Cuál es un consumo normal?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Depende del vehículo, el motor y las condiciones de
                conducción. Un coche pequeño puede consumir menos que
                un SUV o un vehículo de mayor potencia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Cómo puedo calcular mi consumo real?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Una forma sencilla es llenar el depósito, poner a cero
                el cuentakilómetros parcial y volver a llenar el
                depósito después de recorrer una determinada distancia.
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