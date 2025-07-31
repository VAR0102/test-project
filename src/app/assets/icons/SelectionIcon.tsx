
const SelectionIcon = ({
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
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41162 10.9307L12.3723 15.3401C12.7511 15.6769 13.3221 15.6769 13.701 15.3401L18.6616 10.9307"
        stroke="#010101"
        stroke-width="1.11111"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default SelectionIcon;
