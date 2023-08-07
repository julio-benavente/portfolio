import cls from "@/helpers/cls";
import { MutableRefObject, useRef, forwardRef } from "react";

const Timeline = () => {
  return (
    <div className={cls("lg:col-start-6 lg:col-span-7")}>
      {timelineItemsList.map((item) => (
        <TimelineItem key={`${item.date}-${item.company}`} {...item} />
      ))}
    </div>
  );
};

export default Timeline;

interface BaseTimelineItemType {
  date: string;
  position: string;
  company: string;
  content: string | string[];
  color: string;
}
interface TimelineItemType extends BaseTimelineItemType {}

const TimelineItem = (props: TimelineItemType) => {
  return (
    <div
      className={cls("relative group border-l-2 border-black pl-6", "md:ml-52")}
    >
      <div
        className={cls(
          "absolute w-5 aspect-square border-2 rounded-full border-black top-0 left-0 translate-x-[calc(-50%-1px)] bg-white",
          { "bg-purple-50": props.color === "purple" },
          { "bg-green-50": props.color === "green" },
          { "bg-pink-50": props.color === "pink" },
          { "bg-blue-50": props.color === "blue" }
        )}
      ></div>
      <p
        className={cls(
          "uppercase font-bold mb-2",
          "md:absolute md:top-0 md:-left-6 md:-translate-x-full"
        )}
      >
        {props.date}
      </p>
      <p className="text-2xl font-bold mb-3">
        {props.position} at {props.company}
      </p>
      {typeof props.content === "string" && (
        <p className="text-lg group-[:not(:last-of-type)]:pb-9">
          {props.content}
        </p>
      )}

      {Array.isArray(props.content) && (
        <ul className="text-lg group-[:not(:last-of-type)]:pb-9">
          {props.content.map((e, i) => (
            <li
              key={i}
              className="[&:not(:last-of-type)]:mb-2 list-outside list-disc ml-3"
            >
              {e}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const timelineItemsList = [
  {
    date: "Oct 2022 - Present",
    position: "Frontend Developer",
    company: "Solera Systems (AFP Habitat project)",
    content: [
      "Developed the UI KIT for the company's affiliates' interface using React, Styled Components, and Storybook, following the design accurately",
      "Created new features such as the process to affiliate a monthly contribution, a platform to receive documents, the creation of PDF reports, and more",
    ],
    color: "blue",
  },
  {
    date: "Sep 2022 - Oct 2022",
    position: "Frontend Developer",
    company: "Prayaga Solutions",
    content: [
      "Designed and built a new set of UI components for a dashboard, improving the user experience",
      "Contributed to new ideas to improve the user experience of a dashboard which were taken into consideration and finally implemented",
    ],
    color: "pink",
  },
  {
    date: "Apr 2021 - Mar 2022",
    position: "Frontend Developer",
    company: "GCC Networking",
    content: [
      "Created a dashboard using the MERN stack to reduce the number of tickets sent to the support team",
      "Build automation scripts that would increase the team productivity",
    ],
    color: "green",
  },
];
