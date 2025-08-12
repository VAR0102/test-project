"use client";

import React from "react";

type Variant = "TabsSingle" | "TabsGroup";

type Status = "default" | "1st" | "2nd" | "3rd" | "4th" | "5th";

interface LargeTabsProps {
  variant: Variant;
  status?: Status;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button";
}

const LargeTabs: React.FC<LargeTabsProps> = ({
  variant,
  status = "default",
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const activeIndex = {
    "1st": 0,
    "2nd": 1,
    "3rd": 2,
    "4th": 3,
    "5th": 4,
    default: 5,
  }[status];

  if (variant === "TabsSingle") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-[100px] h-[50px] rounded-[12px] bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disable:text-[#000000] disable:border-[#0000001A]  text-black  ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "TabsGroup") {
    const labels = ["All", "Advisor", "Family", "Households", "Members"];

    return (
      <div className="flex space-x-2">
        {labels.map((label, index) => (
          <button
            key={index}
            type={type}
            onClick={onClick}
            className={`px-6 py-2 h-[50px] rounded-[12px] border-1 border-[#0000001A] ${
              activeIndex === index
                ? "bg-[#252725] text-[#ffffff]"
                : "bg-[#FFFFFF03] text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  return null;
};

export default LargeTabs;
