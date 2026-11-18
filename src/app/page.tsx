import Link from "next/link";

const palabras = [
  { letra: "C", resto: "onocer" },
  { letra: "A", resto: "mar" },
  { letra: "D", resto: "ar" },
  { letra: "E", resto: "nseñar" },
];

export default function Home() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <ul className="text-6xl font-black leading-[0.95] tracking-tighter sm:text-8xl">
            {palabras.map((p) => (
              <li key={p.letra}>
                <span className="text-fuego">{p.letra}</span>
                {p.resto}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-xl text-white/80">
            Somos los adolescentes y jóvenes de la Iglesia Peniel, en Puerto
            Vilelas, Chaco. Nos juntamos todos los sábados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/horarios"
              className="bg-fuego px-6 py-3 font-bold text-black hover:bg-white"
            >
              Ver horarios
            </Link>
            <Link
              href="/sobre-nosotros"
              className="border-2 border-white px-6 py-3 font-bold hover:bg-white hover:text-black"
            >
              Conocernos
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="max-w-2xl text-2xl font-bold leading-snug">
          Lo que hemos visto y oído, no podemos dejar de contarlo.
        </p>
        <p className="mt-2 font-semibold text-impulso">Hechos 4:20</p>
      </section>
    </>
  );
}
