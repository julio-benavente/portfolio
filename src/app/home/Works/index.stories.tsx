import type { Meta, StoryObj } from "@storybook/react";
import Works from "./index";

const meta: Meta<typeof Works> = {
  title: "Pages/Home/Works",
  component: Works,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Works>;

export const Default: Story = {};
