import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-slate-900 pt-20 pb-16 lg:pt-24 lg:pb-20">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-900 via-slate-900 to-slate-800" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Sistemas de gestão para o seu negócio crescer
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-400 lg:text-lg">
              Há 18 anos no Vale do Aço, oferecemos soluções completas em automação comercial,
              emissão fiscal e controle de estoque com suporte técnico local.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {["Implantação e treinamento inclusos", "Suporte técnico presencial", "Sistemas 100% homologados SEFAZ"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
              >
                Falar com especialista
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:3136672020"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                (31) 3667-2020
              </a>
            </div>
          </div>

          {/* Right — Stats & Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image src="/logomv.png" alt="MV" width={40} height={40} className="rounded-lg" />
              <div>
                <p className="text-sm font-semibold text-white">MV Automação</p>
                <p className="text-xs text-slate-500">Parceiro oficial Zucchetti</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "18+", label: "Anos de mercado" },
                { value: "500+", label: "Clientes ativos" },
                { value: "100%", label: "Homologado SEFAZ" },
                { value: "24h", label: "Suporte técnico" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-5">
              <p className="text-sm font-semibold text-white mb-3">Por que escolher a MV?</p>
              <ul className="space-y-2">
                {[
                  "Atendimento presencial no Vale do Aço",
                  "Treinamento completo incluído",
                  "Suporte técnico especializado",
                  "Sistemas líderes de mercado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
