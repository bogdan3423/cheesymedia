import { differentiators } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function WhyCheesySection() {
  return (
    <section className="section-space border-b border-border/70">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="De ce Cheesy Media"
            title="Partenerul tău de creștere, nu doar o agenție"
            description="Transformăm ideile în rezultate măsurabile prin strategii clare, execuție rapidă și marketing care chiar funcționează."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {differentiators.map((item, index) => (
              <AccordionItem key={item.title} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold">{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
