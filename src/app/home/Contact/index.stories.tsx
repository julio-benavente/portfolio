import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./index";

const meta: Meta<typeof Contact> = {
  title: "Pages/Home/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {};
