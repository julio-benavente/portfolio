import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./index";

const meta: Meta<typeof Experience> = {
  title: "Pages/Home/Experience section",
  component: Experience,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Experience>;

export const Default: Story = {};
