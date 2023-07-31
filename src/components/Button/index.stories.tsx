import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import ArrowCircleDownOutlined from "@mui/icons-material/ArrowCircleDownOutlined";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
Default.args = {
  children: "Click here",
};

export const WithIcon: Story = {};
WithIcon.args = {
  children: "Click here",
  icon: ArrowCircleDownOutlined,
};
