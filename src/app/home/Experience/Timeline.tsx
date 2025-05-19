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
    <div className={cls("relative group border-l-2 border-black pl-6", "md:ml-52")}>
      <div
        className={cls(
          "absolute w-5 aspect-square border-2 rounded-full border-black top-0 left-0 translate-x-[calc(-50%-1px)] bg-primary-200",
          [
            "group-[:nth-child(1)]:bg-primary-200",
            "group-[:nth-child(2)]:bg-primary-300",
            "group-[:nth-child(3)]:bg-primary-400",
            "group-[:nth-child(4)]:bg-primary-500",
            "group-[:nth-child(5)]:bg-primary-600",
            "group-[:nth-child(6)]:bg-primary-700",
          ]
        )}
      ></div>
      <p className={cls("uppercase font-bold mb-2", "md:absolute md:top-0 md:-left-6 md:-translate-x-full")}>
        {props.date}
      </p>
      <p className="text-2xl font-bold mb-3">
        {props.position} at {props.company}
      </p>
      {typeof props.content === "string" && <p className="text-lg group-[:not(:last-of-type)]:pb-9">{props.content}</p>}

      {Array.isArray(props.content) && (
        <ul className="text-lg group-[:not(:last-of-type)]:pb-16">
          {props.content.map((e, i) => (
            <li key={i} className="[&:not(:last-of-type)]:mb-2 list-outside list-disc ml-3 text-gray-300">
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
    date: "July 2024 - Present",
    position: "Senior Frontend Developer",
    company: "Fusion 360",
    content: [
      "Develop and maintain scalable web applications using React and NextJS with Tailwind CSS to enhance UI design and performance.",
      "Automate workflows to streamline project delivery and increase team productivity.",
      "Collaborate with cross-functional teams using Agile methodologies to align development with product goals and UX design.",
    ],
    color: "blue",
  },
  {
    date: "August 2023 - Present",
    position: "Frontend Developer",
    company: "Square Agency LLC",
    content: [
      "Design and implement responsive, user-friendly websites using Figma and NextJS with Tailwind, ensuring smooth UX and functionality.",
      "Build optimized landing pages with a focus on performance, scalability, and cross-browser compatibility.",
      "Communicate closely with clients to understand goals and deliver high-quality, adaptive solutions.",
    ],
    color: "green",
  },
  {
    date: "October 2022 - July 2023",
    position: "Full Stack Developer",
    company: "Solera (AFP Habitat Project)",
    content: [
      "Developed a reusable UI toolkit with Styled Components and MUI, documented using Storybook for modularity and scalability.",
      "Integrated APIs for 401k management system, ensuring reliable data flow and high availability.",
      "Collaborated on user registration UX/UI flows, focusing on intuitive, efficient designs.",
      "Developed backend APIs using Laravel PHP and Oracle SQL, including third-party biometric validation integration to enhance security.",
    ],
    color: "blue",
  },
  {
    date: "September 2022 - October 2022",
    position: "Frontend Developer",
    company: "Prayaga Solutions",
    content: [
      "Identified and proposed UX/UI improvements for an internal communication platform.",
      "Designed Figma UI elements and implemented them as React components for improved dashboard clarity and accessibility.",
    ],
    color: "yellow",
  },
  {
    date: "April 2021 - March 2022",
    position: "Junior Frontend Developer",
    company: "GCC Networking",
    content: [
      "Developed digital client solutions using React to improve workflows and communications.",
      "Created APIs using ExpressJS (NodeJS) and MongoDB to enable secure, real-time data interaction with the frontend.",
    ],
    color: "gray",
  },
];
