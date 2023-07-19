import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSection from "./index";

const meta: Meta<typeof ProjectsSection> = {
  title: "Pages/Home/Projects section",
  component: ProjectsSection,
  decorators: [
    (story) => <div style={{ padding: "10vh 10vw" }}>{story()}</div>,
  ],
};

export default meta;

type Story = StoryObj<typeof ProjectsSection>;

export const Default: Story = {};
