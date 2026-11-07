"use client";

import Link from "next/link";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import SectionTitle from "@/components/SectionTitle";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const {
    favorites,
    isFavorite,
    toggleFavorite,
    loaded,
  } = useFavorites();

  const favoriteGames = games.filter((game) =>
    favorites.includes(game.id)
  );

  if (!loaded) {
    return (
      <div className="py-32 text-center text-lime-400">
        Cargando favoritos...
      </div>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 py-20">

      <SectionTitle
        title="MIS FAVORITOS ♥"
        subtitle="Tu colección personal de videojuegos."
      />

      {favoriteGames.length > 0 ? (
        <>
          <p className="mb-8 text-center text-gray-400">
            Tienes{" "}
            <span className="font-bold text-lime-400">
              {favoriteGames.length}
            </span>{" "}
            videojuegos guardados.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                favorite={isFavorite(game.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-3xl border border-purple-900/50 bg-[#151525] px-6 py-20 text-center">

          <div className="mb-6 text-7xl text-purple-500">
            ♡
          </div>

          <h3 className="text-2xl font-bold text-white">
            ¡Todavía no tienes favoritos!
          </h3>

          <p className="mt-4 text-gray-400">
            Explora nuestro catálogo y guarda los juegos
            que más te gusten.
          </p>

          <Link
            href="/catalog"
            className="mt-8 inline-block rounded-xl bg-lime-400 px-8 py-4 font-black text-black transition hover:bg-lime-300"
          >
            EXPLORAR VIDEOJUEGOS
          </Link>

        </div>
      )}

    </section>
  );
}