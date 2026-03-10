import { Container } from "@/components/ui";
import { type Product } from "@/lib/products";
import { CheckCircle2, Target } from "lucide-react";

interface ProductBenefitsProps {
  product: Product;
}

export function ProductBenefits({ product }: ProductBenefitsProps) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Vantagens e público-alvo</h2>
          <p className="mt-2 text-slate-500">Descubra se este sistema é ideal para o seu negócio</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Benefits */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Principais benefícios</h3>
            </div>
            <div className="space-y-2">
              {product.benefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 transition-shadow hover:shadow-md">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span className="text-sm text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                <Target className="h-4 w-4 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Ideal para</h3>
            </div>
            <div className="space-y-2">
              {product.targetAudience.map((audience) => (
                <div
                  key={audience}
                  className="flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 p-3 transition-shadow hover:shadow-md"
                >
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-sm text-slate-800">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
