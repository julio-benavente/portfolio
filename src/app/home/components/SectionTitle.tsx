import * as C from "@/components";
import cls from "@/helpers/cls";
import { ReactNode } from "react";

const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h2 className={cls("text-3xl font-bold", className)}>{children}</h2>;
};

export default SectionTitle;
