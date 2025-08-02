"use client";

import React from "react";
import VerifIcon from "../assets/icons/VerifIcon";
import AdderIcon from "../assets/icons/AdderIcon";

import DropArrowIcon from "../assets/icons/DropArrowIcon";
import FileIcon2 from "../assets/icons/FileIcon2";
import SmoogVerifyIcon from "../assets/icons/SmoogVerifyIcon";
import CurrencyIcon from "../assets/icons/CurrecnyIcon";
import AssetsIcon from "../assets/icons/AssetsIcon";
import LiabilIcon from "../assets/icons/LiabilIcon";
import AccIcon from "../assets/icons/AccIcon";
import BudgetIcon from "../assets/icons/BudgetIcon";
import MonitorIcon from "../assets/icons/MonitorIcon";
import TaxToolIcon from "../assets/icons/TaxToolIcon";
import ChatIcon from "../assets/icons/ChatIcon";
import NewFileIcon from "../assets/icons/NewFileIcon";
import HeatIcon from "../assets/icons/HeatIcon";

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
    "w-[110px] h-[25px] text-[#222222] hover:text-[#222222] active:opacity-50 disabled:opacity-20 cursor-pointer",
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
