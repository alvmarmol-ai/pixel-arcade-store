
"use client";

import { useEffect, useMemo, useState } from "react";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import SectionTitle from "@/components/SectionTitle";
import { useFavorites } from "@/hooks/useFavorites";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);

  const {
    favorites,
    isFavorite,
    toggleFavorite,
    loaded,
  } = useFavorites();

  // Simular carga inicial del catálogo
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Categorías disponibles
  const categories = useMemo(
    () => [
      "Todos",
      ...new Set(games.map((game) => game.category)),
    ],
    []
  );

  // Búsqueda y filtrado en tiempo real
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(search.toLowerCase()) ||
        game.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Todos" || game.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  if (loading || !loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-lime-400" />
          <p className="font-bold text-lime-400">
            CARGANDO CATÁLOGO...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-20">

      <SectionTitle
        title="CATÁLOGO GAMER"
        subtitle="Encuentra tu próxima aventura."
      />

      {/* Barra de búsqueda */}
      <div className="mx-auto mb-10 max-w-2xl">
        <div className="flex items-center rounded-2xl border border-purple-800 bg-[#151525] px-5 py-4 transition focus-within:border-lime-400">

          <span className="mr-3 text-2xl">⌕</span>

          <input
            type="search"
            placeholder="Buscar videojuegos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="ml-3 text-gray-400 hover:text-lime-400"
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
              category === item
                ? "bg-lime-400 text-black"
                : "border border-purple-800 bg-[#151525] text-gray-300 hover:border-lime-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Información de resultados */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <p className="text-sm text-gray-400">
          Resultados encontrados:{" "}
          <span className="font-bold text-lime-400">
            {filteredGames.length}
          </span>
        </p>

        <p className="text-sm text-gray-400">
          Favoritos guardados:{" "}
          <span className="font-bold text-purple-400">
            {favorites.length}
          </span>
        </p>

      </div>

      {/* Videojuegos */}
      {filteredGames.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredGames.map((game) => (
            <div key={game.id} className="flex flex-col">

              <GameCard
                game={game}
                favorite={isFavorite(game.id)}
                onToggleFavorite={toggleFavorite}
              />

              <button
                onClick={() => toggleFavorite(game.id)}
                className={`mt-3 rounded-xl px-5 py-3 font-bold transition ${
                  isFavorite(game.id)
                    ? "border border-purple-500 bg-purple-900/40 text-purple-300"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {isFavorite(game.id)
                  ? "♥ Quitar de favoritos"
                  : "♡ Agregar a favoritos"}
              </button>

            </div>
          ))}

        </div>
      ) : (
        <div className="rounded-3xl border border-purple-900/50 bg-[#151525] px-6 py-20 text-center">

          <div className="mb-5 text-6xl">🎮</div>

          <h3 className="text-2xl font-bold text-white">
            No encontramos videojuegos
          </h3>

          <p className="mt-3 text-gray-400">
            Intenta con otro nombre o selecciona otra categoría.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setCategory("Todos");
            }}
            className="mt-6 rounded-xl bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300"
          >
            LIMPIAR FILTROS
          </button>

        </div>
      )}

    </section>
  );
}
