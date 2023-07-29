// "use client";

import * as C from "@/components";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import cls from "@/helpers/cls";
import { useState } from "react";
export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

const links = [
  {
    label: "Home",
    path: "#",
  },
  {
    label: "Services",
    path: "#",
  },
  {
    label: "About",
    path: "#",
  },
  {
    label: "Portfolio",
    path: "#",
  },
  {
    label: "Contact",
    path: "#",
  },
];

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  const navRef = useRef<HTMLDivElement>(null);
  const handleHamburgerMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef, (e) => {
    if (!handleHamburgerMenuRef?.current?.contains(e.target as Node)) {
      setNavbarIsOpen(false);
    }
  });

  return (
    <div>
      <div
        className={cls(
          "py-4 px-6 flex flex-column items-center justify-between border-b-2 border-black bg-white"
        )}
      >
        <p className="text-3xl font-bold">Benavente</p>

        <div
          onClick={handleHamburgerMenu}
          className="cursor-pointer"
          ref={handleHamburgerMenuRef}
        >
          {[1, 2, 3].map((e) => (
            <span
              className={cls(
                "w-6 h-[3px] bg-black block my-1 rounded-full transition-all duration-300 origin-left",
                { "[&:nth-of-type(1)]:rotate-45": navbarIsOpen },
                { "[&:nth-of-type(1)]:-translate-y-[1px]": navbarIsOpen },
                "[&:nth-of-type(2)]:origin-center",
                {
                  "[&:nth-of-type(2)]:scale-0 [&:nth-of-type(2)]:duration-75":
                    navbarIsOpen,
                },
                { "[&:nth-of-type(3)]:-rotate-45": navbarIsOpen },
                { "[&:nth-of-type(3)]:translate-y-[1px]": navbarIsOpen }
              )}
            ></span>
          ))}
        </div>
      </div>

      <div
        className={cls(
          "absolute px-6 w-full transition-transform duration-500 -translate-y-full -z-10",
          {
            "translate-y-0": navbarIsOpen,
          }
        )}
        ref={navRef}
      >
        <nav
          className={cls(
            "py-8 px-10 border-b-2 border-l-2 border-r-2 border-black rounded-b-lg"
          )}
        >
          {links.map((link) => (
            <NavLink {...link} />
          ))}
        </nav>
      </div>
    </div>
  );
};

interface NavLinkProps {
  label: string;
  path: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div className="py-2 mb-1">
      <a href={props.path} className="font-bold text-lg hover:text-primary">
        {props.label}
      </a>
    </div>
  );
};
