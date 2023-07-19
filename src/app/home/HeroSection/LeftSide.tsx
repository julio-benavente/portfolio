import * as C from "@/components";

const LeftSide = () => {
  return (
    <div className="pt-16 pl-16 pb-16 self-center ">
      <h1 className="text-5xl font-semibold mb-4 text-white">
        Are you looking for a Frontend Developer?
      </h1>
      <h4 className="font-light mb-4 text-white">
        Are you looking for a Are you looking for a Are you looking for a Are
        you looking for a Are you looking for a Are you looking for a
      </h4>
      <div className="flex flex-row gap-4">
        <C.Button color="secondary" size="large">
          Let&lsquo;s talk
        </C.Button>
        <C.Button variant="text" className="text-white">
          Download resume
        </C.Button>
      </div>
    </div>
  );
};

export default LeftSide;
