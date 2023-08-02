// "use client";

import cls from "@/helpers/cls";
import { ReactNode } from "react";
import StarRounded from "@mui/icons-material/StarRounded";

const Badge = ({
  children,
  className,
  props,
}: {
  children: ReactNode;
  className?: string;
  props?: {};
}) => {
  return (
    <div
      className={cls(
        "uppercase px-3 py-1 text-sm font-extrabold bg-yellow-200 rounded-3xl tracking-wider max-w-fit border-base flex items-center",
        className
      )}
      {...props}
    >
      <StarRounded className={cls("text-sm mr-1")} />
      {children}
    </div>
  );
};

export default Badge;
