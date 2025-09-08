import React, { ReactNode } from "react";

type Variant = "single" | "group";

interface GroupItem {
  icon: ReactNode;
  label: string;
}

interface NavigateProps {
  variant: Variant;
  onClick?: () => void;
  className?: string;
  children?: string;
  groupItems?: GroupItem[];
  disabled?: boolean;
  icon?: ReactNode;
}

const variantStyles = {
  single:
    "w-[12%] h-[90px] bg-[#FFFFFF] disabled:bg-[#E0E0E0] disabled:cursor-not-allowed disabled:opacity-70  hover:bg-[#FCFDFE] text-[16px] text-[#222222] rounded-[8px] active:bg-[#222222] active:text-[#FFFFFF] cursor-pointer",
  group:
    "h-[90px] rounded-[8px] text-[16px] cursor-pointer disabled:bg-[#E0E0E0] disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#FCFDFE] active:bg-[#222222] active:text-[#FFFFFF]",
};

const Navigate = ({
  variant,
  onClick,
  className = "",
  groupItems = [],
  children = "Household",
  disabled = false,
  icon,
}: NavigateProps) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`;

  if (variant === "group") {
    return (
      <div className="grid grid-cols-2 w-[25%] gap-2">
        {groupItems.map((item, index) => {
          return (
            <button
              key={index}
              onClick={onClick}
              disabled={disabled}
              className={`${combinedClassName} `}
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
          {icon && icon}
          <span className="text-black group-active:text-white text-[16px]">
            {children}
          </span>
        </span>
      </button>
    );
  }
};

export default Navigate;
