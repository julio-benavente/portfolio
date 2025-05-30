"use client";

import React, { ReactNode } from "react";
import * as C from "@/components";
import ExtensionTwoToneIcon from "@mui/icons-material/ExtensionTwoTone";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import Puzzle from "@/../public/assets/images/puzzle-alt.jsx";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import Image from "next/image";
import cls from "@/helpers/cls";
import PurpleDiamonds from "@/../public/assets/images/purple-diamonds.svg";
import Thunder from "@/../public/assets/images/thunder.svg";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import MaterialSymbol from "@/components/MaterialSymbol";

const index = () => {
  return (
    <div id="about" className="border-base border-t-0 border-x-0 bg-primary-bg">
      <div className="container">
        <div className="relative flex flex-col items-center mb-14 m-auto">
          <C.Badge className="mb-7">About me</C.Badge>
          <h2 className="text-4xl font-bold text-center max-w-xl">
            I&lsquo;d like you to know who you&lsquo;ll be working with
          </h2>

          <div className={cls("hidden absolute -top-10 right-2", "xs:block", "md:right-14", "lg:right-40")}>
            <Image src={PurpleDiamonds} alt="Purple diamonds shining" />
          </div>

          <div className={cls("hidden absolute -top-10 left-2", "xs:block", "md:left-10", "lg:top-[10%] lg:left-10")}>
            <Image src={Thunder} alt="Purple diamonds shining" />
          </div>
        </div>

        <div className={cls("grid gap-10", "lg:grid-cols-2")}>
          {skillsList.map((skill) => (
            <SkillItem key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

const skillsList: {
  title: string;
  icon: (className?: string) => ReactNode;
  content: string;
  color: string;
}[] = [
  {
    title: "Problem-Solving",
    icon: (className?: string) => <MaterialSymbol className={className}>lightbulb</MaterialSymbol>,
    content:
      "I approach challenges creatively, analyze from different angles, and deliver optimal user experiences. It's fulfilling to overcome hurdles and contribute to project success.",
    color: "purple",
  },
  {
    title: "Attention to Detail",
    icon: (className?: string) => <MaterialSymbol className={className}>pinch_zoom_in</MaterialSymbol>,
    content:
      "I carefully make sure that designs are pixel-perfect and that the code is implemented precisely, producing beautiful user interfaces. This thorough approach results in fewer mistakes, a better user experience, and satisfied customers.",
    color: "green",
  },
  {
    title: "Continuous Learning",
    icon: (className?: string) => <MaterialSymbol className={className}>trending_up</MaterialSymbol>,
    content:
      "I am constantly learning new things and keeping up with the newest trends and technologies. I can produce creative solutions by embracing learning opportunities, which improves the caliber of my work and helps me advance professionally.",
    color: "pink",
  },
  {
    title: "Positive Attitude",
    icon: (className?: string) => <MaterialSymbol className={className}>diversity_2</MaterialSymbol>,
    content:
      "I encourage my colleagues, take on difficulties with enthusiasm, and create a positive work environment. It feeds my imagination and motivates me to complete every endeavor with excellence.",
    color: "blue",
  },
];

const SkillItem = (props: (typeof skillsList)[number]) => {
  return (
    <div
      className={cls(
        "p-10 border-base rounded-lg grid grid-flow-row gap-5 bg-primary-bg-700",
        // { "bg-purple-50": props.color === "purple" },
        // { "bg-green-50": props.color === "green" },
        // { "bg-pink-50": props.color === "pink" },
        // { "bg-blue-50": props.color === "blue" },

        "xs:grid-flow-col"
      )}
    >
      <div
        className={cls(
          "w-20 aspect-square rounded-full border-base grid place-items-center bg-primary-bg-800",
          "xs:justify-self-start"
        )}
      >
        {props.icon(
          cls(
            "text-4xl",
            { "text-purple-300": props.color === "purple" },
            { "text-green-300": props.color === "green" },
            { "text-pink-300": props.color === "pink" },
            { "text-blue-300": props.color === "blue" }
          )
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{props.title}</h3>
        <p className="text-lg text-gray-300">{props.content}</p>
      </div>
    </div>
  );
};
