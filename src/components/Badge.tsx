import * as React from "react";
import clsx from "clsx";

export type BadgeVariant =
  | "default"
  | "black"
  | "gray"
  | "green"
  | "blue"
  | "orange"
  | "red";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
  showBadge?: boolean;
};

export function Badge({
  children,
  variant = "default",
  className,
  icon,
  showBadge = true,
}: BadgeProps) {
  if (!showBadge) return null;

  const base =
    "inline-flex items-center gap-1 rounded-[4px] px-3 py-1 text-[12px] font-bold shadow shadow-sm transition-colors";

  const colorStyles: Record<BadgeVariant, string> = {
    default: "bg-white text-black shadow",
    black: "bg-black text-white",
    gray: "bg-gray-500 text-white",
    green: "bg-green-100 text-green-500",
    blue: "bg-blue-100 text-blue-500",
    orange: "bg-orange-100 text-orange-500",
    red: "bg-red-100 text-red-500",
  };

  return (
    <span
      className={clsx(base, colorStyles[variant], className)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
