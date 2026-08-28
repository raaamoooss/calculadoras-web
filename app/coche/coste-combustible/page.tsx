"use client";
"use client";

import { useState } from "react";

export default function CosteCombustible() {
  const [distancia, setDistancia] = useState("");
  const [consumo, setConsumo] = useState("");
  const [precio, setPrecio] = useState("");

  const [resultado, setResultado] = useState<{
    litros: number;
    coste: number;
    costeKm: number;
  } | null>(null);

  function calcular() {
    const d = parseFloat(distancia);
    const c = parseFloat(consumo);
    const p = parseFloat(precio);

    if (!d || !c || !p || d <= 0 || c <= 0 || p <= 0) {
      setResultado(null);
      return;
    }

    const litros = (d * c) / 100;
    const coste = litros * p;
    const costeKm = coste / d;

    setResultado({
      litros,
      coste,
      costeKm,
    });
  }

  function limpiar() {
    setDistancia("");
    setConsumo("");
    setPrecio("");
    setResultado(null);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-blue-600"
          >
            CalculaTodo
          </a>

          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            ← Volver al inicio
          </a>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            🚗 Coche y viajes
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calculadora de coste de combustible
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Calcula cuánto gastarás en combustible según la distancia,
            el consumo de tu coche y el precio del combustible.
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
                Distancia
              </label>

              <div className="relative">
                <input
                  id="distancia"
                  type="number"
                  min="0"
                  step="any"
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value)}
                  placeholder="Ej. 400"
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
                Consumo del vehículo
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

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
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
          </div>

          {/* Result */}
          {resultado && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <h2 className="text-lg font-bold">Resultado</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-gray-500">
                    Combustible necesario
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {resultado.litros.toFixed(2)} L
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-gray-500">
                    Coste total
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {resultado.coste.toFixed(2)} €
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-gray-500">
                    Coste por km
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {resultado.costeKm.toFixed(3)} €/km
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Cómo se calcula el coste de combustible?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Para calcular cuánto combustible necesitas, multiplicamos
            la distancia del viaje por el consumo del vehículo y dividimos
            el resultado entre 100.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            Litros necesarios = (Distancia × Consumo) ÷ 100
          </div>

          <p className="mt-5 leading-7 text-gray-600">
            Después multiplicamos los litros necesarios por el precio
            del combustible para obtener el coste total del viaje.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5 font-mono text-sm">
            Coste = Litros necesarios × Precio por litro
          </div>
        </article>

        {/* Example */}
        <article className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            Ejemplo práctico
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Imagina un viaje de 400 km con un coche que consume
            6,5 litros cada 100 km y un precio de combustible de
            1,55 €/litro.
          </p>

          <div className="mt-5 space-y-2 text-gray-700">
            <p>
              <strong>Combustible:</strong> 26 litros
            </p>
            <p>
              <strong>Coste:</strong> 40,30 €
            </p>
            <p>
              <strong>Coste por km:</strong> 0,101 €/km
            </p>
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
                ¿Qué consumo tengo que introducir?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Introduce el consumo medio de tu vehículo en litros
                por cada 100 kilómetros, por ejemplo 6,5 L/100 km.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Puedo calcular un viaje de ida y vuelta?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. En ese caso introduce como distancia el doble
                de los kilómetros que recorrerás en un solo sentido.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿El resultado incluye los peajes?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. Esta calculadora calcula únicamente el coste
                del combustible.
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