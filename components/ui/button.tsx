import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold tracking-[-0.01em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:-translate-y-px hover:-translate-x-px",
  {
    variants: {
      variant: {
        default: "border-[2px] border-foreground/90 bg-primary text-primary-foreground hover:bg-[#6244C5] shadow-[2px_2px_0px_0px_var(--foreground)]",
        secondary: "border-[2px] border-foreground/90 bg-secondary text-secondary-foreground hover:bg-[#E2DCE8] shadow-[2px_2px_0px_0px_var(--foreground)]",
        accent:
          "border-[2px] border-foreground/90 bg-accent text-accent-foreground hover:bg-[#FFB938] font-bold shadow-[2px_2px_0px_0px_var(--foreground)]",
        outline:
          "border-[2px] border-foreground/90 bg-background hover:bg-muted hover:text-foreground shadow-[2px_2px_0px_0px_var(--foreground)]",
        ghost: "hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
