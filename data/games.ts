export interface Game {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    category: "RPG",
    price: 49.99,
    image: "https://placehold.co/600x800/17102c/a855f7?text=Cyberpunk+2077",
    description: "Explora Night City en una aventura futurista.",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Elden Ring",
    category: "Acción",
    price: 59.99,
    image: "https://placehold.co/600x800/17102c/a3e635?text=Elden+Ring",
    description: "Descubre un mundo fantástico lleno de desafíos.",
    rating: 4.9,
  },
  {
    id: 3,
    title: "God of War",
    category: "Aventura",
    price: 39.99,
    image: "https://placehold.co/600x800/17102c/a855f7?text=God+of+War",
    description: "Acompaña a Kratos en una épica aventura.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Minecraft",
    category: "Sandbox",
    price: 29.99,
    image: "https://placehold.co/600x800/17102c/a3e635?text=Minecraft",
    description: "Construye y explora mundos infinitos.",
    rating: 4.9,
  },
  {
    id: 5,
    title: "GTA V",
    category: "Acción",
    price: 34.99,
    image: "https://placehold.co/600x800/17102c/a855f7?text=GTA+V",
    description: "Vive aventuras en la ciudad de Los Santos.",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Resident Evil 4",
    category: "Terror",
    price: 44.99,
    image: "https://placehold.co/600x800/17102c/a3e635?text=Resident+Evil+4",
    description: "Sobrevive a una experiencia de terror.",
    rating: 4.7,
  },
];