"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Clapperboard, Share2, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
}

// --- Data: matches the 4 services with full descriptions ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Foto Profesional",
    description:
      "Fotografie de produs, corporate, pentru restaurante, clinici și spații comerciale. Ne deplasăm la locația ta cu echipamente profesionale și un concept creativ adaptat domeniului tău, optimizat pentru conversie.",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    icon: Camera,
  },
  {
    id: 2,
    title: "Producție Video",
    description:
      "Conținut dinamic și orientat spre rezultate: clipuri de prezentare, reclame, reels și materiale pentru campanii. Asigurăm scenariu, filmare, montaj și colorizare optimizate pentru captarea atenției în primele secunde.",
    imageUrl:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=2070&auto=format&fit=crop",
    icon: Clapperboard,
  },
  {
    id: 3,
    title: "Social Media",
    description:
      "Strategie personalizată, analiză, creare de conținut foto-video și administrare completă. Transformăm paginile tale sociale în instrumente reale de atragere a clienților prin planificare și raportare lunară.",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
    icon: Share2,
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "Design și dezvoltare de website-uri premium, perfect optimizate pentru conversii. Construim prezențe digitale rapide și elegante care completează restul eforturilor tale de marketing și convertesc vizitatorii în clienți.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    icon: Globe,
  },
];

// --- Desktop Accordion Item ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

function DesktopAccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  const Icon = item.icon;

  return (
    <div
      className={`
        relative h-[420px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "flex-[5]" : "flex-[0.55]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "bg-black/35" : "bg-black/65"}`} />

      {/* Bottom gradient */}
      <div className={`absolute inset-x-0 bottom-0 transition-all duration-500 ${isActive ? "h-60 bg-gradient-to-t from-black/90 via-black/50 to-transparent" : "h-32 bg-gradient-to-t from-black/80 to-transparent"}`} />

      {/* Active content */}
      <div
        className={`
          absolute inset-x-0 bottom-0 p-7
          transition-all duration-500 ease-in-out
          ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
        `}
      >
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm font-medium leading-relaxed text-white max-w-md">{item.description}</p>
      </div>

      {/* Inactive vertical label */}
      <span
        className={`
          absolute left-1/2 -translate-x-1/2 text-white font-semibold whitespace-nowrap
          transition-all duration-500 ease-in-out text-sm tracking-wide
          ${isActive ? "opacity-0 bottom-20" : "opacity-80 bottom-16 rotate-90"}
        `}
      >
        {item.title}
      </span>
    </div>
  );
}

// --- Mobile Card Item (tap to expand) ---
interface MobileAccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onTap: () => void;
}

function MobileAccordionItem({ item, isActive, onTap }: MobileAccordionItemProps) {
  const Icon = item.icon;

  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden
        transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? "h-[280px]" : "h-[72px]"}
      `}
      onClick={onTap}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 transition-all duration-500 ${isActive ? "bg-black/35" : "bg-black/60"}`} />

      {/* Bottom gradient (only when active) */}
      <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${isActive ? "h-48 opacity-100" : "h-0 opacity-0"}`} />

      {/* Collapsed: just the title */}
      <div
        className={`
          absolute inset-0 flex items-center gap-3 px-5
          transition-all duration-400 ease-in-out
          ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-base font-bold text-white">{item.title}</h3>
      </div>

      {/* Expanded: full content */}
      <div
        className={`
          absolute inset-x-0 bottom-0 p-5
          transition-all duration-500 ease-in-out
          ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
        <p className="mt-1.5 text-sm font-medium leading-relaxed text-white">{item.description}</p>
      </div>
    </div>
  );
}

// --- Main Exported Component ---
export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Desktop: horizontal accordion filling full width */}
      <div className="hidden md:flex w-full items-stretch gap-3">
        {accordionItems.map((item, index) => (
          <DesktopAccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Mobile: stacked, tap to expand */}
      <div className="flex flex-col gap-3 md:hidden">
        {accordionItems.map((item, index) => (
          <MobileAccordionItem
            key={item.id}
            item={item}
            isActive={mobileActiveIndex === index}
            onTap={() => setMobileActiveIndex(mobileActiveIndex === index ? null : index)}
          />
        ))}
      </div>
    </>
  );
}
