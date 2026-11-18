import Boton from "@/components/Boton";
import Page from "@/components/Page";
import { CANAL, DIRECCION, EMAIL, INSTAGRAM, WA_EMA_DAI, WA_TAMI } from "@/lib/enlaces";

const enlace = "font-bold text-impulso underline";

export default function Contacto() {
  return (
    <Page title="¡Nos encantaría conocerte!">
      <p>
        Si querés saber más sobre CADE, conocer nuestras actividades o sumarte a alguno de
        nuestros encuentros, podés comunicarte con nosotros. No importa si tenés preguntas o
        si simplemente querés conocer cómo es un encuentro. ¡Estamos para recibirte!
      </p>
      <dl className="space-y-5">
        <div>
          <dt className="font-black">Instagram</dt>
          <dd><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={enlace}>@cade_ipeniel</a></dd>
        </div>
        <div>
          <dt className="font-black">Canal de difusión de WhatsApp</dt>
          <dd><a href={CANAL} target="_blank" rel="noopener noreferrer" className={enlace}>Sumate al canal de CADE</a></dd>
        </div>
        <div>
          <dt className="font-black">Correo electrónico</dt>
          <dd><a href={`mailto:${EMAIL}`} className={enlace}>{EMAIL}</a></dd>
        </div>
        <div>
          <dt className="font-black">Contacto para adolescentes y jóvenes</dt>
          <dd>
            Tami, líder de adolescentes y jóvenes.{" "}
            <a href={WA_TAMI} target="_blank" rel="noopener noreferrer" className={enlace}>WhatsApp: 362 494 3933</a>
          </dd>
        </div>
        <div>
          <dt className="font-black">Contacto para jóvenes adultos</dt>
          <dd>
            Ema y Dai, líderes de jóvenes adultos.{" "}
            <a href={WA_EMA_DAI} target="_blank" rel="noopener noreferrer" className={enlace}>WhatsApp: 362 404 9223</a>
          </dd>
        </div>
        <div>
          <dt className="font-black">Nuestra ubicación</dt>
          <dd>Iglesia Peniel, {DIRECCION}.</dd>
        </div>
      </dl>
      <section className="bg-black p-6 text-white">
        <h2 className="text-3xl font-black tracking-tight">¡Hay un lugar para vos!</h2>
        <p className="mt-2 text-lg">
          No importa de dónde vengas ni cuánto conozcas de Dios. Queremos que tengas la
          oportunidad de conocer a Jesús y caminar junto a otros que también desean seguirlo.
        </p>
        <p className="mt-4 text-2xl font-black text-fuego">¡TE ESPERAMOS EN CADE!</p>
        <div className="mt-5">
          <Boton href={WA_TAMI}>QUIERO CONOCER CADE</Boton>
        </div>
      </section>
    </Page>
  );
}
