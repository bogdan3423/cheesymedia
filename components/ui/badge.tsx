import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border-[2px] border-foreground/90 px-2.5 py-0.5 text-xs font-bold tracking-wide transition-colors shadow-[2px_2px_0px_0px_var(--foreground)]",
  {
    variants: {
      variant: {
        default: "border-foreground/90 bg-primary text-primary-foreground",
        secondary: "border-foreground/90 bg-secondary text-secondary-foreground",
        accent: "border-foreground/90 bg-accent text-accent-foreground",
        outline: "bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
