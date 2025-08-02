const DropArrowIcon = ({
  width = 18,
  height = 18,
}: {
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.68611 8.21086L13.2719 2.62508C13.9019 1.99511 13.4557 0.917971 12.5648 0.91797L1.39322 0.917969C0.502313 0.917969 0.0561444 1.99511 0.68611 2.62507L6.2719 8.21086C6.66242 8.60139 7.29559 8.60139 7.68611 8.21086Z"
        fill="#222222"
      />
    </svg>
  );
};
export default DropArrowIcon;
