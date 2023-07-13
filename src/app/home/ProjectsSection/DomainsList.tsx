import ChipItem from "./ChipItem";
import { useProjectSectionStore } from "./store";
import { DomainsArray } from "./types";

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

export default DomainsList;
