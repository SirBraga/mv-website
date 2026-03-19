"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Send,
  Loader2,
  CheckCircle,
  Gift,
  Award,
  Percent,
  FileCheck,
  ArrowRight,
  CalendarDays,
  Users,
  Star,
} from "lucide-react";

const indicacaoSchema = z.object({
  nomeIndicador: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100),
  empresaIndicador: z
    .string()
    .min(2, "Empresa deve ter pelo menos 2 caracteres")
    .max(100),
  nomeIndicado: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100),
  empresaIndicado: z
    .string()
    .min(2, "Empresa deve ter pelo menos 2 caracteres")
    .max(100),
  telefoneIndicado: z
    .string()
    .min(14, "Telefone inválido")
    .max(15, "Telefone inválido"),
});

type IndicacaoFormData = z.infer<typeof indicacaoSchema>;

export default function CampanhaPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IndicacaoFormData>({
    resolver: zodResolver(indicacaoSchema),
  });

  async function onSubmit(data: IndicacaoFormData) {
    const now = new Date();
    const dataRegistro = now.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const payload = {
      dataRegistro,
      nomeIndicador: data.nomeIndicador,
      empresaIndicador: data.empresaIndicador,
      nomeIndicado: data.nomeIndicado,
      empresaIndicado: data.empresaIndicado,
      telefoneIndicado: data.telefoneIndicado,
      source: "campanha-mes-consumidor",
    };

    try {
      const response = await fetch(
        "https://n8n.mvmicro.com.br/webhook-test/e51d5498-4071-41f3-8157-78baec36a3ce",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      
      toast.success("🎉 Indicação registrada com sucesso! Nossa equipe entrará em contato.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      console.log("✅ Dados enviados para Google Sheets");
      reset();
    } catch (error) {
      console.error("❌ Erro ao enviar:", error);
      toast.error("❌ Erro ao enviar indicação. Tente novamente ou entre em contato.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20";
  const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";
  const errorClass = "mt-1 text-xs text-red-500";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(14,165,233,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(168,85,247,0.08),transparent)]" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          {/* Top bar - logo + deadline */}
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/logomv.png"
                alt="MV Automação"
                width={44}
                height={44}
                className="rounded-xl"
                priority
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white">
                  MV Automação
                </span>
                <span className="text-xs font-medium text-sky-400">
                  18 anos no Vale do Aço
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <CalendarDays className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                Válida até 31/03
              </span>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT — Campaign info */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5">
                <Star className="h-3.5 w-3.5 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Mês do Consumidor
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Acelera para{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Ganhar
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 lg:text-lg">
                Indique uma empresa que precise de sistema de gestão e ganhe
                benefícios exclusivos. Quanto mais indicações, mais você ganha!
              </p>

              {/* Benefits cards */}
              <div className="mt-8 space-y-4">
                {/* Benefit 1 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-800/70">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg shadow-sky-500/25">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Só por indicar, você já ganha:
                    </p>
                    <p className="mt-1 text-sm text-sky-300 font-semibold">
                      Certificado Digital e-CPF em nuvem
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Benefício garantido após o registro da indicação
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-800/70">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 shadow-lg shadow-amber-500/25">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        Se a empresa indicada fechar contrato:
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Escolha um dos benefícios abaixo:
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 ml-16 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-700/40 px-4 py-3">
                      <Percent className="h-5 w-5 shrink-0 text-amber-400" />
                      <span className="text-sm font-semibold text-slate-200">
                        40% OFF na mensalidade por 1 mês
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-600/50 bg-slate-700/40 px-4 py-3">
                      <FileCheck className="h-5 w-5 shrink-0 text-amber-400" />
                      <span className="text-sm font-semibold text-slate-200">
                        Certificado Digital CNPJ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Como participar
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {[
                    { step: "1", text: "Preencha o formulário com a indicação" },
                    { step: "2", text: "A empresa indicada informa que foi você" },
                    { step: "3", text: "Receba seu Certificado Digital e-CPF" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm font-bold text-sky-400">
                        {item.step}
                      </div>
                      <span className="text-sm text-slate-400">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules note */}
              <div className="mt-6 flex items-start gap-2 rounded-xl border border-slate-700/40 bg-slate-800/30 px-4 py-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <p className="text-xs leading-relaxed text-slate-500">
                  Campanha exclusiva para clientes MV Automação. Cada cliente
                  pode realizar mais de uma indicação.
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200/10 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-6 text-center">
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Registre sua indicação
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Preencha os dados abaixo e garanta seus benefícios
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Separator - Indicador */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="h-px flex-1 bg-slate-100" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Seus dados
                    </span>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  <div>
                    <label
                      htmlFor="nomeIndicador"
                      className={labelClass}
                    >
                      Seu nome *
                    </label>
                    <input
                      id="nomeIndicador"
                      type="text"
                      placeholder="Nome completo"
                      className={`${inputBase} ${errors.nomeIndicador ? "border-red-400 focus:border-red-400 focus:ring-red-400/15" : ""}`}
                      {...register("nomeIndicador")}
                    />
                    {errors.nomeIndicador && (
                      <p className={errorClass}>
                        {errors.nomeIndicador.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="empresaIndicador"
                      className={labelClass}
                    >
                      Sua empresa *
                    </label>
                    <input
                      id="empresaIndicador"
                      type="text"
                      placeholder="Nome da sua empresa"
                      className={`${inputBase} ${errors.empresaIndicador ? "border-red-400 focus:border-red-400 focus:ring-red-400/15" : ""}`}
                      {...register("empresaIndicador")}
                    />
                    {errors.empresaIndicador && (
                      <p className={errorClass}>
                        {errors.empresaIndicador.message}
                      </p>
                    )}
                  </div>

                  {/* Separator - Indicado */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-px flex-1 bg-slate-100" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Dados da indicação
                    </span>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  <div>
                    <label
                      htmlFor="nomeIndicado"
                      className={labelClass}
                    >
                      Nome do indicado *
                    </label>
                    <input
                      id="nomeIndicado"
                      type="text"
                      placeholder="Nome do contato na empresa"
                      className={`${inputBase} ${errors.nomeIndicado ? "border-red-400 focus:border-red-400 focus:ring-red-400/15" : ""}`}
                      {...register("nomeIndicado")}
                    />
                    {errors.nomeIndicado && (
                      <p className={errorClass}>
                        {errors.nomeIndicado.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="empresaIndicado"
                      className={labelClass}
                    >
                      Empresa do indicado *
                    </label>
                    <input
                      id="empresaIndicado"
                      type="text"
                      placeholder="Nome da empresa indicada"
                      className={`${inputBase} ${errors.empresaIndicado ? "border-red-400 focus:border-red-400 focus:ring-red-400/15" : ""}`}
                      {...register("empresaIndicado")}
                    />
                    {errors.empresaIndicado && (
                      <p className={errorClass}>
                        {errors.empresaIndicado.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefoneIndicado"
                      className={labelClass}
                    >
                      Telefone do indicado *
                    </label>
                    <input
                      id="telefoneIndicado"
                      type="tel"
                      placeholder="(31) 99999-9999"
                      className={`${inputBase} ${errors.telefoneIndicado ? "border-red-400 focus:border-red-400 focus:ring-red-400/15" : ""}`}
                      {...register("telefoneIndicado", {
                        onChange: (e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 11);
                          if (value.length <= 10) {
                            e.target.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
                          } else {
                            e.target.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
                          }
                        },
                      })}
                    />
                    {errors.telefoneIndicado && (
                      <p className={errorClass}>
                        {errors.telefoneIndicado.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-200 hover:from-sky-500 hover:to-sky-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                        Enviar Indicação
                        <ArrowRight className="h-4 w-4 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-center text-[11px] text-slate-400">
                  Ao enviar, você concorda com as regras da campanha.
                  <br />A data de registro será preenchida automaticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
}
