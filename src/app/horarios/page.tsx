import Page from "@/components/Page";

export default function Horarios() {
  return (
    <Page title="Horarios">
      <p>Nos reunimos los sábados.</p>
      <ul className="space-y-3">
        <li className="border-l-8 border-fuego pl-4">
          <span className="font-black">Adolescentes:</span> 19:00 hs
        </li>
        <li className="border-l-8 border-impulso pl-4">
          <span className="font-black">Jóvenes adultos:</span> 21:30 hs
        </li>
      </ul>
      <p>
        Es en Pastor Basilio (ex Victoria) 80, barrio Molinos, Puerto Vilelas,
        Chaco.
      </p>
    </Page>
  );
}
