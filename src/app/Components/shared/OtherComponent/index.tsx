"use client";


import React, {ReactNode,useState} from "react"
type Variant = "toglle" | "drop";

interface OtherComponentsProps {
  variant: Variant;
  className?: string;
  children?: string;
  leftIcon?: ReactNode;
  disabled?: boolean;
}
const solidStyles = {
  on: "w-[60px] h-[30px] bg-[#3C5A4B] rounded-[20px]",
  off: "w-[60px] h-[30px] bg-[#E6E6E6] rounded-[20px]",
};

const OtherComponent = ({
  variant,
  className = "",
  children,
  leftIcon,
  disabled = false,
}: OtherComponentsProps) => {
  const [toggled, setToggled] = useState(false);

  if (variant === "toglle") {
    return (
      <button
        onClick={() => {
          setToggled((state) => !state);
        }}
        className={`relative cursor-pointer flex items-center transition-all duration-300 ${
          toggled ? solidStyles.on : solidStyles.off
        } ${className}`}
      >
        <span
          className={`w-[24px] h-[24px] bg-white rounded-full transition-all duration-300 ${
            toggled ? "ml-[34px]" : "ml-1"
          }`}
        ></span>
        {children}
      </button>
    );
  }

  if (variant === "drop") {
    return (
      <div className="w-[630px] h-[290px] bg-[#FFFFFF] hover:bg-[#B0DDFF66] disabled:bg-[#FFFFFF] disabled:hover:bg-[#FFFFFF] disabled:hover:opacity-20  rounded-2xl flex justify-center ">
        <div
          className={`border border-dashed disabled:border:opacity-20 w-[600px] h-[260px] border-gray-400 hover:border-[#B0DDFF] disabled:bg-[#FFFFFF] disabled:hover:bg-[#FFFFFF] disabled:opacity-20 mt-5 rounded-lg p-4 text-center space-y-2 ${className}`}
        >
          <div className="flex flex-row text-center items-center justify-center mt-25 space-y-2">
            <div className="px-3">{leftIcon && leftIcon}</div>
            <p className="flex text-[#000000]">Drop pdf or image here</p>
            <span className="ml-4 text-[#000000]">or</span>

            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={(e) => console.log(e.target.files)}
            />

            <button
              onClick={() => document.getElementById("fileInput")?.click()}
              disabled={disabled}
              className="px-3 py-1 ml-6 w-[100px] h-[50px] bg-[#F2F2F2] text-[#000000] rounded-[12px] text-[16px] cursor-pointer disabled:bg-[#FFFFFF] disabled:hover:bg-[#FFFFFF] disabled:opacity-20"
            >
              Upload
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default OtherComponent;
