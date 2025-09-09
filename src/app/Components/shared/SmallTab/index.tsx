import React, { ReactNode } from "react";

type Variant = "line" | "group";

interface TabItems {
  icon: ReactNode;
  rounded: string;
}

interface Icons {
  left: ReactNode;
  right: ReactNode;
}

interface SmallTabsProps {
  variant: Variant;
  className?: string;
  disabled?: boolean;
  items?: TabItems[];
  icons?: Icons[];
}

const styles =
  "w-[50px] h-[50px] bg-[#FFFFFF03] border border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disabled:cursor-not-allowed disabled:pointer-events-none disabled:border-[#0000001A] disabled:opacity-50 text-black";

const SmallTab = ({
  variant,
  items = [],
  className = "",
  disabled = false,
  icons = [],
}: SmallTabsProps) => {
  if (variant === "line") {
    return (
      <div className="flex flex-row gap-4">
        {icons.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <button
                className={`${styles} rounded-l-[12px] ${className}`}
                disabled={disabled}
              >
                <div className="flex justify-center">{item.left}</div>
              </button>
              <button
                className={`${styles} rounded-r-[12px] ${className}`}
                disabled={disabled}
              >
                <div className="flex justify-center">{item.right}</div>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "group") {
    return (
      <div className="flex">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2  ${styles} ${item.rounded} `}
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
