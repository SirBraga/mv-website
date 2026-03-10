import { Container } from "@/components/ui";
import { ContactForm } from "@/components/forms/contact-form";
import { type Product } from "@/lib/products";
import { CheckCircle2, Sparkles, Phone } from "lucide-react";

interface ProductContactProps {
  product: Product;
}

export function ProductContact({ product }: ProductContactProps) {
  return (
    <section id="contato-produto" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Comece a usar o {product.name}</h2>
          <p className="mt-2 text-slate-500">Solicite uma demonstração gratuita e sem compromisso</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">O que você recebe</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Demonstração personalizada do sistema",
                  "Análise das necessidades do seu negócio",
                  "Proposta comercial sob medida",
                  "Suporte completo na implantação",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Prefere falar por telefone?</h3>
              <a
                href="tel:3136672020"
                className="flex items-center gap-3 rounded-lg bg-slate-900 px-5 py-4 text-white transition-colors hover:bg-slate-800"
              >
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold">(31) 3667-2020</p>
                  <p className="text-xs text-slate-400">Seg–Sex, 8h às 18h</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1">Preencha o formulário</h3>
              <p className="text-sm text-slate-500 mb-6">Entraremos em contato em até 24h úteis</p>
              <ContactForm source={`produto-${product.slug}`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
