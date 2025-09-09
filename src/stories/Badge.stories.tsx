import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/Badge";
import PlayIcon from "@/components/Icons/Play";

const meta: Meta<typeof Badge> = {
  title: "Components/Pill",
  component: Badge,
  tags: ["autodocs"],
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

export const ColorOrange: Story = {
  args: {
    children: "Color with icon",
    variant: "orange",
    icon: <PlayIcon size={16} />,
  },
};

export const HiddenBadge: Story = {
  args: {
    children: "Hidden Badge",
    variant: "red",
    showBadge: false,
  },
};
