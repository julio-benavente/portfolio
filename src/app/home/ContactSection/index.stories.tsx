import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from "./index";

const meta: Meta<typeof ContactSection> = {
  title: "Pages/Home/Contact section",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {};
