import React from "react";
import * as C from "@/components";

import Image from "next/image";
import { GitHub } from "@mui/icons-material";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import worksList from "./worksList";
import cls from "@/helpers/cls";
const index = () => {
  return (
    <div id="works">
      <div className="container xs:pt-72">
        <div className="mb-20 flex flex-col items-center ">
          <C.Badge className="mb-7">My Works</C.Badge>
          <h2 className="text-4xl text-center max-w-xl mx-auto">
            Check out some of my portfolio with creative ideas and design.
          </h2>
        </div>
        <div
          className={cls(
            "grid grid-flow-row gap-y-24 gap-x-10",
            "lg:grid-cols-2"
          )}
        >
          {worksList.map((work) => (
            <WorkItem key={work.name} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

const WorkItem = (props: (typeof worksList)[number]) => {
  return (
    <div className="">
      <div className="w-full aspect-[3/2] base-border rounded-lg overflow-hidden mb-10">
        <Image src={props.image} alt={props.imageAlt} />
      </div>

      <h3 className="text-2xl font-medium mb-2">{props.name}</h3>
      <p className="text-lg mb-5">{props.description}</p>
      <div className="flex flex-row gap-4">
        {props.githubLink && (
          <C.ButtonIcon icon={GitHub} as="a" href={props.githubLink} />
        )}
        {props.websiteLink && (
          <C.ButtonIcon
            icon={ComputerOutlinedIcon}
            as="a"
            href={props.websiteLink}
          />
        )}
      </div>
    </div>
  );
};
