import * as React from "react";
import { Badge } from "@/components/Badge";
import { type BadgeVariant } from "@/components/Badge";
import clsx from "clsx";

export type SliderItem = {
  id: string | number;
  imageUrl: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
  badgeIcon?: React.ReactNode;
  badgeOnClick?: () => void;
};

export type SliderProps = {
  items: SliderItem[];
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { aspect: "aspect-[274/154]", max: "max-w-[274px]" },
  md: { aspect: "aspect-[320/180]", max: "max-w-[320px]" },
  lg: { aspect: "aspect-[365/210]", max: "max-w-[365px]" },
};

export default function Slider({
  items,
  className,
  size = "sm",
}: SliderProps) {
  const [index, setIndex] = React.useState(0);
  const { aspect, max } = sizes[size];

  const move = (delta: number) => {
    const next = index + delta;
    if (next < 0 || next >= items.length) return;
    setIndex(next);
  };

  const isFirst = index === 0;
  const isLast = index === items.length - 1;

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-[8px] bg-white p-4 outer-box-shadow",
        className
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden rounded-[8px] slider-box-shadow w-full",
          aspect,
          max
        )}
      >
        <img
          src={items[index].imageUrl}
          alt="slide"
          className="h-full w-full object-cover"
        />

        {items[index].badge && (
          <div className="absolute right-2 top-2">
            <Badge variant={items[index].badgeVariant || "default"}
              icon={items[index].badgeIcon}
              onClick={items[index].badgeOnClick}
            >
              {items[index].badge}
            </Badge>
          </div>
        )}

        <button
          onClick={() => move(-1)}
          disabled={isFirst}
          className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer disabled:cursor-not-allowed"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isFirst ? "opacity-5" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.8312 8.46879C21.1311 8.76884 21.2996 9.17573 21.2996 9.59999C21.2996 10.0243 21.1311 10.4311 20.8312 10.7312L15.5624 16L20.8312 21.2688C21.1226 21.5706 21.2839 21.9747 21.2803 22.3942C21.2766 22.8138 21.1083 23.2151 20.8117 23.5117C20.515 23.8084 20.1137 23.9766 19.6942 23.9803C19.2747 23.9839 18.8705 23.8226 18.5688 23.5312L12.1688 17.1312C11.8688 16.8311 11.7003 16.4243 11.7003 16C11.7003 15.5757 11.8688 15.1688 12.1688 14.8688L18.5688 8.46879C18.8688 8.16884 19.2757 8.00034 19.7 8.00034C20.1242 8.00034 20.5311 8.16884 20.8312 8.46879Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          onClick={() => move(1)}
          disabled={isLast}
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer disabled:cursor-not-allowed"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isLast ? "opacity-5" : ""}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1688 23.5312C11.8688 23.2311 11.7003 22.8243 11.7003 22.4C11.7003 21.9757 11.8688 21.5688 12.1688 21.2688L17.4376 16L12.1688 10.7312C11.8773 10.4294 11.7161 10.0253 11.7197 9.60575C11.7233 9.18624 11.8916 8.78494 12.1883 8.48828C12.4849 8.19163 12.8862 8.02336 13.3057 8.01971C13.7252 8.01607 14.1294 8.17734 14.4312 8.46879L20.8312 14.8688C21.1311 15.1688 21.2996 15.5757 21.2996 16C21.2996 16.4243 21.1311 16.8311 20.8312 17.1312L14.4312 23.5312C14.1311 23.8311 13.7242 23.9997 13.3 23.9997C12.8757 23.9997 12.4688 23.8311 12.1688 23.5312Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex justify-between items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={[
                "h-1 rounded-[10px] transition-all",
                i === index ? "bg-white w-[27px]" : "bg-white opacity-50 w-4",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
