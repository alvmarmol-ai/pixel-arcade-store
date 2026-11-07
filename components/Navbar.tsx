import Link from "next/link";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalog" },
  { name: "Favoritos", href: "/favorites" },
  { name: "Nosotros", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-900/40 bg-[#090914]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/" className="text-2xl font-black tracking-wider">
          <span className="text-purple-500">PIXEL</span>
          <span className="text-lime-400"> ARCADE</span>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-300 transition hover:text-lime-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}