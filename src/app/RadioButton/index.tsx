/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";

type Variant = "RadioSingle" | "RadioGroup";

interface RadioButtonsProps {
  variant: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button";
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  variant,
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  if (variant === "RadioSingle") {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive((prev) => !prev);
      onClick?.();
    };

    return (
      <button
        type={type}
        onClick={handleClick}
        className={`relative w-[30px] h-[30px] bg-white border border-[#0000001A] rounded-full flex items-center justify-center ${className}`}
      >
        {active && <span className="w-[8px] h-[8px] bg-black rounded-full" />}
      </button>
    );
  }
  if (variant === "RadioGroup") {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive((prev) => !prev);
      onClick?.();
    };

    return (
      <button
        type={type}
        onClick={handleClick}
        className={`flex items-center justify-between hover:bg-[#FCFDFE] active:bg-[#E6E6E6] w-[300px] h-[60px] px-4 py-2 rounded-[12px] bg-[#F8F8F8] ${className}`}
      >
        <span className="text-sm font-medium text-black">{children}</span>

        <span className="relative w-[30px] h-[30px] rounded-full  bg-[#FFFFFF] flex items-center justify-center">
          {active && <span className="w-[4px] h-[4px] rounded-full bg-black" />}
        </span>
      </button>
    );
  }

  return null;
};

export default RadioButtons;
