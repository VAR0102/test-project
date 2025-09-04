import React, { ReactNode } from "react";

type Variant = "line" | "group";

type Status = "default" | "first" | "second";

interface TabItems {
  icon: ReactNode;
  rounded: string;
}

interface SmallTabsProps {
  variant: Variant;
  status?: Status;
  children: string;
  className?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  items?: TabItems[];
}

const SmallTab = ({
  variant,
  status = "default",
  items = [],
  children,
  className = "",
  disabled = false,
  iconLeft,
  iconRight,
}: SmallTabsProps) => {
  const activeIndex = {
    first: 0,
    second: 1,
    default: 2,
  }[status];

  if (variant === "line") {
    return (
      <div className="flex flex-row gap-4 ">
        <button
          className={`w-[50] h-[50px] rounded-l-[12px]   bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disabled:cursor-not-allowed disable:text-[#000000] disabled:pointer-events-none  disable:border-[#0000001A] disabled:opacity-50
              text-black  ${className}`}
          disabled={disabled}
        >
          <div className="flex justify-center">{iconLeft && iconLeft}</div>

          {children}
        </button>

        <button
          disabled={disabled}
          className={`w-[50] h-[50px] rounded-r-[12px] bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disable:text-[#000000] disabled:cursor-not-allowed  disabled:pointer-events-none  disable:border-[#0000001A]  disabled:opacity-50 text-black  ${className}`}
        >
          <div className="flex justify-center">{iconRight && iconRight}</div>
          {children}
        </button>
      </div>
    );
  }

  if (variant === "group") {
    return (
      <div className="flex">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 h-[50px] border border-[#0000001A] ${item.rounded} ${
              activeIndex === index
                ? "bg-[#252725] text-[#ffffff]"
                : "bg-[#FFFFFF03] text-black"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    );
  }

  return null;
};
export default SmallTab;
