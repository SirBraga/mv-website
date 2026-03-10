import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MV Automação | Gestão Empresarial e Automação Comercial",
    template: "%s | MV Automação",
  },
  description:
    "Há mais de 18 anos transformando a gestão empresarial com sistemas integrados, atendimento personalizado e excelência em suporte no Vale do Aço.",
  keywords: [
    "automação comercial",
    "gestão empresarial",
    "PDV",
    "NF-e",
    "CLIPP PRO",
    "Sistema HOST",
    "Hiper",
    "Comanda 10",
    "Vale do Aço",
    "MV Automação",
  ],
  openGraph: {
    title: "MV Automação | Gestão Empresarial e Automação Comercial",
    description:
      "Há mais de 18 anos transformando a gestão empresarial com sistemas integrados, atendimento personalizado e excelência em suporte.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
