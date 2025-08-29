"use client";

import React from "react";
import Link from "next/link";

import FileIcon2 from "@/app/assets/icons/FileIcon2";
import AccIcon from "@/app/assets/icons/AccIcon";
import AssetsIcon from "@/app/assets/icons/AssetsIcon";
import BudgetIcon from "@/app/assets/icons/BudgetIcon";
import ChatIcon from "@/app/assets/icons/ChatIcon";
import CurrencyIcon from "@/app/assets/icons/CurrecnyIcon";
import DropArrowIcon from "@/app/assets/icons/DropArrowIcon";
import HeatIcon from "@/app/assets/icons/HeatIcon";
import LiabilIcon from "@/app/assets/icons/LiabilIcon";
import MonitorIcon from "@/app/assets/icons/MonitorIcon";
import NewFileIcon from "@/app/assets/icons/NewFileIcon";
import SmoogVerifyIcon from "@/app/assets/icons/SmoogVerifyIcon";
import TaxToolIcon from "@/app/assets/icons/TaxToolIcon";
import VerifIcon from "@/app/assets/icons/VerifIcon";

type Variant = "single" | "group";

interface NavigateRailProps {
  variant: Variant;
  onClick?: () => void; // 
  className?: string;
  type?: "button";
  children?: React.ReactNode;
  disabled?: boolean;
}

const variantStyles = {
  single:
    "w-[110px] h-[25px] text-[#222222] hover:text-[#222222] hover:opacity-80 active:opacity-50 disabled:opacity-20 cursor-pointer",
  group: "",
};


const dropdownItems = [
  { icon: <FileIcon2 />, label: "All", href: "/all" },
  { icon: <SmoogVerifyIcon />, label: "Verification", href: "/verification" },
  { icon: <CurrencyIcon />, label: "Income", href: "/income" },
  { icon: <AssetsIcon />, label: "Assets", href: "/assets" },
  { icon: <LiabilIcon />, label: "Tax Records", href: "/tax-records" },
  { icon: <AccIcon />, label: "Associated Accounts", href: "/accounts" },
  { icon: <BudgetIcon />, label: "Budgeting", href: "/budgeting" },
  { icon: <MonitorIcon />, label: "Monitor", href: "/monitor" },
  { icon: <TaxToolIcon />, label: "Tax Filing Tools", href: "/tax-tools" },
  { icon: <ChatIcon />, label: "Client Communication Aids", href: "/communication" },
  { icon: <NewFileIcon />, label: "Compliance & Legal Updates", href: "/compliance" },
  { icon: <HeatIcon />, label: "HeatIcon", href: "/heat" },
];

const NavigateRail  = ({
  variant,
  onClick,
  className = "",
  type = "button",
  children,
  disabled=false,
}:NavigateRailProps) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  if (variant === "group") {
    return (
      <div className="flex flex-col">
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className="w-[200px] h-[40px] flex items-center justify-between px-3 py-2 text-[#222] cursor-pointer disabled:opacity-20"
        >
          <span className="flex items-center gap-2 font-bold  disabled:opacity-20">
            {<DropArrowIcon />}
            Resources
          </span>
        </button>

        <div className="flex flex-col gap-1 p-2 w-[200px]">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-2 w-full text-[#222] px-2 py-1 ml-5 ${
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
      <Link
        href="/verification" 
        className={combinedClassName}
      >
        <span className="flex items-center flex-row gap-2">
          <VerifIcon />
          {children}
        </span>
      </Link>
    );
  }
};

export default NavigateRail;
