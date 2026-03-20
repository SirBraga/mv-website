"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { usePathname } from "next/navigation";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCampanha = pathname === "/campanha" || pathname === "/atualizar-dados";

  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="antialiased">
        {!isCampanha && <Header />}
        <main>{children}</main>
        {!isCampanha && <Footer />}
      </body>
    </html>
  );
}
