import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export function ProductsOverview() {
  return (
    <section id="produtos" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Nossos sistemas</h2>
          <p className="mt-2 text-slate-500">Cada sistema é especializado no seu segmento</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.slug} href={`/produtos/${product.slug}`} className="group block">
                <div className="grid grid-cols-5 gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-sky-200 hover:shadow-lg">
                  {/* Left — Photo */}
                  <div className="col-span-2 flex items-center justify-center bg-slate-100">
                    {product.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-md">
                        <Icon className="h-12 w-12 text-sky-600" />
                      </div>
                    )}
                  </div>

                  {/* Right — Info */}
                  <div className="col-span-3 flex flex-col justify-center p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{product.company}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-sky-600 group-hover:text-sky-700">
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
