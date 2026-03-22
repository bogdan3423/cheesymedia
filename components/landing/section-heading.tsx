import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl text-foreground">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-foreground/90 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
