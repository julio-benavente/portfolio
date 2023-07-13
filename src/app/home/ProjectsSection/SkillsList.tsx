import ChipItem from "./ChipItem";
import { useProjectSectionStore } from "./store";
import {
  BackendSkillsArray,
  DomainKeys,
  FrontendSkillsArray,
  FullstackSkillsArray,
  SkillList,
} from "./types";

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

export default SkillsList;
