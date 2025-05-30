"use client";

// import HeroImage from "@/../public/assets/images/profile-test-guy.jpeg";
import HeroImage from "@/../public/assets/images/ProfileHero.png";
import StarBadge from "@/../public/assets/images/star-badge.svg";
import Diamonds from "@/../public/assets/images/diamonds.svg";
import Waves from "@/../public/assets/images/waves.svg";
import Image from "next/image";
import cls from "@/helpers/cls";
import ArrowCircleDownOutlined from "@mui/icons-material/ArrowCircleDownOutlined";
import Underline from "@/../public/assets/images/underline.svg";
import * as C from "@/components";
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="bg-primary-bg border-b-2 border-black overflow-hidden">
      <div className="container pt-44">
        <div className={cls("flex flex-col gap-y-12", "lg:grid lg:grid-cols-12")}>
          <HeadlineSide />
          <HeroImageSide />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const HeadlineSide = () => {
  return (
    <div
      className={cls(
        "flex flex-col items-center mb-40",
        "lg:items-start lg:justify-center lg:col-start-1 lg:col-span-6 lg:mb-0"
      )}
    >
      <C.Badge className="mb-7">Hi, I&lsquo;m Julio!</C.Badge>

      <h1 className={cls("text-5xl font-bold text-center mb-4", "lg:text-left")}>
        <span className="relative">
          Frontend
          <span className="absolute w-[100%] inline-block -bottom-2 left-0">
            <Image src={Underline} alt="underline" priority={true} loading="eager" decoding="sync" placeholder="blur" />
          </span>
        </span>{" "}
        developer, specializing in{" "}
        <span className="relative">
          React
          <span className="absolute w-[100%] inline-block -bottom-2 left-0">
            <Image src={Underline} alt="underline" priority={true} loading="eager" decoding="sync" placeholder="blur" />
          </span>
        </span>{" "}
        and NextJS.
      </h1>

      <p className={cls("text-xl text-center mb-7", "lg:text-left")}>
        I&lsquo;m a frontend developer specializing in React and NextJS. I&lsquo;m very passionate and committed about
        the work I do.
      </p>

      <C.Button
        icon={ArrowCircleDownOutlined}
        onClick={() => {
          scroller.scrollTo("experience", {
            duration: 2000,
            delay: 100,
            smooth: "easeOutCubic",

            offset: -75, // Scrolls to element + 50 pixels down the page
          });
        }}
      >
        Read about my experience
      </C.Button>
    </div>
  );
};

const HeroImageSide = () => {
  return (
    <div className={cls("relative max-w-md mx-auto", "lg:col-start-7 col-span-6")}>
      {/* <div
        className={cls(
          "hidden",
          "xs:block xs:absolute xs:top-0 xs:-left-8 z-10"
        )}
      >
        <Image src={StarBadge} alt="Star badge" priority={true} />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -rotate-[18deg] uppercase font-extrabold text-sm">
          Let&lsquo;s work together
        </p>
      </div> */}

      {/* <div
        className={cls("hidden absolute bottom-16 -right-20 z-10", "xs:block")}
      >
        <Image src={Waves} alt="Waves" />
      </div> */}

      <div className={cls("hidden absolute top-12 -right-10 z-10", "xs:block")}>
        <Image src={Diamonds} alt="Diamonds shining" />
      </div>

      <div className="relative rounded-tl-[300px] rounded-tr-[300px] rounded-bl-xl rounded-br-xl overflow-hidden border-base">
        <Image src={HeroImage} alt="Hero image" priority={true} />
      </div>
    </div>
  );
};
