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
  Handshake,
  HeadphonesIcon,
  TrendingUp,
  Star,
  Building2,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Brazilian states
const ESTADOS_BR = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

// CPF validation
function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, "");
  if (cleaned.length !== 11) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned[i]) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned[i]) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned[10])) return false;

  return true;
}

// CNPJ validation
function isValidCNPJ(cnpj: string): boolean {
  const cleaned = cnpj.replace(/\D/g, "");
  if (cleaned.length !== 14) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false;

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleaned[i]) * weights1[i];
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;
  if (digit1 !== parseInt(cleaned[12])) return false;

  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleaned[i]) * weights2[i];
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;
  if (digit2 !== parseInt(cleaned[13])) return false;

  return true;
}

// Form schema
const formSchema = z.object({
  cnpj_cpf: z
    .string()
    .min(1, "CNPJ/CPF é obrigatório")
    .refine((val) => {
      const cleaned = val.replace(/\D/g, "");
      if (cleaned.length === 11) return isValidCPF(val);
      if (cleaned.length === 14) return isValidCNPJ(val);
      return false;
    }, "CNPJ/CPF inválido"),
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  nome_fantasia: z.string().optional(),
  telefone: z.string().optional(),
  whatsapp: z
    .string()
    .min(1, "WhatsApp é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length === 11, "WhatsApp deve ter 11 dígitos"),
  email_geral: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  email_dep_fiscal: z.string().min(1, "E-mail do Dep. Fiscal é obrigatório").email("E-mail inválido"),
  rua: z.string().optional(),
  numero: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  cep: z.string().optional(),
  complemento: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AtualizarDadosPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    const payload = {
      cnpj_cpf: data.cnpj_cpf.replace(/\D/g, ""),
      nome: data.nome,
      nome_fantasia: data.nome_fantasia || "",
      telefone: data.telefone?.replace(/\D/g, "") || "",
      whatsapp: data.whatsapp.replace(/\D/g, ""),
      email_geral: data.email_geral,
      email_dep_fiscal: data.email_dep_fiscal,
      endereco: {
        rua: data.rua || "",
        numero: data.numero || "",
        bairro: data.bairro || "",
        cidade: data.cidade || "",
        estado: data.estado || "",
        cep: data.cep?.replace(/\D/g, "") || "",
        complemento: data.complemento || "",
      },
      data_atualizacao: new Date().toISOString(),
      origem: "landing_page_contadores",
    };

    try {
      await fetch(
        "https://n8n.mvmicro.com.br/webhook/02820f86-e09a-4e99-9a95-31daf7ce0ecd",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          mode: "no-cors",
        }
      );

      setIsSubmitted(true);
      toast.success("Dados atualizados com sucesso!", {
        position: "top-right",
        autoClose: 5000,
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao enviar dados. Tente novamente.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }

  // Mask functions
  function maskCNPJCPF(value: string): string {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 11) {
      return cleaned
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return cleaned
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  }

  function maskPhone(value: string, isMobile: boolean = false): string {
    const cleaned = value.replace(/\D/g, "").slice(0, isMobile ? 11 : 10);
    if (isMobile || cleaned.length > 10) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
  }

  function maskCEP(value: string): string {
    const cleaned = value.replace(/\D/g, "").slice(0, 8);
    return cleaned.replace(/(\d{5})(\d{0,3})/, "$1-$2").trim();
  }

  // ViaCEP API integration
  async function fetchAddressByCEP(cep: string) {
    const cleaned = cep.replace(/\D/g, "");
    if (cleaned.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleaned}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        // Update form fields with ViaCEP data using React Hook Form
        setValue('rua', data.logradouro || '');
        setValue('bairro', data.bairro || '');
        setValue('cidade', data.localidade || '');
        setValue('estado', data.uf || '');
        setValue('complemento', data.complemento || '');
        
        console.log('Endereço preenchido automaticamente:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  }

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-400/15";
  const inputSuccess = "border-green-400 focus:border-green-400 focus:ring-green-400/15";
  const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";
  const errorClass = "mt-1 text-xs text-red-500";

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(59,130,246,0.15),transparent)]" />
        
        <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
          <div className="max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Dados Atualizados!
            </h1>
            <p className="mt-4 text-lg text-blue-200">
              Obrigado por manter seu cadastro atualizado. Sua parceria é muito importante para nós!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
            >
              Atualizar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(37,99,235,0.08),transparent)]" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
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
                <span className="text-xs font-medium text-blue-300">
                  Parceiros Contadores
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5">
              <Handshake className="h-4 w-4 text-blue-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Contadores Parceiros
              </span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Sua Parceria é{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Fundamental
              </span>{" "}
              para Nosso Sucesso
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-200 lg:text-lg">
              Atualize seus dados e continue fazendo parte da nossa história de crescimento
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Handshake,
                title: "Parceria de Confiança",
                desc: "Há anos trabalhamos juntos, construindo resultados sólidos",
                color: "from-blue-500 to-blue-400",
              },
              {
                icon: HeadphonesIcon,
                title: "Suporte Dedicado",
                desc: "Conte com nossa equipe sempre que precisar",
                color: "from-cyan-500 to-cyan-400",
              },
              {
                icon: TrendingUp,
                title: "Crescimento Mútuo",
                desc: "Seu sucesso é o nosso sucesso",
                color: "from-emerald-500 to-emerald-400",
              },
              {
                icon: Star,
                title: "Reconhecimento",
                desc: "Valorizamos cada contador que faz parte da nossa rede",
                color: "from-amber-500 to-amber-400",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-blue-400/20 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10"
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-blue-200/80">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-200/10 bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Atualize Seus Dados Cadastrais
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Preencha o formulário abaixo para manter seu cadastro sempre atualizado
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Required Fields Section */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Dados Obrigatórios
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* CNPJ/CPF */}
                  <div>
                    <label htmlFor="cnpj_cpf" className={labelClass}>
                      <FileText className="mr-1 inline h-4 w-4" />
                      CNPJ/CPF *
                    </label>
                    <input
                      id="cnpj_cpf"
                      type="text"
                      placeholder="00.000.000/0000-00 ou 000.000.000-00"
                      className={`${inputBase} ${errors.cnpj_cpf ? inputError : ""}`}
                      {...register("cnpj_cpf", {
                        onChange: (e) => {
                          e.target.value = maskCNPJCPF(e.target.value);
                        },
                      })}
                    />
                    {errors.cnpj_cpf && (
                      <p className={errorClass}>{errors.cnpj_cpf.message}</p>
                    )}
                  </div>

                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className={labelClass}>
                      <User className="mr-1 inline h-4 w-4" />
                      Nome *
                    </label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Nome completo ou razão social"
                      className={`${inputBase} ${errors.nome ? inputError : ""}`}
                      {...register("nome")}
                    />
                    {errors.nome && (
                      <p className={errorClass}>{errors.nome.message}</p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className={labelClass}>
                      <Phone className="mr-1 inline h-4 w-4" />
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className={`${inputBase} ${errors.whatsapp ? inputError : ""}`}
                      {...register("whatsapp", {
                        onChange: (e) => {
                          e.target.value = maskPhone(e.target.value, true);
                        },
                      })}
                    />
                    {errors.whatsapp && (
                      <p className={errorClass}>{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* E-mail Geral */}
                  <div>
                    <label htmlFor="email_geral" className={labelClass}>
                      <Mail className="mr-1 inline h-4 w-4" />
                      E-mail Geral *
                    </label>
                    <input
                      id="email_geral"
                      type="email"
                      placeholder="contato@empresa.com.br"
                      className={`${inputBase} ${errors.email_geral ? inputError : ""}`}
                      {...register("email_geral")}
                    />
                    {errors.email_geral && (
                      <p className={errorClass}>{errors.email_geral.message}</p>
                    )}
                  </div>

                  {/* E-mail Dep. Fiscal */}
                  <div className="sm:col-span-2">
                    <label htmlFor="email_dep_fiscal" className={labelClass}>
                      <Mail className="mr-1 inline h-4 w-4" />
                      E-mail Departamento Fiscal *
                    </label>
                    <input
                      id="email_dep_fiscal"
                      type="email"
                      placeholder="fiscal@empresa.com.br"
                      className={`${inputBase} ${errors.email_dep_fiscal ? inputError : ""}`}
                      {...register("email_dep_fiscal")}
                    />
                    {errors.email_dep_fiscal && (
                      <p className={errorClass}>{errors.email_dep_fiscal.message}</p>
                    )}
                  </div>
                </div>

                {/* Optional Fields Section */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Dados Opcionais
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Nome Fantasia */}
                  <div>
                    <label htmlFor="nome_fantasia" className={labelClass}>
                      <Building2 className="mr-1 inline h-4 w-4" />
                      Nome Fantasia
                    </label>
                    <input
                      id="nome_fantasia"
                      type="text"
                      placeholder="Nome fantasia da empresa"
                      className={inputBase}
                      {...register("nome_fantasia")}
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="telefone" className={labelClass}>
                      <Phone className="mr-1 inline h-4 w-4" />
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 0000-0000"
                      className={inputBase}
                      {...register("telefone", {
                        onChange: (e) => {
                          e.target.value = maskPhone(e.target.value, false);
                        },
                      })}
                    />
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <MapPin className="mr-1 inline h-3 w-3" />
                    Endereço
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-4 sm:grid-cols-6">
                  {/* CEP */}
                  <div className="sm:col-span-2">
                    <label htmlFor="cep" className={labelClass}>
                      CEP
                    </label>
                    <input
                      id="cep"
                      type="text"
                      placeholder="00000-000"
                      className={inputBase}
                      {...register("cep", {
                        onChange: (e) => {
                          e.target.value = maskCEP(e.target.value);
                          // Call ViaCEP API when CEP is complete
                          const cleaned = e.target.value.replace(/\D/g, "");
                          if (cleaned.length === 8) {
                            fetchAddressByCEP(e.target.value);
                          }
                        },
                      })}
                    />
                  </div>

                  {/* Rua */}
                  <div className="sm:col-span-4">
                    <label htmlFor="rua" className={labelClass}>
                      Rua
                    </label>
                    <input
                      id="rua"
                      type="text"
                      placeholder="Nome da rua"
                      className={inputBase}
                      {...register("rua")}
                    />
                  </div>

                  {/* Número */}
                  <div className="sm:col-span-1">
                    <label htmlFor="numero" className={labelClass}>
                      Número
                    </label>
                    <input
                      id="numero"
                      type="text"
                      placeholder="Nº"
                      className={inputBase}
                      {...register("numero")}
                    />
                  </div>

                  {/* Complemento */}
                  <div className="sm:col-span-2">
                    <label htmlFor="complemento" className={labelClass}>
                      Complemento
                    </label>
                    <input
                      id="complemento"
                      type="text"
                      placeholder="Sala, andar..."
                      className={inputBase}
                      {...register("complemento")}
                    />
                  </div>

                  {/* Bairro */}
                  <div className="sm:col-span-3">
                    <label htmlFor="bairro" className={labelClass}>
                      Bairro
                    </label>
                    <input
                      id="bairro"
                      type="text"
                      placeholder="Nome do bairro"
                      className={inputBase}
                      {...register("bairro")}
                    />
                  </div>

                  {/* Cidade */}
                  <div className="sm:col-span-3">
                    <label htmlFor="cidade" className={labelClass}>
                      Cidade
                    </label>
                    <input
                      id="cidade"
                      type="text"
                      placeholder="Nome da cidade"
                      className={inputBase}
                      {...register("cidade")}
                    />
                  </div>

                  {/* Estado */}
                  <div className="sm:col-span-3">
                    <label htmlFor="estado" className={labelClass}>
                      Estado
                    </label>
                    <select
                      id="estado"
                      className={`${inputBase} cursor-pointer`}
                      {...register("estado")}
                    >
                      <option value="">Selecione...</option>
                      {ESTADOS_BR.map((estado) => (
                        <option key={estado.sigla} value={estado.sigla}>
                          {estado.sigla} - {estado.nome}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:from-blue-500 hover:to-blue-400 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                      Atualizar Meus Dados
                      <ArrowRight className="h-4 w-4 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Seus dados estão seguros e serão utilizados apenas para comunicação interna.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-blue-300/60">
              © {new Date().getFullYear()} MV Automação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
