"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/site";

const links = [{ label: "Home", href: "#home" }, ...navLinks];

// The navbar is about 65px tall, so a section becomes current once its top passes just below it
const OFFSET = 120;

const NavLinks = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const bottomReached = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      let current = links[0].href.slice(1);

      if (bottomReached) {
        current = links[links.length - 1].href.slice(1);
      } else {
        links.forEach(({ href }) => {
          const section = document.querySelector<HTMLElement>(href);
          if (section && section.getBoundingClientRect().top <= OFFSET) current = href.slice(1);
        });
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="flex gap-5 text-base font-medium">
      {links.map(({ label, href }) => {
        const isActive = active === href.slice(1);

        return (
          <a
            key={href}
            href={href}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group relative py-2 transition-colors duration-300",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-foreground transition-[width] duration-300 ease-out",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default NavLinks;
