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
    default: "bg-white text-[#212121] shadow",
    black: "bg-[#212121] text-white",
    gray: "bg-[#F5F5F5] text-[#9E9E9E]",
    green: "bg-[#E8F5E9] text-[#4CAF50]",
    blue: "bg-[#E3F2FD] text-[#2196F3]",
    orange: "bg-[#FFF3E0] text-[#FF9800]",
    red: "bg-[#FFEBEE] text-[#F44336]",
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
