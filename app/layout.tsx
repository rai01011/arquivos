import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mais Que Chocolate | Moldes Personalizados de Páscoa",
  description:
    "Surpreenda alguém nessa Páscoa com moldes personalizáveis. Transforme um simples chocolate em algo inesquecível.",
  keywords: [
    "páscoa",
    "chocolate personalizado",
    "moldes páscoa",
    "presente páscoa",
    "caixa de bombom",
  ],
  openGraph: {
    title: "Mais Que Chocolate | Moldes Personalizados de Páscoa",
    description:
      "Surpreenda alguém nessa Páscoa com moldes personalizáveis. Transforme um simples chocolate em algo inesquecível.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
