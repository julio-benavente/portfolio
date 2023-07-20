import React, { ReactNode } from "react";
import PortfolioImageOne from "@/../public/assets/images/portfolio-screenshot.png";
import PortfolioImageTwo from "@/../public/assets/images/portfolio-screenshot-2.png";
import Image from "next/image";
import cls from "@/helpers/cls";
import Parragraph from "../components/Parragraph";
import SectionTitle from "../components/SectionTitle";
const index = () => {
  const fakeProject = {
    name: "Monopoly deal",
    descripion: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita iure corporis, porro pariatur perferendis harum quo delectus quos amet. Qui sequi incidunt, deserunt accusantium porro ut ea corporis, nemo, odio reprehenderit natus in ex tempora. Itaque pariatur eum sed!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam neque ullam, fuga nobis distinctio tempore sapiente illum atque inventore in.",
    ],
    skills: ["React", "Redux", "Storybook", "NextJS"],
    links: [
      {
        name: "Github",
        path: "https://github.com",
      },
      {
        name: "Website",
        path: "https://github.com",
      },
      {
        name: "Figma",
        path: "https://github.com",
      },
    ],
  };

  return (
    <div>
      <div className="p-16">
        <SectionTitle className="mb-16">Projects</SectionTitle>

        <div className="flex flex-col gap-32">
          {[fakeProject, fakeProject].map((project) => {
            return (
              <div className="grid grid-cols-2 gap-8" key={project.name}>
                <div>
                  <h3 className="text-2xl mb-4 font-semibold">
                    {project.name}
                  </h3>
                  <Parragraph>
                    {project.descripion.map((e: string) => (
                      <p>{e}</p>
                    ))}
                  </Parragraph>

                  <div className="flex flex-row flex-wrap gap-4 mb-8">
                    {project.skills.map((e) => (
                      <div className="whitespace-nowrap px-4 py-2 bg-secondary-100 rounded text-sm font-semibold text-secondary-700">
                        {e}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row flex-wrap gap-4 mb-8">
                    {project.links.map((link) => (
                      <a
                        className="text-primary font-semibold underline underline-offset-4"
                        target="_blank"
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative w-full aspect-[3/2] border-4 border-secondary rounded-lg shadow-lg shadow-secondary/40 overflow-hidden">
                    <Image
                      src={PortfolioImageOne}
                      alt={"Portfolio image"}
                      className="w-[calc(100%-8px)] absolute hover:scale-105 transition-all"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
