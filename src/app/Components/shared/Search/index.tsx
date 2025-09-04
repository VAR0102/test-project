"use client";

import { useState } from "react";
type Variant = "Search";

interface SearchInputProps {
  variant: Variant;
  label?: string;
  error?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  rightIcon2?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const SearchInput = ({
  label = "Search",
  error = "Maximum 10 characters allowed",
  disabled = false,
  variant,
  leftIcon,
  rightIcon,
  rightIcon2,
}: SearchInputProps) => {
  const [value, setValue] = useState("");
  const isError = value.length > 10;
  if (variant === "Search") {
    return (
      <div className="relative w-[300px]">
        <input
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={label}
          className={`rounded-[12px] h-[60px] w-full px-4 pr-12 text-[16px] bg-white
          border border-[#0000001A] hover:border-[#00000066] outline-none
          placeholder-transparent focus:placeholder-transparent
        ${isError ? "border-[#F04438] hover:border-[#F04438]" : "border-[#0000001A] hover:border-[#00000066]"}`}
        />

        {!value && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
            {leftIcon && leftIcon}
            <span className="text-[#222222] text-lg">{label}</span>
          </div>
        )}

        {!value && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-1 pointer-events-none">
            {rightIcon && rightIcon}
            {rightIcon2 && rightIcon2}
          </div>
        )}
        {isError && <p className="text-[#F04438] text-sm mt-1">{error}</p>}
      </div>
    );
  }
};

export default SearchInput;
