"use client";
import cls from "@/helpers/cls";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const ProjectsSection = () => {
  return (
    <div className={cls("py-24")}>
      <div className={cls("grid grid-cols-2")}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default ProjectsSection;
