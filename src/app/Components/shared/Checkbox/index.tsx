"use client";

import SignIcon from "@/app/assets/icons/SignIcon";

type Variant = "solid" | "group";
type Status = "number" | "check" | "empty" | `${number}`;

interface CheckboxProps {
  variant: Variant;
  status?: Status;
  onClick?: (index?: number) => void;
  className?: string;
  groupItems?: string[];
  children?: React.ReactNode;
  disabled?: boolean;
}

const solidStyles = {
  number: "bg-[#3C5A4B] text-white border-[#0000001A]",
  check: "bg-white text-black border-[#0000001A]",
  empty: "bg-transparent text-black border-[#0000001A]",
};

const Checkbox = ({
  variant,
  status = " ",
  onClick,
  className = "",
  groupItems = [],
  children,
  disabled = false,
}: CheckboxProps) => {
  if (variant === "solid") {
    const style = solidStyles[status as "number" | "check" | "empty"];
    const content = status === "check" ? <SignIcon /> : children;

    return (
      <button
        onClick={() => !disabled && onClick?.()}
        className={`w-[40px] h-[40px] border rounded-[12px] text-[16px] font-medium flex items-center justify-center
          ${style} ${className}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {content}
      </button>
    );
  }

  if (variant === "group") {
    const parsedIndex = Number.parseInt(status);
    const statusIndex = isNaN(parsedIndex) ? -1 : parsedIndex - 1;

    return (
      <div className="flex flex-col items-start space-y-0">
        {groupItems.map((label, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="flex flex-col items-center">
              <button
                onClick={() => !disabled && onClick?.(index)}
                className={`w-[40px] h-[40px] border border-[#0000001A] rounded-[12px] text-[16px] font-medium flex items-center justify-center
                  ${
                    index === statusIndex
                      ? "bg-[#3C5A4B] text-white"
                      : index < statusIndex
                        ? "bg-[#FFFFFF] text-white"
                        : "bg-transparent text-[#0000007d] border-[#0000001A]"
                  }
                  ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {index < statusIndex ? <SignIcon /> : index + 1}
              </button>
              {index < groupItems.length - 1 && (
                <div className="h-6 w-[1px] bg-[#0000001A]" />
              )}
            </div>
            <span
              className={`text-[16px] pt-2
                ${
                  index === statusIndex
                    ? "text-[#222222] font-semibold"
                    : index < statusIndex
                      ? "text-[#222222] opacity-70"
                      : "opacity-30"
                }
                ${disabled ? "opacity-50" : ""}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Checkbox;
