
"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function CatalogError({
  error,
  reset,
}: ErrorPageProps) {

  useEffect(() => {
    console.error("Error en el catálogo:", error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#090914] px-6">

      <div className="w-full max-w-xl rounded-3xl border border-purple-800/50 bg-[#151525] p-10 text-center">

        <div className="mb-6 text-7xl">
          🎮
        </div>

        <h1 className="text-3xl font-black text-red-400">
          ¡UPS! ALGO SALIÓ MAL
        </h1>

        <p className="mt-5 leading-7 text-gray-400">
          No pudimos cargar el catálogo de videojuegos.
          Intenta nuevamente.
        </p>

        {error.digest && (
          <p className="mt-3 text-xs text-gray-500">
            Código de error: {error.digest}
          </p>
        )}

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-lime-400 px-8 py-4 font-black text-black transition hover:bg-lime-300"
        >
          VOLVER A INTENTAR
        </button>

      </div>

    </section>
  );
}
