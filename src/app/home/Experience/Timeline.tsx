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

type BaseTimelineItemType = (typeof timelineItemsList)[number];
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
      <p className="text-lg group-[:not(:last-of-type)]:pb-9">
        {props.content}
      </p>
    </div>
  );
};

const timelineItemsList = [
  {
    date: "Oct 2022 - Present",
    position: "Frontend Developer",
    company: "Systems Solera",
    content:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a consectetuer eget posuere ut mauris. Donec orci lectus aliquam ut.",
    color: "blue",
  },
  {
    date: "Oct 2021 - Present",
    position: "Frontend Developer",
    company: "Systems Solera",
    content:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a consectetuer eget posuere ut mauris. Donec orci lectus aliquam ut.",
    color: "pink",
  },
  {
    date: "Oct 2020 - Present",
    position: "Frontend Developer",
    company: "Systems Solera",
    content:
      "Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a consectetuer eget posuere ut mauris. Donec orci lectus aliquam ut.",
    color: "green",
  },
];
