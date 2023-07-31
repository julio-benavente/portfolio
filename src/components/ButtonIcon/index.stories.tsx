import type { Meta, StoryObj } from "@storybook/react";
import ButtonIcon from "./index";
import { GitHub } from "@mui/icons-material";

const meta: Meta<typeof ButtonIcon> = {
  title: "Components/Button icon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {};
Default.args = {
  icon: GitHub,
};

export const AsLink: Story = {};
AsLink.args = {
  icon: GitHub,
  as: "a",
  href: "https://juliobenavente.com",
};
