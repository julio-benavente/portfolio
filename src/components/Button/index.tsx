import cls from "@/helpers/cls";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {
  ElementType,
  HTMLAttributes,
  ReactComponentElement,
  ReactElement,
  ReactNode,
} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  frontClassName?: string;
  edgeClassName?: string;
  icon?: React.ElementType;
}

const Button = ({
  children,
  frontClassName,
  edgeClassName,
  icon: Icon,
  ...props
}: ButtonProps) => {
  return (
    <button className="relative" {...props}>
      <div
        className={cls(
          "flex items-center gap-2 relative py-2 px-7 text-lg border-2 border-black outline-none rounded-lg font-medium bg-white transition-all z-10",
          "top-0 duration-300 hover:top-1",
          frontClassName
        )}
      >
        {children} {Icon && <Icon className="text-[18px]" />}
      </div>
      <div
        className={cls(
          "bg-primaryBg absolute w-full h-full top-1.5 border-2 border-black rounded-lg transition",
          edgeClassName
        )}
      ></div>
    </button>
  );
};

export default Button;
