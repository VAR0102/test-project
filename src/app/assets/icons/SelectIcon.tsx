const SelectIcon = ({
  width = 12,
  height = 12,
  className = "",
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black group-active:stroke-white ${className}`}
    >
      <path
        d="M0.998291 0.998291L4.86552 4.43583C5.22639 4.7566 5.77019 4.7566 6.13106 4.43583L9.99829 0.998291"
        stroke="currentColor"
        strokeWidth="1.11111"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SelectIcon;
