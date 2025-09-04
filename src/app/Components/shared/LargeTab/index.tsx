"use client";

import React from "react";

type Variant = "single" | "group";

interface LargeTabsProps {
  variant: Variant;
  children?: string;
  className?: string;
  disabled?: boolean;
  labels?: string[];
}

const LargeTab = ({
  variant,
  children,
  className = "",
  disabled = false,
  labels = [],
}: LargeTabsProps) => {
  if (variant === "single") {
    return (
      <button
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
              disabled={disabled}
              className={`
                
                w-[100px] h-[50px] rounded-[12px] border border-[#0000001A] text-black 
          bg-[#FFFFFF03] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-white
          disabled:text-[#00000080] disabled:border-[#0000001A] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] 
          ${className}`}
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

export default LargeTab;
