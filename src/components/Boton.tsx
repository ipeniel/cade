import Link from "next/link";

const estilos = {
  fuego: "bg-fuego text-black hover:bg-black hover:text-white",
  negro: "bg-black text-white hover:bg-fuego hover:text-black",
  borde: "border-2 border-white text-white hover:bg-white hover:text-black",
};

export default function Boton({
  href,
  children,
  variante = "fuego",
}: {
  href: string;
  children: React.ReactNode;
  variante?: keyof typeof estilos;
}) {
  const cls = `inline-block px-6 py-3 text-base font-bold ${estilos[variante]}`;
  if (href.startsWith("/"))
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}
