const PlusIcon = ({
  width = 18,
  height = 18,
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.90314 1.17676L8.90314 9.00006M8.90314 16.8234L8.90314 9.00006M8.90314 9.00006L1.07984 9.00006M8.90314 9.00006L16.7264 9.00006"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default PlusIcon;
