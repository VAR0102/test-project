const AdvanceFilter = ({
  width = 18,
  height = 18,
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
       viewBox="0 0 18 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black group-active:stroke-white ${className}`}
    >
       <path
    d="M16.5972 1.00024H0.722656L7.07246 8.50889V13.6999L10.2474 15.2873V8.50889L16.5972 1.00024Z"
    stroke="currentColor"
    stroke-width="1.1"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
  );
};

export default AdvanceFilter;

