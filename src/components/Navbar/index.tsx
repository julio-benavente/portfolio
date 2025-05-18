"use client";

import cls from "@/helpers/cls";
import { ButtonIcon } from "@/components";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { scroller, scrollSpy } from "react-scroll";
import useHighlightAcitve from "@/helpers/useHighlightAcitve";
import links from "./navLinks";

const Navbar = () => {
  const { width } = useWindowSize();
  const bigScreenBreakpoint = 1024;
  const isBigScreen = width >= bigScreenBreakpoint;

  return (
    <>
      <SmallScreenNavbar />
      <BigScreenNavbar />
    </>
  );
};

interface NavLinkProps {
  label: string;
  path: string;
  className?: string;
  linkClassName?: string;
  isActive: boolean;
  onClick?: () => any;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div
      className={cls("py-2 mb-1 cursor-pointer", props.className)}
      onClick={() => {
        scroller.scrollTo(props.path.replace("#", ""), {
          duration: 1500,
          delay: 100,
          smooth: "easeOutCubic",

          offset: -75, // Scrolls to element + 50 pixels down the page
        });
        props.onClick && props.onClick();
      }}
    >
      <a
        // href={props.path}
        className={cls(
          "font-bold text-lg text-gray-50 hover:text-primary-300 transition-all duration-300",
          { "text-primary-300": props.isActive },
          props.linkClassName
        )}
      >
        {props.label}
      </a>
    </div>
  );
};

export default Navbar;

const BigScreenNavbar = () => {
  const activeLink = useHighlightAcitve(links.map((e) => e.path));

  return (
    <div className={cls("hidden z-50 fixed top-0 w-full border-base border-t-0 border-x-0 bg-primary-bg", "lg:block")}>
      <div className={cls("container flex flex-column items-center justify-between z-50", "py-4")}>
        <Logo />
        <div>
          <nav className="grid grid-flow-col auto-cols-auto gap-12">
            {links.map((link) => (
              <NavLink key={link.label} {...link} className="mb-0" isActive={activeLink === link.path} />
            ))}
          </nav>
        </div>
        <div className="flex flex-row gap-4">
          <ButtonIcon icon={GitHub} as="a" href="https://github.com/julio-benavente" />
          <ButtonIcon
            icon={LinkedIn}
            as="a"
            href="https://www.linkedin.com/in/julio-benavente-504ba9119/?locale=en_US"
          />
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <a href="#home" className="text-3xl font-bold text-gray-50">
      Julio B.
    </a>
  );
};

const SmallScreenNavbar = () => {
  const activeLink = useHighlightAcitve(links.map((e) => e.path));
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
    <div className={cls("z-50 fixed top-0 w-full border-base border-t-0 border-x-0", "lg:hidden")}>
      <div className={cls("container py-4 flex flex-column items-center justify-between  z-50")}>
        <Logo />
        <div onClick={handleHamburgerMenu} className="cursor-pointer p-1 -right-1" ref={handleHamburgerMenuRef}>
          {[1, 2, 3].map((e) => (
            <span
              key={e}
              className={cls(
                "w-6 h-[3px] bg-black block my-1 rounded-full transition-all duration-300 origin-right relative",
                { "[&:nth-of-type(1)]:-rotate-45": navbarIsOpen },
                {
                  "[&:nth-of-type(1)]:-translate-y-[1px] [&:nth-of-type(1)]:-translate-x-[2px]": navbarIsOpen,
                },
                "[&:nth-of-type(2)]:origin-center",
                {
                  "[&:nth-of-type(2)]:scale-0 [&:nth-of-type(2)]:duration-100": navbarIsOpen,
                },
                { "[&:nth-of-type(3)]:rotate-45": navbarIsOpen },
                {
                  "[&:nth-of-type(3)]:translate-y-[2px] [&:nth-of-type(3)]:-translate-x-[2px]": navbarIsOpen,
                }
              )}
            ></span>
          ))}
        </div>
      </div>

      <div
        className={cls("absolute px-6 w-full transition-transform duration-500 -translate-y-full -z-10", {
          "translate-y-0.5": navbarIsOpen,
        })}
        ref={navRef}
      >
        <nav className={cls("py-8 px-10 border-b-2 border-l-2 border-r-2 border-black rounded-b-lg bg-white")}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              {...link}
              isActive={activeLink === link.path}
              onClick={() => setNavbarIsOpen(false)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};
