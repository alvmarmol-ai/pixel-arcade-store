
"use client";

import Link from "next/link";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import SectionTitle from "@/components/SectionTitle";
import { useFavorites } from "@/hooks/useFavorites";

export default function HomePage() {
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const featuredGames = games.slice(0, 3);

  return (
    <div>
      {/* Banner principal */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-[#15102c] to-[#090914] px-6 py-28">

        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <span className="mb-6 inline-block rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-400">
            LEVEL UP YOUR GAME
          </span>

          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            BIENVENIDO A
            <span className="block text-purple-500">
              PIXEL ARCADE
            </span>
            <span className="text-lime-400">
              STORE
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Descubre los mejores videojuegos,
            encuentra nuevas aventuras y lleva
            tu experiencia gamer al siguiente nivel.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="rounded-xl bg-lime-400 px-8 py-4 font-black text-black transition hover:bg-lime-300"
            >
              EXPLORAR CATÁLOGO
            </Link>

            <Link
              href="/favorites"
              className="rounded-xl border border-purple-500 px-8 py-4 font-bold text-white transition hover:bg-purple-600"
            >
              MIS FAVORITOS ♥
            </Link>
          </div>

        </div>
      </section>

      {/* Juegos destacados */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <SectionTitle
          title="JUEGOS DESTACADOS"
          subtitle="Descubre nuestros títulos más populares."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {featuredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              favorite={isFavorite(game.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-block rounded-xl border border-lime-400 px-8 py-3 font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            VER TODOS LOS JUEGOS →
          </Link>
        </div>

      </section>
    </div>
  );
}
