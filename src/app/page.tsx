import Boton from "@/components/Boton";
import Versiculo from "@/components/Versiculo";
import { WA_TAMI } from "@/lib/enlaces";

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
            Somos CADE, el ministerio de adolescentes y jóvenes de Iglesia Peniel, en
            Puerto Vilelas, Chaco, Argentina.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Boton href="/encuentros">Conocer las actividades</Boton>
            <Boton href={WA_TAMI} variante="borde">QUIERO PARTICIPAR</Boton>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-6 px-5 py-14">
        <p className="text-5xl font-black tracking-tighter sm:text-7xl">
          <span className="text-fuego">10 años</span> caminando juntos
        </p>
        <p className="max-w-2xl text-lg leading-relaxed">
          Desde hace 10 años tenemos una misma visión: acercar a cada adolescente y joven a
          Jesús, acompañándolo a vivir un encuentro personal y cara a cara con Él, que
          transforme su vida y fortalezca su fe.
        </p>
        <p className="max-w-2xl text-lg">
          Somos parte de Iglesia Peniel, bajo el pastorado de María Ester Reyes de Neznajko.
        </p>
        <Versiculo />
      </section>
    </>
  );
}
