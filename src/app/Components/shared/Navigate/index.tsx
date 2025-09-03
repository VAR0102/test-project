import HomeIcon from "@/app/assets/icons/HomeIcon"; 
import React, {ReactNode} from "react"

type Variant = "single" | "group";

interface GroupItem {
  icon: ReactNode;
  label: string;
}

interface NavigateProps {
  variant: Variant;
  onClick: () => void;
  className?: string;
  children?: string;
  groupItems?: GroupItem[];
  disabled?: boolean;
}


const variantStyles = {
  single:
    "w-[150px] h-[90px] bg-[#FFFFFF] disabled:bg-[#E0E0E0] disabled:cursor-not-allowed  hover:bg-[#FCFDFE] text-[16px] text-[#222222] rounded-[8px] active:bg-[#222222] active:text-[#FFFFFF] cursor-pointer",
  group: "",};

const Navigate = ({
  variant,
  onClick,
  className = "",
  groupItems = [],
  children = "Household",
  disabled = false,
}: NavigateProps) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  if (variant === "group") {
    return (
      <div className="grid grid-cols-2 w-70">
        {groupItems.map((item, index) => {
          const isFourth = index === 3;
          const buttonClass = isFourth
            ? "bg-[#222222] text-white"
            : "bg-[#FFFFFF] text-[#222222] ";

          return (
            <button
              key={index}
              onClick={onClick}
              disabled={disabled}
              className={`w-[150px] h-[90px] rounded-[8px] text-[16px] cursor-pointer ${buttonClass}`}
            >
              <span className="flex items-center flex-col gap-2">
                {item.icon}
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
  if (variant === "single") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group ${combinedClassName}`}
      >
        <span className="flex items-center flex-col gap-2 text-center">
          <HomeIcon className="stroke-black group-active:stroke-white" />
          <span className="text-black group-active:text-white text-[16px]">
            {children}
          </span>
        </span>
      </button>
    );
  }
};

export default Navigate;
