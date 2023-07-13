import cls from "@/helpers/cls";
import React, { ReactNode } from "react";

const TextGradientPrimarySecondary = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cls(
        "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default TextGradientPrimarySecondary;
