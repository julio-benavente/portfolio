import cls from "@/helpers/cls";
import Image from "next/image";
import DeveloperImage from "@/../../public/assets/images/developer-typing.svg";

const RightSide = () => {
  return (
    <div className={cls("relative justify-self-end rounded-2xl")}>
      <div
        className={cls(
          "absolute -left-1/2 flex flex-col gap-6 -rotate-45 origin-top-left"
        )}
      >
        {Array(20)
          .fill(null)
          .map((_, i, a) => {
            const left = ["left-16", "", "left-24"];
            const random = Math.floor(Math.random() * left.length);

            return (
              <div
                className={cls("flex flex-row gap-4 relative", left[random])}
                key={i}
              >
                {Array(4)
                  .fill(() => null)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-32 rounded-full h-4 bg-white/10"
                    ></span>
                  ))}
              </div>
            );
          })}
      </div>
      <div className="h-[700px] pt-16 relative -bottom-[10%] -right-[10%]">
        <Image
          //   src="/assets/images/developer-typing.svg"
          src={DeveloperImage}
          alt="dev"
          className="object-fit relative h-full"
        />
      </div>
    </div>
  );
};

export default RightSide;
