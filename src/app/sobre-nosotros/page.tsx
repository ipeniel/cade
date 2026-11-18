import Page from "@/components/Page";
import Versiculo from "@/components/Versiculo";

export default function SobreNosotros() {
  return (
    <Page title="Acerca de nosotros">
      <p className="text-2xl font-black">CADE: Conocer, Amar, Dar y Enseñar</p>
      <p>
        Somos CADE, un ministerio de adolescentes y jóvenes de Iglesia Peniel, ubicado en
        Puerto Vilelas, Chaco, Argentina.
      </p>
      <p>
        Desde hace 10 años caminamos con una misma visión: acercar a cada adolescente y
        joven a Jesús, acompañándolo a vivir un encuentro personal y cara a cara con Él,
        que transforme su vida y fortalezca su fe.
      </p>
      <p>
        Creemos que conocer a Jesús es el comienzo de una nueva manera de vivir. Por eso,
        buscamos generar espacios de encuentro, crecimiento, discipulado y servicio, donde
        cada persona pueda desarrollar una relación genuina con Dios, crecer en Su Palabra
        y descubrir el propósito que Él tiene para su vida.
      </p>
      <p>
        Nuestra misión es formar personas que conozcan a Dios, amen a los demás, estén
        dispuestas a dar de sí mismas y compartan con otros lo que por gracia han recibido.
      </p>
      <p>
        No buscamos solamente reunirnos, sino crecer juntos, caminar en comunidad y ser una
        generación que viva y transmita el mensaje de Jesús.
      </p>
      <p>
        Somos parte de Iglesia Peniel, bajo el pastorado de María Ester Reyes de Neznajko.
      </p>
      <Versiculo />
      <p className="border-l-8 border-fuego pl-4 text-2xl font-black leading-snug">
        CADE: Conocer, Amar, Dar y Enseñar. Una generación que busca conocer más de Jesús
        y darlo a conocer.
      </p>
    </Page>
  );
}
