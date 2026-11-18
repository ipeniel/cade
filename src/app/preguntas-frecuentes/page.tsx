import Boton from "@/components/Boton";
import Page from "@/components/Page";
import { CANAL, INSTAGRAM, WA_TAMI } from "@/lib/enlaces";

type Item = { q: string; a: string[]; links?: [string, string][] };

const preguntas: Item[] = [
  {
    q: "¿Dónde y cuándo se reúnen?",
    a: [
      "Nos encontramos en Iglesia Peniel, en Pastor Basilio (ex Victoria) 80, barrio Molinos, Puerto Vilelas, Chaco.",
      "Nuestros encuentros principales son los sábados: adolescentes y jóvenes a las 19:00 hs, y jóvenes adultos a las 21:30 hs.",
      "También tenemos actividades durante la semana.",
    ],
  },
  { q: "¿Puedo ir si es mi primera vez?", a: ["¡Por supuesto! No necesitás conocer a nadie ni haber participado antes. Sos bienvenido/a desde el primer día."] },
  { q: "¿Puedo ir con un amigo?", a: ["¡Claro que sí! Nos encanta que invites a tus amigos. Pueden venir juntos, aunque sea la primera vez para los dos."] },
  { q: "¿Y si voy solo/a?", a: ["¡No pasa nada! Hay personas que van a recibirte y acompañarte para que puedas sentirte cómodo/a, conocer gente y disfrutar del encuentro."] },
  {
    q: "¿Tengo que ser cristiano/a para ir?",
    a: [
      "No. Podés venir tengas o no experiencia en la iglesia, conozcas mucho o poco de Dios, o simplemente tengas curiosidad.",
      "No necesitás saberlo todo para acercarte a Jesús.",
    ],
  },
  { q: "¿Tengo que llevar Biblia?", a: ["Si tenés, podés llevarla. Si no, no te preocupes. No es un requisito para participar."] },
  { q: "¿Hay que ir vestido de alguna manera?", a: ["No tenemos un código de vestimenta especial. Vení como sos y con ropa cómoda."] },
  { q: "¿Puedo llevar mate o tereré?", a: ["¡Sí! Podés traer tu mate o tereré para compartir, teniendo en cuenta la actividad y el espacio de cada encuentro."] },
  {
    q: "¿Tengo que pasar al frente, jugar o participar?",
    a: ["No estás obligado/a a pasar al frente, participar de un juego ni salir en fotos o videos. Podés venir, observar y conocer CADE a tu ritmo. Queremos que te sientas cómodo/a."],
  },
  {
    q: "¿Qué hacemos en CADE?",
    a: [
      "Tenemos juegos, dinámicas, música, enseñanzas, desafíos y momentos para compartir. Pero hay algo que nunca cambia: Jesús está en el centro.",
      "Buscamos que cada persona pueda tener un encuentro real con Él, conocerlo, acercarse y descubrir todo lo que tiene para su vida.",
      "Nos gusta divertirnos, reírnos y pasarla bien, siempre cuidando que nuestra manera de hacerlo refleje los valores de Jesús.",
    ],
  },
  { q: "¿Cuánto duran los encuentros?", a: ["Los encuentros suelen durar aproximadamente entre una hora y una hora y media, dependiendo de la actividad."] },
  {
    q: "¿Hay que pagar para ir?",
    a: ["No. Participar de CADE es gratuito.", "Si tenemos alguna actividad especial que tenga un costo, siempre lo comunicamos previamente."],
  },
  {
    q: "¿Cómo me entero de las próximas actividades?",
    a: ["Podés seguirnos en Instagram y sumarte a nuestro canal de difusión de WhatsApp para recibir las novedades."],
    links: [["Instagram @cade_ipeniel", INSTAGRAM], ["Canal de difusión de WhatsApp", CANAL]],
  },
  {
    q: "¿Puedo hacer preguntas sobre Dios o la Biblia aunque tenga dudas?",
    a: [
      "¡Claro que sí! No tenés que tener todas las respuestas para venir.",
      "Tus preguntas, tus dudas y hasta aquello que todavía no entendés tienen un lugar en CADE. Queremos crecer juntos y aprender cada día más de Jesús.",
    ],
  },
  {
    q: "¿Y si siento que la iglesia no es para mí?",
    a: [
      "Vení, conocenos y sacá tus propias conclusiones.",
      "No esperamos que llegues sabiendo todo ni siendo perfecto/a. Queremos que tengas la oportunidad de conocer a Jesús y descubrir quién es Él para vos.",
    ],
  },
  {
    q: "¿Y si me da vergüenza ir por primera vez?",
    a: [
      "Es completamente normal. A muchas personas les pasa cuando van por primera vez.",
      "Si te da vergüenza acercarte solo/a, podés escribirnos antes. Contanos que es tu primera vez y coordinamos para esperarte y recibirte cuando llegues, así no tenés que entrar sin conocer a nadie.",
      "Queremos que desde el primer momento te sientas acompañado/a.",
    ],
  },
];

export default function FAQ() {
  return (
    <Page title="Preguntas frecuentes sobre CADE">
      <div className="space-y-3">
        {preguntas.map((p) => (
          <details key={p.q} className="border-2 border-black p-4">
            <summary className="cursor-pointer font-bold">{p.q}</summary>
            <div className="mt-3 space-y-3 text-base">
              {p.a.map((t) => (
                <p key={t}>{t}</p>
              ))}
              {p.links?.map(([t, href]) => (
                <p key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-impulso underline">
                    {t}
                  </a>
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
      <div className="pt-4">
        <Boton href={WA_TAMI} variante="negro">ESCRIBINOS ANTES DE VENIR</Boton>
      </div>
    </Page>
  );
}
