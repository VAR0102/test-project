import SignIcon from "../assets/icons/SignIcon";

type Variant = "CheckSolid" | "CheckGroup";

type Status = "number" | "check" | "empty" | "1st" | "2nd";

interface CheckboxProps {
  variant: Variant;
  status?: Status;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button";
}

const statusStyles: Record<
  Extract<Status, "number" | "check" | "empty">,
  string
> = {
  number: "bg-[#3C5A4B] text-[#FFFFFF] border-[#0000001A]",
  check: "bg-[#FFFFFF] text-[#000000] border-[#0000001A]",
  empty: "bg-transparent text-[#000000] border-[#0000001A]",
};

const Checkbox: React.FC<CheckboxProps> = ({
  variant,
  status = "empty",
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  if (variant === "CheckSolid") {
    const style = statusStyles[status as "number" | "check" | "empty"];

    const content = status === "check" && !children ? <SignIcon /> : children;

    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-[40px] h-[40px] border rounded-[12px] text-[16px] font-medium flex items-center justify-center ${style} ${className}`}
      >
        {content}
      </button>
    );
  }

  return null;
};

export default Checkbox;
