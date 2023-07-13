// "use client";

import * as C from "@/components";
import cls from "@/helpers/cls";
import HeroRightSide from "./home/HeroRightSide";
import HeroLeftSide from "./home/HeroLeftSide";
import ProjectsSection from "./home/ProjectsSection";

export default function Home() {
  return (
    <div className={cls("w-7xl mx-auto")}>
      <C.Navbar />

      <div
        className={cls(
          "relative h-[min(calc(100vh-74px-32px),1000px)] grid grid-cols-2 gap-x-16"
        )}
      >
        <HeroLeftSide />
        <HeroRightSide />
      </div>

      <ProjectsSection />
    </div>
  );
}
