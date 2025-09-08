import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/Badge";
import PlayIcon from "@/components/Icons/Play";

const meta: Meta<typeof Badge> = {
  title: "Components/Pill",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "default",
  },
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    variant: "blue",
    icon: <PlayIcon size={16} />,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: "Without Icon",
    variant: "green",
  },
};

export const Clickable: Story = {
  args: {
    children: "Clickable Badge",
    variant: "orange",
    icon: <PlayIcon size={16} />,
    onClick: () => alert("Badge clicked!"),
  },
};
