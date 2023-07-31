import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "./Testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Pages/Home/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {};
