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
  Clapperboard,
  Share2,
  CheckCircle2,
  Palette,
  Target,
  TrendingUp,
  Users,
  Zap,
  LayoutDashboard,
  MonitorSmartphone,
  ShoppingCart,
  LineChart,
  CalendarDays,
  MessageSquare,
  Image as ImageIcon,
  Video,
  ClipboardList,
  Eye,
  Lightbulb,
  FileText,
  Aperture,
  Headphones,
  Layers,
  Scissors,
  Sparkles,
  PieChart,
  Send,
  RefreshCcw,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servicii", href: "/services" },
  { label: "Cum Lucrăm?", href: "/process" },
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

export const servicesDetailed = [
  {
    slug: "foto-profesional",
    title: "Servicii Foto Profesionale",
    shortTitle: "Foto Profesional",
    description:
      "Fotografie de produs, corporate, pentru restaurante, clinici și spații comerciale. Ne deplasăm la locația ta cu echipamente profesionale și un concept creativ adaptat domeniului tău, optimizat pentru conversie.",
    icon: Camera,
    heroImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    longDescription:
      "Imaginile profesionale sunt primul lucru pe care îl observă un potențial client. Investiția într-o ședință foto de calitate se reflectă direct în percepția brandului tău — pe website, în campanii publicitare și pe rețelele sociale. Echipa noastră vine cu echipament profesional, direcție creativă și un plan clar, adaptat domeniului tău.",
    features: [
      {
        icon: ImageIcon,
        title: "Fotografie de Produs",
        description:
          "Imagini curate, luminoase și optimizate pentru e-commerce, cataloage și reclame. Fiecare produs este prezentat la cel mai înalt standard.",
      },
      {
        icon: Users,
        title: "Fotografie Corporate & de Echipă",
        description:
          "Portrete profesionale, sesiuni de echipă și imagini din activitatea zilnică — pentru a pune o față umană pe brandul tău.",
      },
      {
        icon: Palette,
        title: "Concept Creativ & Styling",
        description:
          "Nu venim doar cu camera. Dezvoltăm conceptul vizual, alegem locațiile, culorile și compozițiile care transmit mesajul potrivit.",
      },
      {
        icon: Zap,
        title: "Editare & Retușare Avansată",
        description:
          "Colorizare profesională, retușare și optimizare pentru fiecare canal — de la web la print, gata de publicat.",
      },
    ],
    benefits: [
      "Imagini gata de utilizare în 5-7 zile lucrătoare",
      "Deplasare la locația ta în toată România",
      "Echipament profesional de studio și lumini",
      "Concept creativ inclus în fiecare proiect",
      "Fișiere optimizate pentru web, social media și print",
    ],
  },
  {
    slug: "productie-video",
    title: "Servicii Video & Producție",
    shortTitle: "Producție Video",
    description:
      "Conținut dinamic și orientat spre rezultate: clipuri de prezentare, reclame, reels și materiale pentru campanii. Asigurăm scenariu, filmare, montaj și colorizare optimizate pentru captarea atenției în primele secunde.",
    icon: Clapperboard,
    heroImage: "/video.jpg",
    longDescription:
      "Video-ul este cel mai puternic instrument de comunicare digitală. Într-o lume în care atenția se pierde în primele 3 secunde, conținutul tău trebuie să capteze, să comunice și să convingă — rapid. De la concept și scenariu, la filmare și montaj profesional, livrăm materiale video care transformă vizualizări în acțiuni concrete.",
    features: [
      {
        icon: Video,
        title: "Clipuri de Prezentare",
        description:
          "Video-uri de brand care comunică povestea și valorile afacerii tale într-un format profesional și captivant.",
      },
      {
        icon: Target,
        title: "Reclame Video pentru Ads",
        description:
          "Materiale scurte, optimizate pentru Facebook, Instagram și TikTok Ads — gândite să convertească și să reducă costul per achiziție.",
      },
      {
        icon: Film,
        title: "Reels & Conținut Social",
        description:
          "Conținut vertical, dinamic și trendy pentru platformele sociale — reels, stories și clipuri scurte care generează engagement.",
      },
      {
        icon: Palette,
        title: "Montaj & Colorizare Profesională",
        description:
          "Editare cinematică, motion graphics, subtitrări și colorizare — fiecare cadru este rafinat pentru impact maxim.",
      },
    ],
    benefits: [
      "Filmare 4K cu echipament cinema profesional",
      "Scenariu și direcție creativă incluse",
      "Drone pentru filmări aeriene spectaculoase",
      "Materiale adaptate pentru toate platformele",
      "Subtitrări și grafică personalizată inclusă",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Strategie personalizată, analiză, creare de conținut foto-video și administrare completă. Transformăm paginile tale sociale în instrumente reale de atragere a clienților prin planificare și raportare lunară.",
    icon: Share2,
    heroImage: "/socialmedia.jpg",
    longDescription:
      "O prezență activă și strategică pe rețelele sociale nu mai este opțională — este esențială. Dar nu orice postare aduce rezultate. Noi construim strategii bazate pe date, creăm conținut care rezonează cu publicul tău și gestionăm integral paginile tale, astfel încât tu să te poți concentra pe business.",
    features: [
      {
        icon: CalendarDays,
        title: "Planificare & Calendar Editorial",
        description:
          "Strategie lunară cu calendar detaliat, teme de conținut și programare automată — totul planificat în avans.",
      },
      {
        icon: ImageIcon,
        title: "Creare de Conținut Vizual",
        description:
          "Fotografii, grafice și video-uri create special pentru fiecare platformă, cu identitate vizuală consistentă.",
      },
      {
        icon: MessageSquare,
        title: "Community Management",
        description:
          "Răspundem la mesaje și comentarii, interacționăm cu comunitatea ta și construim relații autentice cu urmăritorii.",
      },
      {
        icon: LineChart,
        title: "Raportare & Optimizare Lunară",
        description:
          "Rapoarte clare cu metrici relevante, insights și recomandări de îmbunătățire bazate pe performanța reală.",
      },
    ],
    benefits: [
      "Strategie personalizată pentru fiecare platformă",
      "Conținut original creat de echipa noastră",
      "Administrare completă a conturilor sociale",
      "Raportare lunară cu KPI-uri clare",
      "Creștere organică și engagement măsurabil",
    ],
  },
  {
    slug: "web-design",
    title: "Creare Website-uri (Web Design)",
    shortTitle: "Web Design",
    description:
      "Design și dezvoltare de website-uri premium, perfect optimizate pentru conversii. Construim prezențe digitale rapide și elegante care completează restul eforturilor tale de marketing și convertesc vizitatorii în clienți.",
    icon: Globe,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    longDescription:
      "Website-ul este cartea de vizită digitală a afacerii tale. Un site bine gândit nu doar arată bine — convertește vizitatorii în clienți. Construim website-uri moderne, rapide și optimizate SEO, cu design adaptat identității vizuale a brandului și o experiență excelentă pe orice dispozitiv.",
    features: [
      {
        icon: LayoutDashboard,
        title: "Design UI/UX Modern",
        description:
          "Interfețe elegante, intuitive și gândite pentru a ghida vizitatorii spre acțiune — fie că este o achiziție, o programare sau un apel.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive & Mobile-First",
        description:
          "Fiecare pagină se adaptează perfect pe telefon, tabletă și desktop — pentru o experiență impecabilă, indiferent de dispozitiv.",
      },
      {
        icon: TrendingUp,
        title: "Optimizare SEO & Performanță",
        description:
          "Website-uri rapide, cu scor Lighthouse excelent și structură optimizată pentru motoarele de căutare — să fii găsit de clienți.",
      },
      {
        icon: ShoppingCart,
        title: "Integrări & Funcționalități",
        description:
          "De la formulare de contact și sisteme de programare, la e-commerce și integrări cu CRM — construim ce ai nevoie.",
      },
    ],
    benefits: [
      "Design personalizat, nu template-uri generice",
      "Website-uri rapide cu tehnologii moderne",
      "Optimizare SEO inclusă din start",
      "Responsive pe toate dispozitivele",
      "Suport tehnic și mentenanță post-lansare",
    ],
  },
];

export const processDetailed = [
  {
    slug: "analiza-si-strategie",
    step: "01",
    title: "Analiză și Strategie",
    subtitle: "Fundația",
    description:
      "Nu așteptăm idei de la tine. Analizăm domeniul, concurența și publicul tău țintă, apoi construim un plan strategic clar, adaptat obiectivelor tale de business.",
    icon: Search,
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    longDescription:
      "Fiecare proiect de succes începe cu o înțelegere profundă a contextului. Înainte de a crea orice material vizual sau de a publica prima postare, facem un audit complet al prezenței tale online, analizăm competiția și identificăm oportunitățile reale de creștere. Rezultatul este o strategie clară, cu obiective măsurabile și un calendar editorial detaliat.",
    features: [
      {
        icon: Eye,
        title: "Audit Complet al Prezenței Online",
        description:
          "Evaluăm fiecare canal digital — website, social media, recenzii și listări — pentru a identifica punctele forte și oportunitățile de îmbunătățire.",
      },
      {
        icon: Target,
        title: "Analiza Competiției",
        description:
          "Studiem ce fac competitorii tăi bine și unde au lacune, pentru a construi o strategie care te diferențiază în piață.",
      },
      {
        icon: Users,
        title: "Definirea Publicului Țintă",
        description:
          "Creăm profiluri detaliate ale clienților ideali — demografie, comportament online, nevoi și motivații — pentru mesaje precise.",
      },
      {
        icon: CalendarDays,
        title: "Calendar Editorial & Strategie de Conținut",
        description:
          "Planificăm tipul de conținut, frecvența postărilor și temele lunare, astfel încât fiecare acțiune să fie aliniată cu obiectivele de business.",
      },
    ],
    deliverables: [
      "Raport de audit al prezenței online",
      "Analiză competitivă detaliată",
      "Profiluri buyer persona",
      "Strategie de conținut pe 3 luni",
      "Calendar editorial lunar",
    ],
  },
  {
    slug: "productie-foto-video",
    step: "02",
    title: "Producție Foto-Video",
    subtitle: "Creația",
    description:
      "Ne deplasăm la locația ta cu echipamente profesionale și creăm conținut autentic care transmite valoarea brandului tău și captează atenția publicului.",
    icon: Camera,
    heroImage:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    longDescription:
      "Conținutul vizual de calitate este motorul oricărei strategii de marketing eficiente. Echipa noastră vine la locația ta echipată profesional — camere cinema, lumini de studio, drone și microfoane — pentru a crea imagini și video-uri care nu doar arată bine, ci comunică valorile brandului tău și atrag clienți noi.",
    features: [
      {
        icon: Aperture,
        title: "Ședințe Foto Profesionale",
        description:
          "Fotografie de produs, food, corporate și lifestyle, realizată la locație sau în studio, cu direcție creativă completă.",
      },
      {
        icon: Clapperboard,
        title: "Filmare Cinema 4K",
        description:
          "Echipament profesional de filmare, inclusiv camere cinema, gimbaluri și slider, pentru o calitate vizuală de nivel premium.",
      },
      {
        icon: Headphones,
        title: "Captură Audio Profesională",
        description:
          "Microfoane wireless și recordere dedicate pentru interviuri, testimoniale și voice-over de calitate studio.",
      },
      {
        icon: Compass,
        title: "Filmări Aeriene cu Drone",
        description:
          "Perspective unice și spectaculoase din aer — ideale pentru prezentări de locații, evenimente și conținut imobiliar.",
      },
    ],
    deliverables: [
      "Ședință foto cu minim 30 de imagini editate",
      "Filmări brute organizate și catalogate",
      "Conținut adaptat pentru fiecare platformă",
      "Direcție creativă și styling incluse",
      "Livrare în 5-7 zile lucrătoare",
    ],
  },
  {
    slug: "editare-si-optimizare",
    step: "03",
    title: "Editare și Optimizare",
    subtitle: "Rafinarea",
    description:
      "Aducem la viață conținutul brut printr-un montaj dinamic, colorizare profesională și optimizare pentru fiecare canal de distribuție.",
    icon: Film,
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    longDescription:
      "Materialul brut capătă viață în etapa de post-producție. Aici transformăm ore de filmare și sute de fotografii în conținut rafinat, gata de publicare. Fiecare clip este montat ritmic, colorizat cinematic și optimizat pentru platforma pe care va fi distribuit — fie că vorbim de Instagram Reels, YouTube sau website-ul tău.",
    features: [
      {
        icon: Scissors,
        title: "Montaj Video Dinamic",
        description:
          "Editare ritmică și narativă care menține atenția — cu tranziții fluide, sync pe muzică și pacing optimizat pentru social media.",
      },
      {
        icon: Sparkles,
        title: "Colorizare Cinematică",
        description:
          "Color grading profesional care dă un look unic și consistent întregului tău conținut — adaptat identității vizuale a brandului.",
      },
      {
        icon: Layers,
        title: "Motion Graphics & Subtitrări",
        description:
          "Elemente grafice animate, lower thirds, subtitrări hardcoded și animații de logo care adaugă profesionalism și accesibilitate.",
      },
      {
        icon: ImageIcon,
        title: "Retușare Foto Avansată",
        description:
          "Corecții de culoare, retușare piele, compositing și optimizare a imaginilor pentru web, print și social media.",
      },
    ],
    deliverables: [
      "Video-uri montate și colorizate",
      "Fotografii retușate și optimizate",
      "Versiuni adaptate per platformă (reel, story, feed)",
      "Subtitrări și grafice personalizate",
      "Fișiere în formate și rezoluții multiple",
    ],
  },
  {
    slug: "administrare-si-crestere",
    step: "04",
    title: "Administrare și Creștere",
    subtitle: "Rezultatele",
    description:
      "Ne ocupăm integral de implementare și monitorizare. Gestionăm paginile, publicăm conținutul și măsurăm performanța pentru a optimiza continuu.",
    icon: BarChart3,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    longDescription:
      "Strategia și conținutul de calitate nu generează rezultate dacă nu sunt implementate corect și consistent. Ne ocupăm de publicarea conținutului conform calendarului editorial, gestionăm interacțiunile cu comunitatea ta și monitorizăm performanța fiecărei acțiuni. Lunar, primești un raport clar cu metrici, insight-uri și recomandări de optimizare.",
    features: [
      {
        icon: Send,
        title: "Publicare & Programare",
        description:
          "Publicăm conținutul la momentele optime, conform calendarului editorial, pe toate platformele gestionate — Instagram, Facebook, TikTok, LinkedIn.",
      },
      {
        icon: MessageSquare,
        title: "Community Management",
        description:
          "Răspundem la comentarii și mesaje, interacționăm cu urmăritorii și construim o comunitate activă în jurul brandului tău.",
      },
      {
        icon: PieChart,
        title: "Raportare Lunară Detaliată",
        description:
          "Rapoarte cu metrici clare — reach, engagement, creștere, conversii — însoțite de insight-uri și recomandări concrete.",
      },
      {
        icon: RefreshCcw,
        title: "Optimizare Continuă",
        description:
          "Analizăm ce funcționează și ce nu, ajustăm strategia în timp real și testăm constant noi abordări pentru rezultate mai bune.",
      },
    ],
    deliverables: [
      "Administrare completă a conturilor sociale",
      "Publicare zilnică conform calendarului",
      "Community management activ",
      "Raport lunar cu KPI-uri și insight-uri",
      "Sesiune lunară de feedback și planificare",
    ],
  },
];
