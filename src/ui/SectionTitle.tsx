import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  /** Section number: how many of the three squares are filled, starting from the right */
  step?: number;
  className?: string;
}

// Full-width outlined bar with a small three-square section indicator
const SectionTitle = ({ children, step = 0, className }: SectionTitleProps) => {
  return (
    <div className={cn("flex items-center justify-between border border-border px-4 py-3", className)}>
      <h2 className="text-lg font-medium">{children}</h2>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={cn("h-2.5 w-2.5 border border-border", n > 3 - step && "border-foreground bg-foreground")}
          />
        ))}
      </span>
    </div>
  );
};

export default SectionTitle;
