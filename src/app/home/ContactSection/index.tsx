import React from "react";
import Parragraph from "../components/Parragraph";
import { TextField } from "@mui/material";
import Form from "./Form";
import SectionTitle from "../components/SectionTitle";
import GuyWithSpeaker from "@/../public/assets/images/guy-with-speaker.svg";
import Image from "next/image";
import cls from "@/helpers/cls";

const index = () => {
  return (
    <div>
      <div
        className={cls(
          "py-4 px-4",
          "md:grid md:grid-cols-2 md:mx-8 md:my-12  md:gap-16",
          "lg:mx-12",
          "xl:mx-16 xl:my-32"
        )}
      >
        <div
          className={cls(
            "hidden",
            "md:block",
            "md:w-full md:aspect-square md:max-w-lg"
          )}
        >
          <Image src={GuyWithSpeaker} alt="guy with a speaker" />
        </div>

        <div>
          <SectionTitle className={cls("mb-4", "md:mb-8")}>
            Let&lsquo;s talk
          </SectionTitle>

          <Parragraph>
            <p>
              If you have an offer for me as as a Frontend, Backend or Fullstack
              developer let&lsquo;s get in touch. If you have any suggestion
              about this portfolio let me know how I can improve it.
            </p>
          </Parragraph>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default index;
