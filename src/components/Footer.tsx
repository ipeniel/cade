import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-5 py-8 text-sm">
        <Image src="/iglesia-peniel.png" alt="Iglesia Peniel" width={400} height={436} className="h-24 w-auto" />
        <div>
          <p className="font-bold">CADE, adolescentes y jóvenes de Iglesia Peniel</p>
          <p className="mt-1 text-white/70">
            Pastor Basilio (ex Victoria) 80, barrio Molinos, Puerto Vilelas, Chaco
          </p>
          <p className="mt-1 text-white/70">Hechos 4:20</p>
        </div>
      </div>
    </footer>
  );
}
