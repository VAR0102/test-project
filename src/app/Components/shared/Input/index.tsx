"use client";
import React, { useState } from "react";

type Variant = "text" | "fields" | "date";

interface InputsProps {
  variant: Variant;
  label?: string;
  value?: string[];
  error?: string;
  disabled?: boolean;
  onChange?: (index: number, value: string) => void;
}

const Input = ({
  variant,
  label = "Label",
  error = "Text",
  disabled = false,
  onChange,
}: InputsProps) => {
  const getBaseStyle = (custom?: string) =>
    `rounded-[10px] h-[70px] text-[20px] border border-[#0000001A] 
     active:border active:border-[#00000066]  
     bg-white outline-none transition duration-300  ${custom ?? ""}`;

  const [inputValue, setInputValue] = useState("");
  const [inputDataValues, setInputDataValues] = useState<string[]>([
    "",
    "",
    "",
  ]);

  const handleInputDataChange = (index: number, value: string) => {
    const newValues = [...inputDataValues];
    newValues[index] = value;
    setInputDataValues(newValues);
    if (onChange) onChange(index, value);
  };

  switch (variant) {
    case "text":
      const isError = inputValue !== "" && !/[a-zA-Z]/.test(inputValue);

      return (
        <div className="w-[600px]">
          <label
            className={`flex flex-col px-4 pt-2 space-y-1 pb-1 rounded-[10px] border hover:border-[#00000066]
        ${disabled ? "text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed" : "text-[#222222] bg-white"}
        ${isError ? "border-[#F04438] hover:border-[#F04438]" : "border-[#0000001A]"}`}
          >
            <span className="text-[14px]">{label}</span>
            <input
              disabled={disabled}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="outline-none text-[20px] bg-transparent"
            />
          </label>

          {isError && <p className="text-[#F04438] text-sm mt-1">{error}</p>}
        </div>
      );

    case "fields":
      const maximumLengths = [3, 2, 4];
      const Error = !/[a-zA-Z]/.test(inputDataValues.join(""));

      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {[0, 1, 2].map((index) => (
              <React.Fragment key={index}>
                <input
                  disabled={disabled}
                  placeholder={
                    index === 0 ? "MMM" : index === 1 ? "YY" : "DDDD"
                  }
                  value={inputDataValues[index]}
                  onChange={(e) => handleInputDataChange(index, e.target.value)}
                  maxLength={maximumLengths[index]}
                  className={getBaseStyle(
                    `w-full text-center ${Error ? "border-[#F04438]" : "hover:border-[#00000066]"}
                    ${disabled ? "text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed" : "text-[#222222] bg-white"}`
                  )}
                />
                {index < 2 && <span className="text-black text-2xl">-</span>}
              </React.Fragment>
            ))}
          </div>

          {Error && <p className="text-[#F04438] text-sm">{error}</p>}
        </div>
      );

    case "date":
      const mxLength = [2, 2, 4];
      const letterError = /[a-zA-Z]/.test(inputDataValues.join(""));
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {["Month", "Day", "Year"].map((labelText, index) => (
              <React.Fragment key={labelText}>
                <label className="relative w-[100px]">
                  <span
                    className={`absolute left-4 top-[10px] text-xs
                      ${disabled ? "text-[#222222]" : "text-[#222222]"}
                    `}
                  >
                    {labelText}
                  </span>
                  <input
                    type="text"
                    disabled={disabled}
                    value={inputDataValues[index] || ""}
                    onChange={(e) => {
                      const change = e.target.value;
                      handleInputDataChange(index, change);
                    }}
                    className={getBaseStyle(
                      `w-full pt-4 px-4  ${letterError ? "border-[#F04438]" : "hover:border-[#00000066]"}
                    ${disabled ? "text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed" : "text-[#222222] bg-white"}`
                    )}
                    maxLength={mxLength[index]}
                    placeholder=" "
                  />
                </label>
                {index < 2 && <span className="text-xl">/</span>}
              </React.Fragment>
            ))}
          </div>
          {letterError && <p className="text-[#F04438] text-sm">{error}</p>}
        </div>
      );

    default:
      return null;
  }
};

export default Input;
