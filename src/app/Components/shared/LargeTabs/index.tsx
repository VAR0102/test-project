"use client";

import React from "react";

type Variant = "single" | "group";
type Status = "default" | "1" | "2" | "3" | "4" | "5";

interface LargeTabsProps {
  variant: Variant;
  status?: Status;
  children?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  labels?: string[];
}

const LargeTabs = ({
  variant,
  status = "default",
  children,
  onClick,
  className = "",
  disabled = false,
  labels = [],
}: LargeTabsProps) => {
  const activeIndex = {
    "1": 0,
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    default: 5,
  }[status];

  if (variant === "single") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-[100px] h-[50px] rounded-[12px] border border-[#0000001A] text-black 
          bg-[#FFFFFF03] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-white
          disabled:text-[#00000080] disabled:border-[#0000001A] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] 
          ${className}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "group") {
    return (
      <div className="flex space-x-2">
        {labels.map((label, index) => {
          return (
            <button
              key={index}
              onClick={onClick}
              disabled={disabled}
              className={`px-6 py-2 h-[50px] rounded-[12px] border border-[#0000001A] 
                ${
                  activeIndex === index
                    ? "bg-[#252725] text-white"
                    : "bg-[#FFFFFF03] text-black"
                } 
                disabled:text-[#00000080] disabled:border-[#0000001A] disabled:bg-[#FFFFFF]  disabled:cursor-not-allowed`}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};

export default LargeTabs;
