import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cls = (...props: any) => {
  return twMerge(clsx(...props));
};

export default cls;
