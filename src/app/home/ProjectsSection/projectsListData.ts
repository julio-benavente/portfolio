import {
  BackendProject,
  FrontendProject,
  FullstackProject,
  ProjectInterface,
} from "./types";

export const frontendProjectLists: Array<FrontendProject> = [
  {
    name: "PixelCraft: Responsive E-commerce Website",
    description:
      "A visually stunning and user-friendly e-commerce platform with seamless responsiveness across devices.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Typescript", "Git"],
  },
  {
    name: "WeatherVue: Real-time Weather App",
    description:
      "Stay informed about weather conditions with this intuitive app that provides real-time updates and a sleek interface.",
    github: "https://github.com",
    figma: "https://figma.com",
    website: "https://google.com",
    skills: ["React", "Redux"],
  },
  {
    name: "TaskMaster: Collaborative Task Management Tool",
    description:
      "Boost productivity with this feature-rich task management tool that facilitates seamless collaboration and efficient workflow.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Redux", "Storybook"],
  },
  {
    name: "InstaSnap: Social Media Image Filter App",
    description:
      "Add a creative touch to your photos with InstaSnap's collection of dynamic filters and instant social media sharing capabilities.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Typescript"],
  },
];

export const backendProjectLists: Array<BackendProject> = [
  {
    name: "Backend: Responsive E-commerce Website",
    description:
      "A visually stunning and user-friendly e-commerce platform with seamless responsiveness across devices.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["Express", "MongoDB"],
  },
  {
    name: "Backend: Real-time Weather App",
    description:
      "Stay informed about weather conditions with this intuitive app that provides real-time updates and a sleek interface.",
    github: "https://github.com",
    figma: "https://figma.com",
    website: "https://google.com",
    skills: ["MongoDB"],
  },
  {
    name: "Backend: Collaborative Task Management Tool",
    description:
      "Boost productivity with this feature-rich task management tool that facilitates seamless collaboration and efficient workflow.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["Scoket.io", "Express"],
  },
  {
    name: "Backend: Social Media Image Filter App",
    description:
      "Add a creative touch to your photos with InstaSnap's collection of dynamic filters and instant social media sharing capabilities.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["Scoket.io"],
  },
];

export const fullstackProjectLists: Array<FullstackProject> = [
  {
    name: "Fullstack: Responsive E-commerce Website",
    description:
      "A visually stunning and user-friendly e-commerce platform with seamless responsiveness across devices.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Express", "MongoDB"],
  },
  {
    name: "Fullstack: Real-time Weather App",
    description:
      "Stay informed about weather conditions with this intuitive app that provides real-time updates and a sleek interface.",
    github: "https://github.com",
    figma: "https://figma.com",
    website: "https://google.com",
    skills: ["React", "MongoDB"],
  },
  {
    name: "Fullstack: Collaborative Task Management Tool",
    description:
      "Boost productivity with this feature-rich task management tool that facilitates seamless collaboration and efficient workflow.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Scoket.io", "Express"],
  },
  {
    name: "Fullstack: Social Media Image Filter App",
    description:
      "Add a creative touch to your photos with InstaSnap's collection of dynamic filters and instant social media sharing capabilities.",
    github: "https://github.com",
    figma: "",
    website: "https://google.com",
    skills: ["React", "Scoket.io"],
  },
];

const projectsList: Array<ProjectInterface> = [
  ...frontendProjectLists,
  ...backendProjectLists,
  ...fullstackProjectLists,
];

export default projectsList;
