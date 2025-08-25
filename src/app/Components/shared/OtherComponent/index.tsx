"use client";

import UploadIcon from "@/app/assets/icons/UploadIcon";
import React from "react";


type Variant = "Toglle" | "Drop";
type Status = "on" | "off";

interface OtherComponentsProps {
  variant: Variant;
  status?: Status;
  onClick?: (index?: number) => void;
  className?: string;
  type?: "button";
  children?: React.ReactNode;
}

const solidStyles: Record<Status, string> = {
  on: "w-[60px] h-[30px] bg-[#3C5A4B] rounded-[20px]",
  off: "bg-[#E6E6E6] w-[60px] h-[30px] rounded-[20px]",
};

const OtherComponent: React.FC<OtherComponentsProps> = ({
  variant,
  status = "off",
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  if (variant === "Toglle") {
    const styles = solidStyles[status];
    return (
      <button
        type={type}
        onClick={() => onClick?.()}
        className={`relative cursor-pointer flex items-center justify-start ${styles} ${className}`}
      >
        <span className="w-[24px] h-[24px] ml-1 bg-white rounded-full"></span>
        {children}
      </button>
    );
  }

  if (variant === "Drop") {
    return (
      <div className="w-[630px] h-[290px] bg-[#FFFFFF] hover:bg-[#B0DDFF66]  rounded-2xl flex justify-center ">
        <div
          className={`border border-dashed w-[600px] h-[260px] border-gray-400 hover:border-[#B0DDFF] mt-5 rounded-lg p-4 text-center space-y-2  ${className}`}
        >
          <div className="flex flex-row text-center items-center justify-center mt-25  space-y-2">
            <div className="px-3">
              <UploadIcon />
            </div>
            <p className="flex text-[#000000]">Drop pdf or image here</p>
            <span className="ml-4  text-[#000000] ">or</span>

            <button
              onClick={() => onClick?.()}
              type="button"
              className="px-3 py-1 ml-6 w-[100px] h-[50px] bg-[#F2F2F2] text-[#000000]  rounded-[12px] text-[16px]"
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
