
"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Recuperar favoritos del navegador
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pixel-favorites");

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (
          Array.isArray(parsed) &&
          parsed.every(
            (id) => Number.isInteger(id) && id > 0
          )
        ) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Error al cargar favoritos:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Guardar favoritos
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "pixel-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites, loaded]);

  // Agregar o eliminar favoritos
  const toggleFavorite = (id: number) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((gameId) => gameId !== id)
        : [...previous, id]
    );
  };

  // Comprobar si un juego es favorito
  const isFavorite = (id: number) =>
    favorites.includes(id);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    loaded,
  };
}
