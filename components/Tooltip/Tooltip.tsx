"use client";

import { Tooltip as AntdTooltip } from "antd";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const tooltipContent = cva([], {
  variants: {
    intent: {
      primary: ["rounded-md", "bg-zinc-700", "font-sans", "text-white"],
    },
    size: {
      md: ["px-4", "py-2.5", "text-xs"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface TooltipProps extends VariantProps<typeof tooltipContent> {
  explainer: React.ReactElement | string;
  children: React.ReactElement;
  className?: string;
  placement?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({
  children,
  explainer,
  intent,
  size,
  placement = "top",
  className,
}: TooltipProps) {
  return (
    <AntdTooltip
      title={explainer}
      placement={placement}
      classNames={{ root: twMerge(tooltipContent({ intent, size, className })) }}
    >
      {children}
    </AntdTooltip>
  );
}
