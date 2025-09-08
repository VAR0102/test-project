"use client";

import React, { ReactNode, useState } from "react";

interface TogleProps {
  className?: string;
  children?: ReactNode;
  leftIcon?: ReactNode;
  disabled?: boolean;
}
const solidStyles = {
  on: "w-[60px] h-[30px] bg-[#3C5A4B] rounded-[20px]",
  off: "w-[60px] h-[30px] bg-[#E6E6E6] rounded-[20px]",
};

const Togle = ({
  
  className = "",
  children,
  disabled = false,
}: TogleProps) => {
  const [toggled, setToggled] = useState(false);


    return (
      <button
        onClick={() => {
          setToggled((state) => !state);
        }}
        disabled={disabled}
        className={`relative cursor-pointer flex items-center transition-all duration-300
       disabled:bg-gray  disabled:cursor-not-allowed ${
          toggled ? solidStyles.on : solidStyles.off
        } ${className}`}
      >
        <span
          className={`w-[22px] h-[22px] bg-white rounded-full transition-all duration-300 ${
            toggled ? "ml-[34px]" : "ml-1"
          }`}
        ></span>
        {children}
      </button>
    );
  }

export default Togle;
