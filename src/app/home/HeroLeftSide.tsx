import cls from "@/helpers/cls";
import * as C from "@/components";

const HeroLeftSide = () => {
  return (
    <div className={cls("relative grid content-center -top-[calc(74px-32px)]")}>
      <div className={cls("mb-4 text-5xl uppercase font-bold")}>
        <h1>Are you looking for a</h1>
        <h1
          className={cls(
            "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          )}
        >
          <C.TextGradientPrimarySecondary>
            Frontend Developer
          </C.TextGradientPrimarySecondary>
        </h1>
      </div>
      <div className={cls("mb-8")}>
        <p className={cls("text-xl")}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          alias repudiandae eaque iure, enim.
        </p>
      </div>
      <div className={cls("grid gap-x-4 grid-flow-col justify-start")}>
        <C.Button color="secondary">Let&lsquo;s talk</C.Button>
        <C.Button variant="text" color="secondary">
          Download my resume
        </C.Button>
      </div>
    </div>
  );
};

export default HeroLeftSide;
