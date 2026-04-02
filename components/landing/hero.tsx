"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleCheck, Phone } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export function HeroSection() {
  return (
    <section id="hero" className="overflow-hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <ContainerScroll
        topComponent={
          <div className="container-wide flex flex-col items-center gap-4 md:gap-6 text-center">
            {/* Badge */}
            <Reveal>
              <Badge className="w-fit rounded-md border-[2px] border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground shadow-none hover:bg-primary-foreground/20 font-medium text-xs md:text-sm">
                Agenție Foto-Video & Social Media Marketing
              </Badge>
            </Reveal>

            {/* Heading */}
            <WordFadeIn
              words="Conținut vizual și strategii care generează rezultate reale."
              className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.45rem] text-primary-foreground drop-shadow-none"
              style={{ fontFamily: '"Gravitas One", serif' }}
              delay={0.08}
            />

            {/* Description */}
            <Reveal delay={0.1}>
              <p className="max-w-xl text-base md:text-lg leading-7 md:leading-8 text-white/80">
                Suntem agenția dedicată brandurilor care vor mai mult decât simple postări online. Combinăm creativitatea foto-video cu strategia pentru a construi o imagine coerentă și a-ți crește vizibilitatea și vânzările.
              </p>
            </Reveal>
          </div>
        }
        titleComponent={null}
      >
        <div className="flex items-center justify-center h-full w-full bg-primary rounded-2xl">
          <Image
            src="/logo.png"
            alt="Cheesy Media Logo"
            height={500}
            width={500}
            className="object-contain max-h-[80%] max-w-[80%]"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>

      {/* CTA & Value Props — below the animated card */}
      <div className="container-wide flex flex-col items-center gap-5 md:gap-6 text-center pb-10 md:pb-20 -mt-4 md:-mt-32 relative z-10">
        {/* CTA Buttons */}
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
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
              href="#services" 
              className="group flex items-center gap-3 text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:text-accent"
            >
              <span className="underline decoration-primary-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:decoration-accent">
                Descoperă serviciile noastre
              </span>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-primary-foreground/20 bg-primary-foreground/5 transition-all group-hover:border-accent group-hover:bg-accent/10">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            </Link>
          </div>
        </Reveal>

        {/* Value Props */}
        <Reveal delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-y-3 sm:flex-row sm:flex-wrap sm:gap-x-6 text-sm text-primary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-accent" />
              Producție foto-video la locație
            </span>
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-accent" />
              Strategie și administrare Social Media
            </span>
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-accent" />
              Orientare către rezultate clare
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
