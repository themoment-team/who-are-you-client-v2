interface ArrowProps {
  flip?: boolean;
}

const Arrow = ({ flip = false }: ArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    style={{
      transform: flip ? 'rotate(180deg)' : undefined,
      cursor: 'pointer',
    }}
  >
    <path
      d="M23.625 6.75L12.375 18L23.625 29.25"
      stroke="#222222"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={1}
    />
  </svg>
);

export default Arrow;
