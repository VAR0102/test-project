"use client";
import React, { useState } from "react";

type Variant = "text" | "fields" | "date";

type Status = "default" | "error" | "disabled";

interface InputsProps {
  variant: Variant;
  status?: Status;
  label?: string;
  value: string[];
  errorText?: string;
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
  errorText = "Text",
  onChange,
}) => {
  const getBaseStyle = (custom?: string) =>
    `rounded-[10px] h-[70px] text-[20px]  border border-[#0000001A] hover:border hover:border-[#00000066] active:border active:border-[#00000066]  bg-white outline-none ${statusStyle[status]} ${custom ?? ""}`;

  const isDisabled = status === "disabled";

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
        <div className="relative w-[600px]">
          <input
            type="text"
            disabled={isDisabled}
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              handleChange(0, val);
            }}
            className={`${getBaseStyle("w-full  px-3.5 pt-[34px] pb-2 ")} `}
            placeholder=" "
          />
          <label
            className={`absolute left-4 top-2 text-[14px]  text-[#222222]
               ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"} 
               ${status === "error" ? "text-[#F04438]" : ""}
             `}
          >
            {label}
          </label>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"></div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
          )}
        </div>
      );

    case "fields":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {inputDataValues.map((val, index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  disabled={isDisabled}
                  value={val}
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
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                    handleInputDataChange(index, onlyNumbers);
                  }}
                />
                {index < 2 && <span className="text-black text-2xl">-</span>}
              </React.Fragment>
            ))}
          </div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm">{errorText}</p>
          )}
        </div>
      );

    case "date":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {["Month", "Day", "Year"].map((labelText, index) => (
              <React.Fragment key={labelText}>
                <div className="relative w-[100px]">
                  <input
                    type="text"
                    disabled={isDisabled}
                    value={inputDataValues[index] || ""}
                    onChange={(e) => {
                      const change = e.target.value.replace(/[^0-9]/g, "");
                      handleInputDataChange(index, change);
                    }}
                    className={`${getBaseStyle("w-full pt-5  px-4  ")} peer`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 top-[10px] text-xs 
    ${isDisabled ? "text-[#222222]" : "text-[#222222]"}
    ${status === "error" ? "text-[#F04438]" : ""}
  `} 
                  >
                    {labelText}
                  </label>
                </div>
                {index < 2 && <span className="text-xl">/</span>}
              </React.Fragment>
            ))}
          </div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm">{errorText}</p>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Inputs;
