import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Calculator className="h-5 w-5" strokeWidth={2.2} />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
            CalculaTodo
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium sm:flex">
          <Link
            href="/#categorias"
            className="text-slate-600 transition-colors hover:text-blue-600"
          >
            Categorías
          </Link>

          <Link
            href="/#sobre"
            className="text-slate-600 transition-colors hover:text-blue-600"
          >
            Sobre CalculaTodo
          </Link>

          <Link
            href="/#categorias"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-95"
          >
            Ver calculadoras
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}