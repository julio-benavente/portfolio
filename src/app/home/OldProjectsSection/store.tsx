import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { DomainKeys, DomainsArray, SkillList } from "./types";

interface SectionStoreStateInterface {
  currentDomain: DomainKeys;
  updateDomain: (domain: DomainKeys) => void;
  currentSkillsList: Array<SkillList>;
  updateSkillsList: (skillSelected: SkillList) => void;
  clearSkillsList: () => void;
}

export const useProjectSectionStore = create<
  SectionStoreStateInterface,
  [["zustand/immer", never]]
>(
  immer((set, get) => ({
    // Domains
    currentDomain: DomainsArray[0],
    updateDomain: (newDomain) =>
      set((state) => {
        if (state.currentDomain === newDomain) {
          return;
        }

        state.currentDomain = newDomain;
        state.currentSkillsList = [];
      }),
    // Skills
    currentSkillsList: [],
    updateSkillsList: (skillSelected) =>
      set((state: SectionStoreStateInterface) => {
        const elementIndex = get().currentSkillsList.findIndex(
          (e) => e === skillSelected
        );
        const isInList = elementIndex !== -1;

        if (isInList) {
          const currentSkillsList = [...get().currentSkillsList];
          currentSkillsList.splice(elementIndex, 1);

          state.currentSkillsList = currentSkillsList;
          return;
        }

        state.currentSkillsList = [...state.currentSkillsList, skillSelected];
      }),
    clearSkillsList: () =>
      set((state: SectionStoreStateInterface) => {
        state.currentSkillsList = [];
      }),
  }))
);
