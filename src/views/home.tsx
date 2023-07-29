import * as C from "@/components";
import cls from "@/helpers/cls";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div
        className={cls(
          "relative h-[min(calc(100vh-74px-32px),1000px)] grid grid-cols-2 gap-x-16"
        )}
      >
        <HeroLeftSide />
        <HeroRightSide />
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className={cls("my-4 px-8 py-4 border rounded-full")}>
      <div
        className={cls("grid gap-x-8 grid-cols-[auto_1fr_auto] items-center")}
      >
        <p>Julio Benavente</p>
        <div className={cls("grid gap-x-8 grid-flow-col justify-end")}>
          {[
            { path: "#home", label: "Home" },
            { path: "#work", label: "Work" },
            { path: "#experience", label: "Experience" },
          ].map((e) => (
            <div key={e.label} className={cls("p-2")}>
              {e.label}
            </div>
          ))}
        </div>
        <C.Button>Let&ldquo;s talk</C.Button>
      </div>
    </div>
  );
};

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
          Frontend Developer
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

const HeroRightSide = () => {
  return (
    <div
      className={cls(
        "w-lg h-lg relative grid self-center justify-self-end -top-[calc(74px-32px)]"
      )}
    >
      <Image
        src="/assets/images/developer-typing.svg"
        alt="dev"
        className="object-fit"
        fill
      />
    </div>
  );
};
