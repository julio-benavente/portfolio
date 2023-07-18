"use client";

import SkillsList from "./SkillsList";
import { useProjectSectionStore } from "./store";
import CloseIcon from "@mui/icons-material/Close";
import * as C from "@/components";
import SectionTitle from "../components/SectionTitle";
import SectionInfoContainer from "../components/SectionInfoContainer";

const LeftSide = () => {
  const clearSkillsList = useProjectSectionStore(
    (state) => state.clearSkillsList
  );
  const currentSkillsList = useProjectSectionStore(
    (state) => state.currentSkillsList
  );
  return (
    <div className="relative mt-16">
      <SectionTitle>My projects</SectionTitle>

      <SectionInfoContainer>
        <p>
          Are you looking for a Are you looking for a Are you looking for a Are
          you looking for a Are you looking for a Are you looking for a
          something
        </p>
        <p>
          To filter the projects by any of these skills, clic on the skills
          below.
        </p>
      </SectionInfoContainer>

      <SkillsList />
      {currentSkillsList.length > 0 && (
        <p
          className="text-sm cursor-pointer max-w-fit"
          onClick={clearSkillsList}
        >
          Clear filter{" "}
          <span>
            <CloseIcon className="text-sm" fontSize="inherit" />
          </span>
        </p>
      )}
    </div>
  );
};

export default LeftSide;
