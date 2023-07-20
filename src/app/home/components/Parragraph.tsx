import cls from "@/helpers/cls";
import React, { ReactNode } from "react";

const Parragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cls(
        "flex flex-col gap-6 leading-6 font-light mb-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Parragraph;
