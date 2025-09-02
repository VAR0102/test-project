import React from "react";

type Variant =
  | "primaryBig"
  | "primarySmall"
  | "secondaryBig"
  | "secondaryMedium"
  | "secondarySmall"
  | "tertiary"
  | "mediumAdd"
  | "mediumSelect"
  | "mediumFilter"
  | "mediumPdf"
  | "mediumSecondary"
  | "mediumTertiarySelect"
  | "mediumTertiaryChose";

interface ButtonProps {
  variant: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

const variantStyles = {
  primaryBig:
    "bg-[#3C5A4B] w-[610px] h-[60px] text-[#FFFFFF] rounded-[9px] hover:bg-[#66A184] active:bg-[#304A3D] disabled:bg-[#E0E0E0] disabled:text-[#00000066] disabled:cursor-not-allowed cursor-pointer",
  primarySmall:
    "w-[190px] h-[60px] rounded-[9px] text-[20px] bg-[#FFFFFF] shadow-lg hover:bg-[#FCFDFE] active:bg-[#F8F8F8] disabled:bg-[#E0E0E0] disabled:text-[#000000] disabled:cursor-not-allowed cursor-pointer",
  secondaryBig:
    "w-[340px] h-[60px] rounded-[9px] text-[16px] bg-[#F8F8F8] hover:bg-[#FCFDFE] active:bg-[#F2F2F2] disabled:bg-[#E0E0E0] disabled:text-[#000000] disabled:cursor-not-allowed cursor-pointer",
  secondaryMedium:
    "w-[160px] h-[55px] bg-[#3C5A4B] text-[16px] rounded-[9px] text-[#FFFFFF] hover:bg-[#66A184] active:bg-[#304A3D] disabled:bg-[#E0E0E0] disabled:text-[#000000] disabled:cursor-not-allowed cursor-pointer",
  secondarySmall:
    "w-[140px] h-[55px] bg-[#F2F2F2] text-[16px] rounded-[9px] text-[#000000] hover:bg-[#FCFDFE] active:bg-[#F2F2F2] disabled:bg-[#E0E0E0] disabled:text-[#000000] disabled:cursor-not-allowed cursor-pointer",
  tertiary:
    "w-[50px] h-[50px] rounded-[9px] bg-[#FEB027] hover:bg-[#FFC052] active:bg-[#D49018] disabled:bg-[#F8E3C1] disabled:cursor-not-allowed cursor-pointer",
  mediumAdd:
    "w-[170px] h-[50px] bg-[#FFFFFF03] text-[#000000] text-[16px] border-1 border-[#0000001A] rounded-[12px] shadow-lg hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] cursor-pointer disabled:bg-[#FFFFFF03] disabled:text-[#000000]",
  mediumSelect:
    "w-[150px] h-[50px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px] rounded-[12px] hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] cursor-pointer disable:bg-[#FFFFFF03]",
  mediumFilter:
    "w-[200px] h-[50px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px] rounded-[12px] hover:bg-[#FCFDFE]  active:bg-[#3C5A4B] active:text-[#FFFFFF] cursor-pointer disable:bg-[#FFFFFF03]",
  mediumPdf:
    "w-[150px] h-[50px] bg-[#000000] text-[#FFFFFF] rounded-[12px] text-[16px] hover: bg-[#000000] active:bg-[#222222] disable:bg-[#B3B3B3]cursor-pointer",
  mediumSecondary:
    "w-[40px] h-[40px] bg-[#0000000D] rounded-[12px] hover:bg-[#F2F2F2] active:bg-[#FFFFFF] disable:bg-[#0000000D] cursor-pointer",

  mediumTertiarySelect:
    "w-[160px] h-[40px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px]  rounded-[12px] hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] disable:bg-[#FFFFFF03] cursor-pointer",

  mediumTertiaryChose:
    "w-[40px] h-[40px] bg-[#FFFFFF03] rounded-[10px] border-1 border-[#0000001A] hover:bg-[#FCFDFE] active:bg-[#F8F8F8] disable:bg-[#E0E0E0]  cursor-pointer",
};

const Button = ({
  variant,
  children,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
  disabled,
}: ButtonProps) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClassName}>
      <span className="flex items-center justify-center gap-2">
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </span>
    </button>
  );
};

export default Button;
