// "use client";

import * as C from "@/components";
import cls from "@/helpers/cls";
import HeroSection from "./home/HeroSection";
import ProjectsSection from "./home/ProjectsSection";
export default function Home() {
  return (
    <div className={cls("w-7xl mx-auto")}>
      <C.Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
