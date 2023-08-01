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

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Experience />
        <div
          style={{
            height: "100vh",
            backgroundColor: "rgb(255,0,0,0.3)",
            position: "relative",
            zIndex: "5",
          }}
        ></div>
      </div>
    );
  },
};
