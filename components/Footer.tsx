import Link from "next/link";
import { Calculator, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-extrabold text-slate-900 transition-colors hover:text-blue-600"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Calculator className="h-4 w-4" />
              </span>

              <span>CalculaTodo</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Calculadoras online sencillas, rápidas y gratuitas para
              resolver tus cálculos del día a día.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Navegación
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="/#categorias"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  Categorías
                </Link>
              </li>

              <li>
                <Link
                  href="/#sobre"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  Sobre CalculaTodo
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Información
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/privacidad"
                  className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                  Política de privacidad
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>

              <li>
                <Link
                  href="/cookies"
                  className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                  Política de cookies
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>

              <li>
                <Link
                  href="/aviso-legal"
                  className="inline-flex items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                  Aviso legal
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CalculaTodo. Todos los
            derechos reservados.
          </p>

          <p>
            Herramientas gratuitas y sin registro.
          </p>
        </div>
      </div>
    </footer>
  );
}