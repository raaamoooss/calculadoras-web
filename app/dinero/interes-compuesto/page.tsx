"use client";

import { useState } from "react";
import Link from "next/link";

export default function InteresCompuestoPage() {
  const [capitalInicial, setCapitalInicial] = useState("");
  const [aportacionMensual, setAportacionMensual] = useState("");
  const [rentabilidad, setRentabilidad] = useState("");
  const [anos, setAnos] = useState("");

  const [resultado, setResultado] = useState<{
    total: number;
    aportado: number;
    intereses: number;
  } | null>(null);

  const [mensaje, setMensaje] = useState("");

  function calcular() {
    const capital = parseFloat(capitalInicial) || 0;
    const mensual = parseFloat(aportacionMensual) || 0;
    const tasaAnual = parseFloat(rentabilidad);
    const tiempo = parseFloat(anos);

    if (
      capital < 0 ||
      mensual < 0 ||
      isNaN(tasaAnual) ||
      isNaN(tiempo) ||
      tasaAnual < 0 ||
      tiempo <= 0
    ) {
      setResultado(null);
      setMensaje("Introduce valores válidos.");
      return;
    }

    const meses = tiempo * 12;
    const tasaMensual = Math.pow(1 + tasaAnual / 100, 1 / 12) - 1;

    let total: number;

    if (tasaMensual === 0) {
      total = capital + mensual * meses;
    } else {
      total =
        capital * Math.pow(1 + tasaMensual, meses) +
        mensual *
          ((Math.pow(1 + tasaMensual, meses) - 1) /
            tasaMensual);
    }

    const aportado = capital + mensual * meses;
    const intereses = total - aportado;

    setResultado({
      total,
      aportado,
      intereses,
    });

    setMensaje("");
  }

  function limpiar() {
    setCapitalInicial("");
    setAportacionMensual("");
    setRentabilidad("");
    setAnos("");
    setResultado(null);
    setMensaje("");
  }

  function formatoEuros(numero: number) {
    return numero.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
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
            Calculadora de interés compuesto
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Descubre cuánto podría crecer tu dinero con una
            rentabilidad determinada y aportaciones periódicas.
          </p>
        </div>

        {/* Calculator */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6">
            {/* Capital inicial */}
            <div>
              <label
                htmlFor="capitalInicial"
                className="mb-2 block text-sm font-semibold"
              >
                Capital inicial
              </label>

              <div className="relative">
                <input
                  id="capitalInicial"
                  type="number"
                  min="0"
                  step="0.01"
                  value={capitalInicial}
                  onChange={(e) =>
                    setCapitalInicial(e.target.value)
                  }
                  placeholder="Ej. 1000"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €
                </span>
              </div>
            </div>

            {/* Aportación mensual */}
            <div>
              <label
                htmlFor="aportacionMensual"
                className="mb-2 block text-sm font-semibold"
              >
                Aportación mensual
              </label>

              <div className="relative">
                <input
                  id="aportacionMensual"
                  type="number"
                  min="0"
                  step="0.01"
                  value={aportacionMensual}
                  onChange={(e) =>
                    setAportacionMensual(e.target.value)
                  }
                  placeholder="Ej. 200"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  €/mes
                </span>
              </div>
            </div>

            {/* Rentabilidad */}
            <div>
              <label
                htmlFor="rentabilidad"
                className="mb-2 block text-sm font-semibold"
              >
                Rentabilidad anual estimada
              </label>

              <div className="relative">
                <input
                  id="rentabilidad"
                  type="number"
                  min="0"
                  step="0.01"
                  value={rentabilidad}
                  onChange={(e) =>
                    setRentabilidad(e.target.value)
                  }
                  placeholder="Ej. 7"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  %
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Es una estimación matemática, no una garantía de
                rentabilidad futura.
              </p>
            </div>

            {/* Tiempo */}
            <div>
              <label
                htmlFor="anos"
                className="mb-2 block text-sm font-semibold"
              >
                Tiempo de inversión
              </label>

              <div className="relative">
                <input
                  id="anos"
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={anos}
                  onChange={(e) => setAnos(e.target.value)}
                  placeholder="Ej. 10"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-14 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  años
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

          {/* Error */}
          {mensaje && (
            <div className="mt-8 rounded-2xl bg-gray-50 p-5 text-center">
              <p className="text-sm leading-6 text-gray-600">
                {mensaje}
              </p>
            </div>
          )}

          {/* Results */}
          {resultado !== null && (
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-medium text-gray-600">
                  Capital final estimado
                </p>

                <p className="mt-2 text-5xl font-bold text-blue-700">
                  {formatoEuros(resultado.total)} €
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-5 text-center">
                  <p className="text-sm text-gray-500">
                    Dinero aportado
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    {formatoEuros(resultado.aportado)} €
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5 text-center">
                  <p className="text-sm text-gray-500">
                    Intereses generados
                  </p>

                  <p className="mt-2 text-2xl font-bold text-green-600">
                    {formatoEuros(resultado.intereses)} €
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Explanation */}
        <article className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">
            ¿Qué es el interés compuesto?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            El interés compuesto ocurre cuando los rendimientos
            obtenidos se incorporan al capital y empiezan a generar
            nuevos rendimientos. Con el paso del tiempo, este efecto
            puede hacer que el crecimiento sea cada vez mayor.
          </p>

          <h3 className="mt-8 text-xl font-bold">
            Ejemplo
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Imagina que empiezas con 1.000 €, aportas 200 € al mes,
            obtienes una rentabilidad anual del 7% y mantienes la
            inversión durante 10 años.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            La calculadora estima cuánto tendrías al final y separa
            el dinero que has aportado de los intereses generados.
          </p>

          <div className="mt-6 rounded-xl bg-gray-50 p-5">
            <p className="text-sm leading-6 text-gray-600">
              ⚠️ La rentabilidad utilizada es una hipótesis
              matemática. Las inversiones reales pueden subir o bajar
              y los resultados pasados no garantizan resultados futuros.
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
                ¿Qué rentabilidad debo introducir?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Introduce una rentabilidad anual hipotética, por
                ejemplo un 5% o un 7%. El resultado es una estimación
                matemática y no una garantía.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿Se incluyen las aportaciones mensuales?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Sí. La calculadora supone que realizas la misma
                aportación al final de cada mes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                ¿El resultado tiene en cuenta impuestos o comisiones?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. El cálculo es una estimación bruta y no incluye
                impuestos, comisiones, inflación ni otros costes.
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