const XIcon = ({
  width = 22,
  height = 22,
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49679 6.95195L12.4465 11.9017M17.3963 16.8514L12.4465 11.9017M12.4465 11.9017L7.49679 16.8514M12.4465 11.9017L17.3963 6.95195"
        stroke="#0D0D0D"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XIcon;
