import React from "react";
import CursorRightIcon from "../assets/icons/CursorRightIcon";
import PlusIcon from "../assets/icons/PlusIcon";

type Variant =
  | "PrimaryBig"
  | "PrimarySmall"
  | "SecondaryBig"
  | "SecondaryMedium"
  | "SecondarySmall"
  | "Tertiary";

interface LargeButtonProps {
  variant: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" ;
}

const variantStyles: Record<Variant, string> = {
  PrimaryBig:
    "bg-[#3C5A4B] w-[610px] h-[60px] text-[#FFFFFF] rounded-[9px]  hover:bg-[#66A184]  active:bg-[#304A3D]  disabled:bg-[#E0E0E0]  disabled:text-[#00000066] disabled:cursor-not-allowedm cursor-pointer",
  PrimarySmall:
    "w-[190px] h-[60px] rounded-[9px] text-[20px] bg-[#FFFFFF] shadow-lg hover:bg-[#FCFDFE] active:bg-[#F8F8F8]  disable:bg-[#E0E0E0] disable:text-[#000000] ursor-pointer",
  SecondaryBig:
    "w-[340px] h-[60px] rounded-[9px]   text-[16px] bg-[#F8F8F8]   hover:bg-[#FCFDFE] active:bg-[#F2F2F2] disable:bg-[#E0E0E0]  disable:text-[#000000] disabled:cursor-not-allowed ursor-pointer ",
  SecondaryMedium:
    "w-[160px] h-[55px] bg-[#3C5A4B] text-[16px] rounded-[9px] text-[#FFFFFF] hover:bg-[#66A184]  active:bg-[#304A3D]  disable:bg-[#E0E0E0] disable:text-[#000000]  disabled:cursor-not-allowed ursor-pointer",
  SecondarySmall:
    "w-[140px] h-[55px] bg-[#F2F2F2] text-[16px] rounded-[9px] text-[#000000] hover:bg-[#FCFDFE] active:bg-[#F2F2F2] disable:bg-[#E0E0E0] disable:text-[#000000]  disabled:cursor-not-allowed cursor-pointer",
  Tertiary:
    "w-[50px] h-[50px] rounded-[9px] bg-[#FEB027] hover:bg-[#FFC052] active:bg-[#D49018] disable:bg-[#F8E3C1] cursor-pointer",
};

const LargeButton: React.FC<LargeButtonProps> = ({
  variant,
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  const isPrimary = variant === "PrimaryBig";
  const isSecondaryBig = variant === "SecondaryBig";
  const isSecondaryMedium = variant === "SecondaryMedium";
  const isSecondarySmall = variant === "SecondarySmall";

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      <span className="flex items-center justify-center gap-2">
        {isSecondaryBig && <PlusIcon />}
        {isSecondarySmall && <PlusIcon />}

        {children}

        {isPrimary && <CursorRightIcon />}
        {isSecondaryMedium && <CursorRightIcon />}
      </span>
    </button>
  );
};
export default LargeButton;
