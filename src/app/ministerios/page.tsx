import Page from "@/components/Page";

const areas = [
  "Recreación",
  "Orden del espacio antes y después del culto",
  "Músicos",
  "Proyector",
  "Sonido y luces",
  "Redes sociales",
];

export default function Ministerios() {
  return (
    <Page title="Ministerios">
      <p>Hay muchas formas de servir. Estas son las áreas de CADE:</p>
      <ul className="divide-y-2 divide-black border-y-2 border-black">
        {areas.map((a) => (
          <li key={a} className="py-3 font-semibold">
            {a}
          </li>
        ))}
      </ul>
      <p>¿Querés sumarte a alguna? Escribinos desde la página de contacto.</p>
    </Page>
  );
}
