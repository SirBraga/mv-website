import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { products, getProductBySlug } from "@/lib/products";
import { ProductHero } from "./product-hero";
import { ProductFeatures } from "./product-features";
import { ProductBenefits } from "./product-benefits";
import { ProductContact } from "./product-contact";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.company}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — ${product.company} | MV Automação`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductBenefits product={product} />
      <ProductContact product={product} />
    </>
  );
}
