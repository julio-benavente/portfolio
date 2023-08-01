import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "200vh", backgroundColor: "#90a4ae" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Navbar />
        {[
          { path: "home", color: "royalblue" },
          { path: "services", color: "greenyellow" },
          { path: "about", color: "goldenrod" },
        ].map((item) => {
          return (
            <div
              key={item.path}
              id={item.path}
              style={{
                minHeight: "80vh",
                width: "100%",
                backgroundColor: item.color,
              }}
            ></div>
          );
        })}
      </div>
    );
  },
};

export const Scroll: Story = {
  render: () => {
    return (
      <div>
        <Navbar />
        {[
          { path: "home", color: "royalblue" },
          { path: "services", color: "greenyellow" },
          { path: "about", color: "goldenrod" },
        ].map((item) => {
          return (
            <div
              key={item.path}
              id={item.path}
              style={{
                minHeight: "80vh",
                width: "100%",
                backgroundColor: item.color,
              }}
            ></div>
          );
        })}
      </div>
    );
  },
};
