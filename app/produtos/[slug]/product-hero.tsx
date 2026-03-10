import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { type Product } from "@/lib/products";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const Icon = product.icon;

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-20 pb-16 lg:pt-24 lg:pb-20">
      {/* Subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-900 via-slate-900 to-slate-800" />

      <Container className="relative z-10">
        <Link href="/#produtos" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Voltar aos sistemas
        </Link>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5">
              <Icon className="h-4 w-4 text-sky-400" />
              <span className="text-xs font-semibold text-slate-400">{product.company}</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-400 lg:text-lg">
              {product.heroDescription || product.shortDescription}
            </p>

            <div className="mt-6 space-y-2">
              {product.benefits.slice(0, 3).map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                  <span className="text-sm text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contato-produto"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
              >
                Solicitar demonstração
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#funcionalidades"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
              >
                Ver funcionalidades
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-2">
            <div className="aspect-square w-full rounded-xl bg-slate-900/50 flex items-center justify-center overflow-hidden">
              {product.image ? (
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <Icon className="mx-auto h-16 w-16 text-slate-600 mb-3" />
                  <p className="text-sm text-slate-500">Imagem do sistema</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
