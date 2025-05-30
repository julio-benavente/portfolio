import cls from "@/helpers/cls";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  frontClassName?: string;
  edgeClassName?: string;
  icon?: React.ElementType;
  href?: string;
  as?: "button" | "a";
  download?: string | boolean;
}

const Button = ({
  children,
  className,
  frontClassName,
  edgeClassName,
  icon: Icon,
  as,
  download,
  href = "#",
  ...props
}: ButtonProps) => {
  const Comp = as === "a" ? "a" : "button";

  return (
    <Comp
      className={cls("relative", className)}
      {...props}
      href={as === "a" ? href : "#"}
      download={as === "a" ? download : null}
      target={!download ? "_blank" : "_self"}
    >
      <div
        className={cls(
          "flex items-center gap-2 relative py-2 px-7 text-lg border-base outline-none rounded-lg font-medium bg-primary transition-all z-10",
          "top-0 duration-200 hover:top-1 justify-center text-gray-50",
          frontClassName
        )}
      >
        {children} {Icon && <Icon className="text-[18px]" />}
      </div>
      <div
        className={cls(
          "absolute w-full h-full top-1.5 border-base rounded-lg transition bg-primary-300",
          edgeClassName
        )}
      ></div>
    </Comp>
  );
};

export default Button;
