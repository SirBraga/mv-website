import {
  Monitor,
  ShoppingCart,
  Utensils,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  company: string;
  shortDescription: string;
  heroDescription: string;
  icon: LucideIcon;
  image?: string | null;
  color: string;
  colorLight: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  targetAudience: string[];
  highlights: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    slug: "clipp-pro",
    name: "CLIPP PRO",
    company: "Zucchetti",
    shortDescription:
      "Solução completa de PDV e gestão para micro e pequenas empresas do varejo, com controle de estoque, vendas e conformidade fiscal integrada.",
    heroDescription:
      "O CLIPP PRO é a solução mais robusta da Linha Clipp, desenvolvida pela Zucchetti (antiga Compufour), líder em automação comercial no Brasil com mais de 30 anos de história e 46 mil clientes. É uma plataforma local e completa para a gestão de micro e pequenos varejistas, oferecendo PDV, controle de estoque, gestão financeira e emissão de documentos fiscais em um único sistema.",
    icon: ShoppingCart,
    image: "/clipp-pro.webp",
    color: "accent-500",
    colorLight: "accent-500/10",
    features: [
      {
        title: "PDV Completo",
        description:
          "Frente de caixa ágil e intuitiva com suporte a múltiplas formas de pagamento, descontos, trocas e integração com balanças e leitores.",
      },
      {
        title: "Controle de Estoque",
        description:
          "Gestão completa de produtos por categorias, cores e tamanhos com rastreamento em tempo real, alertas de reabastecimento e inventário automatizado.",
      },
      {
        title: "Gestão Financeira",
        description:
          "Fluxo de caixa, contas a pagar e receber, conciliação bancária automática e balancete financeiro integrados ao PDV.",
      },
      {
        title: "Documentos Fiscais",
        description:
          "Emissão de NF-e, NFC-e, CF-e SAT, MDF-e e CT-e com envio automático por e-mail e armazenamento seguro de XMLs.",
      },
      {
        title: "Multi-Empresas",
        description:
          "Gerencie duas ou mais empresas no mesmo sistema, com controle de matriz e filiais de forma centralizada.",
      },
      {
        title: "Integração Marketplace",
        description:
          "Venda pelo Mercado Livre e outros marketplaces com sincronização automática de estoque e pedidos.",
      },
    ],
    benefits: [
      "Redução de até 70% no tempo de emissão fiscal",
      "Controle total do estoque em tempo real",
      "Relatórios gerenciais para tomada de decisão",
      "Compatível com todos os estados brasileiros",
      "Atualizações fiscais automáticas",
      "Suporte técnico especializado pela MV Automação",
    ],
    targetAudience: [
      "Micro e pequenas empresas",
      "Lojas de varejo em geral",
      "Atacados e distribuidoras",
      "Comércios e prestadores de serviço",
    ],
    highlights: [
      { label: "Clientes", value: "46 mil+" },
      { label: "Parceiros", value: "1.600+" },
      { label: "No mercado", value: "30 anos" },
      { label: "Estados", value: "Todos" },
    ],
  },
  {
    slug: "sistema-host",
    name: "Sistema HOST",
    company: "Hotline Tecnologia",
    shortDescription:
      "ERP completo para varejo com foco em supermercados e material de construção, com frente de caixa estável, conformidade fiscal 360° e ferramentas ágeis.",
    heroDescription:
      "O Sistema HOST da Hotline Tecnologia é um ERP pensado para o varejo em geral, com foco especial em supermercados e lojas de material de construção. Com frente de caixa estável, estoque sob controle e segurança fiscal, o HOST é ideal para empresas que precisam de conformidade tributária completa e ferramentas ágeis de gestão para a nova realidade fiscal brasileira.",
    icon: Monitor,
    image: "/host.webp",
    color: "accent-500",
    colorLight: "accent-500/10",
    features: [
      {
        title: "PDV Estável e Ágil",
        description:
          "Frente de caixa leve e estável, projetada para alto volume de vendas com integração TEF e múltiplas formas de pagamento.",
      },
      {
        title: "Conformidade Fiscal 360°",
        description:
          "Classificação rigorosa por NCM com alinhamento automático via GTIN ou descrição. Gestão nativa de impostos com prontidão para IBS e CBS.",
      },
      {
        title: "ECONF – Conciliação Fiscal",
        description:
          "Vincule recebimentos de PIX e cartões a documentos fiscais emitidos, eliminando divergências entre financeiro e fiscal automaticamente.",
      },
      {
        title: "Controle de Estoque",
        description:
          "Gestão completa de inventário com entrada automática via XML de NF-e, controle de lotes, validades e múltiplos depósitos.",
      },
      {
        title: "Gestão Financeira",
        description:
          "Contas a pagar e receber, fluxo de caixa, DRE gerencial e integração bancária com conciliação automática.",
      },
      {
        title: "Relatórios Gerenciais",
        description:
          "Dashboards e relatórios detalhados de vendas, estoque, financeiro e fiscal para suporte à tomada de decisão estratégica.",
      },
    ],
    benefits: [
      "Preparado para a reforma tributária (IBS/CBS)",
      "Conciliação automática PIX e cartões",
      "Classificação fiscal inteligente por NCM/GTIN",
      "Alta estabilidade para operações de alto volume",
      "Integração com apps e plataformas externas",
      "Suporte dedicado pela MV Automação",
    ],
    targetAudience: [
      "Supermercados e minimercados",
      "Lojas de material de construção",
      "Varejo em geral",
      "Empresas com alto volume de vendas",
    ],
    highlights: [
      { label: "Foco", value: "Varejo" },
      { label: "Fiscal", value: "360°" },
      { label: "Reforma", value: "Pronto" },
      { label: "Suporte", value: "24/7" },
    ],
  },
  {
    slug: "sistema-hiper",
    name: "Sistema Hiper",
    company: "Hiper (Grupo StoneCo)",
    shortDescription:
      "ERP especialista no pequeno varejo com PDV, gestão de estoque, emissão fiscal e e-commerce integrados. Parte do Grupo StoneCo.",
    heroDescription:
      "O Sistema Hiper é o ERP especialista no pequeno varejo brasileiro, parte do Grupo StoneCo. Reunindo PDV, gestão de estoque, controle financeiro, emissão de documentos fiscais e varejo digital em uma única plataforma, o Hiper atende mais de 30 segmentos — de mercados a lojas de roupas. Funciona online e offline, garantindo que você nunca pare de vender.",
    icon: BarChart3,
    image: "/hiper.webp",
    color: "accent-500",
    colorLight: "accent-500/10",
    features: [
      {
        title: "PDV Online e Offline",
        description:
          "Continue vendendo mesmo sem internet com contingência de até 7 dias. App de vendas, configuração flexível e atendimento ao cliente integrado.",
      },
      {
        title: "Gestão de Estoque",
        description:
          "Cadastre e organize estoques físico e virtual. Gestão multilojas, cadastros detalhados, inventário completo e controle de troca de mercadoria.",
      },
      {
        title: "Controle Financeiro",
        description:
          "Inteligência financeira, fluxo de caixa, painel do contador e relatórios financeiros detalhados para manter a saúde do negócio.",
      },
      {
        title: "Plataforma 100% Fiscal",
        description:
          "Homologada para todos os estados: CF-e (SAT SP e Ceará), NF-e, NFC-e, PAF-NFC-e SC, NFS-e, MDF-e, Cupom Fiscal e Nota Fiscal.",
      },
      {
        title: "Meios de Pagamento",
        description:
          "PIX integrado, TEF, POS Connect com Stone, conta digital e múltiplas opções de pagamento para seus clientes.",
      },
      {
        title: "Varejo Digital",
        description:
          "Catálogo digital, loja online e integração com marketplaces para estender seu balcão ao mundo digital e aumentar vendas.",
      },
    ],
    benefits: [
      "Funciona offline por até 7 dias",
      "Homologado em todos os estados brasileiros",
      "Integração nativa com Stone (POS Connect)",
      "Loja online e marketplaces integrados",
      "Painel do Contador para contabilidade simplificada",
      "Suporte MV Automação + Grupo StoneCo",
    ],
    targetAudience: [
      "Mercados e minimercados",
      "Lojas de roupas e calçados",
      "Açougues e casas de carne",
      "Lojas de material de construção",
      "Mais de 30 segmentos do varejo",
    ],
    highlights: [
      { label: "Segmentos", value: "30+" },
      { label: "Grupo", value: "StoneCo" },
      { label: "Offline", value: "7 dias" },
      { label: "Fiscal", value: "100%" },
    ],
  },
  {
    slug: "comanda-10",
    name: "Comanda 10",
    company: "Pedidos 10",
    shortDescription:
      "Sistema de gestão completo para restaurantes, lanchonetes e delivery com comanda eletrônica, bot WhatsApp e integração iFood.",
    heroDescription:
      "O Comanda 10 é a ferramenta completa de gestão para restaurantes, lanchonetes e operações de delivery. Com um software simples e intuitivo, oferece comanda eletrônica, bot de WhatsApp para pedidos automáticos, ficha técnica com cálculo de custo, controle de caixa e integração com iFood e Delivery Much. Do salão ao delivery, tudo em um só sistema.",
    icon: Utensils,
    image: "/comanda-10.webp",
    color: "accent-500",
    colorLight: "accent-500/10",
    features: [
      {
        title: "Comanda Eletrônica",
        description:
          "Atendimento de delivery, balcão, salão e comandas em um único sistema. Garçom acessa via aplicativo no celular ou tablet.",
      },
      {
        title: "Bot WhatsApp",
        description:
          "Atendente virtual que direciona o cliente ao cardápio digital. Pedidos são impressos direto na cozinha ou caixa, sem intervenção manual.",
      },
      {
        title: "Ficha Técnica",
        description:
          "Cadastro de fichas técnicas com cálculo automático de custo de produtos, ajudando no controle de CMV e precificação.",
      },
      {
        title: "Controle de Entregas",
        description:
          "Gestão de conta corrente de entregadores, controle de despachos e fechamento de entregadores de forma simples.",
      },
      {
        title: "Emissão NFC-e",
        description:
          "Emissão de Nota Fiscal de Consumidor Eletrônica integrada ao caixa, garantindo conformidade fiscal nas operações.",
      },
      {
        title: "Integrações",
        description:
          "Integração com iFood, Delivery Much e Pedidos10 para centralizar todos os pedidos em uma única plataforma.",
      },
    ],
    benefits: [
      "Automatização completa do WhatsApp com bot",
      "Pedidos impressos direto na cozinha",
      "Redução de erros com comanda eletrônica",
      "Controle preciso de custos com ficha técnica",
      "Centralização de todos os canais de venda",
      "Implementação e suporte pela MV Automação",
    ],
    targetAudience: [
      "Restaurantes e bares",
      "Lanchonetes e hamburguerias",
      "Pizzarias e delivery",
      "Food trucks",
      "Operações com múltiplos canais de venda",
    ],
    highlights: [
      { label: "Canais", value: "Multi" },
      { label: "WhatsApp", value: "Bot IA" },
      { label: "Integrações", value: "iFood+" },
      { label: "Cozinha", value: "Direto" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
