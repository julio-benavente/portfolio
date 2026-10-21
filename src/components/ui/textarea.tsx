import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldStyles } from "./field";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        fieldStyles,
        "min-h-[120px] py-2.5",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
