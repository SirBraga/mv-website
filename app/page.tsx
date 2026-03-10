import {
  Hero,
  About,
  Services,
  ProductsOverview,
  Testimonials,
  CTASection,
  FAQ,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductsOverview />
      <Testimonials />
      <CTASection />
      <FAQ />
      <ContactSection />
    </>
  );
}
