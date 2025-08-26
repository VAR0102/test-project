"use client";

import SignIcon from "@/app/assets/icons/SignIcon";

type Variant = "solid" | "group";
type Status = "number" | "check" | "empty" | `${number}`;

interface CheckboxProps {
  variant: Variant;
  status?: Status;
  onClick?: (index?: number) => void;
  className?: string;
  type?: "button";
  children?: React.ReactNode;
}

const groupItems = [
  "Verify your financial information",
  "Name and SSN",
  "Mobile number",
  "Date of birth",
  "Tax return address",
  "Years to collect",
  "Gathering tax information",
  "Authority documentation",
  "Sign agreement",
  "Confirm electronic signature",
  "Request approval",
];





const solidStyles: Record<Extract<Status, "number" | "check" | "empty">, string> = {
  number: "bg-[#3C5A4B] text-white border-[#0000001A]",
  check: "bg-white text-black border-[#0000001A]",
  empty: "bg-transparent text-black border-[#0000001A]",
};

const Checkbox: React.FC<CheckboxProps> = ({
  variant,
  status = "",
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  if (variant === "solid") {
    const style = solidStyles[status as "number" | "check" | "empty"];
    const content = status === "check" ? <SignIcon /> : children;

    return (
      <button
        type={type}
        onClick={() => onClick?.()}
        className={`w-[40px] h-[40px] border rounded-[12px] text-[16px] font-medium flex items-center justify-center ${style} ${className}`}
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
                type={type}
                onClick={() => onClick?.(index)}
                className={`w-[40px] h-[40px] border border-[#0000001A] rounded-[12px] text-[16px] font-medium flex items-center justify-center ${
                  index === statusIndex
                    ? "bg-[#3C5A4B] text-white"
                    : index < statusIndex
                    ? "bg-[#FFFFFF] text-white"
                    : "bg-transparent text-[#0000007d]  border-[#0000001A]"
                }`}
              >
                {index < statusIndex ? <SignIcon /> : index + 1}
              </button>
              {index < groupItems.length - 1 && (
                <div className="h-6 w-[1px] bg-[#0000001A]" />
              )}
            </div>
            <span
              className={`text-[16px] pt-2 ${
                index === statusIndex
                  ? "text-[#222222] font-semibold"
                  : index < statusIndex
                  ? "text-[#222222] opacity-70"
                  : "opacity-30"
              }`}
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
