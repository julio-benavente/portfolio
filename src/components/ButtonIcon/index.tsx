import cls from "@/helpers/cls";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ElementType, HTMLAttributes, ReactComponentElement, ReactElement, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  frontClassName?: string;
  edgeClassName?: string;
  icon: React.ElementType;
  href?: string;
  as?: "button" | "a";
}

const Button = ({ children, frontClassName, edgeClassName, icon: Icon, as, href = "#", ...props }: ButtonProps) => {
  const Comp = as === "a" ? "a" : "button";

  return (
    <Comp className="relative" {...props} href={as === "a" ? href : "#"} target="_blank">
      <div
        className={cls(
          "flex items-center gap-2 relative p-2 text-lg border-base outline-none rounded-lg font-medium bg-primary transition-all z-10",
          "top-0 duration-300 hover:top-1",
          frontClassName
        )}
      >
        <Icon className="text-xl text-gray-50" />
      </div>
      <div
        className={cls(
          "bg-primary-bg absolute w-full h-full top-1.5 border-base rounded-lg transition bg-primary-300",
          edgeClassName
        )}
      ></div>
    </Comp>
  );
};

export default Button;
