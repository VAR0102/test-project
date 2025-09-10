"use client";
import React, { ReactNode, useState } from "react";

interface ToggleProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onChange: (value: boolean) => void; 
}

const Toggle = ({
  className = "",
  children,
  disabled = false,
  onChange,
}: ToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    if (disabled) 
      return;
    setIsOn(!isOn);
    onChange(!isOn); 
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`relative cursor-pointer flex items-center transition-all duration-300
        ${isOn ? "w-[60px] h-[30px] bg-[#3C5A4B] rounded-[20px]" : "w-[60px] h-[30px] bg-[#E6E6E6] rounded-[20px]"}
        ${disabled ? "cursor-not-allowed bg-gray-200" : ""} ${className}`}
    >
      <span
        className={`w-[22px] h-[22px] bg-white rounded-full transition-all duration-300 ${
          isOn ? "ml-[34px]" : "ml-1"
        }`}
      ></span>
      {children}
    </button>
  );
};

export default Toggle;
