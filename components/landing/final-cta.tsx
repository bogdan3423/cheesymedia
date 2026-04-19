"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
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
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-accent">Hai să discutăm</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl text-primary-foreground">
              Ești pregătit să transformi marketing-ul într-un avantaj competitiv?
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-primary-foreground/80">
              Spune-ne obiectivele tale și contextul actual. Vom reveni cu o propunere clară și un plan de acțiune.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="lg" className="h-14 px-10 text-base font-bold rounded-xl" asChild>
                <Link href="tel:+40742918500">Sună-ne Acum</Link>
              </Button>

              <Button variant="accent" size="lg" className="h-14 px-10 text-base font-bold rounded-xl" asChild>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdlbW6mGcgbexrQ_nVpbZzWd_TvJtabzzPsiJuAECGNhH5R5Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  Trimite o cerere personalizată
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="h-14 px-10 text-base font-bold rounded-xl border-primary-foreground/90 bg-transparent text-primary-foreground shadow-[2px_2px_0px_0px_var(--primary-foreground)] hover:bg-primary-foreground/10" asChild>
                <Link href="#services">Vezi Serviciile</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
