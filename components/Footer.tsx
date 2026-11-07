export default function Footer() {
  return (
    <footer className="border-t border-purple-900/40 bg-[#090914] px-6 py-8 text-center">
      <h2 className="text-xl font-black">
        <span className="text-purple-500">PIXEL</span>{" "}
        <span className="text-lime-400">ARCADE STORE</span>
      </h2>

      <p className="mt-3 text-sm text-gray-500">
        Tu próximo nivel comienza aquí.
      </p>

      <p className="mt-4 text-xs text-gray-600">
        © 2026 Pixel Arcade Store. Todos los derechos reservados.
      </p>
    </footer>
  );
}