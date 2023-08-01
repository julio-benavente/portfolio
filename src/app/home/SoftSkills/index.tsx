import React from "react";
import * as C from "@/components";
import ExtensionTwoToneIcon from "@mui/icons-material/ExtensionTwoTone";
import Puzzle from "@/../public/assets/images/puzzle-alt.jsx";
import Image from "next/image";
import cls from "@/helpers/cls";
const index = () => {
  return (
    <div id="soft-skills">
      <div className="mx-6 py-28">
        <div className="flex flex-col items-center mb-14">
          <C.Badge className="mb-7">Soft skills</C.Badge>
          <h2 className="text-4xl font-bold text-center">
            This is who you'll be working with
          </h2>
        </div>

        <div className="flex flex-col gap-10">
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
        "p-10 base-border rounded-lg flex flex-col gap-5",
        { "bg-purple-50": props.color === "purple" },
        { "bg-green-50": props.color === "green" },
        { "bg-pink-50": props.color === "pink" },
        { "bg-blue-50": props.color === "blue" }
      )}
    >
      <div className="w-20 aspect-square rounded-full base-border grid place-items-center bg-white">
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
