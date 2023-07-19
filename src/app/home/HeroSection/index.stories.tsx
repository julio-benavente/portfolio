import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./index";

const meta: Meta<typeof HeroSection> = {
  title: "Pages/Home/Hero section",
  component: HeroSection,
  decorators: [
    (story) => <div style={{ padding: "10vh 15vw" }}>{story()}</div>,
  ],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
