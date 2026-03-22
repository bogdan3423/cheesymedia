import {
  BadgeCheck,
  Captions,
  ChartNoAxesCombined,
  CircleDollarSign,
  Compass,
  Globe,
  Megaphone,
  MousePointerClick,
  PenTool,
  Rocket,
  Search,
  Camera,
  Film,
  BarChart3,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Servicii", href: "#services" },
  { label: "Cum Lucrăm?", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Servicii Foto Profesionale",
    description:
      "Fotografie de produs, corporate, pentru restaurante, clinici și spații comerciale. Ne deplasăm la locația ta cu echipamente profesionale și un concept creativ adaptat domeniului tău, optimizat pentru conversie.",
    icon: CircleDollarSign,
  },
  {
    title: "Servicii Video & Producție",
    description:
      "Conținut dinamic și orientat spre rezultate: clipuri de prezentare, reclame, reels și materiale pentru campanii. Asigurăm scenariu, filmare, montaj și colorizare optimizate pentru captarea atenției în primele secunde.",
    icon: PenTool,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategie personalizată, analiză, creare de conținut foto-video și administrare completă. Transformăm paginile tale sociale în instrumente reale de atragere a clienților prin planificare și raportare lunară.",
    icon: Captions,
  },
  {
    title: "Creare Website-uri (Web Design)",
    description:
      "Design și dezvoltare de website-uri premium, perfect optimizate pentru conversii. Construim prezențe digitale rapide și elegante care completează restul eforturilor tale de marketing și convertesc vizitatorii în clienți.",
    icon: Globe,
  },
];

export const differentiators = [
  {
    title: "Nu așteptăm idei de la tine",
    description:
      "Venim noi cu ele. Analizăm domeniul, concurența și publicul, apoi dezvoltăm concepte vizuale și strategii de conținut care atrag atenția.",
  },
  {
    title: "Credem că imaginea vinde",
    description:
      "Investește în imagini care transmit profesionalism și încredere, editate profesional și optimizate pentru website, e-commerce și ads.",
  },
  {
    title: "Credem că video-ul convinge",
    description:
      "Video-ul potrivit crește vizibilitatea, engagement-ul și vânzările. Creăm mesaje care captează atenția direct pe platformele digitale.",
  },
  {
    title: "Credem că strategia face diferența",
    description:
      "Misiunea noastră este să transformăm prezența ta online într-un instrument real de creștere a afacerii, nu doar într-o simplă prezență estetică.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Analiză și Strategie",
    description:
      "Nu așteptăm idei de la tine. Analizăm domeniul, concurența și stabilim un plan clar pentru publicul tău țintă.",
  },
  {
    step: "02",
    title: "Producție Foto-Video",
    description:
      "Ne deplasăm la locația ta cu echipamente profesionale și creăm conținut autentic care comunică valoarea brandului.",
  },
  {
    step: "03",
    title: "Editare și Optimizare",
    description:
      "Aducem la viață conținutul brut printr-un montaj dinamic și colorizare profesională, pregătit pentru web și ads.",
  },
  {
    step: "04",
    title: "Administrare Social Media",
    description:
      "Ne ocupăm integral de implementare. Creăm planul editorial, gestionăm paginile și măsurăm lunar performanța.",
  },
];

export const processTimelineEntries = [
  {
    icon: Search,
    title: "Analiză și Strategie",
    subtitle: "Pasul 01 · Fundația",
    description:
      "Nu așteptăm idei de la tine. Analizăm domeniul, concurența și publicul tău țintă, apoi construim un plan strategic clar, adaptat obiectivelor tale de business.",
    items: [
      "Audit complet al prezenței online existente",
      "Analiza competiției și identificarea oportunităților",
      "Definirea publicului țintă și a mesajelor cheie",
      "Elaborarea strategiei de conținut și a calendarului editorial",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    icon: Camera,
    title: "Producție Foto-Video",
    subtitle: "Pasul 02 · Creația",
    description:
      "Ne deplasăm la locația ta cu echipamente profesionale și creăm conținut autentic care transmite valoarea brandului tău și captează atenția publicului.",
    items: [
      "Ședințe foto profesionale la locație sau în studio",
      "Filmare cu echipament cinema – 4K și drone",
      "Direcție creativă și styling pentru fiecare proiect",
      "Conținut optimizat pentru toate platformele digitale",
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    icon: Film,
    title: "Editare și Optimizare",
    subtitle: "Pasul 03 · Rafinarea",
    description:
      "Aducem la viață conținutul brut printr-un montaj dinamic, colorizare profesională și optimizare pentru fiecare canal de distribuție.",
    items: [
      "Montaj video dinamic cu motion graphics",
      "Colorizare cinematică și retușare foto avansată",
      "Adaptare formatului pentru Instagram, TikTok, YouTube",
      "Subtitrări și elemente grafice personalizate",
    ],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
  {
    icon: BarChart3,
    title: "Administrare și Creștere",
    subtitle: "Pasul 04 · Rezultatele",
    description:
      "Ne ocupăm integral de implementare și monitorizare. Gestionăm paginile, publicăm conținutul și măsurăm performanța pentru a optimiza continuu.",
    items: [
      "Planificare și publicare conform calendarului editorial",
      "Administrare completă a conturilor de social media",
      "Raportare lunară cu metrici clare și recomandări",
      "Optimizare continuă bazată pe date și feedback",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export const testimonials = [
  {
    name: "Andrei Pop",
    role: "Fondator, Verdant Labs",
    quote:
      "Cheesy Media a adus claritate și focus în strategia noastră. Fiecare recomandare a fost practică, susținută de date și implementată rapid.",
    initials: "AP",
  },
  {
    name: "Bianca Ionescu",
    role: "CMO, Northline Health",
    quote:
      "Calitatea creativă este excelentă, dar disciplina operațională iese cel mai mult în evidență. Deciziile sunt mai rapide și bine informate.",
    initials: "BI",
  },
  {
    name: "Mihai Radu",
    role: "Managing Partner, Mureșan Ventures",
    quote:
      "Funcționează ca o echipă de creștere in-house de top. Gust puternic estetic, execuție fluidă și rezultate vizibile lună de lună.",
    initials: "MR",
  },
];

export const trustedBy = [
  "Helio Studio",
  "Mosaic Retail",
  "Verde Biotics",
  "Fjord Capital",
  "Cloudline",
  "Atelier Norte",
];

export const proofStats = [
  { label: "Creștere medie anuală a veniturilor", value: "42%" },
  { label: "Campanii lansate anual", value: "120+" },
  { label: "Retenție cu clienții principali", value: "91%" },
];

export const aboutHighlights = [
  {
    icon: Globe,
    text: "Lucrăm din Cluj-Napoca și mergem direct la locația clienților pentru a crea conținut real, adaptat business-ului lor.",
  },
  {
    icon: Rocket,
    text: "Nu așteptăm direcții — venim cu idei, analizăm și construim strategii clare.",
  },
  {
    icon: BadgeCheck,
    text: "O echipă mică, specializată în foto, video și social media.",
  },
  {
    icon: Megaphone,
    text: "Conținut gândit să atragă atenția și să genereze rezultate, nu doar să arate bine.",
  },
];
