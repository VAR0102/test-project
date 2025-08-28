"use client";
import CommandIcon from "@/app/assets/icons/CommandIcon";
import SearchIcon from "@/app/assets/icons/SearchIcon";
import SIcon from "@/app/assets/icons/SIcon";
import { useState } from "react";

type Variant = "SearchInput";

type Status = "default" | "error" | "disabled";

interface SearchInputProps {
  variant: Variant;
  status?: Status;
  label?: string;
  value?: string[];
  errorText?: string;
  onChange?: (index: number, value: string) => void;
}

const statusStyle: Record<Status, string> = {
  default: "border border-[#0000001A]",
  error: "border border-[#F14922] text-black",
  disabled:
    "border border-[#0000001A] text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed",
};

const SearchInput: React.FC<SearchInputProps> = ({
  variant,
  status = "default",
  label = "Search...",
  errorText = "Text",
  onChange,
}) => {
  const getBaseStyle = (custom?: string) =>
    `rounded-[12px] h-[60px] text-[16px] bg-white hover:border-[#00000066] active:border-[#00000066] outline-none  ${statusStyle[status]} ${custom ?? ""}`;

  const isDisabled = status === "disabled";

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (onChange) onChange(index, value);
  };

  switch (variant) {
    case "SearchInput":
      return (
        <div className="relative w-[300px]">
          <input
            type="text"
            disabled={isDisabled}
            value={inputValue}
            onFocus={() => {
              setIsFocused(true);
              setInputValue("");
            }}
            onBlur={() => {
              if (inputValue === "") setIsFocused(false);
            }}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              handleChange(0, val);
            }}
            className={`${getBaseStyle("w-full px-4 pt-4 pb-2 pr-12")}`}
            placeholder=" "
          />

          {!isFocused && inputValue === "" && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
              <SearchIcon />
              <span className="text-[#222222] text-lg">{label}</span>
            </div>
          )}

          {!isFocused && inputValue === "" && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center  pointer-events-none">
              <CommandIcon />
              <SIcon />
            </div>
          )}

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default SearchInput;
