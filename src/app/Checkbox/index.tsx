"use client";
import SignIcon from "../assets/icons/SignIcon";

type Variant = "CheckSolid" | "CheckGroup";

type Status =
  | "number"
  | "check"
  | "empty"
  | "1st"
  | "2nd"
  | "3rd"
  | "4th"
  | "5th"
  | "6th"
  | "7th"
  | "8th"
  | "9th"
  | "10th"
  | "11th";

interface CheckboxProps {
  variant: Variant;
  status?: Status;
  onClick?: (index?: number) => void;
  className?: string;
  type?: "button";
  children?: React.ReactNode;
}
const groupItems = [
  "Verify your financial information ",
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

const solidStyles: Record<
  Extract<Status, "number" | "check" | "empty">,
  string
> = {
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
  if (variant === "CheckSolid") {
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

  if (variant === "CheckGroup") {
    const statusIndexMap = {
      "1st": 0,
      "2nd": 1,
      "3rd": 2,
      "4th": 3,
      "5th": 4,
      "6th": 5,
      "7th": 6,
      "8th": 7,
      "9th": 8,
      "10th": 9,
      "11th": 10,
    };

    const statusIndex = statusIndexMap[status as keyof typeof statusIndexMap];

    return (
      <div className="flex flex-col items-start space-y-0">
        {groupItems.map((label, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="flex flex-col items-center ">
              <button
                type={type}
                onClick={() => onClick?.(index)}
                className={`w-[40px] h-[40px] border rounded-[12px] text-[16px] font-medium flex items-center justify-center ${
                  index === statusIndex
                    ? "bg-[#3C5A4B] text-white"
                    : "bg-transparent text-black opacity-30 border-[#0000001A]"
                }`}
              >
                {status === "2nd" && index === 0 ? <SignIcon /> : index + 1}
              </button>
              {index < groupItems.length - 1 && (
                <div className="h-4 w-px bg-gray-400 mt-1" />
              )}
            </div>
            <span
              className={`text-[16px] pt-2  ${
                index === statusIndex
                  ? "text-[#222222] font-semibold"
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
