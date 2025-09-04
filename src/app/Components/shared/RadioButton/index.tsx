/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";

type Variant = "single" | "group";

interface RadioButtonsProps {
  variant: Variant;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const RadioButtons = ({
  variant,
  onClick,
  className = "",
  children,
}: RadioButtonsProps) => {
  if (variant === "single") {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);

      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        onClick={handleClick}
        className={`relative w-[30px] h-[30px] bg-white border border-[#0000001A] rounded-full flex items-center justify-center ${className}`}
      >
        {active && <span className="w-[5px] h-[5px] bg-black rounded-full" />}
      </button>
    );
  }

  if (variant === "group") {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
    return (
      <button
        onClick={handleClick}
        className={`flex items-center justify-between hover:bg-[#FCFDFE] active:bg-[#E6E6E6]
           w-[300px] h-[60px] px-4 py-2 rounded-[12px] bg-[#F8F8F8] ${className}`}
      >
        <span className="text-sm font-medium text-black">{children}</span>
        <span className="relative w-[30px] h-[30px] rounded-full  bg-[#FFFFFF] flex items-center justify-center">
          {active && <span className="w-[5px] h-[5px] rounded-full bg-black" />}
        </span>
      </button>
    );
  }

  return null;
};

export default RadioButtons;
