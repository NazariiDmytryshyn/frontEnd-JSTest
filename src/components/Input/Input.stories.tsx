import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number", "email"],
    },
    clearable: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  name: "Text",
  args: {
    label: "Text input",
    placeholder: "Enter text",
    type: "text",
  },
};

export const Password: Story = {
  name: "Password",
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const PasswordClearable: Story = {
  name: "Password (clearable)",
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    clearable: true,
  },
};

export const Number: Story = {
  name: "Number",
  args: {
    label: "Number",
    placeholder: "Enter number",
    type: "number",
  },
};

export const ClearableText: Story = {
  name: "Text (clearable)",
  args: {
    label: "Clearable input",
    placeholder: "Type something",
    type: "text",
    clearable: true,
  },
};
