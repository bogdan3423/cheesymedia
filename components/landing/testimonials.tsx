import { testimonials, trustedBy } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="section-space border-b border-border/70">
      <div className="container-wide space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Încredere"
            title="Recomandați de echipe axate pe calitate și inovație"
            description="Menținem toate colaborările cât se poate de simple, dar profund bazate pe date și obiective."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <Card className="h-full border-[2px] border-foreground/90 shadow-[4px_4px_0px_0px_var(--foreground)] transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col justify-between h-full space-y-6 p-6">
                  <p className="text-base font-medium leading-7 text-foreground/80">“{item.quote}”</p>
                  <div className="flex items-center gap-4 border-t-[2px] border-foreground/10 pt-4">
                    <Avatar className="h-12 w-12 border-[2px] border-foreground/90 shadow-[2px_2px_0px_0px_var(--foreground)]">
                      <AvatarFallback className="bg-primary text-primary-foreground font-bold">{item.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-base font-bold">{item.name}</p>
                      <p className="text-sm font-semibold text-foreground/60">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border-[3px] border-foreground/90 bg-accent p-8 shadow-[6px_6px_0px_0px_var(--foreground)]">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.14em] text-accent-foreground/80 text-center">
              Alte branduri cu care am colaborat
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold text-foreground sm:grid-cols-3 lg:grid-cols-6">
              {trustedBy.map((name) => (
                <div key={name} className="rounded-xl border-[2px] border-foreground/90 bg-card px-4 py-3 text-center shadow-[2px_2px_0px_0px_var(--foreground)]">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
