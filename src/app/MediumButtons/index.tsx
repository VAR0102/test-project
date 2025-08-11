import AdvanceFilter from "../assets/icons/AdvanceIcon";
import MediumPlusIcon from "../assets/icons/MediumPlusIcon";
import PdfIcon from "../assets/icons/PdfIcon";
import SelectIcon from "../assets/icons/SelectIcon";

type Variant =
  | "PrimaryAdd"
  | "PrimarySelect"
  | "PrimaryFilter"
  | "PrimaryPdf"
  | "Secondary"
  | "TertiarySelect"
  | "TertiaryChose";

interface MeidumButtonsProps {
  variant: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button";
}

const variantStyles: Record<Variant, string> = {
  PrimaryAdd:
    "w-[170px] h-[50px] bg-[#FFFFFF03] text-[#000000] text-[16px] border-1 border-[#0000001A] rounded-[12px] shadow-lg hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] disabled:bg-[#FFFFFF03] disabled:text-[#000000]",
  PrimarySelect:
    "w-[150px] h-[50px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px] rounded-[12px] hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] disable:bg-[#FFFFFF03]",
  PrimaryFilter:
    "w-[200px] h-[50px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px] rounded-[12px] hover:bg-[#FCFDFE]  active:bg-[#3C5A4B] active:text-[#FFFFFF] disable:bg-[#FFFFFF03]",
  PrimaryPdf:
    "w-[150px] h-[50px] bg-[#000000] text-[#FFFFFF] rounded-[12px] text-[16px] hover: bg-[#000000] active:bg-[#222222] disable:bg-[#B3B3B3] ",
  Secondary:
    "w-[40px] h-[40px] bg-[#0000000D] rounded-[12px] hover:bg-[#F2F2F2] active:bg-[#FFFFFF] disable:bg-[#0000000D] ",

  TertiarySelect:
    "w-[160px] h-[40px] bg-[#FFFFFF03] border-1 border-[#0000001A] text-[16px]  rounded-[12px] hover:bg-[#FCFDFE] active:bg-[#3C5A4B] active:text-[#FFFFFF] disable:bg-[#FFFFFF03]",

  TertiaryChose:
    "w-[40px] h-[40px] bg-[#FFFFFF03] rounded-[10px] border-1 border-[#0000001A] hover:bg-[#FCFDFE] active:bg-[#F8F8F8] disable:bg-[#E0E0E0] ",
};

const MeidumButtons: React.FC<MeidumButtonsProps> = ({
  variant,
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const isPrimaryAdd = variant === "PrimaryAdd";
  const isPrimarySelect = variant === "PrimarySelect";
  const isPrimaryFilter = variant == "PrimaryFilter";
  const isPrimaryPdf = variant == "PrimaryPdf";
  const isTertiarySelect = variant === "TertiarySelect";
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${combinedClassName}`}
    >
      <span className="flex items-center justify-center gap-2">
        {isPrimaryAdd && (
          <MediumPlusIcon className="stroke-black group-active:stroke-white" />
        )}
        {isPrimaryFilter && (
          <AdvanceFilter className="stroke-black group-active:stroke-white" />
        )}
        {isPrimaryPdf && <PdfIcon />}

        {children}
        {isTertiarySelect && (
          <SelectIcon className="stroke-black group-active:stroke-white" />
        )}

        {isPrimarySelect && (
          <SelectIcon className="stroke-black group-active:stroke-white" />
        )}
        {isPrimaryFilter && (
          <SelectIcon className="stroke-black group-active:stroke-white" />
        )}
      </span>
    </button>
  );
};

export default MeidumButtons;
