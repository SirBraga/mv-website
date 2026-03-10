import { Container } from "@/components/ui";
import { Shield, Users, Headphones, Award } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Sobre a MV Automação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 lg:text-lg">
            Há mais de <strong className="text-slate-800">18 anos</strong> no Vale do Aço,
            somos revendedores oficiais da Zucchetti e parceiros de confiança para
            automação comercial, emissão fiscal e gestão empresarial.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Sistemas Homologados", desc: "100% certificados pela SEFAZ" },
            { icon: Users, title: "Atendimento Local", desc: "Presencial no Vale do Aço" },
            { icon: Headphones, title: "Suporte Dedicado", desc: "Equipe especializada" },
            { icon: Award, title: "Parceiro Oficial", desc: "Zucchetti e líderes do mercado" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100">
                <Icon className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
