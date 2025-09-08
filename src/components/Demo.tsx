import Slider, { type SliderItem } from "@/components/Slider";
import house1 from "@/assets/images/house1.jpg"
import house2 from "@/assets/images/house2.jpg"
import house3 from "@/assets/images/house3.jpg"
import PlayIcon from "./Icons/Play";

const items: SliderItem[] = [
  {
    id: 1,
    imageUrl: house1,
    badge: "6 tickets",
    badgeVariant: "default",
    badgeIcon: <PlayIcon size={16} />
  },
  {
    id: 2,
    imageUrl: house2,
    badge: "12 Tickets",
    badgeVariant: "default",
  },
  {
    id: 3,
    imageUrl: house3,
    badge: "3 Tickets",
    badgeVariant: "default",
  },
];

export default function Demo() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 gap-5">
      <Slider size="md" items={items} />
    </div>
  );
}
