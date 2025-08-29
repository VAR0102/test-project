import TabsIcon1 from "@/app/assets/icons/TabsIcon1";
import TabsIcon2 from "@/app/assets/icons/TabsIcon2";

type Variant = "line" | "group";

type Status = "default" | "1" | "2";

interface SmallTabsProps {
  variant: Variant;
  status?: Status;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const SmallTabs: React.FC<SmallTabsProps> = ({
  variant,
  status = "default",
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  const activeIndex = {
    "1": 0,
    "2": 1,
    default: 2,
  }[status];

  if (variant === "line") {
    return (
      <div className="flex flex-row gap-4 ">
        <button
       onClick={onClick}
          className={`w-[50] h-[50px] rounded-l-[12px]   bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disabled:cursor-not-allowed disable:text-[#000000] disabled:pointer-events-none  disable:border-[#0000001A] disabled:opacity-50
              text-black  ${className}`}
          disabled={disabled}
        >
          <div className="flex justify-center">{<TabsIcon1 />}</div>

          {children}
        </button>

        <button
          onClick={onClick}
          disabled={disabled}
          className={`w-[50] h-[50px] rounded-r-[12px] bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disable:text-[#000000] disabled:cursor-not-allowed  disabled:pointer-events-none  disable:border-[#0000001A]  disabled:opacity-50 text-black  ${className}`}
        >
          <div className="flex justify-center">
            <TabsIcon2 />
          </div>
          {children}
        </button>
      </div>
    );
  }

  if (variant === "group") {
    const items = [
      { icon: <TabsIcon1 />, rounded: "rounded-l-[12px]" },
      { icon: <TabsIcon2 />, rounded: "rounded-r-[12px]" },
    ];

    return (
      <div className="flex">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={onClick}
            className={`px-4 py-2 h-[50px] border border-[#0000001A] ${item.rounded} ${
              activeIndex === index
                ? "bg-[#252725] text-[#ffffff]"
                : "bg-[#FFFFFF03] text-black"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    );
  }

  return null;
};
export default SmallTabs;
