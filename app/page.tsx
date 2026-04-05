import { AboutSection } from "@/components/landing/about";
import { FinalCtaSection } from "@/components/landing/final-cta";
import { HeroSection } from "@/components/landing/hero";
import { ProcessSection } from "@/components/landing/process";
import { ServicesSection } from "@/components/landing/services";
import { WhyCheesySection } from "@/components/landing/why-cheesy";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyCheesySection />
      <ProcessSection />
      <AboutSection />
      <FinalCtaSection />
    </main>
  );
}
