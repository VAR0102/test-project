"use client";
import React, { useState, useEffect, ReactNode } from "react";

type Size = "large" | "small";

interface DropDownProps {
  size: Size;
  label?: string;
  options: string[];
  error?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  endIcon?: ReactNode;
}

const DropDown = ({
  size,
  label = "",
  options,
  error = "",
  disabled = false,
  rightIcon,
  endIcon,
}: DropDownProps) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [err, setError] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    setError("");
  };

  useEffect(() => {
    const close = () => {
      setIsOpen(false);

      if (!selected) {
        setError("Please select an option");
      }
    };

    if (isOpen) {
      window.addEventListener("click", close);
    }
  }, [isOpen, selected]);

  const styles =
    "rounded-[10px] h-[50px] text-[20px] border bg-white px-3 border-[#0000001A] hover:border-[#00000066] pt-6 pr-12 relative outline-none cursor-pointer transition duration-200";

  const baseClass = `${styles}`;
  const smallClass = `${styles}`;

  if (size === "large") {
    return (
      <div className="relative w-[600px]" onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${baseClass} ${
            err
              ? "border-[#F04438] hover:border-[#F04438]"
              : "border-[#0000001A] hover:border-[#00000066]"
          } ${disabled ? "cursor-not-allowed bg-[#F9F9F9] text-[#B3B3B3]" : ""} relative rounded-[10px] h-[60px] border flex items-center`}
        >
          <span className=" pb-6">{selected || label}</span>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-1">
            {endIcon}
            {rightIcon}
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full w-full mt-1 border border-[#0000001A] rounded-[10px] bg-white shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                  err
                    ? "border-[#F04438] hover:border-[#F04438]"
                    : "border-[#0000001A]"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        {err && <p className="text-[#F04438] text-sm mt-1">{err}</p>}
      </div>
    );
  }

  if (size === "small") {
    return (
      <div className="relative w-[300px]" onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${smallClass} ${
            err
              ? "border-[#F04438]"
              : "border-[#0000001A] hover:border-[#00000066]"
          } ${
            disabled
              ? "cursor-not-allowed bg-[#F9F9F9] text-[#B3B3B3] border-[#B3B3B3] opacity-20"
              : ""
          } relative rounded-[10px] h-[50px] border flex items-center px-3 `}
        >
          <span className="text-left pb-6">{selected || label}</span>

          <div className="absolute right-3  bottom-3 ">{rightIcon}</div>
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

        {err && <p className="text-[#F04438] text-sm mt-1">{error}</p>}
      </div>
    );
  }
};

export default DropDown;
