const PdfIcon = ({
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
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3193 3.44619H8.16008C6.23415 3.43879 4.65637 4.97305 4.61008 6.89897V16.8406C4.56841 18.7869 6.11285 20.398 8.05822 20.4397C8.09248 20.4397 8.12674 20.4406 8.16008 20.4397H15.5564C17.4916 20.3712 19.0212 18.7767 19.0101 16.8406V8.33138L14.3193 3.44619Z"
        stroke="white"
        stroke-width="1.11111"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.077 3.4375V6.13102C14.077 7.44583 15.1409 8.51157 16.4557 8.51528H19.0057"
        stroke="white"
        stroke-width="1.11111"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.453 10.0651V15.6586"
        stroke="white"
        stroke-width="1.11111"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6249 12.2456L11.4536 10.0651L9.28235 12.2456"
        stroke="white"
        stroke-width="1.11111"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PdfIcon;
