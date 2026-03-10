import Link from "next/link";
import { Container } from "@/components/ui";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-slate-900 py-12 lg:py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Pronto para modernizar seu negócio?</h2>
            <p className="mt-1 text-sm text-slate-400">Fale com nossa equipe e receba uma demonstração gratuita.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:3136672020"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              (31) 3667-2020
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
