import type { Meta, StoryObj } from "@storybook/react";
import SoftSkills from "./index";

const meta: Meta<typeof SoftSkills> = {
  title: "Pages/Home/Soft skills",
  component: SoftSkills,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SoftSkills>;

export const Default: Story = {};
