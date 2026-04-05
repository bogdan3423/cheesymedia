"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { servicesDetailed } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
      <main>
        {/* Hero Section */}
        <section className="overflow-hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container-wide flex flex-col items-center gap-5 text-center">
            <Reveal>
              <Badge className="w-fit rounded-md border-[2px] border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground shadow-none hover:bg-primary-foreground/20 font-medium text-xs md:text-sm">
                Serviciile Noastre
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.45rem] text-primary-foreground"
                style={{ fontFamily: '"Gravitas One", serif' }}
              >
                Totul de care ai nevoie pentru a crește online
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-base md:text-lg leading-7 md:leading-8 text-white/80">
                De la fotografie și video profesional, la strategie de social media și web design — oferim soluții complete, integrate și orientate spre rezultate.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-2">
                <Button
                  size="lg"
                  className="h-14 w-full sm:w-auto rounded-md border-2 border-primary-foreground bg-accent px-8 text-base font-bold text-accent-foreground shadow-[4px_4px_0px_0px_var(--primary-foreground)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--primary-foreground)]"
                  asChild
                >
                  <Link href="tel:+40742918500">
                    Sună-ne Acum
                    <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Link
                  href="#servicii"
                  className="group flex items-center gap-3 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:text-accent"
                >
                  <span className="underline decoration-primary-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:decoration-accent">
                    Explorează serviciile
                  </span>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-primary-foreground/20 bg-primary-foreground/5 transition-all group-hover:border-accent group-hover:bg-accent/10">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Individual Service Sections */}
        <div id="servicii">
          {servicesDetailed.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;

            return (
              <section
                key={service.slug}
                id={service.slug}
                className={`section-space border-b border-border/70 ${
                  isEven ? "bg-background" : "bg-card"
                }`}
              >
                <div className="container-wide space-y-12 md:space-y-16">
                  {/* Service Header with Image */}
                  <div className={`grid gap-8 lg:gap-14 lg:grid-cols-2 items-center ${!isEven ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""}`}>
                    {/* Text Side */}
                    <div className="space-y-6">
                      <Reveal>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-foreground/90 bg-accent/10 shadow-[3px_3px_0px_0px_var(--foreground)]">
                            <Icon className="h-6 w-6 text-accent" strokeWidth={2.5} />
                          </div>
                          <Badge variant="accent">{`0${index + 1}`}</Badge>
                        </div>
                      </Reveal>

                      <Reveal delay={0.05}>
                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl text-foreground">
                          {service.title}
                        </h2>
                      </Reveal>

                      <Reveal delay={0.1}>
                        <p className="text-base leading-7 text-foreground/80 md:text-lg md:leading-8">
                          {service.longDescription}
                        </p>
                      </Reveal>

                      <Reveal delay={0.15}>
                        <Button variant="accent" size="lg" asChild>
                          <Link href="tel:+40742918500">
                            Solicită o Ofertă
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </Reveal>
                    </div>

                    {/* Image Side */}
                    <Reveal delay={0.1}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-[3px] border-foreground/90 shadow-[6px_6px_0px_0px_var(--foreground)]">
                        <Image
                          src={service.heroImage}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {/* Features Grid */}
                  <div className="space-y-8">
                    <Reveal>
                      <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                        Ce include acest serviciu
                      </h3>
                    </Reveal>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <Reveal key={feature.title} delay={0.05 * featureIndex}>
                            <div className="flex items-start gap-4 rounded-xl border-[2px] border-foreground/90 bg-card p-5 shadow-[3px_3px_0px_0px_var(--foreground)] h-full">
                              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                                <FeatureIcon className="h-5 w-5 text-accent" strokeWidth={2} />
                              </div>
                              <div>
                                <h4 className="text-base font-semibold text-foreground">
                                  {feature.title}
                                </h4>
                                <p className="mt-1.5 text-sm leading-6 text-foreground/70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>

                  {/* Benefits List */}
                  <Reveal delay={0.1}>
                    <div className="rounded-2xl border-[3px] border-foreground/90 bg-primary p-6 md:p-8 shadow-[6px_6px_0px_0px_var(--foreground)]">
                      <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                        De ce să alegi acest serviciu
                      </h3>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.5} />
                            <span className="text-sm font-medium leading-6 text-primary-foreground/90">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>

        {/* Final CTA */}
        <section id="contact" className="section-space bg-background">
          <div className="container-wide">
            <div className="rounded-2xl border-[3px] border-foreground/90 bg-primary shadow-[6px_6px_0px_0px_var(--foreground)] text-primary-foreground p-8 md:p-12 relative overflow-hidden">
              {/* Subtle star decoration */}
              <div className="absolute -top-6 -right-6 text-accent/20">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">
                  Hai să discutăm
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl text-primary-foreground">
                  Vrei să afli cum te putem ajuta?
                </h2>
                <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-primary-foreground/80">
                  Spune-ne ce ai nevoie și îți vom pregăti o propunere personalizată, cu soluții concrete și un plan de acțiune clar.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="accent" size="lg" asChild>
                    <Link href="tel:+40742918500">Sună-ne Acum</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/90 bg-transparent text-primary-foreground shadow-[2px_2px_0px_0px_var(--primary-foreground)] hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/">Înapoi la Pagina Principală</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
