import AdderIcon from "@/app/assets/icons/AdderIcon";
import FileIcon from "@/app/assets/icons/FileIcon";
import HomeIcon from "@/app/assets/icons/HomeIcon";
import SmileIcon from "@/app/assets/icons/SmileIcon";

type Variant = "NavigationSingle" | "NavigationGroup";

interface NavigateProps {
  variant: Variant;
  onClick?: () => void;
  className?: string;
  type?: "button";
  children?: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  NavigationSingle:
    "w-[150px] h-[90px] bg-[#FFFFFF] hover:bg-[#FCFDFE] text-[16px] text-[#222222] rounded-[8px] active:bg-[#222222] active:text-[#FFFFFF] cursor-pointer",
  NavigationGroup: "",
};

const groupItems = [
  { icon: <HomeIcon/>, label: "Household" },
  { icon: <SmileIcon />, label: "Individuals" },
  { icon: <AdderIcon />, label: "Verify Tax ID" },
  { icon: <FileIcon />, label: "Resources " },
];

const Navigate: React.FC<NavigateProps> = ({
  variant,
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  if (variant === "NavigationGroup") {
    return (
      <div className="grid grid-cols-2 gap-4">
        {groupItems.map((item, idx) => {
          const isFourth = idx === 3;
          const buttonClass = isFourth
            ? "bg-[#222222] text-white"
            : "bg-[#FFFFFF] text-[#222222] ";

          return (
            <button
              key={idx}
              type={type}
              onClick={onClick}
              className={`w-[150px] h-[90px] rounded-[8px] text-[16px] cursor-pointer ${buttonClass}`}
            >
              <span className="flex items-center flex-col gap-2">
                {item.icon}
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      <span className="flex items-center flex-col gap-2 ">
        <HomeIcon className="stroke-[#FFFFFF] group-active:stroke-white" />
        {children}
      </span>
    </button>
  );
};

export default Navigate;
