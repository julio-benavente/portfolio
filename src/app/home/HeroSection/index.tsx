import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const index = () => {
  return (
    <div className="h-[calc(100vh)-74px-32px-32px] max-h-[1000px]">
      <div className="h-full max-w-7xl bg-primary rounded-2xl grid grid-cols-2 gap mx-auto overflow-hidden">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default index;
