"use client";

import React, { ReactNode, useState } from "react";

type Variant = "large" | "small";

interface TabItems {
  id: number;
  icon?: ReactNode;
  text?: string;
}

interface TabProps {
  variant: Variant;
  disabled?: boolean;
  items?: TabItems[];
  divided?: boolean;
}

const Tab = ({
  variant,
  items = [],
  disabled = false,
  divided = false,
}: TabProps) => {
  const [activeTabs, setActiveTabs] = useState<number[]>([]);

  const handleTabClick = (id: number) => {
    setActiveTabs((prev) =>
      prev.includes(id) 
    ? prev.filter((tabId) => tabId !== id) 
    : [...prev, id]
    );
  };
  const baseStyles = "border border-[#0000001A] transition-colors duration-200";
  const inactiveStyles = "bg-[#FFFFFF03] text-black hover:bg-gray-100";
  const activeStyles = "bg-black text-white";
  const disabledStyles = "cursor-not-allowed pointer-events-none opacity-50";

  if (variant === "small") {
    return (
      <div className={`flex flex-row ${divided ? "gap-8" : ""}`}>
        {items.map((item, index) => {
          const isActive = activeTabs.includes(item.id);
          return (
            <button
              onClick={() => handleTabClick(item.id)}
              key={item.id}
              disabled={disabled}
              className={`
                ${baseStyles}
                w-[50px] h-[50px] 
                flex items-center justify-center 
                ${disabled ? disabledStyles : "cursor-pointer"}
                ${isActive ? activeStyles : inactiveStyles}
                ${
                  divided
                    ? index % 2 === 0
                      ? "rounded-l-[12px]"
                      : "rounded-r-[12px]"
                    : index === 0
                      ? "rounded-l-[12px]"
                      : index === items.length - 1
                        ? "rounded-r-[12px]"
                        : ""
                }
              `}
            >
              {item.icon} {item.text}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className="flex items-center space-x-2">
        {items.map((item) => {
          const isActive = activeTabs.includes(item.id);
          return (
            <button
              onClick={() => handleTabClick(item.id)}
              key={item.id}
              disabled={disabled}
              className={`
                ${baseStyles}
                w-[100px] h-[50px] rounded-[12px]
                flex justify-center items-center
                ${disabled ? disabledStyles : "cursor-pointer"}
                ${isActive ? activeStyles : inactiveStyles}
              `}
            >
              {item.icon} {item.text}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};

export default Tab;
