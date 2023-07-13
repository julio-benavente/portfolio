"use client";

import React, { useState } from "react";
import * as C from "@/components";
import cls from "@/helpers/cls";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import projectsList, {
  frontendProjectLists,
  fullstackProjectLists,
  backendProjectLists,
} from "./projectsList";
import {
  BackendSkillsArray,
  DomainKeys,
  DomainsArray,
  FrontendSkillsArray,
  FullstackSkillsArray,
  SkillList,
  ProjectInterface,
} from "./types";
import { useProjectSectionStore } from "./store";

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

const LeftSide = () => {
  const clearSkillsList = useProjectSectionStore(
    (state) => state.clearSkillsList
  );
  const currentSkillsList = useProjectSectionStore(
    (state) => state.currentSkillsList
  );
  return (
    <div className="relative mt-16">
      <h3 className="text-5xl font-bold mb-4">
        <C.TextGradientPrimarySecondary>
          My projects
        </C.TextGradientPrimarySecondary>
      </h3>

      <div className="max-w-xl mb-8 flex flex-col gap-4">
        <p>
          Are you looking for a Are you looking for a Are you looking for a Are
          you looking for a Are you looking for a Are you looking for a
          something
        </p>
        <p>
          If you want to filter the projects by any of this skills mark the
          skill that you want.
        </p>
      </div>
      <SkillsList />
      {currentSkillsList.length > 0 && (
        <p className="text-sm cursor-pointer" onClick={clearSkillsList}>
          Clear filter{" "}
          <span>
            <CloseIcon className="text-sm" fontSize="inherit" />
          </span>
        </p>
      )}
    </div>
  );
};

const SkillsList = () => {
  const currentSkillsList = useProjectSectionStore(
    (state) => state.currentSkillsList
  );
  const currentDomain = useProjectSectionStore((state) => state.currentDomain);
  const updateSkillsList = useProjectSectionStore(
    (state) => state.updateSkillsList
  );

  const skillsByDomain: { [x in DomainKeys]: SkillList[] } = {
    Frontend: FrontendSkillsArray,
    Backend: BackendSkillsArray,
    Fullstack: FullstackSkillsArray,
  };

  const skillIsSelected = (skill: string, listOfSkillsSelected: string[]) =>
    Boolean(
      listOfSkillsSelected.find((skillFromList) => skillFromList === skill)
    );

  return (
    <>
      <div className="flex mb-2 gap-4 flex-wrap">
        {skillsByDomain[currentDomain].map((skill) => (
          <ChipItem
            key={skill}
            data={skill}
            isActive={skillIsSelected(skill, currentSkillsList)}
            onClick={() => updateSkillsList(skill)}
          />
        ))}
      </div>
    </>
  );
};

const RightSide = () => {
  return (
    <div className="grid">
      <DomainsList />
      <ProjectsList />
    </div>
  );
};

const ProjectsList = () => {
  const currentDomain = useProjectSectionStore((state) => state.currentDomain);

  const projectsTyes: { [x in DomainKeys]: ProjectInterface[] } = {
    Frontend: frontendProjectLists,
    Backend: backendProjectLists,
    Fullstack: fullstackProjectLists,
  };

  return (
    <div className="grid grid-cols-2 justify-self-end gap-4">
      {projectsTyes[currentDomain].map((project) => (
        <ProjectItem key={project.name} data={project} />
      ))}
    </div>
  );
};

const ProjectItem = ({ data }: { data: ProjectInterface }) => {
  const currentSkillsList = useProjectSectionStore(
    (state) => state.currentSkillsList
  );

  const isFiltered = data.skills.some((skill) =>
    currentSkillsList.includes(skill)
  );

  return (
    <div
      className={cls(
        "relative w-72 h-72 grid grid-rows-[auto_1fr_auto] p-4 border-primary border-4 bg-white transition-all group",
        "hover:scale-[104%] hover:bg-primary hover:text-white"
      )}
    >
      <div
        className={cls(
          { hidden: !isFiltered },
          "absolute w-2 h-full bg-secondary"
        )}
      ></div>
      <h4 className="font-bold mb-2 group-hover:text-white">{data.name}</h4>
      <p className={cls("group-hover:text-white")}>{data.description}</p>
      <div className="grid grid-flow-col auto-cols-auto gap-x-4 justify-center mt-auto">
        {data.github && <ProjectIcon icon={GitHubIcon} />}
        {data.figma && <ProjectIcon icon={PublicIcon} />}
        {data.website && <ProjectIcon icon={DesignServicesIcon} />}
      </div>
    </div>
  );
};

const ProjectIcon = ({
  icon,
}: {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) => {
  const Icon = icon;
  return <Icon className={cls("cursor-pointer", "hover:text-secondary")} />;
};

const DomainsList = () => {
  const currentDomain = useProjectSectionStore((state) => state.currentDomain);
  const updateDomain = useProjectSectionStore((state) => state.updateDomain);

  return (
    <div className="grid grid-flow-col auto-cols-auto mb-8 justify-end gap-4">
      {DomainsArray.map((domain) => (
        <ChipItem
          key={domain}
          data={domain}
          isActive={currentDomain === domain}
          onClick={() => updateDomain(domain)}
        />
      ))}
    </div>
  );
};

const ChipItem = ({
  data,
  isActive,
  onClick,
}: {
  data: any;
  isActive: boolean;
  onClick?: (props: any) => void;
}) => {
  return (
    <div
      className={cls(
        "grid  px-3 py-1 max-w-min auto-cols-auto grid-flow-col items-center rounded-full gap-2 font-bold cursor-pointer",
        { "bg-primary text-white": isActive }
      )}
      onClick={onClick}
    >
      <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
      {data}
    </div>
  );
};
