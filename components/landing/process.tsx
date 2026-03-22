"use client";

import { processTimelineEntries } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import TimeLine_01 from "@/components/ui/release-time-line";

export function ProcessSection() {
  return (
    <section id="process" className="section-space border-y-2 border-foreground/90 bg-primary text-primary-foreground">
      <div className="container-wide space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Proces"
            title="Un proces simplu, gândit pentru rezultate"
            description="Lucrăm structurat, cu pași clari, astfel încât strategia să se transforme rapid în acțiuni care livrează rezultate."
            align="center"
            className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/90 [&_h2]:mx-auto [&_p]:mx-auto"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <TimeLine_01 entries={processTimelineEntries} />
        </Reveal>
      </div>
    </section>
  );
}
