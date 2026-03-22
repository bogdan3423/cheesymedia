import { aboutHighlights } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-space border-b border-border/70 bg-card">
      <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Despre Noi"
            title="Ne concentrăm pe lucruri simple, făcute bine — de la strategie până la execuție, fără grabă și fără compromisuri."
            description="Punem accent pe claritate și pe execuție atentă, astfel încât ceea ce facem să aibă sens și să funcționeze pe termen lung."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl border-[2px] border-foreground/90 bg-card p-5 shadow-[3px_3px_0px_0px_var(--foreground)]"
              >
                <item.icon className="mt-0.5 h-6 w-6 text-accent shrink-0" strokeWidth={2.5} />
                <p className="text-base font-medium leading-7 text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
