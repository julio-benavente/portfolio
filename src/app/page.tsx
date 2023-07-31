// "use client";

import Hero from "./home/Hero";
import SoftSkills from "./home/SoftSkills";
import Experience from "./home/Experience";
import Works from "./home/Works";
import Contact from "./home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <SoftSkills />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}
