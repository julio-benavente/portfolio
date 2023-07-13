"use client";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { ProjectInterface } from "./types";
import { useProjectSectionStore } from "./store";
import cls from "@/helpers/cls";

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
        {data.github && <ProjectIcon icon={GitHubIcon} url={data.github} />}
        {data.figma && <ProjectIcon icon={PublicIcon} url={data.figma} />}
        {data.website && (
          <ProjectIcon icon={DesignServicesIcon} url={data.website} />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;

const ProjectIcon = ({
  icon,
  url,
}: {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  url: string;
}) => {
  const Icon = icon;
  return (
    <a href={url} target="_blank">
      <Icon className={cls("hover:text-secondary")} />
    </a>
  );
};
