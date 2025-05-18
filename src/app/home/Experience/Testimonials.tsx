"use client";

import React, { useState } from "react";
import Image from "next/image";
import Star from "@/../public/assets/images/star.svg";
import cls from "@/helpers/cls";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useDebounce } from "usehooks-ts";
import testimonialsList from "./testimonialsList";

type Direction = "left" | "right";

const Testimonials = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const debouncedValue = useDebounce<number>(currentTestimony, 300);

  const handleTestimoniesNavigation = (direction: Direction, lengthOfArray: number) => {
    if (direction === "left") {
      return currentTestimony === 0
        ? setCurrentTestimony(lengthOfArray - 1)
        : setCurrentTestimony(currentTestimony - 1);
    }

    return currentTestimony === lengthOfArray - 1 ? setCurrentTestimony(0) : setCurrentTestimony(currentTestimony + 1);
  };

  return (
    <div
      className={cls(
        "relative py-12 px-8 border-base rounded-lg mx-2 mt-17 bg-white",
        "xs:bottom-0 xs:left-0 xs:mx-10 xs:z-10",
        "md:py-16 md:px-24 md:left-[0%] md:right-[0%] md:max-w-2xl md:mx-auto"
      )}
    >
      <Arrow handleNavigation={handleTestimoniesNavigation} direction="left" />
      <Arrow handleNavigation={handleTestimoniesNavigation} direction="right" />

      <div className="flex flex-row">
        <AnimatePresence mode="wait">
          <TestimonyItem key={testimonialsList[debouncedValue].id} {...testimonialsList[debouncedValue]} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonyItem = (props: (typeof testimonialsList)[number]) => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      x: "10px",
      transition: {
        duration: 0.3,
      },
    },
    show: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    leave: {
      opacity: 0,
      x: "-10px",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      initial="initial"
      animate={"show"}
      exit={"leave"}
      variants={variants}
    >
      <div className="flex flex-row gap-1">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div key={i}>
              <Image src={Star} alt="An star icon" />
            </div>
          ))}
      </div>

      <p className="text-xl my-4 text-center">{props.testimonial}</p>

      <h4 className="text-lg text-center">{props.person}</h4>
      <p className="text-center">
        {props.position}
        <br />
        at {props.company}
      </p>
    </motion.div>
  );
};

const Arrow = ({
  direction,
  handleNavigation,
}: {
  direction: Direction;
  handleNavigation: (direction: Direction, lengthOfArray: number) => void;
}) => {
  const Icon = direction === "left" ? ArrowBackRoundedIcon : ArrowForwardRoundedIcon;
  return (
    <div
      className={cls(
        "absolute w-12 aspect-square border-base rounded-full bg-yellow-200 top-1/2 -translate-y-1/2 grid place-items-center cursor-pointer",
        { "left-0 -translate-x-1/2": direction === "left" },
        { "right-0 translate-x-1/2": direction === "right" }
      )}
      onClick={() => handleNavigation(direction, testimonialsList.length)}
      onDoubleClick={() => {}}
    >
      <Icon />
    </div>
  );
};
