"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Quais sistemas vocês oferecem?", a: "Trabalhamos com CLIPP PRO (Zucchetti) para varejo em geral, Sistema HOST (Hotline) para supermercados, Sistema Hiper (StoneCo) para pequeno varejo, e Comanda 10 (Pedidos 10) para restaurantes e delivery. Cada sistema é especializado no seu segmento." },
  { q: "Como funciona a implantação?", a: "Após a contratação, nossa equipe realiza instalação, configuração completa e treinamento presencial ou remoto. Acompanhamos as primeiras semanas de uso. O processo leva de 1 a 3 dias dependendo da complexidade." },
  { q: "Os sistemas emitem NF-e?", a: "Sim, todos os sistemas são 100% homologados pela SEFAZ e emitem NF-e, NFC-e e outros documentos fiscais. Auxiliamos na obtenção e configuração do certificado digital necessário." },
  { q: "Qual o custo dos sistemas?", a: "Os valores variam conforme o sistema escolhido e o perfil do seu negócio. Entre em contato para receber uma proposta personalizada sem compromisso. Geralmente há taxa de implantação e mensalidade de suporte." },
  { q: "Como funciona o suporte técnico?", a: "Oferecemos suporte de segunda a sexta, das 8h às 18h, por telefone, WhatsApp e e-mail. Nossa equipe está no Vale do Aço, permitindo atendimento presencial quando necessário." },
  { q: "Posso migrar do meu sistema atual?", a: "Sim, em muitos casos é possível importar cadastros e histórico do sistema anterior. Nossa equipe avalia cada situação e orienta sobre o processo de migração para que seja tranquila e sem perda de dados." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Perguntas frequentes</h2>
          <p className="mt-2 text-slate-500">Tire suas dúvidas sobre nossos sistemas e serviços</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`overflow-hidden rounded-xl border transition-all ${
                open === i ? "border-sky-200 bg-sky-50/50" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors hover:bg-slate-50/50"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${open === i ? "text-sky-600" : "text-slate-400"}`} />
                  <span className={`text-sm font-semibold transition-colors ${open === i ? "text-sky-900" : "text-slate-800"}`}>
                    {faq.q}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-all ${
                    open === i ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-slate-600 pl-8">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
