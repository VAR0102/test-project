"use client";

import React from "react";

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

type Variant = "RailSingle" | "RailGroup";

interface NavigateRailProps {
  variant: Variant;
  onClick?: () => void;
  className?: string;
  type?: "button";
  children?: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  RailSingle:
    "w-[110px] h-[25px] text-[#222222] hover:text-[#222222] hover:opacity-80 active:opacity-50 disabled:opacity-20 cursor-pointer",
  RailGroup: "",
};

const dropdownItems = [
  { icon: <FileIcon2 />, label: "All" },
  { icon: <SmoogVerifyIcon />, label: "Verification" },
  { icon: <CurrencyIcon />, label: "Income" },
  { icon: <AssetsIcon />, label: "Assets" },
  { icon: <LiabilIcon />, label: "Tax Records" },
  { icon: <AccIcon />, label: "Associated Accounts" },
  { icon: <BudgetIcon />, label: " Budgeting" },
  { icon: <MonitorIcon />, label: " Monitor" },
  { icon: <TaxToolIcon />, label: " Tax Filing Tools" },
  { icon: <ChatIcon />, label: "Client Communication Aids" },
  { icon: <NewFileIcon />, label: "Compliance & Legal Updates" },
  { icon: <HeatIcon />, label: "HeatIcon" },
];

const NavigateRail: React.FC<NavigateRailProps> = ({
  variant,
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  if (variant === "RailGroup") {
    return (
      <div className="flex flex-col">
        <button
          type={type}
          onClick={onClick}
          className="w-[200px] h-[40px] flex items-center justify-between px-3 py-2 text-[#222] cursor-pointer"
        >
          <span className="flex items-center gap-2 font-bold">
            {<DropArrowIcon />}
            Resources
          </span>
        </button>

        <div className="flex flex-col gap-1 p-2 w-[200px]">
          {dropdownItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`flex items-center gap-2 w-100 text-[#222] px-2 py-1 ml-5 ${idx === 0 ? "" : "opacity-60"} cursor-pointer`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      <span className="flex items-center flex-row gap-2">
        <VerifIcon />
        {children}
      </span>
    </button>
  );
};

export default NavigateRail;
