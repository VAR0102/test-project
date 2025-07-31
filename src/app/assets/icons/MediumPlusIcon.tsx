const MediumPlusIcon = ({
  width = 18,
  height = 18,
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black group-active:stroke-white ${className}`}
    >
      <path
        d="M8.90314 1.17676L8.90314 9.00006M8.90314 16.8234L8.90314 9.00006M8.90314 9.00006L1.07984 9.00006M8.90314 9.00006L16.7264 9.00006"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
};

export default MediumPlusIcon;
