import React, { ReactNode } from "react";

type Variant = "line" | "stuck" | "single" | "group";

interface TabItems {
  icon: ReactNode;
  rounded: string;
}

interface Icons {
  left: ReactNode;
  right: ReactNode;
}

interface TabProps {
  variant: Variant;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  items?: TabItems[];
  icons?: Icons[];
  labels?: string[];
}

const styles =
  "w-[50px] h-[50px] bg-[#FFFFFF03] border border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disabled:cursor-not-allowed disabled:pointer-events-none disabled:border-[#0000001A] disabled:opacity-50 text-black";

const Tab = ({
  variant,
  items = [],
  className = "",
  disabled = false,
  children,
  icons = [],
  labels = [],
}: TabProps) => {
    
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

  if (variant === "stuck") {
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

  if (variant === "single") {
    return (
      <button
        disabled={disabled}
        className={`w-[100px] h-[50px] rounded-[12px] border border-[#0000001A] text-black 
          bg-[#FFFFFF03] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-white
          disabled:text-[#00000080] disabled:border-[#0000001A] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] 
          ${className}`}
      >
        {children}
      </button>
    );
  }
  if (variant === "group") {
    return (
      <div className="flex space-x-2">
        {labels.map((label, index) => {
          return (
            <button
              key={index}
              disabled={disabled}
              className={`
                w-[100px] h-[50px] rounded-[12px] border border-[#0000001A] text-black 
          bg-[#FFFFFF03] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-white
          disabled:text-[#00000080] disabled:border-[#0000001A] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] 
          ${className}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};
export default Tab;
