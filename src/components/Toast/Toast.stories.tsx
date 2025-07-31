import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { Box } from "@mui/material";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    duration: {
      control: { type: "number" },
    },
    showCloseButton: {
      control: "boolean",
    },
    vertical: {
      control: "select",
      options: ["top", "bottom"],
    },
    horizontal: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

const Template = (args: any) => (
  <Box height={200}>
    <Toast {...args} />
  </Box>
);

export const Default: Story = {
  name: "Default",
  args: {
    duration: 3000,
    showCloseButton: true,
  },
  render: Template,
};

export const ShortDuration: Story = {
  name: "Short Duration (1s)",
  args: {
    duration: 1000,
    showCloseButton: true,
  },
  render: Template,
};

export const LongDuration: Story = {
  name: "Long Duration (10s)",
  args: {
    duration: 10000,
    showCloseButton: true,
  },
  render: Template,
};

export const WithoutCloseButton: Story = {
  name: "Without Close Button",
  args: {
    duration: 3000,
    showCloseButton: false,
  },
  render: Template,
};

export const TopLeft: Story = {
  name: "Top Left",
  args: {
    duration: 3000,
    showCloseButton: true,
    vertical: "top",
    horizontal: "left",
  },
  render: Template,
};

export const BottomCenter: Story = {
  name: "Bottom Center",
  args: {
    duration: 3000,
    showCloseButton: true,
    vertical: "bottom",
    horizontal: "center",
  },
  render: Template,
};
