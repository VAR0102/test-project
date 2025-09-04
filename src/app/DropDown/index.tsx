"use client";
import React, { useMemo, useRef, useState } from "react";
import ProfilIcon from "../assets/icons/ProfilIcon";
import SelectionIcon from "../assets/icons/SelectionIcon";

type Variant = "DropDownLarge" | "DropDownSmall";

type Status = "default" | "error" | "disabled";

interface DropDownProps {
  variant: Variant;
  status?: Status;
  label?: string;
  items: string[];
  value?: string;
  errorText?: string;
  onChange?: (value: string) => void;
}

const statusStyle: Record<Status, string> = {
  default: "border border-[#0000001A]",
  error: "border border-[#F14922] text-black",
  disabled: "border border-[#0000001A] text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed",
};

const DropDown: React.FC<DropDownProps> = ({
  variant,
  status = "default",
  label = "Label",
  items,
  value,
  errorText = "Text",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(value ?? "");
  const isDisabled = status === "disabled";

  const selectedValue = value ?? internalValue;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const widthClass = useMemo(() => {
    return variant === "DropDownLarge" ? "w-[600px]" : "w-[300px]";
  }, [variant]);

  const getBaseStyle = (custom?: string) =>
    `rounded-[10px] h-[70px] text-[20px] bg-white outline-none ${statusStyle[status]} ${custom ?? ""}`;

  const toggleOpen = () => {
    if (isDisabled) return;
    setIsOpen((prev) => !prev);
  };

  const close = () => setIsOpen(false);

  const handleSelect = (item: string) => {
    if (isDisabled) return;
    setInternalValue(item);
    if (onChange) onChange(item);
    setIsOpen(false);
  };

  // Close on click outside (simple capture)
  React.useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(event.target as Node)) return;
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", onDocumentClick);
    }
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${widthClass}`}>
      <input
        type="text"
        readOnly
        disabled={isDisabled}
        value={selectedValue}
        onClick={toggleOpen}
        className={`${getBaseStyle(
          variant === "DropDownLarge"
            ? "w-full px-4 pt-5 pb-2 pr-12"
            : "w-full px-4 pt-4 pb-2 pr-12"
        )} ${isOpen ? "border-[#00000066]" : ""} cursor-pointer`}
        placeholder=" "
      />

      <label
        className={`absolute left-4 top-2 text-sm 
          ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"} 
          ${status === "error" ? "text-[#F04438]" : ""}
        `}
      >
        {label}
      </label>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        {variant === "DropDownLarge" && <ProfilIcon />}
        <button
          type="button"
          onClick={toggleOpen}
          className="cursor-pointer outline-none"
          aria-label="Toggle dropdown"
        >
          <SelectionIcon />
        </button>
      </div>

      {isOpen && (
        <ul
          className={`absolute z-10 left-0 mt-1 max-h-60 overflow-auto rounded-[10px] bg-white shadow-lg border border-[#0000001A] ${widthClass}`}
        >
          {items.length === 0 && (
            <li className="px-4 py-2 text-[#00000080]">No items</li>
          )}
          {items.map((item) => {
            const isSelected = item === selectedValue;
            return (
              <li
                key={item}
                className={`px-4 py-2 text-[16px] hover:bg-[#F5F5F5] cursor-pointer ${
                  isSelected ? "bg-[#F0F0F0] font-semibold" : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}

      {status === "error" && (
        <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
      )}
    </div>
  );
};

export default DropDown;
