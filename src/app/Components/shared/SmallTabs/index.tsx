import TabsIcon1 from "@/app/assets/icons/TabsIcon1";
import TabsIcon2 from "@/app/assets/icons/TabsIcon2";


type Variant = "TabLine" | "TabGroup";

type Status = "default" | "1st" | "2nd";

interface SmallTabsProps {
  variant: Variant;
  status?: Status;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button";
}

const SmallTabs: React.FC<SmallTabsProps> = ({
  variant,
  status = "default",
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const activeIndex = {
    "1st": 0,
    "2nd": 1,
    default: 2,
  }[status];

  if (variant === "TabLine") {
    const isTabLine = variant === "TabLine";
    return (
      <div className="flex flex-row gap-4 ">
        <button
          type={type}
          onClick={onClick}
          className={`w-[50] h-[50px] rounded-l-[12px]   bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disable:text-[#000000] disable:border-[#0000001A]  text-black  ${className}`}
        >
          <div className="flex justify-center">
            {isTabLine && <TabsIcon1 />}
          </div>

          {children}
        </button>

        <button
          type={type}
          onClick={onClick}
          className={`w-[50] h-[50px] rounded-r-[12px] bg-[#FFFFFF03] border-1 border-[#0000001A] hover:bg-[#FFFFFF03] active:bg-[#252725] active:text-[#FFFFFF] disable:text-[#000000] disable:border-[#0000001A]  text-black  ${className}`}
        >
          <div className="flex justify-center">
            <TabsIcon2 />
          </div>
          {children}
        </button>
      </div>
    );
  }

  if (variant === "TabGroup") {
    const items = [
      { icon: <TabsIcon1 />, rounded: "rounded-l-[12px]" },
      { icon: <TabsIcon2 />, rounded: "rounded-r-[12px]" },
    ];

    return (
      <div className="flex">
        {items.map((item, index) => (
          <button
            key={index}
            type={type}
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
