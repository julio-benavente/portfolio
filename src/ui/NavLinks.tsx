"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/site";

// Links are "/#id" so they also work from other pages, like the 404 page
const links = [{ label: "Home", href: "/#home" }, ...navLinks];
const idOf = (href: string) => href.split("#")[1];

// The navbar is about 65px tall, so a section becomes current once its top passes just below it
const OFFSET = 120;

const NavLinks = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      // Pages without these sections, like the 404 page, have no current link
      if (!document.getElementById(idOf(links[0].href))) {
        setActive("");
        return;
      }

      const bottomReached = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      let current = idOf(links[0].href);

      if (bottomReached) {
        current = idOf(links[links.length - 1].href);
      } else {
        links.forEach(({ href }) => {
          const section = document.getElementById(idOf(href));
          if (section && section.getBoundingClientRect().top <= OFFSET) current = idOf(href);
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
        const isActive = active === idOf(href);

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
