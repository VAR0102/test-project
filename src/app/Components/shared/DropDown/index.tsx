"use client";
import React, { useState } from "react";

type Variant = "large" | "small";

interface DropDownProps {
  variant: Variant;
  label?: string;
  options: string[];
  error?: string;
  onChange?: (value: string) => void;
  profileIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const DropDown = ({
  variant,
  label = "",
  options,
  error = "",
  onChange,
  disabled = false,
  rightIcon,
  profileIcon,
}: DropDownProps) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  const baseClass =
    "rounded-[10px] h-[70px] text-[20px] border  bg-white border-[#0000001A] hover:border-[#00000066] px-3 pt-8 pr-12 relative outline-none cursor-pointer transition duration-200";
  const smallClass =
    "rounded-[10px] h-[50px] text-[20px] border bg-white px-3  border-[#0000001A] hover:border-[#00000066] pt-6 pr-12 relative outline-none cursor-pointer transition duration-200";

  if (variant === "large") {
    const isError = !error && selected === "";
    return (
      <>
        <div className="relative w-[600px]">
          <div
            onClick={() => setIsOpen((open) => !open)}
            className={`${baseClass} 
     ${isError ? "border-[#F04438] hover:border-[#F04438]" : "border-[#0000001A] hover:border-[#00000066]"} 
    ${disabled ? "cursor-not-allowed bg-[#F9F9F9] text-[#B3B3B3]" : ""} 
    flex items-center pb-8 justify-between`}
          >
            <span>{selected || label}</span>
            <div className="flex items-center space-x-1">
              {profileIcon && profileIcon}
              {rightIcon && rightIcon}
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-full  w-full mt-1 border border-[#0000001A] rounded-[10px] bg-white ">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-3 py-2 hover:bg-gray-100 cursor-pointer
                  ${error ? "border-[#F04438] hover:border-[#F04438]" : "border-[#0000001A]"}`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          {isOpen && <p className="text-[#F04438] text-sm mt-1">{error}</p>}
        </div>
      </>
    );
  }

  if (variant === "small") {
    return (
      <>
        <div className="relative w-[300px]">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${smallClass} border  ${
              disabled ? "cursor-not-allowed bg-[#F9F9F9] text-[#B3B3B3]" : ""
            } flex items-center pb-6 justify-between  `}
          >
            <span>{selected || label}</span>
            <div className="flex items-center space-x-1 ">
              {rightIcon && rightIcon}
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-1 border border-[#0000001A] rounded-[10px] bg-white shadow-lg z-10">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}

          {isOpen && <p className="text-[#F04438] text-sm mt-1">{error}</p>}
        </div>
      </>
    );
  }
};

export default DropDown;
