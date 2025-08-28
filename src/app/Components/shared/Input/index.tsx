"use client";
import React, { useState } from "react";

type Variant = "text" | "fields" | "date";
type Status = "default" | "error" | "disabled";

interface InputsProps {
  variant: Variant;
  status?: Status;
  label?: string;
  value?: string[];
  error?: string;
  disabled?: boolean;
  onChange?: (index: number, value: string) => void;
}

const statusStyle: Record<Status, string> = {
  default: "border border-[#0000001A]",
  error: "border border-[#F14922] text-black",
  disabled:
    "border border-[#0000001A] text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed",
};

const Inputs: React.FC<InputsProps> = ({
  variant,
  status = "default",
  label = "Label",
  error = "Text",
  disabled = false,
  onChange,
}) => {
  const getBaseStyle = (custom?: string) =>
    `rounded-[10px] h-[70px] text-[20px] border border-[#0000001A] 
     hover:border hover:border-[#00000066] active:border active:border-[#00000066]  
     bg-white outline-none transition duration-300  ${statusStyle[status]} ${custom ?? ""}`;



  const [inputValue, setInputValue] = useState("");
  const [inputDataValues, setInputDataValues] = useState<string[]>([
    "",
    "",
    "",
  ]);

  const handleChange = (index: number, value: string) => {
    if (onChange) onChange(index, value);
  };

  const handleInputDataChange = (index: number, value: string) => {
    const newValues = [...inputDataValues];
    newValues[index] = value;
    setInputDataValues(newValues);
    if (onChange) onChange(index, value);
  };

  switch (variant) {
    case "text":
      return (
        <div className="w-[600px]">
          <label
            className={`flex flex-col px-3.5 pt-2 space-y-1 pb-1 rounded-[10px] border
            ${disabled ? "text-[#B3B3B3] bg-[#F9F9F9]" : "text-[#222222] bg-white"}
            ${status === "error" ? "border-[#F04438] text-[#222222]" : "border-[#0000001A]"}`}
          >
            <span className="text-[14px]">{label}</span>
            <input
              type="text"
              disabled={true}
              value={inputValue}
              onChange={(e) => {
                const val = e.target.value;
                setInputValue(val);
                handleChange(0, val);
              }}
              className="outline-none text-[20px] bg-transparent"
            />
          </label>

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{error}</p>
          )}
        </div>
      );

    case "fields":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {[0, 1, 2].map((index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  disabled={true}
                  placeholder={
                    status === "default"
                      ? index === 0
                        ? "MM"
                        : index === 1
                          ? "YYYY"
                          : "DD"
                      : ""
                  }
                  className={getBaseStyle("w-[80px] text-center")}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                {index < 2 && <span className="text-black text-2xl">-</span>}
              </React.Fragment>
            ))}
          </div>
          {status === "error" && (
            <p className="text-[#F04438] text-sm">{error}</p>
          )}
        </div>
      );

    case "date":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {["Month", "Day", "Year"].map((labelText, index) => (
              <React.Fragment key={labelText}>
                <label className="relative w-[100px]">
                  <span
                    className={`absolute left-4 top-[10px] text-xs
                      ${disabled ? "text-[#222222]" : "text-[#222222]"}
                      ${status === "error" ? "text-[#F04438]" : ""}
                    `}
                  >
                    {labelText}
                  </span>
                  <input
                    type="text"
                    disabled={disabled}
                    value={inputDataValues[index] || ""}
                    onChange={(e) => {
                      const change = e.target.value.replace(/[^0-9]/g, "");
                      handleInputDataChange(index, change);
                    }}
                    className={`${getBaseStyle("w-full pt-5 px-4 ")}`}
                    placeholder=" "
                  />
                </label>
                {index < 2 && <span className="text-xl">/</span>}
              </React.Fragment>
            ))}
          </div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm">{error}</p>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Inputs;
