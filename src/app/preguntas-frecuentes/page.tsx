import Page from "@/components/Page";

const CANAL = "https://whatsapp.com/channel/0029VbBMP1n9sBIIaE0mll46";

const preguntas: { q: string; a: string[]; canal?: boolean }[] = [
  {
    q: "📍 ¿Dónde y cuándo se reúnen?",
    a: [
      "Nos encontramos todos los sábados a las 19:00 hs en Iglesia Peniel.",
      "📍 Calle Pastor Basilio (ex Victoria) 80, Barrio Molinos, Puerto Vilelas, Chaco.",
      "¡Te esperamos! ❤️",
    ],
  },
  {
    q: "👋 ¿Puedo ir si es mi primera vez?",
    a: ["¡Sí! ❤️ No necesitás conocer a nadie ni haber ido antes. Sos bienvenido/a desde el primer día."],
  },
  {
    q: "🧑‍🤝‍🧑 ¿Puedo ir con un amigo?",
    a: ["¡Obvio! 🙌 Nos encanta que invites a tus amigos. Pueden venir juntos aunque sea la primera vez para los dos."],
  },
  {
    q: "😅 ¿Y si voy solo/a?",
    a: ["¡No pasa nada! Hay personas que van a recibirte y acompañarte para que puedas sentirte cómodo/a, conocer gente y disfrutar del encuentro."],
  },
  {
    q: "🙏 ¿Tengo que ser cristiano/a para ir?",
    a: [
      "¡No! Podés venir tengas o no experiencia en la iglesia, conozcas mucho o poco de Dios, o simplemente tengas curiosidad.",
      "No necesitás saberlo todo para acercarte a Jesús. ❤️",
    ],
  },
  {
    q: "📖 ¿Tengo que llevar Biblia?",
    a: ["Si tenés, podés llevarla 📖. Si no tenés, no te preocupes. No es un requisito para venir."],
  },
  {
    q: "👕 ¿Hay que ir vestido de alguna manera?",
    a: ["No tenemos un código de vestimenta especial. Vení como sos y con ropa cómoda. ❤️"],
  },
  {
    q: "🧉 ¿Puedo llevar mate o tereré?",
    a: ["¡Sí! 🧉 Podés traer tu mate o tereré para compartir el momento con nosotros, siempre teniendo en cuenta la actividad y el espacio de cada encuentro."],
  },
  {
    q: "🎤 ¿Tengo que pasar al frente, jugar o participar?",
    a: [
      "No. ❤️ Podés venir, observar y conocer CADE a tu ritmo.",
      "No estás obligado/a a pasar al frente, participar de un juego ni salir en fotos o videos. Queremos que puedas sentirte cómodo/a y disfrutar del encuentro.",
    ],
  },
  {
    q: "🎶 ¿Qué hacemos en CADE?",
    a: [
      "Tenemos juegos, dinámicas, música, enseñanzas, desafíos y momentos para compartir. Pero hay algo que nunca cambia:",
      "Jesús está en el centro. ❤️",
      "Buscamos que cada persona pueda tener un encuentro real con Él, conocerlo, acercarse y descubrir todo lo que tiene para su vida.",
      "Nos gusta divertirnos, reírnos y pasarla bien, pero siempre cuidando que nuestra forma de divertirnos no entristezca el corazón de Jesús.",
    ],
  },
  {
    q: "⏰ ¿Cuánto dura?",
    a: ["Los encuentros duran aproximadamente entre una hora y una hora y media, dependiendo de la actividad que tengamos ese día."],
  },
  {
    q: "💰 ¿Hay que pagar para ir?",
    a: [
      "No. Venir a CADE es gratis. ❤️",
      "Si tenemos alguna actividad especial que tenga un costo, siempre lo comunicamos previamente.",
    ],
  },
  {
    q: "📱 ¿Cómo me entero de las próximas actividades?",
    a: [
      "Podés seguirnos en @cade_ipeniel y activar las notificaciones 🔔.",
      "También podés sumarte a nuestro canal de difusión de WhatsApp para recibir todas las novedades:",
    ],
    canal: true,
  },
  {
    q: "💬 ¿Puedo hacer preguntas sobre Dios o la Biblia aunque tenga dudas?",
    a: [
      "¡Claro que sí! 🙌",
      "No tenés que tener todas las respuestas para venir. Tus preguntas, tus dudas y hasta aquello que todavía no entendés tienen un lugar en CADE.",
    ],
  },
  {
    q: "❤️ ¿Y si siento que la iglesia no es para mí?",
    a: [
      "Vení, conocenos y sacá tus propias conclusiones.",
      "No esperamos que llegues sabiendo todo ni siendo perfecto/a. Queremos que tengas la oportunidad de conocer a Jesús y descubrir quién es Él para vos.",
    ],
  },
  {
    q: "👀 ¿Y si todavía tengo vergüenza de ir?",
    a: [
      "Es completamente normal. A muchos les pasó la primera vez.",
      "Podés venir con un amigo, escribirnos antes o simplemente acercarte y decir “es mi primera vez”. Nosotros vamos a recibirte y acompañarte. 🫶",
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
            <div className="mt-3 space-y-3">
              {p.a.map((t) => (
                <p key={t}>{t}</p>
              ))}
              {p.canal && (
                <p>
                  📲{" "}
                  <a href={CANAL} className="font-bold text-impulso underline">
                    Canal de difusión de CADE
                  </a>
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </Page>
  );
}
