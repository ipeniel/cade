import Boton from "@/components/Boton";
import Page from "@/components/Page";
import { WA_TAMI } from "@/lib/enlaces";

const actividades = [
  {
    nombre: "CADE DAY",
    cuando: "Días feriados | Horarios según cada actividad",
    texto: "Cuando llega un feriado, aprovechamos para hacer algo diferente. Nos reunimos para compartir una tarde especial, divertirnos, fortalecer amistades y desconectarnos un rato de la rutina.",
  },
  {
    nombre: "GAO – Grupos de Amigos Orando",
    cuando: "Viernes | 20:00 hs",
    texto: "Nos encontramos en grupos para orar, compartir la Palabra de Dios y crecer juntos en la fe. Un espacio para construir comunidad, acompañarnos y aprender a buscar a Dios en nuestra vida cotidiana.",
  },
  {
    nombre: "Discipulados",
    cuando: "Viernes | 21:00 hs",
    texto: "Creemos que seguir a Jesús también significa conocerlo cada día más. Por eso, nos reunimos para estudiar juntos la Palabra de Dios, aprender, hacer preguntas y profundizar en nuestra relación con Él.",
  },
  {
    nombre: "Cultos de adolescentes y jóvenes",
    cuando: "Sábados | 19:00 hs",
    texto: "Un espacio pensado para adolescentes y jóvenes donde compartimos enseñanzas bíblicas, adoración, dinámicas y momentos de comunión. Nuestro deseo es que cada persona pueda encontrarse con Jesús y crecer en su fe.",
  },
  {
    nombre: "Cultos de jóvenes adultos",
    cuando: "Sábados | 21:30 hs",
    texto: "Un espacio para jóvenes adultos que desean seguir creciendo en su relación con Dios, fortalecer su fe y compartir con otros una misma búsqueda de Jesús.",
  },
  {
    nombre: "Ayuno y oración",
    cuando: "Miércoles | 09:00 hs",
    texto: "Cada semana tenemos un tiempo especial de ayuno y oración. Entendemos que necesitamos buscar a Dios y prepararnos espiritualmente para servir en cada área del ministerio y de nuestra iglesia.",
  },
];

export default function Encuentros() {
  return (
    <Page title="Encuentros y actividades">
      <p>
        En CADE creemos que crecer en nuestra relación con Dios también implica compartir,
        aprender, orar, servir y construir vínculos con otros. Por eso, durante la semana
        tenemos diferentes espacios para encontrarnos y seguir creciendo juntos.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {actividades.map((a) => (
          <article key={a.nombre} className="border-2 border-black p-5">
            <h2 className="text-xl font-black leading-tight">{a.nombre}</h2>
            <p className="mt-2 border-l-4 border-fuego pl-3 text-base font-bold">{a.cuando}</p>
            <p className="mt-3 text-base leading-relaxed">{a.texto}</p>
          </article>
        ))}
      </div>
      <p>No se trata solamente de hacer actividades, sino de construir una vida de búsqueda, comunión y servicio.</p>
      <section className="bg-black p-6 text-white">
        <h2 className="text-3xl font-black tracking-tight">¿Querés ser parte?</h2>
        <p className="mt-2 text-lg">
          No importa si ya conocés la iglesia o si nunca participaste de un encuentro. Hay un lugar para vos.
        </p>
        <p className="mt-4 text-2xl font-black text-fuego">¡SUMATE A CADE!</p>
        <p className="mt-2 text-base text-white/80">
          Podés escribirnos para conocer nuestras actividades, consultar los horarios o avisarnos que vas a venir por primera vez.
        </p>
        <div className="mt-5">
          <Boton href={WA_TAMI}>QUIERO PARTICIPAR</Boton>
        </div>
      </section>
    </Page>
  );
}
