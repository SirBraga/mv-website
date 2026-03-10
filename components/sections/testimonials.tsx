import { Container } from "@/components/ui";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Lucas Oliveira", role: "Loja de Confecção", quote: "O suporte da MV é rápido e resolve de verdade. Hoje vejo tudo em tempo real." },
  { name: "Ana Carolina Silva", role: "Supermercado Familiar", quote: "O sistema HOST mudou completamente nosso caixa. Indico pra todo mundo." },
  { name: "Roberto Mendes", role: "Restaurante Delivery", quote: "O Comanda 10 foi um divisor de águas. Faturamento subiu 30%." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-slate-900 py-16 lg:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">O que nossos clientes dizem</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-700 bg-slate-800 p-5">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{t.quote}</p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
