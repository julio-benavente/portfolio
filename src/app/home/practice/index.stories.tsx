import type { Meta, StoryObj } from "@storybook/react";
import Practice from "./index";

const meta: Meta<typeof Practice> = {
  title: "PRACTICE",
  component: Practice,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Practice>;

export const Default: Story = {};
