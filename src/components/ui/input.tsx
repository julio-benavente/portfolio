import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldStyles } from "./field";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        fieldStyles,
        "h-11",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
