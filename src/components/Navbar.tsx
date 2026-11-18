import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/ministerios", label: "Ministerios" },
  { href: "/horarios", label: "Horarios" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="border-b-4 border-black bg-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
        <Link href="/" aria-label="CADE, inicio">
          <Image src="/cade-logo.png" alt="CADE" width={561} height={171} priority className="h-10 w-auto" />
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-fuego">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
