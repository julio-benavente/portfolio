import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSection from "./index";

const meta: Meta<typeof ProjectsSection> = {
  title: "Pages/Home/Projects section",
  component: ProjectsSection,
  parameters: {
    // layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsSection>;

export const Default: Story = {};
