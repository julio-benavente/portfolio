import cls from "@/helpers/cls";
import { HTMLAttributes } from "react";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  frontClassName?: string;
  edgeClassName?: string;
  icon?: React.ElementType;
  href?: string;
  as?: "button" | "a";
}

const Button = ({
  children,
  className,
  frontClassName,
  edgeClassName,
  icon: Icon,
  as,
  href = "#",
  ...props
}: ButtonProps) => {
  const Comp = as === "a" ? "a" : "button";

  return (
    <Comp
      className={cls("relative", className)}
      {...props}
      href={as === "a" ? href : "#"}
      target="_blank"
    >
      <div
        className={cls(
          "flex items-center gap-2 relative py-2 px-7 text-lg border-base outline-none rounded-lg font-medium bg-white transition-all z-10",
          "top-0 duration-300 hover:top-1 justify-center",
          frontClassName
        )}
      >
        {children} {Icon && <Icon className="text-[18px]" />}
      </div>
      <div
        className={cls(
          "bg-primaryBg absolute w-full h-full top-1.5 border-base rounded-lg transition",
          edgeClassName
        )}
      ></div>
    </Comp>
  );
};

export default Button;
