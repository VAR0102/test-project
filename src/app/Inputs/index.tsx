"use client";
import React, { useState } from "react";

type Variant = "InputText" | "InputFields" | "InputData";
type Status =
  | "default"
  | "hover"
  | "active"
  | "inactive"
  | "error"
  | "disabled";

interface InputsProps {
  variant: Variant;
  status?: Status;
  label?: string;
  value?: string[];
  errorText?: string;
  onChange?: (index: number, value: string) => void;
}

const statusStyle: Record<Status, string> = {
  default: "border border-[#0000001A]",
  hover: "border border-[#00000066]",
  active: "border border-[#00000066]",
  inactive: "border border-[#00000066] text-black font-semibold",
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
    `rounded-[10px] h-[70px] text-[20px] bg-white outline-none ${statusStyle[status]} ${custom ?? ""}`;

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
    case "InputText":
      return (
        <div className="relative w-[600px] ">
          <input
            type="text"
            disabled={isDisabled}
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              handleChange(0, val);
            }}
            className={`${getBaseStyle("w-full  px-4 pt-5 pb-2")} peer`}
            placeholder=" "
          />
          <label
            className={`absolute left-4 top-[18px] text-sm transition-all duration-200 ease-in-out 
              ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"} 
              peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-base 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black
              ${inputValue ? "top-2 text-[16px] text-black" : ""}
              ${status === "error" ? "text-[#F04438]" : ""}
            `}
          >
            {label}
          </label>

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
          )}
        </div>
      );

    case "InputFields":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {[0, 1, 2].map((index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  disabled={isDisabled}
                  placeholder={
                    status === "inactive" || status === "error"
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
            <p className="text-[#F04438] text-sm">{errorText}</p>
          )}
        </div>
      );

    case "InputData":
      return (
        <div className="space-y-1 w-[400px]">
          <div className="flex items-center space-x-2">
            {["Month", "Year", "Day"].map((labelText, index) => (
              <React.Fragment key={labelText}>
                <div className="relative w-[100px]">
                  <input
                    type="text"
                    disabled={isDisabled}
                    value={inputDataValues[index] || ""}
                    onChange={(e) =>
                      handleInputDataChange(index, e.target.value)
                    }
                    className={`${getBaseStyle("w-full pt-5 pb-2 text-center px-2")} peer`}
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-2 top-[4px] text-xs 
    ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"}
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
