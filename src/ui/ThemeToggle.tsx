"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/ui/icons";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "theme";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  const apply = (next: boolean) => {
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
  };

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);

    // Follow the browser setting live, unless the visitor picked a theme manually
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {}
      apply(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted && (dark ? <Sun /> : <Moon />)}
    </Button>
  );
};

export default ThemeToggle;
