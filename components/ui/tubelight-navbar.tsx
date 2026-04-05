"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();

  const getActiveItem = () => {
    // Match by pathname for page routes
    const pageMatch = items.find(
      (item) => item.url.startsWith("/") && pathname === item.url
    );
    if (pageMatch) return pageMatch.name;

    // On the home page, default to "Home"
    if (pathname === "/") return items[0]?.name;

    return items[0]?.name;
  };

  const activeTab = getActiveItem();

  return (
    <nav className={cn("inline-flex", className)}>
      <div className="flex items-center gap-1 bg-primary-foreground/10 border border-primary-foreground/10 backdrop-blur-lg py-1 px-1 rounded-full">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              prefetch={true}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-1.5 rounded-full transition-colors",
                "text-primary-foreground/70 hover:text-primary-foreground",
                isActive && "text-primary-foreground"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary-foreground/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                    <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
