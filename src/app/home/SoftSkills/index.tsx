"use client";

import React from "react";
import * as C from "@/components";
import ExtensionTwoToneIcon from "@mui/icons-material/ExtensionTwoTone";
import Puzzle from "@/../public/assets/images/puzzle-alt.jsx";
import Image from "next/image";
import cls from "@/helpers/cls";
import PurpleDiamonds from "@/../public/assets/images/purple-diamonds.svg";
import Thunder from "@/../public/assets/images/thunder.svg";

const index = () => {
  return (
    <div id="about" className="border-base border-t-0 border-x-0">
      <div className="container">
        <div className="relative flex flex-col items-center mb-14 m-auto">
          <C.Badge className="mb-7">About me</C.Badge>
          <h2 className="text-4xl font-bold text-center max-w-xl">
            I'd like you to know who you'll be working with
          </h2>

          <div
            className={cls(
              "hidden absolute -top-10 right-2",
              "xs:block",
              "md:right-14",
              "lg:right-40"
            )}
          >
            <Image src={PurpleDiamonds} alt="Purple diamonds shining" />
          </div>

          <div
            className={cls(
              "hidden absolute -top-10 left-2",
              "xs:block",
              "md:left-10",
              "lg:top-[10%] lg:left-10"
            )}
          >
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

const skillsList = [
  {
    title: "Strategy & Planning",
    icon: ExtensionTwoToneIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum tenetur molestias non.",
    color: "purple",
  },
  {
    title: "Strategy & Planning 2",
    icon: ExtensionTwoToneIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum tenetur molestias non.",
    color: "green",
  },
  {
    title: "Strategy & Planning 3",
    icon: ExtensionTwoToneIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum tenetur molestias non.",
    color: "pink",
  },
  {
    title: "Strategy & Planning 4",
    icon: ExtensionTwoToneIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum tenetur molestias non.",
    color: "blue",
  },
];

const SkillItem = (props: (typeof skillsList)[number]) => {
  return (
    <div
      className={cls(
        "p-10 border-base rounded-lg grid grid-flow-row gap-5",
        { "bg-purple-50": props.color === "purple" },
        { "bg-green-50": props.color === "green" },
        { "bg-pink-50": props.color === "pink" },
        { "bg-blue-50": props.color === "blue" },

        "xs:grid-flow-col"
      )}
    >
      <div
        className={cls(
          "w-20 aspect-square rounded-full border-base grid place-items-center bg-white",
          "xs:justify-self-start"
        )}
      >
        <Puzzle
          className={cls(
            "w-10 h-10",
            { "fill-purple-900": props.color === "purple" },
            { "fill-green-900": props.color === "green" },
            { "fill-pink-900": props.color === "pink" },
            { "fill-blue-900": props.color === "blue" }
          )}
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{props.title}</h3>
        <p className="text-lg">{props.content}</p>
      </div>
    </div>
  );
};
