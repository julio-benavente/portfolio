import DomainsList from "./DomainsList";
import ProjectsList from "./ProjectsList";

const RightSide = () => {
  return (
    <div className="grid">
      <DomainsList />
      <ProjectsList />
    </div>
  );
};

export default RightSide;
