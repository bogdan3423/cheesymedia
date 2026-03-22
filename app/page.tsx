import { AboutSection } from "@/components/landing/about";
import { FinalCtaSection } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { ProcessSection } from "@/components/landing/process";
import { ServicesSection } from "@/components/landing/services";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { WhyCheesySection } from "@/components/landing/why-cheesy";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyCheesySection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
