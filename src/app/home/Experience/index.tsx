import React from "react";
import AboutImage from "@/../public/assets/images/profile-fake.jpeg";
import Image from "next/image";
import C from "@/components";
import cls from "@/helpers/cls";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";

const index = () => {
  return (
    <div className="bg-primaryBg">
      <div className="mx-6 py-28 flex flex-col gap-24">
        <div className="rounded-full base-border overflow-hidden">
          <Image src={AboutImage} alt="profile image" />
        </div>

        <div className="flex flex-col items-center">
          <C.Badge className="mb-7">Experience</C.Badge>
          <h2 className="text-4xl font-bold text-center mb-4">
            My experiences
          </h2>
          <p className="text-lg mb-6 text-center">
            I have had the pleasure to work with companies across a variety of
            industries. I'm always interested in new, exciting and challenging
            adventures.
          </p>
          <C.Button>Download Resume</C.Button>
        </div>

        <div>
          <Timeline />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default index;
