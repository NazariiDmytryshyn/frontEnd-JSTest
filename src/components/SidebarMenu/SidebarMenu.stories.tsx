import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  component: SidebarMenu,
  title: "Components/SidebarMenu",
  tags: ["autodocs"],
};
export default meta;

export const FlatMenu: StoryObj<typeof SidebarMenu> = {
  name: "Flat Menu (1-level)",
  args: {
    menuItems: [{ label: "Home" }, { label: "Blog" }, { label: "Contact" }],
  },
};

export const NestedMenu: StoryObj<typeof SidebarMenu> = {
  name: "Nested Menu (2-level)",
  args: {
    menuItems: [
      {
        label: "Projects",
        children: [
          {
            label: "Frontend",
            children: [{ label: "React" }, { label: "Vue" }],
          },
          {
            label: "Backend",
            children: [{ label: "Node.js" }, { label: "Go" }],
          },
        ],
      },
    ],
  },
};
