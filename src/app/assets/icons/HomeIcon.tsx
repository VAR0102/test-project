const HomeIcon = ({
  width = 22,
  height = 22,
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-black fill-black group-active:stroke-white ${className}`}
    >
      <path
        d="M13.8924 3.76048C12.91 2.74586 11.2828 2.74586 10.3004 3.76047L5.50189 8.71621C5.22631 9.00082 5.04112 9.36063 4.96967 9.75031C4.38691 12.9283 4.34389 16.1817 4.84242 19.374L5.01893 20.5042C5.07468 20.8612 5.38214 21.1244 5.74345 21.1244H9.09641C9.37255 21.1244 9.59641 20.9005 9.59641 20.6244V13.6244H14.5964V20.6244C14.5964 20.9005 14.8203 21.1244 15.0964 21.1244H18.4493C18.8106 21.1244 19.1181 20.8612 19.1738 20.5042L19.3503 19.374C19.8489 16.1817 19.8059 12.9283 19.2231 9.7503C19.1516 9.36063 18.9665 9.00082 18.6909 8.71621L13.8924 3.76048Z"
        stroke="currentColor"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeIcon;
