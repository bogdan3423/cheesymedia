import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { Button } from "@/components/ui/button";

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

        {/* Custom request CTA */}
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center gap-3 text-center pt-4">
            <p className="text-sm font-medium text-foreground/60">
              Ai nevoie de ceva personalizat?
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link href="https://forms.google.com/YOUR-FORM-ID" target="_blank" rel="noopener noreferrer">
                Trimite o cerere personalizată
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
