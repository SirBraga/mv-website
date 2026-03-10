import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { products } from "@/lib/products";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <Container>
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <Image src="/logomv.png" alt="MV Automação" width={40} height={40} className="rounded-lg" />
              <div>
                <span className="block text-base font-bold text-white">MV Automação</span>
                <span className="block text-xs text-slate-500">Gestão Empresarial</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Há 18+ anos no Vale do Aço, oferecendo soluções completas em automação comercial e gestão empresarial.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/MvAutomacao", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/mv.empresa/", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/mv-automacao/posts/?feedView=all", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Nossos Sistemas</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produtos/${p.slug}`} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sobre Nós", href: "/#sobre" },
                { label: "Serviços", href: "/#servicos" },
                { label: "Depoimentos", href: "/#depoimentos" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contato", href: "/#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">Contato</h4>
            <div className="space-y-3">
              <a href="tel:3136672020" className="flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-slate-600 mt-0.5" />
                (31) 3667-2020
              </a>
              <a href="mailto:contato@mvautomacao.com" className="flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-slate-600 mt-0.5" />
                contato@mvautomacao.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-slate-600 mt-0.5" />
                <span>Rua Paquetá, 627<br />Coronel Fabriciano/MG</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-600">Seg–Sex • 8h às 18h</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} MV Automação. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-600">
              CNPJ: 11.787.080/0001-93
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
