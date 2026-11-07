"use client";

import Image from "next/image";
import { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  favorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function GameCard({
  game,
  favorite,
  onToggleFavorite,
}: GameCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-purple-900/40 bg-[#151525] transition duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-xl hover:shadow-purple-900/30">

      <div className="relative h-64 overflow-hidden">
        <Image
          src={game.image}
          alt={game.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <button
          onClick={() => onToggleFavorite(game.id)}
          aria-label={
            favorite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
          className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-2 text-xl text-white transition hover:text-lime-400"
        >
          {favorite ? "♥" : "♡"}
        </button>

        <span className="absolute bottom-3 left-3 rounded-lg bg-purple-600 px-3 py-1 text-xs font-bold text-white">
          {game.category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            {game.title}
          </h3>

          <span className="text-sm text-lime-400">
            ★ {game.rating}
          </span>
        </div>

        <p className="mb-4 text-sm text-gray-400">
          {game.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-lime-400">
            ${game.price.toFixed(2)}
          </span>

          <button
            type="button"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-500"
          >
            Ver juego
          </button>
        </div>
      </div>
    </article>
  );
}