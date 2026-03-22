"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

/**
 * Scroll-driven timeline – the card closest to the viewport center expands.
 * Adapted for Cheesy Media's purple/orange brand palette.
 */
export default function TimeLine_01({
  title,
  description,
  entries = [],
  className,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className={className}>
      {/* Optional header */}
      {(title || description) && (
        <div className="mx-auto max-w-3xl">
          {title && (
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mb-6 text-base text-primary-foreground/80 md:text-lg">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="mx-auto mt-10 max-w-4xl space-y-12 md:mt-16 md:space-y-20">
        {entries.map((entry, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-10"
              aria-current={isActive ? "true" : "false"}
            >
              {/* Sticky meta column */}
              <div className="top-8 flex h-min w-full shrink-0 items-center gap-4 md:sticky md:w-56">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border-2 transition-colors duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground border-foreground/90 shadow-[2px_2px_0px_0px_var(--foreground)]"
                        : "bg-primary-foreground/10 text-primary-foreground/60 border-primary-foreground/20"
                    }`}
                  >
                    <entry.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-primary-foreground/60"
                      }`}
                    >
                      {entry.title}
                    </span>
                    <span className="text-xs text-primary-foreground/50">
                      {entry.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Invisible sentinel for scroll detection */}
              <div
                ref={(el) => setSentinelRef(el, index)}
                aria-hidden
                className="absolute -top-24 left-0 h-12 w-12 opacity-0"
              />

              {/* Content column */}
              <article
                className={
                  "flex flex-1 min-w-0 flex-col rounded-2xl border-2 p-3 transition-all duration-300 " +
                  (isActive
                    ? "border-foreground/90 bg-primary-foreground/10 shadow-[4px_4px_0px_0px_var(--foreground)]"
                    : "border-primary-foreground/15 bg-primary-foreground/5")
                }
              >
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={`${entry.title} visual`}
                    className="mb-4 w-full h-56 md:h-72 rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <div className="space-y-4 p-1">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3
                      className={
                        "text-base font-semibold leading-tight tracking-tight md:text-lg transition-colors duration-200 " +
                        (isActive
                          ? "text-primary-foreground"
                          : "text-primary-foreground/60")
                      }
                    >
                      {entry.title}
                    </h3>

                    <p
                      className={
                        "text-sm leading-relaxed transition-all duration-300 " +
                        (isActive
                          ? "text-primary-foreground/90 line-clamp-none"
                          : "text-primary-foreground/50 line-clamp-2")
                      }
                    >
                      {entry.description}
                    </p>
                  </div>

                  {/* Expandable content */}
                  <div
                    aria-hidden={!isActive}
                    className={
                      "grid transition-all duration-500 ease-out " +
                      (isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0")
                    }
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 pt-2">
                        {entry.items && entry.items.length > 0 && (
                          <div className="rounded-xl border-2 border-primary-foreground/15 bg-primary-foreground/5 p-4">
                            <ul className="space-y-2.5">
                              {entry.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-2.5 text-sm text-primary-foreground/80"
                                >
                                  <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                  <span className="leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {entry.button && (
                          <div className="flex justify-end">
                            <Button
                              variant="accent"
                              size="sm"
                              className="group"
                              asChild
                            >
                              <a
                                href={entry.button.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {entry.button.text}
                                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
