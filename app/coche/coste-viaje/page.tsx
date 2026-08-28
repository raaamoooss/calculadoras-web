"use client";

import { useState } from "react";
import Link from "next/link";

export default function CosteViajePage() {
  const [distancia, setDistancia] = useState("");
  const [consumo, setConsumo] = useState("");
  const [precio, setPrecio] = useState("");
  const [idaVuelta, setIdaVuelta] = useState(false);
  const [resultado, setResultado] = useState<number | null>(null);
  const [litros, setLitros] = useState<number | null>(null);
  const [distanciaTotal, setDistanciaTotal] = useState<number | null>(null);

  function calcular() {
    const d = parseFloat(distancia);
    const c = parseFloat(consumo);
    const p = parseFloat(precio);

    if (!d || !c || !p || d <= 0 || c <= 0 || p <= 0) {
      setResultado(null);
      setLitros(null);
      setDistanciaTotal(null);
      return;
    }

    const distanciaCalculada = idaVuelta ? d * 2 : d;
    const litrosCalculados = (distanciaCalculada * c) / 100;
    const costeCalculado = litrosCalculados * p;

    setDistanciaTotal(distanciaCalculada);
    setLitros(litrosCalculados);
    setResultado(costeCalculado);
  }

  function limpiar() {
    setDistancia("");
    setConsumo("");
    setPrecio("");
    setIdaVuelta(false);
    setResultado(null);
    setLitros(null);
    setDistanciaTotal(null);
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
            Calculadora de coste de viaje
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula cuánto te costará el combustible de un viaje en
            función de la distancia, el consumo y el precio del
            combustible.
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
                Distancia del viaje
              </label>

              <div className="relative">
                <input
                  id="distancia"
                  type="number"
                  min="0"
                  step="any"
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value)}
                  placeholder="Ej. 350"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  km
                </span>
              </div>
            </div>

            {/* Consumo */}
            <div>
              <label
                htmlFor="consumo"
                className="mb-2 block text-sm font-semibold"
              >
                Consumo del coche
              </label>

              <div className="relative">
                <input
                  id="consumo"
                  type="number"
                  min="0"
                  step="any"
                  value={consumo}
                  onChange={(e) => setConsumo(e.target.value)}
                  placeholder="Ej. 6.5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-24 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  L/100 km
                </span>
              </div>
            </div>

            {/* Precio */}
            <div>
              <label
                htmlFor="precio"
                className="mb-2 block text-sm font-semibold"
              >
                Precio del combustible
              </label>

              <div className="relative">
                <input
                  id="precio"
                  type="number"
                  min="0"
                  step="any"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  placeholder="Ej. 1.55"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €/L
                </span>
              </div>
            </div>

            {/* Ida y vuelta */}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <input
                type="checkbox"
                checked={idaVuelta}
                onChange={(e) => setIdaVuelta(e.target.checked)}
                className="h-5 w-5"
              />

              <div>
                <p className="font-semibold">
                  Ida y vuelta
                </p>

                <p className="text-sm text-gray-600">
                  Duplica automáticamente la distancia introducida.
                </p>
              </div>
            </label>

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
            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">
                  Coste estimado del combustible
                </p>

                <p className="mt-2 text-4xl font-bold text-blue-700">
                  {resultado.toFixed(2)} €
                </p>
              </div>

              <div className="mt-6 grid gap-3 border-t border-blue-100 pt-5 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-gray-500">
                    Distancia total
                  </p>

                  <p className="mt-1 font-bold">
                    {distanciaTotal?.toFixed(1)} km
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-gray-500">
                    Combustible necesario
                  </p>

                  <p className="mt-1 font-bold">
                    {litros?.toFixed(2)} L
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula el coste de un viaje?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Para calcular el coste aproximado del combustible
            necesitamos conocer la distancia del viaje, el consumo del
            vehículo y el precio del combustible.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            Litros necesarios = (Distancia × Consumo) ÷ 100
            <br />
            Coste = Litros necesarios × Precio por litro
          </div>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Imagina un viaje de 350 km, un coche con un consumo de
            6,5 L/100 km y un combustible a 1,55 €/L.
          </p>

          <div className="mt-4 rounded-xl bg-gray-50 p-5 font-mono text-sm leading-7">
            350 × 6,5 ÷ 100 = 22,75 L
            <br />
            22,75 × 1,55 = 35,26 €
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
                ¿La calculadora sirve para gasolina y diésel?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. Solo tienes que introducir el precio por litro del
                combustible que utilice tu vehículo.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿El resultado incluye peajes?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. El resultado corresponde únicamente al coste
                estimado del combustible.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Qué pasa si marco "ida y vuelta"?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                La calculadora duplica la distancia introducida antes
                de calcular el combustible y el coste total.
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