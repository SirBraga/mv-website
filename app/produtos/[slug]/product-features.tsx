import { Container } from "@/components/ui";
import { type Product } from "@/lib/products";
import { Check } from "lucide-react";

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <section id="funcionalidades" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Funcionalidades principais</h2>
          <p className="mt-2 text-slate-500">Tudo que o {product.name} oferece para seu negócio</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-sky-200 hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
