import cls from "@/helpers/cls";
import { ReactNode } from "react";

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
        "uppercase px-3 py-1 text-sm font-extrabold bg-yellow-200 rounded-3xl tracking-wider max-w-fit border-2 border-black flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
