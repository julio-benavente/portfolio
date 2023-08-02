import React from "react";
import AboutImage from "@/../public/assets/images/profile-fake.jpeg";
import Waves from "@/../public/assets/images/waves-two.svg";
import Star from "@/../public/assets/images/blue-star-badge.svg";
import Image from "next/image";
import * as C from "@/components";
import cls from "@/helpers/cls";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";

const index = () => {
  return (
    <div id="experience" className="bg-primaryBg relative z-10 border-base-b">
      <div className={cls("container relative", "xs:pb-72")}>
        <div className="grid grid-flow-row gap-24">
          <PersonalImage />
          <div
            className={cls(
              "grid grid-flow-row gap-y-24",
              "lg:grid-flow-col lg:gap-0 lg:grid-cols-12"
            )}
          >
            <AboutMyExperience />
            <Timeline />
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default index;

const AboutMyExperience = () => {
  return (
    <div
      className={cls(
        "flex flex-col items-center max-w-lg",
        "md:mx-auto",
        "lg:items-start",
        "lg:col-start-1 lg:col-span-5"
      )}
    >
      <C.Badge className="mb-7">Experience</C.Badge>
      <h2 className="text-4xl font-bold text-center mb-4">My experiences</h2>
      <p className={cls("text-lg mb-6 text-center", "lg:text-left")}>
        I have had the pleasure to work with companies across a variety of
        industries. I'm always interested in new, exciting and challenging
        adventures.
      </p>
      <C.Button>Download Resume</C.Button>
    </div>
  );
};

const PersonalImage = () => {
  return (
    <>
      <div className="relative max-w-lg mx-auto">
        <div className="rounded-full border-base overflow-hidden">
          <Image src={AboutImage} alt="profile image" />
        </div>
        <div
          className={cls(
            "relative hidden absolute bottom-48 -left-14 z-10",
            "xs:block"
          )}
        >
          <Image src={Waves} alt="Purple diamonds shining" />
        </div>

        <div
          className={cls(
            "relative hidden absolute top-6 -right-10 z-10",
            "xs:block"
          )}
        >
          <Image src={Star} alt="Blue star badge" />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -rotate-[18deg] uppercase font-extrabold text-sm">
            Let&lsquo;s work together
          </p>
        </div>
      </div>
    </>
  );
};
