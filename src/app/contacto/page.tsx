import Page from "@/components/Page";

const INSTAGRAM = "https://instagram.com/cade_ipeniel";
const WHATSAPP = "https://whatsapp.com/channel/0029VbBMP1n9sBIIaE0mll46";

export default function Contacto() {
  return (
    <Page title="Contacto">
      <p>Escribinos o seguinos para enterarte de las novedades.</p>
      <ul className="space-y-3 font-semibold">
        <li>
          Instagram:{" "}
          <a href={INSTAGRAM} className="text-impulso underline">
            @cade_ipeniel
          </a>
        </li>
        {WHATSAPP && (
          <li>
            Canal de WhatsApp:{" "}
            <a href={WHATSAPP} className="text-impulso underline">
              Canal de difusión de CADE
            </a>
          </li>
        )}
      </ul>
      <p>Pastor Basilio (ex Victoria) 80, barrio Molinos, Puerto Vilelas, Chaco.</p>
    </Page>
  );
}
