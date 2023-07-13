import cls from "@/helpers/cls";
import Image from "next/image";

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

export default HeroRightSide;
