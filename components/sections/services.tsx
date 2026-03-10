import { Container } from "@/components/ui";
import { Package, FileText, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  { icon: Package, title: "Controle de Estoque", desc: "Gestão de produtos, alertas de reabastecimento e relatórios.", color: "text-blue-600 bg-blue-50" },
  { icon: FileText, title: "Nota Fiscal Eletrônica", desc: "Emissão de NF-e homologada com um clique.", color: "text-amber-600 bg-amber-50" },
  { icon: TrendingUp, title: "Controle Financeiro", desc: "Fluxo de caixa, contas a pagar/receber e conciliação.", color: "text-green-600 bg-green-50" },
  { icon: ShieldCheck, title: "Certificado Digital", desc: "Instalação, configuração e renovação de certificados.", color: "text-purple-600 bg-purple-50" },
];

export function Services() {
  return (
    <section className="bg-slate-900 py-16 lg:py-20">
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Nossos serviços</h2>
          <p className="mt-2 text-slate-400">Tudo que você precisa para automatizar seu negócio</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-slate-600">
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${color} transition-transform group-hover:scale-110`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
