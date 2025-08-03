const SignIcon = ({
  width = 17,
  height = 18,
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 1.15002L3.80769 8.85002L0.5 5.54233"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SignIcon;
