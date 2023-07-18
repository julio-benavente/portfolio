import {
  backendProjectLists,
  frontendProjectLists,
  fullstackProjectLists,
} from "./projectsListData";
import { useProjectSectionStore } from "./store";
import { DomainKeys, ProjectInterface } from "./types";
import ProjectItem from "./ProjectItem";

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

export default ProjectsList;
