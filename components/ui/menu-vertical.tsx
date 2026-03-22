"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onItemClick?: () => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#FFAC1C",
  skew = -3,
  onItemClick,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-full flex-col gap-5 px-2">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-primary-foreground"
          initial="initial"
          whileHover="hover"
          whileTap="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-8" />
          </motion.div>

          <MotionLink
            href={item.href}
            onClick={onItemClick}
            variants={{
              initial: { x: -32, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-bold text-2xl no-underline tracking-tight"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};
