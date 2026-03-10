import { Container } from "@/components/ui";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="bg-slate-50 py-16 lg:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Fale com a gente</h2>
          <p className="mt-2 text-slate-500">Estamos prontos para atender você e transformar seu negócio</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 mb-4">Informações de contato</h3>
              <div className="space-y-4">
                <a href="tel:3136672020" className="flex items-start gap-3 text-slate-600 transition-colors hover:text-sky-600">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <Phone className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telefone</p>
                    <p className="text-sm font-semibold text-slate-800">(31) 3667-2020</p>
                  </div>
                </a>
                <a href="mailto:contato@mvautomacao.com" className="flex items-start gap-3 text-slate-600 transition-colors hover:text-sky-600">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <Mail className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-mail</p>
                    <p className="text-sm font-semibold text-slate-800">contato@mvautomacao.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-slate-600">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <MapPin className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Endereço</p>
                    <p className="text-sm font-semibold text-slate-800">Rua Paquetá, 627 — Giovannini</p>
                    <p className="text-sm text-slate-600">Coronel Fabriciano/MG</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <Clock className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Horário</p>
                    <p className="text-sm font-semibold text-slate-800">Seg–Sex, 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900 mb-3">O que você recebe:</p>
              <ul className="space-y-2">
                {[
                  "Resposta em até 24h úteis",
                  "Demonstração gratuita do sistema",
                  "Proposta personalizada",
                  "Consultoria sem compromisso",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1">Envie sua mensagem</h3>
              <p className="text-sm text-slate-500 mb-6">Preencha o formulário abaixo</p>
              <ContactForm source="home" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
