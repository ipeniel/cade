import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CADE | Adolescentes y jóvenes de Iglesia Peniel",
  description:
    "Conocer, Amar, Dar, Enseñar. Somos los adolescentes y jóvenes de la Iglesia Peniel, en Puerto Vilelas, Chaco.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
