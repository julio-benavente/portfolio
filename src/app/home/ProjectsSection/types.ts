const Domains = {
  Frontend: "Frontend",
  Backend: "Backend",
  Fullstack: "Fullstack",
} as const;

export const DomainsArray = Object.values(Domains);

export type DomainKeys = (typeof Domains)[keyof typeof Domains];

const FrontendSkills = {
  React: "React",
  Typescript: "Typescript",
  Redux: "Redux",
  Storybook: "Storybook",
  Git: "Git",
} as const;

const BackendSkills = {
  Express: "Express",
  MongoDb: "MongoDB",
  SocketIO: "Scoket.io",
  Git: "Git",
} as const;

export const FrontendSkillsArray = Object.values(FrontendSkills);
export const BackendSkillsArray = Object.values(BackendSkills);
export const FullstackSkillsArray = Object.values({
  ...FrontendSkills,
  ...BackendSkills,
});

export type FrontendSkillsKeys =
  (typeof FrontendSkills)[keyof typeof FrontendSkills];
export type BackendSkillsKeys =
  (typeof BackendSkills)[keyof typeof BackendSkills];
export type FullstackSkillKeys = FrontendSkillsKeys | BackendSkillsKeys;

export interface BaseProjectInterface {
  name: string;
  description: string;
  github?: string;
  figma?: string;
  website?: string;
}

export interface FrontendProject extends BaseProjectInterface {
  skills: Array<FrontendSkillsKeys>;
}

export interface BackendProject extends BaseProjectInterface {
  skills: Array<BackendSkillsKeys>;
}

export interface FullstackProject extends BaseProjectInterface {
  skills: Array<FullstackSkillKeys>;
}

export type ProjectInterface =
  | FrontendProject
  | BackendProject
  | FullstackProject;

export type SkillList =
  | FrontendSkillsKeys
  | BackendSkillsKeys
  | FullstackSkillKeys;
