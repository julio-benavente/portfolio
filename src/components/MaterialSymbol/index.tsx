import cls from "@/helpers/cls";
import React from "react";

const MaterialSymbol = ({
  className,
  children,
}: {
  className?: string;
  // type: "outline" | "rounded" | "sharp"
  children: string;
}) => {
  return (
    <span className={cls("material-symbols-outlined", className)}>
      {children}
    </span>
  );
};

export default MaterialSymbol;
