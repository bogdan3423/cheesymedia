"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Home, Briefcase, Settings, Phone, Mail } from "lucide-react";

import { navLinks } from "@/components/landing/data";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { MenuVertical } from "@/components/ui/menu-vertical";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Servicii", url: "/services", icon: Briefcase },
  { name: "Cum Lucrăm?", url: "/process", icon: Settings },
  { name: "Contact", url: "#contact", icon: Phone },
];

function Brand() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 transition-transform hover:scale-[1.02]">
      <Image 
        src="/logo.png" 
        alt="Cheesy Media Logo" 
        width={220} 
        height={74} 
        className="h-16 md:h-20 w-auto object-contain"
        priority
      />
    </Link>
  );
}

export function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const mobileMenuItems = navLinks.map((link) => ({
    label: link.label,
    href: link.href,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary">
      <div className="container-wide flex h-20 md:h-24 items-center justify-between">
        <Brand />

        {/* Desktop: Tubelight navbar centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavBar items={navItems} />
        </div>

        <div className="hidden md:block">
          <Button variant="accent" size="sm" asChild>
            <Link href="tel:+40742918500">Sună-ne Acum</Link>
          </Button>
        </div>

        {/* Mobile: hamburger menu */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col bg-primary border-l-primary-foreground/10 text-primary-foreground">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image 
                  src="/logo.png" 
                  alt="Cheesy Media Logo" 
                  width={140} 
                  height={46} 
                  className="h-10 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex-1">
              <MenuVertical
                menuItems={mobileMenuItems}
                color="#FFAC1C"
                skew={-3}
                onItemClick={() => setSheetOpen(false)}
              />
            </div>
            <div className="pb-6 px-2 flex flex-col gap-3">
              <Button variant="accent" className="w-full h-14 text-base font-bold rounded-xl" asChild>
                <Link href="tel:+40742918500" onClick={() => setSheetOpen(false)}>
                  Sună-ne Acum
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="w-full h-14 text-base font-bold rounded-xl border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link href="mailto:hello@cheesymedia.ro" onClick={() => setSheetOpen(false)}>
                  Scrie-ne un Email
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
