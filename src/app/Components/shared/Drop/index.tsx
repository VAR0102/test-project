"use client";

import React, { ReactNode, useState } from "react";

interface DropProps {
  className?: string;
  children?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const Drop = ({
  className = "",
  children,
  icon,
  disabled = false,
}: DropProps) => {
  const [preview, setPreview] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`w-[630px] h-[290px] rounded-2xl flex justify-center ${
          disabled
            ? "bg-[#FFFFFF] cursor-not-allowed"
            : "bg-[#FFFFFF] hover:bg-[#B0DDFF66] cursor-pointer"
        }`}
        onClick={() => {
          if (!disabled) document.getElementById("fileInput")?.click();
        }}
      >
        <div
          className={`border border-dashed w-[600px] h-[260px] mt-5 rounded-lg p-4 text-center space-y-2 ${
            disabled
              ? "border-gray-400 bg-[#FFFFFF]"
              : "border-gray-400 hover:border-[#B0DDFF]"
          } ${className}`}
        >
          <div className="flex flex-row items-center justify-center mt-25 space-x-2">
            {icon && <div className="px-3">{icon}</div>}
            <p className="text-[#000000]">Drop pdf or image here</p>
            <span className="ml-4 text-[#000000]">or</span>

            <input
              id="fileInput"
              type="file"
              multiple
              className="hidden"
              onChange={(e) =>
                e.target.files &&
                setPreview(
                  Array.from(e.target.files).map((file) =>
                    URL.createObjectURL(file)
                  )
                )
              }
            />

            <button
              onClick={(e) => e.stopPropagation()}
              disabled={disabled}
              className={`px-3 py-1 ml-6 w-[100px] h-[50px] bg-[#F2F2F2] text-[#000000] rounded-[12px] text-[16px] cursor-pointer ${
                disabled
                  ? "disabled:bg-[#FFFFFF] disabled:opacity-20 cursor-not-allowed"
                  : ""
              }`}
            >
              Upload
            </button>
          </div>
          {children}
        </div>
      </div>

      {preview.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {preview.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded preview `}
              className="w-150 h-60 rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Drop;
