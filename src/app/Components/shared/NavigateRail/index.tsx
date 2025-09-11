"use client";
import React, { ReactNode } from "react";
import Link from "next/link";

type Variant = "single" | "group";

interface dropdownItem {
  icon: ReactNode;
  label: string;
  href: string;
}

interface NavigateRailProps {
  variant: Variant;
  className?: string;
  children?: string;
  disabled?: boolean;
  dropdownItems?: dropdownItem[];
  icon?: ReactNode;
}

const variantStyles = {
  single:
    "w-full h-[25px] text-[#222222] hover:text-[#222222] hover:opacity-80 active:opacity-50 disabled:opacity-20 cursor-pointer",
  group:
    "w-full h-[40px] flex items-center justify-between px-3 py-2 text-[#222] cursor-pointer disabled:opacity-20",
};

const NavigateRail = ({
  variant,
  className = "",
  children,
  disabled = false,
  dropdownItems = [],
  icon,
}: NavigateRailProps) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`;

  if (variant === "group") {
    return (
      <div className="flex flex-col">
        <button disabled={disabled} className={`${variantStyles}`}>
          <span className="flex items-center gap-2 font-bold  disabled:opacity-20 cursor-pointer">
            {icon && icon}
            Resources
          </span>
        </button>

        <div className="flex flex-col gap-1 p-2 w-[200px]">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-2 w-120 text-[#222] px-2 py-1 ml-5 ${
                index === 0 ? "" : "opacity-60"
              } hover:opacity-80 cursor-pointer`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "single") {
    return (
      <Link href="/verification" className={combinedClassName}>
        <span className="flex items-center flex-row gap-2">
          {icon && icon}
          {children}
        </span>
      </Link>
    );
  }
};

export default NavigateRail;
