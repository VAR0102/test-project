"use client";
interface ToggleProps {
  disabled?: boolean;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({
  disabled = false,
  onChange,
  isChecked,
}: ToggleProps) => {
  return (
    <button
      onClick={() => onChange(isChecked)}
      disabled={disabled}
      className={`relative cursor-pointer flex w-[60px] h-[30px] rounded-[20px] items-center transition-all duration-300
        ${isChecked ? "bg-[#3C5A4B]" : "bg-[#E6E6E6]"}
        ${disabled ? "cursor-not-allowed bg-gray-200" : ""}`}
    >
      <span
        className={`w-[22px] h-[22px] bg-white rounded-full transition-all duration-300 ${
          isChecked ? "ml-[34px]" : "ml-1"
        }`}
      />
    </button>
  );
};

export default Toggle;
