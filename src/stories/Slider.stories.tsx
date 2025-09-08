import type { Meta, StoryObj } from "@storybook/react";
import Slider, { type SliderItem } from "@/components/Slider";
import House1 from '@/assets/images/house1.jpg'
import House2 from '@/assets/images/house2.jpg'
import House3 from '@/assets/images/house3.jpg'
import PlayIcon from "@/components/Icons/Play";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

const demoItems: SliderItem[] = [
  {
    id: 1,
    imageUrl: House1,
    badge: "For Rent",
    badgeVariant: "blue",
    badgeIcon: <PlayIcon size={14} />,
    badgeOnClick: () => alert("Badge clicked!"),
  },
  {
    id: 2,
    imageUrl: House2,
    badge: "12 Tickets",
    badgeVariant: 'default'
  },
  {
    id: 3,
    imageUrl: House3,
    badge: "3 Tickets",
    badgeVariant: 'default'
  },
];

export const Default: Story = {
  args: {
    items: demoItems,
  },
};

export const SliderMedium: Story = {
  args: {
    items: demoItems,
    size: 'md'
  },
};

export const SliderLarge: Story = {
  args: {
    items: demoItems,
    size: 'lg'

  },
};



