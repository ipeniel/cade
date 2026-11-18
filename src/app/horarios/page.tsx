import Boton from "@/components/Boton";
import Page from "@/components/Page";
import { DIRECCION, MAPS } from "@/lib/enlaces";

const bloques = [
  { dia: "Sábados 19:00 hs", que: "Adolescentes y jóvenes", color: "border-fuego" },
  { dia: "Sábados 21:30 hs", que: "Jóvenes adultos", color: "border-impulso" },
  { dia: "Domingos 10:00 hs", que: "Culto general de Iglesia Peniel", color: "border-black" },
];

export default function Horarios() {
  return (
    <Page title="Horarios y ubicación">
      <p className="text-2xl font-black">Encontrémonos</p>
      <p>Tenemos diferentes espacios durante la semana para compartir, aprender y crecer juntos.</p>
      <ul className="space-y-3">
        {bloques.map((b) => (
          <li key={b.dia} className={`border-l-8 ${b.color} pl-4`}>
            <span className="block text-2xl font-black">{b.dia}</span>
            <span className="text-lg">{b.que}</span>
          </li>
        ))}
      </ul>
      <p className="text-base">
        Aunque el culto del domingo no es una actividad exclusiva de CADE, forma parte de la vida
        de nuestra iglesia y también queremos invitarte a participar.
      </p>
      <p className="font-bold">Dirección</p>
      <p>{DIRECCION}.</p>
      <Boton href={MAPS} variante="negro">CÓMO LLEGAR</Boton>
    </Page>
  );
}
