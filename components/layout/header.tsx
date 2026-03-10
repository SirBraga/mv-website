"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { products } from "@/lib/products";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  {
    label: "Produtos",
    href: "/#produtos",
    children: products.map((p) => ({
      label: p.name,
      href: `/produtos/${p.slug}`,
      description: p.company,
    })),
  },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-18">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/logomv.png"
                alt="MV Automação"
                width={40}
                height={40}
                className="rounded-xl"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-base font-bold transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                MV Automação
              </span>
              <span
                className={`text-[11px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-slate-400" : "text-blue-300"
                }`}
              >
                Gestão Empresarial
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-50 group"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <span className="text-xs font-bold">
                                  {child.label[0]}
                                </span>
                              </div>
                              <div>
                                <span className="block text-sm font-semibold text-slate-900">
                                  {child.label}
                                </span>
                                <span className="block text-xs text-slate-400">
                                  {child.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:3136672020"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-slate-500 hover:text-slate-800" : "text-white/60 hover:text-white"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              (31) 3667-2020
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:bg-sky-500 hover:-translate-y-0.5"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-xl p-2.5 transition-colors lg:hidden cursor-pointer ${
              scrolled || isOpen
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-white lg:hidden">
          <div className="flex h-16 items-center justify-between px-5 border-b border-slate-100">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/logomv.png" alt="MV Automação" width={36} height={36} className="rounded-xl" />
              <span className="text-base font-bold text-slate-900">MV Automação</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <span className="block px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-600">
                        {child.label[0]}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold">{child.label}</span>
                        <span className="block text-xs text-slate-400">{child.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
              <a href="tel:3136672020" className="flex items-center gap-2 px-3 text-slate-500">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(31) 3667-2020</span>
              </a>
              <Link
                href="/#contato"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-sky-600 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-500/25"
              >
                Fale Conosco
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
