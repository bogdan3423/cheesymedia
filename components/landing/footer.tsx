import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/components/landing/data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-wide grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Cheesy Media Logo" 
              width={220} 
              height={74} 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/70">
            Agenție strategică de marketing cu sediul în Cluj-Napoca, România. Construită pentru echipe care apreciază estetica modernă și creșterea măsurabilă.
          </p>
          <p className="mt-5 text-sm text-primary-foreground/50">Cluj-Napoca, România</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Navigație</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="mailto:hello@cheesymedia.ro" className="transition-colors hover:text-primary-foreground">
                  hello@cheesymedia.ro
                </Link>
              </li>
              <li>
                <Link href="tel:+40742918500" className="transition-colors hover:text-primary-foreground">
                  +40 742 918 500
                </Link>
              </li>
              <li className="pt-1 text-primary-foreground/50">Instagram · LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
