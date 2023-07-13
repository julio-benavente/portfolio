import cls from "@/helpers/cls";
import React from "react";
import * as C from "@/components";

const Navbar = () => {
  return (
    <div className={cls("my-4 px-8 py-4 border rounded-full")}>
      <div
        className={cls("grid gap-x-8 grid-cols-[auto_1fr_auto] items-center")}
      >
        <p className={cls("text-text-headline font-bold text-xl")}>
          Julio Benavente
        </p>
        <div className={cls("grid gap-x-8 grid-flow-col justify-end")}>
          {[
            { path: "#home", label: "Home" },
            { path: "#work", label: "Work" },
            { path: "#experience", label: "Experience" },
          ].map((e) => (
            <NavigationItem {...e} />
          ))}
        </div>
        <C.Button>Let&lsquo;s talk</C.Button>
      </div>
    </div>
  );
};

export default Navbar;

const NavigationItem = ({ label }: { label: string; path: string }) => {
  return (
    <div key={label} className={cls("p-2")}>
      {label}
    </div>
  );
};
