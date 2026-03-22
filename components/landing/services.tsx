import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";

export function ServicesSection() {
  return (
    <section id="services" className="section-space border-b border-border/70 bg-background">
      <div className="container-wide space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Servicii"
            title="Sisteme integrate pentru creșterea brandului tău"
            description="Combinăm producția foto-video, administrarea social media și dezvoltarea web pentru rezultate clare."
          />
        </Reveal>

        {/* Interactive Image Accordion */}
        <Reveal delay={0.05}>
          <InteractiveImageAccordion />
        </Reveal>
      </div>
    </section>
  );
}
