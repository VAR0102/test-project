import { useState } from "react";
import ProfilIcon from "../assets/icons/ProfilIcon";
import SelectionIcon from "../assets/icons/SelectionIcon";

type Variant = 
| "DropDownLarge"
| "DropDownSmall";

type Status =
  | "default" 
  | "error"
  | "disabled";

interface DropDownProps {
    variant:Variant
    status?: Status
      label?: string;
      value?:string[]
      errorText?:string
      onChange?:(index:number, value:string ) => void

}
const statusStyle: Record<Status, string> = {
  default: "border border-[#0000001A]",
  error: "border border-[#F14922] text-black",
  disabled: "border border-[#0000001A] text-[#B3B3B3] bg-[#F9F9F9] cursor-not-allowed",
};



const DropDown: React.FC<DropDownProps> = ({
  variant,
  status = "default",
  label = "Label",
  errorText = "Text",
  onChange,
}) => {
  const getBaseStyle = (custom?: string) =>
    `border border-[#0000001A]" rounded-[10px] h-[70px] text-[20px] bg-white hover:border-[#00000066] active:border-[#00000066] outline-none ${statusStyle[status]} ${custom ?? ""}`;

  const isDisabled = status === "disabled";

  const [inputValue, setInputValue] = useState("");
  

  const handleChange = (index: number, value: string) => {
    if (onChange) onChange(index, value);
  };

 

  switch (variant) {
    case "DropDownLarge":
        
      return (
      <div className="relative w-[600px] ">
          <input
            type="text"
            disabled={isDisabled}
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              handleChange(0, val);
            }}
            className={`${getBaseStyle("w-full  px-4 pt-4 pb-2 pr-12")} peer`}
            placeholder=" "
          />
                     <label
             className={`absolute left-4 top-2 text-sm 
               ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"} 
               ${status === "error" ? "text-[#F04438]" : ""}
             `}
           >
            {label}

          </label>


          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
      
            <div className="cursor-pointer">
                <ProfilIcon/>
            <SelectionIcon />
            </div>
          </div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
          )}
        </div>
      );
      case "DropDownSmall":
      return(
  <div className="relative w-[300px] ">
          <input
            type="text"
            disabled={isDisabled}
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              handleChange(0, val);
            }}
            className={`${getBaseStyle("w-full  px-4 pt-4 pb-2 pr-12")} peer`}
            placeholder=" "
          />
                     <label
             className={`absolute left-4 top-2 text-sm 
               ${isDisabled ? "text-[#B3B3B3]" : "text-[#00000080]"} 
               ${status === "error" ? "text-[#F04438]" : ""}
             `}
           >
            {label}

          </label>


          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
      
            <div className="cursor-pointer">
            <SelectionIcon />
            </div>
          </div>

          {status === "error" && (
            <p className="text-[#F04438] text-sm mt-1">{errorText}</p>
          )}
        </div>
      );

      default:
      return null;
  }
};
export default DropDown