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
    default: "bg-white text-gray-900 shadow",
    black: "bg-gray-900 text-white",
    gray: "bg-gray-500 text-white",
    green: "bg-green-50 text-green-500",
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    red: "bg-red-50 text-red-500",
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
